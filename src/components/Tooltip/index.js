import styled from 'styled-components'

const StyledTooltip = styled.span`
    border-bottom: 2px dotted #444;
    position: relative;
    color: white;
    //hint body
    :hover::after {
        content:  '${props => props.hint}';    
        position: absolute;
        top: -35px;
        left: 0;
        color: white;        
        background: #444;
        width: max-content;
        padding: 5px;
        border-radius: 5px;
        background-clip: padding-box;        
    }
    // arrow
    :hover::before {
        content: '';
        border-top: 10px solid #444;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 25px solid transparent;
        position: absolute;
        top: -5px;
        left: 9px;
    }
`

const Tooltip = ({ children, hint }) => {

    return (
        <StyledTooltip hint={hint}>{children}</StyledTooltip>
    )
}

export default Tooltip