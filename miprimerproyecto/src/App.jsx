import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/Header/Header.jsx';
import FooterComponent from './components/Footer/Footer.jsx';
import HomePage from './components/Home/Home.jsx';
import AboutPage from './components/About/About.jsx';
import ContactPage from './components/Contact/Contact.jsx';
import ProductsPage from './components/Products/Products.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';
import ProductsCategory from './components/Category/Category.jsx';
import { CartProvider } from './contexts/CartContext.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="app-container flex flex-col min-h-screen">
                    <HeaderComponent />

                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/products" element={<ProductsPage />} />
                            <Route path="/products/:productId" element={<ItemDetail />} />
                            <Route path="/category/:categoryId" element={<ProductsCategory />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </main>

                    <FooterComponent />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;

