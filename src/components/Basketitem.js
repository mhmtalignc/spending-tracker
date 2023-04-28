import React from 'react'

function Basketitem({item,product}) {
  return (
   
   <li className='basket-item'>
        {product.title} x <span>{item.amount}</span>
    <style jsx>{`
    .basket-item{
        padding-bottom: 10px;
        font-size: 17px;
        letter-spacing: 0.5px;
    }
    .basket-item span{
        color: #999;
    }
    `
    }
    </style>
    </li>
  
  )
}

export default Basketitem