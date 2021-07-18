import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const Counter = ({ state, disableInc, disableDec, hanleIncOrDec }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <Card style={styles.card}>
            <CardContent style={styles.counter}>{state.counter}</CardContent>
          </Card>
        </div>
        <div className="col-lg-12 mt-2">
          <Button
            variant="contained"
            color="primary"
            startIcon={<Icon>add</Icon>}
            onClick={() => hanleIncOrDec("INC")}
            disabled={disableInc}
          >
            {state.incBy}
          </Button>
          <Button
            className="ml-3"
            variant="contained"
            color="secondary"
            startIcon={<Icon>remove</Icon>}
            onClick={() => hanleIncOrDec("DEC")}
            disabled={disableDec}
          >
            {state.incBy}
          </Button>
        </div>
      </div>
    </>
  );
};

const styles = {
  card: {
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto"
  },
  counter: {
    fontSize: 80
  }
};

export default Counter;
