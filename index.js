const express = require ('express');
const morgan = require('morgan');
const app = express();
app.use(express.json());

const now = new Date();
const port = 8080;

const products = [
    {
      "id": 1,
      "title": "new Title marcos",
      "price": 100004,
      "description": "new Description",
      "images": [
        "https://api.lorem.space/image/shoes?w=640&h=480&r=5193",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=2221",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=2672"
      ]
    },
    {
      "id": 3,
      "title": "new try",
      "price": 29,
      "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      "images": [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4308",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4555",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4493"
      ]
    },
    {
      "id": 4,
      "title": "Licensed Plastic Table",
      "price": 808,
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "images": [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6769",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6810",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=2350"
      ]
    },
    {
      "id": 5,
      "title": "Refined Plastic Shirt",
      "price": 252,
      "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "images": [
        "https://api.lorem.space/image/watch?w=640&h=480&r=9592",
        "https://api.lorem.space/image/watch?w=640&h=480&r=6436",
        "https://api.lorem.space/image/watch?w=640&h=480&r=4565"
      ]
    }
];

const about = [
    {
        name: "Juan Sebastián",
        age: "32",
        city: "Medellín",
        links: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/juansmuar/",
            },
            {
                name: "GitHub",
                url: "https://github.com/juansmuar",
            },
        ],
        skills: [
            {
                name: "javaScript",
                level: "learning",
            },
            {
                name: "HTML",
                level: "learning",
            },
            {
                name: "CSS",
                level: "learning",
            },
            {
                name: "React",
                level: "learning",
            },
            {
                name: "Node",
                level: "learning",
            },
            {
                name: "C++",
                level: "Intermediate",
            },
        ]
    }
]

let filtered = [
    {
      "id": 1,
      "title": "new Title marcos",
      "price": 100004,
      "description": "new Description",
      "images": [
        "https://api.lorem.space/image/shoes?w=640&h=480&r=5193",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=2221",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=2672"
      ]
    },
    {
      "id": 3,
      "title": "new try",
      "price": 29,
      "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      "images": [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4308",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4555",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4493"
      ]
    },
    {
      "id": 4,
      "title": "Licensed Plastic Table",
      "price": 808,
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "images": [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6769",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6810",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=2350"
      ]
    },
    {
      "id": 5,
      "title": "Refined Plastic Shirt",
      "price": 252,
      "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "images": [
        "https://api.lorem.space/image/watch?w=640&h=480&r=9592",
        "https://api.lorem.space/image/watch?w=640&h=480&r=6436",
        "https://api.lorem.space/image/watch?w=640&h=480&r=4565"
      ]
    }
];

app.get('/api/products', (req, res) => {
  res.send(products);
});

app.get('/info', (req, res) => {
    res.send(`<h3>Our store has info for ${products.length} products</h3>
    <h2>${now}</h2>`);
});

app.get('/about', (req, res) => {
    res.send(about);
});

app.get('/api/products/:id', (req, res) => {
  let found = products.find(element => element.id === parseInt(req.params.id));
  if (found == undefined || found == null){
    res.status(404).send('Error 404 Not Found');
  } else 
  res.send(found);
});

app.listen(port, function(err){
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});