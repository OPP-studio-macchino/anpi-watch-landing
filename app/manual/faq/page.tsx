import { FAQPage } from "../../../components/faq/FAQPage";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata("/manual/faq");

export default function FAQRoute() {
  return <FAQPage />;
}
