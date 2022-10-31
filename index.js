const express = require ('express');
const morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(morgan('dev'));

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

//Consuta todos los productos
app.get('/api/products', (req, res) => {
  res.send(products);
});

//Consulta producto por id
app.get('/api/products/:id', (req, res) => {
  const found = products.find(element => element.id === parseInt(req.params.id));
  if (!found){
    return res.status(404).send('Error 404 Not Found');
  } 
  res.send(found);
});

//Consulta hora y cantidad de productos
app.get('/info', (req, res) => {
    res.send(`<h3>Our store has info for ${products.length} products</h3>
    <h2>${now}</h2>`);
});

//Consulta Información personal
app.get('/about', (req, res) => {
    res.send(about);
});

//Borrar por id
app.delete('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(element => element.id === parseInt(req.params.id));
  if (productIndex >= 0) {
    products.splice(productIndex, 1);
    return res.status(201).send(products);
  } 
  res.status(404).send('Error 404 Not Found');
});

//Agregar nuevo producto
app.post('/api/products', (req, res) => {
  const newProduct = req.body;

  if (newProduct.title === undefined || newProduct.title === ""){
    return res.status(400).send('{ "error": "title is needed" }');
  } 
  else if (newProduct.price === undefined || newProduct.price === "") {
    return res.status(400).send('{ "error": "price is needed" }');
  } 
  else if (products.find(element => element.title === newProduct.title)){
    return res.status(404).send('{ "error": "title must be unique" }');
  }
  newProduct.id = (Math.random() * (100 - 6) + 6).toFixed(0);
  products.push(newProduct);
  res.status(201).send(products)
  }
)

app.listen(port, function(err){
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});
