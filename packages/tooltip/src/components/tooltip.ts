import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {query} from 'lit/decorators/query.js';

import styles from './tooltip.styles';

@customElement('ds-tooltip')
export class Tooltip extends LitElement {
  @query('#tooltip')
  _tooltip: HTMLDivElement;

  static styles = [...styles];

  static properties = {
    isVisible: {},
  };

  constructor() {
    super();
    this.isVisible = false;
  }

  updated(changedProperties) {
    if (changedProperties.has('isVisible')) {
      this.isVisible.toString() === 'true'
        ? this.showTooltip()
        : this.hideTooltip();
    }
  }

  showTooltip() {
    console.log('tooltip ', this._tooltip);
    this._tooltip.style.visibility = '';
    this._tooltip.style.cssText = '';
  }

  hideTooltip() {
    console.log('tooltip ', this._tooltip);
    this._tooltip.style.visibility = 'hidden';
    this._tooltip.style.opacity = '0';
  }

  render() {
    return html`
      <slot
        name="invoker"
        @mouseenter=${this.showTooltip}
        @mouseleave=${this.hideTooltip}
      >
      </slot>

      <div id="tooltip">
        <!-- Todo: match the style of axiom-web -->
        <!-- <span class="arrow"></span> -->
        <slot name="content"></slot>
      </div>
    `;
  }
}
