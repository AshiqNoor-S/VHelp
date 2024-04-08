import React from "react"
import "../styles/card.css";

const Card = () => {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  <img
                    className="card-img-top"
                    src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body pt-0">
                  <h5 className="card-title">Florence Garza</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Card;