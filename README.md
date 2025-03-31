# React - Simple Select

A simple React component that allows to easily create select dropdowns

## Requirements

### Usage requirements

Node.js > v23.10
npm > v11.2
React > v19.0

### Development requirements

Vite > v6.2
StoryBook > 8.6

## Installation

This package is not available through the npm registry yet. In order to install it you will first need to add the following line to your `.npmrc file`

`@jonathanventuri:registry=https://npm.pkg.github.com`

You will then be able to install it with npm with the following command :

`npm install @jonathanventuri/react-simpleselect`

## Usage

Here is a basic example on how to use this component

```js
import { SimpleSelect } from '@jonathanventuri/react-simpleselect'

function MyComponent(} {

  const options = [
    { value: 'Value1', label: 'Label for Value1' },
    { value: 'Value2', label: 'Label for Value2' },
  ]

  return <SimpleSelect placeholder='Pick an option' options={options} onChange={handleSelect} />

  function handleSelect(e) {
    // handle the value here
  }

}
```

## Component Props

`as: node` The underlying HTML element or React component to use to render the dropdown. Default to `select`

`placeholder: string` Placeholder text that is displayed as a first (disabled) option in the dropdown

`options: array of {value, label} objects` The list of options to be displayed by the select dropdown, defined as an array of objects with `value` and `label` properties.
