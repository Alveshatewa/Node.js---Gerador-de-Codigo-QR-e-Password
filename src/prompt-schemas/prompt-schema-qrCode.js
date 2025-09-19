import chalk from 'chalk'

const promptQrCode = [
    {
        name: "link",
        description: chalk.white.bold ("Insira o link que deseja transformar em QR CODE: "),
    },
    {
        name: "type",
        description: chalk.white.bold ("Escolha o tipo de QR CODE que deseja gerar: 1) -IMAGEM PNG, 2) - QRCODE NO TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 ou 2"),
        required: true
    }
]

export default promptQrCode;