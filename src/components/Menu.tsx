import { MdAddShoppingCart } from "react-icons/md";

export default function Menu(){

    const products = [
        {
            title: "PF - Prato Feito",
            description: "Arroz e Feijão, carne, macarrão, farofa ou cuscuz, salada e macaxeira.",
            price: 13,
            icon: "https://img.freepik.com/fotos-gratis/composicao-de-comida-brasileira-deliciosa-de-alto-angulo_23-2148739223.jpg",
        },

        {
            title: "PF - Prato Feito",
            description: "Baião, carne, macarrão, farofa ou cuscuz, salada e macaxeira.",
            price: 13,
            icon: "https://img.freepik.com/fotos-gratis/composicao-de-comida-brasileira-deliciosa-de-alto-angulo_23-2148739223.jpg",
        },
    ]

    const drinks = [
        {
            title: "Coca-Cola - Lata",
            description: "Coca-Cola gelada para beber e se refrescar.",
            price: 5,
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqa5N-ttO9_H6lhPI1e_No6DMHulUeYRgcJP8HaekM3w&s",
        },

        {
            title: "Guarana - Lata",
            description: "Guarana antartica gelada para beber e se refrescar.",
            price: 5,
            icon: "https://bretasatacarejo.vtexassets.com/arquivos/ids/201657/657b6797ebe0a4a8aead26de.jpg?v=638381830683570000",
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
                            <div key={`product-${index}`} className=" flex m-2 p-2 w-full bg-yellow-500 rounded-lg">
                                <img src={product.icon} alt="" className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300 mx-auto" />
                                
                                <div className="px-2 text-gray-100">
                                    <h2 className="font-bold font-sans md:text-xl">{product.title}</h2>
                                    <p className="font-light text-sm md:text-lg">{product.description}</p>

                                    <div className="flex items-center gap-2 justify-between mt-3">
                                        <p className="font-bold md:text-xl border-b-2">R$ {product.price},00</p>
                                        <button 
                                            className="flex items-center gap-1 bg-green-700 px-2 py-1 rounded"
                                            data-name="Prato-Feito"
                                            data-price="13.00">
                                            <MdAddShoppingCart className="h-5 w-5" />
                                            Pedir
                                        </button>
                                    </div>
                                </div>
                            </div>))}
                    </section>

                    <aside>
                        <h1 className="text-5xl text-center font-dancing font-bold">Bebidas</h1>
                    </aside>

                    <section className="flex flex-col md:flex-row gap-2 p-4 mb-8">
                            {drinks.map((drink, index) =>(
                            <div key={`product-${index}`} className=" flex justify-start m-2 p-2 w-full bg-yellow-500 rounded-lg">
                                <img src={drink.icon} alt="" className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300 mx-auto" />
                                
                                <div className="px-2 text-gray-100">
                                    <h2 className="font-bold font-sans md:text-xl">{drink.title}</h2>
                                    <p className="font-light text-sm md:text-lg">{drink.description}</p>

                                    <div className="flex items-center gap-2 justify-between mt-3">
                                        <p className="font-bold md:text-xl border-b-2">R$ {drink.price},00</p>
                                        <button 
                                            className="flex items-center gap-1 bg-green-700 px-2 py-1 rounded"
                                            data-name="Prato-Feito"
                                            data-price="13.00">
                                            <MdAddShoppingCart className="h-5 w-5" />
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