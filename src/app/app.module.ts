import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CubeComponent } from './components/cube/cube.component';
import { RowComponent } from './components/row/row.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { IntroComponent } from './pages/intro/intro.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreviewCubeComponent } from './components/preview-cube/preview-cube.component';
import { ExpandedCubeComponent } from './components/expanded-cube/expanded-cube.component';
import { CubeControlsComponent } from './components/cube-controls/cube-controls.component';
import { ListComponent } from './pages/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { BillboardComponent } from './billboard/billboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    RowComponent,
    HomepageComponent,
    TopBarComponent,
    IntroComponent,
    FooterComponent,
    PreviewCubeComponent,
    ExpandedCubeComponent,
    CubeControlsComponent,
    ListComponent,
    ItemComponent,
    BillboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
