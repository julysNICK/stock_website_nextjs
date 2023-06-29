function SideMenu() {
  return (
    <div
      className="flex"
      style={{
        height: "calc(100vh - 8rem)",
      }}
    >
      <ul className="flex flex-col w-full ">
        <li className="my-px">
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
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
