import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  TextField,
  Box,
  Stack,
} from "@mui/material";
import type { Product } from "../types/Product";
import { useState } from "react";
import { useCart } from "../context/useCart";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <Card sx={{ maxWidth: 300, p: 2 }}>
      <CardMedia
        sx={{ p: "2" }}
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
      />

      <CardContent>
        <Typography variant="h6">{product.name}</Typography>

        <Typography variant="body2" color="text.secondary">
          KES {product.price}
        </Typography>
      </CardContent>

      <CardActions>
        <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <TextField
              label="Qty"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              inputProps={{ min: 1 }}
              size="small"
              sx={{ width: 70 }}
            />
            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={handleAddToCart}
              sx={{ flex: 1 }}
            >
              Add to Cart
            </Button>
          </Box>
        </Stack>
      </CardActions>
    </Card>
  );
}
