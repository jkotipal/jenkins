import React, { useEffect, useState } from "react";
import "./Announcement.css";

const GOLD_API_URL = "https://www.goldapi.io/api/XAU/INR";

const Announcement = () => {
  const [price, setPrice] = useState("...");

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const res = await fetch(GOLD_API_URL, {
          headers: {
            "x-access-token": "goldapi-io-demo-keys",
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (data && data.price) {
          setPrice(
            `Gold Price: ₹${data.price.toLocaleString()} per oz (India)`
          );
        } else {
          setPrice("Live Gold price");
        }
      } catch (err) {
        setPrice("live Gold price unavailable");
      }
    };
    fetchGoldPrice();
    // Optionally refresh every 10 minutes
    const interval = setInterval(fetchGoldPrice, 600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live_price scroll-announcement">
      <span>{price}</span>
    </div>
  );
};

export default Announcement;
