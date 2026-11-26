# Updated HTML and CSS: Magic Shop

- from commit `0c60c6c`

## Contents
1. [Fonts and text sizes](#1-fonts-and-text-sizes)
2. [Product search bar](#2-product-search-bar)
3. [Review cards](#3-review-cards)
4. [About section: responsive](#4-about-section-responsive)

---

## 1. Fonts and text sizes

### 1a. Load the Google Fonts
- **File:** `index.html`, `products.html`, `subscription.html` (and every new page)
- **Where:** inside `<head>`, just above `<!--Custom css-->`

```html
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Lilita+One&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap">
```

### 1b. Font variables
- **File:** `css/style.css`
- **Replaces:** the `:root{ }` rule at the top

```css
:root{
    --main-bg: #5C0D1D;
    --main-text: #FFF8E8 ;
    --font-shop-name: 'Lilita One', sans-serif;
    --font-paragraph: 'Lobster Two', cursive;
    --font-product: 'Cormorant Garamond', serif;
}
```

### 1c. Paragraph font and size
- **File:** `css/style.css`
- **Where:** new rule, straight after the closing `}` of `body{ }`

```css
p{
    font-family: var(--font-paragraph);
    font-size: 1.2rem;
}
```

### 1d. Shop name font
- **File:** `css/style.css`
- **Replaces:** the `.shop-logo{ }` rule (only the `font-family` line changed: it was `Arial, Helvetica, sans-serif`)

```css
.shop-logo{
    color:#F7E9C7 !important;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    font-family: var(--font-shop-name);
    text-shadow: 1px 2px 3px rgba(0,0,0,0.5);
}
```

### 1e. Bigger paragraph sizes in the footer and Happy Hour
- **File:** `css/style.css`
- **Replaces:** these four rules (only `font-size` changed)

```css
.footer-bottom p{
    font-size: 1rem;
    margin: 0;
}
```

```css
.footer-bottom .footer-message{
    font-size: 0.9rem;
    margin-top: 0.2rem;
}
```

```css
.happy-hour-container .header p{
    font-size: 1.25rem;
    line-height: 1.7;
    color: #FFF8E8;
}
```

```css
.happy-hour-container .saving{
    font-size: 1.4rem;
    color: #F7C873;
    margin-bottom: 1.2rem;
}
```

### 1f. Product name font and description size
- **File:** `css/style_shop.css`
- **Replaces:** the `.shop-product-name{ }` and `.shop-product-desc{ }` rules

```css
.shop-product-name{
    font-family: var(--font-product);
    font-size: 26px;
    font-weight: 700;
    color: #2A060B;
}
```

```css
.shop-product-desc{
    font-size: 17px;
    color:#3B0D12;
    margin-bottom: 15px;
    border-bottom:1px solid green;
    line-height:1.4;
    padding-bottom: 10px;
}
```

---

## 2. Product search bar

### 2a. HTML
- **File:** `products.html`
- **Where:** inside `<div class="shop-search-container">`, under the `<h1>`
- **Replaces:** the old `<input ... id="shopSearchBox">` line and the `<i class="bi bi-search shop-search-btn"></i>` line

```html
      <div class="shop-search-bar">
        <input type="text" class="shop-search-box" id="shopSearchBox" placeholder="What's on your mind?">
        <label for="shopSearchBox" class="shop-search-btn">
          <i class="bi bi-search" aria-hidden="true"></i>
          <span class="visually-hidden">Search products</span>
        </label>
      </div>
```

### 2b. CSS
- **File:** `css/style_shop.css`
- **Where:** after the `.shop-search-container h1{ }` rule, before `.shop-category-container{`
- **Replaces:** the old `.shop-search-container .shop-search-box{ }`, `.shop-search-box:focus{ }` and `.shop-search-btn{ }` rules

```css
/*Search bar: text box and round search button in one shape*/
.shop-search-bar{
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 360px;
    margin: 12px auto 16px auto;
    padding: 4px;
    background-color: #fffaf3;
    border: 2px solid #A52A3A;
    border-radius: 50px;
    transition: max-width 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
/*bar grows when the user clicks inside it*/
.shop-search-bar:focus-within{
    max-width: 520px;
    border-color: #5C0D1D;
    box-shadow: 0 0 0 4px rgba(165,42,58,0.2);
}
.shop-search-bar .shop-search-box{
    flex: 1;
    min-width: 0;
    padding: 8px 16px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #2A060B;
    font-size: 16px;
}
.shop-search-bar .shop-search-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: #A52A3A;
    color: #FFF8E8;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.25s ease, transform 0.25s ease;
}
.shop-search-bar .shop-search-btn:hover{
    background-color: #5C0D1D;
    transform: scale(1.06);
}
```

---

## 3. Review cards

### 3a. HTML
- **File:** `index.html`
- **Where:** inside `<section class="shop-review-section">`, under the `<div class="Title">...</div>`
- **Replaces:** the whole old `<div class="shop-review-card-container">` ... `</div>` block (all three cards)

```html
      <div class="shop-review-card-container">
        <!--Review1-->
        <div class="review-card">
          <img src="images/review1.jpg" alt="review1">
          <h2>Thalia</h2>
          <div class="review-stars" role="img" aria-label="5 out of 5 stars">
            <i class="bi bi-star-fill" aria-hidden="true"></i>
            <i class="bi bi-star-fill" aria-hidden="true"></i>
            <i class="bi bi-star-fill" aria-hidden="true"></i>
            <i class="bi bi-star-fill" aria-hidden="true"></i>
            <i class="bi bi-star-fill" aria-hidden="true"></i>
          </div>
          <p class="feedback">
            Fast delivery and great flavour!
            I look forward to my morning coffee everyday.
            <br>
            It's modern, it's clean,it's comfortable to sit anywhere to enjoy coffee.
          </p>
        </div>
        <!--Review2-->
        <div class="review-card">
          <img src="images/review2.jpg" alt="review2">
          <h2>Smith</h2>
          <div class="review-stars" role="img" aria-label="5 out of 5 stars">
            <i class="bi bi-star-fill" aria-hidden="true"></i>
            <i class="bi bi-star-fill" aria-hidden="true"></i>
            <i class="bi bi-star-fill" aria-hidden="true"></i>
            <i class="bi bi-star-fill" aria-hidden="true"></i>
            <i class="bi bi-star-fill" aria-hidden="true"></i>
          </div>
          <p class="feedback">
            AMAZING coffee, fast shipping, and the packaging is perfect!
          </p>
        </div>
        <!--Review3-->
        <div class="review-card">
          <img src="images/review3.jpg" alt="review3">
          <h2>Jihoon</h2>
          <div class="review-stars" role="img" aria-label="5 out of 5 stars">
            <i class="bi bi-star-fill" aria-hidden="true"></i>
            <i class="bi bi-star-fill" aria-hidden="true"></i>
            <i class="bi bi-star-fill" aria-hidden="true"></i>
            <i class="bi bi-star-fill" aria-hidden="true"></i>
            <i class="bi bi-star-fill" aria-hidden="true"></i>
          </div>
          <p class="feedback">
            A hidden gem! Expect great friendly service and really good coffee.
            <br>
            A variety of milks available and fresh coffee beans.
            Competitive prices.Waht's not to like?
          </p>
        </div>
      </div>
```

### 3b. CSS
- **File:** `css/style.css`
- **Where:** under the `/*Section2: Review Section*/` comment
- **Replaces:** the old `.shop-review-section{ }`, `.shop-review-card-container{ }`, `.review-card{ }`, `.shop-review-section .review-card img{ }` and `.review-card:hover{ }` rules. Keep `.shop-review-section .Title{ }` after it.

```css
.shop-review-section{
    background-color:#FFF3D6;
    padding: 4rem 1.5rem;
}
/*flex-wrap + center: leftover cards stay in the middle*/
.shop-review-card-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem 2rem;
    max-width: 1100px;
    margin: 5rem auto 0 auto;
}
.review-card{
    flex: 1 1 280px;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: white;
    color: #6B0F1A;
    padding: 0 1.5rem 1.5rem 1.5rem;
    border-radius: 20px;
    box-shadow: 0 6px 18px rgba(64,7,13,0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.review-card:hover{
    transform: translateY(-8px);
    box-shadow: 0 14px 28px rgba(64,7,13,0.25);
}
/*negative margin lifts the photo over the top edge of the card*/
.review-card img{
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid #FFF3D6;
    box-shadow: 0 0 0 3px #800020;
    background-color: white;
    margin-top: -55px;
    margin-bottom: 1rem;
}
.review-card h2{
    font-size: 1.6rem;
    margin-bottom: 0.4rem;
}
.review-stars{
    display: flex;
    gap: 5px;
    color: #E0A526;
    font-size: 1.1rem;
    margin-bottom: 1rem;
}
.review-card .feedback{
    color: #4A2A2A;
    line-height: 1.6;
    margin-bottom: 0;
}
```

---

## 4. About section: responsive

### 4a. Tablet and phone (up to 991px)
- **File:** `css/style.css`
- **Where:** inside `@media (max-width: 991.98px){`, just above `/* Happy hour: image full width on top ... */`

```css
    /* About: one column, image on top, text below */
    .shop-about-section{
        grid-template-columns: 1fr;
        gap: 0;
    }
    .content-image-container img{
        display: block;
        width: 100%;
        height: 420px;
        object-fit: cover;
        object-position: center 20%; /*keeps the COFFEE sign visible*/
        margin-top: 0;
    }
    .content{
        grid-area: auto;
        transform: none;
        padding: 2.5rem 2rem;
    }
```

### 4b. Small phones (up to 575px)
- **File:** `css/style.css`
- **Where:** inside `@media (max-width: 575.98px){`, just above `/* Happy hour: one column ... */`

```css
    /* About: shorter image, smaller headings */
    .content-image-container img{
        height: 260px;
    }
    .content{
        padding: 2rem 1.25rem;
    }
    .content > h1{
        font-size: 1.8rem;
    }
    .content > h3{
        font-size: 1.2rem;
        margin-bottom: 1.25rem;
    }
```
