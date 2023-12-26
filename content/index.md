## Picture

This picture changes source depending on theme.

![[Poverty Trap Diagram-dark.png]]

### How it works?

The [OFM transformer](https://github.com/flyingcakes85/quartz-image-theme/commit/3c442c93ef4113881c91dc0f64f615d115732244) detects whether the image url has a theme ending either `-dark.png` or `-light.png`. If yes, it outputs a `<picture>` element which can react to theme.

The extension `.png` is hardcoded. Will need to do something about it :p
