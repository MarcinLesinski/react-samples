import styled from 'styled-components'

const Container = styled.fieldset`
    border: 2px solid darkorange;
    border-radius: 5px;
    margin: 3px;
    padding: 3px;
    font-size: 1.2em;
`

const Input = styled.div`
    display: inline-block;
    width: 50%;
    
`
const Result = styled.p`
    display: inline-block;
    width: 50%;
    &::before{
        content: '-->  '
    }
`
const Formula = styled.pre`
    width: auto;
    margin-left: auto;
    margin-right: auto;
`
const Title = styled.legend`
    width: auto;
    margin-left: auto;
    margin-right: auto;
`
export { Title, Container, Input, Formula, Result }