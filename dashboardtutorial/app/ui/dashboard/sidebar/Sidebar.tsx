import MenuLink from "./menuLink/MenuLink";
import styles from "./sidebar.module.css";
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";

type SidebarPros = {
  classNames?: string[];
};

const menueItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Recenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Users",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function Sidebar({ classNames }: SidebarPros) {
  return (
    <aside
      className={
        classNames
          ? [...classNames, styles.container].join(" ")
          : styles.container
      }
    >
      <section className={styles.user}>
        <img
          src="https://www.politihogskolen.no/globalassets/etter-og-videreutdanning/ansattprofiler/politihogskolen-dummy-profilbilde.jpg"
          alt="https://www.politihogskolen.no/globalassets/etter-og-videreutdanning/ansattprofiler/politihogskolen-dummy-profilbilde.jpg"
        />
        <div className={styles["user-details"]}>
          <span className={styles.username}>John Joe</span>
          <span className={styles["user-titale"]}>Administrator</span>
        </div>
      </section>
      <ul className={styles.list}>
        {menueItems.map((cat) => (
          <li key={cat.title}>
            <section>
              <span className={styles.category}>{cat.title}</span>
              {cat.list.map((e) => (
                <MenuLink item={e} key={e.title} />
              ))}
            </section>
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </aside>
  );
}
