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