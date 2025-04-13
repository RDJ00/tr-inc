import { Suspense } from "react";
import { AboutPageContent } from "./AboutPageContent";
import { AboutPageSkeleton } from "./AboutPageSkeleton";

// This would be a server component that fetches data from Sanity
export default function AboutPage() {
  return (
    <Suspense fallback={<AboutPageSkeleton />}>
      <AboutPageContent />
    </Suspense>
  );
} 