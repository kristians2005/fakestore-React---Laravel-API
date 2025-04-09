import ProductsCard from "../ProductsCard"
import { Link } from "react-router-dom"


export default function Products(props, isLoading) {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-white mb-4 text-center">Produkti</h1>
            <Link to="/products/create" className="bg-violet-500 text-white font-bold hover:bg-violet-600 p-2 rounded-lg mb-4 inline-block">Izveidot jaunu produktu</Link>
            {isLoading ? <div>Loading...</div> : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                {props.products.map(product => (
                    <div key={product.id} >
                        <ProductsCard product={product} />
                    </div>        
                ))}
            </div>
            )}
        </div>
    )
}
