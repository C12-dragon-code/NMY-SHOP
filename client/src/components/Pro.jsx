
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import data from '../../../data.json'
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    root: {
      flexGrow: 1,
    },
    // menuButton: {
    //   marginRight: theme.spacing(2),
    // },
    title: {
      flexGrow: 1,
    }
  });
export default function Pro (props){
  const classes = useStyles();

    return (
        <div className="card">
          {data.map((product, i) => {
            return (
              <div key = {i}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia className={classes.media} image={product.imageUrl} id="prodImage" title="Contemplative Reptile" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {product.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {product.prices}$
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick ={()=>console.log("clicked")}>
                    more details
                  </Button>
             
                </CardActions>
              </Card></div>
            );
          })}
     
                  
        </div>
      );
    }