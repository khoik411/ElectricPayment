import React from "react";

// import ImageList from "../FamilyList/ImageList";
import ImageSearch from "./ImageSearch/ImageSearch";
import ImageList from "./ImageList";
import { getByDisplayValue } from "@testing-library/react";

class Home extends React.Component {
  state = {
    images: [],
    error: null,
    value: null
  };   
  handleMakeRequest = async (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.searchValue.value; 
    // console.log(searchValue)
    const request = await fetch(`http://cf8ef38cb9bc.ngrok.io//api/v1/customers`);
    const results = await request.json(); 
    // console.log(results.data.id);
    
    

    if (!searchValue) {
      this.setState({ error: "Please provide a value." });
    } else {    
      // results.map(result=>(
      //   if(results.data.id===searchValue)
      //   {
      //    this.setState({images: result, error: null});
      //    }
      //   ));
      var result= results.data; 
      console.log(searchValue);
      console.log(result); 
      
      // result = result.filter(val => (result.id === searchValue));
      // console.log(result);


      //  this.setState({ images: results.data, error: null });
       this.setState({ images: result , error: null, value: searchValue });
    }
  };
  render() {
    return ( 
      <div>   
        <ImageSearch handleMakeRequest={this.handleMakeRequest} />
        {this.state.error !== null ? (
          <div style={{ color: "#fff", textAlign: "center" }}>
            {this.state.error}
          </div>
        ) : (
          <ImageList images={this.state.images} searchValue={this.state.value}/>
        )}
      </div>
    );
  }
}

export default Home;
