import Button from "../components/button";
import Header from "../components/header";
import Layout from "../components/layout";

const test = () => {
  return (
    <Layout>
      <div>
        <div className="flex ">
          <button className="flex-auto py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-full">
            Button
          </button>
          <button className="flex-auto py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-full">
            Button
          </button>
          <button className="flex-auto py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-full ">
            Button
          </button>
          {/* <div className="flex-auto ">Flex Item 1</div>
          <div className="flex-auto ">Flex Item 2</div>
          <div className="flex-auto ">Flex Item 3</div> */}
        </div>
      </div>
    </Layout>
  );
};

export default test;
