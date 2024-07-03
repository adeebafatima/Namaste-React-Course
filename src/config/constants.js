export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL =
  "https://cdn.vectorstock.com/i/preview-1x/50/66/fast-quick-food-logo-icon-vector-32705066.jpg";
export const SWIGGY_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// https://corsproxy.io/? - Didn't work
// https://proxy.cors.sh/ - Worked!
// Now you are not directly calling swiggy api, you are calling cors proxy and cors proxy call swiggy api, getting the data and returing it to you.
// corsproxy has limit 40-60 api call in a minutes

export const REST_MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.87560&lng=80.91150&restaurantId=";
