import * as icons from '../resources/icon';
import * as menus from '../resources/menu';

const icon = name => {
  return icons[name];
};

const menu = name => {
  return menus[name];
};

export { icon, menu };
