import React from "react";
import { Link } from "react-router-dom";

export default function ProSkill() {
  return (
    <>
      <div className="wrapper flex flex-wrap justify-around items-center text-white ">
        {/* <!-- ---- All containers--- --> */}
        {/* <!------- container1 -------------> */}
        <div className="container1">
          <div className="image bg-cover">
            <Link
              to="https://storage.googleapis.com/programminghub/certificate%2F1710345389082.pdf"
              target="_blank"
            >
              <img src="./Img/w3school.png" alt="img" style={{width:270, height:100}} />
            </Link>
          </div>
          <h4>HTML Course</h4>
          <table className="details flex justify-center bg-cover">
            <tr>
              <td>
                <h6>Institution</h6>
              </td>
              <td>W3School Digital Learning</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>2 month</td>
            </tr>
            <tr>
              <td className="td1">Passing Year</td>
              <td className="td">2022</td>
            </tr>
          </table>
        </div>
        {/* <!------- container2 -------------> */}
        <div className="container2">
          <div className="image bg-cover">
            <Link to="https://storage.googleapis.com/programminghub/certificate%2F1701326592409.jpg"
              target="_blank"
            >
              <img src="./Img/programinghup.png" alt="img" style={{width:270, height:100}} />
            </Link>
          </div>
          <h4>JavaScript Advance Course</h4>
          <table className="details">
            <tr>
              <td>
                <h6>Institution</h6>
              </td>
              <td>Programming Hub</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>2 month</td>
            </tr>
            <tr>
              <td className="td1">Passing Year</td>
              <td className="td">2023</td>
            </tr>
          </table>
        </div>
        {/* <!------- container3 -------------> */}
        <div className="container3">
          <div className="image bg-cover">
            <Link to="https://storage.googleapis.com/programminghub/certificate%2F1710345389082.pdf"
              target="_blank"
            >
              <img src="./Img/w3school.png" alt="img" style={{width:270, height:100}} />
            </Link>
          </div>
          <h4>CSS</h4>
          <table className="details">
            <tr>
              <td>Institution</td>
              <td>W3School Digital Learning</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>2 month</td>
            </tr>
            <tr>
              <td className="td1">Passing Year</td>
              <td className="td">2022</td>
            </tr>
          </table>
        </div>
        {/* <!------- container5 -------------> */}
        <div className="container5">
          <div className="image bg-cover">
            <Link to="https://www.tcsion.com/">
              <img src="./Img/hqdefault.jpg" alt="img" style={{width:270, height:100}} />
            </Link>
          </div>
          <h4>Communication</h4>
          <table className="details">
            <tr>
              <td>
                <h6>Institution</h6>
              </td>
              <td>TCS Digital Learning</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>2 month</td>
            </tr>
            <tr>
              <td className="td1">Passing Year</td>
              <td className="td">2023</td>
            </tr>
          </table>
        </div>
        {/* <!-- -----container6----- --> */}
        <div className="container6">
          <div className="image bg-cover">
            <Link to="https://storage.googleapis.com/programminghub/certificate%2F1701326592409.pdf">
              <img src="./Img/unnamed.png" alt="img" style={{width:270, height:100}} />
            </Link>
          </div>
          <h4>Supervisor</h4>
          <table className="details">
            <tr>
              <td>Institution</td>
              <td>Alison Online Learning</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>2 month</td>
            </tr>
            <tr>
              <td className="td1">Passing Year</td>
              <td className="td">2023</td>
            </tr>
          </table>
        </div>
        {/* <!-- -----container7 -------> */}
        <div className="container7">
          <div className="image bg-cover">
            <Link to="https://alison.com/certification/check/$2y$10$5Q1LLqlTIhHLfAzAhnskOOiiWZqMpN1NDrrppWZQ6XHDkh1bWZEmC">
              <img src="./Img/alison-logo-inverted.jpg" alt="img" style={{width:270, height:100}} />
            </Link>
          </div>
          <h4>course name</h4>
          <table className="details">
            <tr>
              <td>Institution</td>
              <td>TCS Digital Learning</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>2 month</td>
            </tr>
            <tr>
              <td className="td1">Passing Year</td>
              <td className="td">2023</td>
            </tr>
          </table>
        </div>
        {/* <!-- -----container8 -------> */}
      </div>
    </>
  );
}
