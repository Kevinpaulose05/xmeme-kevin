import React, { useEffect } from "react";

import axios from "axios";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import Meme from "./Meme";

const Memes = ({ signal, page }) => {
  const [memes, setMemes] = React.useState([]);
  const [message, setMessage] = React.useState("");

  const getMemes = () => {
    axios
      .get(`/memes/page/${page}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMemes(res.data.memes);
        setMessage("No Memes Yet");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMemes();
  }, [signal, page]);

  return (
    <Grid
      container
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      {memes != null && memes != undefined && memes.length !== 0 ? (
        memes.map((meme, index) => {
          return <Meme meme={meme} key={index} />;
        })
      ) : (
        <div
          style={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
          }}
        >
          {message}
        </div>
      )}
    </Grid>
  );
};

export default Memes;
