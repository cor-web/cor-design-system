The srcset attribute enhances the <img> element, allowing
us to supply a variety of different image sources for different device characteristics. srcset lets the browser select the
best image; a 2x image on a 2x display, for example.

When the browser encounters srcset, it parses the comma-separated list of images and conditions before making
any image requests. Only the most appropriate image is
then fetched and rendered.

In the example above, we use srcset to handle different
pixel densities. If the display is standard resolution, the
browser will use the 1x image and if the display is a 2x highdpi screen, we’ll use the 2x.
All modern browsers support srcset. Older, legacy browsers
will simply use the default image specified by the src attribute. This is one reason it’s key to include a 1x image that
can be loaded for any device, as seen above.
When using the x descriptor (e.g. 1x), users will always get
the same image on devices with a similar device pixel ratio,
regardless of it being a large-screen laptop or a smartphone
with the same device pixel ratio.
