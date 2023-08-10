import "./Css/Our.css"

function Our(props) {
  return (
    <>
    <div className="container our_container">
        <div className="row first_row">
            <h1>Our testimonials</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia.</p>
        </div>
        <div className="row second_row">
            <div className="col-sm our_box ">
                <div className="star">
                <img src="Images\Our_images\Star .png" alt="" />
                <img src="Images\Our_images\Star .png" alt="" />
                <img src="Images\Our_images\Star .png" alt="" />
                <img src="Images\Our_images\Star .png" alt="" />
                <img src="Images\Our_images\Star .png" alt="" />
                </div>
                <p>
                    Love their drink specials. Bartenders super nice.
                    Spent a week at UCSF and this was a very nice break for the parental unit.
                </p>
                <div className="author">
                    <div className="yellow_circle">

                    <img src="/Images/Our_images/col_1.png" alt="" />
                    </div>
                    
                    <h1>Esther Howard</h1>
                </div>
            </div>
            <div className="col-sm our_box ">
                <div className="star">
                <img src="Images\Our_images\Star .png" alt="" />
                <img src="Images\Our_images\Star .png" alt="" />
                <img src="Images\Our_images\Star .png" alt="" />
                <img src="Images\Our_images\Star .png" alt="" />
                <img src="Images\Our_images\Star .png" alt="" />
                </div>
                <p>
                    The Dropbox HQ in San Francisco is one of the best designed &
                    most comfortable offices I have ever witnessed.
                    Great stuff! If you happen to visit SanFran,
                    don't miss the chance to witness it yourself. 
                </p>
                <div className="author">
                    <img src="/Images/Our_images/col_2.png" alt="" />
                    <h1>Leslie Alexander</h1>
                </div>
            </div>
            <div className="col-sm our_box ">
                <div className="star">
                <img src="Images\Our_images\Star .png" alt="" />
                <img src="Images\Our_images\Star .png" alt="" />
                <img src="Images\Our_images\Star .png" alt="" />
                <img src="Images\Our_images\Star .png" alt="" />
                <img src="Images\Our_images\Star .png" alt="" />
                </div>
                <p>
                    I had I was very sad this day. There were friendly people at the bar that engaged with me.
                    Interactions with people was very well needed.
                    I enjoyed a great Long Island ice tea,some tasty vegetarian nachos, and sat by the water
                </p>
                <div className="author">
                    <img src="/Images/Our_images/col_3.png" alt="" />
                    <h1>Cody Fisher</h1>
                </div>
            </div>
        </div>
        <div className="row third_row">
            <div className="circle">
                <img src="/Images/Our_images/Arrow left.png" alt="" />
            </div>
            <div className="circle">
                <img src="/Images/Our_images/Arrow right .png" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}
export default Our