import * as b from '../../../styles/buliding/BuildingPageStyle';
import {StatusUi} from './StatusUi';
import {MdLocationOn} from 'react-icons/md';

export function BuildingInfo(props) {
    const contents = props.data;
    const goDetail = ()=>{
        alert("상세페이지")
    }


    return (
        <>
            { contents.map(i => {
                return (
                    <b.BuildingInfoWrapper key={i.no} onClick={goDetail}>
                        <b.ImgContainer>
                            <img src={i.src} className='building-img' alt='빌딩썸네일'></img>
                        </b.ImgContainer>
                        <b.InfoContainer>
                            <b.LabelContainer>
                                <b.Label status={i.type}>
                                    {
                                        {
                                            '공모예정': '공모 예정',
                                            '상장': '상장',
                                            '매각완료': '매각 완료'
                                        }[i.type]
                                    }
                                </b.Label>
                            </b.LabelContainer>
                            <div>
                                <b.BuildingName>{i.name}</b.BuildingName>
                                <b.BuildingAddress>
                                    <MdLocationOn className='location-icon' />
                                    {i.address}
                                </b.BuildingAddress>
                                <b.DetailInfoContainer>
                                    <StatusUi data={i} />
                                </b.DetailInfoContainer>
                            </div>
                        </b.InfoContainer>
                    </b.BuildingInfoWrapper>
                    )
                })
            }
        </>
    )
}