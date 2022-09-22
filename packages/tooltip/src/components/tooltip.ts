import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from './tooltip.styles';

@customElement('ds-tooltip')
export class Tooltip extends LitElement {
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
    this.style.visibility = '';
    this.style.cssText = '';
  }

  hideTooltip() {
    this.style.visibility = 'hidden';
    this.style.opacity = '0';
  }

  render() {
    return html`
      <span class="arrow"></span>
      <slot></slot>
    `;
  }
}
