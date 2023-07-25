import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Rent from "./Pages/Book/Hotels/Rent";
import Single from "./Pages/Book/Single/Single";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Dashboard/Dashbaord/Dashboard";
import Register from "./Dashboard/Register/Register";
import Login from "./Dashboard/Login/Login";
import Header from "./Components/Header/Header";
import Intouch from "./Components/Intouch/Intouch";
import "font-awesome/css/font-awesome.min.css";
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import Customer from "./Dashboard/Customer/Customer";
import Agent from "./Dashboard/Agent/Agent";
import ManageList from "./Dashboard/Agent/ManageList";
import Agentside from "./Dashboard/Agent/Agentside";
import Basics from "./Dashboard/Agent/Section/Basics";
import Description from "./Dashboard/Agent/Section/Description";
import Location from "./Dashboard/Agent/Section/Location";
import Amenities from "./Dashboard/Agent/Section/Amenities";
import Photos from "./Dashboard/Agent/Section/Photos";
import Video from "./Dashboard/Agent/Section/Video";
import Calender from "./Dashboard/Agent/Section/Calender";
import Pricing from "./Dashboard/Agent/Section/Pricing";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    console.log("User", user);
    if (!user) {
      return <Navigate to="/Dashboard/login" />;
    }
    return children;
  };

  const [value, setValue] = useState(null);

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Hotels" element={<Rent />} />
          <Route path="Single/:id" element={<Single />} />
        </Route>
        <Route path="/Dashboard">
          <Route
            index
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
        </Route>
        <Route path="/Hotels">
          <Route index element={<Rent />} />
        </Route>
        <Route path="/Confirm">
          {/* <Route index element={<Confirm />} /> */}
        </Route>
        <Route path="Agent">
          <Route
            index
            element={
              <div className="" style={{ marginTop: "10vh" }}>
                <Agent />
              </div>
            }
          />
          {/* <Route
            path="Manage"
            element={
              <div>
                <Agentside />
                <ManageList />
              </div>
            }
          /> */}
        </Route>
        <Route path="AgentManage">
          {/* <Route
            index
            element={
              <div className="" style={{ marginTop: "10vh" }}>
                <Agent />
              </div>
            }
          /> */}
          <Route
            path="BasicS"
            element={
              <div>
                <Agentside />
                <Basics />
              </div>
            }
          />
          <Route
            path="Description"
            element={
              <div>
                <Agentside />
                <Description />
              </div>
            }
          />
          <Route
            path="Calender"
            element={
              <div>
                <Agentside />
                <Calender />
              </div>
            }
          />
          <Route
            path="Location"
            element={
              <div>
                <Agentside />
                <Location />
              </div>
            }
          />
          <Route
            path="Amenities"
            element={
              <div>
                <Agentside />
                <Amenities />
              </div>
            }
          />
          <Route
            path="Photos"
            element={
              <div>
                <Agentside />
                <Photos />
              </div>
            }
          />
          <Route
            path="Video"
            element={
              <div>
                <Agentside />
                <Video />
              </div>
            }
          />
          <Route
            path="Pricing"
            element={
              <div>
                <Agentside />
                <Pricing />
              </div>
            }
          />
        </Route>
      </Routes>
      {/* <Intouch /> */}
      {/* <Footer /> */}

      {/* <Customer /> */}
    </Router>
  );
}

export default App;
