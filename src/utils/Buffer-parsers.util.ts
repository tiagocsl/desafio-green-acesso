import { Readable } from 'stream';
import readLine from 'readline';
import * as pdfjsLib from 'pdfjs-dist';
import { TextItem } from 'pdfjs-dist/types/src/display/api';

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

export const getCSVText = async (billetBuffer: Buffer) => {
    const billetCSVLines = await csvFileLineReader(billetBuffer);
    const fileDataParsed = await billetParser(billetCSVLines, 'csv');

    return fileDataParsed;
};

export const billetParser = async (data: string[], fileType: string) => {
    const billets: {
        residentName: string;
        lotNumber: number;
        value: number;
        billetCode: string;
    }[] = [];
    const limiter = fileType == 'csv' ? ';' : ' ';
    data.forEach((line) => {
        const lineData = line.split(limiter);
        billets.push({
            residentName: lineData[0],
            lotNumber: Number(lineData[1]),
            value: Number(lineData[2]),
            billetCode: lineData[3],
        });
    });

    return billets;
};

const getPageText = async (pdf: pdfjsLib.PDFDocumentProxy, pageNo: number) => {
    const page = await pdf.getPage(pageNo);
    const tokenizedText = await page.getTextContent();

    const pageText = tokenizedText.items
        .map((token) => (token as TextItem).str)
        .join('');
    return pageText;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPDFText = async (source: any) => {
    const pdf = await pdfjsLib.getDocument({ data: source }).promise;
    const maxPages = pdf.numPages;

    const pageTextPromises = [];

    for (let pageNo = 1; pageNo <= maxPages; pageNo++) {
        pageTextPromises.push(getPageText(pdf, pageNo));
    }
    const pageTexts = await Promise.all(pageTextPromises);

    const fileDataParsed = await billetParser(pageTexts, 'pdf');
    return fileDataParsed;
};
