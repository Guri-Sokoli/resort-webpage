export const HeaderLink = (props) => {
    return (
        <button className="px-12 group flex transition duration-300">
            <li className="">
                <a href={props.href} className="flex flex-row">
                    {props.children}
                </a>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </li>
        </button>
    );
};
