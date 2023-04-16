import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgamesComponent } from './editgames.component';

describe('EditgamesComponent', () => {
  let component: EditgamesComponent;
  let fixture: ComponentFixture<EditgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditgamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
