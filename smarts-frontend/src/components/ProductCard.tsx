import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions
} from "@mui/material";
import type { Product } from "../types/Product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
      />

      <CardContent>
        <Typography variant="h6">
          {product.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          KES {product.price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained">
          View
        </Button>
      </CardActions>
    </Card>
  );
}
