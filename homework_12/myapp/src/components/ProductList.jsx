import ProductItem from "./ProductItem"

export default function ProductList(props){

    const{products, deleteProduct, countIncrement, countDecrement} = props

    return(
        <div className="product_list">
            {products.map(elem => <ProductItem 
                                                key={elem.id} 
                                                id={elem.id} 
                                                name={elem.name} 
                                                price={elem.price} 
                                                count={elem.count}
                                                deleteProduct={deleteProduct}
                                                countIncrement={countIncrement}
                                                countDecrement={countDecrement}
                                                />)}
        </div>
    )
}