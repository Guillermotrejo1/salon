import Link from "next/link";
import { site } from "@/data/site";

const Footer = () => {
  return (
    <footer className="border-t border-ink/10 text-sm text-ink/70">
      <div
        className="grid gap-x-8 gap-y-3 max-w-5xl mx-auto p-6 md:px-12
                   [grid-template-areas:'info'_'social'_'copy']
                   md:grid-cols-[1fr_auto]
                   md:[grid-template-areas:'info_social'_'copy_social']"
      >
        <p className="[grid-area:info]">{site.name} · By appointment only</p>

        <Link
          href={site.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="[grid-area:social] md:self-center justify-self-start
                     inline-flex items-center min-h-11
                     hover:text-ink transition-colors
                     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Instagram
        </Link>

        <small className="[grid-area:copy] text-xs">
          © {new Date().getFullYear()} {site.name}
        </small>
      </div>
    </footer>
  );
};

export default Footer;