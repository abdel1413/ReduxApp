export default function MusicAppPricing(){
    return <>
     <div id="shopping-cart-container" className='flex flex-col lg:flex-row'>
     <div id="products-container" >
       <div className="card">
         <h2  className="text-sm text-base text-lg text-xl text-2xl ">product name 1</h2>  
          <div class="quantity">5</div>
       <div className="price">$10</div>
       <button className="remove-button bg-red-300 hover:bg-red-400">Remove</button>
       </div>
       <div className="card">
         <h2 className="text-sm text-base text-lg text-xl text-2xl ">product name 2</h2>
         <div class="quantity">9</div>
        <div className="price">$15</div>
   <button className="remove-button bg-red-300 hover:bg-red-400">Remove</button>
       </div>
       <div id="order-summary-container" className="rounded-md border-2 text-lg">
         <h2 className="text-2xl">Order Summary</h2>
         <p id='total' className='font-semibold text-lg'>Total:</p>
         <span id="total-amount">$25</span>
         <a href='#' className="text-center bg-blue-300 hover:bg-blue-400">Checkout</a>
       </div>
     </div>
   </div>
    </>
}