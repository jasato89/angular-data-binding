import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { TextEditorComponent } from './text-editor/text-editor.component';

@NgModule({
  declarations: [	
    AppComponent,
      HeaderComponent,
      FooterComponent,
      MenuComponent,
      BodyComponent,
      TextEditorComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
