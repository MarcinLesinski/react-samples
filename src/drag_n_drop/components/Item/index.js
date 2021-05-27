import { useState } from 'react'
import { ItemTypes } from 'drag_n_drop/utils/items'
import { useDrag, useDrop } from 'react-dnd'
import styled from 'styled-components'

const Container = styled.div`
    border: 2px solid orange; 
    background: grey;
    margin: 3px;
    padding: 5px;
    text-align: center;
    line-height: 5px;
    &:hover{
        background: ${[props => props.isDragging ? 'darkblue' : 'darkgray']};
        cursor: grab;
    }
`

const Item = ({ id, name, number }) => {

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: { id },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    return (
        <Container ref={drag} isDragging={isDragging}>
            <p>item</p>
            <p>{name}</p>
            <p>{number}</p>
        </Container>
    )
}

export default Item