import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmeritaComponent } from './palmerita.component';

describe('PalmeritaComponent', () => {
  let component: PalmeritaComponent;
  let fixture: ComponentFixture<PalmeritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalmeritaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmeritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
