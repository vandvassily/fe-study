import{r as a,c as e,a as n,d as p,F as c,e as o,b as t,o as l}from"./app.9bc35547.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const r={},d=o(`<h1 id="npm-link" tabindex="-1"><a class="header-anchor" href="#npm-link" aria-hidden="true">#</a> npm link</h1><p>\u5728\u672C\u5730\u5F00\u53D1\u6A21\u5757\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>npm link</code> \u547D\u4EE4\uFF0C\u5C06\u6A21\u5757\u4E0E\u9879\u76EE\u4E2D\u7684\u6A21\u5757\u8F6F\u8FDE\u63A5\uFF0C\u65B9\u4FBF\u5BF9\u6A21\u5757\u8FDB\u884C\u5F00\u53D1\u548C\u8C03\u8BD5</p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u521B\u5EFA\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u94FE\u63A5" aria-hidden="true">#</a> \u521B\u5EFA\u94FE\u63A5</h3><p>\u5728\u6A21\u5757\u76EE\u5F55\uFF0C\u6267\u884C <code>npm link</code> \uFF0Cnpm \u4F1A\u6839\u636E\u6A21\u5757\u4E2D <code>package.json</code> \u914D\u7F6E\u7684\u4FE1\u606F\uFF0C\u94FE\u63A5\u5230\u5168\u5C40</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># bash</span>
<span class="token builtin class-name">cd</span> module-A
<span class="token function">npm</span> <span class="token function">link</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// module-A/index.js \u4E2D\u5185\u5BB9</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this is from module-A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u9879\u76EE\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> \u9879\u76EE\u4E2D\u4F7F\u7528</h3><p>\u5728\u9879\u76EE\u76EE\u5F55\uFF0C\u6267\u884C <code>npm link XXX</code>\uFF0C<code>XXX</code> \u4F1A\u88AB\u94FE\u63A5\u5230\u9879\u76EE <code>node_modules</code> \u4E2D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># bash</span>
<span class="token builtin class-name">cd</span> project-dev
<span class="token function">npm</span> <span class="token function">link</span> module-A
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// project-dev/main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;module-A&#39;</span><span class="token punctuation">;</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5927\u529F\u544A\u6210\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,13),u={href:"https://www.jianshu.com/p/aaa7db89a5b2",target:"_blank",rel:"noopener noreferrer"},m=t("npm link\u7684\u4F7F\u7528");function b(k,h){const s=a("OutboundLink");return l(),e(c,null,[d,n("p",null,[n("a",u,[m,p(s)])])],64)}var g=i(r,[["render",b]]);export{g as default};
