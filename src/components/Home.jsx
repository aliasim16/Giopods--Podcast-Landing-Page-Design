import "./Css/Home.css"

function Home(props) {
  return (
    <>
      <div className="container home_container">
        <div className="row">
            
            <div className="rectangle">
                <div className="row">
                    <div className="col-sm">
                    <h1>Start by figuring out what topics you're interested in</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <button type="button">
                        Get Started
                    </button>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default Home