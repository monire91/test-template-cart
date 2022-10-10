import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";

export default function Cart() {
    return (
       <>
           <Navbar/>
           <div className="flex flex-col items-center">
               <h1>Cart</h1>

               <div className="row">
                   <div>
                       <CartItem />
                   </div>
               </div>

               <h4 className="mt-8">Total: $6.00 USD</h4>
           </div>
       </>
    );
}
