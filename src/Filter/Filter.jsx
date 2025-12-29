import React, { useContext } from "react";
import "./Filter.css";
import { context } from "../context/context";

function Filter({ filter,setFilter }) {
  const depo = useContext(context);
  const { categorys, list, colors } = depo;
  return (
    <div className="container_filter">
      <h1>FILTER BY</h1>
      <div className="CATEGORIES">
        <h1>CATEGORIES</h1>
        <ul>
          {categorys.map((item, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setFilter((f) => ({ ...f, CATEGORIES: item }));
                }}
                className={filter?.CATEGORIES===item?"filterActive":""}
              >
                <span>
                    {item}
                </span>{" "}
                <span>
                    ({list.filter((j) => j.category == item).length})
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="filter-price">
        <h1>FILTER BY PRICE</h1>
        <ul>
          <li 
          onClick={()=>setFilter(f => ({...f,PRICE:{min:10,max:20}}))}
          className={filter?.PRICE.min===10?"filterActive":""}
          >
            <span>$10 to $20</span>{" "}
            <span>
              ({list.filter((j) => 20 > j.price && j.price >= 10).length})
            </span>
          </li>
          <li
          onClick={()=>setFilter(f => ({...f,PRICE:{min:20,max:30}}))}
          className={filter?.PRICE.min===20?"filterActive":""}
          >
            <span>$20 to $30</span>{" "}
            <span>
              ({list.filter((j) => 30 > j.price && j.price >= 20).length})
            </span>
          </li>
          <li
          onClick={()=>setFilter(f => ({...f,PRICE:{min:30,max:40}}))}
          className={filter?.PRICE.min===30?"filterActive":""}
          >
            <span>$30 to $40</span>{" "}
            <span>
              ({list.filter((j) => 40 > j.price && j.price >= 30).length})
            </span>
          </li>
          <li
          onClick={()=>setFilter(f => ({...f,PRICE:{min:40,max:50}}))}
          className={filter?.PRICE.min===40?"filterActive":""}
          >
            <span>$40 to $50</span>{" "}
            <span>
              ({list.filter((j) => 50 > j.price && j.price >= 40).length})
            </span>
          </li>
          <li
          onClick={()=>setFilter(f => ({...f,PRICE:{min:50,max:100}}))}
          className={filter?.PRICE.min===50?"filterActive":""}
          >
            <span>$50 to $100</span>{" "}
            <span>
              ({list.filter((j) => 100 > j.price && j.price >= 50).length})
            </span>
          </li>
          <li
          onClick={()=>setFilter(f => ({...f,PRICE:{min:100,max:200}}))}
          className={filter?.PRICE.min===100?"filterActive":""}
          >
            <span>$100 to $200</span>{" "}
            <span>({list.filter((j) => j.price >= 100).length})</span>
          </li>
        </ul>
      </div>

      <div className="filter-color">
        <h1>COLOR</h1>
        <ul>
          {colors.map((item, i) => {
            return (
              <li 
              key={i}
              onClick={() => {
                setFilter((f) => ({ ...f, COLOR: item }));
              }}
              className={filter?.COLOR===item?"filterActive":""}
              >
                <span>{item}</span>{" "}
                <span>({list.filter((j) => j.color == item).length})</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="recent-products">
        <h1>RECENT PRODUCTS</h1>

        <ul>
          {list.slice(list.length - 3, list.length).map((item) => {
            return (
              <li>
                <div className="product-image-filter">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="product-details-filter">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
