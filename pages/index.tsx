import Head from "next/head";
import Image from "next/image";

import {
  Accordion,
  Button,
  Card,
  Container,
  Grid,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FAQ from "../components/faq";
import { FaxTwoTone } from "@mui/icons-material";

export default function Home() {
  return (
    <Container sx={{ p: { xs: 0, sm: "24px" } }}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Coerver Colorado - Colorado's premier soccer training academy"
        />
        <link rel="icon" href="/coerver.png" />
      </Head>

      <Container sx={{ textAlign: "center" }}>
        <Image
          src="/coerver.svg"
          alt="Coerver Colorado"
          width={300}
          height={200}
        />
        <Typography
          variant="h1"
          sx={{
            fontSize: "4rem",
            mt: "12px",
            fontWeight: 800,
            fontFamily: "Sans",
          }}
        >
          Welcome to Coerver Colorado
        </Typography>

        <Typography variant="h2" sx={{ fontSize: "1.5rem", mt: "24px" }}>
          Colorado's Premier Soccer Training Academy
        </Typography>

        <Grid
          container
          sx={{ mt: "24px", display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={6} sx={{ p: 2, height: "100%" }}>
            <Card sx={{ p: "24px", height: "100%" }}>
              <Typography variant="h3" sx={{ fontSize: "1.5rem" }}>
                Coerver Colorado
              </Typography>
              <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                coervercolorado@gmail.com
              </Typography>
              <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                720-255-4911
              </Typography>
              <a href="mailto:coervercolorado@gmail.com">
                <Button
                  color="info"
                  variant="contained"
                  sx={{ mt: "24px", width: "100%" }}
                >
                  Contact us
                </Button>
              </a>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ p: 2, height: "100%" }}>
            <Card sx={{ p: "24px", height: "100%" }}>
              <Typography variant="h3" sx={{ fontSize: "1.5rem" }}>
                Clutch Portal
              </Typography>
              <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                Your player profiles
              </Typography>
              <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                Registration
              </Typography>
              <a
                href="https://clutch.coervercolorado.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  color="success"
                  variant="contained"
                  sx={{ mt: "24px", width: "100%" }}
                >
                  Login
                </Button>
              </a>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h4" sx={{ mb: "24px", mt: "96px" }}>
          Frequently Asked Questions
        </Typography>
        <FAQ />
        <Box sx={{ mt: "96px" }}>
          <Typography variant="h4" sx={{ mb: "24px" }}>
            Coerver Colorado
          </Typography>
        </Box>
      </Container>
    </Container>
  );
}
