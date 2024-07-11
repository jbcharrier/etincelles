import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './footer/footer.component';
import { AtelierComponent } from './atelier/atelier.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    FooterComponent,
    AtelierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatTabsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
