import { v4 as uuidv4 } from 'uuid';

import imgArticlePromo_1 from '../images/article-promo_1.jpg'
import imgArticlePromo_2 from '../images/article-promo_2.jpg'
import imgArticlePromo_3 from '../images/article-promo_3.jpg'

export const URL_WOMEN = 'women'
export const URL_MEN = 'men'

export const PRODUCT_TYPE_WOMEN = 'Women'
export const PRODUCT_TYPE_MEN = 'Men'

export const CLOTHES_BLOCK_MENU = [
  {
    particularName: 'isNewArrivals',
    name: 'NEW ARRIVALS',
    id: uuidv4()
  },
  {
    particularName: 'isSpecial',
    name: 'SPECIALS',
    id: uuidv4()
  },
  {
    particularName: 'isBestseller',
    name: 'BESTSELLERS',
    id: uuidv4()
  },
  {
    particularName: 'isMostViewed',
    name: 'MOST VIEWED',
    id: uuidv4()
  },
  {
    particularName: 'isFeatured',
    name: 'FEATURED PRODUCTS',
    id: uuidv4()
  },
]

export const ARTICLE_PROMO = {
  data: [
    {
      'id': 1,
      'img': imgArticlePromo_1,
      'title': 'The Easiest Way to Break',
      'subtitle': 'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor',
      'date': 'April 6, 2022',
    },
    {
      'id': 2,
      'img': imgArticlePromo_2,
      'title': 'Wedding Season',
      'subtitle': 'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor',
      'date': 'April 6, 2022',
    },
    {
      'id': 3,
      'img': imgArticlePromo_3,
      'title': 'Recent Favorites On Repeat',
      'subtitle': 'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor',
      'date': 'April 6, 2022',
    }
  ]
}

export const DELIVERY_METHOD = {
  pickupFromPostOffices: 'pickup-from-post-offices',
  expressDelivery: 'express-delivery',
  storePickup: 'store-pickup',
}