import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServMovkApiService } from 'src/app/services/serv-mock/serv-movk-api.service';

@Component({
  selector: 'app-route-drivers',
  templateUrl: './route-drivers.component.html',
  styleUrls: ['./route-drivers.component.scss'],
})
export class RouteDriversComponent implements OnInit {
  public drivers: any;

  constructor(
    private servMock: ServMovkApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getData('/drivers');
  }

  private getData(endpoint: string) {
    this.servMock.getData(endpoint).subscribe((res) => {
      this.drivers = res;
    });
  }

  public deleteData(id: string, name: string) {
    if (confirm('Tem certeza que vai deletar o piloto ' + name + '?') == true) {
      this.servMock.deleteData('/drivers/', id).subscribe(() => {
        this.toastr.success('Deleted driver!');
        this.getData('/drivers');
      });
    }
  }
}
