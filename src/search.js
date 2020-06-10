import React from "react"


const Search = ({handleMakeRequest}) => (
  <div className="imageSearch">
    <form onSubmit={handleMakeRequest} className="imageSearch__form">
      <input autoComplete="off" name="searchValue" type="text" placeholder="search for images..."/>
      <button>Search</button>
    </form>
  </div>
)

export default Search