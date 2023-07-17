import { useEffect, useState, useContext } from "react";
import { Context } from "../../store/store";

const Input = () => {
  const [data, setData] = useState();
  const [continent, setConteint] = useState();
  const { addConteint, addName } = useContext(Context);
  const selectChange = (e) => {
    setConteint(e.target.value);
  };
  const changeHandler = (e) => {
    setData(e.target.value);
  };

  useEffect(() => {
    if (data === undefined) {
    } else {
      addName(data);
    }
    if (continent === undefined) {
    } else {
      addConteint(continent);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [continent, data]);

  return (
    <form className=" flex flex-row justify-around gap-72 mt-10">
      <input
        placeholder="Search for a Country"
        type="text"
        className="p-2 w-[400px] rounded-lg outline-none"
        onChange={changeHandler}
      />

      <select
        id="filter by region"
        name="filter bt region"
        className=" rounded-lg outline-none"
        onChange={selectChange}
      >
        <option value="all">All</option>
        <option value="africa">africa</option>
        <option value="americas">americas</option>
        <option value="asia">asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
};
export default Input;
