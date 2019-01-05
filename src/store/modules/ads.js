export default {
  namespaced: true,

  state: {
    ads: [
      {
        id: '1',
        title: 'Ad title',
        description: 'Ad description',
        imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        promo: true
      },
      {
        id: '2',
        title: 'Ad title',
        description: 'Ad description',
        imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        promo: true
      },
      {
        id: '3',
        title: 'Ad title',
        description: 'Ad description',
        imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        promo: false
      },
    ]
  },

  getters: {
    ads: (state) => state.ads,

    promoAds: (state) => state.ads.filter((ad) => ad.promo),

    myAds: (state) => state.ads,
  },

  mutations: {

  },

  actions: {

  }
}