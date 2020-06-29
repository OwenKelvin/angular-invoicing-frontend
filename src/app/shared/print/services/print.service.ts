import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  popupPrint(selector: string) {
    const printContents = (document.querySelector(selector) as HTMLTableElement).innerHTML;
    const popupWin = window.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
    popupWin?.document.open();
    popupWin?.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
            .d-flex  {
              width: 100%;
              display: flex;
              justify-content: between;
            }
            .table {
              text-align: left;
              width: 100%;
              margin-bottom: 1rem;
            }
            .table td, .table th {
              padding: .75rem;
              vertical-align: top;
              border-top: 1px solid #dee2e6;
            }
            td {
              display: table-cell;
            }
            @media print {
              .d-print-none {
                display: none;
              }
            }
          </style>
        </head>
        <body>
          <section class='d-print-none'>
            <button onclick="window.print();">Print</button>
            <button onclick="window.close();">Cancel</button>
          </section>
         ${printContents}
        </body>
        <script>
          window.print();
        </script>
      </html>`
    );
  }

  constructor() { }
}
