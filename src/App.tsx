import Cart from "./components/Cart"
import CartItens from "./components/CartItens"
import Header from "./components/Header"
import Menu from "./components/Menu"

 
function App() {

  const openCartItens = () => {
    return
  }
  const addItenToCart = () => {
    return
  }

  return (
    <>
      <Header />
      <Menu addItenToCart={addItenToCart}/>
      <Cart openCartItens={openCartItens}/>
      <CartItens />
    </>
  )
}

export default App
