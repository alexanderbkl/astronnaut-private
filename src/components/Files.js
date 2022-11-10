import Sidebar from './Sidebar';
import React, { useState } from 'react';
import FilesComponent from './FilesComponent';
import Passwords from './Passwords';
import Data from './Data';
import { decrypt } from "../utils/AES";
import ounn from "../assets/logo.png";



const useLocalStorage = (storageKey, fallbackState) => {
    const [value, setValue] = React.useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
    );

    React.useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};


const useSessionStorage = (storageKey, fallbackState) => {
    const [value, setValue] = React.useState(
        JSON.parse(sessionStorage.getItem(storageKey)) ?? fallbackState
    );

    React.useEffect(() => {
        sessionStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
};
var i = 1;

const Files = () => {


    const [accountKey] = useLocalStorage('accountKey', false);
    const [accountPassword, setAccountPassword] = useSessionStorage('accountPassword', false);

    var [selectedKey] = useState(null);

    if (accountKey !== false) {
        if (typeof accountKey === "string") {
            try {

                selectedKey = decrypt(accountKey, accountPassword);
            }
            catch {
                if (i < 2) {
                    if (selectedKey == null) {
                        setAccountPassword(false);
                        alert("Incorrect password")

                        window.location.replace("/beta2");
                    } else if (accountPassword === false) {
                        setAccountPassword(false);
                        window.location.replace("/beta2");
                    } else {
                        setAccountPassword(false);
                        window.location.replace("/beta2");
                    }
                    i++;
                }

            }




        }
    } else {
        setAccountPassword(false);

        window.location.replace("/beta2/");
    }

    //create a function that automatically scrolls as the window height (100vh) of the page (not bottom)

    const scrollToNext = (n) => {
        const wH = window.innerHeight;
        window.scrollTo({
            top: wH * n,
            behavior: 'smooth'
        });


    };








    return (
        <div>
            {/*<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />*/}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                height: '100vh',
                backgroundColor: '#EEEEEE'
            }} className="App" id="outer-container">
                <div style={{ display: 'flex', position: 'absolute', top: 0, flexDirection: 'column', width: '100vw', alignItems: 'center', alignContent: 'center' }}>
                        <img style={{ position: 'relative', width: "150px", padding: "10px" }} src={ounn} alt="logo.png"></img>
                        <h1 style={{ position: 'relative', color: 'rgb(50,50,50)' }}>astronnaut</h1>
                    </div>
                <div id="page-wrap">
                    
                    <h1>Upload files</h1>
                    <FilesComponent selectedKey={selectedKey} />
                    {/*Button onclick executeScroll to the next page-wrap */}
                    <button style={{ position: 'absolute', top: '90%', left: '45%', width: "10vw", padding: "10px" }} onClick={() => { scrollToNext(1) }}>Next</button>
                    <h1 style={{ position: 'absolute', top: '120%', left: '0', right: '0' }}>Upload data</h1>
                    <h1 style={{ position: 'absolute', top: '220%', left: '0', right: '0' }}>Upload passwords</h1>

                </div>

            </div>

            <div id="page-wrap">

                <Data selectedKey={selectedKey} />

                <button style={{ position: 'absolute', top: '110%', left: '45%', width: "10vw", padding: "10px" }} onClick={() => { scrollToNext(0) }}>Previous</button>
                <button style={{ position: 'absolute', top: '190%', left: '45%', width: "10vw", padding: "10px" }} onClick={() => { scrollToNext(2) }}>Next</button>

            </div>
            <div id="page-wrap">
                <Passwords selectedKey={selectedKey} />
                <button style={{ position: 'absolute', top: '210%', left: '45%', width: "10vw", padding: "10px" }} onClick={() => { scrollToNext(1) }}>Previous</button>
                <p style={{ marginLeft: '10px', marginRight: '10px', alignContent: 'center', alignSelf: 'center', textAlign: 'center', position: 'absolute', left: '0', right: '0', bottom: '-200%', marginTop: '50px', width: '100%' }}>When uploading any data or files, these are automatically encrypted using your private key and stored across a fully decentralized network of nodes around the Earth. You and only you have control of your private key, and therefore you and only you can see or access your space, not even astronnaut.space has the possibility to see, interact, or access neither your space nor your private key.</p>

            </div>
        </div>
    );
};

export default Files;