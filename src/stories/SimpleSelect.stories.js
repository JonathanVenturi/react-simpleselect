import { SimpleSelect } from '../../lib/SimpleSelect'

export default {
  title: 'React Components/SimpleSelect',
  component: SimpleSelect
}

export const AsASelectDropdown = {
  args: {
    placeholder: 'Pick an option',

    options: [
      {
        label: 'Label',
        value: 'Value'
      }
    ]
  }
}
