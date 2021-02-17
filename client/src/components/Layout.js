import React, { useEffect } from "react";
import axios from "axios";

import Content from "./Content";
import Memes from "./Memes";

import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },
}));

function Layout() {
  const classes = useStyles();
  const [signal, setSignal] = React.useState(false);

  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(1);

  const addNewMeme = (obj) => {
    axios.post("/memes", { ...obj }, { withCredentials: true }).then((res) => {
      setSignal(!signal);
      getMemeCount();
    });
  };

  const getMemeCount = () => {
    axios
      .get("/memes", {
        withCredentials: true,
      })
      .then((res) => {
        setCount(parseInt((res.data.memes.length - 1) / 100 + 1));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMemeCount();
  }, []);

  const changePage = (event, value) => {
    setPage(value);
  };

  return [
    <div style={{ height: "60px" }}></div>,
    <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
      <Content newMeme={addNewMeme} key="content" />
      <div className={classes.root}>
        Page&nbsp;&nbsp;
        <Pagination
          count={count}
          page={page}
          onChange={changePage}
          color="primary"
          hidePrevButton
          hideNextButton
        />
      </div>
      <Memes signal={signal} page={page} key="memes" />
    </Container>,
  ];
}

export default Layout;
