# LitElement Hello World Example with Webpack

**To run:**

```
npm install
npm run dev
```

This is the code:

```
import {LitElement, html, customElement, property} from 'lit-element'

@customElement('main-view')
class RandomView extends LitElement {
  @property({type: Number}) count = 0

  clickHandler() {
    this.count++
  }

  render() {
    return html`
      <p>The count is: ${this.count}</p>
      <button @click="${(this.clickHandler)}">Click</button>
    `
  }
}
```

---

[LitElement](https://lit-element.polymer-project.org/) is a cool library for creating web components. The problem is, the documentation sucks.

For example the home page example is literally just a "Hello World" that shows you nothing about how to change state or handle button clicks (Polymer team: please look at React's homepage for an example of how a library's homepage should look).

Nowhere in the documentation does it tell you how to set things up with webpack, instead telling you to simply use `polymer serve`. And getting things set up with Webpack with decorators is surprisingly time-consuming due to [this bug with babel decorators](https://github.com/Polymer/lit-element/issues/234).

I created this repo to 1. show a simple example of Lit-Element that's less worthless than "Hello World" 2. save you from the hassle of having to set up the webpack config.

The webpack config however is extremely simple and not meant for production. But at least with this basic working config, it should be easy to extend and get it to that point.

I'll probably update this repo to make things more complete as I learn more (still new to Lit-Element).