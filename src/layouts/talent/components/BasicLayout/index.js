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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "examples/Footer";

function BasicLayout({ title, description, image, children }) {
  return (
    <PageLayout>
<DefaultNavbar
        action1={{
          type: "internet",
          route: "/talent/info",
          label: "Tradesworkers",
          color: "dark",
        }}
        action2={{
          type: "external",
          route: "/employers/info",
          label: "Emlpoyers",
          color: "secondary",
        }}
      />
      <SoftBox
        width="100%"
        minHeight="85vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={10} lg={8}>
            <SoftBox mt={16} mb={1}>
              <SoftTypography variant="h2" color="white" fontWeight="bold">
                {title}
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={2}>
              <SoftTypography variant="body2" color="white" fontWeight="regular">
                {description}
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={26} mt={4} px={1} width="calc(100% - 2rem)" mx="auto">
              <Grid container spacing={1} justifyContent="center">
                {children}
              </Grid>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </PageLayout>
  );
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
