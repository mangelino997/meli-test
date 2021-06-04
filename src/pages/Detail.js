import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { itemsApi } from '../api/item';
import { Breadcrumb } from '../components/breadcrumb';
import './styles.css'

export const Detail = ({ category }) => {

    const { id } = useParams();

    const [itemId, setItemId] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [itemDetail, setItemDetail] = useState(null)
    const [itemCategory, setItemCategory] = useState(null)

    useEffect(() => {
        if (id) {
            setError(null)
            setItemId(id)
        }
    }, [id])

    useEffect(() => {
        console.log(category)
        setItemCategory(category)
    }, [category])

    useEffect(() => {
        if (itemId) {
            setLoading(true)
            itemsApi.getItemDescription(itemId)
                .then(res => {
                    setLoading(false)
                    setItemDetail(res.data)
                })
                .catch(error => {
                    const {response} = error
                    setLoading(false)
                    setError(response.data.message)
                })
        }
    }, [itemId])

    return (
        <div>
            {loading ?
                <div className="loader-5 center-result"><span /></div> :
                <>
                    {error ?
                        <h1>{error}</h1> :
                        <>
                            <Breadcrumb itemCategory={itemCategory} />
                            <div className=" center width-90-percent">
                                <div className="detail" >
                                    <div className="row full-width">
                                        <div className="column middle-75" >
                                            <img src={itemDetail && itemDetail.items.picture} alt={'Foto del producto'} className="img-responsive" />
                                            <div className="text-left">
                                                <h2>Descripción del producto</h2>
                                                <p>{itemDetail && itemDetail.items.description}</p>
                                            </div>
                                        </div>
                                        <div className="column side" >
                                            <div className="text-left">
                                                <p className="subtitle">
                                                    {itemDetail && `${itemDetail.items.condition.toUpperCase()} - ${itemDetail.items.sold_quantity} vendidos `}
                                                </p>
                                                <span className="title">{itemDetail && `${itemDetail.items.title}`}</span>
                                                <p>
                                                    <span className="price">{itemDetail && `${itemDetail.items.price.currency} $ ${itemDetail.items.price.amount}`}</span>
                                                    <span className="price-decimals">{itemDetail && itemDetail.items.price.decimals}</span>
                                                </p>
                                            </div>
                                            <div >
                                                <button className="btn-buy" type="submit">Comprar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}
                </>
            }
        </div>
    )
}
