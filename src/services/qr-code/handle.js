import qrCode from 'qrcode-terminal'
import chalk from 'chalk'

async function handleQrCode( err, result ) {

    if(err){
        console.log("Error on application while generating QRCODE", err)
        return
    }

    const isSmall = result.type == 2

    qrCode.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(chalk.green('QRCODE GERADO COM SUCESSO! \n'))
        console.log(qrcode)
    })
}

export default handleQrCode