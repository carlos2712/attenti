import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';
import { SearchFormComponentModule } from 'src/app/shared/components/explore-container/search-form.module';

describe('PlacesPage', () => {
  let component: PlacesPage;
  let fixture: ComponentFixture<PlacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlacesPage],
      imports: [IonicModule.forRoot(), SearchFormComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
