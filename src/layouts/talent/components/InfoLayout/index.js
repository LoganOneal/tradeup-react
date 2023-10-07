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
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import useMediaQuery from '@mui/material/useMediaQuery';

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";
import ReactRotatingText from 'react-rotating-text';

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

function InfoLayout({ title, description, buttonLink, image, children }) {

    return (
        <PageLayout>
            <DefaultNavbar
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
            <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
                <Grid item xs={10} lg={6} xl={8}>
                    <SoftBox mt={2} mb={3}>
                        <SoftBox sx={{ textAlign: "center" }}>
                            <SoftTypography variant="h2" fontWeight="bold" color={"info"} textGradient>
                                Find your next high paying job in&nbsp;
                            </SoftTypography>
                            <SoftTypography variant="h2" fontWeight="bold" color={"dark"} textGradient>
                                <ReactRotatingText items={['Manufacturing', 'Logistics', 'Warehousing', 'Construction', 'Automotive']} />
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox px={1} py={6} width="calc(100% - 2rem)" mx="auto">
                            <Grid item xs={11} sm={4} md={6} lg={8} xl={10}>
                                {children}
                            </Grid>
                        </SoftBox>
                        <SoftBox mb={2} mt={25}>
                            <SoftButton
                                component={Link}
                                to={"https://airtable.com/appF8iniLjyjrpRcM/shrVOxCtgDaUHulVV"}
                                variant="gradient"
                                color="info"
                                size="large">
                                Join our Waitlist!
                            </SoftButton>
                        </SoftBox>
                        <SoftTypography variant="h4" color="grey" fontWeight="regular" mt={5}>
                            {description}
                        </SoftTypography>
                    </SoftBox>
                </Grid>
            </Grid>
        </PageLayout>
    );
}

// Setting default values for the props of BasicLayout
InfoLayout.defaultProps = {
    title: "",
    description: "",
};

// Typechecking props for the BasicLayout
InfoLayout.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default InfoLayout;
