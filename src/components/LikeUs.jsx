import "../Css/LikeUs.css"

function LikeUs(props) {
  return (
    <> 
    <div className="container likeus_container">
      <div className="row first_row">
        <h1>Why people like us</h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia.</p>
      </div>
    <div className="row second_row">
      <div className="col-sm likeus_box ">
        <img src="/src/Images\LikeUs_images\first_col.png"  />
        <h1>Multi platform</h1>
      </div>
      <div className="col-sm likeus_box ">
        <img src="/src/Images\LikeUs_images\second_col.png"  />
        <h1>Free download </h1>
      </div>
      <div className="col-sm likeus_box ">
        <img src="/src/Images\LikeUs_images\third_col.png"  />
        <h1>Updated podcasts</h1>
      </div>
      <div className="col-sm likeus_box ">
        <img src="/src/Images\LikeUs_images\fourth_col.png"  />
        <h1>Quality sound </h1>
      </div>
    </div>

    </div>
    </>
  )
  }
export default LikeUs