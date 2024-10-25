interface WebpackRequireContext {
    keys: () => string[];
    (path: string): string;
}

function importAll(r: WebpackRequireContext) {
    let images: Record<string, string> = {};
    r.keys().forEach((item) => {
        const key = item
            .replace('./', '')
            .replace(/\.(png|jpg|gif|jpeg)$/, '');
        images[key] = r(item);
    });
    return images;
}

const images: Record<string, string> = importAll(require.context('../images', true, /\.(png|jpg|gif|jpeg)$/));

export default images;