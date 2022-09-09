const spinner = require('./assets/spinner2.gif')

export const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width="180"
        src={spinner}
        alt="Loading..."
        className="text-center mx-auto"
      />
    </div>
  )
}
