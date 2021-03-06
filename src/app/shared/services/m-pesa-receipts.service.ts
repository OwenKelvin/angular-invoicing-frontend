import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MPesaReceiptsService {
  url = 'api/m-pesa/receipts';
  constructor(private http: HttpClient) { }

  getReceipts(data: { startDate: string, endDate: any }) {
    const queryParams = {
      start_date: data.startDate,
      end_date: data.endDate
    };
    return this.http.get<any[]>(this.url, {params: queryParams}).pipe(
      map(res => res.map(item => ({
        ...item,
        ref: item.trans_id,
        dateTime: item.trans_time,
        mobileNumber: item.receiver_party.split('-')[0],
        name: item.receiver_party.split('-')[1],
        amount: item.trans_amount
      })))
    );
  }
}
