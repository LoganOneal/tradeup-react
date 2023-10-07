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
import routes from "routes";
import ReactRotatingText from 'react-rotating-text';

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";
import InfoCard from "../Cards/InfoCard/InfoCard";
import theme from "assets/theme";

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
        routes={routes}
        action1={{
          type: "external",
          route: "/talent/info",
          label: "Skilled Workers",
          color: "info",
        }}
        action2={{
          type: "external",
          route: "/employers/info",
          label: "Employers",
          color: "info",
        }}
        transparent
        relative
        center
      />

      <Grid
        container
        justifyContent="center"
        sx={{
          minHeight: "80vh",
          margin: 0,
        }}
      >
        <Grid item xs={11} sm={8} md={5} xl={4}>
          <SoftBox sx={{ mt: { md: top, xs: 6 } }}>
            {!header ? (
              <>
                <SoftBox mb={1}>
                  <SoftTypography variant="h1" fontWeight="bold" color={color} textGradient
                    sx={{
                      whiteSpace: "nowrap",
                      [theme.breakpoints.down("sm")]: {
                        whiteSpace: "normal",
                        variant: "h2"
                      },
                    }}>
                    A Skilled Industrial Workforce
                  </SoftTypography>
                  <SoftTypography variant="h1" fontWeight="bold" color={color} textGradient
                    sx={{
                      whiteSpace: "nowrap",
                      [theme.breakpoints.down("sm")]: {
                        whiteSpace: "normal",
                        variant: "h2"
                      },
                    }}>
                    Within Reach
                  </SoftTypography>
                </SoftBox>
                <SoftTypography variant="h3" py={2} fontWeight="regular" color="text" >
                  Bridging Talent and Jobs with <strong>AI</strong>
                </SoftTypography>
              </>
            ) : (
              header
            )}
            <SoftBox py={3}>{children}</SoftBox>
          </SoftBox>
        </Grid>
        <Grid item xs={12} md={5} lg={5} xl={6}>
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
              ml={-10}
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
            <SoftBox py={3} sx={{ textAlign: "center" }}>
              <SoftTypography variant="h2" fontWeight="bold" color={"info"} textGradient>
                Find your next high paying job in&nbsp;
              </SoftTypography>
              <SoftTypography variant="h2" fontWeight="bold" color={"dark"} textGradient>
                <ReactRotatingText items={['Manufacturing', 'Logistics', 'Warehousing', 'Construction', 'Automotive']} />
              </SoftTypography>
            </SoftBox>

            <SoftBox py={5}>
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={11} md={6} xl={4} justifyContent={"center"}>
                  <InfoCard
                    image={workerIcon}
                    title="Better for Job Seekers"
                    description="Let AI navigate your job search"
                  />
                </Grid>
                <Grid item xs={11} md={6} xl={4}>
                  <InfoCard
                    image={employerIcon}
                    title="Employers Love It"
                    description="Find, vet, and hire faster with AI"
                  />
                </Grid>
                <Grid item xs={11} md={6} xl={4}>
                  <InfoCard
                    image={betterTogetherIcon}
                    title="Skilled workers 🤝 Quality Employers"
                    description="Connecting reliable talent with skilled workers 10x faster."
                  />
                </Grid>
              </Grid>
            </SoftBox>


          </Grid>
        </Grid>

        <Grid item xs={4} sm={"auto"} md={5} xl={3}>


        </Grid>
      </Grid>
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
