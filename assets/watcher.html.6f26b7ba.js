import{r as e,c as o,a as n,d as p,F as c,b as s,e as t,o as l}from"./app.9bc35547.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";const r={},i=n("h1",{id:"computed-\u548C-watch-\u7684\u539F\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#computed-\u548C-watch-\u7684\u539F\u7406","aria-hidden":"true"},"#"),s(" computed \u548C watch \u7684\u539F\u7406")],-1),k=n("p",null,[s("\u8BA1\u7B97\u5C5E\u6027\u548C\u4FA6\u542C\u5668\uFF0C\u5185\u90E8\u662F\u57FA\u4E8E "),n("code",null,"Watcher"),s(" \u5B9E\u73B0\u7684\u3002")],-1),b=s("\u9996\u5148\u770B\u4E00\u4E0B "),m=n("code",null,"Watcher",-1),d=s(" \u7684\u5B9A\u4E49\u3002"),h={href:"https://github.com/vuejs/vue/blob/v2.6.14/src/core/observer/watcher.js",target:"_blank",rel:"noopener noreferrer"},w=s("\u6E90\u7801"),y=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> uid <span class="token operator">=</span> <span class="token number">0</span>

<span class="token doc-comment comment">/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
  vm<span class="token operator">:</span> Component<span class="token punctuation">;</span>
  expression<span class="token operator">:</span> string<span class="token punctuation">;</span>
  cb<span class="token operator">:</span> Function<span class="token punctuation">;</span>
  id<span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token comment">// ...</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span>
    <span class="token parameter">vm<span class="token operator">:</span> Component<span class="token punctuation">,</span>
    expOrFn<span class="token operator">:</span> string <span class="token operator">|</span> Function<span class="token punctuation">,</span>
    cb<span class="token operator">:</span> Function<span class="token punctuation">,</span>
    options<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">?</span>Object<span class="token punctuation">,</span>
    isRenderWatcher<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>vm <span class="token operator">=</span> vm
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isRenderWatcher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span>_watcher <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>
    vm<span class="token punctuation">.</span>_watchers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token comment">// options</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// watch \u7684\u65F6\u5019\uFF0C\u662F\u5426\u9012\u5F52\u76D1\u542C\u3002\u7528\u4E8E \u4F7F\u7528\u5BF9\u8C61\u5B9A\u4E49\u7684 watch</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>deep <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>deep 
      <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>user
      <span class="token keyword">this</span><span class="token punctuation">.</span>lazy <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>lazy
      <span class="token keyword">this</span><span class="token punctuation">.</span>sync <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>sync
      <span class="token keyword">this</span><span class="token punctuation">.</span>before <span class="token operator">=</span> options<span class="token punctuation">.</span>before
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>deep <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lazy <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sync <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">=</span> cb
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token operator">++</span>uid <span class="token comment">// uid for batching</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token comment">// computed \u8BA1\u7B97\u5C5E\u6027\u521D\u59CB\u5316\u65F6\uFF0Clazy \u4E3A true</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dirty <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lazy <span class="token comment">// for lazy watchers</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>newDeps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>depIds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>expression <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span>
      <span class="token operator">?</span> expOrFn<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token comment">// parse expression for getter</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> expOrFn <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> expOrFn
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> <span class="token function">parsePath</span><span class="token punctuation">(</span>expOrFn<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> noop
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// data\u5185\u7684\u5C5E\u6027\u4F1A\u8D70 this.get()</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lazy
      <span class="token operator">?</span> <span class="token keyword">undefined</span>
      <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Evaluate the getter, and re-collect dependencies.
   */</span>
  <span class="token comment">// \u6536\u96C6\u4F9D\u8D56</span>
  <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06\u5F53\u524D watcher \u5B9E\u4F8B\u6307\u5411\u5230\u5168\u5C40\u4FDD\u5B58\u7684\u5BF9\u8C61(Dep.target)\u3002</span>
    <span class="token comment">// https://github.com/vuejs/vue/blob/v2.6.14/src/core/observer/dep.js#L54</span>
    <span class="token comment">// \u8FD9\u4E00\u6B65\u64CD\u4F5C\u7684\u76EE\u7684\u662F\u4E3A\u4E86\uFF0C\u5F53\u8BBF\u95EE\u5230\u67D0\u4E2Adata\u5185\u5C5E\u6027\u65F6\uFF0C\u53EF\u4EE5\u7ED9\u8FD9\u4E2Adata\u5185\u5C5E\u6027\u6DFB\u52A0\u89C2\u5BDF\u8005\u3002</span>
    <span class="token function">pushTarget</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> value
    <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">getter for watcher &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>expression<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> e
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token comment">// &quot;touch&quot; every property so they are all tracked as</span>
      <span class="token comment">// dependencies for deep watching</span>
      <span class="token comment">// \u9012\u5F52\u76D1\u542C</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>deep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">traverse</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u4ECE\u5168\u5C40\u4FDD\u5B58\u7684 targetStack \u6570\u7EC4\u4E2D\u5F39\u51FA\uFF0C\u5E76\u53D6\u6808\u9876\u7684 watcher\uFF0C\u91CD\u65B0\u6307\u5411 Dep.target</span>
      <span class="token comment">// https://github.com/vuejs/vue/blob/v2.6.14/src/core/observer/dep.js#L54</span>
      <span class="token function">popTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cleanupDeps</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> value
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Add a dependency to this directive.
   */</span>
  <span class="token function">addDep</span> <span class="token punctuation">(</span><span class="token parameter">dep<span class="token operator">:</span> Dep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> id <span class="token operator">=</span> dep<span class="token punctuation">.</span>id
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>newDeps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>depIds<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Clean up for dependency collection.
   */</span>
  <span class="token function">cleanupDeps</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span>length
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>dep<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dep<span class="token punctuation">.</span><span class="token function">removeSub</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */</span>
  <span class="token function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* istanbul ignore else */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>dirty <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sync<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">queueWatcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */</span>
  <span class="token function">run</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        value <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">||</span>
        <span class="token comment">// Deep watchers and watchers on Object/Arrays should fire even</span>
        <span class="token comment">// when the value is the same, because the value may</span>
        <span class="token comment">// have mutated.</span>
        <span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>deep
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// set new value</span>
        <span class="token keyword">const</span> oldValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">callback for watcher &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>expression<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span>
          <span class="token function">invokeWithErrorHandling</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cb<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> oldValue<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> info<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */</span>
  <span class="token comment">// \u8BA1\u7B97\u5C5E\u6027\uFF0C\u4F9D\u8D56\u6539\u53D8\u7684\u60C5\u51B5\u4E0B\uFF0C\u91CD\u65B0\u8BA1\u7B97</span>
  <span class="token function">evaluate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dirty <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * Depend on all deps collected by this watcher.
   */</span>
  <span class="token function">depend</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span>length
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br></div></div><h2 id="\u8BA1\u7B97\u5C5E\u6027-computed" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u5C5E\u6027-computed" aria-hidden="true">#</a> \u8BA1\u7B97\u5C5E\u6027 <code>computed</code></h2><h3 id="\u76EE\u7684" tabindex="-1"><a class="header-anchor" href="#\u76EE\u7684" aria-hidden="true">#</a> \u76EE\u7684</h3><ol><li>\u4ECE\u6A21\u677F\u4E2D\u62BD\u79BB\u903B\u8F91\uFF0C\u4F7F\u6A21\u677F\u7ED3\u6784\u6E05\u6670</li><li>\u7F13\u5B58\u5DF2\u5904\u7406\u7684\u6570\u636E\uFF0C\u53EA\u6709\u4F9D\u8D56\u9879\u6539\u53D8\u7684\u60C5\u51B5\u4E0B\u624D\u4F1A\u53BB\u91CD\u65B0\u8BA1\u7B97</li></ol><h3 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5B98\u65B9API: https://cn.vuejs.org/v2/api/#computed</span>
<span class="token comment">// ...</span>
computed<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4EC5\u8BFB\u53D6</span>
  <span class="token function-variable function">aDouble</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">*</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8BFB\u53D6\u548C\u8BBE\u7F6E</span>
  aPlus<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> v <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u6E90\u7801\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a> \u6E90\u7801\u89E3\u6790</h3>`,7),f={href:"https://github.com/vuejs/vue/blob/v2.6.14/src/core/instance/state.js#L168",target:"_blank",rel:"noopener noreferrer"},v=s("\u6E90\u7801"),g=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// lazy\u7528\u4E8E computed \u7684\u5C5E\u6027\u521D\u59CB\u5316\u7684\u65F6\u5019\uFF0C\u4E0D\u4F1A\u89E6\u53D1 getter\uFF0C\u4E5F\u5C31\u4E0D\u4F1A\u6536\u96C6\u4F9D\u8D56</span>
<span class="token keyword">const</span> computedWatcherOptions <span class="token operator">=</span> <span class="token punctuation">{</span> lazy<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">initComputed</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token operator">:</span> Component<span class="token punctuation">,</span> computed<span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// $flow-disable-line</span>
  <span class="token keyword">const</span> watchers <span class="token operator">=</span> vm<span class="token punctuation">.</span>_computedWatchers <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token comment">// computed properties are just getters during SSR</span>
  <span class="token keyword">const</span> isSSR <span class="token operator">=</span> <span class="token function">isServerRendering</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> computed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> userDef <span class="token operator">=</span> computed<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token comment">// \u5224\u65AD computed \u7684\u5C5E\u6027\u662F\u5426\u662F\u51FD\u6570;\u4E0D\u662F\u7684\u8BDD\uFF0C\u76F4\u63A5\u4F7F\u7528\u5BF9\u8C61\u7684 get</span>
    <span class="token comment">// \u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u8BA1\u7B97\u5C5E\u6027\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u5B9A\u4E49\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 {get: function, set: function} \u5B9A\u4E49</span>
    <span class="token keyword">const</span> getter <span class="token operator">=</span> <span class="token keyword">typeof</span> userDef <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">?</span> userDef <span class="token operator">:</span> userDef<span class="token punctuation">.</span>get
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> getter <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Getter is missing for computed property &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        vm
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isSSR<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// create internal watcher for the computed property.</span>
      watchers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>
        vm<span class="token punctuation">,</span>
        getter <span class="token operator">||</span> noop<span class="token punctuation">,</span>
        noop<span class="token punctuation">,</span>
        computedWatcherOptions
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// component-defined computed properties are already defined on the</span>
    <span class="token comment">// component prototype. We only need to define computed properties defined</span>
    <span class="token comment">// at instantiation here.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> vm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">defineComputed</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> userDef<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5C06computed\u7684\u5C5E\u6027\uFF0C\u6DFB\u52A0\u5728 vm \u7684\u5B9E\u4F8B\u4E0A\uFF0C\u8FD9\u6837\u53EF\u4EE5\u901A\u8FC7 this.XXX\u8BBF\u95EE</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">defineComputed</span> <span class="token punctuation">(</span>
  <span class="token parameter">target<span class="token operator">:</span> any<span class="token punctuation">,</span>
  key<span class="token operator">:</span> string<span class="token punctuation">,</span>
  userDef<span class="token operator">:</span> Object <span class="token operator">|</span> Function</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> shouldCache <span class="token operator">=</span> <span class="token operator">!</span><span class="token function">isServerRendering</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> userDef <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u975E\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u9700\u8981\u4F7F\u7528\u7F13\u5B58\u3002\u5373 computed \u5728\u4F9D\u8D56\u672A\u53D8\u5316\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528\u7F13\u5B58\u6570\u636E</span>
    sharedPropertyDefinition<span class="token punctuation">.</span>get <span class="token operator">=</span> shouldCache
      <span class="token operator">?</span> <span class="token function">createComputedGetter</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token function">createGetterInvoker</span><span class="token punctuation">(</span>userDef<span class="token punctuation">)</span>
    sharedPropertyDefinition<span class="token punctuation">.</span>set <span class="token operator">=</span> noop
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    sharedPropertyDefinition<span class="token punctuation">.</span>get <span class="token operator">=</span> userDef<span class="token punctuation">.</span>get
      <span class="token operator">?</span> shouldCache <span class="token operator">&amp;&amp;</span> userDef<span class="token punctuation">.</span>cache <span class="token operator">!==</span> <span class="token boolean">false</span>
        <span class="token operator">?</span> <span class="token function">createComputedGetter</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token function">createGetterInvoker</span><span class="token punctuation">(</span>userDef<span class="token punctuation">.</span>get<span class="token punctuation">)</span>
      <span class="token operator">:</span> noop
    sharedPropertyDefinition<span class="token punctuation">.</span>set <span class="token operator">=</span> userDef<span class="token punctuation">.</span>set <span class="token operator">||</span> noop
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>

  <span class="token comment">// \u7ED1\u5B9A\u5230 vm \u5B9E\u4F8B\u4E0A</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> sharedPropertyDefinition<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createComputedGetter</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">computedGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> watcher <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_computedWatchers <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_computedWatchers<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>watcher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C dirty === true\uFF0C\u5219\u91CD\u65B0\u8BA1\u7B97</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>watcher<span class="token punctuation">.</span>dirty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        watcher<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        watcher<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u53D6\u7F13\u5B58\u7684\u503C</span>
      <span class="token keyword">return</span> watcher<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br></div></div><p>\u81F3\u6B64\uFF0C<code>initComputed</code> \u7684\u521D\u59CB\u5316\u8FC7\u7A0B\u7ED3\u675F\u3002\u4E0B\u4E00\u9636\u6BB5\uFF0C\u5728 <code>mounted</code> \u9636\u6BB5\u4E4B\u524D\uFF0C\u4F1A\u6267\u884C\u4E00\u6B21 <code>render</code> \u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ...</span>
computed<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">fullName</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5047\u8BBE <code>computed</code> \u4E0A\u6709\u8BA1\u7B97\u5C5E\u6027 <code>fullName</code> \u65F6\uFF0C<code>render</code>\u65B9\u6CD5\u6267\u884C\u65F6\uFF0C\u8BBF\u95EE\u5230 <code>fullName</code> \uFF0C \u4F1A\u6267\u884C\u5C5E\u6027\u7684 <code>getter</code> (\u4E5F\u5C31\u662F <code>fullName</code> \u5B9A\u4E49\u7684\u51FD\u6570) \uFF0C\u8BBF\u95EE\u5230 <code>this.firstName</code> \u4F1A\u7ED9 <code>firstName</code> \u8FD9\u4E2A\u76D1\u542C\u5C5E\u6027\u6DFB\u52A0\u89C2\u5BDF\u8005(\u8BA1\u7B97\u5C5E\u6027 <code>fullName</code> \u8FD9\u4E2Awatcher )\u3002\u540C\u7406 <code>lastName</code> \u4E5F\u662F\u8FD9\u6837\u5904\u7406\u3002</p><p>\u6700\u540E\u6267\u884C\u8BA1\u7B97\u5E76\u7F13\u5B58 <code>fullName</code> \u8FD9\u4E2A\u503C\uFF0C\u3002</p><h2 id="\u4FA6\u542C\u5668-watch" tabindex="-1"><a class="header-anchor" href="#\u4FA6\u542C\u5668-watch" aria-hidden="true">#</a> \u4FA6\u542C\u5668 <code>watch</code></h2><p>\u5F53\u9700\u8981\u5728\u6570\u636E\u53D8\u5316\u65F6\u6267\u884C\u5F02\u6B65\u6216\u5F00\u9500\u8F83\u5927\u7684\u64CD\u4F5C\u65F6\u4F7F\u7528\u4FA6\u542C\u5668\u5C5E\u6027\u3002</p><h3 id="\u7528\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5-1" aria-hidden="true">#</a> \u7528\u6CD5</h3><p>\u7C7B\u578B\uFF1A{ [key: string]: string | Function | Object | Array }</p>`,9),_={href:"https://cn.vuejs.org/v2/api/#watch",target:"_blank",rel:"noopener noreferrer"},j=s("\u5B98\u7F51API"),x=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>watch<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;new: %s, old: %s&#39;</span><span class="token punctuation">,</span> val<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u65B9\u6CD5\u540D</span>
  b<span class="token operator">:</span> <span class="token string">&#39;someMethod&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8BE5\u56DE\u8C03\u4F1A\u5728\u4EFB\u4F55\u88AB\u4FA6\u542C\u7684\u5BF9\u8C61\u7684 property \u6539\u53D8\u65F6\u88AB\u8C03\u7528\uFF0C\u4E0D\u8BBA\u5176\u88AB\u5D4C\u5957\u591A\u6DF1</span>
  c<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    deep<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8BE5\u56DE\u8C03\u5C06\u4F1A\u5728\u4FA6\u542C\u5F00\u59CB\u4E4B\u540E\u88AB\u7ACB\u5373\u8C03\u7528</span>
  d<span class="token operator">:</span> <span class="token punctuation">{</span>
    handler<span class="token operator">:</span> <span class="token string">&#39;someMethod&#39;</span><span class="token punctuation">,</span>
    immediate<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4F60\u53EF\u4EE5\u4F20\u5165\u56DE\u8C03\u6570\u7EC4\uFF0C\u5B83\u4EEC\u4F1A\u88AB\u9010\u4E00\u8C03\u7528</span>
  e<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;handle1&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token function">handle2</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">handle3</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">/* ... */</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// watch vm.e.f&#39;s value: {g: 5}</span>
  <span class="token string">&#39;e.f&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="\u6E90\u7801\u89E3\u6790-1" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u89E3\u6790-1" aria-hidden="true">#</a> \u6E90\u7801\u89E3\u6790</h3><p>\u521D\u59CB\u5316\u65F6\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u7C7B\u578B\uFF0C\u8FDB\u5165\u4E0D\u540C\u7684\u521B\u5EFA\u8FC7\u7A0B\u3002</p>`,3),D={href:"https://github.com/vuejs/vue/blob/v2.6.14/src/core/instance/state.js#L293",target:"_blank",rel:"noopener noreferrer"},O=s("\u6E90\u7801"),F=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">initWatch</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token operator">:</span> Component<span class="token punctuation">,</span> watch<span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> watch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> handler <span class="token operator">=</span> watch<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> handler<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">createWatcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> handler<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">createWatcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createWatcher</span> <span class="token punctuation">(</span>
  <span class="token parameter">vm<span class="token operator">:</span> Component<span class="token punctuation">,</span>
  expOrFn<span class="token operator">:</span> string <span class="token operator">|</span> Function<span class="token punctuation">,</span>
  handler<span class="token operator">:</span> any<span class="token punctuation">,</span>
  options<span class="token operator">?</span><span class="token operator">:</span> Object</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9488\u5BF9\u4E0D\u540C\u7684 watch \u5B9A\u4E49\u65B9\u5F0F</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options <span class="token operator">=</span> handler
    handler <span class="token operator">=</span> handler<span class="token punctuation">.</span>handler
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> handler <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    handler <span class="token operator">=</span> vm<span class="token punctuation">[</span>handler<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> vm<span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span>expOrFn<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// ...</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$watch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token parameter">expOrFn<span class="token operator">:</span> string <span class="token operator">|</span> Function<span class="token punctuation">,</span>
  cb<span class="token operator">:</span> any<span class="token punctuation">,</span>
  options<span class="token operator">?</span><span class="token operator">:</span> Object</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Function <span class="token punctuation">{</span>
  <span class="token keyword">const</span> vm<span class="token operator">:</span> Component <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPlainObject</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createWatcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> expOrFn<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  options<span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token comment">// \u521D\u59CB\u5316 watcher \u5B9E\u4F8B\u65F6\uFF0C\u4F1A\u6267\u884C\u4E00\u6B21 watcher.get() \u548C expOrFn</span>
  <span class="token keyword">const</span> watcher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> expOrFn<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token comment">// immediate\u4E3Atrue\uFF0C\u5219\u7ACB\u5373\u6267\u884C watcher \u7684 handler</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> watcher<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">handleError</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">callback for immediate watcher &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>watcher<span class="token punctuation">.</span>expression<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">unwatchFn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    watcher<span class="token punctuation">.</span><span class="token function">teardown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div>`,1);function W(N,C){const a=e("OutboundLink");return l(),o(c,null,[i,k,n("p",null,[b,m,d,n("a",h,[w,p(a)])]),y,n("p",null,[n("a",f,[v,p(a)])]),g,n("p",null,[n("a",_,[j,p(a)])]),x,n("p",null,[n("a",D,[O,p(a)])]),F],64)}var P=u(r,[["render",W]]);export{P as default};
