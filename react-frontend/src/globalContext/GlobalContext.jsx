import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const globalVal = createContext();
const GlobalContext = ({ children }) => {
  let { Provider } = globalVal;
  const [allUser, setAllUsers] = useState([]);
  const [allDept, setDept] = useState([]);
  const [deleteCount, setdeleteCount] = useState(0);
  const [updateCount, setupdateCount] = useState(0);
  const [userDetail, setUserDetail] = useState({
    EmpNO: "",
    EName: "",
    Email: "",
    password: "",
    Job: "",
    MGR: "",
    HireDate: "",
    sal: "",
    comm: "",
    DeptNo: "",
  });
  console.log(allDept);
  let fetchAllUsers = async () => {
    let response = await axios.get("http://localhost:8000/api/getUsers");
    setAllUsers(response.data);
  };
  let fetchAllDept = async () => {
    let response = await axios.get("http://localhost:8000/api/getdepartment");
    setDept(response.data);
  };

  let createUsers = async (data) => {
    let response = await axios.post(
      "http://localhost:8000/api/create-User",
      data
    );
    setupdateCount(updateCount ? 0 : updateCount + 1);
    toast.success("User is Created");
    return response;
  };

  let deleteUser = async (id) => {
    let response = await axios.delete(
      `http://localhost:8000/api/deletUser/${id}`
    );
    setdeleteCount(deleteCount + 1);
    toast.success("User is deleted");
    return response;
  };

  let updateUser = async (id) => {
    let response = await axios.put(
      `http://localhost:8000/api/updateUser/${id}`,
      userDetail
    );
    setupdateCount(updateCount + 1);
    toast.success("User is Updated");
    return response;
  };

  return (
    <Provider
      value={{
        allUser,
        deleteUser,
        updateUser,
        userDetail,
        setUserDetail,
        allDept,
        createUsers,
        fetchAllUsers,
        fetchAllDept,
        updateCount,
        deleteCount,
      }}
    >
      {children}
    </Provider>
  );
};

export default GlobalContext;
