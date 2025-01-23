import App from './App.jsx'
import Product from './Product'
import { CartProvider } from './CartContext'

const routes = [
  {
    path: "/",
    element: (
      <CartProvider>
        <App />
      </CartProvider>
    ),
  },
  {
    path: "/Product/:id",
    element: (
      <CartProvider>
        <Product />
      </CartProvider>
    ),
  }
]

export default routes