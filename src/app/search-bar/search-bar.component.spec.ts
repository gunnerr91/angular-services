import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders search input element', () => {
    expect(fixture.nativeElement.querySelector('[searchInput]')).toBeTruthy();
  });

  it('updates term value on input event update', () => {
    const searchInput: HTMLInputElement =
      fixture.nativeElement.querySelector('[searchInput]');
    searchInput.value = 'new input value';
    searchInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.term).toBe('new input value');
  });
});
