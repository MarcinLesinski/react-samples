import React, { Component } from "react";
import ArrayItem from "../ArrayItem"
import Header, { Footer } from "../Header"
import styled from "styled-components"
import { default as API } from "helpers/dataApi"
import * as _ from "ramda"
import Heart from "components/Heart"


const Container = styled.div`
    background: #2b2e39;
    margin: 0 auto;
    width: 80%;
    max-width: 600px;
    padding: 14px;
    border-radius: 14px;
    margin-top: 14px;
`

const Button = styled.div`
    background: #232632;
    color: #00a7fa;
    width: 80px;
    height: 32px;
    font-size: 1.7em;
    border: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TextInput = styled.input`
    padding: 3px;
    font-size: 0.7em;
    background: #232632;
    color: #d3d4d6;
    width: 100%;
    margin-right: 7px;
    /* border: 0px; */
    -webkit-appearance: none;
`

const HeaderStyled = styled.h1`
    color: #fff;
`

class Array extends Component {

    constructor(params) {
        super(params)
        this.input = React.createRef();
    }

    static defaultProps = {
        items: [
            { done: true, text: "item1" },
            { done: false, text: "item2" },
            { text: "item3" }],
        title: "items"
    }

    state = {
        items: [],//this.props.items,
        input_text: ''
    }

    async componentDidMount() {
        const items = await API.readAll()
        this.setState({ items })
    }

    updateInputDraft = event => {
        this.setState({ input_text: event.target.value })
    }

    addItem = async (event) => {
        const { items, input_text: draft } = this.state
        const new_item = await API.create({ text: draft })
        items.push({ text: draft, done: false })
        this.setState({ items: _.append(new_item, items), input_text: '' })
    }

    removeItem = async (id) => {
        const { items } = this.state
        const response = await API.destroy(id)
        const { index } = this.findById(id, items)
        this.setState({ items: _.remove(index, 1, items) })
    }

    findById = (id, arr) => {
        const index = _.findIndex(_.propEq('id', id))(arr)
        return { index, item: arr[index] }
    }

    toggleItem = async (id) => {
        const { items } = this.state
        const { index, item } = this.findById(id, items)
        const response = await API.update(id, { bool: !item.bool })
        console.log(response)
        this.setState({ items: _.update(index, response, items) })
    }

    render() {
        const { input_text, items } = this.state
        const { title } = this.props
        return (
            <Container>
                <Heart />
                <Header title={title} />
                <TextInput ref={this.input} type="text"
                    onChange={this.updateInputDraft} value={input_text} />
                <Button onClick={this.addItem}>x</Button>
                {items.map(
                    item => <ArrayItem removeItem={this.removeItem} toggleItem={this.toggleItem} key={item.id} id={item.id} bool={item.bool} text={item.text} number={item.number} />
                )}
                <Footer />
            </Container>
        )
    }

}

export default Array;