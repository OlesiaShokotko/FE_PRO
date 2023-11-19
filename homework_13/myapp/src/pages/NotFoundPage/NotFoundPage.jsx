import { useNavigate } from "react-router-dom"
import s from "./NotFoundPage.module.css"

export default function NotFoundPage(){
const navigate = useNavigate()

    return(
        <div className={s.container}>
            <img src='https://pugofka.com/upload/iblock/bb0/404_error.png'/>
            <button style={{margin: '10px 0'}}  onClick={() => navigate('/')}>Go home!</button>
            <button onClick={() => navigate(-1)}>Go back!</button>     
        </div>
    )
}