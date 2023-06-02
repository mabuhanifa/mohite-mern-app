import { CiBoxList, CiCalendar, CiCalendarDate, CiHome } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
export default function Layout({ children }) {
  const sidebarItems = [
    {
      name: "All",
      href: "/",
      icon: CiHome,
    },
    {
      name: "Today",
      href: "/today",
      icon: CiCalendarDate,
    },
    {
      name: "Pending",
      href: "/pending",
      icon: CiBoxList,
    },

    {
      name: "Completed",
      href: "/finished",
      icon: CiCalendar,
    },
  ];
  const { pathname } = useLocation();
  return (
    <div className="bg-white text-gray-600 my-10 px-2 lg:px-5 xl:mx-5 2xl:mx-20">
      <Nav />
      <div className="lg:flex">
        <div className="shad my-5 rounded-md h-min p-2">
          <ul className="grid grid-cols-2 lg:flex flex-col">
            {sidebarItems.map(({ name, href, icon: Icon }) => {
              return (
                <Link to={href} key={name}>
                  <li
                    key={name}
                    className={
                      pathname === href
                        ? "font-[500] text-gray-900 bg-gray-200 lg:pr-5 border-b rounded"
                        : "lg:pr-5 border-b"
                    }
                  >
                    <div className="flex items-center p-5 gap-x-2">
                      <span className="text-2xl">
                        <Icon className="" />
                      </span>
                      <span className="">{name}</span>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <main className="px-5 my-5">{children}</main>
      </div>
    </div>
  );
}
