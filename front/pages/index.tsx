import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const num = 0;

  return (
    <div className={styles.container}>
      <div className="bg-white dark:bg-gray-800">
        <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
        <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
        <div>
          <h1>{num}</h1>
          <h1>Hello</h1>
        </div>
        <div className="flex items-center p-6 mx-auto space-x-4 max-w-sm bg-white rounded-xl shadow-md">
          <div className="flex-shrink-0">
            <Image
              width="3rem"
              height="3rem"
              src="/img/logo.svg"
              alt="ChitChat Logo"
            ></Image>
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
          <button className="py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-full">
            Button
          </button>
          <button className="py-2 px-4 font-semibold text-blue-700 hover:text-white bg-transparent hover:bg-blue-500 rounded border border-blue-500 hover:border-transparent">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
