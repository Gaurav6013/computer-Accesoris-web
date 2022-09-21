import React from "react";

function Laptop(props) {
  return (
    <div className="main-layout inner_posituong computer_page">
      <div className="laptop1">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="laptop1_img">
                <figure>
                  <img src="../assests/images/leptop.jpg" alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-5">
              <div className="titlepage">
                <h2>laptop</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
                <a className="read_more" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laptop;
