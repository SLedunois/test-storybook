import { storiesOf } from '@storybook/html';

storiesOf('Button', module)
  .add('Primary', () => `
    <h2>Initial state</h2>
    <button>Initial state</button>
    <h2>Inactive state</h2>
    <button disabled="disabled">Inactive state</button>
  `)
  .add('Secondary', () => `
    <h2>Initial state</h2>
    <button class="cancel">Initial state</button>
    <h2>Inactive state</h2>
    <button class="cancel" disabled="disabled">Inactive state</button>
  `); 
