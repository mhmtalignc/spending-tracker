import React from 'react'
import { moneyFormat } from '../helpers'

function Product({product,basket,setBasket,total,money}) {
  
  const basketItem = basket.find(item => item.id === product.id)

  const addBasket = () =>{
    const checkBasket=basket.find(item => item.id === product.id)
    if(checkBasket){
      checkBasket.amount +=1
      setBasket([...basket.filter(item => item.id !== product.id),checkBasket])
    }else{
      setBasket([...basket,{
        id: product.id,
        amount: 1
      }])
    }
  }

  const removeBasket = () => {
    const currentBasket = basket.find(item => item.id === product.id)
    const currentWithoutCurrent = basket.filter(item => item.id !== product.id)
    currentBasket.amount -=1
    if(currentBasket.amount === 0){
      setBasket([...currentWithoutCurrent])
    }
    else {
      setBasket([...currentWithoutCurrent,currentBasket])
    }
  }
  
  return (
    <div className='product'>
        <img src={product.image}/>
        <h5>{product.title}</h5>
        <div className="price">{moneyFormat(product.price)} ₺</div>
        <div className="actions">
            <button className='sell-btn' disabled={!basketItem} onClick={removeBasket}>Sat</button>
            <span className="amount">{basketItem && basketItem.amount || 0}</span>
            <button className='buy-btn' disabled={total + product.price > money} onClick={addBasket}>Satin Al</button>
        </div>
        <style jsx>{`
        .product{
          padding: 15px;
          background: #fff;
          border: 1px solid #ddd;
          margin-bottom: 20px;
          width: 30%;
          
          }
        .product img{
          width: 100%;
          height: 200px; 
          object-fit: contain;
          }
          .product h5{
            font-size: 21px;
            margin-bottom: 15px;
            margin-top: 15px;
          }
          .product .price{
            font-size: 21px;
            color:#179b17;
          }
          .product .action{
            display: flex;
            align-items: center;
            
          }
          .actions button{
            height:40px;
            padding: 0 15px;
            cursor: pointer;
            margin: 0 10px;
            margin-top:15px;
          }
          .actions button[disabled]{
            opacity: .7;
            cursor: not-allowed;
          }
          .actions .amount{
          width: 50px;
          font-size: 21px;
          align-items: center;
          height:40px;
          justify-content: center;
          text-align: center;
        
          }
          .buy-btn{
            background: #61dafb;
            font-size: 14px;
            font-weight: bold;
            border-radius: 0 4px 4px 0;
            letter-spacing: 1px;
            color: black;
          }
          .sell-btn{
            background: #514f50;
            font-size: 14px;
            font-weight: bold;
            border-radius: 4px 0 0 4px;
            color: #fff;
            letter-spacing: 1px;
          }
          .sell-btn:hover{
            background: red;
            color:white;
          }
          .buy-btn:hover{
            background: green;
            color:#fff;
          }
          
        `}</style>
    </div>
  )
}

export default Product