import { Component } from '@angular/core';
import { cdtTab } from './content/cdt-tab';

@Component({
  selector: 'app-cdt',
  templateUrl: './cdt.component.html',
  styleUrls: ['./cdt.component.scss'],
})
export class CdtComponent {
  public cdtTab = cdtTab;
}
