import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-banner',
  templateUrl: './name-banner.component.html',
  styleUrls: ['./name-banner.component.scss']
})
export class NameBannerComponent {
  @Input('name') name: string = ''
  count: number = 0

  add() {
    this.count++
  }
}
