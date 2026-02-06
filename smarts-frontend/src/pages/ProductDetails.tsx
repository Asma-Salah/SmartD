import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <Typography sx={{ mt: 4 }}>Product not found</Typography>;
  }

  return (
    <Container>
      <Card>
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h5" color="primary" gutterBottom>
                KES {product.price}
              </Typography>
              <Typography variant="body1" gutterBottom>
                High-quality gadget perfect for daily use.
              </Typography>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
