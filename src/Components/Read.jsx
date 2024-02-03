import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Read() {
  const [apiData, setApiData] = useState([]);
  const getData = () => {
    axios
      .get("https://65be264cdcfcce42a6f1ec91.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      })
      .catch(() => {
        console.log("404 Page Not Found");
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://65be264cdcfcce42a6f1ec91.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error("Delete request failed:", error);
      });
  };

  const setDataToStorage = (id,name,age,email) => {
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('email',email);
  }
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2">
            <Link to="/Create">
              <button className="btn btn-primary">Create New Data</button>
            </Link>
          </div>
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.e_name}</td>
                  <td>{item.e_age}</td>
                  <td>{item.e_email}</td>
                  <td>
                    <Link to="/Edit">
                      <button
                        className="btn 
btn-primary" onClick={() => setDataToStorage(item.id , item.e_name,item.e_age,item.e_email)}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn 
              btn-danger"
                      onClick={() => {
                        if (window.confirm("Are you sure to delete Data??")) {
                          handleDelete(item.id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Read;
