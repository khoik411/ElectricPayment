import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

function Family() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/api/v1/customers");
    const items = await data.json();
    setItems(items.data);
  };

  return (
    <div>
      {console.log(items)}
      <div className="listitem">
        {items.map((item) => (
          <div className="families">
                      <Link to={`family/${item.id}`}>
            <div key={item.id} > 
               {/* <img src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-1/98058480_690441648356552_5333866910775771136_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=tn1j5T-Qm7gAX9QXvun&_nc_ht=scontent.fsgn2-3.fna&oh=1c6cee26b6fdaff955be136a4316bb69&oe=5EF60BC3" alt=""></img>   */}
              <h3>{item.id}</h3>
              <h3>{item.name}</h3>
              <h3>{item.address}</h3>
              <h3>{item.phone}</h3> 
            </div>
          </Link>
          </div> 
        ))}
      </div>
    </div>
  //   <div>
  //     <card>
  //     {items.map((item) => (
  //       <div className="">
  //         <Link to={`family/${item.id}`}>
  //         <div key={item.id} > 
  //           <CardBody>
  //             <CardTitle>{item.name}  </CardTitle>
  //             <CardSubtitle> {item.id} </CardSubtitle>
  //             <CardText> {item.address} </CardText>
  //             {/* <CardSubtitle> {item.phone} </CardSubtitle> */}
  //           </CardBody>
  //             <img width="100%" src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-1/98058480_690441648356552_5333866910775771136_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=tn1j5T-Qm7gAX9QXvun&_nc_ht=scontent.fsgn2-3.fna&oh=1c6cee26b6fdaff955be136a4316bb69&oe=5EF60BC3" alt=""></img>

  //            <img src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-1/98058480_690441648356552_5333866910775771136_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=tn1j5T-Qm7gAX9QXvun&_nc_ht=scontent.fsgn2-3.fna&oh=1c6cee26b6fdaff955be136a4316bb69&oe=5EF60BC3" alt=""></img>  
  //         </div>
  //         </Link>
  //        </div> 
  //     ))}
  //       </card>
  // </div>
         
  // <div className="card text-center">
  //   <div className="overflow">
  //       <img src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-1/98058480_690441648356552_5333866910775771136_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=tn1j5T-Qm7gAX9QXvun&_nc_ht=scontent.fsgn2-3.fna&oh=1c6cee26b6fdaff955be136a4316bb69&oe=5EF60BC3" alt=""></img>
  //       <div className="card-body text-dark">
  //         <h4 className="card-title">
  //             abc
  //         </h4>
  //         <p className="card-text text-secondary">
  //       asjkasdhfasdl;asdklfjaskdlfjasdkjf
  //         </p>

  //       </div>
  //   </div>
  // </div>
    );
}

export default Family;
