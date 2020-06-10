import React, { useState, useEffect } from "react";
import "./App.css";
import "./assets/main.css";
import { Link } from "react-router-dom";

function FamilyDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);
  const [itemFetch, setItemFetch] = useState({
    id: 0,
    thang: 0,
    tien: 0,
    trangthai: false,
  });
  const [isLoad, setIsLoad] = useState({});
  const [item, setItem] = useState({});
  const Note = "PAID";

  let itemF = { ...itemFetch };
  const TrangThai = itemF.trangthai;
  const Tien = itemF.tien;
  const Thang = itemF.thang;
  const Idcustomer = itemF.id;

  const fetchItem = async () => {
    try {
      const fetchItem = await fetch(
        `/api/v1/dienke/customer/${match.params.id}/false`
      );

      const items = await fetchItem.json();
      setItem(items.data[0]);
      let itemF = { ...itemFetch };

      itemF.id = items.data[0].id;
      itemF.trangthai = true;
      itemF.tien = items.data[0].tien;
      itemF.thang = items.data[0].thang;
      setItemFetch(itemF);
      console.log(itemF);
      // console.log(...itemFetch);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(itemFetch)
  async function PostData() {
    console.log(itemFetch);
    try {
      const response = await fetch(
        `/api/v1/dienke/customer/${match.params.id}/dienke/${itemF.id}`,
        {
          //mode: "no-cors",
          method: "put",
          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            ...itemFetch,
          }),
        }
      );
      console.log(Idcustomer);
      // console.log(Thang);
      // console.log(Tien);
      //  console.log(response);
      return response;
    } catch (e) {
      console.log(e);
    }

    // axios.post(`http://94619690.ngrok.io/api/v1/dienke/customer/${match.params.id}`, this.state)
    // .then(Response=>{
    //   console.log(Response)
    // })
    // .catch(error=>{
    //   console.log(error);
    // })
  }

  return (
    <div className="familydetail">
      <div className="list-family">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/442/587/original/electric-shock-vector-icon.jpg"
          alt=""
          className="imageView__img img-responsive"
        />
        
        <div className="imageView">
          <h2>ID BILL: {Idcustomer}</h2>
        </div>
        <div className="imageView__text">
          <h4>Thang: {Thang}</h4>
          <h4>Tien: {Tien}</h4>
          <button onClick={() => PostData()} className="active-recipe__button">
            <Link to="/">Pay </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FamilyDetail;
