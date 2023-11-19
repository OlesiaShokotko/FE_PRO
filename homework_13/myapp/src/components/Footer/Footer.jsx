import s from './Footer.module.css';

export default function Footer() {
    return (
        <div className={s.container}>
            <div className={s.image_wrapper}>
                <img src='/fb.png'/>
                <img src='/insta.png'/>
                <img src='/twitter.png'/>
                <img src='/linkedin.png'/>
            </div>
            <p style={{fontSize: '14px'}}>Copyright ©2020 All rights reserved </p>
        </div>
    )
}