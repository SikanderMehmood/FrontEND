import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { SignUpComponent }  from './components/signUpPerson/signUp.component';
import { NewpostComponent }  from './components/newpost/newpost.component';
import { PersonProfileComponent }  from './components/personProfile/personProfile.component';
import { UniversityscrapComponent } from './components/universityscrap/universityscrap.component';
import { UnilinksComponent} from './components/unilinks/unilinks.component';
import {SingleunilinksComponent} from './components/singleunilinks/singleunilinks.component';
import {SaveUniversityComponent} from './components/saveUniversity/saveUniversity.component'; 

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'components/login',       component: LoginComponent },
    { path: 'components/saveUniversity',component: SaveUniversityComponent },
    { path: 'components/unilinks/:id',component: UnilinksComponent },
    { path: 'components/personProfile', component: PersonProfileComponent },
    { path: 'components/universityscrap', component: UniversityscrapComponent },
    { path: 'components/signUpPerson',component: SignUpComponent },
    { path: 'components/newpost',component: NewpostComponent },
    { path: 'examples/profile',     component: ProfileComponent },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
