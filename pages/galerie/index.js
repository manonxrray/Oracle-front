import { getAllCards } from "../../data/cardsFetcher";
import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getStaticProps() {
  const cards = await getAllCards();

  return {
    props: {
      cards,
      redirectPath: cards[0].slug,
    },
  };
}

export default function AllCards({ redirectPath }) {
  let router = useRouter();

  useEffect(() => router.push(`/galerie/${redirectPath}`), []);

  return (
    <>
      <h1>L'oracle des yeux</h1>
    </>
  );
}
