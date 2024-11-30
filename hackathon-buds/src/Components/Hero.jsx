import WaterDropGrid from "./WaterDropGrid";

function Hero() {
  return (
    <div className="bg-primary-background flex flex-col justify-center items-center relative">
      <div className="w-full h-full z-0">
        <WaterDropGrid />
      </div>
    </div>

  )
}

export default Hero;