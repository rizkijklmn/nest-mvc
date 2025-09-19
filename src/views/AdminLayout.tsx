import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Admin Panel</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
