import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import MockRouter from 'src/test-utils/MockRouter';
import routes from '../app.routes';

import { RepoSelectorComponent } from './repo-selector.component';

describe('RepoSelectorComponent', () => {
  let component: RepoSelectorComponent;
  let fixture: ComponentFixture<RepoSelectorComponent>;
  let routerService: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoSelectorComponent ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        NgxDaterangepickerMd.forRoot()
      ],
      providers: [
        { provide: Router, useClass: MockRouter },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoSelectorComponent);
    routerService = TestBed.inject(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show fields for selecting repo with date range', () => {
    component.ngOnInit();
    const componentNativeElement: HTMLElement = fixture.nativeElement;
    expect(componentNativeElement.textContent).toContain('Provide url of a github repo and date range:');

    const dateRangeInput = componentNativeElement.querySelector(
      '#date_range'
    );
    expect(dateRangeInput).not.toBeNull();

    const repoOwnerInput = componentNativeElement.querySelector(
      '#repo_owner'
    );
    expect(repoOwnerInput).not.toBeNull();

    const repoNameInput =
      componentNativeElement.querySelector('#repo_name');
    expect(repoNameInput).not.toBeNull();

    const goBtn = componentNativeElement.querySelector(
      '#go_btn'
    );
    expect(goBtn).not.toBeNull();

    expect(componentNativeElement.textContent).toContain('Angular Core');
    expect(componentNativeElement.textContent).toContain('React Js');
    expect(componentNativeElement.textContent).toContain('VS Code');
  });
});
