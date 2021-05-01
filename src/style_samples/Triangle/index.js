import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'


const Container = styled.div`    
width: 0;
height: 0;
margin: 50px auto;        
border-left: ${p => p.width_left}px solid transparent;
border-right: ${p => p.width_right}px solid transparent;
border-bottom: ${p => p.height}px solid;    
border-bottom-color:  ${p => p.color};
transform: rotate(${p => p.rotation}deg);
`

class Triangle extends React.Component {
    static defaultProps = {
        width: 15,
        height: 15,
        pointAt: 'top',
        color: 'ffffff',
        rectangled: false
    }

    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        pointAt: PropTypes.oneOf(['top', 'left', 'right', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
        rectangled: PropTypes.bool,
        color: PropTypes.string,
    }

    rotationsByPointAt = new Map();

    constructor(props) {
        super(props);
        this.rotationsByPointAt.set('top', 0);
        this.rotationsByPointAt.set('bottom', 180);
        this.rotationsByPointAt.set('left', -90);
        this.rotationsByPointAt.set('right', 90);
        this.rotationsByPointAt.set('top-left', -45);
        this.rotationsByPointAt.set('top-right', 45);
        this.rotationsByPointAt.set('bottom-left', -135);
        this.rotationsByPointAt.set('bottom-right', 135);
    }

    rotation(rectangled, pointAt) {
        let result = this.rotationsByPointAt.get(pointAt);
        if (rectangled)
            result += 135

        return result;
    }

    render() {
        const { width, height, pointAt, rectangled, color } = this.props
        const params = {
            width_left: rectangled ? 0 : width / 2,
            width_right: rectangled ? width : width / 2,
            rotation: this.rotation(rectangled, pointAt),
            height,
            color,
            rectangled
        }

        return (
            <Container {...params} ></Container>
        )
    }
}

export default Triangle;