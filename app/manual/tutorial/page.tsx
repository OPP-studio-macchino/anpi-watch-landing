import { TutorialPage } from "../../../components/tutorial/TutorialPage";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata("/manual/tutorial");

export default function TutorialRoute() {
  return <TutorialPage />;
}
