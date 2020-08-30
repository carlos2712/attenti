import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { FsquarePage } from './fsquare.page';

describe('FsquarePage', () => {
  let component: FsquarePage;
  let fixture: ComponentFixture<FsquarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FsquarePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FsquarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
