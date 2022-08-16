import Spinner from "../../Spinner"

const SecondaryButton = ({
  label,
  submitting = false,
  handleClick
}) => {

  return (
    <div>
      <button type="button" className="btn border-slate-200 hover:border-slate-300 text-slate-600" onClick={handleClick} disabled={submitting}>
        <span className="inline-block mt-0.5">
          <Spinner loading={submitting} />
        </span>
        <span>{label}</span>
      </button>
    </div>
  )
}

export default SecondaryButton