import React from "react";
import "./Calc.css";

const Calc = () => {
  return (
    <div className="cal_main container">
      <div className="cal_wrapper">
        <div className="head">
          <div className="name">
            <h2>SR Calculator</h2>
          </div>
          <div className="display">
            <h3>0</h3>
          </div>
        </div>

        <div className="buttons_wrraper">
          <div className="btn1 cmn_btn">MRC</div>
          <div className="btn2 cmn_btn">M-</div>
          <div className="btn3 cmn_btn">M+</div>
          <div className="btn4 cmn_btn">+/-</div>
          <div className="btn5 cmn_btn">ON</div>
          <div className="btn6 cmn_btn">7</div>
          <div className="btn7 cmn_btn">8</div>
          <div className="btn8 cmn_btn">9</div>
          <div className="btn9 cmn_btn">%</div>
          <div className="btn10 cmn_btn">RTN</div>
          <div className="btn11 cmn_btn">4</div>
          <div className="btn12 cmn_btn">5</div>
          <div className="btn13 cmn_btn">6</div>
          <div className="btn14 cmn_btn">+</div>
          <div className="btn15 cmn_btn">/</div>
          <div className="btn16 cmn_btn">1</div>
          <div className="btn17 cmn_btn">2</div>
          <div className="btn18 cmn_btn">3</div>
          <div className="btn19 cmn_btn">x</div>
          <div className="btn20 cmn_btn">=</div>
          <div className="btn21 cmn_btn">0</div>
          <div className="btn22 cmn_btn">00</div>
          <div className="btn23 cmn_btn">.</div>
          <div className="btn24 cmn_btn">-</div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
