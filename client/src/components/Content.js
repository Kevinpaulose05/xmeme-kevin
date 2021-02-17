import React, { useEffect } from "react";
import "./Content.css";

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import Icon from "@material-ui/core/Icon";

import Scroll from "./../scroll";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  helpertext: {
    fontFamily: "Oxygen",
    color: "red",
    fontWeight: 700,
  },
}));

const Content = ({ newMeme }) => {
  const classes = useStyles();

  const [state, setState] = React.useState(false);

  const [colour, setColour] = React.useState({ color: "#9EA2AD" });

  const [name, setName] = React.useState("");
  const [caption, setCaption] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [preview, setPreview] = React.useState(
    "https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg"
  );

  const [hidden, setHidden] = React.useState(true);

  const [helperText1, setHelperText1] = React.useState("");
  const [helperText2, setHelperText2] = React.useState("");

  const [message, setMessage] = React.useState(
    "Make sure all fields are filled up."
  );

  const toggleDrawer = (open) => {
    setState(open);
  };

  const toggleColor = (col) => {
    setColour({ color: col });
  };

  const testUrl = () => {
    if (url.startsWith("/") || url.startsWith("memes")) {
      setPreview("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg");
      setHidden(false);
      setMessage("Invalid URL");
      return;
    }

    var tester = new Image();
    tester.src = url;
    tester.addEventListener("load", () => {
      setPreview(url);
      setHidden(true);
      setMessage("Make sure all fields are filled up.");
    });
    tester.addEventListener("error", () => {
      setPreview("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg");
      setHidden(false);
      setMessage("Invalid URL");
    });
  };

  const checkFields = () => {
    if (
      name !== "" &&
      caption !== "" &&
      url !== "" &&
      preview === url &&
      helperText1 === "" &&
      helperText2 === ""
    ) {
      toggleDrawer(false);
      newMeme({ name, caption, url });
    } else
      setHidden(
        name !== "" &&
          caption !== "" &&
          url !== "" &&
          preview === url &&
          helperText1 === "" &&
          helperText2 === ""
      );
  };

  const checkDuplicates = (c, u) => {
    axios
      .post("/memes/check", { caption: c, url: u }, { withCredentials: true })
      .then((res) => {
        if (c) setHelperText1("");
        else if (u) {
          setHelperText2("");
          testUrl();
        }
      })
      .catch((err) => {
        if (c) setHelperText1(err.response.data);
        else if (u) setHelperText2(err.response.data);
      });
  };

  useEffect(() => {
    if (url === "") {
      setHelperText2("");
      setPreview("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg");
      setHidden(true);
      setMessage("Make sure all fields are filled up.");
    } else {
      checkDuplicates(null, url);
    }
  }, [url]);

  useEffect(() => {
    if (caption === "") setHelperText1("");
    else checkDuplicates(caption, null);
  }, [caption]);

  useEffect(() => {
    if (state === false) {
      setName("");
      setCaption("");
      setUrl("");
      setPreview("https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg");
      setHidden(true);
    }
  }, [state]);

  return [
    <Grid
      container
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Grid item xs={12} md={7}>
        <h1
          style={{
            padding: "30px 10px 0px 10px",
            marginTop: "23px",
            fontWeight: 700,
            letterSpacing: "-1px",
            fontSize: "36px",
            textAlign: "left",
          }}
        >
          X Meme
        </h1>
        <h3
          style={{
            padding: "0px 10px",
            margin: "-10px 0px 0px 0px",
            fontSize: "20px",
            fontWeight: 400,
            color: "#837280",
            textAlign: "left",
          }}
        >
          Post your memes and explore other memes!
        </h3>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        style={{
          padding: "10px 0px",
          display: "flex",
          justifyContent: "space-between",
          position: "fixed",
          right: 20,
        }}
      >
        <Button
          variant="contained"
          style={{
            textTransform: "none",
            fontFamily: "Oxygen",
            color: "white",
            fontSize: "16px",
            backgroundColor: "#4338CA",
            padding: "7px 19px",
            borderRadius: "7px",
            margin: "auto",
            // position: "fixed",
            // float: "right",
            // right: 20,
          }}
          onClick={() => toggleDrawer(true)}
        >
          Create Meme
        </Button>
      </Grid>
    </Grid>,
    <Drawer
      BackdropProps={{ invisible: true }}
      anchor={"right"}
      open={state}
      onClose={() => toggleDrawer(false)}
      style={{ width: "50px" }}
      elevation={1}
      width="50%"
    >
      <div style={{ display: "flex", backgroundColor: "#F9FAFB" }}>
        <div style={{ paddingLeft: 20, paddingRight: 20, maxWidth: "600px" }}>
          <h4 style={{ fontWeight: 400, fontSize: 20 }}>New X Meme</h4>
          <h5
            style={{
              fontWeight: 400,
              fontSize: 14,
              color: "#6b7280",
              marginTop: "-18px",
            }}
          >
            Get started by filling in the information below to create your new
            xmeme. Don't DOS it please. Be a human.
          </h5>
        </div>
        <div style={{ padding: "30px 10px" }}>
          <Icon
            onClick={() => toggleDrawer(false)}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => toggleColor("#6B7280")}
            onMouseLeave={() => toggleColor("#9EA2AD")}
          >
            <CloseRoundedIcon style={colour} />
          </Icon>
        </div>
      </div>
      <Grid
        container
        style={{
          borderBottom: "1px solid rgb(0,0,0,0.1)",
          padding: "20px 20px",
          fontSize: "16px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={5}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "14px" }}>Meme Owner *</span>
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            id="name"
            size="small"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            inputProps={{ style: { fontFamily: "Oxygen", fontSize: "14px" } }}
            fullWidth
            id="outlined-name"
            placeholder="Enter your full name"
            variant="outlined"
            className="inputRounded"
          />
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          borderBottom: "1px solid rgb(0,0,0,0.1)",
          padding: "20px 20px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={5}
          style={{ display: "flex", alignItems: "center" }}
        >
          <span style={{ fontSize: "14px" }}>Caption *</span>
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            id="caption"
            value={caption}
            helperText={helperText1}
            FormHelperTextProps={{
              className: classes.helpertext,
            }}
            onChange={(event) => {
              setCaption(event.target.value);
            }}
            size="small"
            inputProps={{ style: { fontFamily: "Oxygen", fontSize: "14px" } }}
            fullWidth
            multiline
            rows={3}
            rowsMax={3}
            id="outlined-caption"
            placeholder="Be creative with your caption"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          borderBottom: "1px solid rgb(0,0,0,0.1)",
          padding: "20px 20px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={5}
          style={{ display: "flex", alignItems: "center" }}
        >
          <span style={{ fontSize: "14px" }}>Meme URL *</span>
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            id="url"
            value={url}
            helperText={helperText2}
            FormHelperTextProps={{
              className: classes.helpertext,
            }}
            onChange={(event) => {
              setUrl(event.target.value);
            }}
            size="small"
            inputProps={{ style: { fontFamily: "Oxygen", fontSize: "14px" } }}
            fullWidth
            id="outlined-url"
            placeholder="Enter URL of your meme here"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          borderBottom: "1px solid rgb(0,0,0,0.1)",
          padding: "20px 20px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={5}
          style={{ display: "flex", alignItems: "center" }}
        >
          <span style={{ fontSize: "14px" }}>Meme Preview *</span>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper
            elevation={1}
            style={{
              display: "flex",
              justifyContent: "center",
              boxShadow: "0px 2px 4px 1px rgb(0,0,0,0.1)",
            }}
          >
            <img src={preview} height="260px" width="350px" />
          </Paper>
          <div style={{ margin: "10px 0px 10px 0px", fontSize: "18px" }}>
            {caption}
          </div>
          <div
            style={{ margin: "0px 0px", color: "#6b7280", fontSize: "16px" }}
          >
            {name}
          </div>
        </Grid>
        <div hidden={hidden} style={{ paddingTop: "40px", color: "#b91c1c" }}>
          {message}
        </div>
      </Grid>
      <div
        style={{
          display: "flex",
          padding: "10px 18px",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="outlined"
          style={{
            textTransform: "none",
            fontFamily: "Oxygen",
            fontSize: "14px",
            padding: "5px 15px",
            margin: "10px",
            borderRadius: "7px",
          }}
          onClick={() => toggleDrawer(false)}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          style={{
            textTransform: "none",
            fontFamily: "Oxygen",
            color: "white",
            fontSize: "14px",
            backgroundColor: "#4338CA",
            padding: "5px 15px",
            margin: "10px",
            borderRadius: "7px",
          }}
          onClick={() => {
            checkFields();
          }}
        >
          Create
        </Button>
      </div>
    </Drawer>,
    <Scroll showBelow={250} />,
  ];
};

export default Content;
