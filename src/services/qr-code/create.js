import prompt from "prompt";
import { qrcodePrompt } from "../../prompt/prompt-qrcode.js";
import { handle } from "./handle.js";

export async function createQRCode() {
  prompt.get(qrcodePrompt, handle);

  prompt.start();
}
