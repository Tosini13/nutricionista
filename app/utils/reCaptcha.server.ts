const getUrl = (secret: string, token: string) => 
`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
const METHOD = 'post';
const SECRET = process.env.RECAPTCHA_SECRET_KEY;

type ReturnType = {
    success: boolean;
    errors?: string[];
}

export const verifyReCaptcha = async (token: string): Promise<ReturnType> => {

    if(!SECRET){
        return {
            success: false,
            errors: ['secret-not-found']
        };
    }
    
    const res = await (await fetch(getUrl(SECRET as string, token), {
        method: METHOD,
    })).json();
  
    return {
        success: res.success,
        errors: res['error-codes']
    };
}