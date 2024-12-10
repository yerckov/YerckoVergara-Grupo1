import ItemList from "../ItemList/ItemList";

export default function ProductPage() {
    return (
        <div className="container mx-auto max-w-[1170px] px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-semibold text-gray-900 mb-4">Explora Nuestros Productos</h1>
                <p className="text-lg text-gray-600">
                    Encuentra los productos más recientes y destacados en nuestra colección. Navega entre una amplia variedad de artículos
                    diseñados para satisfacer tus necesidades y preferencias de estilo.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                <ItemList />
            </div>
            <div className="flex justify-center items-center mt-12">
                <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-500 transition duration-200">
                    Ver Más Productos
                </button>
            </div>
        </div>
    );
}
