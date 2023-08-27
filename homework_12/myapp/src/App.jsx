import './App.css'
import { useState } from "react";
import ProductList from "./components/ProductList";
import AddItem from "./components/AddItem";


export default function App() {

  const data = [
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
  ]


  const [products, setProducts] = useState(data)


  const deleteProduct = (id) => {
    const filteredProducts = products.filter(elem => elem.id !== id)
    setProducts(filteredProducts)
  }


  const countDecrement = (id) => {
    setProducts(products => {
      return products.map(elem => {
        if (elem.id === id) {
          if (elem.count === 1) {
            deleteProduct(id)
          } else {
            elem.count = elem.count - 1
          }
        }
        return elem
      })
    })
  }


  const countIncrement = (id) => {
    const updatedProducts = products.map(elem => {
      if (elem.id === id) {
        elem.count = elem.count + 1
      }
      return elem
    })
    setProducts(updatedProducts)
  }


  const addProduct = (value) => {
    let [name, price, count] = value.split(' ')
    if (name && price && count) {
      let newProduct = {
        id: (products.length != 0) ? Math.max(...products.map(elem => elem.id)) + 1 : 1,
        name,
        price: parseInt(price),
        count: parseInt(count)
      }
      setProducts([...products, newProduct])
    }
  }


  return (
    <div>
      <AddItem addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} countIncrement={countIncrement} countDecrement={countDecrement} />

    </div>
  );
}

