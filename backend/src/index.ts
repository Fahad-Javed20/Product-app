import express from "express"

const app = express()
const port = 3000

app.use(express.json)
app.use()

const products = [
  { id: 1, name: "Wireless Mouse", price: 1200, category: "Electronics", rating: 4.5 },
  { id: 2, name: "Keyboard", price: 2500, category: "Electronics", rating: 4.2 },
  { id: 3, name: "USB-C Cable", price: 500, category: "Accessories", rating: 4.0 },
  { id: 4, name: "Laptop Stand", price: 1800, category: "Accessories", rating: 4.3 },
  { id: 5, name: "Phone Charger", price: 900, category: "Electronics", rating: 4.1 },
  { id: 6, name: "Bluetooth Speaker", price: 3200, category: "Electronics", rating: 4.6 },
  { id: 7, name: "Smart Watch", price: 7000, category: "Gadgets", rating: 4.4 },
  { id: 8, name: "Notebook", price: 200, category: "Stationery", rating: 3.9 },
  { id: 9, name: "Gel Pen Pack", price: 150, category: "Stationery", rating: 4.2 },
  { id: 10, name: "Water Bottle", price: 600, category: "Home", rating: 4.0 },
  { id: 11, name: "Backpack", price: 2200, category: "Bags", rating: 4.3 },
  { id: 12, name: "Gaming Headset", price: 4500, category: "Electronics", rating: 4.5 },
  { id: 13, name: "Table Lamp", price: 1100, category: "Home", rating: 4.1 },
  { id: 14, name: "Power Bank", price: 2600, category: "Gadgets", rating: 4.4 },
  { id: 15, name: "HDMI Cable", price: 350, category: "Accessories", rating: 3.8 },
  { id: 16, name: "Sunglasses", price: 850, category: "Fashion", rating: 4.2 },
  { id: 17, name: "T-Shirt", price: 750, category: "Fashion", rating: 4.0 },
  { id: 18, name: "Jeans", price: 1800, category: "Fashion", rating: 4.3 },
  { id: 19, name: "Sneakers", price: 3500, category: "Footwear", rating: 4.5 },
  { id: 20, name: "Sandals", price: 900, category: "Footwear", rating: 4.1 },
  { id: 21, name: "Face Wash", price: 300, category: "Beauty", rating: 4.0 },
  { id: 22, name: "Shampoo", price: 550, category: "Beauty", rating: 4.2 },
  { id: 23, name: "Hair Oil", price: 250, category: "Beauty", rating: 4.3 },
  { id: 24, name: "Perfume", price: 1400, category: "Beauty", rating: 4.6 },
  { id: 25, name: "Travel Mug", price: 800, category: "Home", rating: 4.1 },
  { id: 26, name: "Coffee Maker", price: 5500, category: "Appliances", rating: 4.4 },
  { id: 27, name: "Iron", price: 3000, category: "Appliances", rating: 4.2 },
  { id: 28, name: "Blender", price: 4500, category: "Appliances", rating: 4.3 },
  { id: 29, name: "Vacuum Cleaner", price: 9000, category: "Appliances", rating: 4.5 },
  { id: 30, name: "Desk Chair", price: 7000, category: "Furniture", rating: 4.4 },
  { id: 31, name: "Office Desk", price: 15000, category: "Furniture", rating: 4.3 },
  { id: 32, name: "Bed Sheet", price: 1200, category: "Home", rating: 4.1 },
  { id: 33, name: "Pillow", price: 500, category: "Home", rating: 4.0 },
  { id: 34, name: "Wall Clock", price: 900, category: "Home", rating: 3.9 },
  { id: 35, name: "Camera Tripod", price: 2200, category: "Accessories", rating: 4.3 },
  { id: 36, name: "Memory Card 64GB", price: 1600, category: "Electronics", rating: 4.4 },
  { id: 37, name: "LED Light Strip", price: 750, category: "Electronics", rating: 4.2 },
  { id: 38, name: "Extension Board", price: 600, category: "Electronics", rating: 4.0 },
  { id: 39, name: "Earbuds", price: 2000, category: "Electronics", rating: 4.5 },
  { id: 40, name: "Smartphone Case", price: 300, category: "Accessories", rating: 4.1 },
  { id: 41, name: "Laptop Bag", price: 2800, category: "Bags", rating: 4.3 },
  { id: 42, name: "Whiteboard Marker Set", price: 180, category: "Stationery", rating: 4.0 },
  { id: 43, name: "Calculator", price: 700, category: "Electronics", rating: 4.1 },
  { id: 44, name: "Stapler", price: 120, category: "Stationery", rating: 3.8 },
  { id: 45, name: "Glue Stick", price: 80, category: "Stationery", rating: 3.9 },
  { id: 46, name: "Tennis Ball Pack", price: 400, category: "Sports", rating: 4.2 },
  { id: 47, name: "Football", price: 1200, category: "Sports", rating: 4.4 },
  { id: 48, name: "Badminton Racket", price: 1500, category: "Sports", rating: 4.3 },
  { id: 49, name: "Skipping Rope", price: 250, category: "Sports", rating: 4.0 },
  { id: 50, name: "Yoga Mat", price: 1000, category: "Sports", rating: 4.4 },
];


app.get("/",(req,res) =>{
    res.json({message : "This is the Home page of the Back end aPlication"})
})

app.get("/products",(req,res) =>{
    res.json(products)
})

app.listen(port,()=>{
    console.log(`Server is listening at the port ${port}`)
})