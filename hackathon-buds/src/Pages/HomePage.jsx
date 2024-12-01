
// import About from "../Components/About"
import Hero from "../Components/Hero"
import Sponsors from "../Components/Sponsors"

function HomePage() {
  return (
    <>
      <div className="px-2 sm:px-10">
        <Hero />
        {/* <About /> */}
        <Sponsors />
      </div>
    </>
  )
}

export default HomePage