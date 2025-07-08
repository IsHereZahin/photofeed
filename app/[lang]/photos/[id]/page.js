import { notFound } from "next/navigation";
import PhotoDetails from "@/components/PhotoDetails";

export default async function PhotoDetailsPage({ params: { id, lang } }) {
    const response = await fetch(`${process.env.BASE_API_URL}/photos`);

    if (!response.ok) {
        throw new Error("Failed to fetch photos");
    }

    const photos = await response.json();
    const photo = photos.find((p) => p.id === id);

    if (photo) {
        notFound();
    }

    return <PhotoDetails id={id} lang={lang} />;
}