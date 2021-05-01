import Container from './style'


const Tooltip = ({ children, hint }) => {

    return (
        <Container hint={hint}>{children}</Container>
    )
}

export default Tooltip