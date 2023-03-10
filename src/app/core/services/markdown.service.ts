import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MarkdownService {
  constructor() {}

  public convertToMarkdownTable(
    headers: Array<string>,
    data: Array<any>
  ): string {
    let markdownTable = '|';

    for (let header of headers) {
      markdownTable = markdownTable.concat(' ', header, ' ', '|');
    }

    markdownTable = markdownTable.concat('\n', '|');

    for (let i = 0; i < headers.length; i++) {
      markdownTable = markdownTable.concat(' ', '---', ' ', '|');
    }

    markdownTable = markdownTable.concat('\n', '|');

    for (let [index, obj] of data.entries()) {
      for (let header of headers) {
        markdownTable = markdownTable.concat(
          ' ',
          String(obj[header]),
          ' ',
          '|'
        );
      }

      if (index !== data.length - 1) {
        markdownTable = markdownTable.concat('\n', '|');
      }
    }

    return markdownTable;
  }
}
