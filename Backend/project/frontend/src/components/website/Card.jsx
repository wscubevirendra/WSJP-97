import React from "react";

const cards = [
    {
        title: "Card Title 1",
        description: "This is a description for card 1.",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Card Title 2",
        description: "This is a description for card 2.",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Card Title 3",
        description: "This is a description for card 3.",
        image: "https://via.placeholder.com/150",
    },
];

const Card = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {cards.map((card, idx) => (
            <div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
                <img
                    src={card.image}
                    alt={card.title}
                    className="h-40 w-full object-cover"
                />
                <div className="p-4 flex-1 flex flex-col">
                    <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
                    <p className="text-gray-600 mb-4 flex-1">{card.description}</p>
                    <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Learn More
                    </button>
                </div>
            </div>
        ))}
    </div>
);

export default Card;