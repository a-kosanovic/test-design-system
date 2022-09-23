import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from './button.styles';

@customElement('ds-button')
export class Button extends LitElement {
  static styles = styles;

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
