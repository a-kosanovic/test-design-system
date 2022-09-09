import {expect, fixture, html} from '@open-wc/testing';

import '../index';

describe('ds-button', () => {
  it('should be accessible', async () => {
    const el = await fixture<any>(html` <ds-button></ds-button> `);
    await expect(el).shadowDom.to.be.accessible();
  });
});
