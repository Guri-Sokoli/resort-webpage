import Cabin1 from "../../img/cabin1.jpg";
import Cabin2 from "../../img/cabin2.jpg";
import Cabin3 from "../../img/cabin3.jpg";
import CabinCard from "../../components/CabinCard";
const AccomodationRec = () => {
    const cabins = [
        {
            pictureUrl: Cabin1,
            name: "Cabin One",
            guestNumber: "4",
            roomNumber: "2",
            description: "The 1 bedroom is perfect for a friends getaway.",
            buttonColor: "bg-gradient-to-br from-cyan-500 to-blue-500",
            buttonPrice: "111",
            icons: [
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-stove.png",
                    title: "Oven Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-picnic-table.png",
                    title: "Picnic Table Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-microwave.png",
                    title: "Microwave Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2019/04/icon-10.png",
                    title: "Bath Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-toaster.png",
                    title: "Kettle Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/06/icon-fridge.png",
                    title: "Fridge Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/06/icon-bbq.png",
                    title: "Grill Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/06/icon-coffee.png",
                    title: "Coffe Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-pets.png",
                    title: "Pet Icon",
                },
            ],
            cabinNumber: "1",
        },
        {
            pictureUrl: Cabin2,
            name: "Cabin Two",
            guestNumber: "2",
            roomNumber: "2",
            description:
                "The 2 bedrooms are perfect for a family or friends getaway.",
            buttonColor: "bg-gradient-to-br from-teal-500 to-green-500",
            buttonPrice: "222",
            icons: [
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-stove.png",
                    title: "Oven Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-toaster.png",
                    title: "Kettle Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/06/icon-fridge.png",
                    title: "Fridge Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/06/icon-bbq.png",
                    title: "Grill Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/06/icon-coffee.png",
                    title: "Coffe Icon",
                },
            ],
            cabinNumber: "2",
        },
        {
            pictureUrl: Cabin3,
            name: "Cabin Three",
            guestNumber: "3",
            roomNumber: "3",
            description:
                "The 3 bedrooms are perfect for a family or friends getaway.",
            buttonColor: "bg-gradient-to-br from-orange-500 to-red-500",
            buttonPrice: "333",
            icons: [
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-stove.png",
                    title: "Oven Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-picnic-table.png",
                    title: "Picnic Table Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-microwave.png",
                    title: "Microwave Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2019/04/icon-10.png",
                    title: "Bath Icon",
                },
                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-toaster.png",
                    title: "Kettle Icon",
                },

                {
                    url: "https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-pets.png",
                    title: "Pet Icon",
                },
            ],
            cabinNumber: "3",
        },
    ];
    return (
        <div className="flex flex-col items-center w-full h-max bg-white pb-32">
            <div className="flex flex-col items-center text-gray-600 p-5">
                <h1 className="text-6xl font-bold p-12">
                    Accomodation Recommendations
                </h1>
                <p className="text-3xl py-2">Choose the best.</p>
                <div className="horizontalDivider"></div>
            </div>
            <div className="flex">
                {cabins.map((cabin, index) => (
                    <CabinCard key={index} {...cabin} />
                ))}
            </div>
        </div>
    );
};

export default AccomodationRec;
