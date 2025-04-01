/**
 * This component displays a select dropdown with customisable options
 *
 * @component
 *
 * @typedef {object} SimpleSelectProps
 * @property {React.FC|string} [as='select'] The component to render as
 * @property {string} placeholder A disabled option displayed at the top of the list
 * @property {Array.<{value: string, label: string}>} options The list of options to be displayed by the select dropdown.
 * @property {...*} args The properties to pass down to the main component element
 *
 * @param {React.InputHTMLAttributes<HTMLInputElement> & SimpleSelectProps} props The component props
 * @returns {JSX.Element} The select component to be rendered
 */

export function SimpleSelect({ as = 'select', placeholder, options, ...args }) {
  const AsComponent = as
  return (
    <AsComponent {...args}>
      {placeholder && (
        <option disabled value={''}>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </AsComponent>
  )
}
