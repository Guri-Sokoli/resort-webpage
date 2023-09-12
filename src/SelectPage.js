import Header from "./pages/Home/Header";

import HomeQuickLinks from "./pages/Home/HomeQuickLinks";

const SelectPage = () => {
    return (
        <div className="flex flex-col max-w-full text-white font-raleway bg-white">
            <Header />

            <HomeQuickLinks />
        </div>
    );
};

export default SelectPage;
