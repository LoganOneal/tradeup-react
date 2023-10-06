/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import axios from 'axios';
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/talent/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";
import Airtable from 'airtable';

// Images
import curved6 from "assets/images/talent.jpg";

function EmployersIntake() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    company: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)
    if (formData.firstName === "" || formData.lastName === "" || formData.phoneNumber === "" || formData.email === "" || formData.company === "") {
      alert("Please fill in all fields.");
    } else {
      fetch('/api/submitEmployerIntakeForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formData })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
  };

  return (
    <BasicLayout
      title="Tell us about yourself"
      description="We will use this information to match you with ideal job canidates"
      image={curved6}
    >
      <Grid item xs={10} sm={10} md={6} lg={10} xl={8}>
        <Card sx={{ width: "100%" }}>
        <iframe class="airtable-embed" src="https://airtable.com/embed/appF8iniLjyjrpRcM/shrk4ZcHL6xHy3x4A?backgroundColor=white" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>
        </Card>
      </Grid>
    </BasicLayout>
  );
}

export default EmployersIntake;
