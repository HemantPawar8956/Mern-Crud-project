import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { globalVal } from "./../globalContext/GlobalContext";
import { Toaster } from 'react-hot-toast';

const UpdateUser = () => {
  const { allUser, updateUser, userDetail, setUserDetail } =
    useContext(globalVal);
    const navigate = useNavigate();
  let data = useLocation();
  console.log(data.state);
  let { EmpNO, EName, Email, password, Job, MGR, HireDate, sal, comm, DeptNo } =
    data.state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let response = updateUser(data.state._id);
    console.log(response);
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
    <article className="updateUser">
    <Toaster/>
      <section className="createUser">
        <h1>Update User</h1>
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
              value={userDetail.EName}
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
              value={userDetail.password}
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
              value={userDetail.Email}
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
                value={userDetail.EmpNO}
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
                value={userDetail.Job}
              />
            </div>
          </div>

          <div className="form-group2">
            <div className="form-group">
              <label htmlFor="managerNo">MGR No:</label>
              <select
                name="MGR"
                id="managerNo"
                required
                onChange={handleChange}
              >
                <option value="NA">Select Manager</option>
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
                <option value="NA">Select Department</option>
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
                value={userDetail.sal}
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
                value={userDetail.comm}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="hiringDate">Hiring Date:</label>
            <input
              type="date"
              name="HireDate"
              id="hiringDate"
              onChange={handleChange}
              value={userDetail.HireDate}
            />
          </div>
          <button type="submit">Update User</button>
        </form>
      </section>
    </article>
  );
};

export default UpdateUser;
