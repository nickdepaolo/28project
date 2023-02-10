import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h3>Home Page</h3>
        <br/>
        
        <button type="button"><Link to='/profile1'>Profile 1</Link></button>
        <button type="button"><Link to='/profile2'>Profile 2</Link></button>
        <button type="button"><Link to='/profile3'>Profile 3</Link></button>
        <button type="button"><Link to='/calenderPage'>Calender</Link></button>


      
      </div>
    );
  }
  
  export default Home;