import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'


const pulse = keyframes`
    0%{
        transform: scale(1) rotate(45deg);
    }
    50%{
        transform: scale(1.1) rotate(45deg);
    }
    100%{
        transform: scale(1) rotate(45deg);
    }
`

const HeartStyled = styled.span`
    background: red;
    display: inline-block;
    width: 30px;
    height: 30px;
    position: relative;
    transform: rotate(45deg);
    border-bottom-right-radius: 4px;
    color: transparent;
    margin: 0 50px;
    animation: ${pulse};
    animation-iteration-count: infinite;
    animation-duration: 1.5s;

    &:after, &:before {
        content: "";
        background: red;
        width: 30px;
        height: 30px;        
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: -50%;
    }

    &:before{
        top: -50%;
        left: 0;
    }
`

class Heart extends Component {

    render() {
        return (
            <HeartStyled />
        )

    }


}

export default Heart;