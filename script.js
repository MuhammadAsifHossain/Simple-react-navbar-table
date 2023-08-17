//importing react
import React from "react";
import ReactDOM from "react-dom/client";

// creating element using createElement
/*
const homeli = React.createElement("li",{ id: "home", 
style: { color: "white", width: "25%" } },"Home");
const navul = React.createElement("ul",{
    style: {listStyleType: "none",width: "100%",backgroundColor: "black",display: "flex",},
  },[homeli, aboutli, serviceli, contactusli]);
*/

//jsx
//creating navbar
const Navbar = () => {
  return (
    <nav id="nav" key="nav">
      <ul
        id="nav_ul"
        key="nav_ul"
        style={{
          backgroundColor: "black",
          display: "flex",
          listStyleType: "none",
          width: "100%",
        }}
      >
        <li id="home" key="home" style={{ color: "white", width: "25%" }}>
          Home
        </li>
        <li id="about" key="about" style={{ color: "white", width: "25%" }}>
          About
        </li>
        <li
          id="services"
          key="services"
          style={{ color: "white", width: "25%" }}
        >
          Services
        </li>
        <li
          id="contactus"
          key="contactus"
          style={{ color: "white", width: "25%" }}
        >
          Contact Us
        </li>
      </ul>
    </nav>
  );
};

// creating table
const Table = () => {
  return (
    <table
      id="table"
      key="table"
      style={{ align: "center", height: "70%", width: "70%" }}
    >
      <thead
        id="thead"
        key="thead"
        style={{
          backgroundColor: "aqua",
          textAlign: "left",
          fontSize: "30px",
        }}
      >
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody
        id="tbody"
        key="tbody"
        style={{
          backgroundColor: "yellow",
          textAlign: "center",
          fontSize: "25px",
        }}
      >
        <tr>
          <td>Hulk</td>
          <td>20</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>WonderWoman</td>
          <td>20</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>IronMan</td>
          <td>25</td>
          <td>Male</td>
        </tr>
      </tbody>
    </table>
  );
};
const Container = () => {
  return (
    <div>
      <Navbar />
      <Table />
    </div>
  );
};
//creating a root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
