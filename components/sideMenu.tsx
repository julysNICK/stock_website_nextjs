"use client";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import Profile from "./profile";
import ProductsList from "./productsList";
import SuppliersList from "./supplier";
import React from "react";

function SideMenu({
  componets,
  setIndex,
  selected,
}: {
  componets: {
    index: number;
    name: string;
    icon: JSX.Element;
    component: JSX.Element;
    selected: boolean;
  }[];
  setIndex: any;
  selected: number;
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
            className="flex flex-row items-center px-4 rounded-lg my-6"
            style={{
              color: " #333333",
            }}
          >
            <Image
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Picture of the author"
              width={70}
              height={10}
              style={{
                borderRadius: "100%",
                objectFit: "contain",
              }}
            />

            <span
              className="ml-3"
              style={{
                color: "#333333",
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

        {componets.map((component, index) => {
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
                className="flex flex-row items-center h-12 px-4 rounded-lg hover:bg-gray-100  hover:text-blue-700"
                style={{
                  backgroundColor:
                    component.index === selected ? "#1E40AF" : "",
                  color: component.index === selected ? "#FFFFFF" : "#333333",
                }}
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
