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

// React Rotating Text
import ReactRotatingText from 'react-rotating-text';

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import InfoCard from "../components/InfoCard/InfoCard";

// Authentication layout components
import InfoLayout from "layouts/employers/components/InfoLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/talent.jpg";
import reduceCostIcon from "assets/images/illustrations/reduce_cost.png"
import welderIcon from "assets/images/illustrations/welder.png"
import skilledTalentIcon from "assets/images/illustrations/skilled_talent.jpg"

function EmployersInfo() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <InfoLayout
      title="Find skilled talent faster. Use AI to find, vet, and seek out talent."
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
      buttonLink="/employers/intake"
    >


      <Grid container spacing={4} justifyContent="center" pt={26}>
        <Grid xs={10} lg={10} pb={3}>
          <SoftBox sx={{ textAlign: "center" }} pt={8}>
            <SoftTypography variant="h2" fontWeight="bold" color={"info"} textGradient>
              Hire skilled talent in&nbsp;
            </SoftTypography>
            <SoftTypography variant="h2" fontWeight="bold" color={"dark"} textGradient>
              <ReactRotatingText items={['Manufacturing', 'Logistics', 'Warehousing', 'Construction', 'Automotive']} />
            </SoftTypography>
          </SoftBox>
        </Grid>

        <Grid item xs={12} md={6} lg={4} xl={4} justifyContent={"center"}>
          <InfoCard
            image={reduceCostIcon}
            title="Find talent at 50% of the cost"
            description=""
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={4} justifyContent={"center"}>
          <InfoCard
            image={welderIcon}
            title="Match with reliable and job-specific talent all the time"
            description=""
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={4} justifyContent={"center"}>
          <InfoCard
            image={skilledTalentIcon}
            title="Hire skilled talent in 10 days"
            description=""
          />
        </Grid>
      </Grid>
    </InfoLayout>
  );
}

export default EmployersInfo;
