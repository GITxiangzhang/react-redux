import  FilterLink from '../containers/FilterLink';
import React from 'react';

const  Footer=()=>(
    <p>
        Show:
        {""}
        <FilterLink filter="SHOW_ALL">
            ALL
        </FilterLink>
        {","}
        <FilterLink filter="SHOW_ACTIVE">
            ACTIVE
        </FilterLink>
        {","}
        <FilterLink filter="SHOW_COMPLETED">
            COMPLETED
        </FilterLink>
    </p>
)
export  default  Footer;