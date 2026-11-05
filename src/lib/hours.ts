import type { OpeningHours } from "@/config/types";

const DAY_ABBR: Record<string, string> = {
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
  Sunday: "Sun",
};

function formatTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, "0")}${suffix}` : `${hour}${suffix}`;
}

function formatDays(days: string[]) {
  const abbr = days.map((d) => DAY_ABBR[d] ?? d);
  return abbr.length > 2 ? `${abbr[0]}–${abbr[abbr.length - 1]}` : abbr.join(" & ");
}

/** { days: [Mon..Fri], opens: "08:00", closes: "18:00" } → "Mon–Fri: 8am–6pm" */
export function formatHours(h: OpeningHours) {
  return `${formatDays(h.days)}: ${formatTime(h.opens)}–${formatTime(h.closes)}`;
}
