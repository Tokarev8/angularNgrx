import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";



import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppEffects } from "./app.effects";
import { HelperDirective } from "./directives/helper.directive";
import { StyleDirective } from "./directives/style.directive";
import { MyModule } from "./my-module/my-module.module";
import { Page404Component } from "./page-404/page-404.component";
import { DatePipe } from "./pipes/date.pipe";
import { FilterPipe } from "./pipes/filter.pipe";
import { metaReducers, reducers } from "./store/reducers";
import { EditStudentFormService } from "./student-table/service/edit-student-form.service";
import { StudentTableServiceFormAdd } from "./student-table/service/from-form.service";
import { StudentHardService } from "./student-table/service/student-hard.service";
import { StudentTableService } from "./student-table/service/student-table.service";
import { StudentTableComponent } from "./student-table/student-table.component";


@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    FilterPipe,
    DatePipe,
    StyleDirective,
    HelperDirective,
    Page404Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MyModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
  ],

  providers: [StudentTableService, StudentTableServiceFormAdd,
    StudentHardService, EditStudentFormService],
  bootstrap: [AppComponent],
})
export class AppModule { }

