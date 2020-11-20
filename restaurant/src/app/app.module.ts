import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

const appRoutes : Routes=[
  {component: HomeComponent, path:''},
  {component: AddRestaurantComponent, path:'add'},
  {component: UpdateRestaurantComponent, path:'update'},
  {component: ListRestaurantComponent, path:'list'},
  {component: RegisterComponent, path:'register'},
  {component: LoginComponent, path: 'login'}
];

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    UpdateRestaurantComponent,
    ListRestaurantComponent,
    RegisterComponent,
    LoginComponent,
    AddRestaurantComponent,
    HomeComponent
  ],
  exports: [
    RouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
