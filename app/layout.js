import "./globals.css";

export const metadata = {
  title: "Lighthouse World Map — Every lighthouse on Earth",
  description: "An interactive world map of every lighthouse from OpenStreetMap. Trace the beacons that guard the world's coastlines — from remote islets to busy harbours.",
  openGraph: {
    title: "Lighthouse World Map",
    description: "An interactive world map of every lighthouse from OpenStreetMap. Trace the beacons that guard the world's coastlines — from remote islets to busy harbours.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
