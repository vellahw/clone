import styled from 'styled-components';

function QROverlay() {
    return(
        <OverlayContainer>
            <QRContainer>
                
            </QRContainer>
        </OverlayContainer>
    )
}

export default QROverlay;

const OverlayContainer = styled.div`
    width: 100vw;
    height: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 9999;
`
const QRContainer = styled.div`
    width: 320px;
    background-color: #ffffff;
    padding: 16px;
    border-radius: 4px;
`