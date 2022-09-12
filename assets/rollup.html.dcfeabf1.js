import{r as p,c as e,a as n,d as o,F as t,b as s,e as l,o as c}from"./app.9bc35547.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const u={},i=n("h1",{id:"rollup",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rollup","aria-hidden":"true"},"#"),s(" RollUp")],-1),k=n("p",null,[n("code",null,"rollup"),s(" \u4E3B\u8981\u7528\u4E8E\u6253\u5305\u7C7B\u5E93\u6587\u4EF6\uFF0C\u9002\u5408\u5C06\u591A\u4E2A\u6587\u4EF6\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u4EF6\u3002\u540C\u65F6 "),n("code",null,"tree-shaking"),s(" \u4F1A\u5C06\u5185\u90E8\u6CA1\u6709\u4F7F\u7528\u5230\u7684\u4EE3\u7801\u79FB\u9664\u6389\u3002")],-1),b={href:"https://github.com/vandvassily/rollup-demo",target:"_blank",rel:"noopener noreferrer"},m=s("DEMO"),d=l(`<h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// rollup.config.js</span>
<span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-json&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> resolve <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-node-resolve&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-commonjs&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// import babel from &#39;rollup-plugin-babel&#39;;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    input<span class="token operator">:</span> <span class="token string">&#39;src/main.js&#39;</span><span class="token punctuation">,</span>
    external<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jquery&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    output<span class="token operator">:</span> <span class="token punctuation">{</span>
        file<span class="token operator">:</span> <span class="token string">&#39;bundle.umd.js&#39;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;Epg&#39;</span><span class="token punctuation">,</span>
        format<span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span>
        globals<span class="token operator">:</span> <span class="token punctuation">{</span>
            lodash<span class="token operator">:</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">,</span>
            jquery<span class="token operator">:</span> <span class="token string">&#39;$&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    watch<span class="token operator">:</span> <span class="token punctuation">{</span>
        include<span class="token operator">:</span> <span class="token string">&#39;src/**&#39;</span><span class="token punctuation">,</span>
        exclude<span class="token operator">:</span> <span class="token string">&#39;node_modules/**&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// babel({</span>
        <span class="token comment">//     exclude: &#39;node_modules/**&#39;, // \u9632\u6B62\u6253\u5305node_modules\u4E0B\u7684\u6587\u4EF6</span>
        <span class="token comment">//     runtimeHelpers: true // \u4F7Fplugin-transform-runtime\u751F\u6548</span>
        <span class="token comment">// })</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h2><ol><li><code>rollup-plugin-json</code></li><li><code>rollup-plugin-node-resolve</code> \u7528\u4E8E\u5F15\u5165\u5305\u7684\u5730\u5740\u67E5\u627E</li><li><code>rollup-plugin-commonjs</code></li><li><code>rollup-plugin-babel</code> \u7528\u4E8EES6\u8F6CES5</li></ol>`,4);function g(h,_){const a=p("OutboundLink");return c(),e(t,null,[i,k,n("p",null,[n("a",b,[m,o(a)])]),d],64)}var v=r(u,[["render",g]]);export{v as default};
