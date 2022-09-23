import {html} from 'lit';
import '../src/index';

const config = {
  title: 'Components/Tooltip',
  component: 'ds-tooltip',
  argTypes: {
    Visible: {control: 'boolean', default: true},
  },
};

export default config;

function Template(args): any {
  return html`
    <ds-tooltip isvisible=${args.Visible}>
      <ds-button slot="invoker"></ds-button>

      <div slot="content">Hello from Tooltip</div>
    </ds-tooltip>
  `;
}

export const Default = Template.bind({});
