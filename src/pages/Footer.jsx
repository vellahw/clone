import iso from '../image/logo/iso-27001.svg';
import sw from '../image/logo/logo-sw.svg';
import isms from '../image/logo/logo-isms.svg';
import blog from '../image/logo/logo-naverblog.svg';
import {BsFacebook} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsTelegram} from 'react-icons/bs';
import * as fo from '../styles/FooterStyle';

function Footer() {
    return (
        <fo.FooterSection>
        <fo.FooterContainer>
          <fo.AddressDiv>
            <fo.AddressArticle>
              <fo.AddressHeader>
                언론보도
              </fo.AddressHeader>
              <fo.Address>
                press@kasa.com
              </fo.Address>
            </fo.AddressArticle>
            <fo.Line>
              |
            </fo.Line>
            <fo.AddressArticle>
              <fo.AddressHeader>
                대표문의
              </fo.AddressHeader>
              <fo.Address>
                contact@kasa.com
              </fo.Address>
            </fo.AddressArticle>
          </fo.AddressDiv>
          <fo.Copyright>
              ⓒ 2023. kasa Inc. All rights reserved.
          </fo.Copyright>

          <fo.ArticleDiv>
              개인정보 처리방침
          </fo.ArticleDiv>
          <fo.ArticleDiv>
            <a className='service' href='https://static.kr.kasa.exchange/terms/service.html' target="_blank" rel="noreferrer">
              서비스 이용약관
            </a>
          </fo.ArticleDiv>

          <fo.CompanyInfoDiv>
            <fo.CompanyHeader>
              카사코리아
            </fo.CompanyHeader>
            <fo.ArticleDiv className='business-info'>
              <fo.ArticleText>
                사업자 등록번호 369-00-00000
              </fo.ArticleText>
              <fo.ArticleLine></fo.ArticleLine>
              <fo.ArticleText>
                대표 : 김카사
              </fo.ArticleText>
            </fo.ArticleDiv>
            <fo.Address>
              서울시 강남구 테헤란로 302, 16층 (역삼동)
            </fo.Address>

            <fo.SocialLogoDiv>
              <a className='sns-link fb' href='https://www.facebook.com/kasakorea/' target='_blank' rel="noreferrer">
                <BsFacebook className='sns-logo' />
              </a>
              <a className='sns-link' href='https://www.instagram.com/kasakorea/' target='_blank' rel="noreferrer">
                <BsTelegram className='sns-logo'  />
              </a>
              <a className='sns-link' href='https://blog.naver.com/kasa_official' target='_blank' rel="noreferrer">
                <img src={blog} className='sns-logo blog' alt='네이버 블로그 로고'></img>
              </a>
              <a className='sns-link' href='https://www.youtube.com/channel/UCTsXbwlO9tSMgohXyop8vzA' target='_blank' rel="noreferrer">
                <BsYoutube className='sns-logo youtube' />
              </a>
            </fo.SocialLogoDiv>
            
            <fo.LogoContainer>
              <fo.LogoDiv>
                <img src={iso} className='footer-logo' alt='iso 로고'></img>
                <fo.ArticleText>
                  정보보안 국제표준<br/>
                  ISO 27001 인증 획득
                </fo.ArticleText>
              </fo.LogoDiv>
              <fo.LastLine></fo.LastLine>
              <fo.LogoDiv className='sw-area'>
                <img src={sw} className='footer-logo' alt='sw 로고'></img>
                <fo.ArticleText>
                  개인정보보호배상책임공제<br/>
                  가입 인증
                </fo.ArticleText>
                <fo.LastLine></fo.LastLine>
              </fo.LogoDiv>
              <fo.LogoDiv>
                <img src={isms} className='footer-logo' alt='isms 로고'></img>
                <fo.ArticleText>
                  [인증범위] 카사 서비스 운영<br/>
                  [유효기간] 2022.11.16 ~ 2025.11.15
                </fo.ArticleText>
              </fo.LogoDiv>
            </fo.LogoContainer>
          </fo.CompanyInfoDiv>
        </fo.FooterContainer>
      </fo.FooterSection>
    )
}

export default Footer;