import styled from 'styled-components'

const StyledCard = styled.div`
    /* display: flexbox;
    align-items: center;
    justify-content: center; */
    width: 45px;
    height: 75px;
    border-radius: 5px;
    perspective: 100px;
    position: relative;

    ::before, ::after{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background: yellow;
        border-radius: 5px;
        box-sizing: border-box;
        border: 2px solid #828282;
        transition: 0.6s transform linear;
        backface-visibility: hidden;
    }

    ::after {        
        background-image: 
            repeating-linear-gradient(
                -45deg,
                #34b3aa,
                #34b3aa 5px,
                #8afae3 5px,
                #8afae3 10px
            );
    }

    :hover::after{
        transform: rotateY(180deg);
    }

    ::before{
        background-image: 
            repeating-linear-gradient(
                -45deg,
                #a4b3aa,
                #a4b3aa 5px,
                #2afae3 5px,
                #2afae3 10px
            );
    }

    :hover::before{
        transform: rotateY(360deg);
    }
`

const Card = () => {

    return (
        <StyledCard />)
}

export default Card