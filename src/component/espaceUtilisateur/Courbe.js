import "./courbe.css";
import React from "react";

const courbe = () => {
  return (
    <div className="courbe">
      <h1>Monthly use Graph</h1>
      <div className="chart-container">
        <div className="base"></div>

        <ul className="meter">
          <li>
            <div style={{ color: "#0dabd9" }}>week1</div>
          </li>
          <li>
            <div style={{ color: "#0dabd9" }}>week2</div>
          </li>
          <li>
            <div style={{ color: "#0dabd9" }}>week3</div>
          </li>
          <li>
            <div style={{ color: "#0dabd9" }}>week4</div>
          </li>
          <li>
            <div style={{ color: "#0dabd9" }}>less than a week</div>
          </li>
        </ul>

        <table>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>

        <div className="bar one"></div>
        <div className="bar two"></div>
        <div className="bar three"></div>
        <div className="bar four"></div>
        <div className="bar five"></div>
        <div className="bar six"></div>
        <div className="bar seven"></div>
        <div className="bar eight"></div>
      </div>
    </div>
  );
};

export default courbe;
