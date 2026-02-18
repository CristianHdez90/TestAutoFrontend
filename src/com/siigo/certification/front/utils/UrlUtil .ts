import { Actor } from "@serenity-js/core";
import { Page } from "@serenity-js/web";

export class UrlUtil {

    static async obtenerUuidActual(actor: Actor): Promise<string | null> {

        const currentUrl = await actor.answer(
            Page.current().url().href
        );

        const uuidRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;

        const match = currentUrl.match(uuidRegex);

        return match ? match[0] : null;
    }

}
