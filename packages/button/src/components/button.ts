import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('ds-button')
export class Button extends LitElement {
  render() {
    return html`<button>Click me</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    // todo: fix type
    'ds-button': any;
  }
}
