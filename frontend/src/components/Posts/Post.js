import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function Post(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card>
      <CardContent>
          
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {new Intl.DateTimeFormat('en-EU', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            }).format(Date.parse(props.item.createdAt))}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.item.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {props.item.author.username}
        </Typography>
        <Typography variant="body2" component="p">
        {props.item.text}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Comments:  
        {props.item.comments.length}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Post;
