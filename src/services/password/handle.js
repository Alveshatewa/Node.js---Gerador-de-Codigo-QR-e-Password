import permitedCharacters from "./utils/permitedCharacters.js";
async function handle(){

    let character = []
    let password = ''
    const passwordLength = process.env.LENGTH
    
    character = await permitedCharacters()
    
    for(let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * character.length);
        password += character[index]
    }

    return password;
}

export default handle;