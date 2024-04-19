#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { glob } from 'glob';
import { decode } from 'html-entities';

// React will encode quotes and etc that might be used within liquid expressions into entites.
// Hence we need to decode those for liquid to render properly
export const decodeEntities = async () => {
    const generatedEmailPaths = glob.sync(path.join(process.cwd(), 'out', '**/*.html'))

    for (const emailPath of generatedEmailPaths) {
        const html = decode(readFileSync(emailPath, { 'encoding': 'utf-8' }));
        writeFileSync(emailPath, html, { encoding: 'utf-8' });
    }
};

decodeEntities();