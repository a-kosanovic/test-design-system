import {html} from 'lit';
import '../src/index';

const config = {
  title: 'Components/Button',
  component: 'ds-button',
};

export default config;

function Template() {
  return html`<ds-button></ds-button>`;
}

export const Default = Template.bind({});
