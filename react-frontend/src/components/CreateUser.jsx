import React, { useContext } from "react";
import { globalVal } from "./../globalContext/GlobalContext";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const { allUser, userDetail, setUserDetail, allDept, createUsers } =
    useContext(globalVal);

  let navigate = useNavigate();
  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    createUsers(userDetail);
    setTimeout(() => {
      setUserDetail({
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
      navigate("/");
    }, 2000);
  };
  return (
    <section className="createUser">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="EName"
            id="name"
            required
            placeholder="Enter your Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter Password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="Email"
            id="email"
            required
            placeholder="Enter Your Email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group2">
          <div className="form-group">
            <label htmlFor="empNo">Emp No:</label>
            <input
              type="number"
              name="EmpNO"
              id="empNo"
              required
              placeholder="Enter EmpNo"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation:</label>
            <input
              type="text"
              name="Job"
              id="designation"
              required
              placeholder="Enter your designation"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group2">
          <div className="form-group">
            <label htmlFor="managerNo">MGR No:</label>
            <select name="MGR" id="managerNo" required onChange={handleChange}>
              <option value="NA" disabled selected>
                Select Manager
              </option>
              {allUser.map((ele, ind) => {
                return <option value={ele.EmpNO}>{ele.EmpNO}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <select
              name="DeptNo"
              id="department"
              required
              onChange={handleChange}
            >
              <option value="NA" disabled selected>
                Select Department
              </option>
              {allDept.map((ele, ind) => {
                return <option value={ele._id}>{ele.DName}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="form-group2">
          <div className="form-group">
            <label htmlFor="salary">Salary:</label>
            <input
              type="number"
              name="sal"
              id="salary"
              required
              placeholder="Enter Your Salary"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="comm">Commission:</label>
            <input
              type="number"
              name="comm"
              id="comm"
              placeholder="Enter Commission"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="hiringDate">Hiring Date:</label>
          <input
            type="date"
            name="HireDate"
            id="hiringDate"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </section>
  );
};

export default CreateUser;
