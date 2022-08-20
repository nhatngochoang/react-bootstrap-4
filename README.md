# Install Font Awesome

```bash
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```
🦔🦔🦔 Using
// Light:
<FontAwesomeIcon icon={["fal", "coffee"]} />
// Regular:
<FontAwesomeIcon icon={["far", "coffee"]} />
// Solid
<FontAwesomeIcon icon={["fas", "coffee"]} />
// ...or, omit as FontAwesome defaults to solid, so no need to prefix:
<FontAwesomeIcon icon="coffee" />
// Brand:
<FontAwesomeIcon icon={["fab", "github"]} />

# Width , Height Classes
w-{n}
h-{n}

# Row Classes
.justify-content-(start / center / end)
# Column Classes
Small Mobile  ▶ .col-
Big Mobile    ▶ .col-sm-
Tablet        ▶ .col-md-
Small Desktop ▶ .col-lg-
Large Desktop ▶ .col-xl-

.col ▶ Auto width
.align-self-(start / center / end)
.order-{n}
# Công thức
col + màn hình(sm,md,lg,xl,không dùng) + (tỉ lệ cột trong dòng= 12/ số cột mong muốn)

VD: col-xl-3 col-lg-4 col-md-6 col-sm-12

# bg, text, border, variant
- primary
- secondary
- success
- danger
- warning
- info
- dark
- light

# Button, Input
size: sm,lg

# Flexbox
- d-flex 
flex-(row|column) flex-lg-(row|column)  
- justify-content-start 
align-items-center
- flex-wrap

# Text
align: text-(start / center / end)
font-size: fs-{n}
font-weight: fw-


# Visible
d-none