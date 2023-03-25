import React from 'react'
import'./List.scss'
import Card from '../Card/Card.jsx'
import useFetch from '../../hooks/useFetch';

export default function List({subCats,maxPrice,catId,sort}) {

  const { data, loading, error } = useFetch(`/products?populate=*&filters[categories][id]=${catId}${subCats.map((item)=>`&filters[sub_categories][id][$eq]=${item}`)}&filters[price][$lte]=${maxPrice}&sort=price:${sort}`);
  // console.log(data) 


  return (
    <div className='list'>
      {
        loading? '...Loading...' :
        data.map((item)=>(
            <Card item={item} key={item.id}/>
        ))
      }
    </div>
  )
}
