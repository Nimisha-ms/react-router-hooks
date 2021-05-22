import React, { useState } from 'react';
import Sresult from './Sresult';

const Search = () => {

  const [img, setImg] = useState("");

  const inputEvent = (e) => {
      const data = e.target.value;
      setImg(data);
  }

  return (
    <>     
      <div className="searchbar">
        <input type="text" name="" value={img} placeholder="Enter search text" onChange={inputEvent} />
        
          { img === "" ? null : <Sresult name={img} />} 
        
     </div>
    </>
  )
}

export default Search;