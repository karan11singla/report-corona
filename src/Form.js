import React, { Component }  from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import DropdownTreeSelect from "react-dropdown-tree-select";
import "./index.css";
import data from "./data.json";


const onChange = (currentNode, selectedNodes) => {
  console.log("path::", currentNode.path);
};


export default function Form() {


  return (
    <div className="App">
    <p>Form</p>
    <div>
    <form >
    <label>First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label>Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <label>Email</label>
    <input type="email" id="email" name="email" placeholder="Your email" />

    <p>Enter country</p>
    <label>Country</label>
    <DropdownTreeSelect data={data} onChange={onChange} />
    
 
    <label>Address</label>
    <input type="address" id="address" name="address" placeholder="Your address" />


    <label>Symptoms</label>
    <textarea id="symptoms" name="symptoms" placeholder="Comments.."></textarea>

    <label>Corona(Yes?)</label>
    <input type="radio" id="coronaflag" name="Coronaflag"  />


    <input type="submit" value="Submit" />
    </form>
    </div>
    </div>
  );
}

