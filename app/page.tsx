import SideMenu from "@/components/sideMenu";
import Image from "next/image";

export default function Home() {
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
      <div className="col-span-12 row-span-1 bg-gray-200">Header</div>
      <div className="col-span-2 row-span-11 bg-gray-200">
        <SideMenu />
      </div>
      <div className="col-span-10 row-span-11 bg-white">Content</div>
    </main>
  );
}
