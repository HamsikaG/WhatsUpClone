import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
/* tslint:disable:no-unused-variable */
import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { Router, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { async } from "@angular/core/testing";
import { FormsModule } from '@angular/forms';




describe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;
  
  beforeEach(async(() => {
         TestBed.configureTestingModule({
      imports: [    
        RouterTestingModule.withRoutes([
        {path : '' , component : LoginComponent},
        {path:'home',component: HomeComponent},
        {path : 'home/:userid' , component : HomeComponent},     
    ]),
      RouterModule,        
      FormsModule,
      HttpModule,
      ],
      declarations: [
        LoginComponent,
        HomeComponent,
        AppComponent
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10)
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "home" redirects you to /home', fakeAsync(() => {
    router.navigate(['home']);
    tick(50);
    expect(location.path()).toBe('/home');
  }));

  it('navigate to "" redirects you to /', fakeAsync(() => {
    router.navigate(['']);
    tick(50);
    expect(location.path()).toBe('/');
  }));

  

  
  // it('navigate to "search" takes you to /', fakeAsync(() => {
  //   router.navigate(['/search']);
  //   tick(50);
  //   expect(location.path()).toBe('/search');
  // }));
});

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//       imports: [
//         RouterTestingModule
//       ],
      
//     }).compileComponents();
//   }));

  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('title').textContent).toContain('Whatsappclone');
  // }));
//});
