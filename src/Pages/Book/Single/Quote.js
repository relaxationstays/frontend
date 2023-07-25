import React, { useState } from "react";
import "./Quote.css";
import Api from "../../../Api/Api";

export default function Quote() {
  const [select, setselect] = useState(0);
  const [send, setSend] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [services, setServices] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [property, setProperty] = useState("");
  const [Frequent, setFrequent] = useState("");
  const [business, setBusiness] = useState("");

  function submitEmail() {
    const formData = {
      type: select == 0 ? "PERSONAL" : "BUSINESS",
      name: name,
      email: email,
      contact: contact,
      services: services,
      location: location,
      description: description,
      property: property,
      Frequent: Frequent,
      property: property,
      business: business,
    };

    if (
      name.length > 4 &&
      email.length > 3 &&
      contact.length > 3 
  
    ) {
      setSend(1);
      Api.sendmail(formData).then((res) => {
        console.log(res.data);
        if (res.data == "success") {
          window.alert("Mail sent Successfully");
          window.location.reload();
        } else {
          window.alert("Mail Failed");
        }
      });
    } else {
      window.alert("Some fields are required");
    }
  }

  return (
    <div>
      <div className="container">
        <div className=" ">
          <div className="quotepage" align="center">
            <h4 data-aos="fade-down">GET A FREE QUOTE</h4>
            <div className="select">
              <ul>
                <li
                  onClick={() => setselect(0)}
                  style={
                    select == 0
                      ? {
                          background: "red",
                          color: "white",
                          fontWeight: "bold",
                        }
                      : {}
                  }
                >
                  INDIVIDUAL
                </li>
                <li
                  onClick={() => setselect(1)}
                  style={
                    select == 1
                      ? {
                          background: "red",
                          color: "white",
                          fontWeight: "bold",
                        }
                      : {}
                  }
                >
                  BUSINESS
                </li>
              </ul>
              <hr />
            </div>
            <div
              style={select == 0 ? { display: "block" } : { display: "none" }}
            >
              <p>Individual quote</p>
              <div>
                <label data-aos="fade-down"> Name</label>
                <br />
                <input onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div>
                <label data-aos="fade-down"> Email</label>
                <br />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                />
              </div>
              <div>
                <label data-aos="fade-down"> Contact Number</label>
                <br />
                <input
                  onChange={(e) => setContact(e.target.value)}
                  value={contact}
                  type="number"
                />
              </div>
              <div>
                <label data-aos="fade-down">Services</label>
                <br />
                <select
                  onChange={(e) => setServices(e.target.value)}
                  value={services}
                >
                  <option>PLUMBING</option>
                  <option>ELECTRICAL REPAIRS</option>
                  <option>CAPENTRY WORKS</option>
                  <option>MASON WORK</option>
                  <option>TILE AND MARBLE REPLACEMENT</option>
                  <option>TANK AND RESERVIOR CLEANING</option>
                  <option>REPAIR AND MAINTENANCE OF AC</option>
                  <option>AC DUCT CLEANING</option>
                  <option>PAINTING SERVICES</option>
                  <option>HOME CLEANING & OFFICE CLEANING</option>
                  <option>BUILD CLEANING</option>
                  <option>WINDOW CLEANING</option>
                  <option>SOFA & CARPET CLEANING</option>
                  <option>GREASE TRAP CLEANING & WASTES REMOVAL</option>
                  <option>CHIMNEYS, STOVES, OVENS & EXHAUSTS CLEANING</option>
                  <option>DEEP CLEANING</option>
                  <option>MOVE IN AND OUT CLEANING</option>
                  <option>POST CONSTRUCTION CLEANING</option>
                  <option>MANPOWER CLEANING</option>
                </select>
              </div>
              <div>
                <label data-aos="fade-down"> Location</label>
                <br />
                <input
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                />
              </div>
              <div>
                <label data-aos="fade-down">Description</label>
                <br />
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
              <div>
                <label data-aos="fade-down">Property Type</label>
                <br />
                <select
                  onChange={(e) => setProperty(e.target.value)}
                  value={property}
                >
                  <option>Select One</option>
                  <option>FLAT</option>
                  <option>VILLA</option>
                </select>
              </div>
              <div>
                <label data-aos="fade-down">How Frequent</label>
                <br />
                <input
                  onChange={(e) => setFrequent(e.target.value)}
                  value={Frequent}
                  type="number"
                />
              </div>
            </div>
            <div
              style={select == 1 ? { display: "block" } : { display: "none" }}
            >
              <p>Business quote</p>
              <div>
                <label data-aos="fade-down"> Name</label>
                <br />
                <input onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div>
                <label data-aos="fade-down"> Email</label>
                <br />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                />
              </div>
              <div>
                <label data-aos="fade-down"> Contact Number</label>
                <br />
                <input
                  onChange={(e) => setContact(e.target.value)}
                  value={contact}
                  type="number"
                />
              </div>
              <div>
                <label data-aos="fade-down">Services</label>
                <br />
                <select
                  onChange={(e) => setServices(e.target.value)}
                  value={services}
                >
                  <option>PLUMBING</option>
                  <option>ELECTRICAL REPAIRS</option>
                  <option>CAPENTRY WORKS</option>
                  <option>MASON WORK</option>
                  <option>TILE AND MARBLE REPLACEMENT</option>
                  <option>TANK AND RESERVIOR CLEANING</option>
                  <option>REPAIR AND MAINTENANCE OF AC</option>
                  <option>AC DUCT CLEANING</option>
                  <option>PAINTING SERVICES</option>
                  <option>HOME CLEANING & OFFICE CLEANING</option>
                  <option>BUILD CLEANING</option>
                  <option>WINDOW CLEANING</option>
                  <option>SOFA & CARPET CLEANING</option>
                  <option>GREASE TRAP CLEANING & WASTES REMOVAL</option>
                  <option>CHIMNEYS, STOVES, OVENS & EXHAUSTS CLEANING</option>
                  <option>DEEP CLEANING</option>
                  <option>MOVE IN AND OUT CLEANING</option>
                  <option>POST CONSTRUCTION CLEANING</option>
                  <option>MANPOWER CLEANING</option>
                </select>
              </div>
              <div>
                <label data-aos="fade-down"> Location</label>
                <br />
                <input
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                />
              </div>
              <div>
                <label data-aos="fade-down">Description</label>
                <br />
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
              <div>
                <label data-aos="fade-down">Business Type</label>
                <br />
                <select
                  onChange={(e) => setBusiness(e.target.value)}
                  value={business}
                >
                  <option>SCHOOL</option>
                  <option>RESTURANT</option>
                  <option>HOTEL</option>
                  <option>OFFICE</option>
                  <option>FACTORY</option>
                </select>
              </div>
            </div>

            <div>
              <button
                className="btn btn-primary"
                onClick={() => submitEmail(0)}
                style={send != 0 ? { opacity: 0.2 } : {}}
              >
                {send != 0 ? "Sending" : " GET A QUOTE"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
