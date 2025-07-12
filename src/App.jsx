import { useState } from "react";
import "./App.css";

function App() {
  let [coin, setCoin] = useState(0);
  let [power, setPower] = useState(6500);
  let [level, setLevel] = useState(1);
  let [earn, setEarn] = useState(1);
  let [cordinate,setCordinate]= useState({x:0,y:0})
  function addCoin(e) {
    setCordinate({
      x: e.clientX,
      y: e.clientY,
    });
    if (power <= 0) {
      return;
    } else {
      setCoin(coin + earn);
      setPower(power - earn);
      levelUp();
    }
  }
  function levelUp() {
    if (coin == 20) {
      setLevel(level + 1);
      setEarn(earn + 2);
    } else if (coin == 99) {
      setLevel(level + 1);
      setEarn(earn + 2);
    }
  }
  return (
    <div>
      <div className="container">
        <div className="box">
          <h1>Hamster Combat</h1>
          <div className="coinInfo">
            <div className="coinCard">
              <p>Earn per tap</p>
              <h6>
                <img src="hk.png" alt="" /> +{earn}
              </h6>
            </div>
            <div className="coinCard">
              <p style={{ color: "#6F72E2" }}> Level </p>
              <h6>{level}</h6>
            </div>
            <div className="coinCard">
              <p style={{ color: "#84CB69" }}>Profit per hour</p>
              <h6>
                <img src="hk.png" alt="" /> +636
              </h6>
            </div>
          </div>
          <h2>
            <img src="hk.png" alt="" />
            {coin}
          </h2>
          <div className="hamster-box">
          <img
            src="Group 24.png"
            alt=""
            onClick={(e) => addCoin(e)}
            className="a"
          />
          <p style={{top:cordinate.y+50,left:cordinate.x}}>+{earn}</p>
          </div>
          <div className="pbox">
            <p className="pl">
              <img src="Vector (2).png" alt="" />
              {power}/6500
            </p>
            <p className="l">Boost</p>
          </div>
          <div className="interacion">
            <div className="interactionCard">
              <img src="Union.png" alt="" />
              <p>Exchange</p>
            </div>
            <div className="interactionCard">
              <img src="Union.png" alt="" />
              <p>Mine</p>
            </div>
            <div className="interactionCard">
              <img src="Union.png" alt="" />
              <p>Friends</p>
            </div>
            <div className="interactionCard">
              <img src="Union.png" alt="" />
              <p>Earn</p>
            </div>
            <div className="interactionCard">
              <img src="Union.png" alt="" />
              <p>Airdrop </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
