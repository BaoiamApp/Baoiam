import React from 'react'
import { Link } from 'react-router-dom'
import { LogoDark, LogoLight } from '../../assets/assets';

const Logo = ({ isDark }) => {
    return (
        <>
            <Link
                rel="canonical"
                to={"/"}
                className={`w-24 h-16 mb-4 ml-4 xl:ml-8`}
            >
                <img
                    src={isDark ? LogoDark : LogoLight}
                    className={`w-full h-full`}
                    alt="logo"
                />
            </Link>
        </>
    )
}

export default Logo