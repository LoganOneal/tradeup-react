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
import ivancik from "assets/images/ivancik.jpg";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";
import InfoCard from "../Cards/InfoCard/InfoCard";

// Authentication layout components
import Footer from "examples/Footer";
import SoftTypographyRoot from "../../../../components/SoftTypography/SoftTypographyRoot";

// Images 
import betterTogetherIcon from "assets/images/illustrations/better_together_icon.png"
import workerIcon from "assets/images/illustrations/worker_icon.png"
import employerIcon from "assets/images/illustrations/employers_icon.png"

function LandingLayout({ color, header, title, description, image, top, children }) {
  return (
    <PageLayout background="white">
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
      <Grid
        container
        justifyContent="center"
        sx={{
          minHeight: "75vh",
          margin: 0,
        }}
      >
        <Grid item xs={11} sm={8} md={5} xl={3}>
          <SoftBox mt={top}>
            <SoftBox pt={2} >
              {!header ? (
                <>
                  <SoftBox mb={1}>
                    <SoftTypography variant="h1" fontWeight="bold" color={color} textGradient>
                      {title}
                    </SoftTypography>
                  </SoftBox>
                  <SoftTypography variant="body1" fontWeight="regular" color="text">
                    {description}
                  </SoftTypography>
                </>
              ) : (
                header
              )}
            </SoftBox>
            <SoftBox py={3}>{children}</SoftBox>
          </SoftBox>
        </Grid>
        <Grid item xs={12} md={5}>
          <SoftBox
            height="100%"
            display={{ xs: "none", md: "block" }}
            position="relative"
            right={{ md: "-12rem", xl: "-16rem" }}
            mr={-16}
            sx={{
              transform: "skewX(-10deg)",
              overflow: "hidden",
              borderBottomLeftRadius: ({ borders: { borderRadius } }) => borderRadius.lg,
            }}
          >
            <SoftBox
              ml={-8}
              height="100%"
              sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                transform: "skewX(10deg)",
              }}
            />
          </SoftBox>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="left"
        sx={{
          minHeight: "75vh",
          margin: 0,
          borderColor: "info",
        }}
      >

        <Grid container justifyContent="center" py={8}>
          <Grid xs={10} lg={8}>
            <SoftBox>
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={6} xl={4} justifyContent={"center"}>
                  <InfoCard
                    image={workerIcon}
                    title="Better for Job Seekers"
                    description="Leverage our technological services with your skills and get hired quickly."
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <InfoCard
                    image={employerIcon}
                    title="Better for Employers"
                    description="Find the best talent for your business faster and more effeciently."
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <InfoCard
                    image={betterTogetherIcon}
                    title="Skilled workers, Meet High Quality Employers"
                    description="Our technology will match you with the best employers for your skills."
                  />
                </Grid>
              </Grid>
            </SoftBox>
            <SoftBox sx={{ textAlign: "center" }} pt={8}>
              <SoftTypography variant="h2" fontWeight="bold" color={color} textGradient>
              More than helping you find your dream job… we help you manage your career.
              </SoftTypography>
              <SoftBox mt={3}>
                <SoftTypography variant="body2" color="text">
                We understand the significance of individuals have rightfully earned the title of tradesperson, as they are the foundation of our nation. 
                TradeUp strives to bridge the gap in skilled labor by uniting qualified tradespeople with employers who highly value their expertise.
                </SoftTypography>
              </SoftBox>
            </SoftBox>

          </Grid>
        </Grid>

        <Grid item xs={4} sm={"auto"} md={5} xl={3}>


        </Grid>
      </Grid>

      <Footer />
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
LandingLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  color: "info",
  top: 20,
};

// Typechecking props for the LandingLayout
LandingLayout.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  top: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default LandingLayout;
