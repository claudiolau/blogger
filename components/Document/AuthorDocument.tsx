import groq from "groq";

export const AuthorQuery = groq`*[_type == "author"]`;

export function Author({ data }: any) {
  return <>{console.log(data)}</>;
}
