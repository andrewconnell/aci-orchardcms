# Content Snippets Used in Posts

## Callouts

```html
<div class="bs-callout">
  <h4>message heading</h4>
  lip sorem
</div>

<div class="bs-callout bs-callout-primary">
  <h4>message heading</h4>
  lip sorem
</div>

<div class="bs-callout bs-callout-success">
  <h4>message heading</h4>
  lip sorem
</div>

<div class="bs-callout bs-callout-warning">
  <h4>message heading</h4>
  lip sorem
</div>

<div class="bs-callout bs-callout-danger">
  <h4>message heading</h4>
  lip sorem
</div>
```

When using a blockquote, use this. Not the font is bigger.

```html
<blockquote>
  <p>some content goes here</p>
  <footer>some footer goes here</footer>
</blockquote>
```


## Code Listings

For inline code, use:

```html
<p><code>let x = 'code to list';</code></p>
```

For code blocks, use Gists when possible, otherwise use:

```html
<pre>
let x = 'this is the first line, right after the opening code tag';
let y = 'this is the second line ending right before the closing code tag';
</pre>
```

Previously I was using Google's PrettyPrint. Plenty of posts will use it so kept for backwards compatibility, but don't use this in the future.

```html
<pre class="prettyprint"><code>let x = 'this is the first line, right after the opening code tag';
let y = 'this is the second line ending right before the closing code tag';</code></pre>
```

## Images

Popup Link:

```html
<img class="imagePopup" />
```
 
Right-align:

```html
<img class="imageRight" />
```

## Download Forms

1. Get the form ID from Drip & repålace all `{{{DRIPFORMID}}}`
  - there are two (2) instances to replace

> The fields with `data-drip-attribute` will be overwritten with the values from the form. The values in the form below are placeholders until they get updated.

```html
<div class="dl-container">
  <div class="dl-container-form">
    <form action="https://www.getdrip.com/forms/{{{DRIPFORMID}}}/submissions" method="post" data-drip-embedded-form="{{{DRIPFORMID}}}">
      <h2 data-drip-attribute="headline">Download this Post's Resources</h2>
      <div data-drip-attribute="description">Enter your email and I will send you a ZIP of the resources.<br /><em>No spam &amp; I won't share your email with anyone.</em></div>
      <input class="subscribe-email" type="email" name="fields[email]" placeholder="your email address">
      <button type="submit" data-drip-attribute="sign-up-button">send me the download</button>
    </form>
  </div>
</div>
```