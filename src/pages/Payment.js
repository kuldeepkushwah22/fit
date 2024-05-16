import React from "react";
import ORcode from "../images/Qrcode.jpg"
import "./Payment.css";

const Payment = () => {
  return (
    <div>
      <h1 style={{ marginTop: "5%", color: "blue", textAlign: "center" }}>
        Make Payment for your good Health{" "}
      </h1>
      <img
        src={ORcode}
        style={{
          height: "300px",
          width: "300px",
          marginLeft: "42%",
          marginTop: "5%",
        }}
        alt=""
      />
    </div>
  );
};

export default Payment;
