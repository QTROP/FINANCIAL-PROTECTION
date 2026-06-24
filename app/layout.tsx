export const metadata = {
  title: "Financial Protection Escrow Services",
  description: "Secure escrow transactions worldwide."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
