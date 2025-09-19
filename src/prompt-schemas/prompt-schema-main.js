import chalk from 'chalk'
const promptMain = [
    {
        name: "select",
        description: chalk.blue ("Escolha a ferramenta que deseja utilizar: 1) - QRCODE GENERATOR, 2) - PASSWORD GENERATOR, 3) - Encurtador de URL"),
        pattern: /^[1-3]+$/,
        message: chalk.red("Escolha apenas entre 1, 2 e 3"),
        required: true,

    }
]

export default promptMain;