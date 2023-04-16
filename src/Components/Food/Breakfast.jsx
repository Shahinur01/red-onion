import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Breakfast = ({type}) => {

    const [food, setFood] = useState([]);
    //    const [lunch,setLunch] = useState([]);
    //    const [dinner,setDinner] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/food`)
            .then(res => res.json())
            .then(data => setFood(data));
    }, [])

    return (
        <div className="container mt-5">

            <div className="row my-5">
                {
                    food.map((fd,index) => {
                        const {name,description,price,id,img} = fd
                        if (fd.slug === "breakfast" && type === "tabBreakfast") {
                            return (
                                <div className="col-md-4 my-3 px-3" key={index}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={img} />
                                        <Card.Body>
                                            <Card.Title>  {name} </Card.Title>
                                            <Card.Text>
                                                {description}
                                            </Card.Text>
                                            <Card.Text>
                                             $ {price}
                                            </Card.Text>
                                            <Link to={`/food/${id}`}>
                                                <Button style={{backgroundColor:"red"}} >view</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                        if (fd.slug === "lunch" && type === "tabLunch") {
                            return (
                                <div className="col-md-4 my-3 px-3" key={index}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={img} />
                                        <Card.Body>
                                            <Card.Title>  {name} </Card.Title>
                                            <Card.Text>
                                                {description}
                                            </Card.Text>
                                            <Card.Text>
                                              $ {price}
                                            </Card.Text>
                                            <Link to={`/food/${id}`}>
                                                <Button style={{backgroundColor:"red"}}>view</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                        if (fd.slug === "lunch" && type === "tabDinner") {
                            return (
                                <div className="col-md-4 my-3" key={index}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={img} />
                                        <Card.Body>
                                            <Card.Title>  {name} </Card.Title>
                                            <Card.Text>
                                                {description}
                                            </Card.Text>
                                            <Card.Text>
                                                $ {price}
                                            </Card.Text>
                                            <Link to={`/food/${id}`}>
                                                <Button style={{backgroundColor:"red"}}>view</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                        
                        
                    })
                }


            </div>
        </div>
    );
};

export default Breakfast;
