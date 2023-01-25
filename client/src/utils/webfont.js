import WebFont from 'webfontloader';

const loadWebFont = async (font) => {
    WebFont.load({
        google: {
            families: font
        }
    });
}

export default loadWebFont;