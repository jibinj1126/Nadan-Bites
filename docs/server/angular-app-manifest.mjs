
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
    'index.csr.html': {size: 5187, hash: 'bbb895f16eb08e5760c4be6af60ff339601940c77d0bbf60cd8414978cca3877', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1159, hash: '5bb1524fdad56543804ccdfdcd01f457c0b21de03fa1faec756963637ec9e0df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 32951, hash: 'fc376758ab4a88430f5b12ec6da60eb26fc9749e56301e81713a5096c3cb7a28', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
