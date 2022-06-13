import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useState } from "react-router-dom";
import { DashboardTypes } from '../../redux/action_types/Dashboard_type';

const Dashboard = (props) => {
  let { user } = useParams();
 
  const dataredux = useSelector((state) => state.Dashboard.userlist)
  // const userdata=data.data
  console.log("user", dataredux);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutFn = () => {

    console.log("hello dashboardjs")
    localStorage.clear('token')
    navigate('/login')
  }

  const userData = () => {
    dispatch({
      type: DashboardTypes.DATA_REQUEST,
    });
    console.log("hai dashboard ");
  }

  useEffect(() => {
    userData();
  }, [])

  
  return (
    <div>
      <div>

        <div>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>First  Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>

              {
                dataredux.map((data, index) => {
                  return (

                    <tr key={index} onClick={() => navigate(`/dashboard/${data.id}`)}>
                      <td>{data.first_name}</td>
                      <td>{data.last_name}</td>
                      <td>{data.email}</td>
                    </tr>
                  );
                }
                )
              }
            </tbody>

          </table>

        </div>
      </div>
      <button onClick={logoutFn}>Logout</button>
    </div>
  )
}

export default Dashboard