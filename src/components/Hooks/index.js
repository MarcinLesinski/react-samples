import React, { useEffect, useState, useContext, useReducer } from 'react'
import styled from 'styled-components'
import SampleContext from 'context/SampleContext'

const Container = styled.div`
    color: white
`

/* useMemo */

const reducer = (state, action) => {
    switch (action.type) {
        case 'opt1':
            return { ...state, text: '777' }
        case 'opt2':
            return { ...state, number: 123 }

        default: throw Error()
    }
}

const HooksSamples = ({ initialCount }) => {
    console.log('hooks samples - start')
    const [count, setCount] = useState(initialCount)
    const [lazyField, setField] = useState(() => /* expensive computation */ "lazy loaded field")

    const [state, dispatch] = useReducer(reducer, { text: '123', number: 888 })

    useEffect(() => {
        console.log('effect start')
        return () => { console.log('effect end') }
    })

    useEffect(() => {
        console.log('componentDidMount')
        return () => console.log('componentWillUnmount')
    }, [])

    const obj = useContext(SampleContext)

    return (
        <Container>
            <p> context data: {obj.data1 + ' ' + obj.data2}</p>
            <p> Lazy Loaded Value: {lazyField}</p>
            <p> Counter: {count} </p>
            <button onClick={() => setCount(initialCount)}>reset</button>
            <button onClick={() => setCount(count => count + 1)}>+</button>
            <button onClick={() => setCount(count => count - 1)}>-</button>
            <button onClick={() => dispatch({ type: 'opt1' })}> dispatch</button>

            <p>{state.text + ' ' + state.number}</p>
        </Container>
    )
}

export default HooksSamples