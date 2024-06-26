export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL =
  "https://cdn.dribbble.com/userupload/9903003/file/original-8eae5aec60527b67b7678e42aa2d8645.jpg";
export const SWIGGY_API =
  "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// https://corsproxy.io/? - Didn't work
// https://proxy.cors.sh/ - Worked!
// Now you are not directly calling swiggy api, you are calling cors proxy and cors proxy call swiggy api, getting the data and returing it to you.
// corsproxy has limit 40-60 api call in a minutes
