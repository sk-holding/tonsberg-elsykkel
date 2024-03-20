import Link from "next/link";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import { NavigationProps } from "@/types";

const NavDesktop = ({ menu }: NavigationProps) => {
  const pathName = usePathname();

  return (
    <div className={styles.wrapper}>
      {menu.map((link, idx) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={idx}
            className={isActive ? styles.active : ""}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavDesktop;
