import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SelectionsComponent } from './selections/selections.component';
import { MenuComponent } from './menu/menu.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Temp2Component } from './temp2/temp2.component';
import { Temp1Component } from './temp1/temp1.component';
import { SalesInvComponent } from './sales-inv/sales-inv.component';
import { ReSalesInvComponent } from './re-sales-inv/re-sales-inv.component';
import { Temp3Component } from './temp3/temp3.component';
import { Scrn1Component } from './scrn1/scrn1.component';
import { Scrn2Component } from './scrn2/scrn2.component';
import { Scrn3Component } from './scrn3/scrn3.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    SelectionsComponent,
    MenuComponent,
    Temp2Component,
    Temp1Component,
    SalesInvComponent,
    ReSalesInvComponent,
    Temp3Component,
    Scrn1Component,
    Scrn2Component,
    Scrn3Component,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    RouterModule.forRoot([

      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'selections',
        component: SelectionsComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },

      {
        path: 'temp2',
        component: Temp2Component
      },

      {
        path: 'temp1',
        component: Temp1Component
      },
      {
        path: 're-sales-inv',
        component: ReSalesInvComponent
      },
      {
        path: 'sales-inv',
        component: SalesInvComponent
      },
      {
        path: 'scrn1',
        component: Scrn1Component
      },
      {
        path: 'scrn2',
        component: Scrn2Component
      },
      {
        path: 'scrn3',
        component: Scrn3Component
      },
      {
        path: 'temp3',
        component: Temp3Component
      },
      
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: '',
        component: HomeComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}