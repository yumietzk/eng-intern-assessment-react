// Convert the time state to an ISO string, and extract the time portion(xx:xx:xx) from the ISO string
export function formatTime(time: number) {
  return new Date(time * 10).toISOString().slice(11, -2);
}
