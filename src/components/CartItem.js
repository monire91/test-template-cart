export default function CartItem() {
    return (
        <div className="p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <img
                src="https://ae01.alicdn.com/kf/S401117707f364435a443f13bef348640m/Globale-M30-Pro-2021-Tablet-MT6797-10Core-6GB-RAM-128GB-ROM-Android-Tablet-10-1-Zoll.jpg_Q90.jpg_.webp"
                className=""
                alt=""
            />
            <div className="">
                <h5 className="">Product Title</h5>
                <div className="">
                    <strong>$2.00 USD</strong>
                </div>
                <div className="mt-6">
                    <button className="bg-primary w-6 h-6 text-white">+</button>
                    <span className="mx-1">3</span>
                    <button className="bg-primary w-6 h-6 text-white">-</button>
                </div>
            </div>
        </div>
    );
}
