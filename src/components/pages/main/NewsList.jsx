import React from 'react';
import {IoIosArrowForward} from 'react-icons/io';
import * as ns from '../../../styles/main/NewsListStyle';
import { ContentsList } from '../../ui/ContentsList';

function NewsList() {
    const goTotalPage = ()=>{
      alert("전체보기");
    }

    return (
        <ns.NewsSection>
          <ns.NewsWrapper>
          <ns.SectionTitle>카사 소식</ns.SectionTitle>

          <ns.NewsContainer>
            <ns.NewsHeaderDiv>
              <ns.NewsHeader>
                보도자료
              </ns.NewsHeader>
              <ns.ViewAllTextDiv>
                <ns.ViewAllText onClick={goTotalPage}>
                  전체보기
                </ns.ViewAllText>
                <IoIosArrowForward className='arrow-icon'/>
              </ns.ViewAllTextDiv>
            </ns.NewsHeaderDiv>
            <ns.NewsList>
              <ContentsList />
            </ns.NewsList>
          </ns.NewsContainer>
          </ns.NewsWrapper>
      </ns.NewsSection>
    )
}

export default NewsList;