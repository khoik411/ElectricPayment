import React, { Component } from "react";
import { Link } from "react-router-dom";

const ImageList = ({ images, searchValue }) => {
  console.log(searchValue);
  // images.find(function (image) {
  //   return image.id === searchValue;
  // })
  const result = images.filter((image) => image.id == searchValue);
  console.log(result);

  return (
    <div className="container">
      <div className="row">
        {result.map(({ id, name, address, phone }) => {
          return (
            <div key={id} className="col-md-4" style={{ marginBottom: "2rem" }}>
              <div className="image__details">
                <h3>{name}</h3>
                <h3>{address}</h3>
                <h3>{phone}</h3>
                <Link to={`family/${images.id}`}>
                  <button>View</button>
                </Link>
              </div>
            </div>
          );
        })}
        {/* {
          const img =  images.filter(images => ( images.id===searchValue))
        }
        <h3>{const.id}</h3>   */}
      </div>
    </div>
  );
};

export default ImageList;
