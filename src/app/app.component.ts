import { Component } from '@angular/core';
import { CarManagementService } from './services/car-management.service';
import { Car } from './models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Car Management Application';

  isCarsDataLoading: boolean = false;
  isCarRemovingInProcess: boolean = false;
  cars: Array<Car> = [];

  constructor(private carManagementService: CarManagementService) {
    this.getCars();
  }

  onCarAdded(): void {
    this.getCars();
  }

  onRemoveCar(id: number): void {
    this.carManagementService.deleteCarBy(id).subscribe({
      next: () => this.getCars(),
    });
  }

  private getCars() {
    this.carManagementService.getAllCars().subscribe({
      next: (cars) => {
        this.cars = cars;
      },
      error: (error: Error) => {
        console.log(
          '🚀 ~ file: app.component.ts:18 ~ AppComponent ~ this.carManagementService.getAllCars ~ error:',
          error
        );
      },
    });
  }

  private startCarDataLoading(): void {
    this.isCarsDataLoading = true;
  }

  private stopCarDataLoading(): void {
    this.isCarsDataLoading = true;
  }

  private startRemovingCarProcess(): void {
    this.isCarRemovingInProcess = true;
  }

  private stopRemovingCarProcess(): void {
    this.isCarRemovingInProcess = true;
  }
}
