export default function CartItens(){

    const openCart = () => {
        
    }

    return(
        <>
            <section 
                className="justify-center items-center w-full h-full p-8 bg-black/70 fixed top-0 left-0 z-[99] hidden"
                id="cart-itens">
                <aside className="w-full md:min-w-[600px] h-auto p-4 rounded-lg bg-white">

                    <h1 className="text-center text-2xl">Meu Pedido</h1>

                    <div className="flex justify-between mb-2 flex-col max-h-[400px] overflow-auto">
                    </div>
                    <p>Total: R$ <span>0</span>,00</p>

                    <div className="flex justify-between mt-2">
                        <button 
                            className="border p-1 px-3 rounded-md"
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