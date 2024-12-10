import { getProductByCategory } from "../../data/asyncMock";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


const ProductsCategory = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const products = await getProductByCategory(categoryId);
                setProducts(products);
            } catch (err) {
                setError(err.message);
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts().catch(err => console.error("Failed to fetch products:", err));

    }, [categoryId]);

    return (
        <div className="container mx-auto max-w-[1170px]">
            {loading ? (
                <Loading />
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ProductsCategory;
