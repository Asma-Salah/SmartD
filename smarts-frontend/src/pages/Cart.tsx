import { useCart } from "../context/useCart";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

export default function CartPage() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {cartItems.map((item) => (
        <Card key={item.product.id} sx={{ mb: 2 }}>
          <Grid container>
            <Grid size={{ xs: 3 }}>
              <CardMedia
                component="img"
                image={item.product.image}
                sx={{ height: 100 }}
              />
            </Grid>

            <Grid size={{ xs: 9 }}>
              <CardContent>
                <Typography variant="h6">{item.product.name}</Typography>

                <Typography>Quantity: {item.quantity}</Typography>

                <Typography color="primary">
                  KES {item.product.price * item.quantity}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      ))}

      <Typography variant="h5" align="right">
        Total: KES {totalPrice}
      </Typography>
    </Container>
  );
}
