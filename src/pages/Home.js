import {useState} from "react";
import Product from "../components/Product";
import Navbar from "../components/Navbar";

export default function Home() {
    const [searchValue, setSearchValue] = useState("");
    const handleSearch = (e) => {
        let value = e.target.value.toLowerCase();
        setSearchValue(value);
    };
    return (
        <>
            <Navbar/>
            <div className="flex flex-col items-center">
                <h1>Products</h1>
                <div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Product Name"
                            onChange={handleSearch}
                        />
                        <button className="btn btn-outline-secondary" type="button">
                            Search
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Product searchValue={searchValue}/>
                    </div>
                </div>
            </div>
        </>
    );
}
