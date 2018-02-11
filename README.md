# Introduction
Storybook is a UI development environment for your UI components. You can visualize different states of your UI components and develop them interactively.
Storybook runs outside of your app. So you can develop UI components in isolation without worrying about app specific dependencies and requirements.

# Testing in Storybook
Different Aspects of UI Testing
1. [Structual Testing](https://storybook.js.org/testing/structural-testing/)
2. [Interaction Testing](https://storybook.js.org/testing/interaction-testing/)
3. [CSS/Style Testing](https://storybook.js.org/testing/css-style-testing/)
4. [Manual Testing](https://storybook.js.org/testing/manual-testing/)
## Structual Testing
For React, [Jest’s snapshot testing](https://facebook.github.io/jest/blog/2016/07/27/jest-14.html) is the best way to do Structural Testing. Storybook has integrated it into [StoryShots](https://github.com/storybooks/storybook/tree/master/addons/storyshots).

```shell
npm i -D @storybook/addon-storyshots
npm install --save-dev react-test-renderer
```
```js
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({ /* configuration options */ });
```
```shell
npm test
```
## Interaction Testing
Using Enzyme to simulate user input and see what they are doing. In storybook, you can use [specs addons](https://github.com/mthuret/storybook-addon-specifications)

> ** create enzyme config js file
```js
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```
> ** add the following code into webpack.config.js
```
externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
  }
```
# Reference
https://storybook.js.org/
https://storybook.js.org/basics/writing-stories/
https://storybook.js.org/addons/addon-gallery/
https://github.com/storybooks/storybook/tree/master/addons/storyshots
https://facebook.github.io/jest/docs/en/tutorial-react.html
https://medium.com/@ericclemmons/jest-snapshots-for-storybook-5bf36b5e5a3a
https://storybook.js.org/testing/react-ui-testing/
