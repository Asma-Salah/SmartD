import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        {/* Left side: Shop name */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Phone Shop
        </Typography>

        {/* Right side: Navigation */}
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/products">
            Products
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
