import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksComponent } from './links.component';
import { AppLinksModule } from 'src/app/shared/components/links/links.module';

describe('LinksComponent', () => {
  let component: LinksComponent;
  let fixture: ComponentFixture<LinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppLinksModule],
      declarations: [ LinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
