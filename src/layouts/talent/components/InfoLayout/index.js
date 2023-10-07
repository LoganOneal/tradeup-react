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

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

function InfoLayout({ title, description, buttonLink, image, children }) {
    const isMobile = useMediaQuery("(max-width: 600px)");

    const handleButtonClick = () => {
        if (isMobile) {
            window.location.href = "https://airtable.com/embed/appF8iniLjyjrpRcM/shrk4ZcHL6xHy3x4A?backgroundColor=white";
        }
    };

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
            <SoftBox
                width="calc(100% - 2rem)"
                minHeight="50vh"
                borderRadius="lg"
                mx={2}
                my={2}
                pt={6}
                pb={28}
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
                    <Grid item xs={10} lg={6} xl={8}>
                        <SoftBox mt={6} mb={3}>
                            <SoftTypography variant="h1" color="white" fontWeight="bold">
                                {title}                            </SoftTypography>
                            <SoftTypography variant="h4" color="white" fontWeight="regular" mt={3}>
                                {description}
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={2} py={3}>
                            <SoftButton
                                component={Link}
                                to={buttonLink}
                                variant="gradient"
                                color="info"
                                size="large"
                                onClick={handleButtonClick}>
                                Join our Waitlist!
                            </SoftButton>
                        </SoftBox>
                    </Grid>
                </Grid>
            </SoftBox>
            <SoftBox mt={{ xs: -26, lg: -24 }} px={1} width="calc(100% - 2rem)" mx="auto">
                <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={11} sm={4} md={6} lg={8} xl={10}>
                        {children}
                    </Grid>
                </Grid>
            </SoftBox>
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
