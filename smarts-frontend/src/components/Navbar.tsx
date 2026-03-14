import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
  Box,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          SMARTS
        </Typography>

        <Box>
          <Button color="inherit" onClick={() => navigate("/products")}>
            Products
          </Button>
        </Box>

        <IconButton color="inherit" onClick={() => navigate("/cart")}>
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
