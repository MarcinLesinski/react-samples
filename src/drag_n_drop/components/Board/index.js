import { createContext, useState } from 'react'
import List from '../List'
import styled from 'styled-components'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const ItemContext = createContext({
    markAsDone: null
})

const Container = styled.div`
    display: flex;
    height: 750px;
`
const Title = styled.h3`
    font-size: 1.5em;
    color: darkorange;
    font-weight: bold;
`

const Board = () => {
    const [items, setItmes] = useState(
        [
            {
                _id: 1,
                name: "item 1",
                number: 1
            },
            {
                _id: 2,
                name: "item 2",
                number: 2
            },
            {
                _id: 3,
                name: "item 3",
                number: 1
            },
            {
                _id: 4,
                name: "item4",
                number: 1
            }
        ])

    const changeCategory = (itemId, newCategory) => {
        const item = items.filter((item, i) => item._id === itemId)
        item[0].number = newCategory
        setItmes(items.filter((item, i) => item._id !== itemId).concat(item[0]))
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <ItemContext.Provider value={{ changeCategory }}>
                <Title>Drag and drop sample</Title>
                <Container>
                    <List items={items} number={1} />
                    <List items={items} number={2} />
                </Container>
            </ItemContext.Provider>
        </DndProvider>
    )
}

export default Board