import React from 'react';
import { Helmet } from 'react-helmet-async';

function MetaTags(props) {
    const meta = props.meta;

    return (
        <Helmet>
            <title>{meta.title}</title>
            <meta
                name="description"
                content={meta.description} />
            <meta name="keywords" content="카사, kasa, 부동산조각투자, 소액투자, 조각투자, 재테크, 주식, 증권, 채권, 적금, 부동산, 부동산투자, 부동산앱, 부동산재테크, 소액투자, 천만원굴리기, 부동산어플, 자산관리, 건물주되는법, 수익형부동산, 부동산소액투자, 소액부동산투자, wlrxn"></meta>
            <meta property="og:title" content={meta.title} />
            <meta property="og:type " content="website" />
            <meta property="og:image" name="image" content={meta.ogUrl} />
            <meta
                property="og:image:alt"
                content="카사 미리보기 이미지"/>
            <meta
                name="description"
                property="og:description"
                content={meta.description}/>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="카사(kasa) - 부동산 조각투자 플랫폼" />
        <meta name="twitter:description" content="누구나 쉽게하는 부동산 조각투자, 카사와 함께하세요!" />
        <meta name="twitter:image" content="/og_image.png" />

        </Helmet>
    )
}

export default MetaTags;