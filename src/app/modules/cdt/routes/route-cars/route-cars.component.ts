import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServMovkApiService } from 'src/app/services/serv-mock/serv-movk-api.service';

@Component({
  selector: 'app-route-cars',
  templateUrl: './route-cars.component.html',
  styleUrls: ['./route-cars.component.scss'],
})
export class RouteCarsComponent implements OnInit {
  public cars: any;

  constructor(
    private servMock: ServMovkApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getData('/cars');
  }

  private getData(endpoint: string) {
    this.servMock.getData(endpoint).subscribe((res) => {
      this.cars = res;
    });
  }

  public deleteData(car: any) {
    if (
      confirm('Tem certeza que vai deletar o carro ' + car.name + '?') == true
    ) {
      this.servMock.deleteData('/cars/', car.id).subscribe(() => {
        this.toastr.success('Deleted car!');
        this.getData('/cars');
      });
    }
  }
}
