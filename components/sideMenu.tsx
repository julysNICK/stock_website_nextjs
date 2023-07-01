import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import Profile from "./profile";
import ProductsList from "./productsList";
import SuppliersList from "./supplier";

function SideMenu({
  componets,
  setIndex,
}: {
  componets: {
    index: number;
    name: string;
    icon: JSX.Element;
    component: JSX.Element;
  }[];
  setIndex: any;
}) {
  return (
    <div
      className="flex"
      style={{
        height: "calc(100vh - 8rem)",
      }}
    >
      <ul className="flex flex-col w-full">
        <li className="my-px">
          <a
            href="#"
            className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 my-14"
          >
            <Image
              src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="Picture of the author"
              width={100}
              height={10}
              style={{
                borderRadius: "100%",
                objectFit: "cover",
              }}
            />

            <span
              className="ml-3"
              style={{
                color: " #FFFFFF",
              }}
            >
              Name: Store test
            </span>
          </a>
        </li>

        {/* <li className="my-px">
          <a
            href="#"
            className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <span className="flex items-center justify-center text-lg text-gray-400">
              <i className="fas fa-tachometer-alt"></i>
            </span>
            <span className="ml-3">Products</span>
          </a>
        </li>

        <li className="my-px">
          <a
            href="#"
            className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <span className="flex items-center justify-center text-lg text-gray-400">
              <i className="fas fa-tachometer-alt"></i>
            </span>
            <span className="ml-3">Suppliers</span>
          </a>
        </li>

        <li className="my-px">
          <a
            href="#"
            className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <span className="flex items-center justify-center text-lg text-gray-400">
              <i className="fas fa-tachometer-alt"></i>
            </span>
            <span className="ml-3">Profile</span>
          </a>
        </li> */}

        {componets.map((component) => {
          return (
            <li
              className="my-px"
              key={component.name}
              onClick={() => {
                setIndex(component.index);
              }}
            >
              <a
                href="#"
                className="flex flex-row items-center h-12 px-4 rounded-lg text-white hover:bg-gray-100  hover:text-blue-700"
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  {component.icon}
                </span>
                <span className="ml-3 ">{component.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideMenu;
