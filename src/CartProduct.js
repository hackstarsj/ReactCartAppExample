export default function CartProduct(props) {
  return (
    <div>
      <h2 className="subbanner">Cart Products</h2>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.cartProducts.map((item,index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.product_title}</td>
                <td>{item.product_description}</td>
                <td>{item.product_price}</td>
                <td className="qty"><button className="qty-plus" onClick={()=>props.qtyChange(index,1)}>+</button><span className="qty-span">{item.quantity}</span><button className="qty-minus" onClick={()=>props.qtyChange(index,-1)}>-</button></td>
                <td>{parseInt(item.product_price) * item.quantity}</td>
                <td>
                  <button className="remove_from_cart" onClick={()=>props.removeFromCart(index)}>REMOVE FROM CART</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
