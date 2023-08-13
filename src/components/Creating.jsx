import "./Css/Creating.css"

function Creating(props) {
  return (
    <>
        <div className="container creating_container">
            <div className="row creating_row">
                <div className="col-sm">
                    <img src="/src/Images/Creating_images/Microphone.png" alt="microphone.png" />
                </div>
                <div className="col-sm">
                    <h1>Easeof creating <br /> & listening to <br />podcasts</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint. Velit officia.</p>
                    <div className="line"></div>
                    <ul>
                        <li>Amet minim mollit non Velit officia.</li>
                        <li>Mollit non deserunt ullamco est sit aliqua dolor</li>
                        <li>Velit officia mollit non Velit officia.</li>
                        <li>Amet minim mollit.</li>
                    </ul>
                    <button type="button">
                        Get started
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
export default Creating