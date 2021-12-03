import React from "react";
import "./home.css";
import { useForm } from "react-hook-form";
// import UserInformation from "./User-information.js";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// import UserInformation from "./User-information.js";
const Home = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/userInformation", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div>
      <h1 className="mt-5 h1">PLEASE REGISTER </h1>
      <div className="register">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-field-1 me-2 "
            type="text"
            {...register("firstname", { required: true, minLength: 2 })}
            placeholder="First Name"
            required
          />
          <input
            className="input-field-2 "
            {...register("lastName")}
            placeholder="Last Name"
            required
          />
          <br />

          <input
            className="my-2 input-field "
            type="date"
            {...register("date")}
            placeholder="date"
            required
          />
          <br />
          <input
            className="input-field "
            type="email"
            {...register("email")}
            placeholder="Email"
            required
          />
          <br />
          <input
            className="my-2 input-field"
            type="number"
            {...register("number", { minLength: 10 })}
            placeholder="Number"
            required
          />
          <br />
          <input
            className="my-2 input-field "
            type="text"
            {...register("address")}
            placeholder="Address"
            required
          />
          <br />

          <input className="input-btn" type="submit" />
          <br />
        </form>

        <Link to="/information">
          <Button className="input-btn ms-2 d-btn mb-5">
            {" "}
            More Information..
          </Button>
        </Link>
        {/* <UserInformation></UserInformation> */}
      </div>
    </div>
  );
};

export default Home;
