
import { HiShoppingCart } from "react-icons/hi"; 

interface cartProps {
    openCartItens: () => void;
}

export default function Cart({openCartItens}: cartProps){

    return(
        <>
            <footer className="fixed bottom-0 z-40 flex items-center justify-center w-full p-4 bg-green-700 text-white">
                <button 
                    className="flex items-center justify-center gap-2 w-full"
                    onClick={openCartItens}
                    >
                    <HiShoppingCart className="h-5 w-5"/>
                    Ver Pedido
                    <span>(0)</span>
                </button>
            </footer>
        </>
    )
}