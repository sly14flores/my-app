const TextInput = ({
  className = '',
  label,
  type,
  id,
  name,
  value,
  handleChange,
  required = false,
  invalid,
  invalidMessage,
  placeholder = '',
  disabled = false,
}) => {

  return (
    <div className={className}>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor={id}>
          {label}
          { required && <span className="text-rose-500"> *</span> }
        </label>
        <input
          id={id}
          name={name}
          className={
            `form-input w-full${invalid ? ' border-rose-300' : ''}`
          }
          type={type}
          value={value || ''}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
      <div>
      {
        invalid && <div className="text-xs mt-1 text-rose-500">{invalidMessage}</div>
      }
      </div>
    </div>
  )
}

export default TextInput