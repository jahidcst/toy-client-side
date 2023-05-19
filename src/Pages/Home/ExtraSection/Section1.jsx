
const Section1 = () => {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-4xl font-semibold text-center text-purple-700 mb-3">SHOP BY AGE </h1>
                <p className="text-center">WE HAVE PRODUCTS FOR ALL AGES. OUR ASSISTANTS ALWAYS HELP YOU TO DO RIGHT CHOICE.</p>
            </div>
            <div className="flex gap-32 ml-12">
                <div>
                    <div className="avatar">
                        <div className="w-72 rounded-full">
                            <img src="https://images.unsplash.com/photo-1605951723326-e46b7a528c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80" />
                        </div>
                    </div>
                    <p className="pl-20 font-bold text-lg">2 TO 4 YEARS</p>
                </div>


                <div>
                    <div className="avatar">
                        <div className="w-72 rounded-full">
                            <img src="https://images.unsplash.com/photo-1554342321-0776d282ceac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                        </div>
                    </div>
                    <p className="pl-20 font-bold text-lg">5 TO 7 YEARS</p>
                </div>
                <div>
                    <div className="avatar">
                        <div className="w-72 rounded-full">
                            <img src="https://images.unsplash.com/photo-1629783509182-68c8c190e952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                        </div>

                    </div>
                    <p className="pl-20 font-bold text-lg">8 TO 13 YEARS</p>
                </div>
            </div>

        </div>
    );
};

export default Section1;