import { useState, useEffect } from "react";
import axios from "axios";
import {} from "../../asset/scss/UI.scss";
import icon from "../../asset/image/icon.png";

function UI() {
  //   const [data, setData] = useState({});

  //   useEffect(() => {
  //     async function getUser() {
  //       try {
  //         const response = await axios.get(
  //           "http://api.weatherapi.com/v1/current.json?key=220b162ef6574c97ac432326212612&q=an%20giang"
  //         );
  //         console.log(response.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //     getUser();
  //   }, []);
  return (
    <>
      <div className="header">
        <div className="title d-block">
          <div className="text">DEMO LẤY API VỀ THỜI TIẾT</div>
          <div class="search__container">
            <input class="search__input" type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <br />
      <div className="content d-block">
        <div className="row w-100">
          <div className="col-6">
            <div className="name-local">
              <div className="h2-text">THANH PHO HO CHI MINH</div>
              <h3 style={{ textAlign: "center" }}>
                23/2/2023 <h4>10 : 45</h4>
              </h3>
            </div>
          </div>

          <div className="col-6">
            <div className="temp">
              27<sup className="sup-temp">o</sup>
              <div className="line"> </div>
              <div className="text-temp">
                It's Sunny <img src={icon} className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="row w-100 pb-5">
          <div className="col-4">
            <div className="box-information">
              <div className="title-information">MAIN</div>
              <table className="information-weather-main">
                <tr>
                  <th>Temp_c:</th>
                  <td>19.9</td>
                </tr>
                <tr>
                  <th>Temp_f:</th>
                  <td>67.8</td>
                </tr>
                <tr>
                  <th>Last update:</th>
                  <td>21/02/2023 21:45</td>
                </tr>
                <tr>
                  <th>Cloud:</th>
                  <td>71</td>
                </tr>
                <tr>
                  <th>Humidity:</th>
                  <td>96</td>
                </tr>
                <tr>
                  <th>Condition:</th>
                  <td>Light rain shower</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="col-4">
            <div className="box-information">
              <div className="title-information">Wind:</div>
              <table className="information-weather-main">
                <tr>
                  <th>MPH:</th>
                  <td>4.7</td>
                </tr>
                <tr>
                  <th>KPH</th>
                  <td>7.6</td>
                </tr>
                <tr>
                  <th>Degree:</th>
                  <td>358</td>
                </tr>
                <tr>
                  <th>Dir:</th>
                  <td>"N"</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="col-4">
            <div className="box-information">
              <div className="title-information">PRESSURE</div>
              <table className="information-weather-main">
                <tr>
                  <th>MB:</th>
                  <td>1018.0</td>
                </tr>
                <tr>
                  <th>IN:</th>
                  <td>30.06</td>
                </tr>
                <tr>
                  <th>MM:</th>
                  <td>02</td>
                </tr>
                <tr>
                  <th>IN:</th>
                  <td>0.01</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UI;
