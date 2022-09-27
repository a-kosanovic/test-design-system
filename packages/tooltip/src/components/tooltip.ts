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

  @query('#tooltip')
  tooltip!: HTMLDivElement;

  @queryAssignedElements({slot: 'invoker'})
  _invoker!: Array<SlotAssignmentMode>;

  @queryAssignedNodes({slot: 'content', flatten: true})
  _content!: Node;

  static styles = [...styles];

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

  showTooltip() {
    this.tooltip.style.cssText = ''; // restart all styles applied

    computePosition(this._invoker[0], this.tooltip, {
      strategy: 'fixed',
      middleware: [
        offset(10),
        shift(),
        autoPlacement({allowedPlacements: ['bottom', 'right']}),
      ],
    }).then(({x, y}) => {
      Object.assign(this.tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }

  hideTooltip() {
    this.tooltip.style.visibility = 'hidden';
    this.tooltip.style.opacity = '0';
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
