import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Car } from '../models/car.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarManagementService {
  baseUrl: string = 'https://localhost:7109/api/cars';

  constructor(private http: HttpClient) {}

  addCar(car: Required<Omit<Car, 'id'>>): Observable<void> {
    return this.http.post(this.baseUrl, car).pipe(map(() => {}));
  }

  deleteCarBy(id: number): Observable<void> {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(map(() => {}));
  }

  getAllCars(): Observable<Array<Car>> {
    return this.http.get(`${this.baseUrl}`).pipe(
      map((response) => {
        return response as Array<Car>;
      })
    );
  }
}
