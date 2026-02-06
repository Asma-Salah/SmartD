
import { Grid , Stack,Button, Box,} from "@mui/material";
import ProductCard from "../components/ProductCard";



import { useState } from "react";
import { products } from "../data/products";





export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<
  "All" | "Phones" | "Accessories"
>("All");

const filteredProducts =
  selectedCategory === "All"
    ? products
    : products.filter(
        (product) => product.category === selectedCategory
      );





  return (
<Box>
  <Stack direction="row" spacing={2} mb={3}>
    <Button
      variant={selectedCategory === "All" ? "contained" : "outlined"}
      onClick={() => setSelectedCategory("All")}
    >
      All
    </Button>

    <Button
      variant={selectedCategory === "Phones" ? "contained" : "outlined"}
      onClick={() => setSelectedCategory("Phones")}
    >
      Phones
    </Button>

    <Button
      variant={selectedCategory === "Accessories" ? "contained" : "outlined"}
      onClick={() => setSelectedCategory("Accessories")}
    >
      Accessories
    </Button>
  </Stack>

    <Grid container spacing={2}>
      {filteredProducts.map((product) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }}   
        display="flex"
          justifyContent="center" alignItems="center"
          key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
    </Box>
  );
  
}
