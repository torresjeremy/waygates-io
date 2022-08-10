const Utilities = () => {
    return (
        <div className="p-16">
            <div className="flex justify-center pb-20">
                <div className="header text-5xl w-fit box-shadow p-4">
                    Utilities
                </div>
            </div>
            <div className="flex w-full pb-16">
                <div className="lg:w-6/12 pr-16 text-left space-y-12">
                    <div className="text-3xl box-shadow p-3 w-fit">Holders</div>
                    <ul className="box-shadow p-12 list-disc">
                        <li className="pb-4">
                            <span className="font-bold">Get rewarded while you DYOR!</span> Get incentives while you explore NFT / Cardano / Blockchain / Tech and related content using our app.
                        </li>
                        <li className="pb-4">
                           <span className="font-bold">Benefit from what you already have.</span>  Unlock additional utility for partner NFT projects that you already own!
                        </li>
                        <li>
                            <span className="font-bold">Earn ADA while you help us grow.</span> Help us build and grow our roster of partners and get rewarded in return!
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-end w-full">
                <div className="lg:w-6/12 text-left space-y-12">
                    <div className="w-full flex md:justify-start lg:justify-end">
                        <div className="text-3xl box-shadow p-3 w-fit">Partners</div>
                    </div>
                    <ul className="box-shadow p-12 list-disc">
                        <li className="pb-4">
                            <span className="font-bold">We got you covered!</span> We'll enable temporary or long term utilities for your NFT project while you're busy building! <span className="underline underline-offset-2">DM us on Twitter!</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Utilities;