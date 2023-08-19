export const HeaderLink = (props) => {
    return (
        <button className="px-12 group flex transition duration-300">
            <li className="">
                <a href={props.href}>
                    {props.children}
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </a>
            </li>
        </button>
    );
};
