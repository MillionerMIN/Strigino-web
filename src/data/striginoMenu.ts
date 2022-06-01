const menu: MenuPropsType = [
  {
    title: 'Холодные закуски',
    content: [
      {
        dishName: 'Мясная тарелка',
        desc: 'Буженина, галантин куриный, колбаса в/к, колбаса с/к, сыровяленое мясо, оформление овощами 90/90/60/60/50/100',
        weight: '450 г.',
        price: 1750,
      },
      {
        dishName: 'Сырная тарелка',
        desc: 'Ламбер, маасдам, брынза ,чечил, виноград, мед, крекеры 90/90/90/30/60/30/30',
        weight: '420 г.',
        price: 1450,
      },
      {
        dishName: 'Овощная тарелка',
        desc: 'Огурец свежий, томаты черри, перец болгарский, стебель сельдерея, морковь, зелень, соус майонез 100/75/100/75/50/50/30',
        weight: '480 г.',
        price: 750,
      },
      {
        dishName: 'Рыбное ассорти',
        desc: 'Лосось с/с, балык из копченой форели и масляной рыбы, креветки, икра красная, лимон, зелень 100/90/100/60/40/50/10',
        weight: '450 г.',
        price: 2950,
      },
      {
        dishName: 'Ассорти «Изобилие»',
        desc: 'Блинный рулет с семгой, рулетики из ветчины с сырной начинкой, «рафаэлло» из крабовых палочек, рулетики из сыра с куриной начинкой, зелень 140/160/120/160/20',
        weight: '600 г.',
        price: 1250,
      },
      {
        dishName: 'Ассорти из солений',
        desc: 'Капуста квашеная, морковь корейская, корнишоны, маслины 150/150/70/30',
        weight: '400 г.',
        price: 850,
      },
      {
        dishName: 'Филе трески обжаренное в сухарях',
        desc: '',
        weight: '250 г.',
        price: 550,
      },
      {
        dishName: 'Филе куриное кляр',
        desc: '',
        weight: '250 г.',
        price: 450,
      },
      {
        dishName: 'Тарталетка с салатом',
        desc: '',
        weight: '1 шт.',
        price: 150,
      },
      {
        dishName: 'Галантин из курицы',
        desc: '',
        weight: '100 г.',
        price: 310,
      },
      {
        dishName: 'Томат фаршированный сыром и чесноком',
        desc: '',
        weight: '1 шт.',
        price: 195,
      },
      {
        dishName: 'Рулет из ветчины с сыром',
        desc: '',
        weight: '1 шт.',
        price: 95,
      },
      {
        dishName: 'Рулет из баклажан с сыром орехами',
        desc: '',
        weight: '1 шт.',
        price: 95,
      },
      {
        dishName: 'Хлебная корзина',
        desc: '',
        weight: '600 г.',
        price: 150,
      },
      {
        dishName: 'Хлебная корзина (ассортимент)',
        desc: '',
        weight: '800 г.',
        price: 180,
      },
      {
        dishName: 'Лаваш',
        desc: '',
        weight: '1 шт.',
        price: 50,
      },
    ],
  },
  {
    title: 'Салаты',
    content: [
      {
        dishName: 'Алые паруса',
        desc: 'Креветки салатные, лосось с/с, томаты свежие, китайская капуста, брынза, лист салата, лимон, заправка',
        weight: '220 г.',
        price: 485,
      },
      {
        dishName: 'Сельдь под шубой',
        desc: 'Сельдь маринованная, лук маринованный, картофель отварной, свекла отварная, морковь отварная, яйцо, майонез, маринованные корнишоны',
        weight: '220 г.',
        price: 275,
      },
      {
        dishName: 'Оливье с креветками',
        desc: 'Креветки , картофель ,морковь, огурец маринованный, яйцо, горошек зеленый, соус майонез',
        weight: '200 г.',
        price: 420,
      },
      {
        dishName: 'Салат с лососем',
        desc: 'Лосось слабо соленый, картофель отварной, салат айсберг ,руккола, брынза, кунжутные семечки и соевая заправка',
        weight: '200 г.',
        price: 475,
      },
      {
        dishName: 'Столичный',
        desc: 'Говядина отварная, картофель отварной, огурец свежий, морковь ,яйцо, зеленый горошек, соус майонез',
        weight: '200 г.',
        price: 315,
      },
      {
        dishName: 'Мужская забава',
        desc: 'Мясо свинины , лук, огурец маринованный, картофель , шампиньоны, сыр российский, орехи грецкие, чеснок, майонез',
        weight: '200 г.',
        price: 365,
      },
      {
        dishName: 'Стригино',
        desc: 'Филе куриное , шампиньоны , томаты свежие, брынза, салат «Айсберг», орехи грецкие, лист салата, заправляется взбитыми сливками с ароматом сушеного эстрагона',
        weight: '220 г.',
        price: 375,
      },
      {
        dishName: 'Цезарь с курицей',
        desc: 'Салат айсберг ,куриное филе, томаты черри, сухарики пшеничные, сыр твердый, соус "цезарь"',
        weight: '200 г.',
        price: 355,
      },
      {
        dishName: 'Гармония',
        desc: 'Мясо куриное ,перец болгарский, фасоль зеленая, горошек зеленый, грецкий орех. Заправляется растительным маслом с добавлением соевого соуса и горчицы',
        weight: '210 г.',
        price: 365,
      },
      {
        dishName: 'Теплый салат с куриной печенью',
        desc: 'Печень куриная обжаренная, томат свежий, лист салата, петрушка, масло растительное, кунжут.',
        weight: '200 г.',
        price: 355,
      },
      {
        dishName: 'Салат с ветчиной',
        desc: 'Ветчина, картофель отварной ,морковь, огурец маринованный ,горошек зеленый, соус майонез',
        weight: '220 г.',
        price: 310,
      },
      {
        dishName: 'Грибной салат',
        desc: 'Шампиньоны обжаренные, салат айсберг, зеленая фасоль, перец болгарский сладкий, яичный соус, орех грецкий',
        weight: '190 г.',
        price: 325,
      },
      {
        dishName: 'Греческий',
        desc: 'Томат свежий, огурец свежий ,перец болгарский сладкий, брынза, лук маринованный, масло растительное',
        weight: '200 г.',
        price: 345,
      },
      {
        dishName: 'Венигрет',
        desc: 'Свекла отварная, капуста квашеная, картофель отварной, морковь, зеленый горошек, заправка растительным маслом',
        weight: '220 г.',
        price: 275,
      },
      {
        dishName: 'Овощной',
        desc: 'Капуста белокочанная, огурец свежий ,перец болгарский сладкий, лук маринованный ,зелень, масло растительное',
        weight: '220 г.',
        price: 275,
      },
    ],
  },
  {
    title: 'Горячие закуски',
    content: [
      {
        dishName: 'Ассорти "Стригино"',
        desc: 'Перец болгарский, томат и баклажан запекаются с начинкой из мясного фарша и овощей. Подаются со сметаной',
        weight: '350 г.',
        price: 395,
      },
      {
        dishName: 'Долма в виноградных листьях с соусом мацони',
        desc: '',
        weight: '150/50 г.',
        price: 365,
      },
      {
        dishName: 'Фаршированные шампиньоны',
        desc: 'Шампиньоны , лук, морковь, сыр российский, майонез, зелень',
        weight: '150 г.',
        price: 380,
      },
      {
        dishName: 'Фаршированный томат',
        desc: 'Мясной фарш с овощами, чеснок, сыр, майонез, зелень, сметана',
        weight: '90/30 г.',
        price: 250,
      },
      {
        dishName: 'Жульен из курицы',
        desc: '',
        weight: '100 г.',
        price: 200,
      },
      {
        dishName: 'Жульен грибной',
        desc: '',
        weight: '100 г.',
        price: 220,
      },
      {
        dishName: 'Жульен из языка с грибами',
        desc: '',
        weight: '100 г.',
        price: 250,
      },
    ],
  },

  {
    title: ' Мясо и рыба на гриле',
    content: [
      {
        dishName: 'Мясная доска',
        description: [
          { dishName: 'свинина шея', weight: '1000г.' },
          { dishName: 'мясо курицы', weight: '800г.' },
          { dishName: 'колбаски гриль', weight: '600г.' },
          { dishName: 'картофель', weight: '300г.' },
          { dishName: 'свежие овощи', weight: '250г.' },
          { dishName: 'соус шашлычный', weight: '100г.' },
          { dishName: 'лаваш', weight: '150г.' },
          { dishName: 'зелень', weight: '50г.' },
        ],
        weight: '3250 г.',
        price: 4500,
      },
      {
        dishName: 'Рыбная доска',
        description: [
          { dishName: 'стейк лосося', weight: '600г.' },
          { dishName: 'морской окунь', weight: '600г.' },
          { dishName: 'кольца кальмара', weight: '300г.' },
          { dishName: 'креветки королевские', weight: '150г.' },
          { dishName: 'запеченные картофель', weight: '150г.' },
          { dishName: 'свежие овощи', weight: '150г.' },
          { dishName: 'соус крабовый', weight: '100г.' },
          { dishName: 'гренки', weight: '50г.' },
          { dishName: 'лимон', weight: '50г.' },
        ],
        weight: '2200 г.',
        price: 5600,
      },
      {
        dishName: 'Цыпленок гриль с овощами',
        description: [
          { dishName: 'мясо курицы гриль', weight: '1200г.' },
          { dishName: 'картофель', weight: '600г.' },
          { dishName: 'перец болгарский печеный', weight: '150г.' },
          { dishName: 'томаты печеные', weight: '150г.' },
          { dishName: 'зелень', weight: '50г.' },
        ],
        weight: '2150 г.',
        price: 2200,
      },
      {
        dishName: 'Овощи гриль',
        desc: 'Баклажан , перец сладкий, томат ,зелень. 150/50/50/20',
        weight: '220 г.',
        price: 550,
      },
    ],
  },
];

export const buffetMenu: BuffetMenuType = [
  {
    title: '  Фуршетный стол',
    content: [
      {
        title: 'Закуски',
        content: [
          {
            dishName: 'Сыр на шпажках (ассорти)',
            weight: '1шт.',
            price: 115,
          },
          {
            dishName: 'Тарталетка с красной икрой',
            weight: '1шт.',
            price: 155,
          },
          {
            dishName: 'Томаты фаршированные сыром с чесноком',
            weight: '1шт.',
            price: 95,
          },
          {
            dishName: 'Канапе в ассортименте',
            weight: '1шт.',
            price: 85,
          },
          {
            dishName: 'Карзиночка с салатом',
            weight: '1шт.',
            price: 120,
          },
          {
            dishName: 'Оливковый коктейль',
            weight: '100г.',
            price: 550,
          },
          {
            dishName: 'Фрукты нарезка',
            weight: '250г.',
            price: 800,
          },
          {
            dishName: 'Ягоды сезонные',
            weight: '150г.',
            price: 850,
          },
          {
            dishName: 'Разносол',
            weight: '100г.',
            price: 250,
          },
          {
            dishName: 'Мини пирожное',
            weight: '1шт.',
            price: 95,
          },
        ],
      },
      {
        title: 'Напитки',
        content: [
          {
            dishName: 'Минеральная вода газированная (не газированная)',
            weight: '0,6л',
            price: 120,
          },
          {
            dishName: 'Морс',
            weight: '1л',
            price: 250,
          },
          {
            dishName: 'Лимонад',
            weight: '0,5л',
            price: 150,
          },
          {
            dishName: 'Пепси',
            weight: '0,6л',
            price: 85,
          },
          {
            dishName: 'Сок в ассортименте',
            weight: '1л',
            price: 180,
          },
        ],
      },
    ],
  },
];

export type BuffetMenuType = {
  title: string;
  content: {
    title: string;
    content: ItemType[];
  }[];
}[];

export type ItemType = {
  dishName: string;
  desc?: string;
  description?:
    | {
        dishName: string | undefined;
        weight?: string | undefined;
        price?: number | undefined;
      }[]
    | undefined;
  weight?: string;
  price?: number;
};

export type MenuType = {
  title: string;
  content: ItemType[];
};

export type MenuPropsType = MenuType[];

export default menu;
