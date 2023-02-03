import testProfile from "../../assets/img/first-icon.jpg";
import test02Profile from "../../assets/img/second-icon.jpg";
import companyLogo from "../../assets/img/company-logo.png";
import { Radio } from "pretty-checkbox-react";
import { HexColorPicker } from "react-colorful";
import styled from "styled-components";
import "@djthoms/pretty-checkbox";
import { useState } from "react";
import "./index.css";
const UserProfileStyle = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  border: 3px solid ${(props) => props.color};
  border-top-color: transparent;
  border-right-color: transparent;
`;
const FirstVerticalLine = styled.div`
  &::before {
    padding: 4rem 0;
    background: ${(props) => props.color};
    width: 150%;
    rotate: 45deg;
    position: relative;
    left: 24rem;
    border: 1px solid ${(props) => props.color};
    content: "";
    display: block;
  }
  &::after {
    padding: 8rem 0;
    background: ${(props) => props.color};
    width: 150%;
    rotate: 45deg;
    position: relative;
    right: 61rem;
    border: 1px solid ${(props) => props.color};
    content: "";
    display: block;
  }
`;
const SecondVerticalLine = styled.div`
  &::before {
    padding: 4rem 0;
    background: rgb(0, 0, 0);
    width: 150%;
    rotate: 45deg;
    position: relative;
    left: 23rem;
    border: 1px solid rgb(0, 0, 0);
    content: "";
    display: block;
  }
  &::after {
    padding: 6rem 0;
    background: rgb(0, 0, 0);
    width: 150%;
    rotate: 45deg;
    position: relative;
    right: 58rem;
    border: 1px solid rgb(0, 0, 0);
    content: "";
    display: block;
  }
`;
const ThirdVerticlLine = styled.div`
  &::after {
    padding: 6rem 0;
    background: ${(props) => props.color};
    width: 150%;
    rotate: 45deg;
    position: relative;
    right: 56rem;
    border: 1px solid ${(props) => props.color};
    content: "";
    display: block;
  }
`;

export function Profile() {
  const [userDataArray,setUserDataArray]=useState({
    username:'',
    number:'',
    email:'',
    website:'',
    addrese:''
});
  const [preColor, setPreColor] = useState("red");
  const [color, setColor] = useState("red");
  const [state, setState] = useState(false);
  const [ifSaved, setSave] = useState(true);
  let [verifyPrevColor, setVerifyPrevColor] = useState(false);

  return (
    <div className="height-100vh over-flow-hidden">
      <div
        className="change-info-container"
        style={{ top: ifSaved ? "-48rem" : "0rem", transition: "all .6s" }}
        onClick={(e) => {
          if (e.target.className === "change-info-container") {
            e.target.style.top = "-48rem";
          }
        }}
      >
        <div className="change-info-inputs-container display-flex flex-direction-col items-start gap-16">
          <div>Choose Your Prefer</div>
          <div>gg</div>
          <div
            className="hex-color-changer "
            style={{ display: state ? "flex" : "none" }}
          >
            <HexColorPicker color={color} onChange={setColor} />
          </div>
          <button
            style={{ background: color, padding: "1rem" }}
            onClick={() => {
              setState(!state);
              console.log(state);
            }}
          />
          <input
            className="width-100-percent padd-8"
            placeholder="username"
            type="text"
            onChange={(e)=>{(userDataArray.username= e.target.value ,console.log(userDataArray) )}}
          />
          <input
            className="width-100-percent padd-8"
            placeholder="number"
            type="text"
            onChange={(e)=>{(userDataArray.number= e.target.value ,console.log(userDataArray) )}}
          />
          <input
            className="width-100-percent padd-8"
            placeholder="email"
            type="text"
            onChange={(e)=>{(userDataArray.email= e.target.value ,console.log(userDataArray) )}}
          />
          <input
            className="width-100-percent padd-8"
            placeholder="website"
            type="text"
            onChange={(e)=>{(userDataArray.website= e.target.value ,console.log(userDataArray) )}}
          />
          <input
            className="width-100-percent padd-8"
            placeholder="addrese"
            type="text"
            onChange={(e)=>{(userDataArray.addrese= e.target.value ,console.log(userDataArray) )}}
          />
          <div className="display-flex">
            <figure>
              <img
                className="first-profile z-index-6"
                src={testProfile}
                alt="firstIcon"
              />
              <Radio name="a" shape="round" color="primary" />
            </figure>
            <figure>
              <img
                className="first-profile z-index-6"
                src={test02Profile}
                alt="firstIcon"
              />
              <Radio name="a" shape="round" color="primary" />
            </figure>
          </div>

          <button
            className="pink-button width-100-percent"
            onClick={() => {
              setSave(!ifSaved),
              setVerifyPrevColor((verifyPrevColor = true)),
              console.log(userDataArray),
              // alert(userDataArray)
              setPreColor(color);
            }}
          >
            Save
          </button>
        </div>
      </div>
      <FirstVerticalLine color={verifyPrevColor ? color : preColor}>
        <SecondVerticalLine>
          <ThirdVerticlLine color={verifyPrevColor ? color : preColor}>
            <div className="main-container display-flex justify-center   items-center ">
              <div className=" icon-profile-container margin-right-155 display-flex items-center flex-direction-col ">
                <UserProfileStyle
                  color={verifyPrevColor ? color : preColor}
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
              <button
                className="pink-button custom-class-button-profile-page z-index-6"
                onClick={() => {
                  setSave(!ifSaved),
                    setVerifyPrevColor((verifyPrevColor = false));
                }}
              >
                My Inputs
              </button>
            </div>
          </ThirdVerticlLine>
        </SecondVerticalLine>
      </FirstVerticalLine>
    </div>
  );
}
