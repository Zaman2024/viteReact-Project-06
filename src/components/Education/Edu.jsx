import React from 'react'
import { Link } from 'react-router-dom'

export default function Edu() {
  return (
    <>

    <div className="eduTable text-white" id="div01">
    <table className="tableElements" id="table">
      <thead>
        <trow className="border-radius:11px 0px 0px 0px;">Regular/Diploma Course</trow>
        <trow>Type of Course</trow>
        <trow>College/University</trow>
        <trow>Board</trow>
        <trow>Reg.No</trow>
        <trow>Passing Year</trow>
        <trow className="border-radius:0px 8px 0px 0px;"> Documents </trow>
      </thead>
      <tbody>
        <td className="course">PGDCA</td>
        <td>Regular</td>
        <td>PrayagDas Tomar Computer Education Pvt.Ltd(delhi)</td>
        <td>Pvt.Ltd</td>
        <td>Reg.no125487</td>
        <td>2022</td>
        <td className="doc border-radius:0px 0px 11px 0px;">
          <Link to="/img/Certificate.gif" target="_blank">
            <img src="/img/Certificate.gif" alt="Docs" style={{width:180 , height:80 }} />
          </Link>
        </td>
      </tbody>
      <tbody>
        <td className="course">Bechelor of Arts</td>
        <td>Regular</td>
        <td>S.B. Deorah College</td>
        <td>Guwahati University</td>
        <td>Reg.no125487</td>
        <td>2015</td>

        <td className="doc border-radius:0px 0px 11px 0px;">
          <Link to="https://drive.google.com/file/d/14KZ2V-n4Lu4E4zcWg1wLytBUpW5D34dK/view?usp=sharing" target="_blank">
            <img src="/img/B.A. Certificate.gif" alt="Docs" style={{width:180 , height:80 }}/>
          </Link>
        </td>

      </tbody>
      <tbody>
        <td className="course">Higher Secondary</td>
        <td>Regular</td>
        <td>Jagiroad College</td>
        <td>ASHEC</td>
        <td>Reg.no125487</td>
        <td>2011</td>
        <td className="doc border-radius:0px 0px 11px 0px;">
          <Link to="/img/H.S Certificate.gif" target="_blank">
            <img src="/img/H.S Certificate.gif" alt="Docs" style={{width:180 , height:80 }}/>
          </Link>
        </td>
      </tbody>
      <tbody>
        <td className="course border-radius:0px 0px 0px 11px;">High School</td>
        <td>Regular</td>
        <td>Kuranibori High School</td>
        <td>SEBA</td>
        <td>Reg.no125487</td>
        <td>2009</td>
        <td className="doc border-radius:0px 0px 11px 0px;">
          <Link to ="/img/Living Certificate.gif" target="_blank">
            <img src="./Img/Living Certificate.gif" alt="Docs" style={{width:180 , height:80 }}/>
          </Link>
        </td>
      </tbody>
    </table>
        </div>
  </>
      
  )
}

