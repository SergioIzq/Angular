import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    imports: [UpperCasePipe],
    templateUrl: "./hero-page.html",
})
export class HeroPage {
    protected name = signal('Ironman');
    protected age = signal(45);

    heroDescription = computed(() => {
        const description = `${this.name()} - ${this.age()}`;
        return description;
    });

    capitalizedName = computed(() => this.name().toUpperCase());

    changeHero() {
        this.name.set('Spiderman')
        this.age.set(22);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeAge() {
        this.age.set(60);
    }
}