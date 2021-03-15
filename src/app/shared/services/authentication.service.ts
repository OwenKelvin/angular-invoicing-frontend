import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject, EMPTY } from 'rxjs';
import * as oauthClient from 'src/environments/environment';
import { UserInterface } from '../interfaces/user.interface';
import { IUserProfile } from '../interfaces/user-profile.interface';
import { map, catchError, tap } from 'rxjs/operators';
import { OauthInterface } from '../interfaces/oauth.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {
    let storedUser: any = JSON.parse(String(sessionStorage.getItem('currentUser')));
    if (!storedUser) {
      storedUser = JSON.parse(String(localStorage.getItem('currentUser')));
    }

    this.currentUserSubject = new BehaviorSubject<UserInterface>(storedUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }
  get authorizationToken(): string | undefined {
    const currentUser = JSON.parse(String(sessionStorage.getItem('currentUser')));
    if (!currentUser) {
      JSON.parse(String(localStorage.getItem('currentUser')));
    }
    if (currentUser) {
      return `Bearer ${currentUser.access_token}`;
    }
    return;
  }
  public get currentUserValue(): UserInterface | null {
    return this.currentUserSubject.value;
  }
  public get currentUserProfile$(): Observable<IUserProfile> {
    if (!this.authorizationToken) { return EMPTY; }
    return this.http.get('api/users/auth')
      .pipe(map((res: any) => {
        return {
          ...res,
          id: res.id,
          firstName: res.first_name,
          lastName: res.last_name,
          middleName: res.middle_name,
          otherNames: res.other_names,
          phone: res.phone,
          email: res.email,
          dateOfBirth: res.date_of_birth,
          religionName: res.religion_name,
          genderName: res.gender_name
        };
      }));
  }
  OAuth: OauthInterface = {
    grant_type: oauthClient.PASSPORT_CLIENT_GRANT_TYPE,
    client_id: oauthClient.PASSPORT_CLIENT_CLIENT_ID,
    client_secret: oauthClient.PASSPORT_CLIENT_CLIENT_SECRET,
    username: '',
    password: '',
    scope: '',
  };
  private currentUserSubject: BehaviorSubject<UserInterface | null>;
  public currentUser: Observable<UserInterface | null>;
  revokeToken: Observable<any> = this.http.get('api/users/auth/logout');
  changePassword(data: any) {
    const submitData = {
      token: data.token,
      old_password: data.oldPassword,
      new_password: data.newPassword,
      new_password_confirmation: data.newPasswordConfirmation,
    };
    return this.http.post('api/password/reset', submitData);
  }
  tokenLogin(data: { token: string; }): Observable<any> {
    const url = `api/password/token`;
    return this.http.post<any>(url, data)
      .pipe(
        map(user => {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return { ...user, ...data };
        }),
        catchError(error => throwError(error))
      );
  }

  contactAdmin(data: { email: string; }) {
    // TODO-me Authentication Service Contact admin
    console.log(data);
    return of({ message: 'Feature coming soon' });
  }
  resetPassword(email: { email: string; }) {
    return this.http.post('api/password/email', email);
  }
  login(data: { username: string, password: string; rememberMe: boolean; }): Observable<any> {
    const { username, password, rememberMe } = data;
    const url = `api/oauth/token`;

    return this.http.post<any>(url, { ...this.OAuth, password, username })
      .pipe(
        tap((user) => rememberMe ? localStorage.setItem('currentUser', JSON.stringify(user)) : ''),
        tap((user) => !rememberMe ? sessionStorage.setItem('currentUser', JSON.stringify(user)) : ''),
        tap((user) => this.currentUserSubject.next(user)),
        catchError(error => throwError(error))
      );
  }
  logout(): Observable<any> {
    return this.revokeToken.pipe(
      catchError(() => {
        sessionStorage.removeItem('currentUser');
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        return EMPTY;
      }),
      tap(() => {
        sessionStorage.removeItem('currentUser');
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
      })
    );
  }
}
