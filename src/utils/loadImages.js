function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
        const key = item
            .replace('./', '')  // Remove leading './'
            .replace(/\.(png|jpg|gif|jpeg)$/, '');  // Remove file extension
        images[key] = r(item);
    });
    return images;
}

const images = importAll(require.context('../images', true, /\.(png|jpg|gif|jpeg)$/));  // Include subdirectories

export default images;