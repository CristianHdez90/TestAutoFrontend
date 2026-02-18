import { Task } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

export class OpenPage {
    static atBaseUrl() {
        return Task.where(`#open the application base URL`,
            Navigate.to((process.env.BASE_URL || 'https://qastaging.siigo.com') + '/#/login'),
        );
    }
}
