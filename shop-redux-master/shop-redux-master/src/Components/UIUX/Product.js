import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/CartSlice";

const Product = ({ item }) => {
  const dispach = useDispatch();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.thumbnail}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {item.price}$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description.slice(0, 40) + "..."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => {
            dispach(
              addToCart({
                item,
                randomID: Math.floor(Math.random() * 1000000),
              })
            );
          }}
        >
          Add to Cart
        </Button>
        <Button variant="contained" color="error">
          <Link
            to={`/productdetails/${item.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            Product Details
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
