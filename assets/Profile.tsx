import Image from "next/image";
import ProfileImage from "../public/profile.png";
export const Profile = () => {
  const size = 176;
  return (
    <>
      <Image
        style={{ borderRadius: "50%" }}
        placeholder="blur"
        src={ProfileImage}
        alt={"profile"}
        width={size}
        height={size}
      />
    </>
  );
};
