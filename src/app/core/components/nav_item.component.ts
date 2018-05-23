import { Component, Input } from '@angular/core';

@Component({
  selector: 'wed-nav-item',
  templateUrl: 'nav_item.component.html',
  styleUrls: ['nav_item.component.scss'],
})
export class NavItemComponent {
  @Input()
  public target: string;

  @Input()
  public title: string;
}
