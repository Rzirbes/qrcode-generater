import chalk from "chalk";

export const qrcodeSchema = [
  {
    name: "link",
    description: chalk.yellow.bold("Digite o link para gerar o QR Code"),
    required: true,
  },
  {
    name: "type",
    description: chalk.yellow.bold(
      "Escolha o tipo de QR Code (1 - Normal, 2 - Terminal)",
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Digite um número válido (1 ou 2)"),
    required: true,
  },
];
