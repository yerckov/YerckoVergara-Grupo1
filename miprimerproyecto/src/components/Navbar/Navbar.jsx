import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();
    const { cartItems } = useCart();
    let timeoutId;

    useEffect(() => {
        const isCategoryPage = location.pathname.startsWith('/category/');
        setIsDropdownOpen(isCategoryPage);
    }, [location.pathname]);

    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 300);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3">
                <ul className="flex justify-center items-center space-x-6 w-full">
                    <li className="text-sm font-normal uppercase text-gray-800 hover:text-yellow-500 transition duration-300 w-full text-center">
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        className="relative w-full text-center"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="text-sm font-normal uppercase text-gray-800 hover:text-yellow-500 transition duration-300 focus:outline-none w-full">
                            Shop
                        </button>
                        <ul
                            className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-md rounded-md z-10 transition-opacity duration-300 ease-in-out ${
                                isDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            } grid grid-cols-1 gap-2 p-2`}
                        >
                            {['Pantalónes', 'Polerónes', 'Joggers', 'Sweaters', 'Poleras', 'Shorts', 'Camisas', 'Chaquetas'].map(
                                (category) => (
                                    <li key={category}>
                                        <Link
                                            to={`/category/${category.toLowerCase()}`}
                                            className="block px-3 py-1 text-sm text-gray-700 bg-gray-50 hover:bg-yellow-100 border border-gray-200 rounded-md shadow-sm transition-all duration-300 text-center"
                                        >
                                            {category}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </li>
                    <li>
                        <Link
                            to="/cart"
                            className="text-2xl text-gray-800 hover:text-yellow-500 transition duration-300 flex items-center"
                        >
                            <FaShoppingCart />
                            <span className="ml-1 text-sm text-gray-800">{cartItems.length}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
