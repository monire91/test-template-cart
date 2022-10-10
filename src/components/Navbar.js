import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div className="p-3 shadow-lg bg-white flex justify-center mb-6">
            <Link className="mx-2" to="/">
                Home
            </Link>
            <Link className="mx-2" to="/cart">
                Cart (0)
            </Link>
        </div>
    );
}
