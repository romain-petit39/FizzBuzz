import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FizzBuzz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FizzBuzz');
  });


  it('should evaluate fizzBuzz(1) return 1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app= fixture.componentInstance;
    expect(app.fizzBuzz(1)).toEqual('1');
  })

  it('should evaluate fizzBuzz(2) return 2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app= fixture.componentInstance;
    expect(app.fizzBuzz(2)).toEqual('2');
  })

  
  it('should evaluate fizzBuzz(3) return Fizz', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app= fixture.componentInstance;
    expect(app.fizzBuzz(3)).toEqual('Fizz');
  })

  it('should evaluate fizzBuzz(5) return Buzz', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app= fixture.componentInstance;
    expect(app.fizzBuzz(5)).toEqual('Buzz');
  })

  it('should evaluate fizzBuzz(10) return Buzz', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app= fixture.componentInstance;
    expect(app.fizzBuzz(10)).toEqual('Buzz');
  })

  it('should evaluate fizzBuzz(15) return FizzBuzz', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app= fixture.componentInstance;
    expect(app.fizzBuzz(15)).toEqual('FizzBuzz');
  })

  it('should evaluate fizzBuzz(30) return FizzBuzz', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app= fixture.componentInstance;
    expect(app.fizzBuzz(30)).toEqual('FizzBuzz');
  })

  it('should evaluate fizzBuzz(100) return FizzBuzz', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app= fixture.componentInstance;
    expect(app.fizzBuzz(100)).toEqual('Buzz');
  })




});
