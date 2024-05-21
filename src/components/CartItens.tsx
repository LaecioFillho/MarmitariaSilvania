import { useRef } from "react";
import Cart from "./Cart";
import Menu from "./Menu";

export default function CartItens(){

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

    
    function addItenToCart(productName: string, productPrice: number) {

        
        if(cartItens.find( (item) => {item.productName === productName})){
             
        }else{
            cartItens.push({
                productName,
                productPrice,
                quantity: 1,
            })
        }

        updateCartItens()
        console.log(cartItens)
    }

    let cartItens = [
        {
            productName: "Test",
            productPrice: 0,
            quantity: 0,
        },
    ]
    
    
    function updateCartItens(){
      return(
        cartItens.forEach(item => {
            <>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium">{item.productName}</p>
                        <p>Qtd: ${item.quantity}</p>
                        <p className="font-medium mt-2">R$ {item.productPrice.toFixed(2)}</p>
                    </div>
                        <button className="remove-from-cart-btn" 
                                data-name="{item.productName}">
                            Remover
                        </button>
                </div>
            </>
        })
      )
    }



    return(
        <>
            <Menu addItenToCart={addItenToCart} />
            <Cart openCartItens={openCartItens} />

            <section 
                className="justify-center items-center w-full h-full p-8 bg-black/70 fixed top-0 left-0 z-[99] hidden"
                ref={open}>
                <aside className="w-full md:max-w-[600px] h-auto p-4 rounded-lg bg-white">

                    <h1 className="text-center text-2xl">Meu Pedido</h1>

                    <div className="flex justify-between mb-2 flex-col max-h-[400px] overflow-auto">
                       
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