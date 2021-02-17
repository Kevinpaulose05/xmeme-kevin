const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const Meme = require("../models/memeModel");

exports.getAllMemes = catchAsync(async (req, res, next) => {
  const memes = await Meme.find().sort({ time: -1 });

  res.status(200).json({
    status: "success",
    memes,
  });
});

exports.getTheseMemes = catchAsync(async (req, res, next) => {
  const page = req.params.page;
  const memes = await Meme.find()
    .sort({ time: -1 })
    .skip((page - 1) * 100)
    .limit(100);

  res.status(200).json({
    status: "success",
    memes,
  });
});

exports.getAMeme = catchAsync(async (req, res, next) => {
  const meme = await Meme.findOne({ _id: req.params.id });

  if (!meme) {
    return next(new AppError("Invalid meme id", 404));
  }

  res.status(200).json({
    status: "success",
    meme,
  });
});

exports.postAMeme = catchAsync(async (req, res, next) => {
  let { name, caption, url } = req.body;
  console.log(name, caption, url);

  const newMeme = await Meme.create({ name, caption, url });

  if (!newMeme) {
    return next(
      new AppError("A problem occurred while creating the meme", 500)
    );
  }

  res.status(200).json({
    status: "success",
    meme: newMeme,
  });
});

exports.editAMeme = catchAsync(async (req, res, next) => {
  let meme = req.body;

  const updatedMeme = await Meme.findByIdAndUpdate(
    req.params.id,
    {
      caption: meme.caption,
      url: meme.url,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedMeme) {
    return next(
      new AppError("A problem occurred while updating the meme", 500)
    );
  }

  res.status(200).json({
    status: "success",
    meme: updatedMeme,
  });
});

exports.deleteAMeme = catchAsync(async (req, res, next) => {
  const deletedMeme = await Meme.findByIdAndDelete(req.params.id);

  if (!deletedMeme) {
    return next(
      new AppError("A problem occurred while deleting the meme", 500)
    );
  }

  res.status(200).json({
    status: "success",
    meme: deletedMeme,
  });
});

exports.checkDuplicate = catchAsync(async (req, res, next) => {
  const { caption, url } = req.body;

  let message = null;

  if (caption != null) {
    const meme = await Meme.findOne({ caption });
    if (meme) message = "Caption already exists";
  } else if (url != null) {
    const meme = await Meme.findOne({ url });
    if (meme) message = "Meme with this URL already exists";
  }

  if (message !== null) {
    res.status(409).send(message);
    return;
  }

  res.status(200).json({
    status: "success",
  });
});
