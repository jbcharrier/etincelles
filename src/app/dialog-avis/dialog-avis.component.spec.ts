import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvisComponent } from './dialog-avis.component';

describe('DialogAvisComponent', () => {
  let component: DialogAvisComponent;
  let fixture: ComponentFixture<DialogAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAvisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
