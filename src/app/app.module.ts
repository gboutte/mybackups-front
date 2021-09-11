import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './Components/FooterComponent/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material.module';
import { SidebarComponent } from './Components/SidebarComponent/sidebar.component';
import { MBRootComponent } from './MyBackupsRootComponent/mb-root.component';
import { ConfigurationModule } from './Modules/configuration.module';

@NgModule({
  declarations: [
    MBRootComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ConfigurationModule,
  ],
  providers: [
    Title,
  ],
  bootstrap: [MBRootComponent]
})
export class AppModule { }
