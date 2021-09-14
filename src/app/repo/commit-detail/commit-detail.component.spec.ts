import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import commit_x from 'src/mocks/commit_x';
import { mockActivatedRoute } from 'src/test-utils/mockActivatedRoute';
import { mockCommitDetailService } from 'src/test-utils/mockCommitsService';

import { CommitDetailComponent } from './commit-detail.component';
import { CommitDetailService } from './service/commit-detail.service';

describe('CommitDetailComponent', () => {
  let component: CommitDetailComponent;
  let fixture: ComponentFixture<CommitDetailComponent>;
  let commitDetailsService: CommitDetailService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommitDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: CommitDetailService, useValue: mockCommitDetailService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitDetailComponent);
    component = fixture.componentInstance;
    commitDetailsService = TestBed.inject(CommitDetailService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service with param values and get data', () => {
    const commitsServiceSpy = spyOn(
      commitDetailsService,
      'getCommitDetails'
    ).and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();

    expect(commitsServiceSpy).toHaveBeenCalledOnceWith('hateoasUrl');
  });

  it('should show commit sha value', () => {
    const componentNativeElement: HTMLElement = fixture.nativeElement;
    expect(componentNativeElement.textContent).toContain(`#${commit_x.sha}`);
  });

  it('should get list of files and their details', () => {
    const componentNativeElement: HTMLElement = fixture.nativeElement;
    expect(componentNativeElement.textContent).toContain(
      `${commit_x.files[0].filename}`
    );
    expect(componentNativeElement.textContent).toContain(
      `${commit_x.files[1].filename}`
    );
    expect(componentNativeElement.textContent).toContain(
      `${commit_x.files[0].additions}`
    );
    expect(componentNativeElement.textContent).toContain(
      `${commit_x.files[1].additions}`
    );
  });
});
