import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../Store/CartSlice";

const Cartt = () => {
  const cart = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();

  const total = cart.product.reduce(
    (accumulator, currentValue) => accumulator + currentValue.item.price,
    0
  );

  return (
    <Container maxWidth="lg">
      {!cart.product.length ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">Your Cart is Empty</Typography>
          <Link to={"/"} style={{ textDecoration: "none", color: "#1976d2" }}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <Typography variant="h4" align="center" gutterBottom>
            Your Shopping Cart
          </Typography>
          <Grid container spacing={2}>
            {cart.product.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.randomID}>
                <Card elevation={3}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.item.thumbnail}
                    alt={item.item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {item.item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ${item.item.price.toFixed(2)}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="error"
                      fullWidth
                      onClick={() => {
                        dispatch(removeFromCart({ id: item.randomID }));
                      }}
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Paper
            elevation={3}
            style={{
              padding: "20px",
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={"checkout"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Proceed to Checkout
            </Button>
          </Paper>
        </>
      )}
    </Container>
  );
};

export default Cartt;
