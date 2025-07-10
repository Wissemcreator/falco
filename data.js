const globalData = {
  gold: 24.5,
  btc: 23.8,
  btcVolume24h: 26400000000,
  btcSupply: 19650000,
  countries: {
  "IT": {
    "name": "Italia",
    "local": 22.5,
    "goldReserves": 2451.8,
    "lat": 41.87,
    "lon": 12.56,
    "comment": "\u27a4 Agroalimentare, \u27a4 Moda, \u27a4 Turismo, \u27a4 Meccanica.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "DE": {
    "name": "Germania",
    "local": 23.4,
    "goldReserves": 3362.4,
    "lat": 51.17,
    "lon": 10.45,
    "comment": "\u27a4 Automotive, \u27a4 Ingegneria, \u27a4 Export industriale.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "US": {
    "name": "Stati Uniti",
    "local": 24.2,
    "goldReserves": 8133.5,
    "lat": 37.09,
    "lon": -95.71,
    "comment": "\u27a4 Tecnologia, \u27a4 Agricoltura, \u27a4 Difesa, \u27a4 Servizi.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "CN": {
    "name": "Cina",
    "local": 25.1,
    "goldReserves": 2214.3,
    "lat": 35.86,
    "lon": 104.19,
    "comment": "\u27a4 Produzione industriale, \u27a4 Elettronica, \u27a4 Costruzioni.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "JP": {
    "name": "Giappone",
    "local": 23.9,
    "goldReserves": 846.0,
    "lat": 36.2,
    "lon": 138.25,
    "comment": "\u27a4 Tecnologia avanzata, \u27a4 Automotive, \u27a4 Import/export.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "FR": {
    "name": "Francia",
    "local": 22.8,
    "goldReserves": 2436.0,
    "lat": 46.6,
    "lon": 1.88,
    "comment": "\u27a4 Agroalimentare, \u27a4 Moda, \u27a4 Energia nucleare.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "IN": {
    "name": "India",
    "local": 22.7,
    "goldReserves": 822.1,
    "lat": 20.59,
    "lon": 78.96,
    "comment": "\u27a4 IT, \u27a4 Tessile, \u27a4 Agricoltura.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "RU": {
    "name": "Russia",
    "local": 21.5,
    "goldReserves": 2329.6,
    "lat": 61.52,
    "lon": 105.31,
    "comment": "\u27a4 Energia, \u27a4 Risorse naturali, \u27a4 Difesa.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "BR": {
    "name": "Brasile",
    "local": 21.9,
    "goldReserves": 129.7,
    "lat": -14.23,
    "lon": -51.92,
    "comment": "\u27a4 Agricoltura, \u27a4 Energia idroelettrica.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "CA": {
    "name": "Canada",
    "local": 22.0,
    "goldReserves": 0.0,
    "lat": 56.13,
    "lon": -106.34,
    "comment": "\u27a4 Energia, \u27a4 Risorse naturali, \u27a4 Servizi finanziari.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "MX": {
    "name": "Messico",
    "local": 21.3,
    "goldReserves": 120.3,
    "lat": 23.63,
    "lon": -102.55,
    "comment": "\u27a4 Petrolio, \u27a4 Turismo, \u27a4 Industria manifatturiera.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "AU": {
    "name": "Australia",
    "local": 23.0,
    "goldReserves": 286.8,
    "lat": -25.27,
    "lon": 133.77,
    "comment": "\u27a4 Miniere, \u27a4 Agricoltura, \u27a4 Energia.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "ZA": {
    "name": "Sudafrica",
    "local": 20.8,
    "goldReserves": 125.4,
    "lat": -30.56,
    "lon": 22.94,
    "comment": "\u27a4 Miniere, \u27a4 Agricoltura, \u27a4 Turismo.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "AR": {
    "name": "Argentina",
    "local": 20.5,
    "goldReserves": 61.7,
    "lat": -38.42,
    "lon": -63.62,
    "comment": "\u27a4 Agricoltura, \u27a4 Risorse naturali, \u27a4 Energia.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "NG": {
    "name": "Nigeria",
    "local": 19.7,
    "goldReserves": 21.4,
    "lat": 9.08,
    "lon": 8.68,
    "comment": "\u27a4 Petrolio, \u27a4 Agricoltura, \u27a4 Telecomunicazioni.",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "ES": {
    "name": "Paese ES",
    "local": 22.5,
    "goldReserves": 20.2,
    "lat": 13.9047,
    "lon": -96.6549,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (ES)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "SE": {
    "name": "Paese SE",
    "local": 18.7,
    "goldReserves": 845.3,
    "lat": 21.5059,
    "lon": 74.0757,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (SE)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "CH": {
    "name": "Paese CH",
    "local": 19.2,
    "goldReserves": 1662.4,
    "lat": 1.9071,
    "lon": 93.6237,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (CH)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "PL": {
    "name": "Paese PL",
    "local": 24.4,
    "goldReserves": 770.5,
    "lat": -30.3532,
    "lon": -95.0827,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (PL)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "TR": {
    "name": "Paese TR",
    "local": 23.3,
    "goldReserves": 62.1,
    "lat": -2.2523,
    "lon": 0.7909,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (TR)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "EG": {
    "name": "Paese EG",
    "local": 20.0,
    "goldReserves": 141.2,
    "lat": 29.9515,
    "lon": 16.003,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (EG)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "SA": {
    "name": "Paese SA",
    "local": 19.3,
    "goldReserves": 1716.9,
    "lat": 7.7149,
    "lon": 95.7143,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (SA)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "KR": {
    "name": "Paese KR",
    "local": 24.2,
    "goldReserves": 1740.5,
    "lat": 12.8801,
    "lon": 75.1329,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (KR)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "ID": {
    "name": "Paese ID",
    "local": 20.1,
    "goldReserves": 1865.8,
    "lat": -13.3114,
    "lon": 18.4419,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (ID)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "PK": {
    "name": "Paese PK",
    "local": 20.8,
    "goldReserves": 909.0,
    "lat": -15.9672,
    "lon": 40.5673,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (PK)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "NL": {
    "name": "Paese NL",
    "local": 21.2,
    "goldReserves": 324.6,
    "lat": 13.1645,
    "lon": 37.2318,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (NL)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "BE": {
    "name": "Paese BE",
    "local": 23.8,
    "goldReserves": 369.6,
    "lat": 43.3277,
    "lon": 69.5189,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (BE)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "AT": {
    "name": "Paese AT",
    "local": 22.3,
    "goldReserves": 1665.1,
    "lat": -19.8195,
    "lon": 44.732,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (AT)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "GR": {
    "name": "Paese GR",
    "local": 22.2,
    "goldReserves": 1423.0,
    "lat": -40.6946,
    "lon": -37.2143,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (GR)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "DK": {
    "name": "Paese DK",
    "local": 21.2,
    "goldReserves": 818.5,
    "lat": -24.4781,
    "lon": -36.2953,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (DK)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "FI": {
    "name": "Paese FI",
    "local": 24.0,
    "goldReserves": 1056.6,
    "lat": 23.2039,
    "lon": -69.0281,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (FI)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "NO": {
    "name": "Paese NO",
    "local": 21.3,
    "goldReserves": 1704.9,
    "lat": 7.1606,
    "lon": 67.7612,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (NO)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "PT": {
    "name": "Paese PT",
    "local": 22.0,
    "goldReserves": 1797.9,
    "lat": 33.2479,
    "lon": 42.7579,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (PT)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "UA": {
    "name": "Paese UA",
    "local": 20.3,
    "goldReserves": 297.5,
    "lat": 9.0484,
    "lon": -48.3059,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (UA)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "TH": {
    "name": "Paese TH",
    "local": 19.2,
    "goldReserves": 626.6,
    "lat": 35.2749,
    "lon": 25.185,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (TH)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "MY": {
    "name": "Paese MY",
    "local": 21.4,
    "goldReserves": 2232.3,
    "lat": 28.1808,
    "lon": -79.3225,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (MY)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "PH": {
    "name": "Paese PH",
    "local": 24.4,
    "goldReserves": 1088.4,
    "lat": 22.6282,
    "lon": 98.9515,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (PH)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "IL": {
    "name": "Paese IL",
    "local": 19.4,
    "goldReserves": 1974.2,
    "lat": 35.5452,
    "lon": -48.3341,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (IL)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "IR": {
    "name": "Paese IR",
    "local": 21.5,
    "goldReserves": 387.4,
    "lat": -28.846,
    "lon": -26.3395,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (IR)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "IQ": {
    "name": "Paese IQ",
    "local": 18.7,
    "goldReserves": 1122.1,
    "lat": -17.5501,
    "lon": 88.0506,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (IQ)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "VN": {
    "name": "Paese VN",
    "local": 23.9,
    "goldReserves": 780.7,
    "lat": 57.1948,
    "lon": -41.7717,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (VN)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "CL": {
    "name": "Paese CL",
    "local": 24.2,
    "goldReserves": 770.6,
    "lat": -49.2492,
    "lon": -20.9912,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (CL)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "CO": {
    "name": "Paese CO",
    "local": 22.2,
    "goldReserves": 176.0,
    "lat": 42.8586,
    "lon": -38.0477,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (CO)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "PE": {
    "name": "Paese PE",
    "local": 21.7,
    "goldReserves": 738.3,
    "lat": -30.7984,
    "lon": 9.6868,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (PE)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "EC": {
    "name": "Paese EC",
    "local": 21.0,
    "goldReserves": 749.8,
    "lat": -43.7983,
    "lon": 70.0262,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (EC)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "NZ": {
    "name": "Paese NZ",
    "local": 20.8,
    "goldReserves": 1285.4,
    "lat": 39.1573,
    "lon": 97.1812,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (NZ)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "KE": {
    "name": "Paese KE",
    "local": 21.1,
    "goldReserves": 1770.9,
    "lat": 34.777,
    "lon": 57.0465,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (KE)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "ET": {
    "name": "Paese ET",
    "local": 20.9,
    "goldReserves": 949.5,
    "lat": -14.2251,
    "lon": -9.9149,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (ET)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "GH": {
    "name": "Paese GH",
    "local": 20.6,
    "goldReserves": 1505.0,
    "lat": 45.8641,
    "lon": 53.5541,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (GH)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  },
  "DZ": {
    "name": "Paese DZ",
    "local": 19.6,
    "goldReserves": 1397.7,
    "lat": 37.5149,
    "lon": -58.3914,
    "comment": "\u27a4 Settore 1, \u27a4 Settore 2, \u27a4 Settore 3 (DZ)",
    "source": "https://www.gold.org/goldhub/data/gold-reserves-by-country"
  }
}
};
