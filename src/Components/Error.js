import React from "react";

const Error = ({ msg }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{ position: "fixed", top: "0", width: "50%", zIndex: "999" }}
        className="alert alert-danger text-center p-0"
        role="alert"
      >
        {msg}
      </div>
    </div>
  );
};

export default Error;
