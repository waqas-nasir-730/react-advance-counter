import React, { Component } from "react";
import "./styles.css";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Counter from "./components/Counter";
import Config from "./components/Config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      incBy: 1,
      incLimit: 100,
      decLimit: 0,
      errors: []
    };
  }

  inputHandler = (e) => {
    if (
      e.target.value < 0 ||
      (e.target.name === "incBy" && e.target.value === "")
    ) {
      this.setState({
        errors: {
          ...this.state.errors,
          [e.target.name]: "Please Enter A Valid Number."
        }
      });
    } else {
      this.setState({
        [e.target.name]: parseInt(e.target.value),
        errors: {
          ...this.state.errors,
          [e.target.name]: undefined
        }
      });
    }
  };

  hanleIncOrDec = (operation) => {
    let { counter } = this.state;
    if (operation === "INC") {
      counter = counter + this.state.incBy;
    } else {
      counter = counter - this.state.incBy;
    }

    this.setState({
      counter: counter
    });
  };

  render() {
    const disableInc =
      this.state.incLimit !== "" &&
      this.state.counter + this.state.incBy > this.state.incLimit
        ? true
        : false;
    const disableDec =
      this.state.decLimit !== "" &&
      this.state.counter - this.state.incBy < this.state.decLimit
        ? true
        : false;

    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              React Counter App
            </Typography>
          </Toolbar>
        </AppBar>

        <div className="container">
          <Counter
            state={this.state}
            hanleIncOrDec={this.hanleIncOrDec}
            disableInc={disableInc}
            disableDec={disableDec}
          />
          <Config
            incLimit={this.state.incLimit}
            decLimit={this.state.decLimit}
            inputHandler={this.inputHandler}
            incBy={this.state.incBy}
            disableInc={disableInc}
            disableDec={disableDec}
            errors={this.state.errors}
          />
        </div>
      </div>
    );
  }
}

export default App;
