import Link from "next/link";

const Navbar = () => {
  const styles = {
    classNames: "font-Montel text-lg text-ligth-yellow uppercase",
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
      name: "Book a room",
      href: "/",
      classNames: styles.classNames,
    },
  ];

  return (
    <nav className="">
      <ul>
        <Link href="/">
          <img src="assets/icons/JC-logo.svg" alt="" />
        </Link>
        {links.map((links) => (
          <Link href={links.href}>
            {" "}
            <li key={links.id} className={links.classNames}>
              {links.name}
            </li>
          </Link>
        ))}

        {}
      </ul>
    </nav>
  );
};

export default Navbar;
