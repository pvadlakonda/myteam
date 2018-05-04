import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatDialogModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { UmpiringsComponent } from './umpirings/umpirings.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { PracticeComponent } from './practice/practice.component';
import { LoginComponent } from './login/login.component';

import { ExpensesService } from './services/expenses.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GamesComponent,
        UmpiringsComponent,
        ExpensesComponent,
        PracticeComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule, MatToolbarModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
        MatTabsModule, MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDialogModule, MatInputModule
    ],
    entryComponents: [
        LoginComponent
    ],
    providers: [
        ExpensesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
