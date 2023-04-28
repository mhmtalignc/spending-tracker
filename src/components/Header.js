import React from 'react'
import { moneyFormat } from '../helpers'


function Header({money,total}) {
  return (
  
    <div className='header'>
      
        {total > 0 && money-total !==0 &&(
          <div>Harcayacak <span>{moneyFormat(money-total)}</span> ₺ paranız kaldı.</div>
        )}
        {total === 0 && (
          <div>Harcamak için <span>{moneyFormat(money)}</span> ₺ paranız var.</div>
        )}
        {money - total === 0 && (
          <div>Paran bitti! Parasız erkek patlıcan dolmasına benzer!</div>
        )}
        
      
    </div>
    
  )
}

export default Header