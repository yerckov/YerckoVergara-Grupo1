import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const images = [
    './banner1.jpg',
    './banner2.jpg',
    './banner3.jpg'
];

export default function HomePage() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="bg-gray-100 min-h-screen">
            <section className="relative">
                <div
                    className="h-[600px] w-full bg-cover bg-center transition-all duration-700"
                    style={{ backgroundImage: `url(${images[currentImage]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="bg-black bg-opacity-50 p-10 text-center flex items-center justify-center h-full">
                        <div className="max-w-xl mx-auto">
                            <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-4">
                                Bienvenido a Nuestra Tienda de Ropa
                            </h1>
                            <p className="text-gray-300 text-lg md:text-xl mb-6">
                                Descubre tu estilo único con nuestra colección.
                            </p>
                            <Link
                                to="/products"
                                className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-200"
                            >
                                Comienza a Comprar
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 inset-x-0 flex justify-center space-x-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            className={`h-3 w-3 rounded-full ${currentImage === idx ? 'bg-green-600' : 'bg-gray-300'}`}
                            onClick={() => setCurrentImage(idx)}
                        />
                    ))}
                </div>
            </section>

            <section
                className="relative py-12 px-4 md:px-6"
                style={{ backgroundImage: 'url(/featured-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'black' }}
            >
                <div className="bg-white bg-opacity-90 rounded-lg p-10 shadow-lg max-w-6xl mx-auto">
                    <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
                        Nuestros Productos Destacados
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <ItemList itemSize="small" />
                    </div>
                </div>
            </section>
        </main>
    );
}

