export default function Menu(){

    const products = [
        {
            title: "PF - Prato Feito",
            description: "Arroz e Feijão ou Baião, carne, macarrão, farofa ou cuscuz, salada e macaxeira.",
            price: 13,
            icon: "https://img.freepik.com/fotos-gratis/composicao-de-comida-brasileira-deliciosa-de-alto-angulo_23-2148739223.jpg",
        },

        {
            title: "PF - Prato Feito",
            description: "Arroz e Feijão ou Baião, carne, macarrão, farofa ou cuscuz, salada e macaxeira.",
            price: 13,
            icon: "https://img.freepik.com/fotos-gratis/composicao-de-comida-brasileira-deliciosa-de-alto-angulo_23-2148739223.jpg",
        },
    ]

    return(
        <>
            <main className="p-4">
                <aside>
                    <h1 className="text-5xl text-center font-dancing font-bold">Nosso Cardapio</h1>
                </aside>

                    <section className="flex flex-col md:flex-row gap-2 p-4">
                            {products.map((product, index) =>(
                            <div key={`product-${index}`} className=" flex flex-col md:flex-row m-2 p-2 bg-yellow-500 rounded-lg">
                                <img src={product.icon} alt="" className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300 mx-auto" />
                                
                                <div className="px-2 text-gray-100">
                                    <h2 className="font-bold font-sans text-xl text-center md:text-left">{product.title}</h2>
                                    <p className="font-light">{product.description}</p>

                                    <div className="flex items-center gap-2 justify-between mt-3">
                                        <p className="font-bold text-xl">R$ {product.price},00</p>
                                        <button 
                                            className="bg-gray-500 px-5 rounded"
                                            data-name="Prato-Feito"
                                            data-price="13.00">
                                            Pedir
                                        </button>
                                    </div>
                                </div>
                            </div>))}
                    </section>
            </main>
        </>
    )
}