import prompt from "prompt";
import { qrcodeSchema } from "../../prompt-schema/schema-qrcode.js";
import { handle } from "./handle.js";

export async function createQRCode() {
  prompt.get(qrcodeSchema, handle);

  prompt.start();
}
