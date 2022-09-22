import {html, LitElement, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('ds-tooltip')
export class Tooltip extends LitElement {
  // Todo: move styles to separate file
  static styles = css`
    :host {
      --text-color: #404040;
      --popup-box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 25%, 0.2),
        0 0.25rem 0.5625rem 0 hsla(0, 0%, 25%, 0.14),
        0 0.0625rem 0.125rem 0.03125rem hsla(0, 0%, 25%, 0.15);
      --background-color: hsl(0, 0%, 100%);
      --border-radius: 0.1875rem;
      --box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 25%, 0.2),
        0 0.25rem 0.5625rem 0 hsla(0, 0%, 25%, 0.14),
        0 0.0625rem 0.125rem 0.03125rem hsla(0, 0%, 25%, 0.15);

      // Arrow Styling
      --arrow-width: 0.75rem;
      --arrow-offset: calc(var(--arrow-width) / -2);
      --tip-size: 0.75rem;

      position: absolute;
      inset: 0px auto auto 0px;
      margin: 0px;
      transform: translate(30px, 59px);
    }

    ::slotted(*) {
      position: absolute;
      border-radius: var(--border-radius, 0.1875rem);
      box-shadow: var(--box-shadow);
      background-color: var(--background-color, white);
      color: var(--text-color);
      display: block;
      overflow-y: auto;
      scroll-behavior: smooth;
    }

    .arrow {
      z-index: -1;
      position: absolute;
      top: calc(var(--tip-size) * -0.5);
      left: 0px;
      transform: translate(17px, 0px);
      display: block;
      width: var(--arrow-width);
      height: var(--arrow-width);
    }

    .arrow::before {
      content: '';
      position: absolute;
      width: var(--tip-size);
      height: var(--tip-size);
      transform: rotate(45deg);
      box-shadow: var(--popup-box-shadow);
      background-color: var(--background-color);
      pointer-events: none;
    }
  `;

  render() {
    return html`
      <span class="arrow"></span>
      <slot></slot>
    `;
  }
}
