"use client";
import NavBarMenu from "@/components/navbarMenu";
import ProductsList from "@/components/productsList";
import Profile from "@/components/profile";
import SideMenu from "@/components/sideMenu";
import SuppliersList from "@/components/supplier";
import { CgProfile } from "react-icons/cg";
import React from "react";
export default function Home() {
  const [index, setIndex] = React.useState(0);

  var componets = [
    {
      index: 0,
      name: "Profile",
      icon: <CgProfile />,
      component: <Profile />,
      selected: true,
    },
    {
      index: 1,
      name: "Products",
      icon: <CgProfile />,
      component: <ProductsList />,
      selected: false,
    },
    {
      index: 2,
      name: "Suppliers",
      icon: <CgProfile />,
      component: <SuppliersList />,
      selected: false,
    },
  ];

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <SideMenu />
    // </main>
    // <main className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto h-screen">
    //   <div className="col-span-1 row-span-full bg-gray-200">Header</div>
    //   <div className="col-span-1 md:col-start-2 md:col-span-1 row-start-2 md:row-auto bg-white">
    //     <SideMenu />
    //   </div>

    //   <div className="col-span-1 md:col-start-2 md:col-span-1 row-start-1 md:row-auto bg-white">
    //     Content
    //   </div>
    // </main>
    <main className="grid grid-cols-12 grid-rows-12 h-screen">
      <div className="col-span-12 row-span-1 bg-gray-800">
        <NavBarMenu />
      </div>
      <div
        className="col-span-2 row-span-11"
        style={{
          backgroundColor: "#C4B7A6",
        }}
      >
        <SideMenu
          componets={componets}
          setIndex={(index: number) => {
            setIndex(index);
          }}
          selected={index}
        />
      </div>
      <div className="col-span-10 row-span-11 h-full">
        {componets[index].component}
      </div>
    </main>
  );
}
