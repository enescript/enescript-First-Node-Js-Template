const express = require('express');
const router = express.Router();
const Catagories = require("../db/models/Categories")
const Response = require("../lib/Response")
const CustomError = require("../lib/Eroor")
const Enum = require("../config/Enum")


//! Show
router.get('/', async (req, res, next) => {
  try {
    let catagories = await Catagories.find({});
    res.json(Response.successResponse(catagories));
  }
  catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(err)
  }
});

//! Add
router.post("/add", async (req, res, next) => {
  let body = req.body;
  try {

    if (!body.name) throw new CustomError(Enum.HTTP_CODES.badRequest, "Validation Error!", "name fields must be filled");

    let catagory = new Catagories({
      name: body.name,
      is_active: body.is_active,
      created_by: req.user?.id
    });

    await catagory.save()

    res.json(Response.successResponse({ success: true }));

  }
  catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse)
  }
});

//! Update
router.post("/update", async (req, res, next) => {

  let body = req.body;

  try {

    if (!body._id) throw new CustomError(Enum.HTTP_CODES.badRequest, "Validation Error!", "name fields must be filled");

    let updates = {}

    if (body.name) updates.name = body.name;
    if (typeof body.is_active === "boolean") updates.is_active = body.is_active;

    await Catagories.updateOne({ _id: body._id }, updates)
    res.json(Response.successResponse({ success: true }));
  }

  catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse)
  }
});

//! Delete
router.post("/delete", async (req, res, next) => {
  let body = req.body;

  try {

    if (!body._id) throw new CustomError(Enum.HTTP_CODES.badRequest, "Validation Error!", "name fields must be filled");

    await Catagories.deleteOne({ _id: body._id })
    res.json(Response.successResponse({ success: true }));
  }

  catch (err) {
    let errorResponse = Response.errorResponse(err);
    res.status(errorResponse.code).json(errorResponse)
  }
});

module.exports = router;
