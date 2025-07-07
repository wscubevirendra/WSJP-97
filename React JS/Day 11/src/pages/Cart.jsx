import { useContext } from "react";
import { Context } from "../Store";

const Cart = () => {
    const { cart, qtyHandler, removeFromCart } = useContext(Context)

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">🛒 Shopping Cart</h1>

            {cart.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center justify-between bg-white p-4 mb-4 rounded-lg shadow"
                >
                    {/* Left: Image + Details */}
                    <div className="flex items-center gap-4">
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-20 h-20 object-cover rounded"
                        />
                        <div>
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-gray-600 text-sm">₹{item.price}</p>
                        </div>
                    </div>

                    {/* Right: Controls */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded">
                            <button onClick={() => qtyHandler(item.id, 0)} className="px-3 py-1 text-lg bg-gray-100 hover:bg-gray-200">
                                -
                            </button>
                            <span className="px-4">{item.qty}</span>
                            <button onClick={() => qtyHandler(item.id, 1)} className="px-3 py-1 text-lg bg-gray-100 hover:bg-gray-200">
                                +
                            </button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 text-sm">
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
