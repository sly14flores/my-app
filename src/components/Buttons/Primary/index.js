import Spinner from "../../Spinner"

const PrimaryButton = ({
  label,
  submitting,
  handleClick,
  trigger = null,
}) => {

  const onClick = (e) => {
    e.preventDefault()
    handleClick()
  }

  return (
    <div>
      <button ref={trigger} className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap" onClick={onClick} disabled={submitting}>
        <span className="inline-block mt-0.5">
          <Spinner loading={submitting} />
        </span>
        <span>{label}</span>
      </button>
    </div>
  )
}

export default PrimaryButton