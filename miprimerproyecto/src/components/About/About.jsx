import { useState, useEffect } from 'react';
import { DotLoader } from 'react-spinners';

function AboutPage() {
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
        <div className="container mx-auto max-w-[1170px] py-10 px-6">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-blue-600">Sobre Nosotros</h1>
                <p className="text-gray-700 mt-4 leading-relaxed">
                    Bienvenido a nuestra tienda, donde la moda se convierte en una experiencia única. Ofrecemos prendas de alta calidad que combinan estilo, comodidad y autenticidad, diseñadas para realzar tu personalidad.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Nuestra Misión</h2>
                    <p className="text-gray-800 leading-relaxed">
                        Inspirar confianza a través de la moda, ofreciendo ropa que destaque por su diseño innovador, materiales sostenibles y precios accesibles. Queremos que cada cliente se sienta único y especial.
                    </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Nuestra Visión</h2>
                    <p className="text-gray-800 leading-relaxed">
                        Ser una marca líder en el sector de la moda, conocida por nuestro compromiso con la calidad, la sostenibilidad y el diseño.
                    </p>
                </div>
            </div>

            <div className="mt-10">
                <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-green-700 text-center mb-4">Nuestros Valores</h2>
                    <p className="text-gray-800 text-center max-w-2xl mx-auto leading-relaxed">
                        Nos impulsa la pasión por la moda, el respeto por el medio ambiente y el deseo de ofrecer una experiencia excepcional. Creemos en la creatividad, la inclusión y la innovación como pilares fundamentales.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;

