"use client";

import { ReactNode } from "react";
import styles from "./MenuLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuLinkProps = {
  item: {
    icon: ReactNode;
    title: string;
    path: string;
  };
};

export default function MenuLink({ item }: MenuLinkProps) {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={
        pathName === item.path
          ? [styles.container, styles.active].join(" ")
          : styles.container
      }
    >
      {item.icon}
      {item.title}
    </Link>
  );
}
