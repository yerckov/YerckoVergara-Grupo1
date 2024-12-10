import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const { cartItems, removeFromCart, clearCart, cartTotal, addToCart, decrementQuantity } = useCart();
    const navigate = useNavigate();

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Carrito de Compras</h1>

            {cartItems.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-xl text-gray-600">Tu carrito está vacío.</p>
                    <button
                        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                        onClick={() => navigate('/')}
                    >
                        Volver al inicio
                    </button>
                </div>
            ) : (
                <div>
                    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Productos en tu carrito</h2>
                        <ul className="space-y-4">
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex justify-between items-center border-b pb-4">
                                    <div className="flex items-center">
                                        <img
                                            src={item.img} // Usa la URL de la imagen aquí
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-md mr-4"
                                        />
                                        <div>
                                            <p className="font-medium text-gray-700">{item.name}</p>
                                            <p className="text-sm text-gray-500">{item.quantity} x ${item.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => decrementQuantity(item.id)} // Disminuir cantidad
                                            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 mr-2"
                                        >
                                            -
                                        </button>
                                        <button
                                            onClick={() => addToCart(item)} // Aumentar cantidad
                                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-2"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => removeFromCart(item.id)} // Eliminando el producto
                                            className="text-red-500 hover:text-red-700 font-semibold"
                                        >
                                            Quitar
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-xl font-semibold text-gray-700">Total:</p>
                            <p className="text-xl font-semibold text-gray-900">${cartTotal}</p>
                        </div>
                        <button
                            onClick={clearCart} // Vaciar el carrito
                            className="w-full mt-4 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition duration-200"
                        >
                            Vaciar carrito
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

