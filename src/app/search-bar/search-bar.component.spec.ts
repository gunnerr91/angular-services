import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

  // it('updates submitted when form is submitted', () => {
  //   component.term = 'new term is defined';
  //   let submittedTerm = '';
  //   component.submitted.subscribe((term: string) => (submittedTerm = term));
  //   fixture.debugElement
  //     .query(By.css('form'))
  //     .nativeElement.triggerEventHandler('submit', null);
  //   expect(submittedTerm).toBe('new term is defined');
  // });
});
