import { userDrag, useDrop } from 'react-dnd'
import { useState, useContext } from 'react'
import Item from '../Item'
import styled from 'styled-components'
import { ItemTypes } from 'drag_n_drop/utils/items'
import { ItemContext } from '../Board'

const Container = styled.div`
    color: darkslategray;
    border: 2px solid orange;
    background: ${props => props.isOver ? 'green' : 'grey'};
    font-weight: bold;
    font-size: 1.5em;
    width: 250px;
`

const List = ({ items, number }) => {

    const { changeCategory } = useContext(ItemContext)

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => { changeCategory(item.id, number) },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    })



    return (

        <Container ref={drop} isOver={isOver}>
            <p>List</p>
            {items
                .filter(item => item.number == number)
                .map((item, index, a) => (
                    <Item id={item._id} name={item.name} number={item.number} />
                ))}
        </Container>
    )
}

export default List