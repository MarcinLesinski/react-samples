import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import Triangle from 'style_samples/Triangle'

// const eyesAnim = keyframes`
// `

const _______________Container = styled.div`
    width: 92px;
    margin: 30px auto;    
`
const Top = css`
    float: left;
    position: relative;
    width: 0;
    height: 0;
    margin: auto;
`

const TopRight = styled.div`
    ${Top}
    border-left: 45px solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 85px solid #d1d1d1;
`

const TopLeft = styled.div`
    border-left: 0 solid transparent;
    border-right: 45px solid transparent;
    border-bottom: 85px solid #b3b3b3;
`


class Sword extends Component {
    render() {
        return (
            <Triangle pointAt="top" rectangled ></Triangle >
            // <Container>
            //     <TopRight></TopRight>
            //     <TopLeft></TopLeft>
            // </Container>
        )
    }
}

export default Sword;