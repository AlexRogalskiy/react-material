import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

const FlatButtons = props => {
  const { classes } = props;
  return (
    <div>

      <div>
        <Button variant="outlined" className={classes.button}>
          Default
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
          Primary
        </Button>
        <Button variant="outlined" color="secondary" className={classes.button}>
          Secondary
        </Button>
        <Button variant="outlined" disabled className={classes.button}>
          Disabled
        </Button>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          className={classes.button}
        >
          Link
        </Button>
        <input
          accept="image/*"
          className={classes.input}
          id="outlined-button-file"
          multiple
          type="file"
        />
        <label htmlFor="outlined-button-file">
          <Button
            variant="outlined"
            component="span"
            className={classes.button}
          >
            Upload
          </Button>
        </label>
      </div>

    </div>
  );
};

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FlatButtons);
