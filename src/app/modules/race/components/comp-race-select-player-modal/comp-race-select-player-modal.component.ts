import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServMovkApiService } from 'src/app/services/serv-mock/serv-movk-api.service';

@Component({
  selector: 'app-comp-race-select-player-modal',
  templateUrl: './comp-race-select-player-modal.component.html',
  styleUrls: ['./comp-race-select-player-modal.component.scss'],
})
export class CompRaceSelectPlayerModalComponent implements OnInit {
  @ViewChild('closeModal') closeModal!: ElementRef;
  @Output() setPlayer = new EventEmitter();
  @Input() playerSelected!: string;

  public driversList: any;
  public carsList: any;

  public playerForm = new FormGroup({
    driver: new FormControl('', [Validators.required]),
    car: new FormControl(''),
  });

  constructor(
    private servApi: ServMovkApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.playerForm.value.player = this.playerSelected;

    this.servApi.getData('/drivers').subscribe((res: any) => {
      this.driversList = res;
    });

    this.servApi.getData('/cars').subscribe((res: any) => {
      this.carsList = res;
    });
  }

  public validField(field: any) {
    return (
      this.playerForm.get(field)?.invalid && this.playerForm.get(field)?.touched
    );
  }

  public submitForm() {
    if (this.playerForm.valid) {
      let items = {
        player: this.playerSelected,
        driver: this.playerForm.value.driver,
        car: this.playerForm.value.car,
      };
      this.setPlayer.emit(items);
      this.closeModal.nativeElement.click();
      this.toastr.success(this.playerSelected + ' selected!');
    } else {
      this.toastr.error('Complete all fields!');
    }
  }
}
