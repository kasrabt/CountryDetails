import { Fragment, useContext } from "react";
import Allc from "./../all & details & contient/AllC";
import { Context } from "../../store/store";
import RegionDetail from "../all & details & contient/RegionDetail";
import Details from "./../all & details & contient/Details";
import Input from "../Input/Input";
const Country = () => {
  const { conName, items } = useContext(Context);

  return (
    <Fragment>
      <Input />
      <div className=" flex gap-10 flex-wrap justify-center max-w-[80%] ml-auto mr-auto">
        {items.length === 1 && <Details />}
        {items.length === 0 && conName === "all" ? (
          <Allc />
        ) : (
          items.length === 0 && <RegionDetail />
        )}
      </div>
    </Fragment>
  );
};
export default Country;
