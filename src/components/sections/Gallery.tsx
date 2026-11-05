import { galleryItems, instagramPreview } from "@/data/gallery";
import Image from "next/image";
import Link from "next/link";
import Section from "../ui/Section";

const Gallery = () => {
  return (
    <Section
      id="gallery"
      className="grid gap-6"
    >
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
        Recent work
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {galleryItems.map((item) => (
          <li
            key={item.id}
            className={`relative aspect-square ${item.featured ? "col-span-2 row-span-2" : ""}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={
                item.featured
                  ? "(min-width: 768px) 50vw, 100vw"
                  : "(min-width: 768px) 25vw, 50vw"
              }
              className="object-cover rounded-xl"
            />
          </li>
        ))}
        <li className="relative col-span-2 aspect-2/1">
          <Link
            href={instagramPreview.href}
            target="_blank"
            rel="noreferrer"
            className="group absolute inset-0 grid place-items-center overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Image
              src={instagramPreview.src}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-page/60 transition-colors group-hover:bg-page/40 group-focus-visible:bg-page/40" />
            <span className="relative font-medium">
              See more on Instagram →
            </span>
          </Link>
        </li>
      </ul>
    </Section>
  );
};

export default Gallery;
