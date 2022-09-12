import{r as t,c as o,a as n,d as a,F as l,b as s,o as c}from"./app.9bc35547.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";var p="/fe-study/assets/react_reconciler.3d5f411c.png",i="/fe-study/assets/React\u53CC\u7F13\u5B58.b221061a.svg";const u={},k=n("h1",{id:"react-\u67B6\u6784",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react-\u67B6\u6784","aria-hidden":"true"},"#"),s(" React \u67B6\u6784")],-1),d=n("h2",{id:"react15\u67B6\u6784",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react15\u67B6\u6784","aria-hidden":"true"},"#"),s(" React15\u67B6\u6784")],-1),b=n("p",null,"\u5206\u4E3A\u4E24\u5C42\uFF1A",-1),h=n("ul",null,[n("li",null,"'Stack' Reconciler(\u534F\u8C03\u5668) ---- \u8D1F\u8D23\u627E\u51FA\u53D8\u5316\u7684\u7EC4\u4EF6"),n("li",null,"Renderer(\u6E32\u67D3\u5668) --- \u8D1F\u8D23\u5C06\u53D8\u5316\u7684\u7EC4\u4EF6\u6E32\u67D3\u5230\u9875\u9762\u4E0A")],-1),_={class:"custom-container tip"},m=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),f=s("\u6CE8\u610F\uFF0C\u4F53\u4F1A "),g=n("strong",null,"Stack",-1),w=s(" \u8FD9\u4E2A\u8BCD\u3002"),y={href:"https://zh-hans.reactjs.org/docs/implementation-notes.html",target:"_blank",rel:"noopener noreferrer"},F=s("\u5B98\u7F51\u8BF4\u660E"),x=n("p",null,"15\u67B6\u6784\u7684\u7F3A\u70B9\u662F\uFF0C\u7EC4\u4EF6\u9012\u5F52\u66F4\u65B0\uFF0C\u66F4\u65B0\u4E00\u65E6\u5F00\u59CB\uFF0C\u4E2D\u9014\u5C31\u65E0\u6CD5\u4E2D\u65AD\u3002\u5F53\u9012\u5F52\u7684\u5C42\u7EA7\u5F88\u6DF1\uFF0C\u66F4\u65B0\u65F6\u95F4\u8D85\u8FC716ms\uFF0C\u7528\u6237\u7684\u4EA4\u4E92\u5C31\u4F1A\u5361\u987F\u3002 \u89E3\u51B3\u65B9\u6848\uFF1A\u7528\u53EF\u4E2D\u65AD\u7684\u5F02\u6B65\u66F4\u65B0\u4EE3\u66FF\u540C\u6B65\u66F4\u65B0\u3002",-1),R=n("h2",{id:"react16\u67B6\u6784",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react16\u67B6\u6784","aria-hidden":"true"},"#"),s(" React16\u67B6\u6784")],-1),v=n("p",null,"\u5206\u4E3A\u4E09\u5C42\uFF1A",-1),j=n("ul",null,[n("li",null,"Scheduler\uFF08\u8C03\u5EA6\u5668\uFF09\u2014\u2014 \u8C03\u5EA6\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\uFF0C\u9AD8\u4F18\u4EFB\u52A1\u4F18\u5148\u8FDB\u5165Reconciler"),n("li",null,"'Fiber' Reconciler\uFF08\u534F\u8C03\u5668\uFF09\u2014\u2014 \u8D1F\u8D23\u627E\u51FA\u53D8\u5316\u7684\u7EC4\u4EF6\uFF0C\u5E76\u6253\u4E0A\u4E0D\u540C\u7684Flags"),n("li",null,"Renderer\uFF08\u6E32\u67D3\u5668\uFF09\u2014\u2014 \u8D1F\u8D23\u5C06\u53D8\u5316\u7684\u7EC4\u4EF6\u6E32\u67D3\u5230\u9875\u9762\u4E0A")],-1),O=n("blockquote",null,[n("p",null,[s("\u4F7F\u7528\u4E86\u6700\u65B0\u7684 "),n("strong",null,"Fiber"),s(" \u67B6\u6784")])],-1),N=n("h3",{id:"scheduler-\u8C03\u5EA6\u5668",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#scheduler-\u8C03\u5EA6\u5668","aria-hidden":"true"},"#"),s(" Scheduler \u8C03\u5EA6\u5668")],-1),P=n("p",null,"\u8C03\u5EA6\u5668\u7684\u4F5C\u7528\u662F\uFF0C\u5F53\u6D4F\u89C8\u5668\u6709\u5269\u4F59\u65F6\u95F4\u7684\u65F6\u5019\u901A\u77E5\u6211\u4EEC\uFF0C\u5728\u6D4F\u89C8\u5668\u7A7A\u95F2\u65F6\u51FA\u53D1\u56DE\u8C03\uFF0C\u540C\u65F6\u8FD8\u63D0\u4F9B\u4E86\u591A\u79CD\u8C03\u5EA6\u4EFB\u52A1\u4F18\u5148\u7EA7\u4F9B\u4EFB\u52A1\u8BBE\u7F6E\u3002\u4F18\u5148\u7EA7\u5DE5\u4F5C\u5206\u4E3A \u9AD8\u4F18\u5148\u7EA7\uFF08\u52A8\u753B\uFF09 \u548C \u4F4E\u4F18\u5148\u7EA7\u7684\u5DE5\u4F5C\uFF08\u5927\u578B\u8BA1\u7B97\u51FD\u6570\uFF09\u3002\u8C03\u5EA6\u53EF\u4EE5\u57FA\u4E8E\u65F6\u95F4\u6216\u8005\u4F18\u5148\u7EA7\uFF0C\u9AD8\u4F18\u5148\u7EA7\u7684\u5DE5\u4F5C\u5E94\u8BE5\u88AB\u5B89\u6392\u5728\u4F4E\u4F18\u5148\u7EA7\u7684\u5DE5\u4F5C\u4E4B\u4E0A\u3002",-1),D=n("blockquote",null,[n("p",null,"// TODO \u5982\u4F55\u8C03\u5EA6\uFF1F"),n("ul",null,[n("li",null,"\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\uFF0C\u4F7F\u7528\u4EFB\u52A1\u7684\u8FC7\u671F\u65F6\u95F4\u8868\u793A"),n("li",null,[s("\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u4F7F\u7528\u7684\u662F\u5C0F\u9876\u5806 "),n("code",null,"SchedulerMinHeap.js")]),n("li",null,[s("\u73B0\u5728\u7684\u7248\u672C\u4E2D\uFF0C\u91C7\u7528 "),n("code",null,"Lane"),s(" \u6A21\u578B\u6765\u5904\u7406\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7")])])],-1),q=n("h3",{id:"reconciler-\u534F\u8C03\u5668",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reconciler-\u534F\u8C03\u5668","aria-hidden":"true"},"#"),s(" Reconciler \u534F\u8C03\u5668")],-1),I=n("p",null,[n("code",null,"Fiber Reconciler"),s(" \u662F "),n("code",null,"React 16"),s(" \u4E2D\u65B0\u7684\u534F\u8C03\u7B97\u6CD5\u3002 \u534F\u8C03\u5668\u662F\u5728 render \u9636\u6BB5\u5DE5\u4F5C\u3002\u4F1A\u521B\u5EFA\u548C\u66F4\u65B0Fiber\u8282\u70B9\u3002\u5728mount\u9636\u6BB5\uFF0C\u751F\u6210Fiber\u5BF9\u8C61\uFF0C\u5728update\u65F6\uFF0C\u4F1A\u66F4\u65B0\u6700\u65B0\u7684state\u5F62\u6210\u7684jsx\u5BF9\u8C61\u548Ccurrent Fiber\u6811\u5BF9\u6BD4\u590D\u7528\uFF0C\u6784\u5EFA workInProgress Fiber \u6811\u3002")],-1),S=n("blockquote",null,[n("p",null,"\u8FD9\u4E2A\u5BF9\u6BD4\u7684\u8FC7\u7A0B\u5C31\u662F diff \u7B97\u6CD5\u3002"),n("ul",null,[n("li",null,"diff\u7B97\u6CD5\u53D1\u751F\u5728render\u9636\u6BB5\u7684 reconcileChildFibers \u4E2D\u3002"),n("li",null,"diff\u5206\u4E3A\uFF1A\u5355\u8282\u70B9\u548C\u591A\u8282\u70B9\u7684")])],-1),E=n("ul",null,[n("li",null,"\u80FD\u591F\u628A\u53EF\u4E2D\u65AD\u7684\u4EFB\u52A1\u5207\u7247\u5904\u7406\u3002"),n("li",null,"\u80FD\u591F\u8C03\u6574\u4F18\u5148\u7EA7\uFF0C\u91CD\u7F6E\u5E76\u590D\u7528\u4EFB\u52A1\u3002"),n("li",null,"\u80FD\u591F\u5728\u7236\u5143\u7D20\u4E0E\u5B50\u5143\u7D20\u4E4B\u95F4\u4EA4\u9519\u5904\u7406\uFF0C\u4EE5\u652F\u6301 React \u4E2D\u7684\u5E03\u5C40\u3002"),n("li",null,[s("\u80FD\u591F\u5728 "),n("code",null,"render()"),s(" \u4E2D\u8FD4\u56DE\u591A\u4E2A\u5143\u7D20\u3002")]),n("li",null,"\u66F4\u597D\u5730\u652F\u6301\u9519\u8BEF\u8FB9\u754C\u3002")],-1),M={href:"https://zh-hans.reactjs.org/docs/codebase-overview.html#reconcilers",target:"_blank",rel:"noopener noreferrer"},T=s("reconcilers--\u5B98\u7F51"),L=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("\u6574\u4E2AScheduler\u4E0EReconciler\u7684\u5DE5\u4F5C\u90FD\u5728"),n("strong",null,"\u5185\u5B58"),s("\u4E2D\u8FDB\u884C\u3002\u53EA\u6709\u5F53\u6240\u6709\u7EC4\u4EF6\u90FD\u5B8C\u6210Reconciler\u7684\u5DE5\u4F5C\uFF0C\u624D\u4F1A\u7EDF\u4E00\u4EA4\u7ED9Renderer\u3002")])],-1),C=n("h3",{id:"renderer-\u6E32\u67D3\u5668",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#renderer-\u6E32\u67D3\u5668","aria-hidden":"true"},"#"),s(" Renderer \u6E32\u67D3\u5668")],-1),z=n("p",null,[n("strong",null,"Renderer"),s(" \u6839\u636E "),n("strong",null,"Reconciler"),s(" \u4E3A\u865A\u62DFDOM\u6253\u7684\u6807\u8BB0\uFF0C\u540C\u6B65\u6267\u884C\u5BF9\u5E94\u7684\u64CD\u4F5C\u3002")],-1),B=n("blockquote",null,[n("p",null,"Renderer \u5728 commit \u9636\u6BB5\u5DE5\u4F5C\uFF0C\u904D\u5386 render \u9636\u6BB5\u751F\u6210\u7684 effectList \u4E0A\u7684\u8282\u70B9\uFF0C\u6267\u884C\u771F\u5B9E\u7684DOM\u64CD\u4F5C\u548C\u4E00\u4E9B\u751F\u547D\u5468\u671F")],-1),V=s("\u770B\u56FE\u3002"),W={href:"https://xiaochen1024.com/courseware/60b1b2f6cf10a4003b634718/60b1b328cf10a4003b63471b",target:"_blank",rel:"noopener noreferrer"},X=s("\u6765\u6E90\u4E8E--\u5168\u6808\u6F47\u6668"),A=n("p",null,[n("img",{src:p,alt:"react_reconciler"})],-1),H=n("h2",{id:"fiber",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fiber","aria-hidden":"true"},"#"),s(" Fiber")],-1),Q={href:"https://github.com/acdlite/react-fiber-architecture",target:"_blank",rel:"noopener noreferrer"},G=s("Fiber\u8D77\u6E90"),J=n("h3",{id:"fiber\u7684\u542B\u4E49",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fiber\u7684\u542B\u4E49","aria-hidden":"true"},"#"),s(" Fiber\u7684\u542B\u4E49")],-1),K=n("ol",null,[n("li",null,[s("\u5BF9\u4E8E\u67B6\u6784\u6765\u8BF4\uFF0C\u76F8\u5BF9\u4E8E\u4EE5\u5F80\u7684 "),n("code",null,"Stack reconciler"),s(" \uFF0C\u65B0\u7684\u662F\u57FA\u4E8E "),n("code",null,"Fiber\u8282\u70B9(FiberNode)"),s(" \u5B9E\u73B0\u7684")]),n("li",null,[s("\u4F5C\u4E3A\u9759\u6001\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6BCF\u4E2A "),n("code",null,"Fiber\u8282\u70B9"),s(" \u5BF9\u5E94\u4E00\u4E2A "),n("code",null,"React element"),s(" \uFF0C\u4FDD\u5B58\u4E86\u8BE5\u7EC4\u4EF6\u7684\u7C7B\u578B\uFF08\u51FD\u6570\u7EC4\u4EF6/\u7C7B\u7EC4\u4EF6/\u539F\u751F\u7EC4\u4EF6...\uFF09\u3001\u5BF9\u5E94\u7684DOM\u8282\u70B9\u7B49\u4FE1\u606F\u3002")]),n("li",null,[s("\u4F5C\u4E3A\u52A8\u6001\u7684\u5DE5\u4F5C\u5355\u5143\u6765\u8BF4\uFF0C\u6BCF\u4E2A "),n("code",null,"Fiber\u8282\u70B9"),s(" \u4FDD\u5B58\u4E86\u672C\u6B21\u66F4\u65B0\u4E2D\u8BE5\u7EC4\u4EF6\u6539\u53D8\u7684\u72B6\u6001\u3001\u8981\u6267\u884C\u7684\u5DE5\u4F5C\uFF08\u9700\u8981\u88AB\u5220\u9664/\u88AB\u63D2\u5165\u9875\u9762\u4E2D/\u88AB\u66F4\u65B0...\uFF09\u3002")])],-1),U=n("h3",{id:"fiber\u7ED3\u6784",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fiber\u7ED3\u6784","aria-hidden":"true"},"#"),s(" Fiber\u7ED3\u6784")],-1),Y=n("ol",null,[n("li",null,"\u4F5C\u4E3A\u67B6\u6784 --- Fiber\u94FE\u8868\u6811"),n("li",null,"\u4F5C\u4E3A\u9759\u6001\u6570\u636E\u7ED3\u6784 --- Fiber\u8282\u70B9"),n("li",null,"\u4F5C\u4E3A\u52A8\u6001\u5DE5\u4F5C\u5355\u5143 --- Fiber\u8282\u70B9\u4E2D\u4FDD\u5B58\u4E86\u672C\u6B21\u66F4\u65B0\u76F8\u5173\u7684\u4FE1\u606F")],-1),Z=s("FiberNode\u5B9A\u4E49 "),$={href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiber.new.js#L117",target:"_blank",rel:"noopener noreferrer"},nn=s("FiberNode \u6E90\u7801"),sn=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"FiberNode"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token parameter"},[s("tag"),n("span",{class:"token operator"},":"),s(" WorkTag"),n("span",{class:"token punctuation"},","),s(`
  pendingProps`),n("span",{class:"token operator"},":"),s(" mixed"),n("span",{class:"token punctuation"},","),s(`
  key`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"|"),s(" string"),n("span",{class:"token punctuation"},","),s(`
  mode`),n("span",{class:"token operator"},":"),s(" TypeOfMode"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// Instance"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("tag "),n("span",{class:"token operator"},"="),s(" tag"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"="),s(" key"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("elementType "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("type "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("stateNode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},"// Fiber"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("return "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// reference to the parent"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("child "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// reference to the first child"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("sibling "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// reference to the first sibling"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ref "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("pendingProps "),n("span",{class:"token operator"},"="),s(" pendingProps"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("memoizedProps "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("updateQueue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("memoizedState "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dependencies "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("mode "),n("span",{class:"token operator"},"="),s(" mode"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},"// Effects"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("effectTag "),n("span",{class:"token operator"},"="),s(" NoEffect"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("subtreeTag "),n("span",{class:"token operator"},"="),s(" NoSubtreeEffect"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("deletions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("nextEffect "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("firstEffect "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("lastEffect "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("lanes "),n("span",{class:"token operator"},"="),s(" NoLanes"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("childLanes "),n("span",{class:"token operator"},"="),s(" NoLanes"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("alternate "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br")])],-1),en=n("h3",{id:"fiber\u53CC\u7F13\u5B58",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fiber\u53CC\u7F13\u5B58","aria-hidden":"true"},"#"),s(" Fiber\u53CC\u7F13\u5B58")],-1),an=n("p",null,[s("\u53CC\u7F13\u5B58\u662F\u6307\u5B58\u5728\u4E24\u9897Fiber\u6811\uFF0C"),n("code",null,"current Fiber"),s(" \u6811\u63CF\u8FF0\u4E86\u5F53\u524D\u5448\u73B0\u7684dom\u6811\uFF0C"),n("code",null,"workInProgress Fiber"),s(" \u662F\u6B63\u5728\u66F4\u65B0\u7684Fiber\u6811\uFF0C\u8FD9\u4E24\u9897Fiber\u6811\u90FD\u662F\u5728\u5185\u5B58\u4E2D\u8FD0\u884C\u7684\uFF0C\u5728workInProgress Fiber\u6784\u5EFA\u5B8C\u6210\u4E4B\u540E\u4F1A\u5C06\u5B83\u4F5C\u4E3Acurrent Fiber\u5E94\u7528\u5230dom\u4E0A\u3002")],-1),tn=n("p",null,"\u5728 mount \u9636\u6BB5\uFF08\u9996\u6B21\u6E32\u67D3\uFF09\uFF0C\u4F1A\u6839\u636E jsx \u5BF9\u8C61\uFF0C\u6784\u5EFA Fiber \u5BF9\u8C61\uFF0C\u5F62\u6210Fiber\u6811\uFF0C\u7136\u540E\u8FD9\u68F5 Fiber \u6811\u4F1A\u4F5C\u4E3A current Fiber \u5E94\u7528\u5230\u771F\u5B9E\u7684DOM\u4E0A\u3002",-1),on=n("p",null,[s("\u5728 update \u9636\u6BB5\uFF08\u72B6\u6001\u66F4\u65B0\uFF09\uFF0C\u4F1A\u6839\u636E\u72B6\u6001\u53D8\u66F4\u540E\u7684 jsx \u5BF9\u8C61\u548C current Fiber \u6811\u505A\u5BF9\u6BD4\uFF0C \u6784\u5EFA\u5F62\u6210\u65B0\u7684 "),n("code",null,"workInProgress Fiber"),s(" \uFF08\u5B57\u9762\u610F\u601D\uFF1A\u6B63\u5728\u5DE5\u4F5C\u7684Fiber\u6811\uFF09\u3002"),n("code",null,"workInProgress Fiber"),s(" \u7684\u521B\u5EFA\u4F1A\u590D\u7528 "),n("code",null,"current Fiber\u6811"),s(" \u5BF9\u5E94\u7684\u8282\u70B9")],-1),ln=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,"\u8FD9\u4E2A\u51B3\u5B9A\u662F\u5426\u590D\u7528\u7684\u8FC7\u7A0B\uFF0C\u5C31\u662FDiff\u7B97\u6CD5\u3002")],-1),cn=n("p",null,[n("code",null,"workInProgress Fiber"),s(" \u5728 "),n("code",null,"render\u9636\u6BB5"),s(" \u5B8C\u6210\u6784\u5EFA\u540E\uFF0C\u4F1A\u8FDB\u5165\u5230 "),n("code",null,"commit\u9636\u6BB5"),s(" \u6E32\u67D3\u5230\u9875\u9762\u4E0A\u3002\u5F53\u6E32\u67D3\u5B8C\u6210\u540E\uFF0C "),n("code",null,"workInProgress Fiber"),s(" \u5207\u6362\u4E3A "),n("code",null,"current Fiber")],-1),rn=n("p",null,"\u793A\u4F8B\u5982\u4E0B\u3002",-1),pn=n("div",{class:"language-jsx ext-jsx line-numbers-mode"},[n("pre",{class:"language-jsx"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" useState "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'react'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" App"),n("span",{class:"token operator"},":"),s(" React"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"FC"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("content"),n("span",{class:"token punctuation"},","),s(" setContent"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8FD9\u662F\u5185\u5BB9'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("news"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"\u8FD9\u662F\u6807\u9898"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"setContent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8FD9\u662F\u66F4\u65B0\u540E\u7684\u5185\u5BB9'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"{"),s("content"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

ReactDOM`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"App")]),s(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token punctuation"},","),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'app'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br")])],-1),un=n("p",null,[n("img",{src:i,alt:"\u6D41\u7A0B\u56FE"})],-1),kn=n("h3",{id:"react-fiber-\u662F\u5982\u4F55\u5DE5\u4F5C\u7684",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react-fiber-\u662F\u5982\u4F55\u5DE5\u4F5C\u7684","aria-hidden":"true"},"#"),s(" React Fiber \u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF1F")],-1),dn=n("p",null,"// TODO: \u4E86\u89E3\u6BCF\u4E2A\u9636\u6BB5\u8C03\u7528\u7684\u65B9\u6CD5",-1),bn=n("ol",null,[n("li",null,[s("\u521D\u59CB\u6E32\u67D3 "),n("ol",null,[n("li",null,"\u521B\u5EFA\u4E00\u4E2A fiber \u6811")])]),n("li",null,[s("\u66F4\u65B0\u9636\u6BB5 "),n("ol",null,[n("li",null,[s("\u6E32\u67D3\u9636\u6BB5 render "),n("ol",null,[n("li",null,"\u5F00\u59CB\u9636\u6BB5 beginWork"),n("li",null,"\u5B8C\u5584\u9636\u6BB5 completeWork")])]),n("li",null,[s("\u63D0\u4EA4\u9636\u6BB5 commit phase \u5206\u4E3A\u591A\u4E2A\u5B50\u9636\u6BB5\u3002\u5728\u8FD9\u4E2A\u9636\u6BB5\u4E2D\uFF0C\u4E00\u4E9B\u751F\u547D\u5468\u671F\u94A9\u5B50 componentDidXXX \u3001hook\uFF08 useLayoutEffect \u3001useEffect\uFF09 \u4F1A\u6267\u884C\u3002 "),n("ol",null,[n("li",null,"before mutation\u9636\u6BB5\uFF08\u6267\u884C DOM \u64CD\u4F5C\u524D\uFF09"),n("li",null,"mutation\u9636\u6BB5\uFF08\u6267\u884C DOM \u64CD\u4F5C\uFF09"),n("li",null,"layout\u9636\u6BB5\uFF08\u6267\u884C DOM \u64CD\u4F5C\u540E\uFF09")])])])])],-1),hn=s("\u66F4\u4E3A\u5B8C\u5584\u7684\u8BB2\u89E3 "),_n={href:"https://www.zhihu.com/question/49496872/answer/2137978516",target:"_blank",rel:"noopener noreferrer"},mn=s("\u5982\u4F55\u7406\u89E3 React Fiber \u67B6\u6784\uFF1F - \u5F39\u94C1\u86CB\u540C\u5B66\u7684\u56DE\u7B54 - \u77E5\u4E4E"),fn=n("h2",{id:"\u53C2\u8003\u6587\u7AE0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003\u6587\u7AE0","aria-hidden":"true"},"#"),s(" \u53C2\u8003\u6587\u7AE0")],-1),gn={href:"https://react.iamkasong.com/preparation/oldConstructure.html",target:"_blank",rel:"noopener noreferrer"},wn=s("React15\u67B6\u6784"),yn={href:"https://react.iamkasong.com/preparation/newConstructure.html",target:"_blank",rel:"noopener noreferrer"},Fn=s("\u65B0\u7684React\u67B6\u6784"),xn={href:"https://react.iamkasong.com/process/fiber.html",target:"_blank",rel:"noopener noreferrer"},Rn=s("Fiber\u67B6\u6784\u7684\u5B9E\u73B0\u539F\u7406"),vn={href:"https://zh-hans.reactjs.org/docs/codebase-overview.html#reconcilers",target:"_blank",rel:"noopener noreferrer"},jn=s("reconcilers--\u5B98\u7F51"),On={href:"https://xiaochen1024.com/courseware/60b1b2f6cf10a4003b634718/60b1b328cf10a4003b63471b",target:"_blank",rel:"noopener noreferrer"},Nn=s("react\u6E90\u7801\u67B6\u6784"),Pn={href:"https://www.zhihu.com/question/49496872/answer/2137978516",target:"_blank",rel:"noopener noreferrer"},Dn=s("\u5982\u4F55\u7406\u89E3 React Fiber \u67B6\u6784\uFF1F - \u5F39\u94C1\u86CB\u540C\u5B66\u7684\u56DE\u7B54 - \u77E5\u4E4E"),qn={href:"http://www.ayqy.net/blog/dive-into-react-fiber/",target:"_blank",rel:"noopener noreferrer"},In=s("\u5B8C\u5168\u7406\u89E3React Fiber"),Sn={href:"https://segmentfault.com/blog/react-secret",target:"_blank",rel:"noopener noreferrer"},En=s("React\u7684\u79D8\u5BC6");function Mn(Tn,Ln){const e=t("OutboundLink");return c(),o(l,null,[k,d,b,h,n("div",_,[m,n("p",null,[f,g,w,n("a",y,[F,a(e)])]),x]),R,v,j,O,N,P,D,q,I,S,E,n("blockquote",null,[n("p",null,[n("a",M,[T,a(e)])])]),L,C,z,B,n("p",null,[V,n("a",W,[X,a(e)])]),A,H,n("blockquote",null,[n("p",null,[n("a",Q,[G,a(e)])])]),J,K,U,Y,n("p",null,[Z,n("a",$,[nn,a(e)])]),sn,en,an,tn,on,ln,cn,rn,pn,un,kn,dn,bn,n("blockquote",null,[n("p",null,[hn,n("a",_n,[mn,a(e)])])]),fn,n("p",null,[n("a",gn,[wn,a(e)])]),n("p",null,[n("a",yn,[Fn,a(e)])]),n("p",null,[n("a",xn,[Rn,a(e)])]),n("p",null,[n("a",vn,[jn,a(e)])]),n("p",null,[n("a",On,[Nn,a(e)])]),n("p",null,[n("a",Pn,[Dn,a(e)])]),n("p",null,[n("a",qn,[In,a(e)])]),n("p",null,[n("a",Sn,[En,a(e)])])],64)}var Bn=r(u,[["render",Mn]]);export{Bn as default};
