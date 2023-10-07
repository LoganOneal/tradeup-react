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

// inifinite logo slider
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

// React Rotating Text
import ReactRotatingText from 'react-rotating-text';

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import InfoCard from "examples/Cards/InfoCard/InfoCard";

// Authentication layout components
import InfoLayout from "layouts/talent/components/InfoLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/talent.jpg";
import employerIcon from "assets/images/illustrations/employers_icon.png"
import densoLogo from "assets/images/logos/denso_logo_grey.png"

import boeingLogo from "assets/images/logos/companies/boeing_logo.png"
import fordLogo from "assets/images/logos/companies/ford_logo.png"
import gmLogo from "assets/images/logos/companies/gm_logo.png"
import hondaLogo from "assets/images/logos/companies/honda_logo.png"
import nissanLogo from "assets/images/logos/companies/nissan_logo.png"
import testlaLogo from "assets/images/logos/companies/tesla_logo.png"
import toyotaLogo from "assets/images/logos/companies/toyota_logo.png"
import { VerticalAlignBottom } from "@mui/icons-material";


function TalentInfo() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  const companyLogos = [boeingLogo, fordLogo, gmLogo, hondaLogo, nissanLogo, testlaLogo, toyotaLogo];

  return (
    <InfoLayout
      title=""
      description="Use AI to get a resume, job matches, career advice"
      image={curved6}
      buttonLink="/talent/intake"
    >
      <Grid container justifyContent="center" pt={10}>
        <Grid xs={10} lg={10}>
          <SoftBox  py={1} sx={{ display: "flex", justifyContent: "center", position: "absolute", left: 0, right: 0, backgroundColor: "#FFFFFF" }}>
            <Splide
              options={{
                background: "transparent",
                type: "loop",
                drag: "free",
                gap: "10px",
                arrows: false,
                pagination: false,
                perPage: 8,
                autoScroll: {
                  pauseOnHover: false,
                  pauseOnFocus: false,
                  rewind: false,
                  speed: 0.75,
                }
              }}
              extensions={{ AutoScroll }}
            >
              {companyLogos.map((logo, index) => (
                <SplideSlide key={index}>
                  <SoftBox component="img" px={".2rem"} src={logo} maxHeight="3rem" maxWidth="100%"/>
                </SplideSlide>
              ))}
            </Splide>
          </SoftBox>
        </Grid>
      </Grid>
    </InfoLayout>
  );
}

export default TalentInfo;
