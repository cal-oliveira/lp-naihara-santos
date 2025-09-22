import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

export default function Hero(){
    return(
        <>
            <div className="block lg:hidden">
                <HeroMobile />
            </div>
            <div className="hidden sm:block">
                <HeroDesktop />
            </div>
        </>
    )
}