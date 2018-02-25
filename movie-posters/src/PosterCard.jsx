import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
// import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

const styles = {
  card: {
    maxWidth: 500
    // maxHeight: 750
  },
  media: {
    height: 750
  }
};

const PosterCard = ({ classes, posterUrl, movieDetails }) => {
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={posterUrl}
          title={movieDetails.title}
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {movieDetails.title}
          </Typography>
          <Typography component="p">{movieDetails.overview}</Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button> */}
        </CardActions>
      </Card>
    </div>
  );
};

PosterCard.propTypes = {
  classes: PropTypes.object.isRequired,
  posterUrl: PropTypes.string.isRequired,
  movieDetails: PropTypes.object.isRequired
};

export default withStyles(styles)(PosterCard);
