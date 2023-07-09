"use client";
import Image from "next/image";
import React from "react";
import Pager from "./pager";

function SuppliersList() {
  return (
    <div
      className="flex flex-col justify-start items-center min-h-screen pb-5"
      style={{
        backgroundColor: "#F2F2F2",
      }}
    >
      <ul className="flex flex-col w-full px-4 ">
        <CardComponent />
        <CardComponent />
      </ul>
      <Pager />
    </div>
  );
}

function CardComponent() {
  const [showPopupEdit, setShowPopupEdit] = React.useState(false);
  const [showPopupAdd, setShowPopupAdd] = React.useState(false);

  return (
    <li className="my-4">
      <div
        className="flex flex-col sm:flex-row sm:justify-between items-center p-4 rounded-lg shadow"
        style={{
          backgroundColor: "#D3D3D3",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="Picture of the author"
          width={50}
          height={50}
        />
        <div className="flex flex-col items-center">
          <h1
            style={{
              color: "#333333",
            }}
          >
            Name
          </h1>
          <span
            className="text-sm font-light"
            style={{
              color: "#555555 ",
            }}
          >
            Supplier 1
          </span>
        </div>

        <div className="flex flex-col items-center">
          <h1
            style={{
              color: "#333333",
            }}
          >
            Endereço
          </h1>
          <span
            className="text-sm font-light max-w-xs"
            style={{
              color: "#555555 ",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            ap
          </span>
        </div>

        <div className="flex flex-col items-center">
          <h1
            style={{
              color: "#333333",
            }}
          >
            Criado
          </h1>
          <span
            className="text-sm font-light"
            style={{
              color: "#555555 ",
            }}
          >
            12/02/12
          </span>
        </div>

        <div className="flex flex-row items-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setShowPopupEdit(true);
            }}
          >
            Chat
          </button>
        </div>
      </div>
    </li>
  );
}

export default SuppliersList;
