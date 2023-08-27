import { useState } from "react"

export default function AddItem(props){

    const {addProduct} = props
    const [inputValue, setInputValue] = useState('')

    const addHandler = (event) => {
        event.preventDefault()
        addProduct(event.target.firstChild.value)
        setInputValue('')
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      }

    return(
        <div>
            <form  className="form" onSubmit={addHandler}>
            <input placeholder="Введите название, цену и количество товара через пробел"
                   value={inputValue} 
                   onChange={handleInputChange}/>
            <button>Добавить новый товар</button> 
            </form>
        </div>
    )
}