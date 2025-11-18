import React ,{useContext} from "react";
import "./Content.css";
import { context } from "../context/context";
import Product from './CartProudact/Product'

function Content() {
  const depo=useContext(context)
  const {list}=depo;
  return (
    <div className="Container_content">
      <div className="head_content">
        <div className="result-count">SHOW ALL 11 RESULTS</div>

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
        {list.map(item=>{
          return (
          <Product key={item.id} name={item.name} price={item.price} image={item.image}/>)
        })}
      </div>
    </div>
  );
}

export default Content;
