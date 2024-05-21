import Cart from "./components/Cart"
import CartItens from "./components/CartItens"
import Header from "./components/Header"
import Menu from "./components/Menu"

 
function App() {

  const openCartItens = () => {
    return
  }

  return (
    <>
      <Header />
      <Menu />
      <Cart openCartItens={openCartItens}/>
      <CartItens />
    </>
  )
}

export default App
