import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const User = () => {

  const {fname,lname} = useParams();  
  const location = useLocation();
  //console.log(location);

  const history = useHistory();
  //console.log(history);

  return (
    <>
     <h2>This is User {fname} {lname} page</h2>
     <p>Current Location is {location.pathname}</p>
     {location.pathname == `/user/abc/test` ? <button onClick={()=> history.goBack()}>Click Me</button> : null}
    </>
  )
}

export default User;