export const ActionButton = (props) => {
    const handleClick = () => {
        if (props.href && !props.disabled) {
            window.location.href = props.href;
        }
    };
    return (
        <div className="">
            <button
                disabled={props.disabled}
                className={`${props.padx ? props.padx : "px-6"} ${
                    props.pady ? props.pady : "py-4"
                } my-12 relative flex h-[50px] w-40 ${
                    props.buttonBgColor
                } items-center justify-center overflow-hidden text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out ${
                    props.disabled
                        ? ""
                        : "hover:shadow-blue-600 hover:before:h-56 hover:before:w-56"
                }`}
                onClick={handleClick}
            >
                <span className="relative z-10">{props.text}</span>
            </button>
        </div>
    );
};
