import { NavigationProps } from "@/types";
import Link from "next/link";

const Navigation = ({ menu, title }: NavigationProps) => {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {menu.map((link, idx) => {
          return (
            <li key={idx}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
