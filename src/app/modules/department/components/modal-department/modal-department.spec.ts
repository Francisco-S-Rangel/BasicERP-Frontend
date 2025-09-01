import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDepartment } from './modal-department';


describe('ModalDepartment', () => {
  let component: ModalDepartment;
  let fixture: ComponentFixture<ModalDepartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDepartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDepartment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
