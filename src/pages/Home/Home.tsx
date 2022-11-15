import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Typography
        sx={{ textTransform: "uppercase", color: "white", fontWeight: "bold" }}
        variant="h4"
      >
        lego minifigs mystery box
      </Typography>
      <Link to="/shipment" style={{ textDecoration: "none" }}>
        <Button
          sx={{
            backgroundColor: "#018dec",
            borderRadius: "1rem",
            width: "10rem",
            color: "white",
            marginTop: "1rem",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          Let's go
        </Button>
      </Link>
    </Box>
  );
};

export default Home;
