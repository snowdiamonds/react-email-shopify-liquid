
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

import { glob } from 'glob';
import { decode } from 'html-entities';

export const decodeShopifyEmails = async () => {
    const generatedEmailPaths = glob.sync(path.join(process.cwd(), 'out', '**/*.html'))

    for (const emailPath of generatedEmailPaths) {
        const html = decode(readFileSync(emailPath, { 'encoding': 'utf-8' }));
        writeFileSync(emailPath, html, { encoding: 'utf-8' });
    }
};

decodeShopifyEmails();