import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { SmallGameCardComponent } from './components/small-game-card/small-game-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    GameCardComponent,
    SmallGameCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
