import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input({required: true}) page!: string
  user = input.required<string>()

  @Output() clickHandler = new EventEmitter()
  select = output()

  onClickHandler(){
    this.clickHandler.emit()
  }

  onSelectHandler(){
    console.log("aha")
    this.select.emit()
  }
}
