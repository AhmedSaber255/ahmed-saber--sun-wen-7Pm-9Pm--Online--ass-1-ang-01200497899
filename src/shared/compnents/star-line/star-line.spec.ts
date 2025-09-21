import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarLine } from './star-line';

describe('StarLine', () => {
  let component: StarLine;
  let fixture: ComponentFixture<StarLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
