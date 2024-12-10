import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export default function Item({ id, name, brand, price, oldPrice, img, colors, rating, reviews, stock }) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        if (stock > 0) {
            addToCart({ id, name, brand, price, img, colors, quantity: 1 });
        } else {
            alert("Lo sentimos, no hay stock disponible para este producto.");
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-80 bg-gradient-to-r from-blue-600 to-blue-300 shadow-lg rounded-lg overflow-hidden my-6 mx-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-200">
                <Link to={`/products/${id}`} className="block">
                    <div className="h-80 bg-white">
                        <img
                            src={img}
                            alt={`Imagen de ${name}`}
                            className="h-full w-full object-contain transition-all duration-500"
                        />
                    </div>
                </Link>

                <div className="p-4">
                    <p className="text-sm text-black uppercase font-medium">{brand}</p>

                    <Link
                        to={`/products/${id}`}
                        className="block text-lg font-semibold text-black hover:text-yellow-600 transition duration-300 mt-2"
                    >
                        {name}
                    </Link>

                    <div className="flex items-baseline space-x-2 mt-4">
                        <span className="text-xl font-bold text-black">${price}</span>
                        {oldPrice && (
                            <span className="text-sm line-through text-gray-500">${oldPrice}</span>
                        )}
                    </div>

                    {colors && colors.length > 0 && (
                        <div className="flex items-center space-x-2 mt-3">
                            {colors.map((color, index) => (
                                <span
                                    key={index}
                                    className="w-6 h-6 rounded-full border border-gray-300"
                                    style={{
                                        backgroundColor:
                                            typeof color === "string" ? color : "#FFFFFF",
                                    }}
                                ></span>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center mt-4">
                        <div className="flex text-yellow-500 text-sm">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <span key={index}>{index < rating ? "★" : "☆"}</span>
                            ))}
                        </div>
                        <span className="text-sm text-black ml-2">({reviews} reviews)</span>
                    </div>

                    <div className="mt-4">
                        {stock === 0 ? (
                            <button
                                disabled
                                className="w-full bg-gray-400 text-white py-2 rounded cursor-not-allowed"
                            >
                                Agotado
                            </button>
                        ) : (
                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-all"
                            >
                                Agregar al carrito
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    img: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
};

Item.defaultProps = {
    oldPrice: null,
    colors: [],
    rating: 0,
    reviews: 0,
};
