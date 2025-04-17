import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import OrderModal from './components/OrderModal'

//import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {

  return (
    <>
      <>
      <Provider store={store}>
        <div className="app-container">
          <main className="product-list">
            <header className="App-header">
              <p className="category">Desserts</p>
            </header>
            <ProductList />
          </main>
          <aside className="cart">
            <Cart />
          </aside>
          <OrderModal />
        </div>
      </Provider>
      </>
    </>
  )
}

export default App
