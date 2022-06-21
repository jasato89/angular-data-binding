import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = "Bienvenidos a mi web";
  date: string;
  placeholder: string;
  isDisabled: boolean;
  textArea: string;
  elements: Array<string>;
  backgroundColor: string;
  color: string;
  isDarkModeEnabled: boolean;
  darkText: string;

  constructor() {
    this.date = new Date().toLocaleDateString("es") + " " + new Date().toLocaleTimeString("es");
    this.placeholder = "Inserta tu texto aqui";
    this.isDisabled = true;
    this.textArea = '';
    this.elements = [];
    this.backgroundColor = "white";
    this.color = "black";
    this.isDarkModeEnabled = false;
    this.darkText = "Activar modo oscuro";
  }

  ngOnInit() {

  }


  disableButton() {
    this.isDisabled = !this.isDisabled;
  }

  showAlert() {
    window.alert(this.textArea);

  }

  addElement() {
    this.elements.push(this.textArea);

  }

  enableDarkMode() {
    if (this.isDarkModeEnabled) {
      this.backgroundColor = "white";
      this.color = "black";
      this.darkText = "Activar modo oscuro";
      this.isDarkModeEnabled = false;

    } else {

      this.backgroundColor = "black";
      this.color = "white";
      this.darkText = "Activar modo claro";
      this.isDarkModeEnabled = true;

    }

  }

}
