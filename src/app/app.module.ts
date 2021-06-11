import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CategoryTreeComponent} from './components/category-tree/category-tree.component';
import {LayoutComponent} from './components/layout/layout.component';
import {HttpClientModule} from '@angular/common/http';
import {CheckboxTreeFacetComponent} from './components/checkbox-tree-facet/checkbox-tree-facet.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {Ng2LoadingSpinnerModule} from 'ng2-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    CategoryTreeComponent,
    LayoutComponent,
    CheckboxTreeFacetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2LoadingSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
