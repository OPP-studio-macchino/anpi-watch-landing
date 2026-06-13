import { ManualPage } from "../../components/manual/ManualPage";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata("/manual");

export default function ManualRoute() {
  return <ManualPage />;
}
