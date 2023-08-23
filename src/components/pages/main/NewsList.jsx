import React from 'react';
import {IoIosArrowForward} from 'react-icons/io';
import * as ns from '../../../styles/NewsListStyle';
import { ContentsList } from '../../ui/ContentsList';

function NewsList() {
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
              <ContentsList />
            </ns.NewsList>
          </ns.NewsContainer>
          </ns.NewsWrapper>
        {/* </i.InfoSection> */}
      </ns.NewsSection>
    )
}

export default NewsList;