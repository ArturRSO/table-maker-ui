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

  public importMarkdownTable(markdownTable: string): Promise<TableObject> {
    return new Promise((resolve, reject) => {
      // Check parameter
      if (!markdownTable) {
        reject('Invalid markdown table!');
      }

      // Split by line
      const splittedMdTable = markdownTable.split(/\r?\n/);

      // Check if it's a valid markdown table
      splittedMdTable.forEach((line) => {
        if (
          !line.match(
            /(?<=(\r?\n){2}|^)([^\r\n]*\|[^\r\n]*(\r?\n)?)+(?=(\r?\n){2}|$)/
          )
        ) {
          reject('Invalid markdown table!');
        }
      });

      // Remove header indicator (| --- |)
      const splittedMdTableWithoutHeaderIndicator = this.removeFromArrayByIndex(
        splittedMdTable,
        1
      );

      // Get table headers
      const dirtyHeaders = splittedMdTableWithoutHeaderIndicator[0]
        .split('|')
        .filter((header) => header.length > 0);

      const headers = this.trimElements(dirtyHeaders);

      // Remove headers
      const splittedMdTableWithoutHeaders = this.removeFromArrayByIndex(
        splittedMdTableWithoutHeaderIndicator,
        0
      );

      // Table data array
      const data = [];

      // Iterate each line of markdown table body
      for (let line of splittedMdTableWithoutHeaders) {
        let dataList = line.split('|').filter((line) => line.length > 0);
        let obj: any = {};

        // Iterate each cell from markdown table line
        for (let i = 0; i < dataList.length; i++) {
          obj[headers[i]] = dataList[i].trim();
        }

        data.push(obj);
      }

      resolve({
        tableHeaders: headers,
        tableData: data,
      });
    });
  }

  private removeFromArrayByIndex(
    array: Array<string>,
    index: number
  ): Array<string> {
    const halfBeforeTheUnwantedElement = array.slice(0, index);
    const halfAfterTheUnwantedElement = array.slice(index + 1);

    return halfBeforeTheUnwantedElement.concat(halfAfterTheUnwantedElement);
  }

  private trimElements(array: Array<string>): Array<string> {
    return array.map((element) => element.trim());
  }
}

interface TableObject {
  tableHeaders: Array<string>;
  tableData: Array<any>;
}
