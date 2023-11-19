import { Link } from "react-router-dom";
import s from "./Header.module.css";



export default function Header() {

    const menu = ['Home', 'Blog', 'Works', 'Contact']


    return (
        <div className={s.header}>
            <div className={s.menu_wrapper}>
                {menu.map((elem, index) =>
                    <Link className={s.menu_link} key={elem} to={index === 0 ? '/' : `/${elem.toLowerCase()}`}>
                        <h3>{elem}</h3>
                    </Link>
                )}
            </div>
        </div>
    )
}