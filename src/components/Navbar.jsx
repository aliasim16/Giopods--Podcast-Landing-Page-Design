import { Link } from "react-router-dom";
import "../Css/Navbar.css"

function Navbar(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid navbar_container ">
          <div className="left">
            <a class="navbar-brand" href="#" id="giopods" >GioPods</a>

          </div>
          <div className="right">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ul ">
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