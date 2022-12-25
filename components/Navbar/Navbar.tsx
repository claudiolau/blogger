import { Navigator } from "./constants";
import styles from "./_navbar.module.scss";
import { uuid } from "uuidv4";

export const Navbar: React.FC = () => {
  return (
    <>
      <ul className={styles.navigation}>
        {Navigator.map((iconKey) => {
          return (
            <li className={styles.navIcon} key={uuid()}>
              {iconKey}
            </li>
          );
        })}
      </ul>
    </>
  );
};
