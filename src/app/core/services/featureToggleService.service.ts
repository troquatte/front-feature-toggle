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
      .get<IFeatureToggleResponse>(
        `${this.url}/consumer/a80a280c-0633-4438-a952-39d7ec8f3409/dev`
      )
      .pipe(
        map((res) => {
          console.log(res);
          return res;
        })
      );
  }
}
