import{r as e,c as t,a as n,d as p,F as c,b as s,e as o,o as l}from"./app.9bc35547.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";const r={},i=n("h1",{id:"\u4F5C\u7528\u57DF\u94FE",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F5C\u7528\u57DF\u94FE","aria-hidden":"true"},"#"),s(" \u4F5C\u7528\u57DF\u94FE")],-1),k=s("\u672C\u6587\u6458\u81EA "),b={href:"https://github.com/mqyqingfeng/Blog/issues/6",target:"_blank",rel:"noopener noreferrer"},d=s("[JavaScript\u6DF1\u5165\u4E4B\u4F5C\u7528\u57DF\u94FE] --- \u51B4\u7FBD\u7684\u535A\u5BA2"),m=o(`<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\u5728\u300AJavaScript\u6DF1\u5165\u4E4B\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u300B\u4E2D\u8BB2\u5230\uFF0C\u5F53JavaScript\u4EE3\u7801\u6267\u884C\u4E00\u6BB5\u53EF\u6267\u884C\u4EE3\u7801(executable code)\u65F6\uFF0C\u4F1A\u521B\u5EFA\u5BF9\u5E94\u7684\u6267\u884C\u4E0A\u4E0B\u6587(execution context)\u3002</p><p>\u5BF9\u4E8E\u6BCF\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u90FD\u6709\u4E09\u4E2A\u91CD\u8981\u5C5E\u6027\uFF1A</p><ul><li>\u53D8\u91CF\u5BF9\u8C61(Variable object\uFF0CVO)</li><li>\u4F5C\u7528\u57DF\u94FE(Scope chain)</li><li>this</li></ul><p>\u4ECA\u5929\u91CD\u70B9\u8BB2\u8BB2\u4F5C\u7528\u57DF\u94FE\u3002</p><h2 id="\u4F5C\u7528\u57DF\u94FE-1" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u94FE-1" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u94FE</h2><p>\u5728\u300AJavaScript\u6DF1\u5165\u4E4B\u53D8\u91CF\u5BF9\u8C61\u300B\u4E2D\u8BB2\u5230\uFF0C\u5F53\u67E5\u627E\u53D8\u91CF\u7684\u65F6\u5019\uFF0C\u4F1A\u5148\u4ECE\u5F53\u524D\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\u5BF9\u8C61\u4E2D\u67E5\u627E\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u5C31\u4F1A\u4ECE\u7236\u7EA7(\u8BCD\u6CD5\u5C42\u9762\u4E0A\u7684\u7236\u7EA7)\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\u5BF9\u8C61\u4E2D\u67E5\u627E\uFF0C\u4E00\u76F4\u627E\u5230\u5168\u5C40\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u5168\u5C40\u5BF9\u8C61\u3002\u8FD9\u6837\u7531\u591A\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\u5BF9\u8C61\u6784\u6210\u7684\u94FE\u8868\u5C31\u53EB\u505A\u4F5C\u7528\u57DF\u94FE\u3002</p><p>\u4E0B\u9762\uFF0C\u8BA9\u6211\u4EEC\u4EE5\u4E00\u4E2A\u51FD\u6570\u7684\u521B\u5EFA\u548C\u6FC0\u6D3B\u4E24\u4E2A\u65F6\u671F\u6765\u8BB2\u89E3\u4F5C\u7528\u57DF\u94FE\u662F\u5982\u4F55\u521B\u5EFA\u548C\u53D8\u5316\u7684\u3002</p><h2 id="\u51FD\u6570\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u521B\u5EFA" aria-hidden="true">#</a> \u51FD\u6570\u521B\u5EFA</h2><p>\u5728\u300AJavaScript\u6DF1\u5165\u4E4B\u8BCD\u6CD5\u4F5C\u7528\u57DF\u548C\u52A8\u6001\u4F5C\u7528\u57DF\u300B\u4E2D\u8BB2\u5230\uFF0C\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u5728\u51FD\u6570\u5B9A\u4E49\u7684\u65F6\u5019\u5C31\u51B3\u5B9A\u4E86\u3002</p><p>\u8FD9\u662F\u56E0\u4E3A\u51FD\u6570\u6709\u4E00\u4E2A\u5185\u90E8\u5C5E\u6027 [[scope]]\uFF0C\u5F53\u51FD\u6570\u521B\u5EFA\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u4FDD\u5B58\u6240\u6709\u7236\u53D8\u91CF\u5BF9\u8C61\u5230\u5176\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u7406\u89E3 [[scope]] \u5C31\u662F\u6240\u6709\u7236\u53D8\u91CF\u5BF9\u8C61\u7684\u5C42\u7EA7\u94FE\uFF0C\u4F46\u662F\u6CE8\u610F\uFF1A[[scope]] \u5E76\u4E0D\u4EE3\u8868\u5B8C\u6574\u7684\u4F5C\u7528\u57DF\u94FE\uFF01</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u51FD\u6570\u521B\u5EFA\u65F6\uFF0C\u5404\u81EA\u7684[[scope]]\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>foo<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  globalContext<span class="token punctuation">.</span><span class="token constant">VO</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

bar<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    fooContext<span class="token punctuation">.</span><span class="token constant">AO</span><span class="token punctuation">,</span>
    globalContext<span class="token punctuation">.</span><span class="token constant">VO</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u51FD\u6570\u6FC0\u6D3B" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u6FC0\u6D3B" aria-hidden="true">#</a> \u51FD\u6570\u6FC0\u6D3B</h2><p>\u5F53\u51FD\u6570\u6FC0\u6D3B\u65F6\uFF0C\u8FDB\u5165\u51FD\u6570\u4E0A\u4E0B\u6587\uFF0C\u521B\u5EFA VO/AO \u540E\uFF0C\u5C31\u4F1A\u5C06\u6D3B\u52A8\u5BF9\u8C61\u6DFB\u52A0\u5230\u4F5C\u7528\u94FE\u7684\u524D\u7AEF\u3002</p><p>\u8FD9\u65F6\u5019\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u4F5C\u7528\u57DF\u94FE\uFF0C\u6211\u4EEC\u547D\u540D\u4E3A Scope\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Scope <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>Scope<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u81F3\u6B64\uFF0C\u4F5C\u7528\u57DF\u94FE\u521B\u5EFA\u5B8C\u6BD5\u3002</p><h2 id="\u634B\u4E00\u634B" tabindex="-1"><a class="header-anchor" href="#\u634B\u4E00\u634B" aria-hidden="true">#</a> \u634B\u4E00\u634B</h2><p>\u4EE5\u4E0B\u9762\u7684\u4F8B\u5B50\u4E3A\u4F8B\uFF0C\u7ED3\u5408\u7740\u4E4B\u524D\u8BB2\u7684\u53D8\u91CF\u5BF9\u8C61\u548C\u6267\u884C\u4E0A\u4E0B\u6587\u6808\uFF0C\u6211\u4EEC\u6765\u603B\u7ED3\u4E00\u4E0B\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u4F5C\u7528\u57DF\u94FE\u548C\u53D8\u91CF\u5BF9\u8C61\u7684\u521B\u5EFA\u8FC7\u7A0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token string">&quot;global scope&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> scope2 <span class="token operator">=</span> <span class="token string">&#39;local scope&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> scope2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6267\u884C\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><p>1.checkscope \u51FD\u6570\u88AB\u521B\u5EFA\uFF0C\u4FDD\u5B58\u4F5C\u7528\u57DF\u94FE\u5230 \u5185\u90E8\u5C5E\u6027[[scope]]</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>checkscope<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    globalContext<span class="token punctuation">.</span><span class="token constant">VO</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>2.\u6267\u884C checkscope \u51FD\u6570\uFF0C\u521B\u5EFA checkscope \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF0Ccheckscope \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u88AB\u538B\u5165\u6267\u884C\u4E0A\u4E0B\u6587\u6808</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ECStack <span class="token operator">=</span> <span class="token punctuation">[</span>
    checkscopeContext<span class="token punctuation">,</span>
    globalContext
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>3.checkscope \u51FD\u6570\u5E76\u4E0D\u7ACB\u523B\u6267\u884C\uFF0C\u5F00\u59CB\u505A\u51C6\u5907\u5DE5\u4F5C\uFF0C\u7B2C\u4E00\u6B65\uFF1A\u590D\u5236\u51FD\u6570[[scope]]\u5C5E\u6027\u521B\u5EFA\u4F5C\u7528\u57DF\u94FE</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>checkscopeContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    Scope<span class="token operator">:</span> checkscope<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>4.\u7B2C\u4E8C\u6B65\uFF1A\u7528 arguments \u521B\u5EFA\u6D3B\u52A8\u5BF9\u8C61\uFF0C\u968F\u540E\u521D\u59CB\u5316\u6D3B\u52A8\u5BF9\u8C61\uFF0C\u52A0\u5165\u5F62\u53C2\u3001\u51FD\u6570\u58F0\u660E\u3001\u53D8\u91CF\u58F0\u660E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>checkscopeContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">AO</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        arguments<span class="token operator">:</span> <span class="token punctuation">{</span>
            length<span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        scope2<span class="token operator">:</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">}</span>\uFF0C
    Scope<span class="token operator">:</span> checkscope<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token punctuation">[</span>scope<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>5.\u7B2C\u4E09\u6B65\uFF1A\u5C06\u6D3B\u52A8\u5BF9\u8C61\u538B\u5165 checkscope \u4F5C\u7528\u57DF\u94FE\u9876\u7AEF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>checkscopeContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">AO</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        arguments<span class="token operator">:</span> <span class="token punctuation">{</span>
            length<span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        scope2<span class="token operator">:</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    Scope<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>Scope<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>6.\u51C6\u5907\u5DE5\u4F5C\u505A\u5B8C\uFF0C\u5F00\u59CB\u6267\u884C\u51FD\u6570\uFF0C\u968F\u7740\u51FD\u6570\u7684\u6267\u884C\uFF0C\u4FEE\u6539 AO \u7684\u5C5E\u6027\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>checkscopeContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">AO</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        arguments<span class="token operator">:</span> <span class="token punctuation">{</span>
            length<span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        scope2<span class="token operator">:</span> <span class="token string">&#39;local scope&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    Scope<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>Scope<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>7.\u67E5\u627E\u5230 scope2 \u7684\u503C\uFF0C\u8FD4\u56DE\u540E\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0C\u51FD\u6570\u4E0A\u4E0B\u6587\u4ECE\u6267\u884C\u4E0A\u4E0B\u6587\u6808\u4E2D\u5F39\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ECStack <span class="token operator">=</span> <span class="token punctuation">[</span>
    globalContext
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u6587\u7AE0\u5185\u5BB9\u6765\u6E90" tabindex="-1"><a class="header-anchor" href="#\u6587\u7AE0\u5185\u5BB9\u6765\u6E90" aria-hidden="true">#</a> \u6587\u7AE0\u5185\u5BB9\u6765\u6E90</h2>`,39),h={href:"https://github.com/mqyqingfeng/Blog/issues/6",target:"_blank",rel:"noopener noreferrer"},v=s("[JavaScript\u6DF1\u5165\u4E4B\u4F5C\u7528\u57DF\u94FE] --- \u51B4\u7FBD\u7684\u535A\u5BA2");function g(x,j){const a=e("OutboundLink");return l(),t(c,null,[i,n("p",null,[k,n("a",b,[d,p(a)])]),m,n("p",null,[n("a",h,[v,p(a)])])],64)}var S=u(r,[["render",g]]);export{S as default};
