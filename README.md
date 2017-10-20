# React iotaCSS

Stateless React Components for iotaCSS.


## Features

* Uses [iotaCSS](https://iotacss.com) styles
* You can use [iotaPlate](https://github.com/iotacss/iotaplate) with it
* Works on any application architecture
* Great for prototyping
* Production ready
* Tested


## Getting Started

### Step 1: Install `react-iotacss` package

```
$ npm install --save react-iotacss
```

### Step 2: Install iotaCSS

For this example, we will use iotaPlate, iotaCSS's official CLI.

```
$ npm install -g iotaplate
```

Navigate to the directory you want to have your scss. For this example is `scss`:

```
$ cd scss
$ iotaplate
```

### Step 3: Import and use React iotaCSS

```jsx
import React from 'react'

// Import Container, H1 and P components
import { Container, H1, P } from 'react-iotacss'

// Import iotaCSS SCSS code that we generated with iotaPlate
import './scss/main.scss'

const App = () => (
  <Container size="small">
    <H1 size="large">Getting Started with React iotaCSS</H1>
    <P>This is an example on how to get started with React iotaCSS</P>
  </Container>
)
```

**Also, make sure you check the demo [here](https://github.com/iotacss/react-iotacss/tree/master/demo).**


## Documentation


### Base

The Base is responsible for translating `u` prefixed properties to iotaCSS utility classes, for example `uText="center"` will translate to `class="u-text-center"`. It's extended by all the React Components and you should use it in all your components if you want them to support React iotaCSS utility properties. Properties that are not specific to `Base` will be passed down to to the rendered `tagName`.

#### Properties

| Name      | Type    | Default | Description                 |
| ---       | ---     | ---     | ---                         |
| tagName   | String  | div     | TagName to be used          |

#### Example

```jsx
<Base tagName="p" uText="center">
  Some paragraph
</Base>
```


### Container

The Container is responsible for creating smart, flexible and responsive containers.

#### Properties

| Name      | Type    | Default | Description                   |
| ---       | ---     | ---     | ---                           |
| gutter    | String  | ''      | Container extra gutter name   |
| size      | String  | ''      | Container extra size name     |
| className | String  | ''      | Allows to specify a CSS class |

#### Example

```jsx
<Container size="large">
  Some content here
</Container>
```


### Grid

The Grid is responsible for building a smart, flexible and responsive grid.

#### Properties

| Name        | Type      | Default | Description             |
| ---         | ---       | ---     | ---                |
| align       | oneOf(['right', 'center', 'top', 'middle', 'bottom', 'around', 'between']) | 'top' | Align grid vertically and horizontally  |
| gutter      | String    | ''      | Grid extra gutter name  |
| rev         | Boolean   | false   | Reversed grid           |
| equalHeight | Boolean   | false   | Grid with equal height  |
| className | String  | ''      | Allows to specify a CSS class |

#### Example

```jsx
<Grid gutter="large">
  <Grid.Column uSize="1/2">
    Half width column
  </Grid.Column>
  <Grid.Column uSize="1/2">
    Another half width column
  </Grid.Column>
</Grid>
```

### List

The List is responsible for creating inline, block and span lists. You can use it to build the structure of UI components like navigations or vertical lists.

#### Properties

| Name   | Type                               | Default  | Description            |
| ---    | ---                                | ---      | ---                    |
| type   | oneOf(['inline', 'block', 'span']) | 'inline' | Type of list           |
| align  | oneOf(['top', 'middle', 'bottom']) | 'top'    | Align list vertically  |
| gutter | String                             | ''       | List extra gutter name |
| className | String  | ''      | Allows to specify a CSS class |

#### Example

```jsx
<List type="block">
  <List.Item>
    List Item 1
  </List.Item>
  <List.Item>
    List Item 1
  </List.Item>
</List>
```

### Media

Media is responsible for a common design pattern where there is a fixed and a fluid width column next to each other. It's used to build the structure of sidebars, comments, avatar and other similar UI components.

#### Properties

| Name   | Type                               | Default  | Description             |
| ---    | ---                                | ---      | ---                     |
| align  | oneOf(['top', 'middle', 'bottom']) | 'top'    | Align media vertically  |
| gutter | String                             | ''       | Media extra gutter name |
| rev    | Boolean                            | false    | Reversed media          |
| res    | Boolean                            | false    | Responsive media        |
| className | String  | ''      | Allows to specify a CSS class |

#### Example

```jsx
<Media align="middle">
  <Media.Fixed>
    Fixed part of Media
  </Media.Fixed>
  <Media.Fluid>
    Fluid part of Media
  </Media.Fluid>
</Media>
```

### Type

The Type is responsible for making responsive typography a piece of cake.

#### Properties

| Name     | Type   | Default  | Description     |
| ---      | ---    | ---      | ---             |
| size     | String | ''       | Typography size |
| tagName  | String | 'p'      | HTML tag to use |
| className | String  | ''      | Allows to specify a CSS class |

```jsx
<Type tagName="span" size="large">Large Text</Type>
<H1>Heading 1</H1>
<H2>Heading 2</H2>
<H3>Heading 3</H3>
<H4>Heading 4</H4>
<H5>Heading 5</H5>
<H6>Heading 6</H6>
<P>Paragraph</P>
```

**Note: H1 - H6 and P components do not provide any size. They only use the related HTML tag.**


### Utilities

React iotaCSS uses a smart way to parse properties to utility classes:

```jsx
<Type uText="center" uMb>Centered text with default margin botto</Type>

<p class="o-text-center u-mb">Centered text with default margin bottom</p>
```

#### Available Properties

The available properties are the same as the utilities that come with iotaCSS:

* uAlign
* uBgcolor
* uCf
* uColor
* uDisplay
* uFloat
* uM
* uMt
* uMr
* uMb
* uMl
* uMv
* uMh
* uOpacity
* uP
* uPt
* uPr
* uPb
* uPl
* uPv
* uPh
* uPosition
* uPull
* uPush
* uSize
* uText
* uTransform
* uWeight


#### Margin / Padding

**One important note for Margin and Padding utility properties.** As decribed in the docs for [Margin](https://www.iotacss.com/docs/utilities/margin/) and [Padding](https://www.iotacss.com/docs/utilities/padding/), you will need to add an extra '-' in the SCSS configuration for the extra margin/padding sizes like the following:

```scss
$iota-utils-margin-extra: (
  -small: 10px
);
```

so, it will generate a class with like '.u-mb-small' instead of '.u-mbsmall'. **This is required for React iotaCSS because it always uses a '-' to separate the margin/padding direction from the extra margin/padding size.**


#### Properties

| Name       | Type                                           | Description        |
| ---        | ---                                            | ---                |
| uAlign     | String                                         | Vertical Align     |
| uBgcolor   | String                                         | Background Color   |
| uCf        | Boolean                                        | Clearfix           |
| uColor     | String                                         | Color              |
| uDisplay   | String                                         | Display            |
| uFloat     | String                                         | Float              |
| uM         | oneOfType([PropTypes.bool, PropTypes.string])  | Margin             |
| uMt        | oneOfType([PropTypes.bool, PropTypes.string])  | Margin Top         |
| uMr        | oneOfType([PropTypes.bool, PropTypes.string])  | Margin Right       |
| uMb        | oneOfType([PropTypes.bool, PropTypes.string])  | Margin Bottom      |
| uMl        | oneOfType([PropTypes.bool, PropTypes.string])  | Margin Left        |
| uMv        | oneOfType([PropTypes.bool, PropTypes.string])  | Margin Vertical    |
| uMh        | oneOfType([PropTypes.bool, PropTypes.string])  | Margin Horizontal  |
| uOpacity   | String                                         | Opacity            |
| uP         | oneOfType([PropTypes.bool, PropTypes.string])  | Padding            |
| uPt        | oneOfType([PropTypes.bool, PropTypes.string])  | Padding Top        |
| uPr        | oneOfType([PropTypes.bool, PropTypes.string])  | Padding Right      |
| uPb        | oneOfType([PropTypes.bool, PropTypes.string])  | Padding Bottom     |
| uPl        | oneOfType([PropTypes.bool, PropTypes.string])  | Padding Left       |
| uPv        | oneOfType([PropTypes.bool, PropTypes.string])  | Padding Vertical   |
| uPh        | oneOfType([PropTypes.bool, PropTypes.string])  | Padding Horizontal |
| uPosition  | String                                         | Position           |
| uPull      | String                                         | Offset After       |
| uPush      | String                                         | Offset             |
| uText      | String                                         | Text Align         |
| uTransform | String                                         | Text Transform     |
| uWeight    | String                                         | Font Weight        |


#### Example

```js
<H1 size="large" uText="center" uMb>Hello World</H1>

<h1 class="o-type-size u-text-center u-mb">Hello World</h1>
```

#### Responsive Utilities

React iotaCSS also supports responsive utilities with a similar syntax to iotaCSS itself, with one big difference. Since in React you cannot pass two times the same property with difference values, iotaCSS introduces the 'all' word which is used in case you want to have for example a default margin everywhere and a large margin to only 'sm' breakpoint:

```jsx
<Type uText="right center@sm" uMb="large" uMt="all large@sm">Right on all devices, center on tablets and up. Default margin bottom in all devices and large margin bottom in tablets and up</Type>

<p class="u-text-right u-text-center@sm u-mb-large u-mt u-mt-large@sm" uMb="large" uMt="all large@sm">Right on all devices, center on tablets and up. Default margin bottom in all devices and large margin bottom in tablets and up</p>
```

## Testing

Interactive mode

```js
// NPM
npm run test:watch

// Yarn
yarn test:watch
```

Single run mode:

```js
// NPM
npm test

// Yarn
yarn test
```
