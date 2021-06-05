import React, { useEffect, useState } from 'react'

export const Breadcrumb = ({ itemCategory }) => {

    const [category, setCategory] = useState(null)

    useEffect(() => {
        setCategory(itemCategory)
    }, [itemCategory])

    return (
        <div className="center width-90-percent">
            <ul className="breadcrumb">
                {category && category.map(element => (
                <li key={element.id}><a href={`${process.env.PATH_PREFIX}/`}>{element.name}</a></li>
                ))}
            </ul>
        </div>
    )
}
