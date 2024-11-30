import '../StyleSheets/Hero.css';

function Hero() {
  return (
    <div className="container">
      <div className="context">
        <div className="heading-wrapper">
          <h1 className='text-3xl'>Its Happening</h1>
        </div>
        <div className="heading-wrapper">
          <h1 className='text-8xl hover:text-accent-color-1 transition-colors duration-200 ease-in-out'>HACKATHON</h1>
        </div>
        <div className="description-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ullam ea accusamus aliquid saepe explicabo quod inventore repudiandae ipsam ut quo perspiciatis molestias neque at, est quisquam libero quidem! Porro.
          </p>
          <button className='btn'>Register yourself now</button>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
