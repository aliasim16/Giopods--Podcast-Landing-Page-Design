import "./Css/Explore.css"

function Explore(props) {
  return (
    <>
    <div className="container explore_container">
        <div className="row first_row">
            <div className="col-sm">
                <h1>Explore Trending catagories</h1>
            </div>
        </div>
        <div className="row second_row">
            <div className="col-sm first_col ">
                <div className="box">
                    <div className="music_platforms">
                        <img src="/src/Images/Explore_images/sound_cloud.png" alt="sound_cloud" />
                    </div>
                    <div className="text">
                        <h1>Thriller by Michael Jackson</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm second_col ">
            <div className="box">
                <div className="music_platforms">
                    <img src="/src/Images/Explore_images/sound_cloud.png" alt="" />
                    <img src="/src/Images/Explore_images/spotify.png" alt="" />
                    <img src="/src/Images/Explore_images/google_play_music.png" alt="" />
                </div>
                <div className="text">
                    <h1>Abbey Road by The Beatles</h1>
                </div>
            </div>
            </div>
            <div className="col-sm third_col ">
            <div className="box">
                <div className="music_platforms">
                    <img src="/src/Images/Explore_images/sound_cloud.png" alt="" />
                    <img src="/src/Images/Explore_images/spotify.png" alt="" />
                    <img src="/src/Images/Explore_images/google_play_music.png" alt="" />                </div>
                <div className="text">
                    <h1>Nevermind by Nirvana</h1>
                </div>
            </div>
            </div>
            <div className="col-sm fourth_col ">
            <div className="box">
                <div className="music_platforms">
                    <img src="/src/Images/Explore_images/sound_cloud.png" alt="" />
                    <img src="/src/Images/Explore_images/spotify.png" alt="" />
                    <img src="/src/Images/Explore_images/google_play_music.png" alt="" />
                </div>
                <div className="text">
                    <h1>Blue by Joni Mitchell</h1>
                </div>
            </div>
            </div>
        </div>
    </div>   
    </>
  )
  }
export default Explore