import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { HighlightDirective } from './directive/highlight.directive';
import { UnlessDirective } from './directive/unless.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CountrycodePipe } from './pipes/countrycode.pipe';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    HighlightDirective,
    UnlessDirective,
    PipeDemoComponent,
    CountrycodePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
