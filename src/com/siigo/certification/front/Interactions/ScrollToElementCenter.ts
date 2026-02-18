import { Interaction, AnswersQuestions, UsesAbilities } from "@serenity-js/core";
import { PageElement, By } from "@serenity-js/web";

export class ScrollToElementCenter {
    static to(selector: string) {
        return Interaction.where(`#scroll to element ${selector} in the center of the viewport`, async (actor: UsesAbilities & AnswersQuestions) => {
            const element = PageElement.located(By.css(selector)).describedAs(`elemento ${selector}`);
            const handle = await actor.answer(element.nativeElement());
            await (handle as any).evaluate((el: HTMLElement) => {
                el.scrollIntoView({ block: 'center', inline: 'center', behavior: 'auto' });

            });
        });
    }
}