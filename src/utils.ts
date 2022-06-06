import axios from "axios";

export async function downloadImageToDataURL(url: string): Promise<string | null> {
    const response = await axios.get(url, {
        responseType: 'arraybuffer',
        validateStatus: status => status >= 200 && status < 300
    }).then(res => {
        const data = Buffer.from(res.data, 'binary').toString('base64');
        const mime = res.headers['content-type'];

        return `data:${mime};base64,${data}`;
    }).catch(err => {
        if(!process.env.HIDE_TRANSCRIPT_ERRORS) {
            console.error(`Failed to download image for transcript: `, err);
        }

        return null;
    });

    return response;
}

// https://stackoverflow.com/questions/6639770/how-do-i-get-the-unicode-hex-representation-of-a-symbol-out-of-the-html-using-ja
export const charCodeUTF32 = (char: string): number => {
    return ((((char.charCodeAt(0)-0xD800)*0x400) + (char.charCodeAt(1)-0xDC00) + 0x10000));
}