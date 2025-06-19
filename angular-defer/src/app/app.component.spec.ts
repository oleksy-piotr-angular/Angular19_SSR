import {
  DeferBlockBehavior,
  DeferBlockState,
  TestBed,
} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      deferBlockBehavior: DeferBlockBehavior.Manual,
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-defer' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-defer');
  });

  it('should render the defer block in different states', async () => {
    const fixture = TestBed.createComponent(AppComponent);

    // Retrieve the list of all defer block fixtures and get the first block.
    const deferBlockFixture = (await fixture.getDeferBlocks())[0];

    // Renders placeholder state by default.
    expect(fixture.nativeElement.innerHTML).toContain(
      'please wait at least 500ms when large component has been loaded'
    );

    //await on The loading block content is rendered
    //* Render loading state and verify rendered output.
    await deferBlockFixture.render(DeferBlockState.Loading);
    expect(fixture.nativeElement.innerHTML).toContain('Fetching Content');

    //await on The main content block content is rendered
    //* Render final state and verify the output.
    await deferBlockFixture.render(DeferBlockState.Complete);
    expect(fixture.nativeElement.innerHTML).toContain('large-component works!');

    //await on The error block content is rendered
    //* Render error state and verify the output.
    await deferBlockFixture.render(DeferBlockState.Error);
    expect(fixture.nativeElement.innerHTML).toContain(
      'Failed to load a content. Please try again later'
    );
  });
});
