import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CubeComponent } from './components/cube/cube.component';
import { RowComponent } from './components/row/row.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { IntroComponent } from './pages/intro/intro.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    RowComponent,
    HomepageComponent,
    TopBarComponent,
    IntroComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
