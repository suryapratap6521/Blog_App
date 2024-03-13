const mongoose = require("mongoose");
const Quotes = require("./models/Quotes");
let dummyData = [
  {
    author: "Surya",
    desc: "kya baat h bhadiya h ",
  },
  { author: "Surya", 
  desc: "kya baat h bhadiya h "
 },
  { author: "Surya",
   desc: "kya baat h bhadiya h " 
},
  { author: "Surya",
   desc: "kya baat h bhadiya h "
 },
];
async function seedDB(){
    
    await Quotes.insertMany(dummyData)
    console.log("data is seeded");
}
module.exports=seedDB;