const http = require('http');
const url = require('url')



const categories = [
    {
        id: 1,
        name: "Electronics",
        slug: "electronics",
        description: "Devices, gadgets, and tech products",
        image: "https://dummyimage.com/600x400/000/fff&text=Electronics"
    },
    {
        id: 2,
        name: "Fashion",
        slug: "fashion",
        description: "Clothing, shoes, and accessories",
        image: "https://dummyimage.com/600x400/000/fff&text=Fashion"
    },
    {
        id: 3,
        name: "Home & Kitchen",
        slug: "home-kitchen",
        description: "Furniture, decor, and appliances",
        image: "https://dummyimage.com/600x400/000/fff&text=Home+%26+Kitchen"
    },
    {
        id: 4,
        name: "Books",
        slug: "books",
        description: "Books across all genres and subjects",
        image: "https://dummyimage.com/600x400/000/fff&text=Books"
    },
    {
        id: 5,
        name: "Sports & Fitness",
        slug: "sports-fitness",
        description: "Sports gear, apparel, and fitness equipment",
        image: "https://dummyimage.com/600x400/000/fff&text=Sports+%26+Fitness"
    },
    {
        id: 6,
        name: "Toys & Games",
        slug: "toys-games",
        description: "Toys, games, and fun activities for all ages",
        image: "https://dummyimage.com/600x400/000/fff&text=Toys+%26+Games"
    }
];

const products = [
    {
        id: 101,
        name: "Wireless Headphones",
        slug: "wireless-headphones",
        category: "Electronics",
        price: 2499,
        discount: 10,
        rating: 4.3,
        stock: 120,
        image: "https://dummyimage.com/600x400/000/fff&text=Headphones",
        description: "High-quality wireless headphones with noise cancellation."
    },
    {
        id: 102,
        name: "Men's Leather Jacket",
        slug: "mens-leather-jacket",
        category: "Fashion",
        price: 3599,
        discount: 15,
        rating: 4.6,
        stock: 45,
        image: "https://dummyimage.com/600x400/000/fff&text=Leather+Jacket",
        description: "Stylish black leather jacket for men."
    },
    {
        id: 103,
        name: "Non-stick Frying Pan",
        slug: "non-stick-frying-pan",
        category: "Home & Kitchen",
        price: 799,
        discount: 5,
        rating: 4.2,
        stock: 200,
        image: "https://dummyimage.com/600x400/000/fff&text=Frying+Pan",
        description: "Durable non-stick frying pan with ergonomic handle."
    },
    {
        id: 104,
        name: "The Alchemist",
        slug: "the-alchemist",
        category: "Books",
        price: 299,
        discount: 0,
        rating: 4.8,
        stock: 85,
        image: "https://dummyimage.com/600x400/000/fff&text=The+Alchemist",
        description: "A novel by Paulo Coelho about following your dreams."
    },
    {
        id: 105,
        name: "Yoga Mat",
        slug: "yoga-mat",
        category: "Sports & Fitness",
        price: 499,
        discount: 20,
        rating: 4.5,
        stock: 150,
        image: "https://dummyimage.com/600x400/000/fff&text=Yoga+Mat",
        description: "Eco-friendly non-slip yoga mat for home workouts."
    },
    {
        id: 106,
        name: "Remote Control Car",
        slug: "remote-control-car",
        category: "Toys & Games",
        price: 999,
        discount: 10,
        rating: 4.1,
        stock: 60,
        image: "https://dummyimage.com/600x400/000/fff&text=RC+Car",
        description: "Fast and durable remote control car for kids."
    }
];



const server = http.createServer(
    (req, res) => {
        const urlParser = url.parse(req.url, true)
        if (urlParser.pathname === "/category") {
            res.end(JSON.stringify(categories))
        } else if (urlParser.pathname === "/product") {
            res.end(JSON.stringify(products))
        }
    }
)


//http://localhost:5000/product?limit=1

//http://localhost:5000---domain
//  /product--path
//?limit=1 query

server.listen(
    "5000",
    () => {
        console.log("Server in running at port number 5000")
    }
)