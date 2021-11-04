import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const num = 0;

  return (
    <div className={styles.container}>
      <div>
        <h1>{num}</h1>
        <h1>Hello</h1>
      </div>
      <div className="sample">test</div>
    </div>
  );
};

export default Home;
