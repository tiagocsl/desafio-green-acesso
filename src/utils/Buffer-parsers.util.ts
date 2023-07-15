import { Readable } from 'stream';
import readLine from 'readline';

export const fileBufferParser = (fileBuffer: Buffer) => {
    const readableFile = new Readable();
    readableFile.push(fileBuffer);
    readableFile.push(null);

    return readableFile;
};

export const csvFileLineReader = async (csvBuffer: Buffer) => {
    const csvFileReadable = fileBufferParser(csvBuffer);
    const csvLines = readLine.createInterface({
        input: csvFileReadable,
    });

    const parsedCSVLines: string[] = [];
    for await (const line of csvLines) {
        parsedCSVLines.push(line);
    }

    return parsedCSVLines;
};

export const billetCSVParser = async (billetBuffer: Buffer) => {
    const billetCSVLines = await csvFileLineReader(billetBuffer);
    const billets: {
        residentName: string;
        lotNumber: number;
        value: number;
        billetCode: string;
    }[] = [];

    billetCSVLines.forEach((line) => {
        const lineData = line.split(';');
        billets.push({
            residentName: lineData[0],
            lotNumber: Number(lineData[1]),
            value: Number(lineData[2]),
            billetCode: lineData[3],
        });
    });

    return billets;
};
