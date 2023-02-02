import testProfile from "../../assets/img/first-icon.jpg";
import companyLogo from "../../assets/img/company-logo.png";
import "./index.css";

export function Profile() {
  return (
    <div className="display-flex gap-155 justify-center margin-top-155">
      <div className="icon-profile-container display-flex items-center flex-direction-col">
        <img className="user-profile " src={testProfile} alt="firstIcon" />
        <img
          className="company-main-logo border-radius-19"
          src={companyLogo}
          alt="company logo"
        />
      </div>
      <div className="info-text-container display-flex items-center flex-direction-col">
        <div className="font-size-32 font-weight-bold padding-bot-16 ">PHIL Janet anderson</div>
        <div className="font-size-22 font-weight-400 padding-bot-32">Sales Representative</div>
        <div className="more-info-container display-flex flex-direction-col">
          <div className="padding-bot-16 padding-top-16 border-bot-1px-black">+123-456-789</div>
          <div className="padding-bot-16 padding-top-16 border-bot-1px-black">Hello@reallygreatsite.com</div>
          <div className="padding-bot-16 padding-top-16 border-bot-1px-black">www.reallygreatsite.com</div>
          <div className="padding-top-16">123 AnyWhere st., Any City, st 1234</div>
        </div>
      </div>
    </div>
  );
}
