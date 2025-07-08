import Image from "next/image";
import { getDictionary } from "./disctionaries";

export default async function Home({ params: { lang } }) {
  // console.log(lang);
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <h1>{dictionary.views}</h1>
    </div>
  );
}