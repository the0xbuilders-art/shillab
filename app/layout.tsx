export const metadata = {
  title: "SHILLAB — The Lab for Shillers",
  description: "The professional shilling ecosystem. We build tools that make shilling easier and fun.",
  openGraph: {
    title: "SHILLAB — The Lab for Shillers",
    description: "We build tools that make shilling easier and fun.",
    images: ["/brand/hero-title-dark.jpg"]
  },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
