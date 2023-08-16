import "../Css/Footer.css"

function Footer(props) {
  return (
    <>
    <div className="container-fluid footer_container">
        <div className="container second_container ">
            <div className="row first_footer_row ">
                <div className="col-sm footer_first_col">
                    <h1>Giopods</h1>
                    <p>Design amazing digital experiences that create more happy in the world.</p>

                </div>
                <div className="col-sm footer_second_col  ">
                    <div className="list">
                        <h1>Quick links</h1>
                        <p>Home</p>
                        <p>About</p>
                        <p>Channel</p>
                        <p>Episodes</p>
                    </div>
                </div>
                <div className="col-sm footer_third_col">
                    <div className="list">
                        <h1>Resources</h1>
                        <p>Blog</p>
                        <p>Newsletter</p>
                        <p>Events</p>
                        <p>Help Centre</p>
                        <p>Tutorials</p>
                        <p>Support</p>
                    </div>
                </div>
                <div className="col-sm footer_fourth_col">
                    <h1>Stay up to date</h1>
                    <form >
                        <input type="text" placeholder="Enter Your Email"/>
                        <button type="submit">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="row second_footer_row">
                <div className="privacy">
                    <div className="left_side">
                        <p>© 2077 Giopods. All rights reserved.</p>
                    </div>
                    <div className="right_side">
                        <p>Terms </p>
                        <p>Privacy </p>
                        <p>Cookies </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}
export default Footer