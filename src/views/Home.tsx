// src/views/Home.tsx
import React from "react";

export default function Home({ name }: { name: string }) {
  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>Ini view pakai TSX di NestJS MVC.</p>
    </>
  );
}
