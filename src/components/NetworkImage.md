# NetworkImage Component

`NetworkImage` component allows developers to provide users with better
experience regarding displaying remote images.

It requires a lower quality image as its prop to display while loading
a high resolution version. In addition, it display a progress bar
indicating how much data is remaining to be downloaded.

To make it flexible, it accepts `width` and `height` props that determine
the image's size. Additionally, when image is successfully loaded the
component invokes the `renderImage` callback to render an image provided
by the developer.
