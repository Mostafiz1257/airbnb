import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string'

const CategoryBox = ({ item }) => {
    const { label, icon: Icon } = item

    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    const handleClick = () => {
        let currentQuery = {};
        if (params) {
            currentQuery = qs.parse(params.toString())
        }
        let updateQuery = {
            ...currentQuery,
             category: label,
        }
        let url = qs.stringifyUrl(
            {
                url: '/',
                query: updateQuery
            },
            { skiNull: true }
        )
        navigate(url)

    }
    return (
        <div onClick={handleClick} className=' cursor-pointer text-neutral-500 flex flex-col gap-3 p-3 justify-between items-center border-b-2 hover:text-neutral-800 bg-transparent '>
            <Icon></Icon>
            <p className=' text-sm font-medium'>{label}</p>
        </div>
    );
};

export default CategoryBox;