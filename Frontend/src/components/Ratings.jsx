import Stars from "./Stars"

export default function Ratings(props) {
    return (
        <div className="flex flex-row items-center gap-2 justify-center ">
            <h1 className="text-white text-lg font-bold">Rating: </h1>
            <Stars rating={props.rating} />
        </div>
    )
}
