import { Navigator } from "./constants";
import styles from "./_navbar.module.scss";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <>
      <ul className={styles.navigation}>
        {Navigator.map((iconKey) => {
          const mapHref =
            iconKey.toLowerCase() === "home" ? "/" : iconKey.toLowerCase();

          return (
            <li className={styles.navIcon} key={uuidv4()}>
              <Link href={mapHref}>{iconKey}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
