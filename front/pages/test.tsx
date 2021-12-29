import Button from "../components/button";
import Card from "../components/card";
import Figma from "../components/figma";
import Header from "../components/header";
import Layout from "../components/layout";
import ThreadButton from "../components/threadButton";

const test = () => {
  const style = {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    boxShadow: "0px 8px 32px 0 rgba(31, 38, 135, 0.5)",
    backdropFilter: "blur(5.5px)",
    boder: "1px solid rgba( 255, 255, 255, 0.18 )",
  };
  return (
    <Layout>
      <div>
        <div className="grid grid-cols-12">
          <div className="col-span-11 sm:col-span-1 col-start-2 sm:col-start-1">
            <Card></Card>
          </div>
          <div className="col-start-2 sm:col-start-7 md:col-start-8">
            <Card></Card>
          </div>
          {/* <div className="col-start-1">
            <Card></Card>
          </div>
          <div className="col-start-8 sm:col-start-7 md:col-start-8">
            <Card></Card>
          </div>
          <div className="col-start-1">
            <Card></Card>
          </div>
          <div className="col-start-8 sm:col-start-7 md:col-start-8">
            <Card></Card>
          </div>
          <div className="col-start-1">
            <Card></Card>
          </div>
          <div className="col-start-8 sm:col-start-7 md:col-start-8">
            <Card></Card>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default test;
