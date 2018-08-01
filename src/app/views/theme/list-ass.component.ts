import { Component, OnInit } from '@angular/core';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
@Component({
  selector: 'app-list-ass',
  templateUrl: './list-ass.component.html',
})
export class ListASSComponent implements OnInit {

  public themeColors(): void {
    Array.from(document.querySelectorAll('.theme-color')).forEach(function(el) {
      let elem = document.getElementsByClassName(el.classList[0])[0];
      let background = getStyle('background-color', elem);

      let table = document.createElement('table');
      el.parentNode.appendChild(table);
    });

  }

  ngOnInit(): void {
    this.themeColors();
  }
}
