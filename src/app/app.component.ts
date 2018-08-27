import { Component } from '@angular/core';

// Router Module for Application level Route
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Terra';

  public Languages;
  public selectedLanguage;

  public Currencies;
  public selectedCurrency;


  constructor(private router: Router, route: ActivatedRoute) {
    this.Languages = [
      { "code": "af", "name": "Afrikaans", "nativeName": "Afrikaans" },
      { "code": "sq", "name": "Albanian", "nativeName": "Shqip" },
      { "code": "am", "name": "Amharic", "nativeName": "አማርኛ" },
      { "code": "ar", "name": "Arabic", "nativeName": "العربية" },
      { "code": "hy", "name": "Armenian", "nativeName": "Հայերեն" },
      { "code": "ay", "name": "Aymara", "nativeName": "aymar aru" },
      { "code": "az", "name": "Azerbaijani", "nativeName": "azərbaycan dili" },
      { "code": "be", "name": "Belarusian", "nativeName": "Беларуская" },
      { "code": "bn", "name": "Bengali", "nativeName": "বাংলা" },
      { "code": "bi", "name": "Bislama", "nativeName": "Bislama" },
      { "code": "bs", "name": "Bosnian", "nativeName": "bosanski jezik" },
      { "code": "bg", "name": "Bulgarian", "nativeName": "български език" },
      { "code": "my", "name": "Burmese", "nativeName": "ဗမာစာ" },
      { "code": "ca", "name": "Catalan; Valencian", "nativeName": "Català" },
      { "code": "ch", "name": "Chamorro", "nativeName": "Chamoru" },
      { "code": "ny", "name": "Chichewa; Chewa; Nyanja", "nativeName": "chiCheŵa, chinyanja" },
      { "code": "zh", "name": "Chinese", "nativeName": "中文 (Zhōngwén), 汉语, 漢語" },
      { "code": "hr", "name": "Croatian", "nativeName": "hrvatski" },
      { "code": "cs", "name": "Czech", "nativeName": "česky, čeština" },
      { "code": "da", "name": "Danish", "nativeName": "dansk" },
      { "code": "dv", "name": "Divehi; Dhivehi; Maldivian;", "nativeName": "ދިވެހި" },
      { "code": "nl", "name": "Dutch", "nativeName": "Nederlands, Vlaams" },
      { "code": "en", "name": "English", "nativeName": "English" },
      { "code": "et", "name": "Estonian", "nativeName": "eesti, eesti keel" },
      { "code": "fo", "name": "Faroese", "nativeName": "føroyskt" },
      { "code": "fj", "name": "Fijian", "nativeName": "vosa Vakaviti" },
      { "code": "fi", "name": "Finnish", "nativeName": "suomi, suomen kieli" },
      { "code": "fr", "name": "French", "nativeName": "français, langue française" },
      { "code": "ff", "name": "Fula; Fulah; Pulaar; Pular", "nativeName": "Fulfulde, Pulaar, Pular" },
      { "code": "ka", "name": "Georgian", "nativeName": "ქართული" },
      { "code": "de", "name": "German", "nativeName": "Deutsch" },
      { "code": "el", "name": "Greek, Modern", "nativeName": "Ελληνικά" },
      { "code": "gn", "name": "Guaraní", "nativeName": "Avañeẽ" },
      { "code": "ht", "name": "Haitian; Haitian Creole", "nativeName": "Kreyòl ayisyen" },
      { "code": "he", "name": "Hebrew (modern)", "nativeName": "עברית" },
      { "code": "hi", "name": "Hindi", "nativeName": "हिन्दी, हिंदी" },
      { "code": "hu", "name": "Hungarian", "nativeName": "Magyar" },
      { "code": "id", "name": "Indonesian", "nativeName": "Bahasa Indonesia" },
      { "code": "ga", "name": "Irish", "nativeName": "Gaeilge" },
      { "code": "is", "name": "Icelandic", "nativeName": "Íslenska" },
      { "code": "it", "name": "Italian", "nativeName": "Italiano" },
      { "code": "ja", "name": "Japanese", "nativeName": "日本語 (にほんご／にっぽんご)" },
      { "code": "kl", "name": "Kalaallisut, Greenlandic", "nativeName": "kalaallisut, kalaallit oqaasii" },
      { "code": "kk", "name": "Kazakh", "nativeName": "Қазақ тілі" },
      { "code": "km", "name": "Khmer", "nativeName": "ភាសាខ្មែរ" },
      { "code": "rw", "name": "Kinyarwanda", "nativeName": "Ikinyarwanda" },
      { "code": "kg", "name": "Kongo", "nativeName": "KiKongo" },
      { "code": "ko", "name": "Korean", "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)" },
      { "code": "ku", "name": "Kurdish", "nativeName": "Kurdî, كوردی‎" },
      { "code": "la", "name": "Latin", "nativeName": "latine, lingua latina" },
      { "code": "lb", "name": "Luxembourgish, Letzeburgesch", "nativeName": "Lëtzebuergesch" },
      { "code": "ln", "name": "Lingala", "nativeName": "Lingála" },
      { "code": "lo", "name": "Lao", "nativeName": "ພາສາລາວ" },
      { "code": "lt", "name": "Lithuanian", "nativeName": "lietuvių kalba" },
      { "code": "lu", "name": "Luba-Katanga", "nativeName": "" },
      { "code": "lv", "name": "Latvian", "nativeName": "latviešu valoda" },
      { "code": "gv", "name": "Manx", "nativeName": "Gaelg, Gailck" },
      { "code": "mk", "name": "Macedonian", "nativeName": "македонски јазик" },
      { "code": "mg", "name": "Malagasy", "nativeName": "Malagasy fiteny" },
      { "code": "ms", "name": "Malay", "nativeName": "bahasa Melayu, بهاس ملايو‎" },
      { "code": "mt", "name": "Maltese", "nativeName": "Malti" },
      { "code": "mi", "name": "Māori", "nativeName": "te reo Māori" },
      { "code": "mh", "name": "Marshallese", "nativeName": "Kajin M̧ajeļ" },
      { "code": "mn", "name": "Mongolian", "nativeName": "монгол" },
      { "code": "nb", "name": "Norwegian Bokmål", "nativeName": "Norsk bokmål" },
      { "code": "nd", "name": "North Ndebele", "nativeName": "isiNdebele" },
      { "code": "ne", "name": "Nepali", "nativeName": "नेपाली" },
      { "code": "nn", "name": "Norwegian Nynorsk", "nativeName": "Norsk nynorsk" },
      { "code": "no", "name": "Norwegian", "nativeName": "Norsk" },
      { "code": "nr", "name": "South Ndebele", "nativeName": "isiNdebele" },
      { "code": "pa", "name": "Panjabi, Punjabi", "nativeName": "ਪੰਜਾਬੀ, پنجابی‎" },
      { "code": "fa", "name": "Persian", "nativeName": "فارسی" },
      { "code": "pl", "name": "Polish", "nativeName": "polski" },
      { "code": "ps", "name": "Pashto, Pushto", "nativeName": "پښتو" },
      { "code": "pt", "name": "Portuguese", "nativeName": "Português" },
      { "code": "qu", "name": "Quechua", "nativeName": "Runa Simi, Kichwa" },
      { "code": "rn", "name": "Kirundi", "nativeName": "kiRundi" },
      { "code": "ro", "name": "Romanian, Moldavian, Moldovan", "nativeName": "română" },
      { "code": "ru", "name": "Russian", "nativeName": "русский язык" },
      { "code": "sm", "name": "Samoan", "nativeName": "gagana faa Samoa" },
      { "code": "sg", "name": "Sango", "nativeName": "yângâ tî sängö" },
      { "code": "sr", "name": "Serbian", "nativeName": "српски језик" },
      { "code": "sn", "name": "Shona", "nativeName": "chiShona" },
      { "code": "si", "name": "Sinhala, Sinhalese", "nativeName": "සිංහල" },
      { "code": "sk", "name": "Slovak", "nativeName": "slovenčina" },
      { "code": "sl", "name": "Slovene", "nativeName": "slovenščina" },
      { "code": "so", "name": "Somali", "nativeName": "Soomaaliga, af Soomaali" },
      { "code": "st", "name": "Southern Sotho", "nativeName": "Sesotho" },
      { "code": "es", "name": "Spanish; Castilian", "nativeName": "español, castellano" },
      { "code": "sw", "name": "Swahili", "nativeName": "Kiswahili" },
      { "code": "ss", "name": "Swati", "nativeName": "SiSwati" },
      { "code": "sv", "name": "Swedish", "nativeName": "svenska" },
      { "code": "ta", "name": "Tamil", "nativeName": "தமிழ்" },
      { "code": "tg", "name": "Tajik", "nativeName": "тоҷикӣ, toğikī, تاجیکی‎" },
      { "code": "th", "name": "Thai", "nativeName": "ไทย" },
      { "code": "ti", "name": "Tigrinya", "nativeName": "ትግርኛ" },
      { "code": "tk", "name": "Turkmen", "nativeName": "Türkmen, Түркмен" },
      { "code": "tn", "name": "Tswana", "nativeName": "Setswana" },
      { "code": "to", "name": "Tonga (Tonga Islands)", "nativeName": "faka Tonga" },
      { "code": "tr", "name": "Turkish", "nativeName": "Türkçe" },
      { "code": "ts", "name": "Tsonga", "nativeName": "Xitsonga" },
      { "code": "uk", "name": "Ukrainian", "nativeName": "українська" },
      { "code": "ur", "name": "Urdu", "nativeName": "اردو" },
      { "code": "uz", "name": "Uzbek", "nativeName": "zbek, Ўзбек, أۇزبېك‎" },
      { "code": "ve", "name": "Venda", "nativeName": "Tshivenḓa" },
      { "code": "vi", "name": "Vietnamese", "nativeName": "Tiếng Việt" },
      { "code": "xh", "name": "Xhosa", "nativeName": "isiXhosa" }
    ];


    this.Currencies = [

      {
        "Entity": "AFGHANISTAN",
        "Currency": "Afghani",
        "AlphabeticCode": "AFN",
        "NumericCode": 971,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "ALBANIA",
        "Currency": "Lek",
        "AlphabeticCode": "ALL",
        "NumericCode": "008",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "ALGERIA",
        "Currency": "Algerian Dinar",
        "AlphabeticCode": "DZD",
        "NumericCode": "012",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "AMERICAN SAMOA",
        "Currency": "US Dollar",
        "AlphabeticCode": "USD",
        "NumericCode": 840,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "ANGOLA",
        "Currency": "Kwanza",
        "AlphabeticCode": "AOA",
        "NumericCode": 973,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },

      {
        "Entity": "ARGENTINA",
        "Currency": "Argentine Peso",
        "AlphabeticCode": "ARS",
        "NumericCode": "032",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "ARMENIA",
        "Currency": "Armenian Dram",
        "AlphabeticCode": "AMD",
        "NumericCode": "051",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "ARUBA",
        "Currency": "Aruban Florin",
        "AlphabeticCode": "AWG",
        "NumericCode": 533,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "AZERBAIJAN",
        "Currency": "Azerbaijanian Manat",
        "AlphabeticCode": "AZN",
        "NumericCode": 944,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BAHAMAS (THE)",
        "Currency": "Bahamian Dollar",
        "AlphabeticCode": "BSD",
        "NumericCode": "044",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BAHRAIN",
        "Currency": "Bahraini Dinar",
        "AlphabeticCode": "BHD",
        "NumericCode": "048",
        "MinorUnit": 3,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BANGLADESH",
        "Currency": "Taka",
        "AlphabeticCode": "BDT",
        "NumericCode": "050",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BARBADOS",
        "Currency": "Barbados Dollar",
        "AlphabeticCode": "BBD",
        "NumericCode": "052",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BELARUS",
        "Currency": "Belarusian Ruble",
        "AlphabeticCode": "BYN",
        "NumericCode": 933,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BELIZE",
        "Currency": "Belize Dollar",
        "AlphabeticCode": "BZD",
        "NumericCode": "084",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BENIN",
        "Currency": "CFA Franc BCEAO",
        "AlphabeticCode": "XOF",
        "NumericCode": 952,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BERMUDA",
        "Currency": "Bermudian Dollar",
        "AlphabeticCode": "BMD",
        "NumericCode": "060",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BHUTAN",
        "Currency": "Ngultrum",
        "AlphabeticCode": "BTN",
        "NumericCode": "064",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BOLIVIA (PLURINATIONAL STATE OF)",
        "Currency": "Boliviano",
        "AlphabeticCode": "BOB",
        "NumericCode": "068",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BOLIVIA (PLURINATIONAL STATE OF)",
        "Currency": "Mvdol",
        "AlphabeticCode": "BOV",
        "NumericCode": 984,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BOSNIA AND HERZEGOVINA",
        "Currency": "Convertible Mark",
        "AlphabeticCode": "BAM",
        "NumericCode": 977,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BOTSWANA",
        "Currency": "Pula",
        "AlphabeticCode": "BWP",
        "NumericCode": "072",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BRAZIL",
        "Currency": "Brazilian Real",
        "AlphabeticCode": "BRL",
        "NumericCode": 986,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BRUNEI DARUSSALAM",
        "Currency": "Brunei Dollar",
        "AlphabeticCode": "BND",
        "NumericCode": "096",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BULGARIA",
        "Currency": "Bulgarian Lev",
        "AlphabeticCode": "BGN",
        "NumericCode": 975,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BURUNDI",
        "Currency": "Burundi Franc",
        "AlphabeticCode": "BIF",
        "NumericCode": 108,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "CABO VERDE",
        "Currency": "Cabo Verde Escudo",
        "AlphabeticCode": "CVE",
        "NumericCode": 132,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "CAMBODIA",
        "Currency": "Riel",
        "AlphabeticCode": "KHR",
        "NumericCode": 116,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "CAMEROON",
        "Currency": "CFA Franc BEAC",
        "AlphabeticCode": "XAF",
        "NumericCode": 950,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "CANADA",
        "Currency": "Canadian Dollar",
        "AlphabeticCode": "CAD",
        "NumericCode": 124,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "CAYMAN ISLANDS (THE)",
        "Currency": "Cayman Islands Dollar",
        "AlphabeticCode": "KYD",
        "NumericCode": 136,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "CHILE",
        "Currency": "Chilean Peso",
        "AlphabeticCode": "CLP",
        "NumericCode": 152,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "CHINA",
        "Currency": "Yuan Renminbi",
        "AlphabeticCode": "CNY",
        "NumericCode": 156,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "CHRISTMAS ISLAND",
        "Currency": "Australian Dollar",
        "AlphabeticCode": "AUD",
        "NumericCode": "036",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "COLOMBIA",
        "Currency": "Colombian Peso",
        "AlphabeticCode": "COP",
        "NumericCode": 170,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "COMOROS (THE)",
        "Currency": "Comoro Franc",
        "AlphabeticCode": "KMF",
        "NumericCode": 174,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "CONGO (THE DEMOCRATIC REPUBLIC OF THE)",
        "Currency": "Congolese Franc",
        "AlphabeticCode": "CDF",
        "NumericCode": 976,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "COOK ISLANDS (THE)",
        "Currency": "New Zealand Dollar",
        "AlphabeticCode": "NZD",
        "NumericCode": 554,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "COSTA RICA",
        "Currency": "Costa Rican Colon",
        "AlphabeticCode": "CRC",
        "NumericCode": 188,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "CUBA",
        "Currency": "Cuban Peso",
        "AlphabeticCode": "CUP",
        "NumericCode": 192,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "CUBA",
        "Currency": "Peso Convertible",
        "AlphabeticCode": "CUC",
        "NumericCode": 931,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "CURAÇAO",
        "Currency": "Netherlands Antillean Guilder",
        "AlphabeticCode": "ANG",
        "NumericCode": 532,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "CZECH REPUBLIC (THE)",
        "Currency": "Czech Koruna",
        "AlphabeticCode": "CZK",
        "NumericCode": 203,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "DENMARK",
        "Currency": "Danish Krone",
        "AlphabeticCode": "DKK",
        "NumericCode": 208,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "DJIBOUTI",
        "Currency": "Djibouti Franc",
        "AlphabeticCode": "DJF",
        "NumericCode": 262,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "DOMINICA",
        "Currency": "East Caribbean Dollar",
        "AlphabeticCode": "XCD",
        "NumericCode": 951,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "DOMINICAN REPUBLIC (THE)",
        "Currency": "Dominican Peso",
        "AlphabeticCode": "DOP",
        "NumericCode": 214,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "EGYPT",
        "Currency": "Egyptian Pound",
        "AlphabeticCode": "EGP",
        "NumericCode": 818,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "EL SALVADOR",
        "Currency": "El Salvador Colon",
        "AlphabeticCode": "SVC",
        "NumericCode": 222,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "ERITREA",
        "Currency": "Nakfa",
        "AlphabeticCode": "ERN",
        "NumericCode": 232,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "ETHIOPIA",
        "Currency": "Ethiopian Birr",
        "AlphabeticCode": "ETB",
        "NumericCode": 230,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "FALKLAND ISLANDS (THE) [MALVINAS]",
        "Currency": "Falkland Islands Pound",
        "AlphabeticCode": "FKP",
        "NumericCode": 238,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "FAROE ISLANDS (THE)",
        "Currency": "Danish Krone",
        "AlphabeticCode": "DKK",
        "NumericCode": 208,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "FIJI",
        "Currency": "Fiji Dollar",
        "AlphabeticCode": "FJD",
        "NumericCode": 242,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "FRENCH POLYNESIA",
        "Currency": "CFP Franc",
        "AlphabeticCode": "XPF",
        "NumericCode": 953,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "GAMBIA (THE)",
        "Currency": "Dalasi",
        "AlphabeticCode": "GMD",
        "NumericCode": 270,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "GEORGIA",
        "Currency": "Lari",
        "AlphabeticCode": "GEL",
        "NumericCode": 981,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "GHANA",
        "Currency": "Ghana Cedi",
        "AlphabeticCode": "GHS",
        "NumericCode": 936,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "GIBRALTAR",
        "Currency": "Gibraltar Pound",
        "AlphabeticCode": "GIP",
        "NumericCode": 292,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "GREENLAND",
        "Currency": "Danish Krone",
        "AlphabeticCode": "DKK",
        "NumericCode": 208,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "GUATEMALA",
        "Currency": "Quetzal",
        "AlphabeticCode": "GTQ",
        "NumericCode": 320,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "GUERNSEY",
        "Currency": "Pound Sterling",
        "AlphabeticCode": "GBP",
        "NumericCode": 826,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "GUINEA",
        "Currency": "Guinea Franc",
        "AlphabeticCode": "GNF",
        "NumericCode": 324,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "GUYANA",
        "Currency": "Guyana Dollar",
        "AlphabeticCode": "GYD",
        "NumericCode": 328,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "HAITI",
        "Currency": "Gourde",
        "AlphabeticCode": "HTG",
        "NumericCode": 332,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "HONDURAS",
        "Currency": "Lempira",
        "AlphabeticCode": "HNL",
        "NumericCode": 340,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "HONG KONG",
        "Currency": "Hong Kong Dollar",
        "AlphabeticCode": "HKD",
        "NumericCode": 344,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "HUNGARY",
        "Currency": "Forint",
        "AlphabeticCode": "HUF",
        "NumericCode": 348,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "ICELAND",
        "Currency": "Iceland Krona",
        "AlphabeticCode": "ISK",
        "NumericCode": 352,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "INDIA",
        "Currency": "Indian Rupee",
        "AlphabeticCode": "INR",
        "NumericCode": 356,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "INDONESIA",
        "Currency": "Rupiah",
        "AlphabeticCode": "IDR",
        "NumericCode": 360,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "IRAN (ISLAMIC REPUBLIC OF)",
        "Currency": "Iranian Rial",
        "AlphabeticCode": "IRR",
        "NumericCode": 364,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "IRAQ",
        "Currency": "Iraqi Dinar",
        "AlphabeticCode": "IQD",
        "NumericCode": 368,
        "MinorUnit": 3,
        "WithdrawalDate": ""
      },
      {
        "Entity": "ISRAEL",
        "Currency": "New Israeli Sheqel",
        "AlphabeticCode": "ILS",
        "NumericCode": 376,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "JAMAICA",
        "Currency": "Jamaican Dollar",
        "AlphabeticCode": "JMD",
        "NumericCode": 388,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "JAPAN",
        "Currency": "Yen",
        "AlphabeticCode": "JPY",
        "NumericCode": 392,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "JORDAN",
        "Currency": "Jordanian Dinar",
        "AlphabeticCode": "JOD",
        "NumericCode": 400,
        "MinorUnit": 3,
        "WithdrawalDate": ""
      },
      {
        "Entity": "KAZAKHSTAN",
        "Currency": "Tenge",
        "AlphabeticCode": "KZT",
        "NumericCode": 398,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "KENYA",
        "Currency": "Kenyan Shilling",
        "AlphabeticCode": "KES",
        "NumericCode": 404,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "KOREA (THE DEMOCRATIC PEOPLE’S REPUBLIC OF)",
        "Currency": "North Korean Won",
        "AlphabeticCode": "KPW",
        "NumericCode": 408,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "KOREA (THE REPUBLIC OF)",
        "Currency": "Won",
        "AlphabeticCode": "KRW",
        "NumericCode": 410,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "KUWAIT",
        "Currency": "Kuwaiti Dinar",
        "AlphabeticCode": "KWD",
        "NumericCode": 414,
        "MinorUnit": 3,
        "WithdrawalDate": ""
      },
      {
        "Entity": "KYRGYZSTAN",
        "Currency": "Som",
        "AlphabeticCode": "KGS",
        "NumericCode": 417,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "LAO PEOPLE’S DEMOCRATIC REPUBLIC (THE)",
        "Currency": "Kip",
        "AlphabeticCode": "LAK",
        "NumericCode": 418,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "LEBANON",
        "Currency": "Lebanese Pound",
        "AlphabeticCode": "LBP",
        "NumericCode": 422,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "LESOTHO",
        "Currency": "Loti",
        "AlphabeticCode": "LSL",
        "NumericCode": 426,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "LESOTHO",
        "Currency": "Rand",
        "AlphabeticCode": "ZAR",
        "NumericCode": 710,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "LIBERIA",
        "Currency": "Liberian Dollar",
        "AlphabeticCode": "LRD",
        "NumericCode": 430,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "LIBYA",
        "Currency": "Libyan Dinar",
        "AlphabeticCode": "LYD",
        "NumericCode": 434,
        "MinorUnit": 3,
        "WithdrawalDate": ""
      },
      {
        "Entity": "LIECHTENSTEIN",
        "Currency": "Swiss Franc",
        "AlphabeticCode": "CHF",
        "NumericCode": 756,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "LITHUANIA",
        "Currency": "Euro",
        "AlphabeticCode": "EUR",
        "NumericCode": 978,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "MACAO",
        "Currency": "Pataca",
        "AlphabeticCode": "MOP",
        "NumericCode": 446,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "MACEDONIA (THE FORMER YUGOSLAV REPUBLIC OF)",
        "Currency": "Denar",
        "AlphabeticCode": "MKD",
        "NumericCode": 807,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "MADAGASCAR",
        "Currency": "Malagasy Ariary",
        "AlphabeticCode": "MGA",
        "NumericCode": 969,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "MALAWI",
        "Currency": "Malawi Kwacha",
        "AlphabeticCode": "MWK",
        "NumericCode": 454,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "MALAYSIA",
        "Currency": "Malaysian Ringgit",
        "AlphabeticCode": "MYR",
        "NumericCode": 458,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "MALDIVES",
        "Currency": "Rufiyaa",
        "AlphabeticCode": "MVR",
        "NumericCode": 462,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "MAURITANIA",
        "Currency": "Ouguiya",
        "AlphabeticCode": "MRO",
        "NumericCode": 478,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "MAURITIUS",
        "Currency": "Mauritius Rupee",
        "AlphabeticCode": "MUR",
        "NumericCode": 480,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "MEXICO",
        "Currency": "Mexican Peso",
        "AlphabeticCode": "MXN",
        "NumericCode": 484,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "MOLDOVA (THE REPUBLIC OF)",
        "Currency": "Moldovan Leu",
        "AlphabeticCode": "MDL",
        "NumericCode": 498,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "MONGOLIA",
        "Currency": "Tugrik",
        "AlphabeticCode": "MNT",
        "NumericCode": 496,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "MOROCCO",
        "Currency": "Moroccan Dirham",
        "AlphabeticCode": "MAD",
        "NumericCode": 504,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "MOZAMBIQUE",
        "Currency": "Mozambique Metical",
        "AlphabeticCode": "MZN",
        "NumericCode": 943,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "MYANMAR",
        "Currency": "Kyat",
        "AlphabeticCode": "MMK",
        "NumericCode": 104,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "NAMIBIA",
        "Currency": "Namibia Dollar",
        "AlphabeticCode": "NAD",
        "NumericCode": 516,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "NEPAL",
        "Currency": "Nepalese Rupee",
        "AlphabeticCode": "NPR",
        "NumericCode": 524,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "NICARAGUA",
        "Currency": "Cordoba Oro",
        "AlphabeticCode": "NIO",
        "NumericCode": 558,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "NIGERIA",
        "Currency": "Naira",
        "AlphabeticCode": "NGN",
        "NumericCode": 566,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "NORWAY",
        "Currency": "Norwegian Krone",
        "AlphabeticCode": "NOK",
        "NumericCode": 578,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "OMAN",
        "Currency": "Rial Omani",
        "AlphabeticCode": "OMR",
        "NumericCode": 512,
        "MinorUnit": 3,
        "WithdrawalDate": ""
      },
      {
        "Entity": "PAKISTAN",
        "Currency": "Pakistan Rupee",
        "AlphabeticCode": "PKR",
        "NumericCode": 586,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "PANAMA",
        "Currency": "Balboa",
        "AlphabeticCode": "PAB",
        "NumericCode": 590,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "PAPUA NEW GUINEA",
        "Currency": "Kina",
        "AlphabeticCode": "PGK",
        "NumericCode": 598,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "PARAGUAY",
        "Currency": "Guarani",
        "AlphabeticCode": "PYG",
        "NumericCode": 600,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "PERU",
        "Currency": "Sol",
        "AlphabeticCode": "PEN",
        "NumericCode": 604,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "PHILIPPINES (THE)",
        "Currency": "Philippine Peso",
        "AlphabeticCode": "PHP",
        "NumericCode": 608,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "POLAND",
        "Currency": "Zloty",
        "AlphabeticCode": "PLN",
        "NumericCode": 985,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "QATAR",
        "Currency": "Qatari Rial",
        "AlphabeticCode": "QAR",
        "NumericCode": 634,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "ROMANIA",
        "Currency": "Romanian Leu",
        "AlphabeticCode": "RON",
        "NumericCode": 946,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "RUSSIAN FEDERATION (THE)",
        "Currency": "Russian Ruble",
        "AlphabeticCode": "RUB",
        "NumericCode": 643,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "RWANDA",
        "Currency": "Rwanda Franc",
        "AlphabeticCode": "RWF",
        "NumericCode": 646,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA",
        "Currency": "Saint Helena Pound",
        "AlphabeticCode": "SHP",
        "NumericCode": 654,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SAMOA",
        "Currency": "Tala",
        "AlphabeticCode": "WST",
        "NumericCode": 882,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SAO TOME AND PRINCIPE",
        "Currency": "Dobra",
        "AlphabeticCode": "STD",
        "NumericCode": 678,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SAUDI ARABIA",
        "Currency": "Saudi Riyal",
        "AlphabeticCode": "SAR",
        "NumericCode": 682,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SERBIA",
        "Currency": "Serbian Dinar",
        "AlphabeticCode": "RSD",
        "NumericCode": 941,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SEYCHELLES",
        "Currency": "Seychelles Rupee",
        "AlphabeticCode": "SCR",
        "NumericCode": 690,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SIERRA LEONE",
        "Currency": "Leone",
        "AlphabeticCode": "SLL",
        "NumericCode": 694,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SINGAPORE",
        "Currency": "Singapore Dollar",
        "AlphabeticCode": "SGD",
        "NumericCode": 702,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SOLOMON ISLANDS",
        "Currency": "Solomon Islands Dollar",
        "AlphabeticCode": "SBD",
        "NumericCode": "090",
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SOMALIA",
        "Currency": "Somali Shilling",
        "AlphabeticCode": "SOS",
        "NumericCode": 706,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SOUTH SUDAN",
        "Currency": "South Sudanese Pound",
        "AlphabeticCode": "SSP",
        "NumericCode": 728,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SRI LANKA",
        "Currency": "Sri Lanka Rupee",
        "AlphabeticCode": "LKR",
        "NumericCode": 144,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SURINAME",
        "Currency": "Surinam Dollar",
        "AlphabeticCode": "SRD",
        "NumericCode": 968,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SWAZILAND",
        "Currency": "Lilangeni",
        "AlphabeticCode": "SZL",
        "NumericCode": 748,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SWEDEN",
        "Currency": "Swedish Krona",
        "AlphabeticCode": "SEK",
        "NumericCode": 752,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "SYRIAN ARAB REPUBLIC",
        "Currency": "Syrian Pound",
        "AlphabeticCode": "SYP",
        "NumericCode": 760,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "TAIWAN (PROVINCE OF CHINA)",
        "Currency": "New Taiwan Dollar",
        "AlphabeticCode": "TWD",
        "NumericCode": 901,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "TAJIKISTAN",
        "Currency": "Somoni",
        "AlphabeticCode": "TJS",
        "NumericCode": 972,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "TANZANIA, UNITED REPUBLIC OF",
        "Currency": "Tanzanian Shilling",
        "AlphabeticCode": "TZS",
        "NumericCode": 834,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "THAILAND",
        "Currency": "Baht",
        "AlphabeticCode": "THB",
        "NumericCode": 764,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "TONGA",
        "Currency": "Pa’anga",
        "AlphabeticCode": "TOP",
        "NumericCode": 776,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "TRINIDAD AND TOBAGO",
        "Currency": "Trinidad and Tobago Dollar",
        "AlphabeticCode": "TTD",
        "NumericCode": 780,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "TUNISIA",
        "Currency": "Tunisian Dinar",
        "AlphabeticCode": "TND",
        "NumericCode": 788,
        "MinorUnit": 3,
        "WithdrawalDate": ""
      },
      {
        "Entity": "TURKMENISTAN",
        "Currency": "Turkmenistan New Manat",
        "AlphabeticCode": "TMT",
        "NumericCode": 934,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "UGANDA",
        "Currency": "Uganda Shilling",
        "AlphabeticCode": "UGX",
        "NumericCode": 800,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "UKRAINE",
        "Currency": "Hryvnia",
        "AlphabeticCode": "UAH",
        "NumericCode": 980,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "UNITED ARAB EMIRATES (THE)",
        "Currency": "UAE Dirham",
        "AlphabeticCode": "AED",
        "NumericCode": 784,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "URUGUAY",
        "Currency": "Peso Uruguayo",
        "AlphabeticCode": "UYU",
        "NumericCode": 858,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "UZBEKISTAN",
        "Currency": "Uzbekistan Sum",
        "AlphabeticCode": "UZS",
        "NumericCode": 860,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "VANUATU",
        "Currency": "Vatu",
        "AlphabeticCode": "VUV",
        "NumericCode": 548,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "VIET NAM",
        "Currency": "Dong",
        "AlphabeticCode": "VND",
        "NumericCode": 704,
        "MinorUnit": 0,
        "WithdrawalDate": ""
      },
      {
        "Entity": "YEMEN",
        "Currency": "Yemeni Rial",
        "AlphabeticCode": "YER",
        "NumericCode": 886,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "ZAMBIA",
        "Currency": "Zambian Kwacha",
        "AlphabeticCode": "ZMW",
        "NumericCode": 967,
        "MinorUnit": 2,
        "WithdrawalDate": ""
      },
      {
        "Entity": "BELARUS",
        "Currency": "Belarusian Ruble",
        "AlphabeticCode": "BYR",
        "NumericCode": 974,
        "MinorUnit": "",
        "WithdrawalDate": "2017-01"
      },
      {
        "Entity": "CROATIA",
        "Currency": "Croatian Kuna",
        "AlphabeticCode": "HRK",
        "NumericCode": 191,
        "MinorUnit": "",
        "WithdrawalDate": "2015-06"
      },
      {
        "Entity": "SOUTH SUDAN",
        "Currency": "Sudanese Pound",
        "AlphabeticCode": "SDG",
        "NumericCode": 938,
        "MinorUnit": "",
        "WithdrawalDate": "2012-09"
      },
      {
        "Entity": "TURKEY",
        "Currency": "New Turkish Lira",
        "AlphabeticCode": "TRY",
        "NumericCode": 949,
        "MinorUnit": "",
        "WithdrawalDate": "2009-01"
      },
      {
        "Entity": "VENEZUELA (BOLIVARIAN REPUBLIC OF)",
        "Currency": "Bolivar",
        "AlphabeticCode": "VEF",
        "NumericCode": 937,
        "MinorUnit": "",
        "WithdrawalDate": "2016-02"
      }
    ]
  }

  languageSelected(event: any) {
    this.selectedLanguage = event.target.value;
    this.router.navigate(['/language', event.target.value]);
  }


  currencySelected(event: any) {
    this.selectedCurrency = event.target.value;
    this.router.navigate(['/currency', event.target.value]);
  }

}
