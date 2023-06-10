import Link from "next/link";

const Navbar = () => {
  const styles = {
    classNames:
      "font-loryena tracking-[5px] text-base text-light-yellow uppercase",
  };
  const links = [
    {
      id: 0,
      name: "Rooms",
      href: "/",
      classNames: styles.classNames,
    },
    {
      id: 1,
      name: "Services",
      href: "/",
      classNames: styles.classNames,
    },
    {
      id: 3,
      name: "Gallery",
      href: "/",
      classNames: styles.classNames,
    },
    {
      id: 4,
      name: "Resturations",
      href: "/",
      classNames: styles.classNames,
    },
  ];

  return (
    <nav className="">
      <div className=" pt-6 px-7 fixed w-screen header  overflow-auto top-0 right-0 h-full ">
        <ul className="max-w-7xl mx-auto flex justify-between items-end  ">
          <Link href="/">
            <img
              className="w-[120px] sm:w-auto md:w-[180px] "
              src="assets/icons/JC-logo.svg"
              alt=""
            />
          </Link>
          <div className="hidden sm:flex space-x-5">
            {links.map((links) => (
              <Link href={links.href}>
                {" "}
                <li key={links.id} className={links.classNames}>
                  {links.name}
                </li>
              </Link>
            ))}
          </div>

          {}
          <div>
            <Link
              href="/"
              className="relative  font-loryena tracking-[5px] text-xs sm:text-base text-light-yellow p-1 sm:p-2 uppercase  rounded-sm flex flex-col gap-1 item-center"
            >
              <span className="w-full dot_in h-[0.2px] bg-light-yellow"></span>
              Book a room
              <br />
              <span className="w-full dot_in h-[0.2px] bg-light-yellow"></span>
            </Link>
          </div>

          <div className="btn space-y-1 block sm:hidden">
            <div className="w-7 h-0.5 bg-light-yellow"></div>
            <div className="w-7 h-0.5 bg-light-yellow"></div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
