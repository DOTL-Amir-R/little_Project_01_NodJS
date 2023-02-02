import testProfile from "../../assets/img/first-icon.jpg";
import companyLogo from "../../assets/img/company-logo.png";
import "./index.css";

export function Profile() {
  return (
    <div className="height-100vh over-flow-hidden">
      <div className="change-info-container">
      <div className="change-info-inputs-container display-flex flex-direction-col">
        <div>Choose Your Prefer</div>
        <div>gg</div>
        <button>gg</button>
        <input placeholder="username" type='text'/>
        <input placeholder="number" type='text'/>
        <input placeholder="email" type='text'/>
        <input placeholder="website" type='text'/>
        <input placeholder="addrese" type='text'/>
        <figure>gg</figure>
        <button className="pink-button" onClick={()=>{console.log('clicked')}}>Save</button>
      </div>
      </div>
      <div className="box-test">
        <div className="box-test02">
          <div className="box-test03">
            <div className="main-container display-flex justify-center   items-center ">
              <div className=" icon-profile-container margin-right-155 display-flex items-center flex-direction-col ">
                <img
                  className="user-profile z-index-6"
                  src={testProfile}
                  alt="firstIcon"
                />
                <img
                  className="company-main-logo border-radius-19 z-index-6"
                  src={companyLogo}
                  alt="company logo"
                />
              </div>
              <div className="info-text-container display-flex items-center flex-direction-col z-index-6">
                <div className="font-size-32 font-weight-bold padding-bot-16 ">
                  PHIL Janet anderson
                </div>
                <div className="font-size-22 font-weight-400 padding-bot-32">
                  Sales Representative
                </div>
                <div className="more-info-container display-flex flex-direction-col">
                  <div className="padding-bot-16 padding-top-16 border-bot-1px-black">
                    +123-456-789
                  </div>
                  <div className="padding-bot-16 padding-top-16 border-bot-1px-black">
                    Hello@reallygreatsite.com
                  </div>
                  <div className="padding-bot-16 padding-top-16 border-bot-1px-black">
                    www.reallygreatsite.com
                  </div>
                  <div className="padding-top-16">
                    123 AnyWhere st., Any City, st 1234
                  </div>
                </div>
              </div>
              <button className="pink-button custom-class-button-profile-page z-index-6">
                My Inputs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
