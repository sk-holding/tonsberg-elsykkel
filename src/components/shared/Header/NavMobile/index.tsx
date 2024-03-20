import Hamburger from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { NavigationProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const NavMobile = ({ menu }: NavigationProps) => {
  const pathName = usePathname();
  const [isOpen, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref} className={styles.wrapper}>
      <Hamburger
        label="Menu icon"
        toggled={isOpen}
        toggle={setOpen}
        color="#000"
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.links}
          >
            {menu.map((link, idx) => {
              const isActive = pathName.startsWith(link.href);
              return (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.1 + idx / 10,
                  }}
                  key={idx}
                >
                  <Link
                    href={link.href}
                    className={`${isActive ? styles.active : ""} ${
                      styles.linkItem
                    } `}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
