import{e}from"./app.9bc35547.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const i={},r=e('<h1 id="\u9632\u6296-\u4E0E-\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296-\u4E0E-\u8282\u6D41" aria-hidden="true">#</a> \u9632\u6296 \u4E0E \u8282\u6D41</h1><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\u5728\u4E00\u4E9B\u9AD8\u9891\u4E8B\u4EF6\u4E2D\uFF0C\u4F8B\u5982</p><ol><li>resize scroll</li><li>mousedown mousedown</li><li>keyup keydown ...</li></ol><p>\u8FD9\u4E9B\u4E8B\u4EF6\u4F1A\u88AB\u9AD8\u9891\u7387\u89E6\u53D1\uFF0C\u5BFC\u81F4\u673A\u5668\u5361\u987F</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4E00\u822C\u6709\u4E24\u79CD\u5904\u7406\u65B9\u6848\uFF1A</p><ol><li>debounce \u9632\u6296</li><li>throttle \u8282\u6D41</li></ol><h2 id="\u9632\u6296" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296" aria-hidden="true">#</a> \u9632\u6296</h2><h3 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h3><p>\u9632\u6296\u7684\u539F\u7406\u5C31\u662F\uFF1A\u4F60\u5C3D\u7BA1\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u4F46\u662F\u6211\u4E00\u5B9A\u5728\u4E8B\u4EF6\u89E6\u53D1 n \u79D2\u540E\u624D\u6267\u884C\uFF0C\u5982\u679C\u4F60\u5728\u4E00\u4E2A\u4E8B\u4EF6\u89E6\u53D1\u7684 n \u79D2\u5185\u53C8\u89E6\u53D1\u4E86\u8FD9\u4E2A\u4E8B\u4EF6\uFF0C\u90A3\u6211\u5C31\u4EE5\u65B0\u7684\u4E8B\u4EF6\u7684\u65F6\u95F4\u4E3A\u51C6\uFF0Cn \u79D2\u540E\u624D\u6267\u884C\uFF0C\u603B\u4E4B\uFF0C\u5C31\u662F\u8981\u7B49\u4F60\u89E6\u53D1\u5B8C\u4E8B\u4EF6 n \u79D2\u5185\u4E0D\u518D\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u6211\u624D\u6267\u884C\uFF0C\u771F\u662F\u4EFB\u6027\u5450!</p><h3 id="\u57FA\u672C\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u529F\u80FD" aria-hidden="true">#</a> \u57FA\u672C\u529F\u80FD</h3><ol><li>\u9632\u6296</li><li>\u6DFB\u52A0this\u6307\u5411</li><li>\u4F20\u53C2</li><li>\u7ACB\u523B\u6267\u884C</li><li>\u8FD4\u56DE\u503C</li><li>\u53D6\u6D88</li></ol><h2 id="\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u8282\u6D41" aria-hidden="true">#</a> \u8282\u6D41</h2><h3 id="\u539F\u7406-1" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406-1" aria-hidden="true">#</a> \u539F\u7406</h3><p>\u9632\u6296\u7684\u539F\u7406\u5C31\u662F\uFF1A</p><p>\u5982\u679C\u4F60\u6301\u7EED\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\uFF0C\u53EA\u6267\u884C\u4E00\u6B21\u4E8B\u4EF6\u3002</p><p>\u6839\u636E\u9996\u6B21\u662F\u5426\u6267\u884C\u4EE5\u53CA\u7ED3\u675F\u540E\u662F\u5426\u6267\u884C\uFF0C\u6548\u679C\u6709\u6240\u4E0D\u540C\uFF0C\u5B9E\u73B0\u7684\u65B9\u5F0F\u4E5F\u6709\u6240\u4E0D\u540C\u3002 \u6211\u4EEC\u7528 leading \u4EE3\u8868\u9996\u6B21\u662F\u5426\u6267\u884C\uFF0Ctrailing \u4EE3\u8868\u7ED3\u675F\u540E\u662F\u5426\u518D\u6267\u884C\u4E00\u6B21\u3002</p><p>\u5173\u4E8E\u8282\u6D41\u7684\u5B9E\u73B0\uFF0C\u6709\u4E24\u79CD\u4E3B\u6D41\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u4E00\u79CD\u662F\u4F7F\u7528\u65F6\u95F4\u6233\uFF0C\u4E00\u79CD\u662F\u8BBE\u7F6E\u5B9A\u65F6\u5668\u3002</p>',18);function h(d,l){return r}var o=a(i,[["render",h]]);export{o as default};
