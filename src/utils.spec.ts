import { addClass } from "./utils";

describe("Utils", () => {
  let fixture;

  beforeEach(() => {
    document.body.insertAdjacentHTML("afterbegin", `<div id="fixture"></div>`);
    fixture = document.getElementById("fixture");
  });

  afterEach(() => {
    document.body.removeChild(fixture);
  });

  describe("addClass", () => {
    it("adds a className to a DOM element", () => {
      addClass(fixture, "test");

      expect(fixture.className).toEqual("test");
    });

    it("adds a className to a DOM element with existing classes", () => {
      fixture.insertAdjacentHTML(
        "afterbegin",
        `<div id="element" class="one"></div>`
      );
      const element = document.getElementById("element");

      addClass(element, "test");

      expect(element.className).toEqual("one test");
    });
  });
});
