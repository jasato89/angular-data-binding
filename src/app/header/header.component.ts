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

  constructor() {
    this.date = new Date().toLocaleDateString("es");
    this.placeholder = "Inserta tu texto aqui";
    this.isDisabled = true;
  }

  ngOnInit() {
    
  }

  disableButton() {
    this.isDisabled = !this.isDisabled;
  }

  showAlert(){
    window.alert("Me has alertado");
  }

}
