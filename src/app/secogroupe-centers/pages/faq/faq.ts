import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../components/container/container';
import { LanguageService } from '../../services/language.service';
import { CompanyService } from '../../services/company.service';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll';

@Component({
  selector: 'app-faq',
  imports: [Container, RouterLink, AnimateOnScrollDirective],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export default class Faq {
  protected readonly language = inject(LanguageService);
  protected readonly company = inject(CompanyService).company;
  protected readonly content = computed(() => this.language.content().faq);
}
