import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import commits from 'src/mocks/commits';
import { mockActivatedRoute } from 'src/test-utils/mockActivatedRoute';
import { mockCommitsService } from 'src/test-utils/mockCommitsService';

import { CommitsComponent } from './commits.component';
import { CommitsService } from './service/commits.service';

@Component({
  template: '',
})
class DummyComponent {}

describe('CommitsComponent', () => {
  let component: CommitsComponent;
  let fixture: ComponentFixture<CommitsComponent>;
  let commitsService: CommitsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommitsComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'repo/commit/:hateoasUrl', component: DummyComponent },
        ]),
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: CommitsService, useValue: mockCommitsService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsComponent);
    component = fixture.componentInstance;
    commitsService = TestBed.inject(CommitsService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain required heading', () => {
    const componentNativeElement: HTMLElement = fixture.nativeElement;
    expect(componentNativeElement.textContent).toContain(
      'Commit Overview for Repo: namespace/repo'
    );
  });

  it('should get commits details from api', () => {
    const commitsServiceSpy = spyOn(
      commitsService,
      'getCommitsForRepo'
    ).and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();

    expect(commitsServiceSpy).toHaveBeenCalled();
  });

  it('should go to commit details page when user clicks on a commit', async(
    inject([Router, Location], (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(CommitsComponent);
      fixture.detectChanges();

      fixture.debugElement.query(By.css('a')).nativeElement.click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual(
          `/repo/commit/${encodeURIComponent(
            encodeURIComponent(commits[0].url)
          )}`
        );
        console.log('after expect');
      });
    })
  ));
});
