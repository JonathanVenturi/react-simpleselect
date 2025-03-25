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
