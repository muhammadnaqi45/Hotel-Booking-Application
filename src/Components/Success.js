import React from "react";

const Success = ({ message }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ position: "fixed", top: "0", width: "50%", zIndex: "999" }}
          className="alert alert-success text-center p-0"
          role="alert"
        >
          {message}
        </div>
      </div>
    </>
  );
};

export default Success;
