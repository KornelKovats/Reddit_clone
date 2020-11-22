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
function Post() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card>
      <div className="postMain">
        <div className="firstRow">
          <div className="titleContainer">
            <h2>ELSO</h2>
          </div>
          <div className="hourContainer">
            <h2>HOUR</h2>
          </div>
        </div>

        <div className="secondRow">
          <h2>TEXT</h2>
        </div>
      </div>
    </Card>
  );
}

export default Post;
