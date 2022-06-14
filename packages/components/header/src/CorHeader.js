import { Container } from "postcss";
import { ClickyMenus } from './clickyMenu';

export class CorHeader extends HTMLElement {
  constructor() {
    super();

    console.log("test soi");

    document.addEventListener('DOMContentLoaded', function(){
      const menus = document.querySelectorAll( '[clicky-menu]' );
  
      menus.forEach( menu => {
  
        let clickyMenu = new ClickyMenus(menu);
        clickyMenu.init();
  
      });
    });
  }
}