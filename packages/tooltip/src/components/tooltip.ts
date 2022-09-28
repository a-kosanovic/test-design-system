import {html, LitElement} from 'lit';

import {customElement} from 'lit/decorators.js';
import {query} from 'lit/decorators/query.js';
import {property} from 'lit/decorators/property.js';
import {queryAssignedElements} from 'lit/decorators/query-assigned-elements.js';
import {queryAssignedNodes} from 'lit/decorators/query-assigned-nodes.js';

import styles from './tooltip.styles';

import {computePosition, autoPlacement, offset, shift} from '@floating-ui/dom';

@customElement('ds-tooltip')
export class Tooltip extends LitElement {
  @property({type: Number})
  offset = 4;

  @property({type: Boolean})
  isVisible = false;

  @property({type: String})
  tooltipContent = '';

  @queryAssignedElements({slot: 'invoker'})
  _invoker!: Array<SlotAssignmentMode>;

  @queryAssignedNodes({slot: 'content', flatten: true})
  _content!: Node;

  static styles = [...styles];

  isCreated = false;
  tooltip: HTMLElement | undefined = undefined;

  constructor() {
    super();
  }

  updated(changedProperties) {
    if (changedProperties.has('isVisible')) {
      this.isVisible.toString() === 'true'
        ? this.showTooltip()
        : this.hideTooltip();
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  _computeTooltipPosition(
    invokerElement: HTMLElement,
    tooltipElement: HTMLElement
  ): Promise<{x: Number; y: Number}> {
    return computePosition(invokerElement, tooltipElement, {
      strategy: 'fixed',
      middleware: [
        offset(10),
        shift(),
        autoPlacement({allowedPlacements: ['bottom', 'right']}),
      ],
    });
  }

  showTooltip() {
    const invokerElement = this._invoker[0] as unknown as HTMLElement;

    if (!this.isCreated) {
      this.lazy(invokerElement);
      this.isCreated = true;
    }

    this.tooltip!.style.cssText = ''; // restart all styles applied

    // position the tooltip
    this._computeTooltipPosition(invokerElement, this.tooltip!).then(
      ({x, y}) => {
        Object.assign(this.tooltip!.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      }
    );
  }

  hideTooltip() {
    this.tooltip!.style.visibility = 'hidden';
    this.tooltip!.style.opacity = '0';
  }

  // static
  lazy(invokerElement: Element) {
    console.log('lazy');
    this.tooltip = document.createElement('div') as unknown as Tooltip;
    this.tooltip.setAttribute('id', 'tooltip');

    this.tooltip.textContent = this.tooltipContent;

    // Append the content
    (invokerElement.parentNode as HTMLElement)!.shadowRoot!.append(
      this.tooltip
    );
  }

  render() {
    return html`
      <slot
        name="invoker"
        @mouseenter=${this.showTooltip}
        @mouseleave=${this.hideTooltip}
      >
      </slot>
    `;
  }
}
