import React from "react";
import ReactDOM from "react-dom/client";

/*

1. Header
  - Logo : with symbol and name
  - Nav Bar

2. Body
  - Search Container
  - Restaurant Cards Container
     - image
     - place name
     - star rating
     - cuisine
     - time for delivery
     - cost

3. Footer
  - Copyright
  - Links
  - Address
  - Contact

*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://media.istockphoto.com/id/1291750007/vector/takeaway-food-symbol-take-away-paper-food-bag-icon-daily-meal-in-paper-bag-vector.jpg?s=612x612&w=0&k=20&c=LZtxpCqVZfB1-qNAXFBWCHoJvwzbozGwwRur605NLK8="
          alt=""
          id="logo"
        />
        <div className="app-name">Nom Nom Now</div>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//FETCHING DATA MANUALLY - HARD CODED DATA
//resList is an array containing objects which contain information about the restaurant 
const resList = [
                  {
                    "info": {
                      "id": "789167",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/61a18d1a-b04c-4097-a2ae-7e4f733d47c8_789167.jpg",
                      "locality": "SECTOR- B",
                      "areaName": "Aliganj",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.5,
                      "parentId": "1040",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "771",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 7.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "7.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-03 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹200 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/theobroma-sector-b-aliganj-rest789167",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "333396",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/6b6fe023-fd45-457d-b3dc-bebc81da9e9d_333396.jpg",
                      "locality": "Sector E",
                      "areaName": "Aliganj",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.5,
                      "parentId": "166",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "31K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-03 05:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.6",
                          "ratingCount": "2.5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/burger-king-sector-e-aliganj-rest333396",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "314275",
                      "name": "NIC Ice Creams",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/3de35459-e16b-4789-bfd1-b5df698e828d_314275.jpg",
                      "locality": "Sector B",
                      "areaName": "Aliganj",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.8,
                      "veg": true,
                      "parentId": "6249",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "6.8K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-03 00:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/nic-ice-creams-sector-b-aliganj-rest314275",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "452096",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/c17ed7a2-d3f2-4723-ba84-215dabed0385_452096.JPG",
                      "locality": "Sector E",
                      "areaName": "Jankipuram",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "721",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "6.7K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 4.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-03 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/pizza-hut-sector-e-jankipuram-rest452096",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "458202",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/1709cec4-af56-4db8-a0fc-41c411f68171_458202.JPG",
                      "locality": "Sector E",
                      "areaName": "Jankipuram",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.3,
                      "parentId": "547",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "6.9K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 4.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "4.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-03 04:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/kfc-sector-e-jankipuram-rest458202",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "636723",
                      "name": "Chinese Wok",
                      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                      "locality": "Mahanagar",
                      "areaName": "Mahanagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Asian",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "61955",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.0K+",
                      "sla": {
                        "deliveryTime": 54,
                        "lastMileTravel": 10.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "10.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-03 01:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.2",
                          "ratingCount": "53"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/chinese-wok-mahanagar-rest636723",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "253733",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/0b1912c1-0c25-487d-b7aa-fc0b34bbb69c_253733.JPG",
                      "locality": "West End Mall",
                      "areaName": "Gomti Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "American"
                      ],
                      "avgRating": 4.5,
                      "parentId": "630",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "20K+",
                      "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 11.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "11.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-03 01:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹91"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/mcdonalds-west-end-mall-gomti-nagar-rest253733",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "359801",
                      "name": "Grameen Kulfi",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/b20247e1-c725-46c8-a636-040ea3e4ace4_359801.jpg",
                      "locality": "Sector B",
                      "areaName": "Aliganj",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.8,
                      "veg": true,
                      "parentId": "12175",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "1.4K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-03 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/grameen-kulfi-sector-b-aliganj-rest359801",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "368396",
                      "name": "Bikkgane Biryani",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/9464ef66-68a0-4ded-9bce-6e9049f6de17_368396.jpg",
                      "locality": "AGRASEN NAGAR",
                      "areaName": "Aliganj",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Biryani",
                        "Hyderabadi",
                        "Andhra",
                        "South Indian",
                        "North Indian",
                        "Mughlai",
                        "Kebabs"
                      ],
                      "avgRating": 4.3,
                      "parentId": "5070",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "6.7K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 6.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "6.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-03 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Biryani.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹199"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/bikkgane-biryani-agrasen-nagar-aliganj-rest368396",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "697246",
                      "name": "Bakingo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/7269067f-e388-4f27-a98c-d73fb0ae94ef_697246.jpg",
                      "locality": "Tahsil",
                      "areaName": "Yojna Jankipuram",
                      "costForTwo": "₹299 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.7,
                      "parentId": "3818",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "5.8K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 4.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "4.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-03 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "ABOVE ₹3000",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/bakingo-tahsil-yojna-jankipuram-rest697246",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "772699",
                      "name": "Kwality Walls Ice Cream and More",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/a2fbdd94-b3af-4fab-89c8-6fd240cd6951_772699.JPG",
                      "locality": "Aliganj",
                      "areaName": "Aliganj",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Ice Cream Cakes"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "582",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "209",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 6.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "6.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-02 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/kwality-walls-ice-cream-and-more-aliganj-rest772699",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "636724",
                      "name": "Big Bowl",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_636724.JPG",
                      "locality": "Umrao Mall",
                      "areaName": "Mahanagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "434792",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1.2K+",
                      "sla": {
                        "deliveryTime": 58,
                        "lastMileTravel": 10.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-60 mins",
                        "lastMileTravelString": "10.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-03 01:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/big-bowl-umrao-mall-mahanagar-rest636724",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "322639",
                      "name": "The Good Bowl",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/dbc26007-5290-4b28-a5fb-2b7e102b4a67_322639.jpg",
                      "locality": "Sitapur Road",
                      "areaName": "Aliganj",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "Pastas",
                        "Punjabi",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "7918",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1.7K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 6.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "6.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-02 23:59:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹200 OFF",
                        "subHeader": "ABOVE ₹599",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/the-good-bowl-sitapur-road-aliganj-rest322639",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "165050",
                      "name": "Mahalaxmi Sweets & Restaurant",
                      "cloudinaryImageId": "oqk0mierg0rlhuxoa3ok",
                      "locality": "Aliganj",
                      "areaName": "Aliganj",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "North Indian",
                        "Thalis",
                        "South Indian",
                        "Snacks",
                        "Chinese",
                        "Sweets",
                        "Desserts",
                        "Beverages",
                        "Ice Cream"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "262175",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "39K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 6.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "6.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-02 23:15:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "8.3K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/mahalaxmi-sweets-and-restaurant-aliganj-rest165050",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "214293",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "w8v4o3v8c0g1szvziyrl",
                      "locality": "Sector B",
                      "areaName": "Aliganj",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "4961",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "26K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-03 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹79"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/la-pinoz-pizza-sector-b-aliganj-rest214293",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "258913",
                      "name": "Baskin Robbins - Ice Cream Desserts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/38c3266d-4604-418b-b741-cf2bb00aa91f_258913.JPG",
                      "locality": "Sector G",
                      "areaName": "Jankipuram",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "5588",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "522",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-03 01:30:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹90"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/baskin-robbins-ice-cream-desserts-sector-g-jankipuram-rest258913",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "232083",
                      "name": "Wow! Momo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/0ba5fa4d-b9f0-46c3-9e67-008c28fa7550_232083.jpg",
                      "locality": "Sector H",
                      "areaName": "Aliganj",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Momos",
                        "Chinese",
                        "fastfood",
                        "Asian",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "parentId": "1776",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "4.1K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-06-03 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Chinese.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Chinese.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "294"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3e57428f-0121-4ea2-ae84-56e6c81aad8f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/lucknow/wow-momo-sector-h-aliganj-rest232083",
                      "type": "WEBLINK"
                    }
                  }
];

const ResCard = (props) => {
  const {resObj} = props;
  const {cloudinaryImageId, name, avgRating, costForTwo, cuisines} = resObj?.info; //Destructuring props for making code developer friendly using optional chaining (?.)

  return (
    <div className="res-card">
      <img
        className="res-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+ cloudinaryImageId}
        alt=""
      />
      <div className="resName">{name}</div>
      <div className="res-content">
        <div className="resRate">★ {avgRating} / 5.0</div>
        <div className="resCost">{costForTwo}</div>
        <div className="resCui">{cuisines.join(", ")}</div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-section">
      <div className="search">
        <input
          className="input-bar"
          type="text"
          placeholder="Search restaurant, dishes, cuisines, etc."
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="res-card-cont">
        {resList.map(
          (restaurant) => 
            <ResCard resObj = {restaurant} key = {restaurant.info.id}/>
        )}
      </div>
    </div>
  );
};

const AppLayout = () => {
  //React
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
