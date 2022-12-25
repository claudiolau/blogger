"use client";

import { usePreview } from "../lib/sanity.preview";
import { DocumentsCount, query } from "./Document/DocumentsCount";

export default function PreviewDocumentsCount() {
  const data = usePreview(null, query);
  return <DocumentsCount data={data} />;
}
