import { handle } from "./handle.js";
import prompt from "prompt";

export async function createPassword() {
  const passwordPrompt = await handle();
  console.log(passwordPrompt);
}
