export default function CartProduct(props) {
  return (
    <div>
      <h2>Cart Products</h2>
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
            {props.cartProducts.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.product_title}</th>
                <th>{item.product_description}</th>
                <th>{item.product_price}</th>
                <th>{item.quantity}</th>
                <th>{parseInt(item.product_price) * item.quantity}</th>
                <th>
                  <button className="remove_from_cart">REMOVE FROM CART</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
