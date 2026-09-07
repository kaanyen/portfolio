"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

function formatNow() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: site.timezone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
}

export function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(formatNow());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="clock">
      {site.location}
      {time ? ` ${time}` : ""}
    </div>
  );
}
