import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { styled } from "@mui/system";

const StyledFooter = styled(Container)({
  borderTop: `1px solid`,
  borderColor: "lightgrey",
  marginTop: "5px",
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Scralfie/FullFill/">
        FullFill
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];
const Footer = () => {
  return (
    <StyledFooter maxWidth="md" component="footer">
      <Grid container mt={2} spacing={4} justify="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul style={{listStyle:'None', padding:0}}>
              {footer.description.map((item) => (
                <li key={item} style={{textDecoration:'None'}}>
                  <Link href="#" variant="subtitle1" color="textSecondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </StyledFooter>
  );
};

export default Footer;
