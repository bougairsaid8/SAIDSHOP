import React ,{useContext, useState, useEffect} from "react";
import "./Content.css";
import { context } from "../context/context";
import Product from './CartProudact/Product'
import { FaArrowLeft ,FaArrowRight } from "react-icons/fa";

function Content({filter}) {
  const depo=useContext(context)
  const {list}=depo;
  let NewList=list
  if(filter){
    if(filter.CATEGORIES){
      NewList=NewList.filter(item => item.category===filter.CATEGORIES)
    }
    if(filter.PRICE){
      NewList=NewList.filter(item => item.price>=filter.PRICE.min && item.price<filter.PRICE.max)
    }
    if(filter.COLOR){
      NewList=NewList.filter(item => item.color===filter.COLOR)
    }
  }

  const [MaxProduit,setMaxProduit]=useState(12)
  const NumPages=Math.ceil(NewList.length/MaxProduit)
  const [pointIndex,setPointIndex]=useState(0)
  
  useEffect(() => {
    setPointIndex(0);
  }, [filter]);

  return (
    <div className="Container_content">
      <div className="head_content">
        <div className="result-count">SHOW ALL {NewList.length} RESULTS</div>

        <div className="controls">
          <div className="sorting">
            <select className="sorting-select">
              <option value="default">Default sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="latest">Sort by latest</option>
              <option value="price-low">Sort by price: low to high</option>
              <option value="price-high">Sort by price: high to low</option>
            </select>
          </div>

          <div className="view">
            <button className="view-btn active">
                <i className="fa-solid fa-grip"></i>
            </button>

            <button className="view-btn ">
                <i className="fa-solid fa-list"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="body_content">
        {NewList.slice(pointIndex*MaxProduit,pointIndex*MaxProduit+MaxProduit).map(item=>{
          return (
          <Product key={item.id} name={item.name} price={item.price} image={item.image}/>)
        })}
      </div>
      <Pagenation list={list} setPointIndex={setPointIndex} NumPages={NumPages} pointIndex={pointIndex}/>
    </div>
  );
}

export default Content;

function Pagenation({list,setPointIndex,NumPages,pointIndex}){
  return (
    <div className="pagenation">
      <button className="previous" onClick={()=>{
        pointIndex>0?setPointIndex(p => p-1):setPointIndex(0)
      }}><FaArrowLeft/>previous</button>
      {[...Array(NumPages)].map((_, i) => (
        <button key={i} className={pointIndex===i?"thisPoint":null} onClick={()=>setPointIndex(i)}>{i + 1}</button>
      ))}
      <button className="next" onClick={()=>{
        pointIndex<NumPages-1?setPointIndex(p => p+1):setPointIndex(NumPages-1)
      }}>Next<FaArrowRight /></button>
    </div>
  )
}