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
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

// React Rotating Text
import ReactRotatingText from 'react-rotating-text';

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import InfoCard from "examples/Cards/InfoCard/InfoCard";

// Authentication layout components
import InfoLayout from "layouts/employers/components/InfoLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/talent.jpg";
import employerIcon from "assets/images/illustrations/employers_icon.png"
import densoLogo from "assets/images/logos/denso_logo_grey.png"

function TalentInfo() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <InfoLayout
      title="America’s physical industries are back! Find high-paying jobs in Manufacturing, logistics, warehousing, construction"
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
      buttonLink="/talent/intake"
    >
      <Grid container justifyContent="center" pt={22}>
        <Grid xs={10} lg={10}>
          <SoftBox sx={{ textAlign: "center" }} pt={6}>
            <SoftTypography variant="h2" fontWeight="bold" color={"info"} textGradient>
              Find your next high paying job in&nbsp;
            </SoftTypography>
            <SoftTypography variant="h2" fontWeight="bold" color={"dark"} textGradient>
              <ReactRotatingText items={['Manufacturing', 'Logistics', 'Warehousing', 'Construction', 'Automotive']} />
            </SoftTypography>
            <SoftBox my={3}>
              <SoftTypography variant="body2" color="text">
                We understand the significance of individuals have rightfully earned the title of tradesperson, as they are the foundation of our nation.
                TradeUp strives to bridge the gap in skilled labor by uniting qualified tradespeople with employers who highly value their expertise.
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={6}>
              <SoftTypography variant="h2" fontWeight="bold" color={"dark"} textGradient>
                At companies like..
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={4} md={4} lg={4} xl={2}>
              <SoftBox component="img" src={densoLogo} width="100%" borderRadius="lg" />
            </Grid>
            <Grid item xs={4} md={4} lg={4} xl={2}>
              <SoftBox component="img" src={densoLogo} width="100%" borderRadius="lg" />
            </Grid>            
            <Grid item xs={4} md={4} lg={4} xl={2}>
              <SoftBox component="img" src={densoLogo} width="100%" borderRadius="lg" />
            </Grid>            
            <Grid item xs={4} md={4} lg={4} xl={2}>
              <SoftBox component="img" src={densoLogo} width="100%" borderRadius="lg" />
            </Grid>
            <Grid item xs={4} md={4} lg={4} xl={2}>
              <SoftBox component="img" src={densoLogo} width="100%" borderRadius="lg" />
            </Grid>
            <Grid item xs={4} md={4} lg={4} xl={2}>
              <SoftBox component="img" src={densoLogo} width="100%" borderRadius="lg" />
            </Grid>            
          </Grid>
        </Grid>
      </Grid>
    </InfoLayout>
  );
}

export default TalentInfo;
