import { Link } from "react-router-dom";

 function Nav (props){
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/news">
        <div>News</div>
      </Link>
      
    </div>
  )
}
export default Nav