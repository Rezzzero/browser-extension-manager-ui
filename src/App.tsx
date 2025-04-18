import { ExtentionsList } from "./component/extentions-list/ExtentionsList";
import { Navbar } from "./component/navigation/Navbar";

export const App = () => {
  return (
    <div className="bg-[linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)] dark:bg-[linear-gradient(180deg,_#040918_0%,_#091540_100%)] py-8 w-[100%] h-[100%]">
      <div className="container mx-auto w-[90%] md:w-[85%]">
        <Navbar />
        <ExtentionsList />
      </div>
    </div>
  );
};
