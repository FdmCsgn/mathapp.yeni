import React from "react";

const BackgroundLayout = () => {
    return (
        <div
            className="h-screen w-full fixed left-0 top-0 -z-10 overflow-hidden flex items-center justify-center"
            style={{
                backgroundColor: '#c3f2cb', // İstediğiniz rengi burada ayarlayın
            }}
        >
        </div>
    );
};

export default BackgroundLayout;

