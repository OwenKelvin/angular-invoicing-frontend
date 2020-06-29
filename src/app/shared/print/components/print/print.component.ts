import { Component, OnInit, Input } from '@angular/core';
import { PrintService } from '../../services/print.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.less']
})
export class PrintComponent implements OnInit {

  @Input() selector: string;
  constructor(private printService: PrintService) { }

  ngOnInit(): void {
  }

  print(): void {
    this.printService.popupPrint(this.selector);
  }

}
