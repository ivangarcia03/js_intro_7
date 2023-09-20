function logMessage() {
    console.log(`this inside normal function `, this)
}

const logMessage2 = () => {
    console.log(`this inside arrow function`, this);
}

logMessage();
logMessage2();

const person3 = {
    name: 'Bali',
    languages: ['English', 'Albaninan', 'Arabic', 'Chinese'],
    PrintLanguages() {
        const modifieLand = this.languages.map((lang) => {
            const languages = ['Spanish']
            // console.log(lang);
            // console.log(this);
            return `--${this.languages.length} - ${lang}`;
        })
        console.log(modifieLand) // []

    }
}

person3.PrintLanguages();