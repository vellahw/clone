import styled from 'styled-components';

function MobileFloatingBtn() {
    return(
        <ButtonWrapper>
            <ButtonContainer>
                <Button>지금 시작하기</Button>
            </ButtonContainer>
        </ButtonWrapper>
    )
}

export default MobileFloatingBtn;

const ButtonWrapper = styled.div`
    display: none;
    
    @media(max-width: 767px) {
        display: block;
        width: 100vw;
        max-width:100%;

        position: fixed;
        z-index: 999;
        bottom: 24px;
    }
`
const ButtonContainer = styled.div`
    margin: 0 16px;
`

const Button = styled.button`
    background-color: #627AF5;
    width: 100%;
    height: 54px;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
`