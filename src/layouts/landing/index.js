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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// Authentication layout components
import LandingLayout from "layouts/landing/components/LandingLayout";

// Imagess
import curved9 from "assets/images/landing_workers.jpg";

function Landing() {
  return (
    <LandingLayout
      title="A Skilled Workforce Within Reach"
      description="We connect businesses with dependable, hard-working skilled tradespeople and laborers — when and where you need them."
      image={curved9}
    >
        <SoftBox display="flex" mb={2}>
            <SoftButton 
              variant="gradient" 
              color="info">
              Looking for Work?
            </SoftButton>
            <SoftBox px={1}>
              <SoftButton
                component={Link}
                variant="outlined"
                color="info">
                Need Workers?
              </SoftButton>
          </SoftBox> 
        </SoftBox>
    </LandingLayout>
  );
}

export default Landing;
