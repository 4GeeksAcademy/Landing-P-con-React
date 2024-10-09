import React from "react";

const Card = () => {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 p-2">
            <div className="card">
                <img src="https://placehold.co/500x325" alt="Card image" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find Out More</a>
                </div>
            </div>
        </div>
    );
};

const CardGroup = () => {
    return (
        <div className="container">
            <div className="row">
            
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default CardGroup;
