import chalk from "chalk";
import qr from "qrcode-terminal";

export async function handle(err, result) {
  if (err) {
    console.log("Ocorreu um erro: ", err);
    return;
  }

  const isSmall = result.type === "2";
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green.bold("QR Code gerado com sucesso: \n"));
    console.log(qrcode);
  });
}
