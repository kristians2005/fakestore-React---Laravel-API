

export default function Category(props) {
    return (
        <div>
            <select className="bg-black/50 text-white p-2 ">
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
        </div>
    )
}
