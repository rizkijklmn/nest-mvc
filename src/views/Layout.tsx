import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>NestJS + TSX</title>
        <link rel="stylesheet" href="/output.css" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
