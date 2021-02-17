import React from "react";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import Fab from "@material-ui/core/Fab";
import ShareIcon from "@material-ui/icons/Share";

import { useNavigate } from "react-router-dom";

const analyseTime = (time) => {
  let length = (new Date().getTime() - new Date(time).getTime()) / 1000;

  if (length < 60) return `just now`;
  if (length < 120) return `a min ago`;
  length = length / 60;

  if (length < 60) return `${parseInt(length)} mins ago`;
  length = length / 60;

  if (length < 2) return `an hour ago`;
  if (length < 24) return `${parseInt(length)} hours ago`;
  length = length / 24;

  if (length < 2) return `a day ago`;
  if (length < 31) return `${parseInt(length)} days ago`;
  length = length / 30.5;

  if (length < 2) return `a month ago`;
  if (length < 12) return `${parseInt(length)} months ago`;
  length = length / 12;

  if (length < 2) return `an year ago`;

  return `${parseInt(length)} years ago`;
};

const Meme = ({ meme }) => {
  const navigate = useNavigate();

  const [preview, setPreview] = React.useState("");

  var tester = new Image();
  tester.src = meme.url;
  tester.addEventListener("load", () => setPreview(meme.url));
  tester.addEventListener("error", () =>
    setPreview("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg")
  );

  return (
    <Grid item style={{ padding: "50px 10px 0px 10px" }} xs={12} sm={6} md={4}>
      <Card
        elevation={1}
        style={{
          display: "flex",
          justifyContent: "center",
          boxShadow: "0px 2px 4px 1px rgb(0,0,0,0.1)",
          width: "100%",
          textAlign: "left",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`/${meme._id}`);
        }}
      >
        <img src={preview} height="200px" width="300px" />
      </Card>
      <div
        style={{
          margin: "10px 0px 10px 0px",
          fontSize: "18px",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>{meme.caption}</div>
        <div>
          <Fab
            variant="extended"
            // color="primary"
            aria-label="add"
            size="small"
            style={{
              padding: "0px 0px",
              //   marginRight: "80px",
              //   fontFamily: "Oxygen",
              //   fontWeight: 700,
            }}
            onClick={() => {}}
          >
            <ShareIcon fontSize="small" color="primary" />
          </Fab>
        </div>
      </div>
      <div
        style={{
          margin: "0px 0px",
          color: "#6b7280",
          fontSize: "16px",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>{meme.name}</div>
        <div>{analyseTime(meme.time)}</div>
      </div>
    </Grid>
  );
};

export default Meme;
