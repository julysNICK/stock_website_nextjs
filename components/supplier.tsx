"use client";
import Image from "next/image";
import React from "react";

function SuppliersList() {
  return (
    <div
      className="flex flex-row justify-center items-center min-h-screen"
      style={{
        backgroundColor: "#F2F2F2",
      }}
    >
      <ul className="flex flex-col w-full px-4">
        <CardComponent />
        <CardComponent />
      </ul>
    </div>
  );
}

function CardComponent() {
  const [showPopupEdit, setShowPopupEdit] = React.useState(false);
  const [showPopupAdd, setShowPopupAdd] = React.useState(false);

  return (
    <li className="my-px">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center p-4 bg-cyan-900 rounded-lg shadow">
        <Image
          src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="Picture of the author"
          width={50}
          height={50}
        />
        <div className="flex flex-col items-center">
          <h1>Name</h1>
          <span className="text-sm font-light text-gray-500">Supplier 1</span>
        </div>

        <div className="flex flex-col items-center">
          <h1>Endereço</h1>
          <span className="text-sm font-light text-gray-500 max-w-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            ap
          </span>
        </div>

        <div className="flex flex-col items-center">
          <h1>Criado</h1>
          <span className="text-sm font-light text-gray-500">12/02/12</span>
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
