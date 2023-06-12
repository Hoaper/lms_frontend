const isPasswordCorrect = (password: string) => {
    const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegExp.test(password);
}


export default isPasswordCorrect;