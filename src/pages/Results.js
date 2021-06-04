import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { itemsApi } from '../api/item';
import { Breadcrumb } from '../components/breadcrumb'
import { Link } from 'react-router-dom';

export const Results = ({ handleChangeCategory }) => {

    const [error, setError] = useState(null)
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)
    const [itemName, setItemName] = useState(null)
    const [itemCategory, setItemCategory] = useState(null)

    let location = useLocation();
    let query = new URLSearchParams(location.search)

    useEffect(() => {
        let search = query.get('search')
        setItemName(search)
    }, [query])
    
    useEffect(() => {
        if (result)
        setItemCategory(result.categories)
    }, [result])
    
    useEffect(() => {
        handleChangeCategory(itemCategory)
    }, [itemCategory])
    
    useEffect(() => {
        setError(null)
        setLoading(true)
        if (itemName) {
            itemsApi.getItems(itemName)
                .then(res => {
                    setLoading(false)
                    setResult(res.data)
                    if (res.data && res.data.items.length == 0)
                        setError('Sin resultados.')
                })
                .catch(error => {
                    const {response} = error
                    setLoading(false)
                    setError(response.data.message)
                })
        }
    }, [itemName])


    return (
        <div>
            {loading ?
                <div className="loader-5 center-result"><span /></div> :
                <>
                    {error ?
                        <h1>{error}</h1> :
                        <>
                            {result && (
                                <>
                                    <Breadcrumb itemCategory={itemCategory} />
                                    <div className=" center width-90-percent">
                                        <div className="detail" >
                                            {result.items.length > 0 && result.items.map(element => (
                                                <Link to={`/items/${element.id}`} key={element.id}>
                                                    <div className="row full-width" >
                                                        <div className="column side" >
                                                            <img className="object-contain"
                                                                src={element && element.picture} alt={'Foto del producto'} width="200" height="200" />
                                                        </div>
                                                        <div className="column middle-50 text-left" >
                                                            <p>
                                                                <span className="price-result">{element && `${element.price.currency} $ ${element.price.amount}`}</span>
                                                                {element.free_shipping && <span className="dot-green" />}
                                                            </p><br />
                                                            <p>
                                                                <span className="title">{element && `${element.title}`}</span>
                                                            </p>
                                                        </div>
                                                        <div className="column side" ><p>{result.author && `${result.author.name} ${result.author.lastname}`}</p></div>
                                                    </div>
                                                    <hr></hr>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </>}
                </>}
        </div>
    )
}
