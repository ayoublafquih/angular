import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Product } from './model/product';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let app: AppComponent
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement
  }))

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as total starting at 0`, () => {
    expect(app.total).toEqual(0)
  });

  it('should have the total bound in the header', () => {
    const total = 50
    app.total = total
    fixture.detectChanges();
    expect(compiled.querySelector('header').textContent).toContain(total);
  });

  it(`should update price with the product price`, () => {
    let oldTotal = app.total
    let price: number = 100
    let newTotal = oldTotal + price
    app.updatePrice(price)
    expect(app.total).toEqual(newTotal);
  });

  it('should bin each product component with its product', () => {
    fixture.detectChanges();
    const products = compiled.querySelectorAll('app-product')
    
    for (let i = 0; i < products.length; i++) {
      expect(products[i].product).toBe(app.products[i])
    }
  });

})
