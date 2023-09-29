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

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/talent/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/talent.jpg";

function EmployersInfo() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <BasicLayout
      title="TradeUp early access."
      description=""
      image={curved6}
    >
      <Grid item xs={11} sm={9} md={5} lg={5} xl={6}>
        <Card>
          <SoftBox p={3} textAlign="left">
              <SoftTypography variant="body2" fontWeight="medium">
              We&apos;ll be reaching out to you shortly to extend an invitation to join our platform, 
              where you&apos;ll gain access to a curated selection of the best and brightest in the field. 
              </SoftTypography><br />
              <SoftTypography variant="body2">
              Get ready to streamline your hiring process and find the perfect fit for your team. 
              Elevate your workforce with us!
              </SoftTypography>
          </SoftBox>
          <SoftBox pt={0} pb={3} px={3}>
            <SoftBox component="form" role="form" textAlign="center">
              <SoftButton
                component={Link}
                to={"/employers/intake"}
                variant="gradient"
                color="info">
                Create my Employer Profile
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </Card>
      </Grid>
    </BasicLayout>
  );
}

export default EmployersInfo;
