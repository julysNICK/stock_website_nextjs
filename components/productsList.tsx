"use client";
import Image from "next/image";
import React from "react";

function ProductsList() {
  return (
    <div
      className="flex flex-row justify-center items-center h-full"
      style={{
        backgroundColor: "#F2F2F2",
      }}
    >
      <ul className="flex flex-col w-full px-4">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
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
    <li className="my-4">
      <div
        className="flex flex-col sm:flex-row sm:justify-between items-center p-4  rounded-lg shadow"
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
        <div
          className="flex flex-col items-center"
          style={{
            color: "#333333",
          }}
        >
          <h1>Name</h1>
          <span
            className="text-sm font-light"
            style={{
              color: "#555555 ",
            }}
          >
            Product 1
          </span>
        </div>

        <div
          className="flex flex-col items-center"
          style={{
            color: "#333333",
          }}
        >
          <h1>Price</h1>
          <span
            className="text-sm font-light"
            style={{
              color: "#555555 ",
            }}
          >
            $200,0
          </span>
        </div>

        <div
          className="flex flex-col items-center"
          style={{
            color: "#333333",
          }}
        >
          <h1>Supplier</h1>
          <span
            className="text-sm font-light"
            style={{
              color: "#555555 ",
            }}
          >
            Supplier 1
          </span>
        </div>

        <div
          className="flex flex-col items-center"
          style={{
            color: "#333333",
          }}
        >
          <h1>Comprado</h1>
          <span
            className="text-sm font-light text-gray-500"
            style={{
              color: "#555555 ",
            }}
          >
            12/02/12
          </span>
        </div>

        <div className="flex flex-row items-center">
          <button
            className="hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            style={{
              backgroundColor: "#8E8C88",
            }}
            onClick={() => {
              setShowPopupEdit(true);
            }}
          >
            Edit
          </button>
          <button
            className="hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            style={{
              backgroundColor: "#FF6347",
            }}
          >
            Delete
          </button>

          <button
            className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            style={{
              backgroundColor: "#61C0BF",
            }}
            onClick={() => {
              setShowPopupAdd(true);
            }}
          >
            Add
          </button>
        </div>
      </div>
      {showPopupEdit && <PopupEdit />}
      {showPopupAdd && <PopupBuyProduct />}
    </li>
  );
}

function PopupEdit() {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Edit Product
                </h3>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>

            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PopupBuyProduct() {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Buy Product
                </h3>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                  </p>
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                  </p>
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                  </p>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid pariatur, ipsum similique veniam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Buy
            </button>

            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsList;
