import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProductsCreate() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', e.target[0].value);
        formData.append('price', e.target[1].value);
        formData.append('category', e.target[2].value);
        formData.append('rating', e.target[3].value);
        formData.append('description', e.target[4].value);
        formData.append('image', e.target[5].files[0]);

        console.log(formData);
        
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/products/store', formData);
            if(res.data.message === "success"){
                navigate('/');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div className="container mx-auto px-4 py-8 bg-black/50 rounded-lg border-2 border-violet-500">
            <h1 className="text-3xl font-bold text-white mb-4">Izveidot jaunu produktu</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input type="text" placeholder="Produkta nosaukums" className="p-2 rounded-lg bg-gray-800 text-white" />
                <input type="number" step="0.01" placeholder="Produkta cena" className="p-2 rounded-lg bg-gray-800 text-white" />
                <input type="text" placeholder="Kategorija" className="p-2 rounded-lg bg-gray-800 text-white" />
                <input type="number" step="0.1" min="0" max="5" placeholder="Vērtējums (0-5)" className="p-2 rounded-lg bg-gray-800 text-white" />
                <textarea placeholder="Produkta apraksts" className="p-2 rounded-lg bg-gray-800 text-white"></textarea>
                <input type="file" className="p-2 rounded-lg bg-gray-800 text-white" />
                <button type="submit" className="bg-violet-500 text-white p-2 rounded-lg">Izveidot produktu</button>
            </form>
        </div>
    )
}