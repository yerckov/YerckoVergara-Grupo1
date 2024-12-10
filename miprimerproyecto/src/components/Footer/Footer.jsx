import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function FooterComponent() {
    return (
        <footer className="bg-[#171e27] py-12 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-6">
                    <Link to="/about" className="text-white hover:text-gray-400 transition duration-300">About</Link>
                    <Link to="/contact" className="text-white hover:text-gray-400 transition duration-300">Contacto</Link>
                </div>
                <div className="flex space-x-8">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-white text-3xl hover:text-blue-500 transition duration-300" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-white text-3xl hover:text-blue-400 transition duration-300" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-white text-3xl hover:text-pink-500 transition duration-300" />
                    </a>
                </div>
            </div>
            <div className="w-full border-t border-gray-600 mt-4 pt-4 text-center">
                <p className="text-gray-400 text-xs mb-1">
                    &copy; 2024. Todos los derechos reservados.
                </p>
                <p className="text-gray-400 text-xs">
                    Privacy Policy | Terms of Service
                </p>
            </div>
        </footer>
    );
}
