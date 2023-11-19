import { useParams } from 'react-router-dom';
import s from './WorkPage.module.css';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function WorkPage({ workList }) {

    const { id } = useParams()

    const [work, setWork] = useState({})

    useEffect(() => {
        let work = workList.find(elem => elem.id == id)
        setWork(work)
    }, [])

    const sortByType = (a, b) => {
        const typeOrder = { h1: 1, h2: 2, text: 3, img: 4 };
        return typeOrder[a[0]] - typeOrder[b[0]];
    };

    const sortedContent = work.content?.sort(sortByType);

    return (
        <div className={s.container}>
            <h1 className={s.work_page_title}>{work.full_title}</h1>
            <div className={s.descr_wrapper}>
                <div className={s.image_container}>
                    <img src='/background2.png' />
                    <p className={s.overlay_text}>{work.year}</p>
                </div>
                <p>{`${work.tags?.[0]}, ${work.tags?.[1]}`}</p>
            </div>
            <p>{work.text}</p>
            <img style={{ width: '100%', height: '460px', margin: '50px 0' }} src={work.main_img} />
            {sortedContent?.map((elem, index) => {
                const [tag, content] = elem;
                const uniqueKey = uuidv4();

                switch (tag) {
                    case 'h1':
                        return <h2 key={uniqueKey}>{content}</h2>;
                    case 'h2':
                        return <h3 key={uniqueKey} style={{ margin: '15px 0' }}>{content}</h3>;
                    case 'text':
                        return <p key={uniqueKey}>{content}</p>;
                    case 'img':
                        return <img key={uniqueKey} src={content} alt={work.full_title} style={{ width: '100%', height: '460px', margin: '30px 0 0' }} />;
                    default:
                        return null;
                }
            })}
        </div>
    )
}




