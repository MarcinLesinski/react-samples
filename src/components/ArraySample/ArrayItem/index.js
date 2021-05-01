import React, { Component } from "react";
import styled from "styled-components"
import { Link } from 'react-router-dom'

const Item = styled.div`
    background: #343744;
    border-radius: 10px;
    padding: 14px;
    margin-bottom: 7px;
    color: ${props => props.done ? "#1fd84d" : "auto"};
    text-decoration: ${props => props.done ? "line-through" : "auto"};
`

class ArrayItem extends Component {

    state = {}

    toggleItem = () => this.props.toggleItem(this.props.id)

    toggleDone = () => {
        fetch(`http://localhost:8080/${this.state.id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: { "Content-Type": 'application/json; charset=utf-8' },
            body: JSON.stringify({ bool: false })
        }
        ).then(response => {
            if (response.ok) {
                this.setState({ bool: !this.state.bool })
            }
        }).catch(error => {
            console.log(error.text)
        })

        // this.setState({ bool: !this.state.bool })
    }

    removeItem = () =>
        this.props.removeItem(this.props.id)


    render() {
        const { id, text, number, bool } = this.props

        return (
            <Item done={bool}>
                <div onClick={this.toggleItem}>
                    <p>{text}</p>
                    <p>{number}</p>
                </div>

                <Link to={({ pathname: `/items/${id}`, text })}>edit</Link>
                <button onClick={this.removeItem}> X </button>
            </Item>
        )

    }

}

export default ArrayItem;