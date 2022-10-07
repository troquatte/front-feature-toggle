import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// Interfaces
import {
  IFeatureToggle,
  IFeatureToggleResponse,
} from '../interface/feature-toggle.interface';

@Injectable({
  providedIn: 'root',
})
export class ListAllService {
  private url = 'http://localhost:3000/feature-toggle';

  constructor(private http: HttpClient) {}

  public findAll(): Observable<Array<IFeatureToggle>> {
    return this.http
      .get<Array<IFeatureToggle>>(this.url)
      .pipe(map((res) => res));
  }

  public create(IFeatureToggle: IFeatureToggle): Observable<IFeatureToggle> {
    const body = IFeatureToggle;
    return this.http
      .post<IFeatureToggle>(`${this.url}`, body)
      .pipe(map((res) => res));
  }

  public read(id: string): Observable<IFeatureToggle> {
    return this.http
      .get<IFeatureToggle>(`${this.url}/${id}`)
      .pipe(map((res) => res));
  }

  public update(IFeatureToggle: IFeatureToggle): Observable<IFeatureToggle> {
    const body = IFeatureToggle;
    return this.http
      .put<IFeatureToggle>(`${this.url}`, body)
      .pipe(map((res) => res));
  }

  public delete(id: string): Observable<IFeatureToggle> {
    return this.http
      .delete<IFeatureToggle>(`${this.url}/${id}`)
      .pipe(map((res) => res));
  }

  public consumer(
    id: string = '6340688ad8976855ac7625ab'
  ): Observable<IFeatureToggleResponse> {
    return this.http
      .post<IFeatureToggleResponse>(`${this.url}/consumer/${id}`, {
        apiKey: 'e0fdfcf2-32de-4074-8214-1b65794e6fba',
        env: 'prod',
      })
      .pipe(map((res) => res));
  }
}
