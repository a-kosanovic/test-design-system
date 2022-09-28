import {html} from 'lit';
import '../src/index';

const config = {
  title: 'Components/Tooltip',
  component: 'ds-tooltip',
  argTypes: {
    Disabled: {control: 'boolean', defaultValue: true},
    TooltipContent: {control: 'text', defaultValue: 'Hello Tooltip'},
  },
};

export default config;

function Template(args): any {
  return html`
    <ds-tooltip
      isvisible=${!args.Disabled}
      tooltipContent=${args.TooltipContent}
    >
      <ds-button disabled="disabled" slot="invoker"></ds-button>
    </ds-tooltip>
  `;
}

export const Default = Template.bind({});
