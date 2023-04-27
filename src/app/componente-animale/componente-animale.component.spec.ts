import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAnimaleComponent } from './componente-animale.component';

describe('ComponenteAnimaleComponent', () => {
  let component: ComponenteAnimaleComponent;
  let fixture: ComponentFixture<ComponenteAnimaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteAnimaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteAnimaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
