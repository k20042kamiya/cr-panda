import React, { ReactNode } from "react";
import Header from "./header";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <div>
        <Header></Header>
        <div className="">
          <div className="pt-0 pr-5 pb-4 my-0 mx-auto mt-0 max-w-5xl">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
