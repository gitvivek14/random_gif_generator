import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return <div className="flex relative flex-col background w-full h-screen items-center overflow-y-auto">
    <div className=" w-11/12  mt-6 rounded-lg  mx-auto">
    <h1 className="bg-white mx-auto text-center text-5xl px-10 py-2 font-bold">Random Gif</h1>
    </div>
   
    <div className="flex flex-col w-full items-center mt-[30px]">
      <Random></Random>
      <Tag></Tag>
    </div>
  </div>;
}
