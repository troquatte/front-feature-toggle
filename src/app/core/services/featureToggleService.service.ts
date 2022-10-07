import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interfaces
import {
  IFeatureToggle,
  IFeatureToggleResponse,
} from '../interface/feature-toggle.interface';

@Injectable({
  providedIn: 'root',
})
export class FeatureToggleService {
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

  public consumer(): Observable<IFeatureToggleResponse> {
    return this.http
      .post<IFeatureToggleResponse>(
        `${this.url}/consumer/6340737207dfe6aaf73a6940`,
        {
          apiKey: '953106f9-269a-41ba-abe2-0a5fd7030f9e',
          env: 'prod',
        }
      )
      .pipe(map((res) => res));
  }
}
