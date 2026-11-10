import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'cc-multi-step-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './multi-step-form.html',
  styleUrl: './multi-step-form.css'
})
export class MultiStepForm{

  currentStep = 1;

  form: FormGroup;

  private readonly languageService = inject(LanguageService);

  /** Textes du formulaire dans la langue courante. */
  readonly text = computed(() => this.languageService.content().form);

  languages = ['en', 'fr', 'es'].map(code => ({
    code,
    selected: false,
    proficiency: '',
    primary: false
  }));



languageSearch = '';
languageError = false;

experience = {
  supportExperience: '',
  selectedWork: [] as string[],
  otherSelected: false,
  otherDescription: ''
};

experienceError = false;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      personalInfo: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        phone: [''],
        country: ['', Validators.required],
      }),

      contactInfo: this.fb.group({
        email: ['', [
          Validators.required,
          Validators.email
        ]],

        phone: ['', Validators.required]
      })

    });

  }

  get filteredLanguages() {
  const search = this.languageSearch
    .trim()
    .toLowerCase();

  if (!search) {
    return this.languages;
  }

  return this.languages.filter(language =>
    this.languageName(language.code)
      .toLowerCase()
      .includes(search)
  );
}


languageName(code: string): string {
  return this.text().step2.languageNames[code] ?? code;
}


toggleLanguage(language: any): void {

  language.selected = !language.selected;

  if (!language.selected) {
    language.proficiency = '';
    language.primary = false;
  }

}


togglePrimary(language: any): void {

  if (!language.selected) {
    return;
  }

  language.primary = !language.primary;

  // Primary language doesn't need proficiency
  if (language.primary) {
    language.proficiency = '';
  }

}


toggleWork(item: string): void {

  const index = this.experience.selectedWork.indexOf(item);

  if (index === -1) {
    this.experience.selectedWork.push(item);
  } else {
    this.experience.selectedWork.splice(index, 1);
  }

}


isWorkSelected(item: string): boolean {

  return this.experience.selectedWork.includes(item);

}

availability = {
  remoteWork: '',
  schedulePreference: '',
  shiftPreference: '',
  startDate: '',
  certifications: '',
  agreeToContact: false,
  emailAlerts: false
};

availabilityError = false;

submitApplication(): void {

  const {
    remoteWork,
    schedulePreference,
    shiftPreference,
    startDate,
    agreeToContact
  } = this.availability;


  if (
    !remoteWork ||
    !schedulePreference ||
    !shiftPreference ||
    !startDate.trim() ||
    !agreeToContact
  ) {

    this.availabilityError = true;
    return;

  }


  this.availabilityError = false;


  const applicationData = {

    // STEP 1
    personalInfo: this.personalInfo,

    // STEP 2
    languages: this.languages.filter(
      language => language.selected
    ),

    // STEP 3
    experience: this.experience,

    // STEP 4
    availability: this.availability

  };


  console.log(
    'Application submitted:',
    applicationData
  );

}




continueFromExperience(): void {

  const hasSelectedWork =
    this.experience.selectedWork.length > 0;

  const hasOther =
    this.experience.otherSelected &&
    this.experience.otherDescription.trim().length > 0;


  if (!hasSelectedWork && !hasOther) {

    this.experienceError = true;

    return;
  }


  this.experienceError = false;

  this.nextStep();
}


continueFromLanguages(): void {

  const selectedLanguages =
    this.languages.filter(language => language.selected);

  if (selectedLanguages.length === 0) {
    this.languageError = true;
    return;
  }

  this.languageError = false;

  this.nextStep();
}


  get personalInfo(): FormGroup {
    return this.form.get('personalInfo') as FormGroup;
  }


  get contactInfo(): FormGroup {
    return this.form.get('contactInfo') as FormGroup;
  }


  nextStep(): void {

    if (this.currentStep === 1) {

    //   if (this.personalInfo.invalid) {

    //     this.personalInfo.markAllAsTouched();

    //     return;
    //   }

    }


    if (this.currentStep === 2) {

    //   if (this.contactInfo.invalid) {

    //     this.contactInfo.markAllAsTouched();

    //     return;
    //   }

    }

    if (this.currentStep === 3) {

    //   if (this.contactInfo.invalid) {

    //     this.contactInfo.markAllAsTouched();

    //     return;
    //   }

    }


    if (this.currentStep < 4) {

      this.currentStep++;

    }

  }


  previousStep(): void {

    if (this.currentStep > 1) {

      this.currentStep--;

    }

  }


  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }


    console.log('Formulaire envoyé :', this.form.value);

  }

}