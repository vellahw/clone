import React from 'react';
import {NewsItem, NewsTitle, NewsInfo, NewsPress, Line, NewsDate} from '../../styles/main/NewsListStyle';
import data from '../../data.json';

export function ContentsList() {
    return (
        <>
            { data.news.map( i => {
                return (
                    <a href={i.url} target='_blank' rel="noreferrer" key={i.no}>
                        <NewsItem>
                            <NewsTitle>
                                {i.title}
                            </NewsTitle>
                            <NewsInfo>
                                <NewsPress>{i.press}</NewsPress>
                                <Line>|</Line>
                                <NewsDate>{i.date}</NewsDate>
                            </NewsInfo>
                        </NewsItem>
                    </a>
                )}
            )}
        </>
    )
}