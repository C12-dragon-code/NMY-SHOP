import React , { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Prodetail(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    email:localStorage.getItem("user") ,
  url:props.product.url,
  name:props.product.name ,
  view:props.product.view,
  prices: props.product.prices
  });
const handleClick =()=>{   
    axios.post(`/api/NMYShop/order/${props.product._id}`,state).then((res)=>{
      alert ("your order is passed")
    }).catch((err)=>{console.log(err);})   
}
  return (
    <div className="detailscard">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.product.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         {props.product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          {props.product.prices}
        </Button>
        <Button size="small" color="primary" onClick={handleClick}>
          Order now
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}