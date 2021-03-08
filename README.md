# book-list

## Demo
[傳送門](https://yoyo-checkout.github.io/book-list)

## Project Setup
```
npm install
npm run serve
```

## 架構
```
- api
  └ config.js # api 共通設定、統一例外處理
  └ index.js # 實際呼叫的 api function

- assets
  └ style
    └ app.css # tailwind 進入點

- components
  └ detail # detail page 元件
    └ ...

  └ layout # layout、共用元件
    └ ...

- router

- store
  └ modules
    └ book # book 相關 vuex store
    └ global # 共用相關 vuex store

- views
```

## axios
透過 axios 建立實例，統一例外處理，方便管理

## tailwind
方便快速增減樣式，且相較其他 style libraries 更容易客製化
