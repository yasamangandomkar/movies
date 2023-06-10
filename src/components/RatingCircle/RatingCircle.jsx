import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RatingCircle = ({ rating }) => {
    const percentage = rating;
    return (
        <div className="w-10 bg-white rounded-full">
            <CircularProgressbar value={percentage} maxValue={10} text={`${percentage}%`} styles={buildStyles({
                textColor: "black",
                pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                textSize: "22px",
                fontSize: "bold"
            })} />
        </div>
    )
}

export default RatingCircle