export default function InventoryProduct(props) {
  return (
    <div>
      <h2>Inventory Products</h2>
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
              <th>{product.id}</th>
              <th>{product.product_title}</th>
              <th>{product.product_description}</th>
              <th>{product.product_price}</th>
              <th>{product.product_in_stock}</th>
              <th>
                <button className="add_to_cart" onClick={()=>props.onAddToCart(product)}>ADD TO CART</button>
              </th>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
