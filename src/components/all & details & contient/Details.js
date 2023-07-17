import { Fragment, useContext } from "react";
import { Context } from "../../store/store";

const Details = () => {
  const Ctx = useContext(Context);
  return (
    <Fragment>
      {Ctx.items.length === 1  &&
        Ctx.items.map((item) => (
          <div
            key={item.name}
            className=" flex flex-col w-[250px] h-[350px] mt-10 bg-white rounded-2xl"
          >
            <img
              className=" w-auto h-auto rounded-t-2xl"
              src={item.flags.svg}
              alt={item.name}
            />

            <p className="mt-10 font-bold">{item.name}</p>
            <p>
              population:{" "}
              <span className=" text-gray-500">{item.population}</span>{" "}
            </p>
            <p>
              Region: <span className=" text-gray-500">{item.region}</span>
            </p>
            <p>
              Capital: <span className=" text-gray-500">{item.capital}</span>
            </p>
            <p>
              NativeName:{" "}
              <span className=" text-gray-500">{item.nativeName}</span>
            </p>
          </div>
        ))}
    </Fragment>
  );
};
export default Details;
