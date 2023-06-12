const isEmailCorrect = (email: string) => {
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegExp.test(email);
}

export default isEmailCorrect