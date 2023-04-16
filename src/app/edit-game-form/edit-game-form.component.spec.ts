import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGameFormComponent } from './edit-game-form.component';

describe('EditGameFormComponent', () => {
  let component: EditGameFormComponent;
  let fixture: ComponentFixture<EditGameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGameFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
