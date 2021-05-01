import React, { Component } from 'react'


const Header = ({ title }) => {
    const displayed_title = title ?? "Array sample"
    return (
        <div>
            <h2>{displayed_title}</h2>
        </div>
    )
}

const Footer = () => (
    <div>
        <p>foooooooooooter</p>
    </div>
)


export default Header;
export { Footer };