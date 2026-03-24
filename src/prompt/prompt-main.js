import chalk from "chalk";

export const mainPrompt = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a ferramenta (1 - QRCODE, 2 - PASSWORD)",
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Digite um número válido (1 ou 2)"),
    required: true,
  },
];
