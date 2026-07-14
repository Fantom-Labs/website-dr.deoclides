import StudioWrapper from "./StudioWrapper";
export { metadata, viewport } from "next-sanity/studio";

export function generateStaticParams() {
  return [{ tool: [] }];
}

export default function StudioPage() {
  return <StudioWrapper />;
}
