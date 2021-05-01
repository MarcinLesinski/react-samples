import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { default as API } from 'helpers/dataApi'
import { Formik, Form, useFormik } from 'formik'
import { withRouter } from 'react-router-dom'
import {
    SubmitButton,
    TextInput,
    Label,
    Select,
    ErrorMsg
} from "theme/theme"
import * as _ from 'ramda'

const ContactForm = ({
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
}) => (
    <form onSubmit={handleSubmit}>
        <Label>
            Text *
            <ErrorMsg>{errors.content}</ErrorMsg>
            <TextInput
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
                name="text"
            />
        </Label>
        <Label>
            Number *
            <input
                type="text"
                name='number'
            />
        </Label>

        <Label>
            Bool *
            <input type="checkbox" name='bool' value={values.bool} checked={values.bool} onChange={handleChange} />
        </Label>

        <Label>
            Enum *
            <Select
                name='enum'
                value={values.enum}
                onChange={handleChange}>
                <option value="one">ONE</option>
                <option value="two">TWO</option>
                <option value="three">THREE</option>
            </Select>
        </Label>
        {errors.name && <div>{errors.name}</div>}
        <SubmitButton type="submit">Submit</SubmitButton>
    </form>
);

class Editor extends Component {

    constructor(props) {
        super(props)
        console.log("created")
    }

    state = {
        item: null,
        fetched: false,
        disabled: false
    }

    async componentDidMount() {
        const id = this.props.match.params.itemId
        const item = await API.read(id)
        this.setState({ item, fetched: true })
    }

    onSubmit = async (values) => {
        console.log('submited', JSON.stringify(values))
        await API.partialUpdate(this.state.item.id, values)
        this.props.history.push('/')
        // this.setState({ some_text: "wysłało" })

    }

    form = () => {
        const { text, number, bool, enum: $enum } = this.state.item
        return (
            <Formik
                initialValues={({ text, number, bool, enum: $enum })}
                children={ContactForm}
                onSubmit={this.onSubmit}
                validate={(values) => {
                    let errors = {}
                    if (!values.text) {
                        errors.content = "Required"
                    } else if (values.text.length < 3) {
                        errors.content = "Too short. Minimum 4 characters."
                    } else if (values.text.includes('dupa')) {
                        errors.content = "Mind your language."
                    }
                    this.setState({ disabled: !_.isEmpty(errors) })

                    return errors
                }} >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Label>
                            Text *
                        <ErrorMsg>{errors.content}</ErrorMsg>
                            <TextInput
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.text}
                                name="text"
                            />
                        </Label>
                        <Label>
                            Number *
                        <input
                                type="text"
                                name='number'
                            />
                        </Label>

                        <Label>
                            Bool *
                        <input type="checkbox" name='bool' value={values.bool} checked={values.bool} onChange={handleChange} />
                        </Label>
                        <Label>
                            Enum *
                        <Select
                                name='enum'
                                value={values.enum}
                                onChange={handleChange}>
                                <option value="one">ONE</option>
                                <option value="two">TWO</option>
                                <option value="three">THREE</option>
                            </Select>
                        </Label>
                        {errors.name && <div>{errors.name}</div>}
                        <SubmitButton type="submit">Submit</SubmitButton>
                    </form>)}
            </Formik >
        )
    }

    loading = () => (<div>Loading...</div>)

    render() {
        const { itemId } = this.props.match.params
        const body = (this.state.fetched) ? this.form() : this.loading()
        return (
            <div>
                Edit item {itemId}
                {this.state.some_text}
                {body}
            </div>
        )

    }

}

export default withRouter(Editor);