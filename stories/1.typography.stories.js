import { storiesOf } from '@storybook/html';

storiesOf('Typography', module)
  .add('description', () => `
    <h2 id="typography">Typography</h2>
    <img src="images/font-roboto.png" alt="Roboto font">
    <h3>Web Content Accessibility Guidelines (WCAG)</h3>
    <p>The minimum size of typography is 14px. If in doubt, 16px font with 1.5 line height is pretty good safe for body copy.</p>
    <p>The medium level of contrast is implemented : WCAG AA. Take a look at our color guidelines !</p>
    <p>As much as possible, using multiples of 6 to define our spacing is a great way to achieve vertical rhythm (ex : Title { line-height = 30px}, body { line-height = 24px})</p>
`);
