let lastCapturedError: { error: unknown; at: number } | undefined;
const TTL_MS = 5_000;
function record(error: unknown) { lastCapturedError = { error, at: Date.now() }; }
export function describeError(error: unknown): string {
  const parts: string[] = [];
  let current: unknown = error;
  for (let depth = 0; depth < 5 && current != null; depth++) {
    if (!(current instanceof Error)) { parts.push(typeof current === "string" ? current : JSON.stringify(current)); break; }
    parts.push(`${depth === 0 ? "" : "caused by: "}${current.stack ?? `${current.name}: ${current.message}`}`);
    current = current.cause;
  }
  return parts.join("\n").slice(0, 8_000);
}
const originalConsoleError = console.error.bind(console);
console.error = (...args: unknown[]) => {
  originalConsoleError(...args.map((arg) => { if (arg instanceof Error) { record(arg); return describeError(arg); } return arg; }));
};
if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => record((event as ErrorEvent).error ?? event));
  globalThis.addEventListener("unhandledrejection", (event) => record((event as PromiseRejectionEvent).reason));
}
export function consumeLastCapturedError(): unknown {
  if (!lastCapturedError || Date.now() - lastCapturedError.at > TTL_MS) { lastCapturedError = undefined; return undefined; }
  const { error } = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}