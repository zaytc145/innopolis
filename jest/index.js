const checkName = (name) => {
    if (name.length < 5) {
        return false;
    }

    const isFirstLetterUppercase = /^[A-Z]/.test(name);

    if (!isFirstLetterUppercase) {
        return false;
    }

    return true;
}

module.exports = {
    checkName
};