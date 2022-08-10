import react from 'react';

const Home = () => {
    return (
        <div className="p-16">
            <div className="flex justify-center pb-20">
                <div className="header text-4xl w-80 box-shadow p-4">
                    The Waygates
                </div>
            </div>
            <div className="flex w-full">
                <div className="w-7/12 pr-16 text-left space-y-12">
                    <div className="text-3xl box-shadow p-3 w-fit">About</div>
                    <div className="box-shadow p-4">
                        <div className="pb-8">
                            Dont you want to earn rewards while browsing. waygates isa platform that incentivizes you just for doing that. Earn rewards while you DYOR, and browse content in the crypto / nft space.
                        </div>
                        <div>
                        Our membership NFTs art is analogous to our utility, the drop will be 5555 pieces of cute pixel art
                        that depicts adventurers and their companions getting lost in exploration. Who knows what treasure you'll find together with your avatars?
                        </div>
                    </div>
                </div>
                <div className="w-5/12">
                    <div className="w-full flex justify-center">
                        <img src="https://via.placeholder.com/350x450" alt="waygates portal"/>
                    </div>
                    <div className="text-center pt-4 text-sm italic">Where will the waygates take you? 🌀</div>
                </div>
            </div>
        </div>
    )
};

export default Home;