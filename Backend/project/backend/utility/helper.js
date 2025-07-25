function generateUniqueImageName(name) {
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36);
    return `${timestamp}_${randomStr}_${name}`;
}

module.exports = { generateUniqueImageName };
