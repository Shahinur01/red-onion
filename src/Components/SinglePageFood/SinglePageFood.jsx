import React, { useEffect, useState } from 'react';
import { GrCart } from "react-icons/gr";
import { Link, useParams } from 'react-router-dom';
import "./SinglePageFood.css";

const SinglePageFood = () => {
    const { singleId } = useParams([]);
    const [food, setFood] = useState({});
    const [priceValue, setPriceValue] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:8080/food/${singleId}`)
            .then((res) => res.json())
            .then(data => setFood(data))
    }, [singleId])

    const incrementPrice = () => {
        setPriceValue(priceValue + 1)
    }
    const decrementPrice = () => {
        if (priceValue) {
            setPriceValue(priceValue - 1)
        }
    }

    return (
        <div className='container'>
            <div className="row ">
                <div >
                    <ul className="heading py-3">
                        <li><Link to="/">Breakfast</Link></li>
                        <li><Link to="/">Lunch</Link></li>
                        <li><Link to="/">Dinner</Link></li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <div className="row ">
                        <div className="col">
                            <h1> {food.name} </h1>
                            <p> {food.description} </p>
                            <p className='price'> $ {food.price * priceValue} <span className='btnPrice'>
                                <button onClick={decrementPrice}>-</button>
                                {priceValue}
                                <button onClick={incrementPrice}>+</button></span> </p>
                            <Link to="/shipment">
                                <button className="addBtn"> <GrCart />  Add</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row singleFood1 pt-4">
                        <div className="col">
                            <img src={food.img} alt="" />
                            <img src={food.img} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 singleFood">
                    <img src={food.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SinglePageFood;