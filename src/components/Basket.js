import { useState } from "react";
import Basketitem from "./Basketitem";
import { moneyFormat } from "../helpers";



function Basket({basket,products,total,resetBasket}) {
  return (
    <div className="basket-container container">
      <h3>Alış Veriş Detayları</h3>
        <ul>
          {
        basket.map(item => (
                <Basketitem key={item.id} item={item} product={products.find((p) => p.id === item.id)}
               />
            ))
        }
        </ul>
         
        <div className="total">
        Toplam: {moneyFormat(total)}₺<br/>
        </div>
         <button onClick={resetBasket}> Sepeti Sıfırla </button> 
       <style jsx>{`
       .basket-container{
        padding: 20px;
        background: #fff;
        border: 1px solid #ddd;
        margin-bottom: 15px;
       }
       .basket-container h3{
        font-size: 20px;
        margin-bottom: 15px;
        letter-spacing: 1px;
       }
       .basket-container .total{
        border-top: 1px solid #ddd;
        padding-top: 10px;
        margin-top: 10px;
        font-size: 19px;
        font-weight: bold;
        text-align: right;
        color: #179b5a;
       }
       .basket-container button{
        background: #61dafb;
            font-size: 17px;
            font-weight: bold;
            border-radius: 4px;
            letter-spacing: 0.5px;
            color: black;
            height: 40px;
            width: 150px;
            cursor: pointer;
       }
       .basket-container button:hover{
        background: red;
        color: white;
       }
       `
       }
        </style> 
    </div>
  )
}

export default Basket