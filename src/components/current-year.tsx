"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Reads the year on the client only. The prerendered HTML can't call
 * `new Date()` (Cache Components), and a build-time year would go stale.
 */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <>{year}</>;
}
