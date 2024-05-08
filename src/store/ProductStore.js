import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._titles = [
      {id: 1, name: 'shorts'},
      {id: 2, name: 'pants'},
      {id: 3, name: 'shirts'},
      {id: 4, name: 'accessories'},
    ]
    this._products = [
      {
        title: 'shorts',
        description: 'Marchal\'s Original Cargo',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
        image: '../../img/short_1.png',
        image2: '../../img/short_1.1.png',
        rating: 4.5,
        price: 67.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 1,
      },
      {
        title: 'shorts',
        description: 'Inlet Original Short',
        size: [30, 32, 34, 36, 40, 42, 44, 46],
        image: '../../img/short_2.png',
        image2: '../../img/short_2.1.png',
        rating: 4.65,
        price: 54.99,
        color: ['#6A5ACD', '#EEE8AA', '#BDB76B', '#696969'],
        article: 2,
      },
      {
        title: 'pants',
        description: 'TGIF Pant',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
        image: '../../img/short_3.png',
        image2: '../../img/short_3.1.png',
        rating: 5,
        price: 54.99,
        color: ['#6A5ACD', '#EEE8AA', '#BDB76B', '#696969', '#FFFAFA', '#FFE4E1', '#48D1CC'],
        article: 3,
      },
      {
        title: 'pants',
        description: 'Inlet Original Pant',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
        image: '../../img/short_4.png',
        image2: '../../img/short_4.1.png',
        rating: 4,
        price: 68.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969', '#FFFAFA'],
        article: 4,
      },
      {
        title: 'shorts',
        description: 'Captain\'s Short',
        size: [34, 36, 38, 40, 42, 44, 46, 48],
        image: '../../img/short_5.png',
        image2: '../../img/short_5.1.png',
        rating: 5,
        price: 67.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 5,
      },
      {
        title: 'shorts',
        description: 'Galapagos Plain Short',
        size: [30, 32, 34, 36, 42, 44, 46, 48, 50, 52],
        image: '../../img/short_6.png',
        image2: '../../img/short_6.1.png',
        rating: 4.65,
        price: 34.99,
        color: ['#6A5ACD', '#EEE8AA', '#BDB76B', '#FFFAFA', '#FFE4E1', '#48D1CC'],
        article: 6,
      },
      {
        title: 'shorts',
        description: 'Galapagos Pleated Short',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
        image: '../../img/short_7.png',
        image2: '../../img/short_7.1.png',
        rating: 5,
        price: 36.99,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969', '#FFE4E1', '#48D1CC'],
        article: 7,
      },
      {
        title: 'shorts',
        description: 'Sportif\'s Tidewater Denim',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 50, 52],
        image: '../../img/short_8.png',
        image2: '../../img/short_8.1.png',
        rating: 3.5,
        price: 69.00,
        color: ['#BDB76B', '#696969', '#FFFAFA'],
        article: 8,
      },
      {
        title: 'shorts',
        description: 'Marchal\'s Hatteras Short',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
        image: '../../img/short_9.png',
        image2: '../../img/short_9.1.png',
        rating: 4,
        price: 40.99,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969', '#FFE4E1', '#48D1CC'],
        article: 9,
      },
      {
        title: 'shorts',
        description: 'Ecoths Ashcroft Short',
        size: [30, 32, 34, 36],
        image: '../../img/short_10.png',
        image2: '../../img/short_10.1.png',
        rating: 4.8,
        price: 52.99,
        color: ['#6A5ACD', '#EEE8AA', '#BDB76B', '#696969'],
        article: 10,
      },
      {
        title: 'shorts',
        description: 'Ecoths Gannon Short',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
        image: '../../img/short_11.png',
        image2: '../../img/short_11.1.png',
        rating: 3,
        price: 45.99,
        color: ['#6A5ACD', '#EEE8AA'],
        article: 11,
      },
      {
        title: 'shorts',
        description: 'Ecoths Ashcroft',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
        image: '../../img/short_12.jpg',
        image2: '../../img/short_12.1.jpg',
        rating: 5,
        price: 55.99,
        color: ['#6A5ACD', '#EEE8AA', '#BDB76B', '#696969', '#FFE4E1'],
        article: 12,
      },
      {
        title: 'shorts',
        description: 'Captain jack Short',
        size: [34, 36, 40, 42, 44, 46, 48],
        image: '../../img/short_13.jpg',
        image2: '../../img/short_13.1.jpg',
        rating: 4.7,
        price: 69.99,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 13,
      },
      {
        title: 'shorts',
        description: 'Ecoths Gannon Gann',
        size: [30, 46, 48],
        image: '../../img/short_14.jpg',
        image2: '../../img/short_14.1.jpg',
        rating: 5,
        price: 53.99,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 14,
      },
      {
        title: 'shorts',
        description: 'Ecoths Gannon jack Short',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
        image: '../../img/short_15.jpg',
        image2: '../../img/short_15.1.jpg',
        rating: 4.67,
        price: 45.99,
        color: ['#6A5ACD', '#EEE8AA', '#FFE4E1'],
        article: 15,
      },
      {
        title: 'pants',
        description: 'Pants Dickies',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
        image: '../../img/pants_1.jpg',
        image2: '../../img/pants_1.1.jpg',
        rating: 5,
        price: 27.00,
        color: ['#EEE8AA', '#F4A460', '#BDB76B'],
        article: 16,
      },
      {
        title: 'pants',
        description: 'Pants Dickies 874 Pine',
        size: [30, 32, 34, 36, 38, 40, 42, 44],
        image: '../../img/pants_2.jpg',
        image2: '../../img/pants_2.1.jpg',
        rating: 3.87,
        price: 87.00,
        color: ['#EEE8AA', '#F4A460', '#BDB76B', '#6A5ACD'],
        article: 17,
      },
      {
        title: 'pants',
        description: 'Pants Dickies 874 Pine',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
        image: '../../img/pants_3.jpg',
        image2: '../../img/pants_3.1.jpg',
        rating: 5,
        price: 35.00,
        color: ['#EEE8AA', '#BDB76B', '#6A5ACD'],
        article: 18,
      },
      {
        title: 'pants',
        description: 'Jeans Levis 550 White',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
        image: '../../img/pants_4.jpg',
        image2: '../../img/pants_4.1.jpg',
        rating: 4.78,
        price: 42.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 19,
      },
      {
        title: 'pants',
        description: 'Jeans APC Classic Blue',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 52],
        image: '../../img/pants_5.jpg',
        image2: '../../img/pants_5.1.jpg',
        rating: 5,
        price: 39.00,
        color: ['#6A5ACD', '#F4A460', '#BDB76B', '#696969'],
        article: 20,
      },
      {
        title: 'pants',
        description: 'Pants CDG Junya',
        size: [30, 32, 38, 40, 42, 44, 46, 48, 52],
        image: '../../img/pants_6.jpg',
        image2: '../../img/pants_6.1.jpg',
        rating: 5,
        price: 41.00,
        color: ['#EEE8AA', '#BDB76B', '#6A5ACD'],
        article: 21,
      },
      {
        title: 'pants',
        description: 'Jeans Levis 42',
        size: [30, 32, 46, 48, 52],
        image: '../../img/pants_7.jpg',
        image2: '../../img/pants_7.1.jpg',
        rating: 4.33,
        price: 39.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 22,
      },
      {
        title: 'pants',
        description: 'Jeans Nudie Jeans',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
        image: '../../img/pants_8.jpg',
        image2: '../../img/pants_8.1.jpg',
        rating: 5,
        price: 67.00,
        color: ['#1140ff', '#442c18', '#f6ef6f'],
        article: 23,
      },
      {
        title: 'pants',
        description: 'Pants Polo Ralph Lauren',
        size: [30, 32, 46, 48, 52],
        image: '../../img/pants_9.jpg',
        image2: '../../img/pants_9.1.jpg',
        rating: 4,
        price: 88.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 24,
      },
      {
        title: 'pants',
        description: 'Jeans Levis 501',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
        image: '../../img/pants_10.jpg',
        image2: '../../img/pants_10.1.jpg',
        rating: 3.87,
        price: 28.00,
        color: ['#6A5ACD', '#EEE8AA', '#BDB76B', '#696969'],
        article: 25,
      },
      {
        title: 'pants',
        description: 'Pants Fjallraven Greenland',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46],
        image: '../../img/pants_11.jpg',
        image2: '../../img/pants_11.1.jpg',
        rating: 5,
        price: 98.00,
        color: ['#6A5ACD', '#EEE8AA', '#BDB76B'],
        article: 26,
      },
      {
        title: 'pants',
        description: 'Pants Dickies Slim',
        size: [30, 32, 38, 40, 42, 44, 46, 48, 52],
        image: '../../img/pants_12.jpg',
        image2: '../../img/pants_12.1.jpg',
        rating: 3.65,
        price: 20.00,
        color: ['#EEE8AA'],
        article: 27,
      },
      {
        title: 'pants',
        description: 'Jeans Polo Ralph',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
        image: '../../img/pants_13.jpg',
        image2: '../../img/pants_13.1.jpg',
        rating: 5,
        price: 35.00,
        color: ['#6A5ACD', '#EEE8AA', '#BDB76B', '#696969'],
        article: 28,
      },
      {
        title: 'pants',
        description: 'Vintage Pants Levis',
        size: [30, 32, 38, 40, 42, 44, 46, 48, 52],
        image: '../../img/pants_14.jpg',
        image2: '../../img/pants_14.1.jpg',
        rating: 4.3,
        price: 53.00,
        color: ['#EEE8AA', '#BDB76B', '#6A5ACD'],
        article: 29,
      },
      {
        title: 'pants',
        description: 'Jeans Levis 525 39',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48],
        image: '../../img/pants_15.jpg',
        image2: '../../img/pants_15.1.jpg',
        rating: 5,
        price: 28.00,
        color: ['#EEE8AA', '#BDB76B', '#696969'],
        article: 30,
      },
      {
        title: 'shirts',
        description: 'Shirt Dickies Sacramento',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 52],
        image: '../../img/shirt_1.jpg',
        image2: '../../img/shirt_1.1.jpg',
        rating: 4,
        price: 35.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 31,
      },
      {
        title: 'shirts',
        description: 'Shirt USA Army OG',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 52],
        image: '../../img/shirt_2.jpg',
        image2: '../../img/shirt_2.1.jpg',
        rating: 4.4,
        price: 35.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 32,
      },
      {
        title: 'shirts',
        description: 'Jacket Carhartt',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 52],
        image: '../../img/shirt_3.jpg',
        image2: '../../img/shirt_3.1.jpg',
        rating: 4,
        price: 140.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#294d04', '#696969'],
        article: 33,
      },
      {
        title: 'shirts',
        description: 'Shirt Han Kjobenhavn',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 52],
        image: '../../img/shirt_4.jpg',
        image2: '../../img/shirt_4.1.jpg',
        rating: 5,
        price: 98.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 34,
      },
      {
        title: 'shirts',
        description: 'Shirt Cy Choi',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 52],
        image: '../../img/shirt_5.jpg',
        image2: '../../img/shirt_5.1.jpg',
        rating: 4.3,
        price: 74.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 35,
      },
      {
        title: 'shirts',
        description: 'Carhartt Mid',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 52],
        image: '../../img/shirt_6.jpg',
        image2: '../../img/shirt_6.1.jpg',
        rating: 5,
        price: 32.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 36,
      },
      {
        title: 'shirts',
        description: 'Levis Vintage',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 52],
        image: '../../img/shirt_7.jpg',
        image2: '../../img/shirt_7.1.jpg',
        rating: 4.6,
        price: 70.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 37,
      },
      {
        title: 'shirts',
        description: 'Wrangler Western',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 52],
        image: '../../img/shirt_8.jpg',
        image2: '../../img/shirt_8.1.jpg',
        rating: 5,
        price: 43.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 38,
      },
      {
        title: 'shirts',
        description: 'Shirt Public School',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 52],
        image: '../../img/shirt_9.jpg',
        image2: '../../img/shirt_9.1.jpg',
        rating: 4.4,
        price: 70.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 39,
      },
      {
        title: 'shirts',
        description: 'Polo Ralph Lauren',
        size: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 52],
        image: '../../img/shirt_10.jpg',
        image2: '../../img/shirt_10.1.jpg',
        rating: 5,
        price: 123.00,
        color: ['#6A5ACD', '#EEE8AA', '#F4A460', '#BDB76B', '#696969'],
        article: 40,
      },
      {
        title: 'accessories',
        description: 'Bucket Hat Barbour',
        size: [30, 32, 34, 42],
        image: '../../img/accessories_1.jpg',
        image2: '../../img/accessories_1.1.jpg',
        rating: 3.2,
        price: 12.00,
        color: ['#6A5ACD', '#EEE8AA', '#696969'],
        article: 41,
      },
      {
        title: 'accessories',
        description: 'Bag India Orange',
        size: [30, 32, 34, 42],
        image: '../../img/accessories_2.jpg',
        image2: '../../img/accessories_2.1.jpg',
        rating: 4.3,
        price: 13.00,
        color: ['#6A5ACD', '#EEE8AA', '#696969'],
        article: 42,
      },
      {
        title: 'accessories',
        description: 'Cap Polo Ralph',
        size: [30, 32, 34, 42],
        image: '../../img/accessories_3.jpg',
        image2: '../../img/accessories_3.1.jpg',
        rating: 5,
        price: 130.00,
        color: ['#6A5ACD', '#EEE8AA', '#696969'],
        article: 43,
      },
      {
        title: 'accessories',
        description: 'Bucket Hat Kangol',
        size: [30, 32, 34, 42],
        image: '../../img/accessories_4.jpg',
        image2: '../../img/accessories_4.1.jpg',
        rating: 4.5,
        price: 30.00,
        color: ['#6A5ACD', '#EEE8AA', '#696969'],
        article: 44,
      },
      {
        title: 'accessories',
        description: 'Cap Nike TDF',
        size: [30, 32, 34, 42],
        image: '../../img/accessories_5.jpg',
        image2: '../../img/accessories_5.1.jpg',
        rating: 5,
        price: 33.00,
        color: ['#6A5ACD', '#EEE8AA', '#696969'],
        article: 45,
      },
      {
        title: 'accessories',
        description: 'Scarf Barbour Wool',
        size: [30, 32, 34, 42],
        image: '../../img/accessories_6.jpg',
        image2: '../../img/accessories_6.1.jpg',
        rating: 3.7,
        price: 35.00,
        color: ['#6A5ACD', '#EEE8AA', '#696969'],
        article: 46,
      },
      {
        title: 'accessories',
        description: 'Scarf Prefix Apparel',
        size: [30, 32, 34, 42],
        image: '../../img/accessories_7.jpg',
        image2: '../../img/accessories_7.1.jpg',
        rating: 5,
        price: 18.00,
        color: ['#6A5ACD', '#EEE8AA', '#696969'],
        article: 47,
      },
      {
        title: 'accessories',
        description: 'Bag Prefix Apparel',
        size: [30, 32, 34, 42],
        image: '../../img/accessories_8.jpg',
        image2: '../../img/accessories_8.1.jpg',
        rating: 4.4,
        price: 58.00,
        color: ['#6A5ACD', '#EEE8AA', '#696969'],
        article: 48,
      },
      {
        title: 'accessories',
        description: 'Prefix Apparel Lite',
        size: [30, 32, 34, 42],
        image: '../../img/accessories_9.jpg',
        image2: '../../img/accessories_9.1.jpg',
        rating: 5,
        price: 28.00,
        color: ['#6A5ACD', '#EEE8AA', '#696969'],
        article: 49,
      },
      {
        title: 'accessories',
        description: 'Cap Harris Tweed',
        size: [30, 32, 34, 42],
        image: '../../img/accessories_10.jpg',
        image2: '../../img/accessories_10.1.jpg',
        rating: 4.65,
        price: 35.00,
        color: ['#6A5ACD', '#EEE8AA', '#696969'],
        article: 50,
      },
    ]
    
    this._selectedTitles = {id: '', name: ''};
    this._selectedItem = {size:[], color:[], minPrice:'', maxPrice:'', rating:''};
    this._pages = 1;
    this._totalCount = 0;
    this._limit = 4;
    this._currentProducts = [];
    this._productOffset = 0;
    this._filterTitle = [];
    this._searchItems = [];
    this._filteredProducts = [];
    this._addToBasketProducts = []; 
    makeAutoObservable(this);
  }

  setTitles(titles){
    this._titles = titles
  }
  setSelectedItem(selectedItem){
    this._selectedItem = selectedItem
  }
  setProducts(products){
    this._products = products
  }
  setDescriptions(descriptions){
    this._descriptions = descriptions
  }
  setSelectedTitle(title){
    this.setPage(1)
    this._selectedTitles = title
  }
  setPage(page){
    this._pages = page
  }
  setTotalCount(count){
    this._totalCount = count
  }
  setLimit(limit){
    this._limit = limit
  }
  setCurrentProducts(currentProduct){
    this._currentProducts = currentProduct
  }
  setProductOffset(productOffset){
    this._productOffset = productOffset
  }

  setFilterTitle(filterTitle){
    this._filterTitle = filterTitle
  }

  setSearchItems(searchItems){
    this._filterTitle = searchItems
  }

  setFilteredProducts(filteredProducts){
    this._filteredProducts = filteredProducts
  }

  setAddToBasketProducts(addToBasketProducts){
    this._addToBasketProducts = addToBasketProducts
  }

  get titles(){
    return this._titles
  }
  get products(){
    return this._products
  }
  get descriptions(){
    return this._descriptions
  }
  get selectedTitle(){
    return this._selectedTitle
  }
  get page(){
    return this._page
  }
  get totalCount(){
    return this._totalCount
  }
  get limit(){
    return this._limit
  }
  get currentProducts(){
    return this._currentProducts
  }
  get productOffset(){
    return this._productOffset
  }
  get filterTitle(){
    return this._filterTitle
  }
  get searchItems(){
    return this._searchItems
  }
  get selectedItem(){
    return this._selectedItem
  }

  get filteredProducts(){
    return this._filteredProducts
  }

  get addToBasketProducts(){
    return this._addToBasketProducts
  }
}