import '../css/styles.css';

console.log('2');
import { CorHeader } from "@cor-web/components/header/index.js";
import { CorSearchButton } from "@cor-web/components/header/index.js";
import { CorHeaderNavbar } from "@cor-web/components/header/index.js";
import { CorHeaderSubnav } from "@cor-web/components/header/index.js";
import { CorPanelsNav } from "@cor-web/components/header/index.js";
import { CorSubnavDescription } from "@cor-web/components/header/index.js";
import { CorSubnavItem } from "@cor-web/components/header/index.js";

window.customElements.define('cor-header', CorHeader);
window.customElements.define('cor-search-button', CorSearchButton);
window.customElements.define('cor-header-navbar', CorHeaderNavbar);
window.customElements.define('cor-header-subnav', CorHeaderSubnav);
window.customElements.define('cor-panels-nav', CorPanelsNav);
window.customElements.define('cor-subnav-description', CorSubnavDescription);
window.customElements.define('cor-subnav-item', CorSubnavItem);