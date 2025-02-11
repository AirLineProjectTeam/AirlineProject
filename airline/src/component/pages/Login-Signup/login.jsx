import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect, useContext } from "react";
import { auth } from "../../firebase/firebase-config";
import { toast } from "react-toastify";
import SignInwithGoogle from "./signInWIthGoogle";
import { Link, useNavigate } from "react-router-dom";
import { getUserData } from "./Controllers/getUserData";
import formBackground from "./assets/bglsignup.png";
import background from "./assets/backg.jpg";
import { checkExpiration } from "./Controllers/checkCopounExpiration";
import { Context } from "../../sharedComponents/contextProvider";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user: userState, setUser } = useContext(Context);
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (userId) {
      const firebaseUrl = `https://airline-tickets-46241-default-rtdb.firebaseio.com/Users/${userId}.json`;
      axios.get(firebaseUrl)
        .then(res => {
          setUserDetails(res.data);
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const currentUser = auth.currentUser;
      let user = await getUserData(currentUser.uid);

      if (user) {
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("userId", currentUser.uid);
        sessionStorage.setItem("userEmail", currentUser.email);
        
        // Fetch user details from Firebase
        const userId = currentUser.uid;
        const firebaseUrl = `https://airline-tickets-46241-default-rtdb.firebaseio.com/Users/${userId}.json`;
        const response = await axios.get(firebaseUrl);
        const userDetails = response.data;

        if (userDetails.status !== "deactivated") {
          toast.success("User logged in Successfully", {
            position: "top-center",
          });
          navigate("/");
          setUser(user);
          sessionStorage.setItem("user", JSON.stringify(user));
          checkExpiration(user);
        } else {
          toast.error("Your account is deactivated", {
            position: "bottom-center",
          });
        }
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        style={{
          backgroundImage: `url(${formBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3 className="text-2xl font-semibold text-center mb-6">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
          <p className="text-sm text-gray-600 text-right">
            New user{" "}
            <Link to={"/Signup"} className="text-blue-600 hover:underline">
              Register Here
            </Link>
          </p>
          <SignInwithGoogle />
        </form>
      </div>
    </div>
  );
}

export default Login;