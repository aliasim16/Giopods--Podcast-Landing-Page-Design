import "./Css/Navbar.css"

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
                  <li> <a id="home"  href="#">Home</a> </li>
                  <li> <a id="about" href="#">About</a> </li>
                  <li> <a id="channel" href="#">Channel</a> </li>
                  <li> <a id="episodes" href="#">Episodes</a> </li>
                  <li> <a id="blog"  href="#">Blog</a> </li>
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