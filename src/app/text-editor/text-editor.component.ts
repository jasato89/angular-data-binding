import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  input: string;
  fontSize: number;

  constructor() {
    this.input = "";
    this.fontSize = 12;
  }

  ngOnInit(): void {
  }

  increaseSize(): void {
    this.fontSize++;
  }
  decreaseSize(): void {
    if (this.fontSize > 0) {
      this.fontSize--;
    }
  }

}
