import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss'],
})
export class CarTableComponent {
  @Input() cars: Array<Car> = [];
  @Output() removeCar: EventEmitter<number> = new EventEmitter();
  displayedColumns: Array<string> = ['make', 'model', 'year', 'actions'];

  onRemoveCar(id: number): void {
    this.removeCar.emit(id);
  }
}
