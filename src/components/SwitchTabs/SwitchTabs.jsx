import { useState } from "react"

const SwitchTabs = ({ data, onTabChange, title }) => {
    const [selected, setSelected] = useState(0)
    const [left, setLeft] = useState(0)

    const activeTab = (tab, index) => {
        setLeft(index * 100);
        setTimeout(() => {
            setSelected(index);
        }, 300);
        onTabChange(tab, index);
    };
    return (
        <div className="flex my-5 justify-between items-center gap-5">
            <span className="lg:text-3xl text-lg text-white">{title}</span>
            <div className="flex items-center lg:gap-8 bg-white rounded-3xl h-8 ">
                {
                    data.map((tab, index) => (
                        <span className={`lg:px-5 px-2 cursor-pointer text-sm  ${selected === index ? "gradient text-sm h-full bg-gradient-to-l from-pink  to-orang border border-white   text-white  rounded-3xl  lg:w-28 flex items-center justify-center" : ""
                            }`} key={index} onClick={() => activeTab(tab, index)}>{tab}</span>
                    ))
                }
                <span style={{ left }} className="transitionBtn" ></span>
            </div>
        </div>
    )
}

export default SwitchTabs