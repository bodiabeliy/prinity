import Image from "next/image";
import JohnStonn from "@/public/John Stonn.jpg"
import LiaTarasenko from "@/public/Lia Tarasenko.jpg"
import MargaretAdam from "@/public/Maratett Adam.jpg"
import LuisSaren from "@/public/Luis Saren.jpg"
import RobertCoperski from "@/public/Robert Coperski.jpg"




const TeamScreen = () => {
    const team = [
        {
            position: "Founder and CEO",
            img: JohnStonn.src,
            fullName: "John Stonn",
            description:""

        },
        {
            position: " Middle Marketing specialist",
            img: LiaTarasenko.src,
            fullName: "Lia Tarasenko"
        },
        {
            position: "Senior Front-End Developer",
            img: LuisSaren.src,
            fullName: "Luis Saren"
        },
        {
            position: "Senior Back-End Developer",
            img: RobertCoperski.src,
            fullName: "Robert Coperski"
        },
        {
            position: "UI/UX Designer ",
            img: MargaretAdam.src,
            fullName: "Margaret Adam"
        }
    ];
    return ( 
        <>
        <div className="team-section">
        <div className="team-section wrapper">
            <h1 className="team-sectionTitle" > Our Team:</h1>
            <div className="team-sectionList bg-white flex flex-wrap">
                {team.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-xs m-3" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.img}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.fullName}
                            </h4>
                            <p className="mb-2 leading-normal text-black">
                            {items.position}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    </>
     );
}
 
export default TeamScreen;