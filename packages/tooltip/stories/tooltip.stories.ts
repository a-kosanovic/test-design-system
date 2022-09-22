import {html} from 'lit';
import '../src/index';

const config = {
  title: 'Components/Tooltip',
  component: 'ds-tooltip',
};

export default config;

function Template() {
  return html`
    <ds-button></ds-button>

    <ds-tooltip>
      <div>Hello from Tooltip</div>
    </ds-tooltip>
  `;
}

export const Default = Template.bind({});
