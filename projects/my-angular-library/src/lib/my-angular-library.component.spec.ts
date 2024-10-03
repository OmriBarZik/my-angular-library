import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAngularLibraryComponent } from './my-angular-library.component';

describe('MyAngularLibraryComponent', () => {
  let component: MyAngularLibraryComponent;
  let fixture: ComponentFixture<MyAngularLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAngularLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAngularLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
