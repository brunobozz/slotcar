import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-quick-link',
  templateUrl: './comp-quick-link.component.html',
  styleUrls: ['./comp-quick-link.component.scss'],
})
export class CompQuickLinkComponent {
  @Input() links: any;
}
