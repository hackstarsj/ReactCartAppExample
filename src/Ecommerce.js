import React from "react";
import AddProductForm from "./AddProductForm";
import CartProduct from "./CartProduct";
import InventoryProduct from "./InventoryProduct";
import GrandTotal from "./GrandTotalComponent";

export default function EcommerceApp(){

    let [inventoryProducts,setInventoryProducts]=React.useState([]);
    let [cartProducts,setCartProducts]=React.useState([]);
    let [grandTotal,setGrandTotal]=React.useState(0);

    const onAddProducts=(product)=>{
        console.log(product);
        inventoryProducts.push(product);
        setInventoryProducts([...inventoryProducts]);
    }

    const onAddToCart=(product)=>{
        let findProduct=cartProducts.filter((item)=>{ return item.id==product.id?true:false });
        if(findProduct.length>0){
            let index=cartProducts.findIndex((item)=>{ return item.id==product.id?true:false })
            if(index!=-1){
                cartProducts[index].quantity=cartProducts[index].quantity+1;
                setCartProducts([...cartProducts]);
                calculateTotal();
                return;
            }
        }
        product.quantity=1;
        cartProducts.push(product);
        setCartProducts([...cartProducts]);
        calculateTotal();
    }

    const calculateTotal=()=>{
        let gT=0;
        for(let i=0;i<cartProducts.length;i++){
            gT=gT+(parseInt(cartProducts[i].product_price)*cartProducts[i].quantity);
        }
        setGrandTotal(gT);
    }

    return <div>
        <AddProductForm onAddProducts={onAddProducts}/>
        <InventoryProduct inventoryProducts={inventoryProducts} onAddToCart={onAddToCart}/>
        <CartProduct cartProducts={cartProducts} />
        <br/>
        <GrandTotal GrandTotal={grandTotal}/>
    </div>;
}