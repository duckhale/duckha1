import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
// import { ViewsComponent } from './views/views.Component';
// import { PagesComponent } from './views/pages/pages.component';
// import { ThemeComponent } from './views/theme/theme.component';
import { DirectivesComponent } from './views/directives/directives.component';
// import { PartialsComponent } from './views/partials/partials.component';
// import { AdminComponent } from './views/pages/admin/admin.component';
// import { AuthComponent } from './views/pages/auth/auth.component';
// import { ErrorComponent } from './views/pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    // ViewsComponent,
    // PagesComponent,
    // ThemeComponent,
    DirectivesComponent,
    // PartialsComponent,
    // AdminComponent,
    // AuthComponent,
    // ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
