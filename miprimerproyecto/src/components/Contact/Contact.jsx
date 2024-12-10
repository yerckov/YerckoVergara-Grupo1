import { useState, useEffect } from 'react';
import { DotLoader } from 'react-spinners';

function ContactPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center bg-white">
                <DotLoader color="#FFFF00" size={80} />
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-[1170px] py-10">
            <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Contáctanos</h1>
            <p className="text-center text-gray-600 mb-6">
                ¡Nos encantaría saber de ti! Por favor, completa el siguiente formulario.
            </p>
            <form className="bg-white shadow-md rounded-lg p-8">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Tu Nombre"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Tu Correo Electrónico"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Tu Mensaje"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Enviar Mensaje
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactPage;

