import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Stars from "../Stars"
import Button from "../Button"

export default function ProductsShow({ products }) {
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id))
        setProduct(foundProduct)
    }, [id, products])

    if (!product) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>
    }

    return (
        <div className="container mx-auto px-4 py-8 bg-black/50 rounded-lg border-2 border-violet-500">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="">
                    <img 
                        src={`http://127.0.0.1:8000${product.image}`} 
                        alt={product.title}
                        className="w-[300px] h-auto rounded-lg p-4"
                    />
                </div>
                <div className="">
                    <h1 className="text-3xl font-bold text-white mb-4">{product.title}</h1>
                    <div className="flex items-center mb-4">
                        <Stars rating={product.rating} />
                        <span className="ml-2 text-white">({product.rating.count} reviews)</span>
                    </div>
                    <p className="text-2xl text-white font-bold mb-4">${product.price}</p>
                    <p className="text-white mb-6">{product.description}</p>
                    <div className="mb-4">
                        <span className="text-sm font-semibold text-white">Category:</span>
                        <span className="ml-2 text-white capitalize">{product.category}</span>
                    </div>
                    <Button text="Pirkt" />
                </div>
            </div>
        </div>
    )
}
