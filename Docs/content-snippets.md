# Content Snippets Used in Posts

## Code Listings

For inline code, use:

```html
<p><code>let x = 'code to list';</code></p>
```

For code blocks, use Gists when possible, otherwise use:

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

1. Get the form ID from Drip & replace all `{{{-DRIPFORMID-}}}`
  - there are three instances to replace

> The fields with `data-drip-attribute` will be overwritten with the values from the form. The values in the form below are placeholders until they get updated.

```html
<div class="dl-container">
  <div class="dl-container-form">
    <p data-drip-attribute="headline" class="dl-container-form-title">Download this Post's Resources</p>
    <p data-drip-attribute="description">Enter your email and I will send you a ZIP of the resources. No spam &amp; I won't share your email with anyone.</p>
    <form action="https://www.getdrip.com/forms/{{{-DRIPFORMID-}}}/submissions" method="post" data-drip-embedded-form="{{{-DRIPFORMID-}}}" data-drip-id="{{{-DRIPFORMID-}}}">
      <input class="subscribe-email" type="email" name="fields[email]" placeholder="your email address">
      <button type="submit" data-drip-attribute="sign-up-button">send me the download</button>
    </form>
  </div>
</div>
```