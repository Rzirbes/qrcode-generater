import prompt from "prompt";
import { mainSchema } from "./prompt-schema/schema-main.js";
import { createQRCode } from "./services/qr-code/create.js";
import { createPassword } from "./services/password/create.js";

async function main() {
  prompt.get(mainSchema, async (err, choose) => {
    if (choose.select === "1") createQRCode();
    if (choose.select === "2") createPassword();
  });

  prompt.start();
}

await main();
