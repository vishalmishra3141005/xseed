

import Tile from "./Tile";

export default function Content() {

    const additionLinks = [
        [ "Using place value to add 3-digit numbers: part 1" , "https://www.youtube.com/watch?v=Wm0zq-NqEFs" ],
        [ "Using place value to add 3-digit numbers: part 2" , "https://www.youtube.com/watch?v=O9zSHs1TWMM" ],
        [ "Adding 3-digit numbers" , "https://www.youtube.com/watch?v=9hM32lsQ4aI" ], 
    ];

    const subtractionLinks = [
        [ "Methods for subtracting 3-digit numbers" , "https://www.youtube.com/watch?v=ZIiZkmaehsU" ],
        [ "Worked example: Subtracting 3-digit numbers (regrouping twice)", "https://www.youtube.com/watch?v=LSaaKau63Gg" ],
    ];

    return (
        <div className="content-container">
            <Tile title="3-digit addition" videoLink={additionLinks} />
            <Tile title="3-digit subtraction" videoLink={subtractionLinks} />
        </div>

    );
}