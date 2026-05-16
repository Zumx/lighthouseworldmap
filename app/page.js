"use client";

import dynamic from "next/dynamic";

const MapView = dynamic(() => import("../components/MapView"), { ssr: false });

export default function Home() {
  return (
    <main className="map-root">
      <MapView />
      <div className="overlay">
        <h1>🗼 Lighthouse World Map</h1>
        <p>Every lighthouse on Earth, sourced live from OpenStreetMap. Zoom in and explore the beacons that guard the world's coastlines — from remote islets to busy harbours.</p>
        <span className="count" id="point-count">
          Loading lighthouses…
        </span>
      </div>
      <div className="footer-credit">
        Data &copy;{" "}
        <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">
          OpenStreetMap
        </a>{" "}
        contributors
      </div>
    </main>
  );
}
