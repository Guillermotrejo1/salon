import { site } from "@/data/site";

const PreviewBadge = () => {
  if (!site.isPreview) return null;

  return (
    <p
      role="note"
      className="pointer-events-none fixed bottom-4 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-deep/90 px-4 py-2 text-sm text-ink shadow-lg ring-1 ring-brand/50"
    >
      Preview · sample content, not live yet
    </p>
  );
};

export default PreviewBadge;