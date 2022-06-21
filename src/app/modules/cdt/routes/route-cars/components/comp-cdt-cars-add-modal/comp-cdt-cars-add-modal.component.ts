import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServMovkApiService } from 'src/app/services/serv-mock/serv-movk-api.service';
// declare var jQuery: any;

@Component({
  selector: 'app-comp-cdt-cars-add-modal',
  templateUrl: './comp-cdt-cars-add-modal.component.html',
  styleUrls: ['./comp-cdt-cars-add-modal.component.scss'],
})
export class CompCdtCarsAddModalComponent {
  public carForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    category: new FormControl(''),
    image: new FormControl('', [Validators.required]),
  });

  constructor(
    private servApi: ServMovkApiService,
    private toastr: ToastrService
  ) {}

  public validField(field: any) {
    return this.carForm.get(field)?.invalid && this.carForm.get(field)?.touched;
  }

  public submitForm() {
    console.log(this.carForm.value);
    if (this.carForm.valid) {
      this.postCar(this.carForm.value);
    } else {
      this.toastr.error('Complete all fields!');
      // jQuery('#addCarModal').modal('hide');
    }
  }

  private postCar(data: any) {
    this.servApi.postData('/cars', data).subscribe(() => {
      this.toastr.success('New car added!');
      // FECHA MODAL e RECARREGA LISTA
    });
  }
}
