import React, { useState } from "react";
import RiseLoader from "react-spinners/RiseLoader";

const Loader = () => {
  let [loading, setLoading] = useState(true);
  return (
    <>
      <div className="sweet-loading text-center" style={{ marginTop: "13rem" }}>
        <RiseLoader
          color={"#000"}
          loading={loading}
          size={22}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default Loader;
