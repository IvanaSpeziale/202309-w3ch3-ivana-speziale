import { renderFooter } from './component/footer';
import { renderHeader } from './component/header';
import { renderList } from './component/list';

const main = () => {
  console.log('Loaded Main ');

  const appElement = document.querySelector<HTMLDivElement>('#app');
  if (appElement === null) return;

  renderHeader(appElement);
  renderList(appElement);
  renderFooter(appElement);
};

main();
