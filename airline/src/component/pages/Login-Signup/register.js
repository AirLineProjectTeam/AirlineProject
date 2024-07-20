import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

import { setUserData } from "./Controllers/setUserData";
import { Copoun } from "../../../models/copoun";
import { getCurrentDate } from "./Controllers/getCurrentDate";
import { User } from "../../../models/user";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneNumber, setPhone] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const currentUser = auth.currentUser;

      if (currentUser) {
        const copoun = new Copoun({
          copounID: 0,
          description: "Welcoming copoun",
          discountPercentage: "20%",
          expiration: getCurrentDate({ monthAdd: 1 }),
          isExpired: false,
          isUsed: false,
        });
        const user = new User({
          userID: currentUser.uid,
          email: currentUser.email,
          fullName: `${fname} ${lname}`,
          tickets: [],
          phoneNumber: phoneNumber,
          copouns: [copoun],
        });
        let response = await setUserData(user);
        if (response) {
          toast.success("User logged in Successfully", {
            position: "top-center",
          });
        }
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label>Phone-Number</label>
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">Login</a>
      </p>
    </form>
  );
}
export default Register;
