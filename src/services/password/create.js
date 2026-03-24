import { handle } from "./handle.js";

export async function createPassword() {
  const passwordPrompt = await handle();
  console.log(passwordPrompt);
}
