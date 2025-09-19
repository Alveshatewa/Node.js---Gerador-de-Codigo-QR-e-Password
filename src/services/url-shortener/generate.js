import prompt from 'prompt';
import crypto from 'crypto'
import isValidUrl from './utils/validate-url.js';
import chalk from 'chalk';

const urlDatabase = new Map(); 

async function generateShorterUrl() {

    return new Promise((resolve) => {

        prompt.start();

        console.log(chalk.yellow.bold("Informe a URL que deseja encurtar:"));

        prompt.get(['url'], (err, result) => {

            if (err) {
                console.log(chalk.red.bold("Erro ao receber a URL:", err));
                resolve();
                return;
            }

            const originalUrl = result.url;

            if (!isValidUrl(originalUrl)) {

                console.log(chalk.red.bold("URL inválida. Tente novamente."));
                resolve();
                return;
            }

            const shortCode = crypto.randomBytes(4).toString('hex'); 
            urlDatabase.set(shortCode, originalUrl);

            console.log(chalk.yellow.bold(`URL encurtada: http://${shortCode}`));
            resolve();
        });
    });
}

export default generateShorterUrl;

