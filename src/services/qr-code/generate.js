import prompt from 'prompt'
import QrCode from '../../prompt-schemas/prompt-schema-qrCode.js'
import handleQrCode from './handle.js'

async function generteQrCode(){

    prompt.get(QrCode, handleQrCode)

    prompt.start()

}

export default generteQrCode