import React from 'react';
import Container from '../Shared/Container/Container';
import { categories } from './categoriesData';
import CategoryBos from './CategoryBos';

const Categories = () => {
    return (
        <Container>
            <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
                {
                    categories.map(item =>   
                        <CategoryBos label={item.label} icon={item.icon} key={item.label}></CategoryBos>
                     )
                }

            </div>
        </Container>
    );
};

export default Categories;

// need to watch from 01.18:27 second 