import Spinner from "../../Spinner"

const SubmitButton = ({
  label,
  submitting,
  trigger = null
}) => {

  return (
    <div>
      <button ref={trigger} type="submit" className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap" disabled={submitting}>
        <span className="inline-block mt-0.5">
          <Spinner loading={submitting} />
        </span>
        <span>{label}</span>
      </button>
    </div>
  )
}

export default SubmitButton