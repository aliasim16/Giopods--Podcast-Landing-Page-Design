import "../Css/Navbar.css"
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <div className="container navbar_container">
        <div className="row navbar_row">
          <div className="col-sm navbar_col">
          <div className=" left_side">
            <ul>
              <li>Giopods</li>
            </ul>
          </div>
          <div className=" right_side">
              <nav>
                <ul>
                  <Link  to="/"> 
                  <li> <a id="home"  href="#">Home</a> </li>
                  </Link>
                  <Link  to="/explore" >
                    <li> <a id="about" href="#">About</a> </li>
                  </Link>
                  <Link  to="/creating" >
                    <li> <a id="channel" href="#">Channel</a> </li>
                  </Link>
                  <Link  to="/episodes">
                    <li> <a id="episodes" href="#">Episodes</a> </li>
                  </Link>
                  <Link  to="/blog">
                    <li> <a id="blog" href="#">Products</a> </li>
                  </Link>
                  <Link  to="/basket">
                    <li> <a id="basket" href="#">Sepet</a> </li>  
                  </Link>
                  <Link to="/sign" >
                      <li> <a id="sign" href="#">Sign Up</a> </li>
                  </Link>
                  
                </ul>
              </nav>
          </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar