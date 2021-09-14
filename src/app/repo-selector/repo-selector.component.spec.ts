import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import * as dayjs from 'dayjs';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { getNativeElement } from 'src/test-utils/form-utils';
import MockRouter from 'src/test-utils/MockRouter';
import { routes } from '../app-routing.module';

import { RepoSelectorComponent } from './repo-selector.component';

describe('RepoSelectorComponent', () => {
  let component: RepoSelectorComponent;
  let fixture: ComponentFixture<RepoSelectorComponent>;
  let routerService: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoSelectorComponent],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes(routes),
        NgxDaterangepickerMd.forRoot(),
      ],
      providers: [{ provide: Router, useClass: MockRouter }],
    }).compileComponents();
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
    expect(componentNativeElement.textContent).toContain(
      'Provide url of a github repo and date range:'
    );

    const dateRangeInput = componentNativeElement.querySelector('#date_range');
    expect(dateRangeInput).not.toBeNull();

    const repoOwnerInput = componentNativeElement.querySelector('#repo_owner');
    expect(repoOwnerInput).not.toBeNull();

    const repoNameInput = componentNativeElement.querySelector('#repo_name');
    expect(repoNameInput).not.toBeNull();

    const goBtn = componentNativeElement.querySelector('#go_btn');
    expect(goBtn).not.toBeNull();

    expect(componentNativeElement.textContent).toContain('Angular Core');
    expect(componentNativeElement.textContent).toContain('React Js');
    expect(componentNativeElement.textContent).toContain('VS Code');
  });

  it('should take user to next page when pressing go button', () => {
    const routeSpy = spyOn(routerService, 'navigateByUrl').and.callThrough();

    component.ngOnInit();
    const componentDebugElement: DebugElement = fixture.debugElement;

    component.selected = {
      startDate: dayjs('2020-01-01'),
      endDate: dayjs('2020-02-02'),
    };

    const repoOwnerInput: HTMLButtonElement = getNativeElement(
      '#repo_owner',
      componentDebugElement
    );
    repoOwnerInput.value = 'angular';

    const repoNameInput: HTMLButtonElement = getNativeElement(
      '#repo_name',
      componentDebugElement
    );
    repoNameInput.value = 'angular';

    const goBtn: HTMLButtonElement = getNativeElement(
      '#go_btn',
      componentDebugElement
    );
    fixture.detectChanges();

    goBtn.dispatchEvent(new Event('click'));

    expect(routeSpy).toHaveBeenCalledWith(
      '/repo/commits/angular/angular/2020-01-01/2020-02-02'
    );
  });

  it('should take user to next page when selecting a url of featured repo', () => {
    const routeSpy = spyOn(routerService, 'navigateByUrl').and.callThrough();

    component.ngOnInit();
    const componentDebugElement: DebugElement = fixture.debugElement;

    component.selected = {
      startDate: dayjs('2020-01-31'),
      endDate: dayjs('2020-02-28'),
    };

    const angularRepoLink: HTMLButtonElement = getNativeElement(
      '#angular',
      componentDebugElement
    );

    angularRepoLink.dispatchEvent(new Event('click'));

    expect(routeSpy).toHaveBeenCalledWith(
      '/repo/commits/angular/angular/2020-01-31/2020-02-28'
    );
  });
});
