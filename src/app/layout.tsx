import "../styles/main.scss";

export const metadata = {
  title: "v are money",
  description: "disrupting the crypto status quo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center">{children}</body>
    </html>
  );
}
