/**
 * Функция initWidget - лишь вариант того, как вы можете подключить виджет в SPA приложениях
 * Самое главное - это убедиться, что `HotelWidget` доступен для вызова (widget.js загрузился)
 *
 * Если ваше приложение удалит DOM-узел, в котором находится виджет, то для повторного показа нужно вызвать функцию снова
 * Рекомендуемый вариант использования в React - вызвать хук в компоненте, содержащем контейнер для встараивания виджета
 * React.useEffect(() => initWidget({...}), [])
 * Если вы встраиваете форму поиска и список - то функцию нужно вызвать в общем для этих контейнерах родителе
 */
export function initWidget(config) {
  var timeoutId;
  /** Проверяем, что есть window (модифицируйте этот код, если у вас есть SSR) */
  var context = window;
  if (!context) return;
  /** Функция, пытающаяся инициализировать виджет, в нашем случае каждые 500мс */
  var tryInitWidget = function () {
    var HotelWidget = context.HotelWidget;
    var TIMEOUT_DELAY = 500;
    if (HotelWidget) HotelWidget.init(config, 'https://bookonline24.ru/');
    else timeoutId = setTimeout(tryInitWidget, TIMEOUT_DELAY);
  };
  tryInitWidget();
  /**
   *  Возвращаем функцию остановки попыток инициализировать виджет.
   *  Если у вас React - вызывайте эту функцию в componentDidMount
   *  Если вы используете хуки - просто верните эту функцию в хуке: React.useEffect(() => initWidget({...}), [])
   */
  return function () {
    return clearTimeout(timeoutId);
  };
}
