export default function Product() {

    return (
        <div className="p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <img
                src="https://ae01.alicdn.com/kf/S401117707f364435a443f13bef348640m/Globale-M30-Pro-2021-Tablet-MT6797-10Core-6GB-RAM-128GB-ROM-Android-Tablet-10-1-Zoll.jpg_Q90.jpg_.webp"
                className="card-img-top"
                alt=""
            />
            <div className="card-body">
                <h5 className="card-title">Product Title</h5>
                <div className="mt-2">
                    <strong>$2.00 USD</strong>
                </div>
                <button className="bg-primary text-white p-1 mt-2">Add to cart</button>
            </div>
        </div>
    );
}
