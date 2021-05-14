import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import axios from "axios";
import Swal from 'sweetalert2'
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "grid",
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    uptodate: {
      url: props.product.url,
      name: props.product.name,
      stock: props.product.stock,
      description: props.product.description,
      prices: props.product.prices,
    },
    id: 0,
  });
  const getData = (data) => {
    setState({ uptodate: data }), setState({ id: data._id });
  };
  const handleSubmit = () => {
    axios
      .put(`/api/NMYShop/update/${props.product._id}`, state.uptodate)
      .then((result) => {
        Swal.fire({
          position: 'middle',
          icon: 'success',
          title: 'Your updates has been saved',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {location.reload()})
      });
  };
  const handleChange = (e) => {

  
    switch (e.target.name) {
        case "url":
          setState({
            uptodate: {
              url: e.target.value,
              name: state.uptodate.name,
              stock: state.uptodate.stock,
              description: state.uptodate.description,
              prices: state.uptodate.prices
            },
          });
          break;
        case "name":
          setState({
            uptodate: {
              url: state.uptodate.url,
              name: e.target.value,
              stock: state.uptodate.stock,
              description: state.uptodate.description,
              prices: state.uptodate.prices
            },
          });
          break;
        case "stock":
          setState({
            uptodate: {
              url: state.uptodate.url,
              name: state.uptodate.name,
              stock: e.target.value,
              description: state.uptodate.description,
              prices: state.uptodate.prices
            },
          });
          break;
        case "description":
          setState({
            uptodate: {
              url: state.uptodate.url,
              name: state.uptodate.name,
              stock: state.uptodate.stock,
              description: e.target.value,
              prices: state.uptodate.prices
            },
          });
          break;
          case "prices":
              setState({
                uptodate: {
                  url: state.uptodate.url,
                  name: state.uptodate.name,
                  stock: state.uptodate.stock,
                  description: state.uptodate.description,
                  prices: e.target.value
                },
              });
              break;
      }
      console.log(state.uptodate)
  };
  return (
    <div className="update-container">
      <form className={classes.root} noValidate autoComplete="off">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={state.uptodate.url}
              id="prodImage"
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Card>
        <TextField
          id="filled-basic"
          label="ImageUrl"
          variant="filled"
          name="url"
          value={state.uptodate.url}
          onChange={(e) => handleChange(e)}
          autoComplete="imageUrl"
        />
        <TextField
          id="filled-basic"
          label="Title"
          variant="filled"
          name="name"
          value={state.uptodate.name}
          onChange={(e) => handleChange(e)}
          autoComplete="name"
        />
        <TextField
          id="filled-basic"
          label="Stock"
          variant="filled"
          name="view"
          value={state.uptodate.stock}
          onChange={(e) => handleChange(e)}
          autoComplete="stock"
        />
        <TextField
          id="filled-basic"
          label="Prise"
          variant="filled"
          name="prices"
          value={state.uptodate.prices}
          onChange={(e) => handleChange(e)}
          autoComplete="prices"
        />
        <TextField
          id="filled-basic"
          label="Description"
          variant="filled"
          name="description"
          value={state.uptodate.description}
          onChange={(e) => handleChange(e)}
          autoComplete="description"
        />
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          Update
        </Button>
      </form>
    </div>
  );
}
