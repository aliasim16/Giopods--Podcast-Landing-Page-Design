import "../Css/Navbar.css"
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      {/* <div className="container navbar_container">
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
                  <li> <a className="nav-link" id="home"  href="#">Home</a> </li>
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
                      <li> <a id="sign" href="#">Kayıt Ol</a> </li>
                  </Link>
                  
                </ul>
              </nav>
          </div>

          </div>
        </div>
      </div> */}

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid navbar_container ">
          <div className="left">
            <a class="navbar-brand" href="#" id="giopods" >GioPods</a>

          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="right">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ul">
                    <Link  to="/"> 
                    <li> <a className="nav-link" id="home" aria-current="page"  href="#">Home</a> </li>
                    </Link>
                    <Link  to="/explore" >
                      <li> <a className="nav-link" id="about" href="#">About</a> </li>
                    </Link>
                    <Link  to="/creating" >
                      <li> <a className="nav-link" id="channel" href="#">Channel</a> </li>
                    </Link>
                    <Link  to="/episodes">
                      <li> <a className="nav-link" id="episodes" href="#">Episodes</a> </li>
                    </Link>
                    <Link  to="/blog">
                      <li> <a className="nav-link" id="blog" href="#">Products</a> </li>
                    </Link>
                    <Link  to="/basket">
                      <li> <a className="nav-link" id="basket" href="#">Sepet</a> </li>  
                    </Link>
                    <Link to="/sign" >
                        <li> <a className="nav-link" id="sign" href="#">Kayıt Ol</a> </li>
                    </Link>
              </div>
          </div>
          </div>
        </div>
      </nav>





    </>
  )
}
export default Navbar