import "../StyleSheets/Hero.css"
import anime from "animejs";

const WaterDropGrid = () => {
    return (
        <div className="px-2 sm:flex bg-primary-background px-8 py-12 relative overflow-hidden">
       
        <div className="absolute z-0">
          <DotGrid />
        </div>
      

        <div className="sm:relative z-10 flex flex-col justify-center items-center">
          <h1 className="text-2xl z-30 sm:text-4xl text-primary-text">
            It&#39;s happening
          </h1>
          <h1 className="text-4xl z-30 text-primary-text font-bold py-4 hover:text-accent-color-1 transition-colors duration-200 ease-in-out sm:  md:text-8xl">
            BUDS HACKATHON
          </h1>
          <p className="leading-tight bg-primary-background z-30 text-lg text-primary-text sm:text-xl w-full  md:w-2/3 text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate iste, quae molestias harum numquam dolorem, magnam, odit optio delectus impedit fuga eveniet neque deleniti quod enim aut? Deserunt, expedita minima!
          </p>
          <button className="btn z-30">
            Register Now
          </button>
        </div>
      </div>
      
    );
};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

const DotGrid = () => {

    const handleDotClick = (e) => {
        anime({
            targets: ".dot-point",
            scale: [
                { value: 1.35, easing: "easeOutSine", duration: 250 },
                { value: 1, easing: "easeInOutQuad", duration: 500 },
            ],
            translateY: [
                { value: -15, easing: "easeOutSine", duration: 250 },
                { value: 0, easing: "easeInOutQuad", duration: 500 },
            ],
            opacity: [
                { value: 1, easing: "easeOutSine", duration: 250 },
                { value: 0.5, easing: "easeInOutQuad", duration: 500 },
            ],
            delay: anime.stagger(100, {
                grid: [GRID_WIDTH, GRID_HEIGHT],
                from: e.target.dataset.index,
            }),
        });
    };

    const dots = [];
    let index = 0;

    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push(
                <div
                    className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600 "
                    data-index={index}
                    key={`${i}-${j}`}
                >
                    <div
                        className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-accent-color-1"
                        data-index={index}
                    />
                </div>
            );
            index++;
        }
    }

    return (
        <div
            onClick={handleDotClick}
            style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
            className="grid w-fit"
        >
            {dots}
        </div>
    );
};

export default WaterDropGrid;