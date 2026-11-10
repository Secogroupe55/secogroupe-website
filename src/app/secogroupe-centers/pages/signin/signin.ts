import { Component, inject } from '@angular/core';
import { Container } from '../../components/container/container';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-signin',
  imports: [Container],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export default class Signin {
  protected readonly content = inject(LanguageService).content;
}
