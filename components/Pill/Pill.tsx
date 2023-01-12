import { v4 as uuidv4 } from "uuid";
import styles from "./_pill.module.scss";
type Props = {
  tag: any[];
};

export const Pill: React.FC<Props> = ({ tag }) => {
  return (
    <div>
      {tag.map((t) => {
        return (
          <button key={uuidv4()} className={styles.button}>
            <a key={uuidv4()} href={`${Object.values(t)}`}>
              {Object.keys(t)}
            </a>
          </button>
        );
      })}
    </div>
  );
};
