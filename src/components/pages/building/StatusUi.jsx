import * as b from '../../../styles/buliding/BuildingPageStyle';

export function StatusUi(props) {
    const data = props.data;
    const type = data.type;
    
    if(type === '공모예정') {
        return (
            <>
                <b.DetailInfo className='first'>
                    <b.DetailTitle>공모일정</b.DetailTitle>
                    <b.DetailText>{data.date}</b.DetailText>
                </b.DetailInfo>
                <b.DetailInfo>
                    <b.DetailTitle>공모대상</b.DetailTitle>
                    <b.DetailText>{data.name}</b.DetailText>
                </b.DetailInfo>
                <b.DetailInfo>
                    <b.DetailTitle>공모금액</b.DetailTitle>
                    <b.DetailText>{data.totalPrice}</b.DetailText>
                </b.DetailInfo>
                <b.DetailInfo>
                    <b.DetailTitle>공모가</b.DetailTitle>
                    <b.DetailText>{data.price}</b.DetailText>
                </b.DetailInfo>
            </>
        )
    } else if(type === '상장') {
        return (
            <>
                <b.DetailInfo className='first'>
                    <b.DetailTitle>상장일</b.DetailTitle>
                    <b.DetailText>{data.publicDate}</b.DetailText>
                </b.DetailInfo>
                <b.DetailInfo>
                    <b.DetailTitle>다음 배당기준일</b.DetailTitle>
                    <b.DetailText>{data.dividendDate}</b.DetailText>
                </b.DetailInfo>
            </>
        )
    } else {
        return (
            <>
                <b.DetailInfo className='first'>
                    <b.DetailTitle>공모기간</b.DetailTitle>
                    <b.DetailText>{data.date}</b.DetailText>
                </b.DetailInfo>
                <b.DetailInfo>
                    <b.DetailTitle>상장일</b.DetailTitle>
                    <b.DetailText>{data.publicDate}</b.DetailText>
                </b.DetailInfo>
                <b.DetailInfo>
                    <b.DetailTitle>매각일</b.DetailTitle>
                    <b.DetailText>{data.saleDate}</b.DetailText>
                </b.DetailInfo>
                <b.DetailInfo>
                    <b.DetailTitle>공모금액</b.DetailTitle>
                    <b.DetailText>{data.totalPrice}</b.DetailText>
                </b.DetailInfo>
                <b.DetailInfo>
                    <b.DetailTitle>매각금액</b.DetailTitle>
                    <b.DetailText>{data.salPrice}</b.DetailText>
                </b.DetailInfo>
            </>
        )
    }
}