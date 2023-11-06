import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "./Loading";

export const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { pCode } = useParams();

  const { countryName } = useParams();

  const getDataFn = async () => {
    try {
      await axios.get(`https://api.zippopotam.us/${countryName}/${pCode}`)
      .then((res) => {
        setUsers(res.data);
      });
      setLoading(true);
    } catch (err) {
      alert("InCorrect Postal Code !!");
      navigate("/");
      console.log(err);
    }
  };

  useEffect(() => {
    getDataFn();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <div className="card-cont">
          {/* <ul>
            <h3>Country: {users.country}</h3>
            <li>State: {users.places[0].state}</li>
            <li>Place Name: {users.places[0]['place name']}</li>
          </ul> */}

          <ul>
            <li>Country: {users.country}</li>
            {users.places.map((item) => {
              return (
                <div className="card-cont">
                  <li>State: {item["state"]}</li>
                  <li>Place Name: {item["place name"]}</li>
                </div>
              );
            })}
          </ul>
          <button type="Reset" onClick={() => navigate("/")}>
            Clear
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};


