import PhotoList from "@/components/PhotoList";

export default async function Home() {
  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  if (!response.ok) {
    throw new Error("Failed to fetch photos");
  }
  const photos = await response.json();

  return <PhotoList photos={photos} />;
}