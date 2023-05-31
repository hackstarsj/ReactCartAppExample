import { v4 } from "uuid";

export default function AddProductForm(props) {
  const onAddProducts = (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log("Product TITLE : ", event.target.product_title.value);
    // console.log(
    //   "Product DESCRIPTION : ",
    //   event.target.product_description.value
    // );
    // console.log("Product PRICE : ", event.target.product_price.value);
    // console.log("Product IN STOCK : ", event.target.product_in_stock.value);
    // console.log("Product ID : ", v4());
    let product = {
      id: v4(),
      product_title: event.target.product_title.value,
      product_description: event.target.product_description.value,
      product_price: event.target.product_price.value,
      product_in_stock: event.target.product_in_stock.value,
    };
    props.onAddProducts(product);
    event.target.reset()
  };

  return (
    <div>
      <form onSubmit={onAddProducts}>
        <div className="form-group-inline">
          <input type="text" name="product_title" placeholder="Product Title" />
        </div>
        <div className="form-group-inline">
          <input
            type="text"
            name="product_description"
            placeholder="Product Description"
          />
        </div>
        <div className="form-group-inline">
          <input
            type="number"
            name="product_price"
            placeholder="Product Price"
          />
        </div>
        <div className="form-group-inline">
          <input
            type="number"
            name="product_in_stock"
            placeholder="Product In Stock"
          />
        </div>
        <div className="form-group-inline">
          <button>ADD PRODUCTS</button>
        </div>
      </form>
    </div>
  );
}
