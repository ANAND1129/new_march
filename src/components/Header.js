import React, { useEffect, useState } from "react";
import { Drawer, Card } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Men from "./Men";
import Women from "./Women";
import { Link } from "react-router-dom";

const Header = () => {
  //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  //to comit code
  const [activeComponent, setActiveComponent] = useState("Men");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {  
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setActiveComponent("Men");
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isDrawerOpen);
    // document.body.classList.toggle("blur", isDrawerOpen);

    return () => {
      document.body.classList.remove("overflow-hidden");
      //   document.body.classList.remove("blur-none");
    };
  }, [isDrawerOpen]);

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Men":
        return <Men />;
      case "Women":
        return <Women />;
      default:
        return null;
    }
  };

  return (
    <div className=" p-4 flex items-center fixed w-full hover:bg-black hover:text-white sm:w-full ">
      <div className="absolute top-0 left-0">
        <div className="absolute z-[999] top-7 left-8" variant="text" size="lg">
          {isDrawerOpen ? (
            <XMarkIcon
              className="h-8 w-8 stroke-2  text-black"
              onClick={closeDrawer}
            />
          ) : (
            <Bars3Icon className="h- w-8 stroke-2" onClick={openDrawer} />
          )}
        </div>

        <Drawer className="z-0" open={isDrawerOpen} onClose={closeDrawer}>
          {isDrawerOpen ? (
            <div className="w-screen h-screen absolute mt-20 backdrop-blur   "></div>
          ) : null}
          <Card
            className={` sm:h-screen sm:w-[600px] md:h-screen md:w-[780px] lg:h-full lg:w-[760px] h-screen w-screen p-4 bg-white border text-black z-50  ${
              isDrawerOpen ? "block" : "hidden"
            }`}
          >
            <div className="mb-2 flex justify-end gap-8 p-4">
              <div
                className={` text-2xl cursor-pointer ${
                  activeComponent === "Men" ? "text-red-700" : ""
                }`}
                onClick={() => handleComponentClick("Men")}
              >
                <h1>Men</h1>
              </div>
              <div
                className={`text-2xl cursor-pointer ${
                  activeComponent === "Women" ? "text-red-700" : ""
                }`}
                onClick={() => handleComponentClick("Women")}
              >
                <h1 className="leading-7">Women</h1>
              </div>
            </div>
            <div className="">{renderActiveComponent()}</div>
          </Card>
        </Drawer>
      </div>
      <div className="ml-16 ">
        <h4 className="text-xl ">Shop</h4>
      </div>
      <div className="ml-4">
        <h4 className="text-xl">Review</h4>
      </div>
      <div className="mt-4 9 text-center w-full">
        <Link>
        <h1 className="text-3xl font-bold">March</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
