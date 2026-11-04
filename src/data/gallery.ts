export type GalleryItem = {
    id: string;
    src: string;
    alt: string;
    featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
    {id: "acrylic", src: "/gallery1.jpg", alt: "acrylic set", featured: true},
    {id: "nail-art", src: "/gallery2.jpg", alt: "nail-art/design"},
    {id: "gel-x", src: "/gallery3.jpg", alt: "gel-x extensions"},
]

export const instagramPreview = {
  src: "/gallery4.jpg",
  href: "https://www.guillermotrejo.dev/",
};