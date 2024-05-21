import { useRef } from "react";
import Cart from "./Cart";
import Menu from "./Menu";

export default function CartItens(){

    let cartItens = [{}]
    const open = useRef<HTMLDivElement>(null)

    const openCartItens = () => {
        if(open.current){
            open.current.style.display = 'flex'
        }
    }

    const closeCartItens = () => {
        if(open.current){
            open.current.style.display = 'none'
        }
    }

    
    function addItenToCart(productName: String, productPrice: Number) {

        /*
        if(cartItens.find(item => item.productName === productName)){
         // Se o item já existe, aumenta apenas a quantidade + 1 
            cartItens.quantity += 1;
        }else{
        
        }
        */

        cartItens.push({
            productName,
            productPrice,
            quantity: 1,
        })
      
    }



    return(
        <>
            <Cart openCartItens={openCartItens} />
            <Menu addItenToCart={addItenToCart} />

            <section 
                className="justify-center items-center w-full h-full p-8 bg-black/70 fixed top-0 left-0 z-[99] hidden"
                ref={open}>
                <aside className="w-full md:max-w-[600px] h-auto p-4 rounded-lg bg-white">

                    <h1 className="text-center text-2xl">Meu Pedido</h1>

                    <div 
                        className="flex justify-between mb-2 flex-col max-h-[400px] overflow-auto">
                    </div>

                    <p>Total: R$ <span>0</span>,00</p>

                    <div className="flex justify-between mt-2">
                        <button 
                            className="border p-1 px-3 rounded-md"
                            onClick={closeCartItens}
                            id="close-cartItens">Fechar
                        </button>
                        <button 
                            className="bg-green-700 p-1 px-3 rounded-md text-white font-light"
                            id="finish-order">Finalizar Pedido</button>
                    </div>
                </aside>
            </section>
        </>
    )
}