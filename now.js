export default function () {
  const oldNow = Date.now() || new Date().getTime();
  const newNow = global.performance?.now ? (global.performance.now() + global.performance.timeOrigin) : oldNow;
  return newNow; // browser microsecond precision via global.performance (if possible) ie. newNow: performance.now() with fallback to oldNow: Date.now() xor new Date().getTime()
}
