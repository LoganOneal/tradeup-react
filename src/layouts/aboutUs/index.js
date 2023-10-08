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
import InfoCard from "examples/Cards/InfoCard/InfoCard";
import InfoLayout from "examples/LayoutContainers/InfoLayout";

// Authentication layout components
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import banner from "assets/images/banners/aboutus_banner.jpeg";
import reduceCostIcon from "assets/images/illustrations/reduce_cost.png"
import welderIcon from "assets/images/illustrations/welder.png"
import skilledTalentIcon from "assets/images/illustrations/skilled_talent.png"

function EmployersInfo() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <InfoLayout
      title=""
      description=""
      image={banner}
      buttonLink="/employers/intake"
    >
      <Grid container spacing={4} justifyContent="center" pt={26}>
        <Grid xs={10} lg={10} pb={3}>
          <SoftBox sx={{ textAlign: "left" }} pt={8}>
            <SoftTypography variant="h3" fontWeight="bold" >
              <p>
                Empowering the Backbone of America: The Laborup Journey
              </p><br />
            </SoftTypography>
            <SoftTypography variant="body" fontWeight="regular" >
              <p>
                As co-founders of Laborup, our story is deeply rooted in our personal experiences, our unwavering commitment to the industrial sector, and a humble upbringing that began in Tennessee.
              </p><br />
              <p>
                Our journey began navigating the challenges of finding jobs in sectors vital to our great nation, sectors like manufacturing, logistics, and construction. We, as pioneers of Laborup, were no strangers to the factory floors, where dedicated machinists, mechanics, and countless others toiled tirelessly. Witnessing their unwavering commitment, we were inspired to make a difference.
              </p><br />
              <p>We recognized the significance of these jobs, the backbone of our nation's strength, and an essential part of our economic future. With a resounding push to reshore American manufacturing, the call to action became even more pressing.
              </p><br />
              <p>
                Laborup is more than just a company—it's a calling. We're not merely connecting people with jobs; <strong>we're transforming the very process, championing the cause of both workers and the industries they serve.</strong>
              </p>
              <p><br />
                Our story aligns perfectly with the monumental shift of our times—a shift where America reclaims its self-reliance, departing from dependency on distant shores. Industries like batteries, chips, specialty parts, automotive, defense, and agriculture are poised to shape the future.
              </p>
              <p><br />
                Join us as we empower workers, fortify industries, and shape the future of employment in the dynamic landscape of American manufacturing, together.
              </p>
            </SoftTypography>
          </SoftBox>
        </Grid>


      </Grid >
    </InfoLayout >
  );
}

export default EmployersInfo;
