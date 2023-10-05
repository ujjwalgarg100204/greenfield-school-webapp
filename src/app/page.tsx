"use client";

import Image from "next/image";
import { trpc } from "./_trpc/client";

export default function Home() {
  const posts = trpc.posts.getAll.useQuery();
  console.log(posts.data);
  return <main>
    <h1>hello I am Priyansh Kotak</h1>
  </main>;
}
