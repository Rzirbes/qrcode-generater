import prompt from "prompt";
import { mainPrompt } from "./prompt/prompt-main.js";
import chalk from "chalk";
import { createQRCode } from "./services/qr-code/create.js";
import { createPassword } from "./services/password/create.js";

async function main() {
  prompt.get(mainPrompt, async (err, choose) => {
    if (choose.select === "1") createQRCode();
    if (choose.select === "2") createPassword();
  });

  prompt.start();
}

await main();
