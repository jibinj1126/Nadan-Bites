
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5135, hash: 'bff2fd9f3b79f0037e611290bf1dfc4d593d3d79795ff6cee634b73ade847016', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1107, hash: 'c7e13caf9e7afc0f84b054b0d0788243ae43b244fab28a87395e4823e341c657', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 32902, hash: '230c18ef16ad0e946ce792169b3b04d7762b0fd694c2818a680c1c1c149fc95a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};
