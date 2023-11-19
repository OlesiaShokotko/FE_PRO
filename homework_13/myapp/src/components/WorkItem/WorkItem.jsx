import s from './WorkItem.module.css';


export default function WorkItem({ main_img, title, year, tags, text }) {
    return (
        <div>
            <div className={s.work_card}>
                <img className={s.main_img} src={main_img} />
                <div>
                    <h2 className={s.work_item_title}>{title}</h2>
                    <div className={s.descr_wrapper}>
                        <div className={s.image_container}>
                            <img src='./background.png' />
                            <p className={s.overlay_text}>{year}</p>
                        </div>
                        <p style={{ color: '#8695A4', fontSize: '20px' }}>{tags[0]}</p>
                    </div>
                    <p>{text}</p>
                </div>
            </div>
            <img style={{ margin: '50px 0' }} src='./vector.png' />
        </div>
    )
}