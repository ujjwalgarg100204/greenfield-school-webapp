import { Button, Card, CardFooter, Image } from "@nextui-org/react";

import React from "react";

export default function App() {
    const 
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="/images/hero-card.jpeg"
        width={200}
      />
      <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button
          className="bg-black/20 text-tiny text-white"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          view more --{">"}
        </Button>
      </CardFooter>
    </Card>
  );
}
