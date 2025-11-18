import React ,{useContext} from 'react';
import {context} from './context/context'
import './App.css'
import Header from './Header/Header';
import Cover from './Cover/Cover';
import Filter from './Filter/Filter';
import Content from './Content/Content';

// ------------------------------------------------
// 1../assets/
// ------------------------------------------------
import whiteTshirt from "./assets/white_tshirt.jpg";
import aldoShoes from "./assets/aldo_shoes.jpg";
import barbourTshirt from "./assets/barbour_tshirt.jpg";
import blackShoes from "./assets/black_shoes.jpg";
import penfieldBlueTshirt from "./assets/penfield_blue_tshirt.jpg";
import gucciSunglasses from "./assets/gucci_sunglasses.jpg";
import lineTshirt from "./assets/line_tshirt.jpg";
import raybanSunglasses from "./assets/rayban_sunglasses.jpg";
import clarkShoes from "./assets/clark_shoes.jpg";
import navyBackpack from "./assets/navy_backpack.jpg";
import brownBelt from "./assets/brown_belt.jpg";
import redFlannel from "./assets/red_flannel.jpg";
import blackSneakers from "./assets/black_sneakers.jpg";
import aviatorGlasses from "./assets/aviator_glasses.jpg";
import duffelBag from "./assets/duffel_bag.jpg";
import greyScarf from "./assets/grey_scarf.jpg";
import blackJeans from "./assets/black_jeans.jpg";
import whiteCasual from "./assets/white_casual.jpg";
import blueSporty from "./assets/blue_sporty.jpg";
import classicSquare from "./assets/classic_square.jpg";
import whiteWallet from "./assets/white_wallet.jpg";
import redBackpack from "./assets/red_backpack.jpg";
import navyPolo from "./assets/navy_polo.jpg";
import suedeLoafers from "./assets/suede_loafers.jpg";
import oversizeTshirt from "./assets/oversize_tshirt.jpg";
import redSunglasses from "./assets/red_sunglasses.jpg";
import greyHoodie from "./assets/grey_hoodie.jpg";
import leatherGloves from "./assets/leather_gloves.jpg";
import messengerBag from "./assets/messenger_bag.jpg";
import blackOxfords from "./assets/black_oxfords.jpg";


function App() {
  // ------------------------------------------------
  // 2. استخدام المتغيرات المستوردة في خاصية "image"
  // ------------------------------------------------

  const list = [
    {
        "id": 1,
        "name": "WHITE BEARD T-SHIRT",
        "price": 45.05, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": whiteTshirt,
        "color": "White",
        "category": "Clothing"
    },
    {
        "id": 2,
        "name": "ALDO LEATHER SHOES",
        "price": 67.05, // تم التعديل
        "oldPrice": "$102.50",
        "isSale": true,
        "image": aldoShoes,
        "color": "Brown",
        "category": "Shoes"
    },
    {
        "id": 3,
        "name": "BARBOUR GREY T-SHIRT",
        "price": 65.00, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": barbourTshirt,
        "color": "Grey",
        "category": "Clothing"
    },
    {
        "id": 4,
        "name": "ALDO BLACK LEATHER SHOES",
        "price": 78.90, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": blackShoes,
        "color": "Black",
        "category": "Shoes"
    },
    {
        "id": 5,
        "name": "PENFIELD BLUE T-SHIRT",
        "price": 54.00, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": penfieldBlueTshirt,
        "color": "Blue",
        "category": "Clothing"
    },
    {
        "id": 6,
        "name": "GUCCI ROUND SUNGLASSES",
        "price": 105.20, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": gucciSunglasses,
        "color": "Black",
        "category": "Sunglasses"
    },
    {
        "id": 7,
        "name": "LINE WHITE & BLACK T-SHIRT",
        "price": 50.00, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": lineTshirt,
        "color": "White",
        "category": "Clothing"
    },
    {
        "id": 8,
        "name": "RAYBAN ROUND SUNGLASSES",
        "price": 120.15, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": raybanSunglasses,
        "color": "Red",
        "category": "Sunglasses"
    },
    {
        "id": 9,
        "name": "CLARK LEATHER SHOES",
        "price": 75.70, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": clarkShoes,
        "color": "Brown",
        "category": "Shoes"
    },
    {
        "id": 10,
        "name": "VINTAGE NAVY BACKPACK",
        "price": 88.99, // تم التعديل
        "oldPrice": "$110.00",
        "isSale": true,
        "image": navyBackpack,
        "color": "Blue",
        "category": "Bags and Backpacks"
    },
    {
        "id": 11,
        "name": "LUXURY BROWN BELT",
        "price": 33.50, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": brownBelt,
        "color": "Brown",
        "category": "Accessories"
    },
    {
        "id": 12,
        "name": "RED CHECKED FLANNEL",
        "price": 59.99, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": redFlannel,
        "color": "Red",
        "category": "Clothing"
    },
    {
        "id": 13,
        "name": "BLACK RUNNING SNEAKERS",
        "price": 95.00, // تم التعديل
        "oldPrice": "$125.00",
        "isSale": true,
        "image": blackSneakers,
        "color": "Black",
        "category": "Shoes"
    },
    {
        "id": 14,
        "name": "AVIATOR MIRROR SUNGLASSES",
        "price": 135.00, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": aviatorGlasses,
        "color": "Grey",
        "category": "Sunglasses"
    },
    {
        "id": 15,
        "name": "LEATHER TRAVEL DUFFEL",
        "price": 189.00, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": duffelBag,
        "color": "Brown",
        "category": "Bags and Backpacks"
    },
    {
        "id": 16,
        "name": "KNITTED GREY SCARF",
        "price": 29.99, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": greyScarf,
        "color": "Grey",
        "category": "Accessories"
    },
    {
        "id": 17,
        "name": "SLIM FIT BLACK JEANS",
        "price": 70.50, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": blackJeans,
        "color": "Black",
        "category": "Clothing"
    },
    {
        "id": 18,
        "name": "WHITE CASUAL SHOES",
        "price": 55.90, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": whiteCasual,
        "color": "White",
        "category": "Shoes"
    },
    {
        "id": 19,
        "name": "SPORTY BLUE T-SHIRT",
        "price": 35.00, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": blueSporty,
        "color": "Blue",
        "category": "Clothing"
    },
    {
        "id": 20,
        "name": "CLASSIC SQUARE SUNGLASSES",
        "price": 99.99, // تم التعديل
        "oldPrice": "$140.00",
        "isSale": true,
        "image": classicSquare,
        "color": "Brown",
        "category": "Sunglasses"
    },
    {
        "id": 21,
        "name": "MINIMALIST WHITE WALLET",
        "price": 19.50, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": whiteWallet,
        "color": "White",
        "category": "Accessories"
    },
    {
        "id": 22,
        "name": "URBAN BACKPACK RED",
        "price": 69.00, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": redBackpack,
        "color": "Red",
        "category": "Bags and Backpacks"
    },
    {
        "id": 23,
        "name": "NAVY BLUE POLO SHIRT",
        "price": 48.25, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": navyPolo,
        "color": "Blue",
        "category": "Clothing"
    },
    {
        "id": 24,
        "name": "BROWN SUEDE LOAFERS",
        "price": 115.00, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": suedeLoafers,
        "color": "Brown",
        "category": "Shoes"
    },
    {
        "id": 25,
        "name": "OVERSIZE BLACK T-SHIRT",
        "price": 38.00, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": oversizeTshirt,
        "color": "Black",
        "category": "Clothing"
    },
    {
        "id": 26,
        "name": "FANCY RED SUNGLASSES",
        "price": 85.50, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": redSunglasses,
        "color": "Red",
        "category": "Sunglasses"
    },
    {
        "id": 27,
        "name": "BASIC GREY HOODIE",
        "price": 62.90, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": greyHoodie,
        "color": "Grey",
        "category": "Clothing"
    },
    {
        "id": 28,
        "name": "LEATHER GLOVES WINTER",
        "price": 40.00, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": leatherGloves,
        "color": "Black",
        "category": "Accessories"
    },
    {
        "id": 29,
        "name": "MESSENGER BAG CANVAS",
        "price": 125.00, // تم التعديل
        "oldPrice": "$150.00",
        "isSale": true,
        "image": messengerBag,
        "color": "Grey",
        "category": "Bags and Backpacks"
    },
    {
        "id": 30,
        "name": "FORMAL BLACK OXFORDS",
        "price": 145.00, // تم التعديل
        "oldPrice": null,
        "isSale": false,
        "image": blackOxfords,
        "color": "Black",
        "category": "Shoes"
    }
]
  const categorys=[]
  list.forEach(item=>{
    const fond=categorys.find(i=>i==item.category)
    if(!fond){
      categorys.push(item.category)
    }
  })

  const colors=[]
  list.forEach(item=>{
    const fond=colors.find(i=>i==item.color)
    if(!fond){
      colors.push(item.color)
    }
  })
  
  return (
    <context.Provider value={{list,categorys,colors}}>
    <Header/>
    <Cover/>
    <div className='body'>
      <Filter/>
      <Content/>
    </div>
    </context.Provider>
  )
}

export default App