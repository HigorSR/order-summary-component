import IconMusic from "@/imgs/icon-music";

function Price() {
    return (
        <div className="flex justify-between items-center p-3 bg-Very-pale-blue rounded-xl">
            <div className="flex gap-5">
                <IconMusic />
                <div>
                    <p className="font-bold">Annual Plan</p>
                    <p className="text-Desaturated-blue">$59.99/year</p>
                </div>
            </div>
            <button className="text-Bright-blue font-bold underline text-sm hover:no-underline">Change</button>
        </div>
    );
}

export default Price;