const mongoose = require("mongoose");

let schemaData = mongoose.Schema({
  EmpNO: {
    type: String,
    required: true,
  },
  EName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  sal: {
    type: String,
    required: true,
  },
  MGR: {
    type: String,
    required: true,
  },
  DeptNo: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  comm: {
    type: String,
    required: true,
  },
  Job: {
    type: String,
    required: true,
  },
  HireDate: {
    type: String,
    required: true,
  },
});

let DeptschemaData = mongoose.Schema({
  DName: {
    type: String,
    required: true,
  },
  Loc: {
    type: String,
    required: true,
  },
});

let UserpostModel = mongoose.model("Users", schemaData);
let DeptpostModel = mongoose.model("departments", DeptschemaData);
module.exports = { UserpostModel, DeptpostModel };
