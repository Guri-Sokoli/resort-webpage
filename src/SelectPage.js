import Header from "./pages/Home/Header";

import HomeQuickLinks from "./pages/Home/HomeQuickLinks";
import SelectMainContent from "./pages/Select/SelectMainContent";

const SelectPage = () => {
    return (
        <div className="flex flex-col max-w-full text-white font-raleway bg-white">
            <Header />
            <SelectMainContent />
            <div className="flex w-full h-32 bg-gray-700"></div>
            {/* qitu kom pun */}
            <HomeQuickLinks />
        </div>
    );
};

export default SelectPage;
