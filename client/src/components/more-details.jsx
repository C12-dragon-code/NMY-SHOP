
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
export default function moreDetails (props){
  const classes = useStyles();

    return (
        <div className="card">
              <div>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia className={classes.media} image={props.product.url} id="prodImage" title="Contemplative Reptile" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {props.product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {props.product.description}
                    </Typography>  
                    <Typography variant="body2" color="textSecondary" component="p">
                      {props.product.prices}
                    </Typography>           
                  </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
              </Card></div>
            );
         
     
                  
        </div>
      );
    }
