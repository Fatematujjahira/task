import React, { useEffect, useState } from "react";

const UserInformation = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/moreInformation")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div className="information">
      {user.map((information) => (
        <div key={information._id}>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                {/* <img src={information.img} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h3 className="card-title fw-bold">
                    {information.firstname}
                  </h3>
                  <h5 className="card-title">{information.lastname}</h5>
                  <h5 className="card-title">{information.email}</h5>
                  <h5 className="card-title">{information.date}</h5>
                  <h5 className="card-title">{information.number}</h5>
                  <h5 className="card-title">{information.address}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserInformation;
