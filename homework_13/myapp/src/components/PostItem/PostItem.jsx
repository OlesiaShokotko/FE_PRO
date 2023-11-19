import s from './PostItem.module.css';

export default function PostItem({ id, title, tags, date, text }) {
    return (
        <div>
            <h2 className={s.post_item_title}>{title}</h2>
            <div className={s.descr_wrapper}>
                <p style={{fontSize: '20px'}}>
                    {`${new Date(date).getDate()} ${new Date(date).toLocaleString('en-US', {
                        month: 'short',
                        year: 'numeric',
                    })}`}
                </p>
                <p style={{ margin: '0 25px' }}>|</p>
                <p style={{fontSize: '20px', color: '#8695A4'}}>{`${tags[0]}, ${tags[1]}`}</p>
            </div>
            <p>{text}</p>
        </div>
    )
}