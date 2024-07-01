import React from "react";
import Header from "./components/header";
import SubHeader from "./components/subHeader";
import Form from "./components/form";
import About from "./components/about";
import Buy from "./components/buy";

class Body extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SubHeader />
        <Form />
        <About />
        <Buy />
      </div>
    )
  }
}


export default Body;
