import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx';
import { useCart } from '../../contexts/CartContext.jsx';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({ product: 0, stock: 0 });
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const precioTotal = product.price * quantity;

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    const handleBuyNow = () => {
        addToCart(product, quantity);
        navigate('/cart');
    };

    if (loading) {
        return <div className='container mx-auto max-w-[1170px]'><Loading /></div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='container mx-auto max-w-[1170px] px-4 py-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-center">
                    <img src={product.img} alt="Imagen del producto" className='max-w-[400px] rounded-lg shadow-md' />
                </div>
                <div>
                    <h1 className='text-3xl font-semibold text-gray-800'>{product.name}</h1>
                    <p className='text-lg text-gray-600 my-4'>{product.description}</p>

                    <div className='mt-6'>
                        <h3 className='text-xl font-medium text-gray-700'>Tallas disponibles:</h3>
                        <ul className='flex gap-3 mt-2'>
                            {product.sizes.map((size, index) => (
                                <li key={index} className='text-md px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-200 cursor-pointer'>{size}</li>
                            ))}
                        </ul>
                    </div>

                    <p className='text-lg text-gray-700 mt-4'>Stock disponible: <span className="font-medium">{product.stock}</span></p>

                    <div className="flex items-center mt-6">
                        <button onClick={decrementQuantity} className='bg-gray-200 text-gray-700 text-2xl w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300'>
                            -
                        </button>
                        <p className='text-xl mx-4'>{quantity}</p>
                        <button onClick={incrementQuantity} className='bg-gray-200 text-gray-700 text-2xl w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300'>
                            +
                        </button>
                    </div>

                    <p className='text-lg font-medium text-gray-800 mt-4'>Precio: <span className="text-gray-700">${product.price} por unidad</span></p>
                    <p className='text-lg font-medium text-gray-800 mt-2'>Precio Total: <span className="text-gray-700">${precioTotal}</span></p>

                    <div className="flex gap-4 mt-6">
                        <button onClick={handleBuyNow} className='bg-black text-white text-lg px-8 py-2 rounded-lg hover:bg-gray-800'>
                            Comprar Ahora
                        </button>

                        <button onClick={handleAddToCart} className='bg-black text-white text-lg px-8 py-2 rounded-lg hover:bg-gray-800'>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

