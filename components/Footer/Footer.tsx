import { Github } from "../../assets";
import styles from "./_footer.module.scss";
export const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Github />
      </div>
    </>
  );
};
