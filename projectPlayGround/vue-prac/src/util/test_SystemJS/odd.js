// odd.js
import { even } from './even';
export function odd(n) {
  return n != 0 && even(n - 1);
}
