// import { Grid } from "@mui/material";
// import ProductCard from "../components/ProductCard";
// import type { Product } from "../types/Product";

// const dummyProducts: Product[] = [
//   {
//     id: 1,
//     name: "Samsung Galaxy A14",
//     price: 18000,
//     image: "https://via.placeholder.com/300x180",
//     category: "Phones"
//   },
//   {
//     id: 2,
//     name: "Wireless Earphones",
//     price: 2500,
//     image: "https://via.placeholder.com/300x180",
//     category: "Accessories"
//   },
//   {
//     id: 3,
//     name: "Fast Charger",
//     price: 1500,
//     image: "https://via.placeholder.com/300x180",
//     category: "Accessories"
//   }
// ];

// export default function Products() {
//   return (
//     <Grid container spacing={3}>
//       {dummyProducts.map((product) => (
//         <Grid 
//         item 
//         xs={12} 
//         sm={6} 
//         md={4} 
//         key={product.id}
//         component="div"
//         >
//           <ProductCard product={product} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// }
import { Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/Product";

const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Samsung Galaxy A14",
    price: 18000,
    image: "https://via.placeholder.com/300x180",
    category: "Phones",
  },
  {
    id: 2,
    name: "Wireless Earphones",
    price: 2500,
    image: "https://via.placeholder.com/300x180",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Fast Charger",
    price: 1500,
    image: "https://via.placeholder.com/300x180",
    category: "Accessories",
  },
];

export default function Products() {
  return (
    <Grid container spacing={3}>
      {dummyProducts.map((product) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={product.id}
          component="div"
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
