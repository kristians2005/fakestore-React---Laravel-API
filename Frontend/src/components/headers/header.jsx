import fakeLogo from "../../assets/fakestore-logo.png"
import SearchBar from "../SearchBar"
import Category from "../Category"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="flex gap-4 p-4 pl-10 sticky top-0 z-10">
            <img src={fakeLogo} width={100} alt="fake store logo" />
            <div className="flex flex-col justify-center">
                <Link to="/">
                    <h1 className="text-3xl font-bold text-white hover:text-violet-500">Fake Store</h1>
                </Link>
                <p className="text-lg text-white">Iepirkšanās Tev</p>
            </div>
            <div className="flex justify-end items-center ml-auto mr-10 gap-4">
                <Category />
                <SearchBar />
            </div>
        </div>
    )
}
