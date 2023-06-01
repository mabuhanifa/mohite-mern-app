import { CiBoxList, CiCalendar, CiCalendarDate, CiHome } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
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
      name: "Scheduled",
      href: "/scheduled",
      icon: CiBoxList,
    },

    {
      name: "Completed",
      href: "/finished",
      icon: CiCalendar,
    },
  ];
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="bg-white text-gray-600 my-10 px-5 xl:mx-80">
      <div className="flex">
        <div className="shad my-5 rounded-md h-min">
          <ul className="">
            {sidebarItems.map(({ name, href, icon: Icon }) => {
              return (
                <li
                  key={name}
                  className={
                    pathname === href
                      ? "font-[500] text-gray-900 bg-gray-200 pr-20 border-b"
                      : "pr-20 border-b"
                  }
                >
                  <Link to={href}>
                    <span className="text-2xl">
                      <Icon className="inline mx-5 my-5" />
                    </span>
                    <span>{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <main className="px-5 my-5">{children}</main>
      </div>
    </div>
  );
}
