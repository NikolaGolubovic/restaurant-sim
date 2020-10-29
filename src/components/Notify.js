import React, { useEffect } from "react";

const Notify = ({ errMsg, infoMsg, setErrMsg, setInfoMsg }) => {
  useEffect(() => {
    setTimeout(() => {
      setErrMsg("");
    }, 3000);
  }, [errMsg]);

  useEffect(() => {
    setTimeout(() => {
      setInfoMsg("");
    }, 3000);
  }, [infoMsg]);

  return (
    <>
      {errMsg && (
        <div
          className="notification"
          style={{ display: errMsg ? "visible" : "hidden" }}
        >
          <p style={{ color: "red" }}>{errMsg}</p>
        </div>
      )}
      {infoMsg && (
        <div
          className="notification"
          style={{
            display: infoMsg ? "visible" : "hidden",
            border: "1px solid green",
          }}
        >
          <p style={{ color: "green" }}>{infoMsg}</p>
        </div>
      )}
    </>
  );
};

export default Notify;
