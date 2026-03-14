import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GameControlComponent,
        OddComponent,
        EvenComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toBeDefined();
  });

  it('should start with empty odd and even arrays', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.oddNumbers.length).toBe(0);
    expect(app.evenNumbers.length).toBe(0);
  });

  it('should push even numbers to evenNumbers array', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.onIntervalFired(2);
    app.onIntervalFired(4);
    expect(app.evenNumbers).toEqual([2, 4]);
  });

  it('should push odd numbers to oddNumbers array', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.onIntervalFired(1);
    app.onIntervalFired(3);
    expect(app.oddNumbers).toEqual([1, 3]);
  });
});
