import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { configure, Cast } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { CallAnApi } from '@serenity-js/rest';
import * as playwright from 'playwright';
import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

setDefaultTimeout(60 * 1000); // Timeout global para todos los escenarios

const serenityOutputDir = path.resolve(process.cwd(), 'target/site/serenity');
let browser: playwright.Browser;

BeforeAll(async () => {
    // Limpiar reportes previos de Serenity
    if (fs.existsSync(serenityOutputDir)) {
        fs.rmSync(serenityOutputDir, { recursive: true, force: true });
        console.log('Se limpiaron los reportes de Serenity');
    }

    const headless = process.env.HEADLESS !== 'true';

    // Lanzar Chrome real (no Chromium) una sola vez para todos los escenarios
    browser = await playwright.chromium.launch({
        channel: 'chrome',
        headless,
        args: ['--start-maximized'],
    });

    console.log('Navegador lanzado globalmente');
});

AfterAll(async () => {
    await browser?.close();
    console.log('Navegador cerrado globalmente');
});

// 

Before(async function () {
    // Crear un nuevo contexto y página por escenario para aislamiento
    const context = await browser.newContext({
        viewport: null,
    });
    const page = await context.newPage();

    // Guardar en CustomWorld (this) para acceder en los steps
    this.context = context;
    this.page = page;

    // Variables del entorno    
    const apiUrl = 'https://servicesqa.siigo.com/catalog/api/third-party/account';
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjFDQUVCODU3RTU4NkNDNDE3MjlCRkREMkY5MjRGNzQ2QkZGOTYxODYiLCJ4NXQiOiJISzY0Vi1XR3pFRnltXzNTLVNUM1JyXzVZWVkiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3NzE0Mjg3OTgsIm5iZiI6MTc3MTM0MjM5OCwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9zaWlnb2IyY3FhLmIyY2xvZ2luLmNvbS8wM2Q0MWY1ZS1iMjQ4LTRkNTMtOGU5NS00MTA3NmM4YTMwZTAvdjIuMC8iLCJzdWIiOiIwYTNlNzMyMi1kNDY3LTRhZmItYjkxMy02ODA5YTU0MTdiMGMiLCJhdWQiOiJkMGUwZDBjMS03Mjk3LTQzNzktODIzNy1iYjkwYjU1NzM2MTYiLCJhY3IiOiJiMmNfMWFfc3Nvc2lpZ29fdjMiLCJpYXQiOjE3NzEzNDIzOTgsImF1dGhfdGltZSI6MTc3MTM0MjM5NiwibmFtZSI6InJldG9hdXRvbWF0aW9uc2lpZ28yQHlvcG1haWwuY29tIiwibWFpbF9zaWlnbyI6InJldG9hdXRvbWF0aW9uc2lpZ28yQHlvcG1haWwuY29tIiwic3RvcmFnZV9rZXkiOiJyZXRvYXV0b21hdGlvbnNpaWdvMkB5b3BtYWlsLmNvbSIsImNsb3VkX3RlbmFudF9jb21wYW55X2tleSI6IlJBU0FTIiwidXNlcnNfaWQiOiI2MjAzNiIsInRlbmFudF9pZCI6IjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMTc3MDYiLCJ1c2VyX2xpY2Vuc2VfdHlwZSI6IjAiLCJwbGFuX3R5cGUiOiIxNCIsInRlbmFudF9zdGF0ZSI6IjEiLCJtdWx0aXRlbmFudF9pZCI6IjEwNCIsImNvbXBhbmllcyI6IjEiLCJhY2NvdW50YW50IjoiZmFsc2UiLCJ0aWQiOiIwM2Q0MWY1ZS1iMjQ4LTRkNTMtOGU5NS00MTA3NmM4YTMwZTAiLCJjbGllbnRfaWQiOiJTaWlnb1dlYiIsInNjb3BlIjoiV2ViQVBJLG9mZmxpbmVfYWNjZXNzIiwiYXRfaGFzaCI6ImNBdzR6aERBMmZjTHhJeV9EQUlEV1EifQ.D6bx_h2_x3sT34lV3VeUTTMT18rpGdZNcwAXHp4OJe1jmhBa5vRxI9JZzR-wZt5Fq76gbTI9-HvIN6r1EkJCVGp0kjrQZfcq8sf9QsNsDPA8MsR2fMJ_bT20vqThxGrlhvhoeifq4JFRhfl_gt4aV0eFZiYJLwSu6U-TJEq-pKF354tTo3QRDZAi6sGl5FAwBfdBqsp-jHFEu-S7hHUZZ3Em8OiM76zBFNliywf8NjWspKmWWevagtkeltOxoqQxgUvr06fukYPfeKatVLYHpVs_ewTgpPlrDNVXaXjS_ytSzXNVsEjv3ohPT7oLm9VJY_P6wrMJnxEm-67Hc6cKLA';

    console.log('Variables de entorno cargadas:');
    console.log(`API URL: ${apiUrl}`);
   

    // Configurar actor con habilidades tanto de front (Playwright) como de API (CallAnApi)
    this.actor = configure({
        actors: Cast.where(actor =>
            actor.whoCan(
                BrowseTheWebWithPlaywright.usingPage(page), 
                CallAnApi.using({
                    // baseURL: apiUrl,
                    headers: {                        
                        'Content-Type': 'application/json',
                        'authorization': `${token}`,
                    },
                })              
            )
        )
    });

    console.log('Actor configurado con habilidades de Playwright y API');
});

After(async function () {
    // Cerrar contexto de este escenario para liberar recursos
    await this.context?.close().catch(() => {});
    console.log('Contexto cerrado del escenario');
});