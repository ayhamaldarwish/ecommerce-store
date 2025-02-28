import React from 'react'
import Data from '../products.json'

const ShopCategory = ({filterItem, menuItems, selectedCategory, setItem, setProducts}) => {
  return (
    <>
      <div className='widget-header'>
        <h5 className='ms-2'>All Categories</h5>
      </div>
      <div>
        <button onClick={() => setProducts(Data)} className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}>
          All
        </button>
        {
          menuItems.map((Value , id) => {
            return(
              <button 
                    key={id} 
                    onClick={() => filterItem(Value)} 
                    className={`m-2 ${selectedCategory === Value ? "bg-warning" : ""}`}>
                {Value}
              </button>
            )
          })
        }
      </div>
    </>
  )
}

export default ShopCategory