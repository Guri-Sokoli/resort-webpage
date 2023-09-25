import Header from "./pages/Home/Header";
import HomeQuickLinks from "./pages/Home/HomeQuickLinks";
import SelectMainContent from "./pages/Select/SelectMainContent";
import SelectDropDown from "./pages/Select/SelectDropDown";
import SelectStayTime from "./pages/Select/SelectStayTime";

const SelectPage = () => {
    return (
        <div className="flex flex-col max-w-full text-white font-raleway bg-white">
            <Header />
            <SelectMainContent />

            <SelectDropDown />

            <div className="flex flex-row justify-around h-full p-12">
                <SelectStayTime />
                {/* qitu kom pun 
                    <SelectCabin /> */}
            </div>

            <HomeQuickLinks />
        </div>
    );
};

export default SelectPage;
