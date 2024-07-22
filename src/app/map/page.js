// pages/map.js
"use client";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const MapPage = () => {
  const router = useRouter();
  const [mapUrl, setMapUrl] = useState("");

  useEffect(() => {
    if (router.isReady) {
      const { address } = router.query;
      if (address) {
        const url = `https://www.google.com/maps?q=${encodeURIComponent(
          address
        )}&output=embed`;
        setMapUrl(url);
      }
    }
  }, [router.isReady, router.query]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {mapUrl ? (
        <iframe
          src={mapUrl}
          style={{ width: "100%", height: "100%", border: "none" }}
          loading="lazy"
        ></iframe>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default MapPage;
