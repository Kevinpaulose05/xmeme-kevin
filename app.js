const path = require("path");

const express = require("express");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
// const cookieParser = require("cookie-parser");
const cors = require("cors");

//swagger docs
// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUI = require("swagger-ui-express");

const requestLogger = require("./utils/requestLogger");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const memeRouter = require("./routes/memeRoutes");

const app = express();

// const swaggerOptions = {
//   swaggerDefinition: {
//     info: {
//       title: 'XMeme',
//       version: '1.0.0'
//     }
//   },
//   apis: ['app.js', './routes/memeRoutes.js', './controllers/memeController.js'],
// }

// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
// /**
//  * @swagger
//  * /api/v1/memes:
//  *    get:
//  *      description: Get all memes
//  *      responses:
//  *        200:
//  *          description: Success
//  *
//  */

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3001",
//     credentials: true,
//   })
// );

app.use(xss());
app.use(express.json({ limit: "10kb" }));
// app.use(cookieParser());
app.use(mongoSanitize());

app.use(requestLogger);

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/memes", memeRouter);

app.get("/swagger-ui", (req, res, next) => {
  res.redirect("https://app.swaggerhub.com/apis-docs/Kevinpaulose/Xmeme/1.0.2");
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
app.get("/:id", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// app.get("/:tag", (req, res, next) => {
//   // res.status(200).json({
//   //   status: "success",
//   // });
//   res.redirect("/");
// });

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
