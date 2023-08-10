import "./Css/Phone.css"

function Phone(props) {
  return (
    <>
        <div className="container phone_container">
            <div className="row phone_row">
                <div className="col-sm phone_col">
                    <img src="/Images/Phone_images/iPhone 12 Pro 1.png" alt="" />
                </div>
                <div className="col-sm text_col ">
                    <h1>Specially built for simplicity and speed</h1>
                    <p>Amet minim mollit non deserunt <br />ullamco est sit aliqua dolor do amet sint.</p>
                    <div className="button">
                            <div className="playstore">
                                <div className="left">
                                    <img src="/Images/Phone_images/Google Play logo.png"  />
                                </div>
                                <div className="right">
                                    {/* <img src="/Images/Phone_images/Get it on.png"  /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="8" viewBox="0 0 40 8" fill="none">
  <path d="M6.41805 4.24294C6.41805 5.08094 6.17005 5.74794 5.67305 6.24594C5.10905 6.83794 4.37305 7.13394 3.46905 7.13394C2.60305 7.13394 1.86605 6.83394 1.26105 6.23394C0.655051 5.63294 0.352051 4.88894 0.352051 4.00094C0.352051 3.11194 0.655051 2.36794 1.26105 1.76794C1.86605 1.16694 2.60305 0.866944 3.46905 0.866944C3.89905 0.866944 4.31005 0.950944 4.70005 1.11794C5.09105 1.28594 5.40405 1.50894 5.63805 1.78794L5.11105 2.31594C4.71405 1.84094 4.16705 1.60394 3.46805 1.60394C2.83605 1.60394 2.29005 1.82594 1.82905 2.26994C1.36805 2.71394 1.13805 3.29094 1.13805 3.99994C1.13805 4.70894 1.36805 5.28594 1.82905 5.72994C2.29005 6.17394 2.83605 6.39594 3.46805 6.39594C4.13805 6.39594 4.69705 6.17294 5.14405 5.72594C5.43405 5.43494 5.60205 5.02994 5.64705 4.51094H3.46805V3.78994H6.37505C6.40505 3.94694 6.41805 4.09794 6.41805 4.24294Z" fill="white"/>
  <path d="M11.0281 1.737H8.29615V3.639H10.7601V4.36H8.29615V6.262H11.0281V7H7.52515V1H11.0281V1.737Z" fill="white"/>
  <path d="M14.279 7H13.508V1.737H11.832V1H15.955V1.737H14.279V7Z" fill="white"/>
  <path d="M18.938 7V1H19.709V7H18.938Z" fill="white"/>
  <path d="M23.1281 7H22.3572V1.737H20.6812V1H24.8042V1.737H23.1281V7Z" fill="white"/>
  <path d="M32.6089 6.22499C32.0189 6.83099 31.2859 7.13399 30.4089 7.13399C29.5319 7.13399 28.7989 6.83099 28.2099 6.22499C27.6199 5.61899 27.3259 4.87699 27.3259 3.99999C27.3259 3.12299 27.6199 2.38099 28.2099 1.77499C28.7989 1.16899 29.5319 0.86499 30.4089 0.86499C31.2809 0.86499 32.0129 1.16999 32.6049 1.77899C33.1969 2.38799 33.4929 3.12799 33.4929 3.99999C33.4929 4.87699 33.1979 5.61899 32.6089 6.22499ZM28.7789 5.72199C29.2229 6.17199 29.7659 6.39599 30.4089 6.39599C31.0519 6.39599 31.5959 6.17099 32.0389 5.72199C32.4829 5.27199 32.7059 4.69799 32.7059 3.99999C32.7059 3.30199 32.4829 2.72799 32.0389 2.27799C31.5959 1.82799 31.0519 1.60399 30.4089 1.60399C29.7659 1.60399 29.2229 1.82899 28.7789 2.27799C28.3359 2.72799 28.1129 3.30199 28.1129 3.99999C28.1129 4.69799 28.3359 5.27199 28.7789 5.72199Z" fill="white"/>
  <path d="M34.5749 7V1H35.513L38.429 5.667H38.4619L38.429 4.511V1H39.1999V7H38.3949L35.344 2.106H35.3109L35.344 3.262V7H34.5749Z" fill="white"/>
  <path d="M6.41805 4.24294C6.41805 5.08094 6.17005 5.74794 5.67305 6.24594C5.10905 6.83794 4.37305 7.13394 3.46905 7.13394C2.60305 7.13394 1.86605 6.83394 1.26105 6.23394C0.655051 5.63294 0.352051 4.88894 0.352051 4.00094C0.352051 3.11194 0.655051 2.36794 1.26105 1.76794C1.86605 1.16694 2.60305 0.866944 3.46905 0.866944C3.89905 0.866944 4.31005 0.950944 4.70005 1.11794C5.09105 1.28594 5.40405 1.50894 5.63805 1.78794L5.11105 2.31594C4.71405 1.84094 4.16705 1.60394 3.46805 1.60394C2.83605 1.60394 2.29005 1.82594 1.82905 2.26994C1.36805 2.71394 1.13805 3.29094 1.13805 3.99994C1.13805 4.70894 1.36805 5.28594 1.82905 5.72994C2.29005 6.17394 2.83605 6.39594 3.46805 6.39594C4.13805 6.39594 4.69705 6.17294 5.14405 5.72594C5.43405 5.43494 5.60205 5.02994 5.64705 4.51094H3.46805V3.78994H6.37505C6.40505 3.94694 6.41805 4.09794 6.41805 4.24294Z" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
  <path d="M11.0281 1.737H8.29615V3.639H10.7601V4.36H8.29615V6.262H11.0281V7H7.52515V1H11.0281V1.737Z" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
  <path d="M14.279 7H13.508V1.737H11.832V1H15.955V1.737H14.279V7Z" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
  <path d="M18.938 7V1H19.709V7H18.938Z" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
  <path d="M23.1281 7H22.3572V1.737H20.6812V1H24.8042V1.737H23.1281V7Z" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
  <path d="M32.6089 6.22499C32.0189 6.83099 31.2859 7.13399 30.4089 7.13399C29.5319 7.13399 28.7989 6.83099 28.2099 6.22499C27.6199 5.61899 27.3259 4.87699 27.3259 3.99999C27.3259 3.12299 27.6199 2.38099 28.2099 1.77499C28.7989 1.16899 29.5319 0.86499 30.4089 0.86499C31.2809 0.86499 32.0129 1.16999 32.6049 1.77899C33.1969 2.38799 33.4929 3.12799 33.4929 3.99999C33.4929 4.87699 33.1979 5.61899 32.6089 6.22499ZM28.7789 5.72199C29.2229 6.17199 29.7659 6.39599 30.4089 6.39599C31.0519 6.39599 31.5959 6.17099 32.0389 5.72199C32.4829 5.27199 32.7059 4.69799 32.7059 3.99999C32.7059 3.30199 32.4829 2.72799 32.0389 2.27799C31.5959 1.82799 31.0519 1.60399 30.4089 1.60399C29.7659 1.60399 29.2229 1.82899 28.7789 2.27799C28.3359 2.72799 28.1129 3.30199 28.1129 3.99999C28.1129 4.69799 28.3359 5.27199 28.7789 5.72199Z" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
  <path d="M34.5749 7V1H35.513L38.429 5.667H38.4619L38.429 4.511V1H39.1999V7H38.3949L35.344 2.106H35.3109L35.344 3.262V7H34.5749Z" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
</svg>
                                    <img src="/Images/Phone_images/Google Play.png"  />
                                </div>
                            </div>
                        <div className="appstore">
                            <img src="/Images/Phone_images/Mobile app store badge.png"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default Phone