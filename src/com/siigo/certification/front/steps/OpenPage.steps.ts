import { Given, Then, When } from '@cucumber/cucumber';
import { OpenPage } from '../tasks/OpenPage';
import { Actor } from '@serenity-js/core';

Given('{actor} abre la aplicación Siigo en la página de inicio de sesión', { timeout: 40000 }, async (actor: Actor) => {
  console.log('Opening Siigo login page');
  await actor.attemptsTo(OpenPage.atBaseUrl());
});