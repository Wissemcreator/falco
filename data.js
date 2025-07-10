const globalData = {
  "gold": 24.5,
  "btc": 23.8,
  "btcVolume24h": 26400000000,
  "btcSupply": 19650000,
  "countries": {
    "P001": {
      "name": "Nazione 1",
      "local": 46,
      "lat": -58.8,
      "lon": -179.0,
      "comment": "\u27a4 Commento sintetico per Nazione 1. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-1.gov",
      "history": [
        44.5,
        45.0,
        45.5,
        46.0,
        46.5,
        47.0,
        47.5,
        48.0,
        48.5
      ]
    },
    "P002": {
      "name": "Nazione 2",
      "local": 47,
      "lat": -57.6,
      "lon": -178.0,
      "comment": "\u27a4 Commento sintetico per Nazione 2. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-2.gov",
      "history": [
        45.5,
        46.0,
        46.5,
        47.0,
        47.5,
        48.0,
        48.5,
        49.0,
        49.5
      ]
    },
    "P003": {
      "name": "Nazione 3",
      "local": 48,
      "lat": -56.4,
      "lon": -177.0,
      "comment": "\u27a4 Commento sintetico per Nazione 3. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-3.gov",
      "history": [
        46.5,
        47.0,
        47.5,
        48.0,
        48.5,
        49.0,
        49.5,
        50.0,
        50.5
      ]
    },
    "P004": {
      "name": "Nazione 4",
      "local": 49,
      "lat": -55.2,
      "lon": -176.0,
      "comment": "\u27a4 Commento sintetico per Nazione 4. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-4.gov",
      "history": [
        47.5,
        48.0,
        48.5,
        49.0,
        49.5,
        50.0,
        50.5,
        51.0,
        51.5
      ]
    },
    "P005": {
      "name": "Nazione 5",
      "local": 50,
      "lat": -54.0,
      "lon": -175.0,
      "comment": "\u27a4 Commento sintetico per Nazione 5. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-5.gov",
      "history": [
        48.5,
        49.0,
        49.5,
        50.0,
        50.5,
        51.0,
        51.5,
        52.0,
        52.5
      ]
    },
    "P006": {
      "name": "Nazione 6",
      "local": 51,
      "lat": -52.8,
      "lon": -174.0,
      "comment": "\u27a4 Commento sintetico per Nazione 6. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-6.gov",
      "history": [
        49.5,
        50.0,
        50.5,
        51.0,
        51.5,
        52.0,
        52.5,
        53.0,
        53.5
      ]
    },
    "P007": {
      "name": "Nazione 7",
      "local": 52,
      "lat": -51.6,
      "lon": -173.0,
      "comment": "\u27a4 Commento sintetico per Nazione 7. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-7.gov",
      "history": [
        50.5,
        51.0,
        51.5,
        52.0,
        52.5,
        53.0,
        53.5,
        54.0,
        54.5
      ]
    },
    "P008": {
      "name": "Nazione 8",
      "local": 53,
      "lat": -50.4,
      "lon": -172.0,
      "comment": "\u27a4 Commento sintetico per Nazione 8. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-8.gov",
      "history": [
        51.5,
        52.0,
        52.5,
        53.0,
        53.5,
        54.0,
        54.5,
        55.0,
        55.5
      ]
    },
    "P009": {
      "name": "Nazione 9",
      "local": 54,
      "lat": -49.2,
      "lon": -171.0,
      "comment": "\u27a4 Commento sintetico per Nazione 9. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-9.gov",
      "history": [
        52.5,
        53.0,
        53.5,
        54.0,
        54.5,
        55.0,
        55.5,
        56.0,
        56.5
      ]
    },
    "P010": {
      "name": "Nazione 10",
      "local": 55,
      "lat": -48.0,
      "lon": -170.0,
      "comment": "\u27a4 Commento sintetico per Nazione 10. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-10.gov",
      "history": [
        53.5,
        54.0,
        54.5,
        55.0,
        55.5,
        56.0,
        56.5,
        57.0,
        57.5
      ]
    },
    "P011": {
      "name": "Nazione 11",
      "local": 56,
      "lat": -46.8,
      "lon": -169.0,
      "comment": "\u27a4 Commento sintetico per Nazione 11. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-11.gov",
      "history": [
        54.5,
        55.0,
        55.5,
        56.0,
        56.5,
        57.0,
        57.5,
        58.0,
        58.5
      ]
    },
    "P012": {
      "name": "Nazione 12",
      "local": 57,
      "lat": -45.6,
      "lon": -168.0,
      "comment": "\u27a4 Commento sintetico per Nazione 12. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-12.gov",
      "history": [
        55.5,
        56.0,
        56.5,
        57.0,
        57.5,
        58.0,
        58.5,
        59.0,
        59.5
      ]
    },
    "P013": {
      "name": "Nazione 13",
      "local": 58,
      "lat": -44.4,
      "lon": -167.0,
      "comment": "\u27a4 Commento sintetico per Nazione 13. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-13.gov",
      "history": [
        56.5,
        57.0,
        57.5,
        58.0,
        58.5,
        59.0,
        59.5,
        60.0,
        60.5
      ]
    },
    "P014": {
      "name": "Nazione 14",
      "local": 59,
      "lat": -43.2,
      "lon": -166.0,
      "comment": "\u27a4 Commento sintetico per Nazione 14. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-14.gov",
      "history": [
        57.5,
        58.0,
        58.5,
        59.0,
        59.5,
        60.0,
        60.5,
        61.0,
        61.5
      ]
    },
    "P015": {
      "name": "Nazione 15",
      "local": 60,
      "lat": -42.0,
      "lon": -165.0,
      "comment": "\u27a4 Commento sintetico per Nazione 15. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-15.gov",
      "history": [
        58.5,
        59.0,
        59.5,
        60.0,
        60.5,
        61.0,
        61.5,
        62.0,
        62.5
      ]
    },
    "P016": {
      "name": "Nazione 16",
      "local": 61,
      "lat": -40.8,
      "lon": -164.0,
      "comment": "\u27a4 Commento sintetico per Nazione 16. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-16.gov",
      "history": [
        59.5,
        60.0,
        60.5,
        61.0,
        61.5,
        62.0,
        62.5,
        63.0,
        63.5
      ]
    },
    "P017": {
      "name": "Nazione 17",
      "local": 62,
      "lat": -39.6,
      "lon": -163.0,
      "comment": "\u27a4 Commento sintetico per Nazione 17. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-17.gov",
      "history": [
        60.5,
        61.0,
        61.5,
        62.0,
        62.5,
        63.0,
        63.5,
        64.0,
        64.5
      ]
    },
    "P018": {
      "name": "Nazione 18",
      "local": 63,
      "lat": -38.400000000000006,
      "lon": -162.0,
      "comment": "\u27a4 Commento sintetico per Nazione 18. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-18.gov",
      "history": [
        61.5,
        62.0,
        62.5,
        63.0,
        63.5,
        64.0,
        64.5,
        65.0,
        65.5
      ]
    },
    "P019": {
      "name": "Nazione 19",
      "local": 64,
      "lat": -37.2,
      "lon": -161.0,
      "comment": "\u27a4 Commento sintetico per Nazione 19. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-19.gov",
      "history": [
        62.5,
        63.0,
        63.5,
        64.0,
        64.5,
        65.0,
        65.5,
        66.0,
        66.5
      ]
    },
    "P020": {
      "name": "Nazione 20",
      "local": 65,
      "lat": -36.0,
      "lon": -160.0,
      "comment": "\u27a4 Commento sintetico per Nazione 20. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-20.gov",
      "history": [
        63.5,
        64.0,
        64.5,
        65.0,
        65.5,
        66.0,
        66.5,
        67.0,
        67.5
      ]
    },
    "P021": {
      "name": "Nazione 21",
      "local": 66,
      "lat": -34.8,
      "lon": -159.0,
      "comment": "\u27a4 Commento sintetico per Nazione 21. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-21.gov",
      "history": [
        64.5,
        65.0,
        65.5,
        66.0,
        66.5,
        67.0,
        67.5,
        68.0,
        68.5
      ]
    },
    "P022": {
      "name": "Nazione 22",
      "local": 67,
      "lat": -33.6,
      "lon": -158.0,
      "comment": "\u27a4 Commento sintetico per Nazione 22. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-22.gov",
      "history": [
        65.5,
        66.0,
        66.5,
        67.0,
        67.5,
        68.0,
        68.5,
        69.0,
        69.5
      ]
    },
    "P023": {
      "name": "Nazione 23",
      "local": 68,
      "lat": -32.400000000000006,
      "lon": -157.0,
      "comment": "\u27a4 Commento sintetico per Nazione 23. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-23.gov",
      "history": [
        66.5,
        67.0,
        67.5,
        68.0,
        68.5,
        69.0,
        69.5,
        70.0,
        70.5
      ]
    },
    "P024": {
      "name": "Nazione 24",
      "local": 69,
      "lat": -31.200000000000003,
      "lon": -156.0,
      "comment": "\u27a4 Commento sintetico per Nazione 24. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-24.gov",
      "history": [
        67.5,
        68.0,
        68.5,
        69.0,
        69.5,
        70.0,
        70.5,
        71.0,
        71.5
      ]
    },
    "P025": {
      "name": "Nazione 25",
      "local": 70,
      "lat": -30.0,
      "lon": -155.0,
      "comment": "\u27a4 Commento sintetico per Nazione 25. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-25.gov",
      "history": [
        68.5,
        69.0,
        69.5,
        70.0,
        70.5,
        71.0,
        71.5,
        72.0,
        72.5
      ]
    },
    "P026": {
      "name": "Nazione 26",
      "local": 71,
      "lat": -28.8,
      "lon": -154.0,
      "comment": "\u27a4 Commento sintetico per Nazione 26. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-26.gov",
      "history": [
        69.5,
        70.0,
        70.5,
        71.0,
        71.5,
        72.0,
        72.5,
        73.0,
        73.5
      ]
    },
    "P027": {
      "name": "Nazione 27",
      "local": 72,
      "lat": -27.6,
      "lon": -153.0,
      "comment": "\u27a4 Commento sintetico per Nazione 27. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-27.gov",
      "history": [
        70.5,
        71.0,
        71.5,
        72.0,
        72.5,
        73.0,
        73.5,
        74.0,
        74.5
      ]
    },
    "P028": {
      "name": "Nazione 28",
      "local": 73,
      "lat": -26.4,
      "lon": -152.0,
      "comment": "\u27a4 Commento sintetico per Nazione 28. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-28.gov",
      "history": [
        71.5,
        72.0,
        72.5,
        73.0,
        73.5,
        74.0,
        74.5,
        75.0,
        75.5
      ]
    },
    "P029": {
      "name": "Nazione 29",
      "local": 74,
      "lat": -25.200000000000003,
      "lon": -151.0,
      "comment": "\u27a4 Commento sintetico per Nazione 29. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-29.gov",
      "history": [
        72.5,
        73.0,
        73.5,
        74.0,
        74.5,
        75.0,
        75.5,
        76.0,
        76.5
      ]
    },
    "P030": {
      "name": "Nazione 30",
      "local": 45,
      "lat": -24.0,
      "lon": -150.0,
      "comment": "\u27a4 Commento sintetico per Nazione 30. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-30.gov",
      "history": [
        43.5,
        44.0,
        44.5,
        45.0,
        45.5,
        46.0,
        46.5,
        47.0,
        47.5
      ]
    },
    "P031": {
      "name": "Nazione 31",
      "local": 46,
      "lat": -22.800000000000004,
      "lon": -149.0,
      "comment": "\u27a4 Commento sintetico per Nazione 31. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-31.gov",
      "history": [
        44.5,
        45.0,
        45.5,
        46.0,
        46.5,
        47.0,
        47.5,
        48.0,
        48.5
      ]
    },
    "P032": {
      "name": "Nazione 32",
      "local": 47,
      "lat": -21.6,
      "lon": -148.0,
      "comment": "\u27a4 Commento sintetico per Nazione 32. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-32.gov",
      "history": [
        45.5,
        46.0,
        46.5,
        47.0,
        47.5,
        48.0,
        48.5,
        49.0,
        49.5
      ]
    },
    "P033": {
      "name": "Nazione 33",
      "local": 48,
      "lat": -20.4,
      "lon": -147.0,
      "comment": "\u27a4 Commento sintetico per Nazione 33. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-33.gov",
      "history": [
        46.5,
        47.0,
        47.5,
        48.0,
        48.5,
        49.0,
        49.5,
        50.0,
        50.5
      ]
    },
    "P034": {
      "name": "Nazione 34",
      "local": 49,
      "lat": -19.200000000000003,
      "lon": -146.0,
      "comment": "\u27a4 Commento sintetico per Nazione 34. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-34.gov",
      "history": [
        47.5,
        48.0,
        48.5,
        49.0,
        49.5,
        50.0,
        50.5,
        51.0,
        51.5
      ]
    },
    "P035": {
      "name": "Nazione 35",
      "local": 50,
      "lat": -18.0,
      "lon": -145.0,
      "comment": "\u27a4 Commento sintetico per Nazione 35. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-35.gov",
      "history": [
        48.5,
        49.0,
        49.5,
        50.0,
        50.5,
        51.0,
        51.5,
        52.0,
        52.5
      ]
    },
    "P036": {
      "name": "Nazione 36",
      "local": 51,
      "lat": -16.800000000000004,
      "lon": -144.0,
      "comment": "\u27a4 Commento sintetico per Nazione 36. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-36.gov",
      "history": [
        49.5,
        50.0,
        50.5,
        51.0,
        51.5,
        52.0,
        52.5,
        53.0,
        53.5
      ]
    },
    "P037": {
      "name": "Nazione 37",
      "local": 52,
      "lat": -15.600000000000001,
      "lon": -143.0,
      "comment": "\u27a4 Commento sintetico per Nazione 37. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-37.gov",
      "history": [
        50.5,
        51.0,
        51.5,
        52.0,
        52.5,
        53.0,
        53.5,
        54.0,
        54.5
      ]
    },
    "P038": {
      "name": "Nazione 38",
      "local": 53,
      "lat": -14.399999999999999,
      "lon": -142.0,
      "comment": "\u27a4 Commento sintetico per Nazione 38. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-38.gov",
      "history": [
        51.5,
        52.0,
        52.5,
        53.0,
        53.5,
        54.0,
        54.5,
        55.0,
        55.5
      ]
    },
    "P039": {
      "name": "Nazione 39",
      "local": 54,
      "lat": -13.200000000000003,
      "lon": -141.0,
      "comment": "\u27a4 Commento sintetico per Nazione 39. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-39.gov",
      "history": [
        52.5,
        53.0,
        53.5,
        54.0,
        54.5,
        55.0,
        55.5,
        56.0,
        56.5
      ]
    },
    "P040": {
      "name": "Nazione 40",
      "local": 55,
      "lat": -12.0,
      "lon": -140.0,
      "comment": "\u27a4 Commento sintetico per Nazione 40. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-40.gov",
      "history": [
        53.5,
        54.0,
        54.5,
        55.0,
        55.5,
        56.0,
        56.5,
        57.0,
        57.5
      ]
    },
    "P041": {
      "name": "Nazione 41",
      "local": 56,
      "lat": -10.800000000000004,
      "lon": -139.0,
      "comment": "\u27a4 Commento sintetico per Nazione 41. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-41.gov",
      "history": [
        54.5,
        55.0,
        55.5,
        56.0,
        56.5,
        57.0,
        57.5,
        58.0,
        58.5
      ]
    },
    "P042": {
      "name": "Nazione 42",
      "local": 57,
      "lat": -9.600000000000001,
      "lon": -138.0,
      "comment": "\u27a4 Commento sintetico per Nazione 42. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-42.gov",
      "history": [
        55.5,
        56.0,
        56.5,
        57.0,
        57.5,
        58.0,
        58.5,
        59.0,
        59.5
      ]
    },
    "P043": {
      "name": "Nazione 43",
      "local": 58,
      "lat": -8.399999999999999,
      "lon": -137.0,
      "comment": "\u27a4 Commento sintetico per Nazione 43. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-43.gov",
      "history": [
        56.5,
        57.0,
        57.5,
        58.0,
        58.5,
        59.0,
        59.5,
        60.0,
        60.5
      ]
    },
    "P044": {
      "name": "Nazione 44",
      "local": 59,
      "lat": -7.200000000000003,
      "lon": -136.0,
      "comment": "\u27a4 Commento sintetico per Nazione 44. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-44.gov",
      "history": [
        57.5,
        58.0,
        58.5,
        59.0,
        59.5,
        60.0,
        60.5,
        61.0,
        61.5
      ]
    },
    "P045": {
      "name": "Nazione 45",
      "local": 60,
      "lat": -6.0,
      "lon": -135.0,
      "comment": "\u27a4 Commento sintetico per Nazione 45. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-45.gov",
      "history": [
        58.5,
        59.0,
        59.5,
        60.0,
        60.5,
        61.0,
        61.5,
        62.0,
        62.5
      ]
    },
    "P046": {
      "name": "Nazione 46",
      "local": 61,
      "lat": -4.800000000000004,
      "lon": -134.0,
      "comment": "\u27a4 Commento sintetico per Nazione 46. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-46.gov",
      "history": [
        59.5,
        60.0,
        60.5,
        61.0,
        61.5,
        62.0,
        62.5,
        63.0,
        63.5
      ]
    },
    "P047": {
      "name": "Nazione 47",
      "local": 62,
      "lat": -3.6000000000000014,
      "lon": -133.0,
      "comment": "\u27a4 Commento sintetico per Nazione 47. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-47.gov",
      "history": [
        60.5,
        61.0,
        61.5,
        62.0,
        62.5,
        63.0,
        63.5,
        64.0,
        64.5
      ]
    },
    "P048": {
      "name": "Nazione 48",
      "local": 63,
      "lat": -2.4000000000000057,
      "lon": -132.0,
      "comment": "\u27a4 Commento sintetico per Nazione 48. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-48.gov",
      "history": [
        61.5,
        62.0,
        62.5,
        63.0,
        63.5,
        64.0,
        64.5,
        65.0,
        65.5
      ]
    },
    "P049": {
      "name": "Nazione 49",
      "local": 64,
      "lat": -1.2000000000000028,
      "lon": -131.0,
      "comment": "\u27a4 Commento sintetico per Nazione 49. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-49.gov",
      "history": [
        62.5,
        63.0,
        63.5,
        64.0,
        64.5,
        65.0,
        65.5,
        66.0,
        66.5
      ]
    },
    "P050": {
      "name": "Nazione 50",
      "local": 65,
      "lat": 0.0,
      "lon": -130.0,
      "comment": "\u27a4 Commento sintetico per Nazione 50. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-50.gov",
      "history": [
        63.5,
        64.0,
        64.5,
        65.0,
        65.5,
        66.0,
        66.5,
        67.0,
        67.5
      ]
    },
    "P051": {
      "name": "Nazione 51",
      "local": 66,
      "lat": 1.1999999999999957,
      "lon": -129.0,
      "comment": "\u27a4 Commento sintetico per Nazione 51. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-51.gov",
      "history": [
        64.5,
        65.0,
        65.5,
        66.0,
        66.5,
        67.0,
        67.5,
        68.0,
        68.5
      ]
    },
    "P052": {
      "name": "Nazione 52",
      "local": 67,
      "lat": 2.3999999999999986,
      "lon": -128.0,
      "comment": "\u27a4 Commento sintetico per Nazione 52. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-52.gov",
      "history": [
        65.5,
        66.0,
        66.5,
        67.0,
        67.5,
        68.0,
        68.5,
        69.0,
        69.5
      ]
    },
    "P053": {
      "name": "Nazione 53",
      "local": 68,
      "lat": 3.5999999999999943,
      "lon": -127.0,
      "comment": "\u27a4 Commento sintetico per Nazione 53. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-53.gov",
      "history": [
        66.5,
        67.0,
        67.5,
        68.0,
        68.5,
        69.0,
        69.5,
        70.0,
        70.5
      ]
    },
    "P054": {
      "name": "Nazione 54",
      "local": 69,
      "lat": 4.799999999999997,
      "lon": -126.0,
      "comment": "\u27a4 Commento sintetico per Nazione 54. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-54.gov",
      "history": [
        67.5,
        68.0,
        68.5,
        69.0,
        69.5,
        70.0,
        70.5,
        71.0,
        71.5
      ]
    },
    "P055": {
      "name": "Nazione 55",
      "local": 70,
      "lat": 6.0,
      "lon": -125.0,
      "comment": "\u27a4 Commento sintetico per Nazione 55. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-55.gov",
      "history": [
        68.5,
        69.0,
        69.5,
        70.0,
        70.5,
        71.0,
        71.5,
        72.0,
        72.5
      ]
    },
    "P056": {
      "name": "Nazione 56",
      "local": 71,
      "lat": 7.200000000000003,
      "lon": -124.0,
      "comment": "\u27a4 Commento sintetico per Nazione 56. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-56.gov",
      "history": [
        69.5,
        70.0,
        70.5,
        71.0,
        71.5,
        72.0,
        72.5,
        73.0,
        73.5
      ]
    },
    "P057": {
      "name": "Nazione 57",
      "local": 72,
      "lat": 8.399999999999991,
      "lon": -123.0,
      "comment": "\u27a4 Commento sintetico per Nazione 57. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-57.gov",
      "history": [
        70.5,
        71.0,
        71.5,
        72.0,
        72.5,
        73.0,
        73.5,
        74.0,
        74.5
      ]
    },
    "P058": {
      "name": "Nazione 58",
      "local": 73,
      "lat": 9.599999999999994,
      "lon": -122.0,
      "comment": "\u27a4 Commento sintetico per Nazione 58. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-58.gov",
      "history": [
        71.5,
        72.0,
        72.5,
        73.0,
        73.5,
        74.0,
        74.5,
        75.0,
        75.5
      ]
    },
    "P059": {
      "name": "Nazione 59",
      "local": 74,
      "lat": 10.799999999999997,
      "lon": -121.0,
      "comment": "\u27a4 Commento sintetico per Nazione 59. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-59.gov",
      "history": [
        72.5,
        73.0,
        73.5,
        74.0,
        74.5,
        75.0,
        75.5,
        76.0,
        76.5
      ]
    },
    "P060": {
      "name": "Nazione 60",
      "local": 45,
      "lat": 12.0,
      "lon": -120.0,
      "comment": "\u27a4 Commento sintetico per Nazione 60. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-60.gov",
      "history": [
        43.5,
        44.0,
        44.5,
        45.0,
        45.5,
        46.0,
        46.5,
        47.0,
        47.5
      ]
    },
    "P061": {
      "name": "Nazione 61",
      "local": 46,
      "lat": 13.200000000000003,
      "lon": -119.0,
      "comment": "\u27a4 Commento sintetico per Nazione 61. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-61.gov",
      "history": [
        44.5,
        45.0,
        45.5,
        46.0,
        46.5,
        47.0,
        47.5,
        48.0,
        48.5
      ]
    },
    "P062": {
      "name": "Nazione 62",
      "local": 47,
      "lat": 14.399999999999991,
      "lon": -118.0,
      "comment": "\u27a4 Commento sintetico per Nazione 62. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-62.gov",
      "history": [
        45.5,
        46.0,
        46.5,
        47.0,
        47.5,
        48.0,
        48.5,
        49.0,
        49.5
      ]
    },
    "P063": {
      "name": "Nazione 63",
      "local": 48,
      "lat": 15.599999999999994,
      "lon": -117.0,
      "comment": "\u27a4 Commento sintetico per Nazione 63. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-63.gov",
      "history": [
        46.5,
        47.0,
        47.5,
        48.0,
        48.5,
        49.0,
        49.5,
        50.0,
        50.5
      ]
    },
    "P064": {
      "name": "Nazione 64",
      "local": 49,
      "lat": 16.799999999999997,
      "lon": -116.0,
      "comment": "\u27a4 Commento sintetico per Nazione 64. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-64.gov",
      "history": [
        47.5,
        48.0,
        48.5,
        49.0,
        49.5,
        50.0,
        50.5,
        51.0,
        51.5
      ]
    },
    "P065": {
      "name": "Nazione 65",
      "local": 50,
      "lat": 18.0,
      "lon": -115.0,
      "comment": "\u27a4 Commento sintetico per Nazione 65. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-65.gov",
      "history": [
        48.5,
        49.0,
        49.5,
        50.0,
        50.5,
        51.0,
        51.5,
        52.0,
        52.5
      ]
    },
    "P066": {
      "name": "Nazione 66",
      "local": 51,
      "lat": 19.200000000000003,
      "lon": -114.0,
      "comment": "\u27a4 Commento sintetico per Nazione 66. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-66.gov",
      "history": [
        49.5,
        50.0,
        50.5,
        51.0,
        51.5,
        52.0,
        52.5,
        53.0,
        53.5
      ]
    },
    "P067": {
      "name": "Nazione 67",
      "local": 52,
      "lat": 20.39999999999999,
      "lon": -113.0,
      "comment": "\u27a4 Commento sintetico per Nazione 67. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-67.gov",
      "history": [
        50.5,
        51.0,
        51.5,
        52.0,
        52.5,
        53.0,
        53.5,
        54.0,
        54.5
      ]
    },
    "P068": {
      "name": "Nazione 68",
      "local": 53,
      "lat": 21.599999999999994,
      "lon": -112.0,
      "comment": "\u27a4 Commento sintetico per Nazione 68. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-68.gov",
      "history": [
        51.5,
        52.0,
        52.5,
        53.0,
        53.5,
        54.0,
        54.5,
        55.0,
        55.5
      ]
    },
    "P069": {
      "name": "Nazione 69",
      "local": 54,
      "lat": 22.799999999999997,
      "lon": -111.0,
      "comment": "\u27a4 Commento sintetico per Nazione 69. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-69.gov",
      "history": [
        52.5,
        53.0,
        53.5,
        54.0,
        54.5,
        55.0,
        55.5,
        56.0,
        56.5
      ]
    },
    "P070": {
      "name": "Nazione 70",
      "local": 55,
      "lat": 24.0,
      "lon": -110.0,
      "comment": "\u27a4 Commento sintetico per Nazione 70. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-70.gov",
      "history": [
        53.5,
        54.0,
        54.5,
        55.0,
        55.5,
        56.0,
        56.5,
        57.0,
        57.5
      ]
    },
    "P071": {
      "name": "Nazione 71",
      "local": 56,
      "lat": 25.200000000000003,
      "lon": -109.0,
      "comment": "\u27a4 Commento sintetico per Nazione 71. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-71.gov",
      "history": [
        54.5,
        55.0,
        55.5,
        56.0,
        56.5,
        57.0,
        57.5,
        58.0,
        58.5
      ]
    },
    "P072": {
      "name": "Nazione 72",
      "local": 57,
      "lat": 26.39999999999999,
      "lon": -108.0,
      "comment": "\u27a4 Commento sintetico per Nazione 72. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-72.gov",
      "history": [
        55.5,
        56.0,
        56.5,
        57.0,
        57.5,
        58.0,
        58.5,
        59.0,
        59.5
      ]
    },
    "P073": {
      "name": "Nazione 73",
      "local": 58,
      "lat": 27.599999999999994,
      "lon": -107.0,
      "comment": "\u27a4 Commento sintetico per Nazione 73. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-73.gov",
      "history": [
        56.5,
        57.0,
        57.5,
        58.0,
        58.5,
        59.0,
        59.5,
        60.0,
        60.5
      ]
    },
    "P074": {
      "name": "Nazione 74",
      "local": 59,
      "lat": 28.799999999999997,
      "lon": -106.0,
      "comment": "\u27a4 Commento sintetico per Nazione 74. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-74.gov",
      "history": [
        57.5,
        58.0,
        58.5,
        59.0,
        59.5,
        60.0,
        60.5,
        61.0,
        61.5
      ]
    },
    "P075": {
      "name": "Nazione 75",
      "local": 60,
      "lat": 30.0,
      "lon": -105.0,
      "comment": "\u27a4 Commento sintetico per Nazione 75. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-75.gov",
      "history": [
        58.5,
        59.0,
        59.5,
        60.0,
        60.5,
        61.0,
        61.5,
        62.0,
        62.5
      ]
    },
    "P076": {
      "name": "Nazione 76",
      "local": 61,
      "lat": 31.200000000000003,
      "lon": -104.0,
      "comment": "\u27a4 Commento sintetico per Nazione 76. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-76.gov",
      "history": [
        59.5,
        60.0,
        60.5,
        61.0,
        61.5,
        62.0,
        62.5,
        63.0,
        63.5
      ]
    },
    "P077": {
      "name": "Nazione 77",
      "local": 62,
      "lat": 32.39999999999999,
      "lon": -103.0,
      "comment": "\u27a4 Commento sintetico per Nazione 77. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-77.gov",
      "history": [
        60.5,
        61.0,
        61.5,
        62.0,
        62.5,
        63.0,
        63.5,
        64.0,
        64.5
      ]
    },
    "P078": {
      "name": "Nazione 78",
      "local": 63,
      "lat": 33.599999999999994,
      "lon": -102.0,
      "comment": "\u27a4 Commento sintetico per Nazione 78. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-78.gov",
      "history": [
        61.5,
        62.0,
        62.5,
        63.0,
        63.5,
        64.0,
        64.5,
        65.0,
        65.5
      ]
    },
    "P079": {
      "name": "Nazione 79",
      "local": 64,
      "lat": 34.8,
      "lon": -101.0,
      "comment": "\u27a4 Commento sintetico per Nazione 79. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-79.gov",
      "history": [
        62.5,
        63.0,
        63.5,
        64.0,
        64.5,
        65.0,
        65.5,
        66.0,
        66.5
      ]
    },
    "P080": {
      "name": "Nazione 80",
      "local": 65,
      "lat": 36.0,
      "lon": -100.0,
      "comment": "\u27a4 Commento sintetico per Nazione 80. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-80.gov",
      "history": [
        63.5,
        64.0,
        64.5,
        65.0,
        65.5,
        66.0,
        66.5,
        67.0,
        67.5
      ]
    },
    "P081": {
      "name": "Nazione 81",
      "local": 66,
      "lat": 37.2,
      "lon": -99.0,
      "comment": "\u27a4 Commento sintetico per Nazione 81. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-81.gov",
      "history": [
        64.5,
        65.0,
        65.5,
        66.0,
        66.5,
        67.0,
        67.5,
        68.0,
        68.5
      ]
    },
    "P082": {
      "name": "Nazione 82",
      "local": 67,
      "lat": 38.39999999999999,
      "lon": -98.0,
      "comment": "\u27a4 Commento sintetico per Nazione 82. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-82.gov",
      "history": [
        65.5,
        66.0,
        66.5,
        67.0,
        67.5,
        68.0,
        68.5,
        69.0,
        69.5
      ]
    },
    "P083": {
      "name": "Nazione 83",
      "local": 68,
      "lat": 39.599999999999994,
      "lon": -97.0,
      "comment": "\u27a4 Commento sintetico per Nazione 83. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-83.gov",
      "history": [
        66.5,
        67.0,
        67.5,
        68.0,
        68.5,
        69.0,
        69.5,
        70.0,
        70.5
      ]
    },
    "P084": {
      "name": "Nazione 84",
      "local": 69,
      "lat": 40.8,
      "lon": -96.0,
      "comment": "\u27a4 Commento sintetico per Nazione 84. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-84.gov",
      "history": [
        67.5,
        68.0,
        68.5,
        69.0,
        69.5,
        70.0,
        70.5,
        71.0,
        71.5
      ]
    },
    "P085": {
      "name": "Nazione 85",
      "local": 70,
      "lat": 42.0,
      "lon": -95.0,
      "comment": "\u27a4 Commento sintetico per Nazione 85. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-85.gov",
      "history": [
        68.5,
        69.0,
        69.5,
        70.0,
        70.5,
        71.0,
        71.5,
        72.0,
        72.5
      ]
    },
    "P086": {
      "name": "Nazione 86",
      "local": 71,
      "lat": 43.2,
      "lon": -94.0,
      "comment": "\u27a4 Commento sintetico per Nazione 86. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-86.gov",
      "history": [
        69.5,
        70.0,
        70.5,
        71.0,
        71.5,
        72.0,
        72.5,
        73.0,
        73.5
      ]
    },
    "P087": {
      "name": "Nazione 87",
      "local": 72,
      "lat": 44.39999999999999,
      "lon": -93.0,
      "comment": "\u27a4 Commento sintetico per Nazione 87. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-87.gov",
      "history": [
        70.5,
        71.0,
        71.5,
        72.0,
        72.5,
        73.0,
        73.5,
        74.0,
        74.5
      ]
    },
    "P088": {
      "name": "Nazione 88",
      "local": 73,
      "lat": 45.599999999999994,
      "lon": -92.0,
      "comment": "\u27a4 Commento sintetico per Nazione 88. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-88.gov",
      "history": [
        71.5,
        72.0,
        72.5,
        73.0,
        73.5,
        74.0,
        74.5,
        75.0,
        75.5
      ]
    },
    "P089": {
      "name": "Nazione 89",
      "local": 74,
      "lat": 46.8,
      "lon": -91.0,
      "comment": "\u27a4 Commento sintetico per Nazione 89. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-89.gov",
      "history": [
        72.5,
        73.0,
        73.5,
        74.0,
        74.5,
        75.0,
        75.5,
        76.0,
        76.5
      ]
    },
    "P090": {
      "name": "Nazione 90",
      "local": 45,
      "lat": 48.0,
      "lon": -90.0,
      "comment": "\u27a4 Commento sintetico per Nazione 90. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-90.gov",
      "history": [
        43.5,
        44.0,
        44.5,
        45.0,
        45.5,
        46.0,
        46.5,
        47.0,
        47.5
      ]
    },
    "P091": {
      "name": "Nazione 91",
      "local": 46,
      "lat": 49.2,
      "lon": -89.0,
      "comment": "\u27a4 Commento sintetico per Nazione 91. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-91.gov",
      "history": [
        44.5,
        45.0,
        45.5,
        46.0,
        46.5,
        47.0,
        47.5,
        48.0,
        48.5
      ]
    },
    "P092": {
      "name": "Nazione 92",
      "local": 47,
      "lat": 50.39999999999999,
      "lon": -88.0,
      "comment": "\u27a4 Commento sintetico per Nazione 92. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-92.gov",
      "history": [
        45.5,
        46.0,
        46.5,
        47.0,
        47.5,
        48.0,
        48.5,
        49.0,
        49.5
      ]
    },
    "P093": {
      "name": "Nazione 93",
      "local": 48,
      "lat": 51.599999999999994,
      "lon": -87.0,
      "comment": "\u27a4 Commento sintetico per Nazione 93. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-93.gov",
      "history": [
        46.5,
        47.0,
        47.5,
        48.0,
        48.5,
        49.0,
        49.5,
        50.0,
        50.5
      ]
    },
    "P094": {
      "name": "Nazione 94",
      "local": 49,
      "lat": 52.8,
      "lon": -86.0,
      "comment": "\u27a4 Commento sintetico per Nazione 94. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-94.gov",
      "history": [
        47.5,
        48.0,
        48.5,
        49.0,
        49.5,
        50.0,
        50.5,
        51.0,
        51.5
      ]
    },
    "P095": {
      "name": "Nazione 95",
      "local": 50,
      "lat": 54.0,
      "lon": -85.0,
      "comment": "\u27a4 Commento sintetico per Nazione 95. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-95.gov",
      "history": [
        48.5,
        49.0,
        49.5,
        50.0,
        50.5,
        51.0,
        51.5,
        52.0,
        52.5
      ]
    },
    "P096": {
      "name": "Nazione 96",
      "local": 51,
      "lat": 55.19999999999999,
      "lon": -84.0,
      "comment": "\u27a4 Commento sintetico per Nazione 96. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-96.gov",
      "history": [
        49.5,
        50.0,
        50.5,
        51.0,
        51.5,
        52.0,
        52.5,
        53.0,
        53.5
      ]
    },
    "P097": {
      "name": "Nazione 97",
      "local": 52,
      "lat": 56.39999999999999,
      "lon": -83.0,
      "comment": "\u27a4 Commento sintetico per Nazione 97. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-97.gov",
      "history": [
        50.5,
        51.0,
        51.5,
        52.0,
        52.5,
        53.0,
        53.5,
        54.0,
        54.5
      ]
    },
    "P098": {
      "name": "Nazione 98",
      "local": 53,
      "lat": 57.599999999999994,
      "lon": -82.0,
      "comment": "\u27a4 Commento sintetico per Nazione 98. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-98.gov",
      "history": [
        51.5,
        52.0,
        52.5,
        53.0,
        53.5,
        54.0,
        54.5,
        55.0,
        55.5
      ]
    },
    "P099": {
      "name": "Nazione 99",
      "local": 54,
      "lat": 58.8,
      "lon": -81.0,
      "comment": "\u27a4 Commento sintetico per Nazione 99. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-99.gov",
      "history": [
        52.5,
        53.0,
        53.5,
        54.0,
        54.5,
        55.0,
        55.5,
        56.0,
        56.5
      ]
    },
    "P100": {
      "name": "Nazione 100",
      "local": 55,
      "lat": 60.0,
      "lon": -80.0,
      "comment": "\u27a4 Commento sintetico per Nazione 100. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-100.gov",
      "history": [
        53.5,
        54.0,
        54.5,
        55.0,
        55.5,
        56.0,
        56.5,
        57.0,
        57.5
      ]
    },
    "P101": {
      "name": "Nazione 101",
      "local": 56,
      "lat": 61.19999999999999,
      "lon": -79.0,
      "comment": "\u27a4 Commento sintetico per Nazione 101. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-101.gov",
      "history": [
        54.5,
        55.0,
        55.5,
        56.0,
        56.5,
        57.0,
        57.5,
        58.0,
        58.5
      ]
    },
    "P102": {
      "name": "Nazione 102",
      "local": 57,
      "lat": 62.39999999999999,
      "lon": -78.0,
      "comment": "\u27a4 Commento sintetico per Nazione 102. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-102.gov",
      "history": [
        55.5,
        56.0,
        56.5,
        57.0,
        57.5,
        58.0,
        58.5,
        59.0,
        59.5
      ]
    },
    "P103": {
      "name": "Nazione 103",
      "local": 58,
      "lat": 63.599999999999994,
      "lon": -77.0,
      "comment": "\u27a4 Commento sintetico per Nazione 103. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-103.gov",
      "history": [
        56.5,
        57.0,
        57.5,
        58.0,
        58.5,
        59.0,
        59.5,
        60.0,
        60.5
      ]
    },
    "P104": {
      "name": "Nazione 104",
      "local": 59,
      "lat": 64.8,
      "lon": -76.0,
      "comment": "\u27a4 Commento sintetico per Nazione 104. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-104.gov",
      "history": [
        57.5,
        58.0,
        58.5,
        59.0,
        59.5,
        60.0,
        60.5,
        61.0,
        61.5
      ]
    },
    "P105": {
      "name": "Nazione 105",
      "local": 60,
      "lat": 66.0,
      "lon": -75.0,
      "comment": "\u27a4 Commento sintetico per Nazione 105. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-105.gov",
      "history": [
        58.5,
        59.0,
        59.5,
        60.0,
        60.5,
        61.0,
        61.5,
        62.0,
        62.5
      ]
    },
    "P106": {
      "name": "Nazione 106",
      "local": 61,
      "lat": 67.19999999999999,
      "lon": -74.0,
      "comment": "\u27a4 Commento sintetico per Nazione 106. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-106.gov",
      "history": [
        59.5,
        60.0,
        60.5,
        61.0,
        61.5,
        62.0,
        62.5,
        63.0,
        63.5
      ]
    },
    "P107": {
      "name": "Nazione 107",
      "local": 62,
      "lat": 68.4,
      "lon": -73.0,
      "comment": "\u27a4 Commento sintetico per Nazione 107. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-107.gov",
      "history": [
        60.5,
        61.0,
        61.5,
        62.0,
        62.5,
        63.0,
        63.5,
        64.0,
        64.5
      ]
    },
    "P108": {
      "name": "Nazione 108",
      "local": 63,
      "lat": 69.6,
      "lon": -72.0,
      "comment": "\u27a4 Commento sintetico per Nazione 108. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-108.gov",
      "history": [
        61.5,
        62.0,
        62.5,
        63.0,
        63.5,
        64.0,
        64.5,
        65.0,
        65.5
      ]
    },
    "P109": {
      "name": "Nazione 109",
      "local": 64,
      "lat": 70.79999999999998,
      "lon": -71.0,
      "comment": "\u27a4 Commento sintetico per Nazione 109. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-109.gov",
      "history": [
        62.5,
        63.0,
        63.5,
        64.0,
        64.5,
        65.0,
        65.5,
        66.0,
        66.5
      ]
    },
    "P110": {
      "name": "Nazione 110",
      "local": 65,
      "lat": 72.0,
      "lon": -70.0,
      "comment": "\u27a4 Commento sintetico per Nazione 110. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-110.gov",
      "history": [
        63.5,
        64.0,
        64.5,
        65.0,
        65.5,
        66.0,
        66.5,
        67.0,
        67.5
      ]
    },
    "P111": {
      "name": "Nazione 111",
      "local": 66,
      "lat": 73.19999999999999,
      "lon": -69.0,
      "comment": "\u27a4 Commento sintetico per Nazione 111. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-111.gov",
      "history": [
        64.5,
        65.0,
        65.5,
        66.0,
        66.5,
        67.0,
        67.5,
        68.0,
        68.5
      ]
    },
    "P112": {
      "name": "Nazione 112",
      "local": 67,
      "lat": 74.4,
      "lon": -68.0,
      "comment": "\u27a4 Commento sintetico per Nazione 112. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-112.gov",
      "history": [
        65.5,
        66.0,
        66.5,
        67.0,
        67.5,
        68.0,
        68.5,
        69.0,
        69.5
      ]
    },
    "P113": {
      "name": "Nazione 113",
      "local": 68,
      "lat": 75.6,
      "lon": -67.0,
      "comment": "\u27a4 Commento sintetico per Nazione 113. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-113.gov",
      "history": [
        66.5,
        67.0,
        67.5,
        68.0,
        68.5,
        69.0,
        69.5,
        70.0,
        70.5
      ]
    },
    "P114": {
      "name": "Nazione 114",
      "local": 69,
      "lat": 76.79999999999998,
      "lon": -66.0,
      "comment": "\u27a4 Commento sintetico per Nazione 114. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-114.gov",
      "history": [
        67.5,
        68.0,
        68.5,
        69.0,
        69.5,
        70.0,
        70.5,
        71.0,
        71.5
      ]
    },
    "P115": {
      "name": "Nazione 115",
      "local": 70,
      "lat": 78.0,
      "lon": -65.0,
      "comment": "\u27a4 Commento sintetico per Nazione 115. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-115.gov",
      "history": [
        68.5,
        69.0,
        69.5,
        70.0,
        70.5,
        71.0,
        71.5,
        72.0,
        72.5
      ]
    },
    "P116": {
      "name": "Nazione 116",
      "local": 71,
      "lat": 79.19999999999999,
      "lon": -64.0,
      "comment": "\u27a4 Commento sintetico per Nazione 116. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-116.gov",
      "history": [
        69.5,
        70.0,
        70.5,
        71.0,
        71.5,
        72.0,
        72.5,
        73.0,
        73.5
      ]
    },
    "P117": {
      "name": "Nazione 117",
      "local": 72,
      "lat": 80.4,
      "lon": -63.0,
      "comment": "\u27a4 Commento sintetico per Nazione 117. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-117.gov",
      "history": [
        70.5,
        71.0,
        71.5,
        72.0,
        72.5,
        73.0,
        73.5,
        74.0,
        74.5
      ]
    },
    "P118": {
      "name": "Nazione 118",
      "local": 73,
      "lat": 81.6,
      "lon": -62.0,
      "comment": "\u27a4 Commento sintetico per Nazione 118. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-118.gov",
      "history": [
        71.5,
        72.0,
        72.5,
        73.0,
        73.5,
        74.0,
        74.5,
        75.0,
        75.5
      ]
    },
    "P119": {
      "name": "Nazione 119",
      "local": 74,
      "lat": 82.79999999999998,
      "lon": -61.0,
      "comment": "\u27a4 Commento sintetico per Nazione 119. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-119.gov",
      "history": [
        72.5,
        73.0,
        73.5,
        74.0,
        74.5,
        75.0,
        75.5,
        76.0,
        76.5
      ]
    },
    "P120": {
      "name": "Nazione 120",
      "local": 45,
      "lat": -60.0,
      "lon": -60.0,
      "comment": "\u27a4 Commento sintetico per Nazione 120. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-120.gov",
      "history": [
        43.5,
        44.0,
        44.5,
        45.0,
        45.5,
        46.0,
        46.5,
        47.0,
        47.5
      ]
    },
    "P121": {
      "name": "Nazione 121",
      "local": 46,
      "lat": -58.8,
      "lon": -59.0,
      "comment": "\u27a4 Commento sintetico per Nazione 121. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-121.gov",
      "history": [
        44.5,
        45.0,
        45.5,
        46.0,
        46.5,
        47.0,
        47.5,
        48.0,
        48.5
      ]
    },
    "P122": {
      "name": "Nazione 122",
      "local": 47,
      "lat": -57.6,
      "lon": -58.0,
      "comment": "\u27a4 Commento sintetico per Nazione 122. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-122.gov",
      "history": [
        45.5,
        46.0,
        46.5,
        47.0,
        47.5,
        48.0,
        48.5,
        49.0,
        49.5
      ]
    },
    "P123": {
      "name": "Nazione 123",
      "local": 48,
      "lat": -56.4,
      "lon": -57.0,
      "comment": "\u27a4 Commento sintetico per Nazione 123. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-123.gov",
      "history": [
        46.5,
        47.0,
        47.5,
        48.0,
        48.5,
        49.0,
        49.5,
        50.0,
        50.5
      ]
    },
    "P124": {
      "name": "Nazione 124",
      "local": 49,
      "lat": -55.2,
      "lon": -56.0,
      "comment": "\u27a4 Commento sintetico per Nazione 124. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-124.gov",
      "history": [
        47.5,
        48.0,
        48.5,
        49.0,
        49.5,
        50.0,
        50.5,
        51.0,
        51.5
      ]
    },
    "P125": {
      "name": "Nazione 125",
      "local": 50,
      "lat": -54.0,
      "lon": -55.0,
      "comment": "\u27a4 Commento sintetico per Nazione 125. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-125.gov",
      "history": [
        48.5,
        49.0,
        49.5,
        50.0,
        50.5,
        51.0,
        51.5,
        52.0,
        52.5
      ]
    },
    "P126": {
      "name": "Nazione 126",
      "local": 51,
      "lat": -52.8,
      "lon": -54.0,
      "comment": "\u27a4 Commento sintetico per Nazione 126. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-126.gov",
      "history": [
        49.5,
        50.0,
        50.5,
        51.0,
        51.5,
        52.0,
        52.5,
        53.0,
        53.5
      ]
    },
    "P127": {
      "name": "Nazione 127",
      "local": 52,
      "lat": -51.6,
      "lon": -53.0,
      "comment": "\u27a4 Commento sintetico per Nazione 127. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-127.gov",
      "history": [
        50.5,
        51.0,
        51.5,
        52.0,
        52.5,
        53.0,
        53.5,
        54.0,
        54.5
      ]
    },
    "P128": {
      "name": "Nazione 128",
      "local": 53,
      "lat": -50.4,
      "lon": -52.0,
      "comment": "\u27a4 Commento sintetico per Nazione 128. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-128.gov",
      "history": [
        51.5,
        52.0,
        52.5,
        53.0,
        53.5,
        54.0,
        54.5,
        55.0,
        55.5
      ]
    },
    "P129": {
      "name": "Nazione 129",
      "local": 54,
      "lat": -49.2,
      "lon": -51.0,
      "comment": "\u27a4 Commento sintetico per Nazione 129. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-129.gov",
      "history": [
        52.5,
        53.0,
        53.5,
        54.0,
        54.5,
        55.0,
        55.5,
        56.0,
        56.5
      ]
    },
    "P130": {
      "name": "Nazione 130",
      "local": 55,
      "lat": -48.0,
      "lon": -50.0,
      "comment": "\u27a4 Commento sintetico per Nazione 130. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-130.gov",
      "history": [
        53.5,
        54.0,
        54.5,
        55.0,
        55.5,
        56.0,
        56.5,
        57.0,
        57.5
      ]
    },
    "P131": {
      "name": "Nazione 131",
      "local": 56,
      "lat": -46.8,
      "lon": -49.0,
      "comment": "\u27a4 Commento sintetico per Nazione 131. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-131.gov",
      "history": [
        54.5,
        55.0,
        55.5,
        56.0,
        56.5,
        57.0,
        57.5,
        58.0,
        58.5
      ]
    },
    "P132": {
      "name": "Nazione 132",
      "local": 57,
      "lat": -45.6,
      "lon": -48.0,
      "comment": "\u27a4 Commento sintetico per Nazione 132. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-132.gov",
      "history": [
        55.5,
        56.0,
        56.5,
        57.0,
        57.5,
        58.0,
        58.5,
        59.0,
        59.5
      ]
    },
    "P133": {
      "name": "Nazione 133",
      "local": 58,
      "lat": -44.4,
      "lon": -47.0,
      "comment": "\u27a4 Commento sintetico per Nazione 133. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-133.gov",
      "history": [
        56.5,
        57.0,
        57.5,
        58.0,
        58.5,
        59.0,
        59.5,
        60.0,
        60.5
      ]
    },
    "P134": {
      "name": "Nazione 134",
      "local": 59,
      "lat": -43.2,
      "lon": -46.0,
      "comment": "\u27a4 Commento sintetico per Nazione 134. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-134.gov",
      "history": [
        57.5,
        58.0,
        58.5,
        59.0,
        59.5,
        60.0,
        60.5,
        61.0,
        61.5
      ]
    },
    "P135": {
      "name": "Nazione 135",
      "local": 60,
      "lat": -42.0,
      "lon": -45.0,
      "comment": "\u27a4 Commento sintetico per Nazione 135. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-135.gov",
      "history": [
        58.5,
        59.0,
        59.5,
        60.0,
        60.5,
        61.0,
        61.5,
        62.0,
        62.5
      ]
    },
    "P136": {
      "name": "Nazione 136",
      "local": 61,
      "lat": -40.8,
      "lon": -44.0,
      "comment": "\u27a4 Commento sintetico per Nazione 136. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-136.gov",
      "history": [
        59.5,
        60.0,
        60.5,
        61.0,
        61.5,
        62.0,
        62.5,
        63.0,
        63.5
      ]
    },
    "P137": {
      "name": "Nazione 137",
      "local": 62,
      "lat": -39.6,
      "lon": -43.0,
      "comment": "\u27a4 Commento sintetico per Nazione 137. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-137.gov",
      "history": [
        60.5,
        61.0,
        61.5,
        62.0,
        62.5,
        63.0,
        63.5,
        64.0,
        64.5
      ]
    },
    "P138": {
      "name": "Nazione 138",
      "local": 63,
      "lat": -38.400000000000006,
      "lon": -42.0,
      "comment": "\u27a4 Commento sintetico per Nazione 138. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-138.gov",
      "history": [
        61.5,
        62.0,
        62.5,
        63.0,
        63.5,
        64.0,
        64.5,
        65.0,
        65.5
      ]
    },
    "P139": {
      "name": "Nazione 139",
      "local": 64,
      "lat": -37.2,
      "lon": -41.0,
      "comment": "\u27a4 Commento sintetico per Nazione 139. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-139.gov",
      "history": [
        62.5,
        63.0,
        63.5,
        64.0,
        64.5,
        65.0,
        65.5,
        66.0,
        66.5
      ]
    },
    "P140": {
      "name": "Nazione 140",
      "local": 65,
      "lat": -36.0,
      "lon": -40.0,
      "comment": "\u27a4 Commento sintetico per Nazione 140. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-140.gov",
      "history": [
        63.5,
        64.0,
        64.5,
        65.0,
        65.5,
        66.0,
        66.5,
        67.0,
        67.5
      ]
    },
    "P141": {
      "name": "Nazione 141",
      "local": 66,
      "lat": -34.8,
      "lon": -39.0,
      "comment": "\u27a4 Commento sintetico per Nazione 141. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-141.gov",
      "history": [
        64.5,
        65.0,
        65.5,
        66.0,
        66.5,
        67.0,
        67.5,
        68.0,
        68.5
      ]
    },
    "P142": {
      "name": "Nazione 142",
      "local": 67,
      "lat": -33.6,
      "lon": -38.0,
      "comment": "\u27a4 Commento sintetico per Nazione 142. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-142.gov",
      "history": [
        65.5,
        66.0,
        66.5,
        67.0,
        67.5,
        68.0,
        68.5,
        69.0,
        69.5
      ]
    },
    "P143": {
      "name": "Nazione 143",
      "local": 68,
      "lat": -32.400000000000006,
      "lon": -37.0,
      "comment": "\u27a4 Commento sintetico per Nazione 143. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-143.gov",
      "history": [
        66.5,
        67.0,
        67.5,
        68.0,
        68.5,
        69.0,
        69.5,
        70.0,
        70.5
      ]
    },
    "P144": {
      "name": "Nazione 144",
      "local": 69,
      "lat": -31.200000000000003,
      "lon": -36.0,
      "comment": "\u27a4 Commento sintetico per Nazione 144. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-144.gov",
      "history": [
        67.5,
        68.0,
        68.5,
        69.0,
        69.5,
        70.0,
        70.5,
        71.0,
        71.5
      ]
    },
    "P145": {
      "name": "Nazione 145",
      "local": 70,
      "lat": -30.0,
      "lon": -35.0,
      "comment": "\u27a4 Commento sintetico per Nazione 145. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-145.gov",
      "history": [
        68.5,
        69.0,
        69.5,
        70.0,
        70.5,
        71.0,
        71.5,
        72.0,
        72.5
      ]
    },
    "P146": {
      "name": "Nazione 146",
      "local": 71,
      "lat": -28.8,
      "lon": -34.0,
      "comment": "\u27a4 Commento sintetico per Nazione 146. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-146.gov",
      "history": [
        69.5,
        70.0,
        70.5,
        71.0,
        71.5,
        72.0,
        72.5,
        73.0,
        73.5
      ]
    },
    "P147": {
      "name": "Nazione 147",
      "local": 72,
      "lat": -27.6,
      "lon": -33.0,
      "comment": "\u27a4 Commento sintetico per Nazione 147. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-147.gov",
      "history": [
        70.5,
        71.0,
        71.5,
        72.0,
        72.5,
        73.0,
        73.5,
        74.0,
        74.5
      ]
    },
    "P148": {
      "name": "Nazione 148",
      "local": 73,
      "lat": -26.4,
      "lon": -32.0,
      "comment": "\u27a4 Commento sintetico per Nazione 148. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-148.gov",
      "history": [
        71.5,
        72.0,
        72.5,
        73.0,
        73.5,
        74.0,
        74.5,
        75.0,
        75.5
      ]
    },
    "P149": {
      "name": "Nazione 149",
      "local": 74,
      "lat": -25.200000000000003,
      "lon": -31.0,
      "comment": "\u27a4 Commento sintetico per Nazione 149. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-149.gov",
      "history": [
        72.5,
        73.0,
        73.5,
        74.0,
        74.5,
        75.0,
        75.5,
        76.0,
        76.5
      ]
    },
    "P150": {
      "name": "Nazione 150",
      "local": 45,
      "lat": -24.0,
      "lon": -30.0,
      "comment": "\u27a4 Commento sintetico per Nazione 150. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-150.gov",
      "history": [
        43.5,
        44.0,
        44.5,
        45.0,
        45.5,
        46.0,
        46.5,
        47.0,
        47.5
      ]
    },
    "P151": {
      "name": "Nazione 151",
      "local": 46,
      "lat": -22.800000000000004,
      "lon": -29.0,
      "comment": "\u27a4 Commento sintetico per Nazione 151. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-151.gov",
      "history": [
        44.5,
        45.0,
        45.5,
        46.0,
        46.5,
        47.0,
        47.5,
        48.0,
        48.5
      ]
    },
    "P152": {
      "name": "Nazione 152",
      "local": 47,
      "lat": -21.6,
      "lon": -28.0,
      "comment": "\u27a4 Commento sintetico per Nazione 152. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-152.gov",
      "history": [
        45.5,
        46.0,
        46.5,
        47.0,
        47.5,
        48.0,
        48.5,
        49.0,
        49.5
      ]
    },
    "P153": {
      "name": "Nazione 153",
      "local": 48,
      "lat": -20.4,
      "lon": -27.0,
      "comment": "\u27a4 Commento sintetico per Nazione 153. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-153.gov",
      "history": [
        46.5,
        47.0,
        47.5,
        48.0,
        48.5,
        49.0,
        49.5,
        50.0,
        50.5
      ]
    },
    "P154": {
      "name": "Nazione 154",
      "local": 49,
      "lat": -19.200000000000003,
      "lon": -26.0,
      "comment": "\u27a4 Commento sintetico per Nazione 154. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-154.gov",
      "history": [
        47.5,
        48.0,
        48.5,
        49.0,
        49.5,
        50.0,
        50.5,
        51.0,
        51.5
      ]
    },
    "P155": {
      "name": "Nazione 155",
      "local": 50,
      "lat": -18.0,
      "lon": -25.0,
      "comment": "\u27a4 Commento sintetico per Nazione 155. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-155.gov",
      "history": [
        48.5,
        49.0,
        49.5,
        50.0,
        50.5,
        51.0,
        51.5,
        52.0,
        52.5
      ]
    },
    "P156": {
      "name": "Nazione 156",
      "local": 51,
      "lat": -16.800000000000004,
      "lon": -24.0,
      "comment": "\u27a4 Commento sintetico per Nazione 156. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-156.gov",
      "history": [
        49.5,
        50.0,
        50.5,
        51.0,
        51.5,
        52.0,
        52.5,
        53.0,
        53.5
      ]
    },
    "P157": {
      "name": "Nazione 157",
      "local": 52,
      "lat": -15.600000000000001,
      "lon": -23.0,
      "comment": "\u27a4 Commento sintetico per Nazione 157. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-157.gov",
      "history": [
        50.5,
        51.0,
        51.5,
        52.0,
        52.5,
        53.0,
        53.5,
        54.0,
        54.5
      ]
    },
    "P158": {
      "name": "Nazione 158",
      "local": 53,
      "lat": -14.399999999999999,
      "lon": -22.0,
      "comment": "\u27a4 Commento sintetico per Nazione 158. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-158.gov",
      "history": [
        51.5,
        52.0,
        52.5,
        53.0,
        53.5,
        54.0,
        54.5,
        55.0,
        55.5
      ]
    },
    "P159": {
      "name": "Nazione 159",
      "local": 54,
      "lat": -13.200000000000003,
      "lon": -21.0,
      "comment": "\u27a4 Commento sintetico per Nazione 159. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-159.gov",
      "history": [
        52.5,
        53.0,
        53.5,
        54.0,
        54.5,
        55.0,
        55.5,
        56.0,
        56.5
      ]
    },
    "P160": {
      "name": "Nazione 160",
      "local": 55,
      "lat": -12.0,
      "lon": -20.0,
      "comment": "\u27a4 Commento sintetico per Nazione 160. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-160.gov",
      "history": [
        53.5,
        54.0,
        54.5,
        55.0,
        55.5,
        56.0,
        56.5,
        57.0,
        57.5
      ]
    },
    "P161": {
      "name": "Nazione 161",
      "local": 56,
      "lat": -10.800000000000004,
      "lon": -19.0,
      "comment": "\u27a4 Commento sintetico per Nazione 161. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-161.gov",
      "history": [
        54.5,
        55.0,
        55.5,
        56.0,
        56.5,
        57.0,
        57.5,
        58.0,
        58.5
      ]
    },
    "P162": {
      "name": "Nazione 162",
      "local": 57,
      "lat": -9.600000000000001,
      "lon": -18.0,
      "comment": "\u27a4 Commento sintetico per Nazione 162. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-162.gov",
      "history": [
        55.5,
        56.0,
        56.5,
        57.0,
        57.5,
        58.0,
        58.5,
        59.0,
        59.5
      ]
    },
    "P163": {
      "name": "Nazione 163",
      "local": 58,
      "lat": -8.399999999999999,
      "lon": -17.0,
      "comment": "\u27a4 Commento sintetico per Nazione 163. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-163.gov",
      "history": [
        56.5,
        57.0,
        57.5,
        58.0,
        58.5,
        59.0,
        59.5,
        60.0,
        60.5
      ]
    },
    "P164": {
      "name": "Nazione 164",
      "local": 59,
      "lat": -7.200000000000003,
      "lon": -16.0,
      "comment": "\u27a4 Commento sintetico per Nazione 164. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-164.gov",
      "history": [
        57.5,
        58.0,
        58.5,
        59.0,
        59.5,
        60.0,
        60.5,
        61.0,
        61.5
      ]
    },
    "P165": {
      "name": "Nazione 165",
      "local": 60,
      "lat": -6.0,
      "lon": -15.0,
      "comment": "\u27a4 Commento sintetico per Nazione 165. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-165.gov",
      "history": [
        58.5,
        59.0,
        59.5,
        60.0,
        60.5,
        61.0,
        61.5,
        62.0,
        62.5
      ]
    },
    "P166": {
      "name": "Nazione 166",
      "local": 61,
      "lat": -4.800000000000004,
      "lon": -14.0,
      "comment": "\u27a4 Commento sintetico per Nazione 166. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-166.gov",
      "history": [
        59.5,
        60.0,
        60.5,
        61.0,
        61.5,
        62.0,
        62.5,
        63.0,
        63.5
      ]
    },
    "P167": {
      "name": "Nazione 167",
      "local": 62,
      "lat": -3.6000000000000014,
      "lon": -13.0,
      "comment": "\u27a4 Commento sintetico per Nazione 167. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-167.gov",
      "history": [
        60.5,
        61.0,
        61.5,
        62.0,
        62.5,
        63.0,
        63.5,
        64.0,
        64.5
      ]
    },
    "P168": {
      "name": "Nazione 168",
      "local": 63,
      "lat": -2.4000000000000057,
      "lon": -12.0,
      "comment": "\u27a4 Commento sintetico per Nazione 168. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-168.gov",
      "history": [
        61.5,
        62.0,
        62.5,
        63.0,
        63.5,
        64.0,
        64.5,
        65.0,
        65.5
      ]
    },
    "P169": {
      "name": "Nazione 169",
      "local": 64,
      "lat": -1.2000000000000028,
      "lon": -11.0,
      "comment": "\u27a4 Commento sintetico per Nazione 169. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-169.gov",
      "history": [
        62.5,
        63.0,
        63.5,
        64.0,
        64.5,
        65.0,
        65.5,
        66.0,
        66.5
      ]
    },
    "P170": {
      "name": "Nazione 170",
      "local": 65,
      "lat": 0.0,
      "lon": -10.0,
      "comment": "\u27a4 Commento sintetico per Nazione 170. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-170.gov",
      "history": [
        63.5,
        64.0,
        64.5,
        65.0,
        65.5,
        66.0,
        66.5,
        67.0,
        67.5
      ]
    },
    "P171": {
      "name": "Nazione 171",
      "local": 66,
      "lat": 1.1999999999999957,
      "lon": -9.0,
      "comment": "\u27a4 Commento sintetico per Nazione 171. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-171.gov",
      "history": [
        64.5,
        65.0,
        65.5,
        66.0,
        66.5,
        67.0,
        67.5,
        68.0,
        68.5
      ]
    },
    "P172": {
      "name": "Nazione 172",
      "local": 67,
      "lat": 2.3999999999999986,
      "lon": -8.0,
      "comment": "\u27a4 Commento sintetico per Nazione 172. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-172.gov",
      "history": [
        65.5,
        66.0,
        66.5,
        67.0,
        67.5,
        68.0,
        68.5,
        69.0,
        69.5
      ]
    },
    "P173": {
      "name": "Nazione 173",
      "local": 68,
      "lat": 3.5999999999999943,
      "lon": -7.0,
      "comment": "\u27a4 Commento sintetico per Nazione 173. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-173.gov",
      "history": [
        66.5,
        67.0,
        67.5,
        68.0,
        68.5,
        69.0,
        69.5,
        70.0,
        70.5
      ]
    },
    "P174": {
      "name": "Nazione 174",
      "local": 69,
      "lat": 4.799999999999997,
      "lon": -6.0,
      "comment": "\u27a4 Commento sintetico per Nazione 174. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-174.gov",
      "history": [
        67.5,
        68.0,
        68.5,
        69.0,
        69.5,
        70.0,
        70.5,
        71.0,
        71.5
      ]
    },
    "P175": {
      "name": "Nazione 175",
      "local": 70,
      "lat": 6.0,
      "lon": -5.0,
      "comment": "\u27a4 Commento sintetico per Nazione 175. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-175.gov",
      "history": [
        68.5,
        69.0,
        69.5,
        70.0,
        70.5,
        71.0,
        71.5,
        72.0,
        72.5
      ]
    },
    "P176": {
      "name": "Nazione 176",
      "local": 71,
      "lat": 7.200000000000003,
      "lon": -4.0,
      "comment": "\u27a4 Commento sintetico per Nazione 176. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-176.gov",
      "history": [
        69.5,
        70.0,
        70.5,
        71.0,
        71.5,
        72.0,
        72.5,
        73.0,
        73.5
      ]
    },
    "P177": {
      "name": "Nazione 177",
      "local": 72,
      "lat": 8.399999999999991,
      "lon": -3.0,
      "comment": "\u27a4 Commento sintetico per Nazione 177. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-177.gov",
      "history": [
        70.5,
        71.0,
        71.5,
        72.0,
        72.5,
        73.0,
        73.5,
        74.0,
        74.5
      ]
    },
    "P178": {
      "name": "Nazione 178",
      "local": 73,
      "lat": 9.599999999999994,
      "lon": -2.0,
      "comment": "\u27a4 Commento sintetico per Nazione 178. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-178.gov",
      "history": [
        71.5,
        72.0,
        72.5,
        73.0,
        73.5,
        74.0,
        74.5,
        75.0,
        75.5
      ]
    },
    "P179": {
      "name": "Nazione 179",
      "local": 74,
      "lat": 10.799999999999997,
      "lon": -1.0,
      "comment": "\u27a4 Commento sintetico per Nazione 179. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-179.gov",
      "history": [
        72.5,
        73.0,
        73.5,
        74.0,
        74.5,
        75.0,
        75.5,
        76.0,
        76.5
      ]
    },
    "P180": {
      "name": "Nazione 180",
      "local": 45,
      "lat": 12.0,
      "lon": 0.0,
      "comment": "\u27a4 Commento sintetico per Nazione 180. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-180.gov",
      "history": [
        43.5,
        44.0,
        44.5,
        45.0,
        45.5,
        46.0,
        46.5,
        47.0,
        47.5
      ]
    },
    "P181": {
      "name": "Nazione 181",
      "local": 46,
      "lat": 13.200000000000003,
      "lon": 1.0,
      "comment": "\u27a4 Commento sintetico per Nazione 181. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-181.gov",
      "history": [
        44.5,
        45.0,
        45.5,
        46.0,
        46.5,
        47.0,
        47.5,
        48.0,
        48.5
      ]
    },
    "P182": {
      "name": "Nazione 182",
      "local": 47,
      "lat": 14.399999999999991,
      "lon": 2.0,
      "comment": "\u27a4 Commento sintetico per Nazione 182. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-182.gov",
      "history": [
        45.5,
        46.0,
        46.5,
        47.0,
        47.5,
        48.0,
        48.5,
        49.0,
        49.5
      ]
    },
    "P183": {
      "name": "Nazione 183",
      "local": 48,
      "lat": 15.599999999999994,
      "lon": 3.0,
      "comment": "\u27a4 Commento sintetico per Nazione 183. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-183.gov",
      "history": [
        46.5,
        47.0,
        47.5,
        48.0,
        48.5,
        49.0,
        49.5,
        50.0,
        50.5
      ]
    },
    "P184": {
      "name": "Nazione 184",
      "local": 49,
      "lat": 16.799999999999997,
      "lon": 4.0,
      "comment": "\u27a4 Commento sintetico per Nazione 184. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-184.gov",
      "history": [
        47.5,
        48.0,
        48.5,
        49.0,
        49.5,
        50.0,
        50.5,
        51.0,
        51.5
      ]
    },
    "P185": {
      "name": "Nazione 185",
      "local": 50,
      "lat": 18.0,
      "lon": 5.0,
      "comment": "\u27a4 Commento sintetico per Nazione 185. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-185.gov",
      "history": [
        48.5,
        49.0,
        49.5,
        50.0,
        50.5,
        51.0,
        51.5,
        52.0,
        52.5
      ]
    },
    "P186": {
      "name": "Nazione 186",
      "local": 51,
      "lat": 19.200000000000003,
      "lon": 6.0,
      "comment": "\u27a4 Commento sintetico per Nazione 186. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-186.gov",
      "history": [
        49.5,
        50.0,
        50.5,
        51.0,
        51.5,
        52.0,
        52.5,
        53.0,
        53.5
      ]
    },
    "P187": {
      "name": "Nazione 187",
      "local": 52,
      "lat": 20.39999999999999,
      "lon": 7.0,
      "comment": "\u27a4 Commento sintetico per Nazione 187. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-187.gov",
      "history": [
        50.5,
        51.0,
        51.5,
        52.0,
        52.5,
        53.0,
        53.5,
        54.0,
        54.5
      ]
    },
    "P188": {
      "name": "Nazione 188",
      "local": 53,
      "lat": 21.599999999999994,
      "lon": 8.0,
      "comment": "\u27a4 Commento sintetico per Nazione 188. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-188.gov",
      "history": [
        51.5,
        52.0,
        52.5,
        53.0,
        53.5,
        54.0,
        54.5,
        55.0,
        55.5
      ]
    },
    "P189": {
      "name": "Nazione 189",
      "local": 54,
      "lat": 22.799999999999997,
      "lon": 9.0,
      "comment": "\u27a4 Commento sintetico per Nazione 189. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-189.gov",
      "history": [
        52.5,
        53.0,
        53.5,
        54.0,
        54.5,
        55.0,
        55.5,
        56.0,
        56.5
      ]
    },
    "P190": {
      "name": "Nazione 190",
      "local": 55,
      "lat": 24.0,
      "lon": 10.0,
      "comment": "\u27a4 Commento sintetico per Nazione 190. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-190.gov",
      "history": [
        53.5,
        54.0,
        54.5,
        55.0,
        55.5,
        56.0,
        56.5,
        57.0,
        57.5
      ]
    },
    "P191": {
      "name": "Nazione 191",
      "local": 56,
      "lat": 25.200000000000003,
      "lon": 11.0,
      "comment": "\u27a4 Commento sintetico per Nazione 191. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-191.gov",
      "history": [
        54.5,
        55.0,
        55.5,
        56.0,
        56.5,
        57.0,
        57.5,
        58.0,
        58.5
      ]
    },
    "P192": {
      "name": "Nazione 192",
      "local": 57,
      "lat": 26.39999999999999,
      "lon": 12.0,
      "comment": "\u27a4 Commento sintetico per Nazione 192. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-192.gov",
      "history": [
        55.5,
        56.0,
        56.5,
        57.0,
        57.5,
        58.0,
        58.5,
        59.0,
        59.5
      ]
    },
    "P193": {
      "name": "Nazione 193",
      "local": 58,
      "lat": 27.599999999999994,
      "lon": 13.0,
      "comment": "\u27a4 Commento sintetico per Nazione 193. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-193.gov",
      "history": [
        56.5,
        57.0,
        57.5,
        58.0,
        58.5,
        59.0,
        59.5,
        60.0,
        60.5
      ]
    },
    "P194": {
      "name": "Nazione 194",
      "local": 59,
      "lat": 28.799999999999997,
      "lon": 14.0,
      "comment": "\u27a4 Commento sintetico per Nazione 194. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-194.gov",
      "history": [
        57.5,
        58.0,
        58.5,
        59.0,
        59.5,
        60.0,
        60.5,
        61.0,
        61.5
      ]
    },
    "P195": {
      "name": "Nazione 195",
      "local": 60,
      "lat": 30.0,
      "lon": 15.0,
      "comment": "\u27a4 Commento sintetico per Nazione 195. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-195.gov",
      "history": [
        58.5,
        59.0,
        59.5,
        60.0,
        60.5,
        61.0,
        61.5,
        62.0,
        62.5
      ]
    },
    "P196": {
      "name": "Nazione 196",
      "local": 61,
      "lat": 31.200000000000003,
      "lon": 16.0,
      "comment": "\u27a4 Commento sintetico per Nazione 196. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-196.gov",
      "history": [
        59.5,
        60.0,
        60.5,
        61.0,
        61.5,
        62.0,
        62.5,
        63.0,
        63.5
      ]
    },
    "P197": {
      "name": "Nazione 197",
      "local": 62,
      "lat": 32.39999999999999,
      "lon": 17.0,
      "comment": "\u27a4 Commento sintetico per Nazione 197. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-197.gov",
      "history": [
        60.5,
        61.0,
        61.5,
        62.0,
        62.5,
        63.0,
        63.5,
        64.0,
        64.5
      ]
    },
    "P198": {
      "name": "Nazione 198",
      "local": 63,
      "lat": 33.599999999999994,
      "lon": 18.0,
      "comment": "\u27a4 Commento sintetico per Nazione 198. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-198.gov",
      "history": [
        61.5,
        62.0,
        62.5,
        63.0,
        63.5,
        64.0,
        64.5,
        65.0,
        65.5
      ]
    },
    "P199": {
      "name": "Nazione 199",
      "local": 64,
      "lat": 34.8,
      "lon": 19.0,
      "comment": "\u27a4 Commento sintetico per Nazione 199. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-199.gov",
      "history": [
        62.5,
        63.0,
        63.5,
        64.0,
        64.5,
        65.0,
        65.5,
        66.0,
        66.5
      ]
    },
    "P200": {
      "name": "Nazione 200",
      "local": 65,
      "lat": 36.0,
      "lon": 20.0,
      "comment": "\u27a4 Commento sintetico per Nazione 200. \u27a4 Fonte nazionale + confronto con fonte globale.",
      "source": "https://fonte-nazione-200.gov",
      "history": [
        63.5,
        64.0,
        64.5,
        65.0,
        65.5,
        66.0,
        66.5,
        67.0,
        67.5
      ]
    }
  }
};