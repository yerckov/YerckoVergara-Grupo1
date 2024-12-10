import PropTypes from 'prop-types';
import Item from "../Item/Item";
import { getProducts } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

export default function ItemList({ products: initialProducts }) {
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        if (!initialProducts) {
            getProducts().then((data) => {
                setProducts(data);
                setLoading(false);
            }).catch(err => {
                console.error('Error al obtener productos:', err);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [initialProducts]);

    return (
        <>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div className="flex flex-wrap">
                    {products.length > 0 ? (
                        products.map((prod) => (
                            <Item {...prod} key={prod.id} />
                        ))
                    ) : (
                        <p>No hay productos disponibles</p>
                    )}
                </div>
            )}
        </>
    );
}

ItemList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ),
};
