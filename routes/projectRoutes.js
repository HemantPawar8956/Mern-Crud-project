const express = require("express");
const multer = require("multer");
const path = require("path");
const postModel = require("../model/postmodel");
const collection = require("../index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const storageData = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploadsImages", (error, sucess) => {
      if (error) {
        console.log(error);
      }
    });
  },
  filename: (req, file, cb) => {
    const name = `${Date.now()} - ${file.originalname}`;
    cb(null, name, (error, sucess) => {
      if (error) {
        console.log(error);
      }
    });
  },
});

const upload = multer({ storage: storageData });

app.get("/getUsers", async (req, res) => {
  try {
    const users = await postModel.UserpostModel.find();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

app.get("/filterUser", async (req, res) => {
  try {
    let searchKey = req.headers.empno;
    console.log(searchKey);
    const users = await postModel.UserpostModel.findOne({EmpNO:searchKey});
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

app.delete(`/deletUser/:id`, async (req, res) => {
  try {
    let usersId = req.params.id;
    const users = await postModel.UserpostModel.findOneAndDelete({
      _id: usersId,
    });
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

app.put(`/updateUser/:id`, async (req, res) => {
  try {
    let usersId = req.params.id;
    let data = req.body;
    const users = await postModel.UserpostModel.updateOne(
      { _id: usersId },
      data
    );
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

app.get("/getdepartment", async (req, res) => {
  try {
    const departments = await postModel.DeptpostModel.find();
    res.send(departments);
  } catch (error) {
    res.send(error);
  }
});

app.post("/create-User", async (req, res) => {
  try {
    const user = new postModel.UserpostModel(req.body);
    const userCreated = await user.save();
    res.json(userCreated);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = app;
