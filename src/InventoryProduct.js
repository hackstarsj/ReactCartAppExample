export default function InventoryProduct(props) {
  return (
    <div>
      <h2 className="subbanner">Inventory Products</h2>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>In Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.inventoryProducts.map((product,index)=>(
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.product_title}</td>
              <td>{product.product_description}</td>
              <td>{product.product_price}</td>
              <td>{product.product_in_stock}</td>
              <td>
                <button className="add_to_cart" onClick={()=>props.onAddToCart(product)}>ADD TO CART</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
