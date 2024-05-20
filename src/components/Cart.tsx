import { HiShoppingCart } from "react-icons/hi"; 

export default function Cart(){

    //const openCartItens = () => {
        
    //}

    return(
        <>
            <footer className="fixed bottom-0 z-40 flex items-center justify-center w-full p-4 bg-green-700 text-white">
                <button 
                    className="flex items-center gap-2"
                    >
                        <HiShoppingCart className="h-5 w-5"/>
                        Ver Pedido
                </button>
            </footer>
        </>
    )
}