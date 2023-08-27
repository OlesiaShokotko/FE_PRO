export default function ProductItem(props) {

    const { id, name, price, count, deleteProduct, countIncrement, countDecrement } = props

    return (
        <div className="product_item" onDoubleClick={() => deleteProduct(id)}>
            <p>{name}</p>
            <p style={{ marginTop: '20px' }}>{`Price: ${price}`}</p>
            <div className="count_button">
                <button onClick={() => countDecrement(id)}>-</button>
                <p>{count}</p>
                <button onClick={() => countIncrement(id)}>+</button>
            </div>
        </div>
    )
}