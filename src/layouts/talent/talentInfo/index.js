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

function TalentInfo() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <BasicLayout
      title="Employers Seeking Qualified Canidates!"
      description="Create your account for free."
      image={curved6}
    >
      <Card>
        <SoftBox p={3} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Create your account for free.
          </SoftTypography>
        </SoftBox>  
        <SoftBox pt={0} pb={3} px={3}>
          <SoftBox component="form" role="form" textAlign="center">
          <SoftButton 
              component={Link}
              to={"/talent/info"}
              variant="gradient" 
              color="info">
              Create my Profile
            </SoftButton>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default TalentInfo;
