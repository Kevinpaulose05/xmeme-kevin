import React from "react";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import LaunchIcon from "@material-ui/icons/Launch";

import { useNavigate } from "react-router-dom";

const MainBar = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        padding: "14px 0px",
        alignItems: "center",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        borderBottom: "1px solid rgb(0,0,0,0.09)",
        backgroundColor: "#ffb74d",
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          letterSpacing: "0px",
          marginLeft: "30px",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Logo_of_X_%28company%29.svg"
          height={24}
          style={{ paddingRight: 4 }}
        /> */}
        <span
          style={{
            position: "relative",
            fontWeight: 600,
            color: "#4F46E5",
            fontSize: 24,
            left: 124.12,
          }}
        >
          XMeme
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          color: "#fff",
          right: 20,
          cursor: "pointer",
        }}
      >
        <Button
          variant="contained"
          size="small"
          style={{
            textTransform: "none",
            fontFamily: "Oxygen",
            color: "white",
            // fontSize: "16px",
            backgroundColor: "#047857",
            // padding: "7px 19px",
            borderRadius: "7px",
            margin: "auto",
            marginRight: "20px",
            // position: "fixed",
            // float: "right",
            // right: 20,
          }}
          onClick={() => {
            window.open(
              "https://app.swaggerhub.com/apis-docs/Kevinpaulose/Xmeme/1.0.0"
            );
          }}
        >
          swagger
          <LaunchIcon size="small" />
        </Button>
      </div>
    </div>
  );
};

export default MainBar;
