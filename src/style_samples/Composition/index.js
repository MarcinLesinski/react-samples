import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const BasicStyle = css`
        color: red;
        background: white;
     `

const Div1 = styled.div`
    ${BasicStyle}
    color: blue;

`
const BasicComponent = styled.div`
    color: red;
    background: white;
`

const Div2 = styled(BasicComponent)`
    color: blue;
`

class Composition extends React.Component {
    render() {
        return (
            <div>
                <Div1> style 1 </Div1>
                <Div2> style 2 </Div2>
            </div>
        )
    }
}

export default Composition;