import { Link } from "react-router-dom";
    

function Profile1() {
    return (
      <div>
        <h3>Profile 1 Page</h3>
        <br/>
        
        <button type="button"><Link to='/'>Home</Link></button>
      </div>
    );
  }
  
  export default Profile1;