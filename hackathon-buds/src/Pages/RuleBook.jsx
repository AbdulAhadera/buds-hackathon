import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';

function RuleBook() {
    const images = [
        "src/assets/page1.jpg",
        "src/assets/page2.jpg",
        "src/assets/page3.jpg",
        "src/assets/page4.jpg",
        "src/assets/page5.jpg"
    ];

    // State to manage FlipBook dimensions
    const [dimensions, setDimensions] = useState({ width: 500, height: 700 });

    // Function to handle screen resizing
    const updateDimensions = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 425) {
            setDimensions({ width: 120, height: 180 });
        } else if (screenWidth <= 767) {
            setDimensions({ width: 180, height: 250 });
        } else if (screenWidth <= 1023) {
            setDimensions({ width: 350, height: 500 });
        } else {
            setDimensions({ width: 500, height: 700 });
        }
    };

    // Effect to set dimensions on initial render and window resize
    useEffect(() => {
        updateDimensions(); // Set dimensions on initial load
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions); // Cleanup
    }, []);

    return (
        <div className="flex justify-center bg-black p-2 py-5">
            <HTMLFlipBook
                height={dimensions.height}
                width={dimensions.width}
                showCover={true}
            >
                {images.map((image, index) => (
                    <div key={index} className="page">
                        <img
                            src={image}
                            alt={`Page ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
}

export default RuleBook;
