import prompt from 'prompt'
import mainPrompt from './prompt-schemas/prompt-schema-main.js'
import GenerateQrCode from './services/qr-code/generate.js'
import GeneratePassword from './services/password/generate.js'
import generateShorterUrl from './services/url-shortener/generate.js'

(async function main(){

    prompt.get(mainPrompt, async (err, result) => {

        try {
            
            if(result.select == 1) await GenerateQrCode()
            if(result.select == 2) await GeneratePassword()
            if(result.select == 3) await generateShorterUrl()
            if(result.select == "") console.log("Voce nao escolheu nada" )

            
        } catch (error) {
            console.log('Error: ', error)
            
        }

    })

})()