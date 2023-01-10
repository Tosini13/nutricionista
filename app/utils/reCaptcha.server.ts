const URL = 'https://www.google.com/recaptcha/api/siteverify';
const METHOD = 'post';

export const verifyReCaptcha = async (token: string) => {
    const body = {
        secret: process.env.RECAPTCHA_SECRET_KEY_DEV,
        response: token,
    };
    
    console.log('body !log!', body);
    
    
    const res = await fetch(URL, {
        method: METHOD,
        body: JSON.stringify(body)
    });

    return res;
}