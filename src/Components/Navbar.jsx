import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Home, Info, ContactMail } from "@mui/icons-material";

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/" startIcon={<Home />}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" startIcon={<Info />}>
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact" startIcon={<ContactMail />}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
