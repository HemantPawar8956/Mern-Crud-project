import React, { useContext, useEffect, useRef, useState } from "react";
import { globalVal } from "../globalContext/GlobalContext";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const {
    setUserDetail,
    allUser,
    deleteUser,
    fetchAllUsers,
    fetchAllDept,
    updateCount,
    deleteCount,
  } = useContext(globalVal);

  const [searched, setSearch] = useState("");
  const [searchedData, setSearchData] = useState(null);
  let navigate = useNavigate();
  let searchRef = useRef();

  let handleSearch = () => {
    let filteredData = allUser.filter((ele) => {
      return ele[`${searched}`] == searchRef.current.value;
    });
    setSearchData(filteredData);
  };

  useEffect(() => {
    fetchAllUsers();
    fetchAllDept();
  }, [updateCount, deleteCount]);
  return (
    <section className="allUsers">
      <div className="allUserNav">
        <div className="allUserNavLeft">
          {searchedData && (
            <button
              onClick={() => {
                setSearchData(null);
              }}
            >
              Home
            </button>
          )}
        </div>
        <div className="allUserNavRight">
          <select
            name=""
            id=""
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="searchbar"
          >
            <option value="NA" disabled selected>
              Searched
            </option>
            {allUser.length > 0 &&
              Object.keys(allUser[0]).map((key) => {
                return (
                  <option
                    value={`${key}`}
                    onClick={() => {
                      setSearch(key);
                    }}
                  >
                    {key}
                  </option>
                );
              })}
          </select>
          <input type="search" name="" id="" ref={searchRef} />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Designation</th>
            <th>MGR</th>
            <th>HireDate</th>
            <th>salary</th>
            <th>Comm</th>
            <th>Department NO</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {(searchedData || allUser).map((user, ind) => (
            <tr key={ind + 1}>
              <td>{user.EmpNO}</td>
              <td>{user.EName}</td>
              <td>{user.Job}</td>
              <td>{user.MGR || "NA"}</td>
              <td>{user.HireDate}</td>
              <td>{user.sal}</td>
              <td>{user.Comm || "NA"}</td>
              <td>{user.DeptNo}</td>
              <td>
                <button
                  className="delBtn"
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="updateBtn"
                  onClick={() => {
                    setUserDetail(user);
                    navigate("/updateUser", { state: user });
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Users;
