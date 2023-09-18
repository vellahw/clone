import styled from 'styled-components';

function MobileFloatingBtn() {
    const openQr = () => {
        alert("QR");
    }

    return(
        <ButtonWrapper>
            <ButtonContainer>
                <Button onClick={openQr}>지금 시작하기</Button>
            </ButtonContainer>
        </ButtonWrapper>
    )
}

export default MobileFloatingBtn;

const ButtonWrapper = styled.div`
    display: none;
    
    @media(max-width: 767px) {
        display: block;
        position: fixed;
        width: 100vw;
        min-width: 100%;
        max-width:100%;
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
    box-shadow: rgba(0, 0, 0, 0.25) 0px 8px 20px 0px;
`