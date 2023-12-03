import Image from "next/image";
import IllutrationHero from "../../public/illustration-hero.png"
import Title from "./title";
import Text from "./text";
import Price from "./price";
import ProceedBtn from "./proceed-btn";
import CancelBtn from "./cancel-btn";

function Card() {
    return (
        <div className="flex flex-col gap-8 bg-white w-[345px] my-5 rounded-3xl sm:w-[450px] sm:gap-10">
            <Image src={IllutrationHero} alt="illustration hero" className="rounded-t-3xl"/>
            <div className="flex flex-col gap-7 px-5 pb-8 sm:px-12">
                <div className="flex flex-col gap-4">
                    <Title />
                    <Text />
                </div>
                <Price />
                <ProceedBtn />
                <CancelBtn />
            </div>
        </div>
    );
}

export default Card;