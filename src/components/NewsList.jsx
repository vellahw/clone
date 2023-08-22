import React from 'react';
import {IoIosArrowForward} from 'react-icons/io';
import * as ns from '../styles/NewsListStyle';

function NewsList() {
    const news = [
        {
          no: 1,
          title: "공모 재시동' 카사코리아, 대신그룹과 시너지 노린다",
          press: "더벨",
          date: "2023년 08월 16일",
          url: "https://www.thebell.co.kr/free/content/ArticleView.asp?key=202308071738340960104714"
        },
        {
          no: 2,
          title: "7억 미술품부터 160억 건물까지… 내달 ‘조각투자’ 큰 장 열린다",
          press: "국민일보",
          date: "2023년 08월 10일",
          url: "https://news.kmib.co.kr/article/view.asp?arcid=0018562634&code=61141211&cp=nv"
        },
        {
          no: 3,
          title: "직투, 7번째 공모건물 ‘압구정 커머스 빌딩’ 공개",
          press: "매일경제",
          date: '2023년 07월 16일',
          url: "https://mirakle.mk.co.kr/view.php?year=2023&no=614269"
        }
      ]
    
    return (
        <ns.NewsSection>
          <ns.NewsWrapper>
          <ns.SectionTitle>직투 소식</ns.SectionTitle>
          {/* <i.InfoSection> */}
          {/* <i.InfoTitle>직투 소식</i.InfoTitle> */}

          <ns.NewsContainer>
            <ns.NewsHeaderDiv>
              <ns.NewsHeader>
                보도자료
              </ns.NewsHeader>
              <ns.ViewAllTextDiv>
                <ns.ViewAllText>
                  전체보기
                </ns.ViewAllText>
                <IoIosArrowForward className='arrow-icon'/>
              </ns.ViewAllTextDiv>
            </ns.NewsHeaderDiv>
            <ns.NewsList>
              { news.map(i=>{
                  return (
                    <a href={i.url} target='_blank' rel="noreferrer">
                      <ns.NewsItem key={i.no}>
                          <ns.NewsTitle>
                            {i.title}
                          </ns.NewsTitle>
                          <ns.NewsInfo>
                            <ns.NewsPress>{i.press}</ns.NewsPress>
                            <ns.Line>|</ns.Line>
                            <ns.NewsDate>{i.date}</ns.NewsDate>
                          </ns.NewsInfo>
                      </ns.NewsItem>
                    </a>
                  )
                })
              }
            </ns.NewsList>
          </ns.NewsContainer>
          </ns.NewsWrapper>
        {/* </i.InfoSection> */}
      </ns.NewsSection>
    )
}

export default NewsList;