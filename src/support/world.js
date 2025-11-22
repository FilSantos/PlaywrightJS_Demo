import { setWorldConstructor, World } from "@cucumber/cucumber";

export class CustomWorld extends World {
  constructor(options) {
    super(options);
    this.browser = null;
    this.context = null;
    this.page = null;
    this.amazon = null;
    this.tcs = null;
    this.api = null;
  }
}

setWorldConstructor(CustomWorld);
