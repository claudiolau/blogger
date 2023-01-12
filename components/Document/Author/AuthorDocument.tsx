import styles from "./_authorDocument.module.scss";
import groq from "groq";
import { Profile } from "../../../assets/Profile";
import { Pill } from "../../Pill";
import { pillofTags } from "../../Pill/constant";

export const AuthorQuery = groq`*[_type == "author"]`;

export function AuthorDocument({ data }: any) {
  const authorData = data[0];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <div className={styles.header}>
            <h1 className={styles.name}>{authorData.name}</h1>
            <h2 className={styles.occupation}>{authorData.occupation}</h2>
            <Profile />
          </div>
          <div className={styles.details}>
            <div>{authorData.description}</div>
            <div>{authorData.bio[0].children[0].text}</div>
          </div>
          <Pill tag={pillofTags} />
        </div>
      </div>
    </>
  );
}
