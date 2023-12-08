import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CarManagementService } from 'src/app/services/car-management.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
})
export class CarFormComponent {
  @Output() carAdded: EventEmitter<void> = new EventEmitter();
  isCarFormVisible: boolean = false;
  cardForm: FormGroup;

  constructor(
    private carManagementService: CarManagementService,
    private formBuilder: FormBuilder
  ) {
    this.cardForm = this.formBuilder.group({
      make: [null, [Validators.required]],
      model: [null, [Validators.required]],
      year: [null, [Validators.required]],
    });
  }

  get makeField() {
    return this.cardForm.get('make');
  }

  get modelField() {
    return this.cardForm.get('model');
  }

  get yearField() {
    return this.cardForm.get('year');
  }

  onSave(): void {
    if (this.cardForm.invalid) {
      return;
    }

    this.carManagementService.addCar(this.cardForm.value).subscribe({
      next: () => {
        this.carAdded.emit();
        this.hideCarForm();
        this.cardForm.reset();
      },
      error: (error: Error) => {
        console.log(
          '🚀 ~ file: car-form.component.ts:51 ~ CarFormComponent ~ this.carManagementService.addCar ~ error:',
          error
        );
      },
    });
  }

  onAddCar(): void {
    this.showCarForm();
  }

  onRemoveAddCar(): void {
    this.hideCarForm();
  }

  onCancel(): void {
    this.hideCarForm();
  }

  private showCarForm(): void {
    this.isCarFormVisible = true;
  }

  private hideCarForm(): void {
    this.isCarFormVisible = false;
  }
}
