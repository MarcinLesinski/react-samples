import * as number from 'utils/numbers'
import * as Styled from './style'
import { useState } from 'react'
import SampleLine from '../SampleLine'
import * as r from 'ramda'

const RamdaSamples = () => {
    const [items, setItems] = useState(
        [
            { id: 1, number: number.random(10, 99), name: 'horse' },
            { id: 2, number: number.random(10, 99), name: 'owl' },
            { id: 3, number: number.random(10, 99), name: 'car' },
            { id: 4, number: number.random(10, 99), name: 'engine' },
            { id: 5, number: number.random(10, 99), name: 'zeus' },
            { id: 6, number: number.random(10, 99), name: 'hades' },
            { id: 7, number: number.random(10, 99), name: 'me' },
            { id: 8, number: number.random(10, 99), name: 'you' },
            { id: 9, number: number.random(10, 99), name: 'trank' },
        ]
    )

    const presentInputData = () => {
        return items.map((item) => `(${item.id}) ${item.number} ${item.name}`).reduce((prev, curr) => (`${prev}\u00A0\u00A0\u00A0\u00A0${curr}`))
    }

    return (
        <div>
            <Styled.Title> Ramda samples </Styled.Title>
            <Styled.Container>
                <SampleLine
                    title='add'
                    input={{ a: 4, b: 6 }}
                    formula={({ a, b }) => (r.add(a)(b))}
                />
                <SampleLine
                    title='both gt lt'
                    input={5}
                    formula={(a) => (r.both(r.gt(r.__, 3), r.lt(r.__, 6))(a))}
                />
                <SampleLine
                    title='concat'
                    input={{ a: [1, 2, 3], b: [4, 5, 6] }}
                    formula={({ a, b }) => (r.concat(a, b))}
                />
                <SampleLine
                    title='partial'
                    input={{ a: 'a', b: 'b', c: 'c', d: 'd' }}
                    formula={({ a, b, c, d }) => {
                        const concat = (a, b, c, d) => `${a} ${b} ${c} ${d}`
                        const stepOne = r.partial(concat, [a])
                        const stepTwo = r.partial(stepOne, [b])
                        return stepTwo(c, d)
                    }}
                />
                <SampleLine
                    title='repeat'
                    input={{ s: 'text', n: '888' }}
                    formula={(a) => (r.repeat(a, 3))}
                />
                <SampleLine
                    title='pipe'
                    input={{ a: 4, b: 3 }}
                    formula={({ a, b }) => (r.pipe(r.add, r.inc, r.negate)(a, b))}
                />
                <SampleLine
                    title='zip'
                    input={{ a: [1, 2, 3, 4], b: ['a', 'b', 'c'] }}
                    formula={({ a, b }) => (r.zip(a)(b))}
                />
                <SampleLine
                    title='until'
                    input={2}
                    formula={(a) => (r.until(r.gt(r.__, 150), r.multiply(2))(a))}
                />
            </Styled.Container>
        </div>

    )
}

export default RamdaSamples