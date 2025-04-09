import Ratings from "./Ratings"
import Button from "./Button"
import { Link } from "react-router-dom"

export default function ProductsCard(props) {
    return (
        <div className="border-2 border-violet-500 rounded-2xl p-4 min-w-sm max-w-sm h-[300px] bg-black/50 flex flex-col justify-between">
            <div className="flex gap-4 min-h-[150px]">
                <img src={`http://127.0.0.1:8000${props.product.image}`} className="rounded-2xl w-[150px] aspect-square" alt={props.product.title} />
                <div className="flex flex-col justify-between">
                    <Link  to={`/products/${props.product.id}`}>
                        <h2 className="line-clamp-4 text-xl font-bold text-white hover:text-violet-500">{props.product.title}</h2>
                    </Link>
                    <p className="text-3xl font-bold text-white">{props.product.price} EUR</p>
                </div>
            </div>
            <div>
                <p className="text-white line-clamp-2">
                    {props.product.description}
                </p>
            </div>
            <div className="flex justify-between items-center">
                <Ratings rating={props.product.rating} />
                <Button text="Pirkt" />
            </div>
            
            
        </div>
    )
}

