import { autorun, makeAutoObservable, observable } from 'mobx'
import { observer } from 'mobx-react-lite';
import internal from 'stream';
import { useMemo, useState, createContext, useContext } from "react";

class Friend {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string
    ) {
        makeAutoObservable(this)
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    setName = (firstName: string, lastName: string) => {
        this.firstName = firstName
        this.lastName = lastName
    }
}


type FriendRespse = { id: number; firstName: string; lastName: string }
type FriendsResponse = FriendRespse[]

class FriendsStore {
    status = ""
    friends: Friend[] = []

    get isLoading() {
        return this.status === "pending"
    }

    get dataSize() {
        return this.friends.length
    }

    get minDataIndex() {
        return 0
    }
    get maxDataIndex() {
        return this.dataSize
    }

    get isDataAvailable() {
        return this.dataSize != 0
    }

    constructor() {
        makeAutoObservable(this)
    }

    // use generator + yield instead of async await - it allow mobx to map whole function as action(better performance).
    *fetchFriends() {
        this.status = "pending"
        try {
            console.log()
            let response: FriendsResponse = yield fetch("/data/friends.json").then((r) => r.json());
            this.friends = response.map(
                ({ id, firstName, lastName }) => new Friend(id, firstName, lastName)
            )
            this.status = "success"
        } catch (e) {
            this.status = "error"
        }
    }
}

const FriendsStoreContext = createContext<FriendsStore | null>(null)

const Toolbar = observer(({ }) => {
    const store = useContext(FriendsStoreContext)!
    const [dataIndex, setDataIndex] = useState(0)
    const { friends } = store

    const handleDataIndexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(event.target.value)
        const min = Number(event.target.min)
        const max = Number(event.target.max)

        value = Math.min(max, value)
        value = Math.max(min, value)
        event.target.value = value.toString()
        setDataIndex(value)
    }

    return (
        <>
            <button onClick={() => store.fetchFriends()}> Fetch data </button>
            {store.isDataAvailable &&
                <div>
                    <input type="number" min={store.minDataIndex} max={store.maxDataIndex - 1} defaultValue="0" onChange={handleDataIndexChange} />
                    <button
                        onClick={() => {
                            friends[dataIndex].setName("Chandler", `Bing ${Math.random()}`);

                        }}
                    >
                        Update
                    </button>
                </div>
            }
        </>
    )
})

type DetailsProps = {
    friend: Friend
}

const Details = observer(({ friend }: DetailsProps) => {
    return <li>{friend.fullName}</li>
})

const List = observer(() => {
    const store = useContext(FriendsStoreContext)!
    const { friends, isLoading } = store;

    if (isLoading) {
        return <div>Loading...</div>
    }
    else {
        return (
            <ul>
                {friends.map((f) => (
                    <Details key={f.id} friend={f}></Details>
                ))}
            </ul>
        )
    }
})

const MobxDemo = () => {
    const friendsStore = useMemo(() => new FriendsStore(), [])
    return (
        <FriendsStoreContext.Provider value={friendsStore}>
            <section>
                <Toolbar />
                <List />
            </section>
        </FriendsStoreContext.Provider>
    )
}

export default MobxDemo