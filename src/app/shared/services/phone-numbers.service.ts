import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumbersService {
  lib: any;
  phoneUtil: any;
  constructor(private http: HttpClient) {
    this.lib = require('google-libphonenumber');
    this.phoneUtil = this.lib.PhoneNumberUtil.getInstance();
  }
  getAllowedCountries: () => Observable<any> = () => {
    return of(['KE', 'UG', 'RW', 'TZ', 'US', 'UK']);
  }

  getAllCountryCodes(): Observable<any> {
    const countries = require('google-libphonenumber').shortnumbermetadata.countryCodeToRegionCodeMap['0'];
    return of(countries.map((country: any) => {
      const code = this.phoneUtil.getCountryCodeForRegion(country);
      return { code, country };
    }).sort((a: any, b: any) => {
      const nameA = a.country.toUpperCase(); // ignore upper and lowercase
      const nameB = b.country.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    }));
  }
  isValidPhoneNumber(phoneNumber: any) {
    try {
      const testNumber = this.phoneUtil.parseAndKeepRawInput('+' + phoneNumber, 'KE');
      return this.phoneUtil.isPossibleNumber(testNumber);
    } catch (err) {
      return false;
    }

  }
  splitNumberFromCountryCode(phoneNumber: string): { code: string, phone: string } {
    const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
    try {
      const splitValues = phoneUtil.parse(/^\+(\w+\-?\s?)+/.test(phoneNumber.trim()) ? phoneNumber : '+' + phoneNumber).values_;
      return { code: splitValues[1], phone: splitValues[2] };
    } catch (error) {
      return { code: '', phone: phoneNumber};
    }
  }
}
