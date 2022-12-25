import groq from "groq";

export const query = groq`count(*[])`;

export function DocumentsCount({ data }: any) {
  return (
    <>
      {console.log(data)}
      Documents: <strong>{data}</strong>
    </>
  );
}
