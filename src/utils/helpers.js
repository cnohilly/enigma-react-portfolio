export function validateEmail(email) {
    const re = /[0-9A-z-_.]+[0-9A-z]+@[0-9A-z]+[0-9A-z.]+[0-9A-z]+\.[A-z]+[A-z.]+[A-z]+/;
    return re.test(String(email));
}