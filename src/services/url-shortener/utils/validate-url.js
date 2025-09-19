
async function isValidUrl(url) {
    const urlRegex = /^(https?:\/\/)?([\w\d\-]+\.)+[\w]{2,}(\/.*)?$/;
    return urlRegex.test(url);
}

export default isValidUrl;