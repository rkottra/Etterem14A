import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TerkepComponent } from './terkep/terkep.component';
import { EtlapComponent } from './etlap/etlap.component';
import { AdminComponent } from './admin/admin.component';
import { FooldalComponent } from './fooldal/fooldal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TerkepComponent,
    EtlapComponent,
    AdminComponent,
    FooldalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
