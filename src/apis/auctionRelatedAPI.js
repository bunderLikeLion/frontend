import { axiosInstance } from './config';

const client = axiosInstance;

const auctionRelatedAPI = {
  postAuction: (payload) => {
    return client.post('auctions/', payload).then((res) => res.data);
  },

  getAuctionLists: (sort) => {
    if (sort === 'popular')
      return client
        .get('auctions/?ordering=-product_groups_count')
        .then((res) => res.data);
    if (sort === 'oldest')
      return client
        .get('auctions/?ordering=created_at')
        .then((res) => res.data);
    return client.get('auctions/?ordering=-created_at').then((res) => res.data);
  },

  getSingleAuctionInfo: (id) => {
    return client.get(`auctions/${id}`).then((res) => res.data);
  },

  getProductGroups: (relatedAuctionId, userId, page, perPage) => {
    return client
      .get(`product_groups/`, {
        params: {
          auction: relatedAuctionId,
          user: userId,
          page: page,
          per_page: perPage,
        },
      })
      .then((res) => res.data);
  },

  postProductGroups: (payload) => {
    return client.post('product_groups/', payload).then((res) => res.data);
  },
};

export default auctionRelatedAPI;
