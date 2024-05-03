interface NavLists {
    name : string
    link : string
}

export interface MyPortfolio {
    name : string
    img : string
    id : number
}

export interface MyGallery {
    name : string
    img : string
    id : number
}


export const modelName = process.env.NEXT_PUBLIC_MODEL_NAME as string

export const navLists : NavLists[] = [{
    name : 'Home',
    link : 'home'
}, {
    name : 'Portfolio',
    link : 'portfolio'
}, {
    name : 'Contact',
    link : 'contact'
}, {
    name : 'Gallery',
    link : 'gallery'
}]  

export const myPortfolio : MyPortfolio[] = [{
    id : 5,
    name : 'Rimkirim',
    img : '/images/brands/rimkirim.jpg'
}, {
    id : 10,
    name : 'East Ventures',
    img : '/images/brands/East-Ventures-Square-Logo.png'
}, {
    id : 15,
    name : 'Mayora',
    img : '/images/brands/mayora.png'
}, {
    id : 25,
    name : 'Rimkirim',
    img : '/images/brands/rimkirim.jpg'
}, {
    id : 30,
    name : 'East Ventures',
    img : '/images/brands/East-Ventures-Square-Logo.png'
}]

export const myGallery : MyGallery[]= [
    {img: '/images/personal/ibra1.jpg' , name: 'gambar', id : 1},
    {img: '/images/personal/ibra2.jpg' , name: 'gambar', id : 2},
    {img: '/images/personal/ibra3.jpg' , name: 'gambar', id : 3},
    {img: '/images/personal/ibra1.jpg' , name: 'gambar', id : 5},
    {img: '/images/personal/ibra4.jpg' , name: 'gambar', id : 4},
    {img: '/images/personal/ibra2.jpg' , name: 'gambar', id : 4},
    {img: '/images/personal/ibra3.jpg' , name: 'gambar', id : 4},
]



