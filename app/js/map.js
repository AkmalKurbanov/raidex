// am5viewer.create("chartdiv", {
//   settings: {
//     editor: {
//       theme: "light",
//       userData: {
//         projection: "geoMercator",
//         geodata: "worldLow",
//       },
//       themeTags: ["light"],
//       linePointScale: 0.5,
//       pointTypeKey: "Plane",
//       __parse: true,
//     },
//     "editor.map": {
//       minZoomLevel: 2.2,
//       maxZoomLevel: 2.2,
//       projection: "geoMercator",
//       zoomControl: {
//         type: "ZoomControl",
//         settings: {},
//       },
//       background: {
//         type: "Rectangle",
//         settings: {
//           fill: {
//             type: "Color",
//             value: "#f1f1f1",
//           },
//           fillOpacity: 1,
//           width: 1920,
//           height: 711,
//           x: 0,
//           y: 0,
//           fillPattern: {
//             type: "GrainPattern",
//             settings: {
//               maxOpacity: 0.08,
//               density: 0.2,
//               colors: [
//                 {
//                   type: "Color",
//                   value: "#000000",
//                 },
//               ],
//             },
//           },
//           isMeasured: false,
//         },
//       },
//       themeTags: ["map"],
//       wheelY: "none",
//       homeZoomLevel: 2.2,
//       panX: "translateX",
//       panY: "translateY",
//       homeGeoPoint: {
//         longitude: -10,
//         latitude: 55,
//       },
//     },

//     "editor.backgroundSeries.mapPolygons.template": {
//       forceInactive: true,
//       fill: {
//         type: "Color",
//         value: "#e6e6e6",
//       },
//       stroke: {
//         type: "Color",
//         value: "#e6e6e6",
//       },
//     },
//     "editor.gridSeries.mapLines.template": {
//       forceInactive: true,
//       stroke: {
//         type: "Color",
//         value: "#000000",
//       },
//       strokeOpacity: 0.04,
//     },
//   },
//   data: {
//     "editor.polygonSeries": [
//       {
//         id: "NL",
//         name: "Нидерланды",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Нидерланды",
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#26a69a",
//             },
//             strokeWidth: 2,
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "PT",
//         name: "Португалия. Склады будут доступны в ближайшее время",
//         settings: {
//           type: "Template",
//           settings: {
//             strokeWidth: 2,
//             fill: {
//               type: "Color",
//               value: "#f1bf00",
//             },
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             name: "Португалия",
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "FR",
//         name: "Франция. Склады будут доступны в ближайшее время",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Франция",
//             fill: {
//               type: "Color",
//               value: "#f1bf00",
//             },
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             strokeWidth: 2,
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "ES",
//         name: "Испания. Склады будут доступны в ближайшее время",
//         settings: {
//           type: "Template",
//           settings: {
//             fill: {
//               type: "Color",
//               value: "#f1bf00",
//             },
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             strokeWidth: 2,
//             name: "Испания",
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "GB",
//         name: "Великобритания. Склады будут доступны в ближайшее время",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Великобритания",
//             fill: {
//               type: "Color",
//               value: "#f1bf00",
//             },
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "DK",
//         name: "Дания",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Дания",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#26a69a",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "DE",
//         name: "Германия",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Германия",
//             fill: {
//               type: "Color",
//               value: "#26a69a",
//             },
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "PL",
//         name: "Польша",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Польша",
//             fill: {
//               type: "Color",
//               value: "#26a69a",
//             },
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "AT",
//         name: "Австрия",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Австрия",
//             fill: {
//               type: "Color",
//               value: "#26a69a",
//             },
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "CH",
//         name: "Швейцария",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Швейцария",
//             fill: {
//               type: "Color",
//               value: "#0080C0",
//             },
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "CZ",
//         name: "Чехия",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Чехия",
//             fill: {
//               type: "Color",
//               value: "#26a69a",
//             },
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "CZ",
//         name: "Чехия",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Чехия",
//             fill: {
//               type: "Color",
//               value: "#26a69a",
//             },
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "IT",
//         name: "Италия",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Италия",
//             fill: {
//               type: "Color",
//               value: "#26a69a",
//             },
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "BE",
//         name: "Бельгия",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Бельгия",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#26a69a",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "HU",
//         name: "Венгрия",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Венгрия",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#26a69a",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "SK",
//         name: "Словакия",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Словакия",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#26a69a",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "SI",
//         name: "Словения",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Словения",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#26a69a",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "LT",
//         name: "Литва. Склады будут доступны в ближайшее время",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Литва",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#f1bf00",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "EE",
//         name: "Эстония. Склады будут доступны в ближайшее время",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Эстония",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#f1bf00",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "LV",
//         name: "Латвия. Склады будут доступны в ближайшее время",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Латвия",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#f1bf00",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "IE",
//         name: "Ирландия",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Ирландия",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0080C0",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "NO",
//         name: "Норвегия",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Норвегия",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0080C0",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "FI",
//         name: "Финляндия",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Финляндия",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0080C0",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "HR",
//         name: "Хорватия",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Хорватия",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0080C0",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "RO",
//         name: "Румыния",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Румыния",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0080C0",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "SE",
//         name: "Швеция",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Швеция",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0080C0",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "MD",
//         name: "Молдова",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Молдова",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0080C0",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "BG",
//         name: "Болгария",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Болгария",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0080C0",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "TR",
//         name: "Турция",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Турция",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0080C0",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "GR",
//         name: "Греция",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Греция",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0080C0",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "CA",
//         name: "Канада",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Канада",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0080C0",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "KG",
//         name: "Кыргызстан",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Кыргызстан",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#009688",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "UZ",
//         name: "Узбекистан",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Узбекистан",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#F1C10C",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "KZ",
//         name: "Казахстан",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Казахстан",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#F1C10C",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "US",
//         name: "США",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "США",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#26a69a",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "KR",
//         name: "Южная Корея",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Южная Корея",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0C86C2",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "CN",
//         name: "Китай",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Китай",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0C86C2",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "VN",
//         name: "Вьетнам",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Вьетнам",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0C86C2",
//             },
//           },
//         },
//         __parse: true,
//       },
//       {
//         id: "MY",
//         name: "Малайзия",
//         settings: {
//           type: "Template",
//           settings: {
//             name: "Малайзия",
//             strokeWidth: 2,
//             stroke: {
//               type: "Color",
//               value: "#ffffff",
//             },
//             fill: {
//               type: "Color",
//               value: "#0C86C2",
//             },
//           },
//         },
//         __parse: true,
//       },
//     ],
//     "editor.lineSeries": [
//       {
//         settings: {
//           type: "Template",
//           settings: {
//             stroke: {
//               type: "Color",
//               value: "#000",
//             },
//             strokeOpacity: 0.5,
//             strokeWidth: 1,
//           },
//         },
//         linePointSeries: {
//           type: "MapPointSeries",
//           settings: {
//             geometryField: "geometry",
//             geometryTypeField: "geometryType",
//             idField: "id",
//             id: "linepointseries_0",
//           },
//           properties: {
//             data: [
//               {
//                 geometry: {
//                   type: "Point",
//                   coordinates: [-121.81988, 46.25357],
//                   __parse: false,
//                 },
//                 id: "linepoint_1",
//                 name: "США (Орегон)",
//                 settings: {
//                   type: "Template",
//                   settings: {
//                     fillOpacity: 1,
//                     fill: {
//                       type: "Color",
//                       value: "#fb2626",
//                     },
//                     stroke: {
//                       type: "Color",
//                       value: "#000000",
//                     },
//                     strokeOpacity: 0.5,
//                     scale: 0.7,
//                     strokeWidth: 0.5,
//                     name: "США (Орегон)",
//                   },
//                 },
//                 pointType: "Place",
//                 __parse: true,
//               },
//               {
//                 geometry: {
//                   type: "Point",
//                   coordinates: [16.27495, 48.09354],
//                   __parse: false,
//                 },
//                 id: "linepoint_2",
//                 name: "Склад. Автрия (Корнойбург)",
//                 settings: {
//                   type: "Template",
//                   settings: {
//                     fillOpacity: 1,
//                     fill: {
//                       type: "Color",
//                       value: "#fb2626",
//                     },
//                     stroke: {
//                       type: "Color",
//                       value: "#000000",
//                     },
//                     strokeOpacity: 0.5,
//                     scale: 0.7,
//                     strokeWidth: 0.5,
//                     name: "Склад. Автрия (Корнойбург)",
//                   },
//                 },
//                 pointType: "Place",
//                 __parse: true,
//               },
//               {
//                 geometry: {
//                   type: "Point",
//                   coordinates: [74.80438, 42.88156],
//                   __parse: false,
//                 },
//                 id: "linepoint_3",
//                 name: "Кыргызстан (Бишкек)",
//                 settings: {
//                   type: "Template",
//                   settings: {
//                     fillOpacity: 1,
//                     fill: {
//                       type: "Color",
//                       value: "#fb2626",
//                     },
//                     stroke: {
//                       type: "Color",
//                       value: "#000000",
//                     },
//                     strokeOpacity: 0.5,
//                     scale: 0.7,
//                     strokeWidth: 0.5,
//                     name: "Кыргызстан (Бишкек)",
//                   },
//                 },
//                 pointType: "Place",
//                 __parse: true,
//               },
//             ],
//           },
//         },
//         geometry: {
//           type: "Line",
//           __parse: false,
//         },
//         id: "line_1",
//         name: "Line 1",
//         __parse: true,
//       },
//       {
//         settings: {
//           type: "Template",
//           settings: {
//             stroke: {
//               type: "Color",
//               value: "#000",
//             },
//             strokeOpacity: 0.5,
//             strokeWidth: 1,
//           },
//         },
//         linePointSeries: {
//           type: "MapPointSeries",
//           settings: {
//             geometryField: "geometry",
//             geometryTypeField: "geometryType",
//             idField: "id",
//             id: "linepointseries_1",
//           },
//           properties: {
//             data: [
//               {
//                 geometry: {
//                   type: "Point",
//                   coordinates: [13.26155, 45.79647],
//                   __parse: false,
//                 },
//                 id: "linepoint_1",
//                 name: "Италия (Муджа)",
//                 settings: {
//                   type: "Template",
//                   settings: {
//                     fillOpacity: 1,
//                     fill: {
//                       type: "Color",
//                       value: "#fb2626",
//                     },
//                     stroke: {
//                       type: "Color",
//                       value: "#000000",
//                     },
//                     strokeOpacity: 0.5,
//                     scale: 0.7,
//                     strokeWidth: 0.5,
//                     name: "Италия (Муджа)",
//                   },
//                 },
//                 pointType: "Place",
//                 __parse: true,
//               },
//               {
//                 geometry: {
//                   type: "Point",
//                   coordinates: [16.35316, 48.09532],
//                   __parse: false,
//                 },
//                 id: "linepoint_2",
//                 name: "",
//                 settings: {
//                   type: "Template",
//                   settings: {
//                     fillOpacity: 1,
//                     fill: {
//                       type: "Color",
//                       value: "#fb2626",
//                     },
//                     stroke: {
//                       type: "Color",
//                       value: "#000000",
//                     },
//                     strokeOpacity: 0.5,
//                     scale: 0,
//                     strokeWidth: 0.5,
//                     name: "",
//                   },
//                 },
//                 pointType: "Place",
//                 __parse: true,
//               },
//             ],
//           },
//         },
//         geometry: {
//           type: "Line",
//           __parse: false,
//         },
//         id: "line_2",
//         name: "Line 2",
//         __parse: true,
//       },
//       {
//         settings: {
//           type: "Template",
//           settings: {
//             stroke: {
//               type: "Color",
//               value: "#000",
//             },
//             strokeOpacity: 0.5,
//             strokeWidth: 1,
//           },
//         },
//         linePointSeries: {
//           type: "MapPointSeries",
//           settings: {
//             geometryField: "geometry",
//             geometryTypeField: "geometryType",
//             idField: "id",
//             id: "linepointseries_4",
//           },
//           properties: {
//             data: [
//               {
//                 geometry: {
//                   type: "Point",
//                   coordinates: [8.99867, 53.34541],
//                   __parse: false,
//                 },
//                 id: "linepoint_1",
//                 name: "Германия (Бремен)",
//                 settings: {
//                   type: "Template",
//                   settings: {
//                     fillOpacity: 1,
//                     fill: {
//                       type: "Color",
//                       value: "#fb2626",
//                     },
//                     stroke: {
//                       type: "Color",
//                       value: "#000000",
//                     },
//                     strokeOpacity: 0.5,
//                     scale: 0.7,
//                     strokeWidth: 0.5,
//                     name: "Германия (Бремен)",
//                   },
//                 },
//                 pointType: "Place",
//                 __parse: true,
//               },
//               {
//                 geometry: {
//                   type: "Point",
//                   coordinates: [16.27455, 48.08687],
//                   __parse: false,
//                 },
//                 id: "linepoint_2",
//                 name: "0",
//                 settings: {
//                   type: "Template",
//                   settings: {
//                     fillOpacity: 1,
//                     fill: {
//                       type: "Color",
//                       value: "#fb2626",
//                     },
//                     stroke: {
//                       type: "Color",
//                       value: "#000000",
//                     },
//                     strokeOpacity: 0.5,
//                     scale: 0,
//                     strokeWidth: 0.5,
//                     name: "0",
//                   },
//                 },
//                 pointType: "Place",
//                 __parse: true,
//               },
//             ],
//           },
//         },
//         geometry: {
//           type: "Line",
//           __parse: false,
//         },
//         id: "line_3",
//         name: "Line 3",
//         __parse: true,
//       },
//       {
//         settings: {
//           type: "Template",
//           settings: {
//             stroke: {
//               type: "Color",
//               value: "#000",
//             },
//             strokeOpacity: 0.5,
//             strokeWidth: 1,
//           },
//         },
//         linePointSeries: {
//           type: "MapPointSeries",
//           settings: {
//             geometryField: "geometry",
//             geometryTypeField: "geometryType",
//             idField: "id",
//             id: "linepointseries_3",
//           },
//           properties: {
//             data: [
//               {
//                 geometry: {
//                   type: "Point",
//                   coordinates: [21.66487, 52.34117],
//                   __parse: false,
//                 },
//                 id: "linepoint_1",
//                 name: "Польша (Варшава)",
//                 settings: {
//                   type: "Template",
//                   settings: {
//                     fillOpacity: 1,
//                     fill: {
//                       type: "Color",
//                       value: "#fb2626",
//                     },
//                     stroke: {
//                       type: "Color",
//                       value: "#000000",
//                     },
//                     strokeOpacity: 0.5,
//                     scale: 0.7,
//                     strokeWidth: 0.5,
//                     name: "Польша (Варшава)",
//                   },
//                 },
//                 pointType: "Place",
//                 __parse: true,
//               },
//               {
//                 geometry: {
//                   type: "Point",
//                   coordinates: [16.29014, 48.10463],
//                   __parse: false,
//                 },
//                 id: "linepoint_2",
//                 name: "",
//                 settings: {
//                   type: "Template",
//                   settings: {
//                     fillOpacity: 1,
//                     fill: {
//                       type: "Color",
//                       value: "#fb2626",
//                     },
//                     stroke: {
//                       type: "Color",
//                       value: "#000000",
//                     },
//                     strokeOpacity: 0.5,
//                     scale: 0,
//                     strokeWidth: 0.5,
//                     name: "",
//                   },
//                 },
//                 pointType: "Place",
//                 __parse: true,
//               },
//             ],
//           },
//         },
//         geometry: {
//           type: "Line",
//           __parse: false,
//         },
//         id: "line_4",
//         name: "Line 4",
//         __parse: true,
//       },
//     ],
//     "editor.pointSeries": [
//       {
//         fixed: false,
//         geometry: {
//           type: "Point",
//           coordinates: [8.63388, 48.46849],
//           __parse: false,
//         },
//         id: "point_1",
//         name: "Point 1",
//         settings: {
//           type: "Template",
//           settings: {
//             fillOpacity: 1,
//             fill: {
//               type: "Color",
//               value: "#e03f35",
//             },
//             stroke: {
//               type: "Color",
//               value: "#000000",
//             },
//             strokeOpacity: 0.5,
//             scale: 0.7,
//             strokeWidth: 0.5,
//             x: {
//               type: "Percent",
//               value: 13.177083333333334,
//             },
//             y: {
//               type: "Percent",
//               value: 38.00322061191627,
//             },
//           },
//         },
//         pointType: "Plane",
//         lineId: "line_1",
//         positionOnLine: 0.5,
//         autoRotate: true,
//         animationDuration: 30000,
//         animationFlip: true,
//         prevPosition: 0.020006666666668994,
//         __parse: true,
//       },
//     ],
//   },
// });
