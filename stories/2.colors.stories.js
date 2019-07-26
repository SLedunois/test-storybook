import { storiesOf } from '@storybook/html';

storiesOf('Colors', module)
  .add('description', () => `
    <h2 id="colors">Colors</h2>  
    <table>
					<thead>
						<tr>
							<th>Color</th>
							<th>Name color</th>
							<th>Hexadecimal</th>
						</tr>
					</thead>
					<tbody><tr>
						<td><img src="images/color/colorscheme-cyan.png" alt="Cyan"></td>
						<td><code>$cyan</code></td>
						<td>#4bafd5</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-green.png" alt="Green"></td>
						<td><code>$green</code></td>
						<td>#46bfaf</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-yellow.png" alt="Yellow"></td>
						<td><code>$yellow</code></td>
						<td>#ecbe30</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-orange.png" alt="Orange"></td>
						<td><code>$orange</code></td>
						<td>#ff8500</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-red.png" alt="Red"></td>
						<td><code>$red</code></td>
						<td>#e13a3a</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-pink.png" alt="Pink"></td>
						<td><code>$pink</code></td>
						<td>#b930a2</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-purple.png" alt="Purple"></td>
						<td><code>$purple</code></td>
						<td>#763294</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-indigo.png" alt="Indigo"></td>
						<td><code>$indigo</code></td>
						<td>#1a22a2</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-white.png" alt="White"></td>
						<td><code>$white</code></td>
						<td>#ffffff</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-lightest-grey.png" alt="Lightest grey"></td>
						<td><code>$lightest-grey</code></td>
						<td>#f9f9f9</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-light-grey.png" alt="Light grey"></td>
						<td><code>$light-grey</code></td>
						<td>#F0F0F0</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-neutral-grey.png" alt="Neutral grey"></td>
						<td><code>$neutral-grey</code></td>
						<td>#dddddd</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-medium-grey.png" alt="Medium grey"></td>
						<td><code>$medium-grey</code></td>
						<td>#cccccc</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-solid-grey.png" alt="Solid grey"></td>
						<td><code>$solid-grey</code></td>
						<td>#aaaaaa</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-grey.png" alt="Grey"></td>
						<td><code>$grey</code></td>
						<td>#555555</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-darkest-grey.png" alt="Darkest grey"></td>
						<td><code>$darkest-grey</code></td>
						<td>#333333</td>
					</tr>
					<tr>
						<td><img src="images/color/colorscheme-black.png" alt="Black"></td>
						<td><code>$black</code></td>
						<td>#2222222</td>
					</tr>
				</tbody></table>
  `);