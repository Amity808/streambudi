import React, { useEffect, useState } from 'react'


const Header = () => {
    const words = ['Streams', 'Meetings', 'Events'];
    const [changingText, setChangingText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);
    const typingSpeed = isDeleting ? 100 : 150;

    useEffect(() => {
        const handleTyping = () => {
            const fullWord = words[currentWordIndex];

            // Update the text based on typing or deleting
            if (!isDeleting) {
                setChangingText(fullWord.substring(0, subIndex + 1));
                setSubIndex((prev) => prev + 1);
            } else {
                setChangingText(fullWord.substring(0, subIndex - 1));
                setSubIndex((prev) => prev - 1);
            }

            if (!isDeleting && subIndex === fullWord.length) {
                setTimeout(() => setIsDeleting(true), 1000);
            }

            if (isDeleting && subIndex === 0) {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [subIndex, isDeleting, currentWordIndex]);

    // Blink the cursor every 500ms
    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(blinkInterval);
    }, []);


    return (
        <div className='h-screen relative w-10/12 m-auto text-dust flex w-full leading-tight flex-col lg:flex-col justify-center pt-[100px] items-center'>
            <div className='flex flex-col justify-center space-y-4 items-center'>
                <p className='text-[70px] w-8/12 m-auto  text-dust text-center  '>
                    <span className='text-light-green'>Supercharge</span> Your <span className='text-red-400'>{changingText}
                        <span style={{ visibility: blink ? 'visible' : 'hidden' }}>|</span>
                    </span> with StreamBudi</p>
                <p className=' text-[20px]'>
                    Engage your audience like never before with interactive features powered by Solana blockchain
                </p>
                <a href='#' className='p-2  bg-light-green text-[14px] shadow hover:bg-light-green/50 text-dark hover:text-white rounded-xl mt-3'>
                    Get Started, it's free
                </a>
            </div>

        </div>
    )
}

export default Header  