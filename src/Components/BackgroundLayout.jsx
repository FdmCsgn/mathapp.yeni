import React from "react";

const BackgroundLayout = () => {
    return (
        <div
            className="h-screen w-full fixed left-0 top-0 -z-10 overflow-hidden flex items-center justify-center"
            style={{
                backgroundColor: '#2f48e0', // İstediğiniz rengi burada ayarlayın
            }}
        >
        </div>
    );
};

export default BackgroundLayout;

