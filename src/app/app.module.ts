import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './component/child/child.component';
import { ParentComponent } from './component/parent/parent.component';
import { TemplateDrivenFormComponent } from './templateDrivenForm/templateDrivenForm.component';
import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';
import { ProdListComponent } from './prodList/prodList.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [					
    AppComponent,
    ParentComponent,
    ChildComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ProdListComponent,
    HomeComponent,
      NavbarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
