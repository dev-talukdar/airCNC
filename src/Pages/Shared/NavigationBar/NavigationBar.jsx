import React from 'react';
import Container from '../Container/Container';
import Logo from './Logo';
import Search from '../../../components/Search/Search';
import MenuDropdown from '../../../components/MenuDropdown/MenuDropdown';


const NavigationBar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1[x]'>
                <Container>
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0 '>
                        <div>
                            <Logo></Logo>
                        </div>
                        <div>
                            <Search></Search>
                        </div>
                        <div>
                           <MenuDropdown></MenuDropdown>
                        </div>

                    </div>
                </Container>

            </div>
        </div>
    );
};

export default NavigationBar;