import React from "react";
import TextField from "@material-ui/core/TextField";

const Config = ({
  incLimit,
  incBy,
  disableInc,
  disableDec,
  decLimit,
  inputHandler,
  errors
}) => {
  return (
    <div className="row" style={styles.outerDiv}>
      <div className="col-lg-4 mt-3">
        <TextField
          id="outlined-number"
          label="Increment Limit"
          type="number"
          size="small"
          variant="outlined"
          error={errors.incLimit !== undefined ? true : false}
          name="incLimit"
          helperText={
            errors.incLimit !== undefined
              ? errors.incLimit
              : disableInc
              ? "Limit Reached"
              : ""
          }
          onChange={inputHandler}
          value={incLimit}
        />
      </div>
      <div className="col-lg-4 mt-3">
        <TextField
          id="outlined-number"
          label="Increment By"
          type="number"
          size="small"
          variant="outlined"
          name="incBy"
          InputLabelProps={{
            shrink: true
          }}
          error={errors.incBy !== undefined ? true : false}
          helperText={errors.incBy !== undefined ? errors.incBy : ""}
          onChange={inputHandler}
          value={incBy}
        />
      </div>
      <div className="col-lg-4 mt-3">
        <TextField
          id="outlined-number"
          label="Decrement Limit"
          type="number"
          size="small"
          variant="outlined"
          name="decLimit"
          error={errors.decLimit !== undefined ? true : false}
          helperText={
            errors.decLimit !== undefined
              ? errors.decLimit
              : disableDec
              ? "Limit Reached"
              : ""
          }
          onChange={inputHandler}
          value={decLimit}
        />
      </div>
    </div>
  );
};

const styles = {
  outerDiv: {
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto"
  }
};

export default Config;
