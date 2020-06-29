import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MPesaService {
  
  getAccountBalance() {
    return this.http.get('api/m-pesa/balance');
  }
  
  simulateError() {
    return this.http.post('api/m-pesa/callback-url', {
      
      // "Result": {
      //   "ResultType": 0,
      //   "ResultCode": 2001,
      //   "ResultDesc": "The initiator information is invalid.",
      //   "OriginatorConversationID": "7488-6256766-1",
      //   "ConversationID": "AG_20190104_00004ce9fc41b15aa227",
      //   "TransactionID": "NA43XZPDE3",
      //   "ReferenceData": {
      //     "ReferenceItem": {
      //       "Key": "QueueTimeoutURL",
      //       "Value": "http:\/\/internalapi.safaricom.co.ke\/mpesa\/b2cresults\/v1\/submit"
      //     }
      //   }
      // }
    })
  }
  simulateResult() {
    return this.http.post('api/m-pesa/callback-url', {
      "Body": {
        "stkCallback": {
          "MerchantRequestID": "4358-8482324-1",
          "CheckoutRequestID": "ws_CO_240620201951034354",
          "ResultCode": 0,
          "ResultDesc": "The service request is processed successfully.",
          "CallbackMetadata": {
            "Item": [
              { "Name": "Amount", "Value": 1 },
              { "Name": "MpesaReceiptNumber", "Value": "OFO1800ZC1" },
              { "Name": "Balance" },
              { "Name": "TransactionDate", "Value": 20200624195156 },
              { "Name": "PhoneNumber", "Value": 254712692310 }]
          }
        }
      }
      // "Result": {
      //   "ResultType": 0,
      //   "ResultCode": 0,
      //   "ResultDesc": "The service request is processed successfully.",
      //   "OriginatorConversationID": "11369-5305957-1",
      //   "ConversationID": "AG_20190103_00004ad7c21029e28510",
      //   "TransactionID": "NA30XPKKVCW",
      //   "ResultParameters": {
      //     "ResultParameter": [
      //       {
      //         "Key": "TransactionAmount",
      //         "Value": 100
      //       },
      //       {
      //         "Key": "TransactionReceipt",
      //         "Value": "NA30XKHVCW"
      //       },
      //       {
      //         "Key": "ReceiverPartyPublicName",
      //         "Value": "2547XXXXXXX - JOHN DOE"
      //       },
      //       {
      //         "Key": "TransactionCompletedDateTime",
      //         "Value": "03.01.2019 17:48:32"
      //       },
      //       {
      //         "Key": "B2CUtilityAccountAvailableFunds",
      //         "Value": 4425.00
      //       },
      //       {
      //         "Key": "B2CWorkingAccountAvailableFunds",
      //         "Value": 0.00
      //       },
      //       {
      //         "Key": "B2CRecipientIsRegisteredCustomer",
      //         "Value": "Y"
      //       },
      //       {
      //         "Key": "B2CChargesPaidAccountAvailableFunds",
      //         "Value": 0.00
      //       }
      //     ]
      //   },
      //   "ReferenceData": {
      //     "ReferenceItem": {
      //       "Key": "QueueTimeoutURL",
      //       "Value": "http:\/\/internalapi.safaricom.co.ke\/mpesa\/b2cresults\/v1\/submit"
      //     }
      //   }
      // }
    });
  }

  constructor(private http: HttpClient) { }

  token$: Observable<any> = this.http.get('api/m-pesa/access-token');

  checkPaymentReceipt: ({ mobileNumber, amount }: any) => Observable<any> = ({ mobileNumber, amount }) =>
    this.http.get(`api/m-pesa/receipts/?query=${mobileNumber}&amount=${amount}`);
  
  lipaNaMPesa: ({ mobileNumber }: any) => Observable<any> = ({ mobileNumber }) =>
    this.http.post('api/m-pesa/lipa-na-mpesa', {
      mobile_number: mobileNumber
    });

}

