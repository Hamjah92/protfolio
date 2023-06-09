import React from 'react';
import {motion} from 'framer-motion';
import data from "../../data";
import uniqid from 'uniqid';

interface IProps {
    active: string
}

const {info: {navbar: {linksDetails}}} = data

const dotHover = {
    whileHover: {
        scale: [1, 1.5],
        backgroundColor: '#313bac',
        transition: {duration: 0.2, ease: 'easeInOut'}
    }
}

const NavigationDots = ({active}: IProps) => {
    return (
        <aside className={'hidden flex-col justify-center space-y-6 px-5 sm:flex'}>

            {linksDetails.map((linksDetail, index) => (
                <motion.a
                    key={uniqid()}
                    href={linksDetail.link}
                    whileHover={dotHover.whileHover}
                    className={`rounded-full border-none outline-none w-2.5 h-2.5 ${active == linksDetail.link ? 'bg-secondary' : 'bg-gray-300'}`}
                />
            ))}

        </aside>
    );
};

export default NavigationDots;
