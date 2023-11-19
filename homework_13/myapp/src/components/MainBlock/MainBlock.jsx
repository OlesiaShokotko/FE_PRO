import s from './MainBlock.module.css';


export default function Main() {
    return (
        <div className={s.container}>
            <div className={s.main}>
                <div>
                    <h1>Hi, I am John, <br /> Creative Technologist</h1>
                    <p style={{ margin: '40px 0', textAlign: 'left' }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button>Download Resume</button>
                </div>
                <img style={{ width: '250px', height: '250px' }} src="./mainPhoto.png" />
            </div>
        </div>
    )
}