# vue-lightbox

> Simple lightbox component for vue

## How to use it

``` bash
# import 
import Lightbox from './components/Lightbox.vue'
	...
# register component 
Vue.Component("Lightbox",Lightbox)

# use
# some album pictures will be grouped
<lightbox src="http://pic1.jpg" caption="this is pic caption" album="albumA"></lightbox>
<lightbox src="http://pic2.jpg" caption="this is pic caption" album="albumA"></lightbox>
<lightbox src="http://pic3.jpg" caption="this is pic caption" album="albumB"></lightbox>


```

## Options

|        prop        |   type  | required |          default          |                                              desc                                              |
|--------------------|---------|----------|---------------------------|------------------------------------------------------------------------------------------------|
| src                | String  | yes      |                           | picture url                                                                                    |
| album              | String  | no       | ""                        | group of pictures                                                                              |
| caption            | String  | no       | ""                        | some picture desc will display under the popup                                                 |
| show-index         | Boolean | no       | true                      | show the picture number index                                                                  |
| index-tmpl         | String  | no       | "${d} of ${total} images" | picture number index tmpl,${d} will be replace by index,${total} will be album's picture count |
| click-overlay-hide | Boolean | no       | true                      | is click to close lightbox                                                                     |



## Todo



- add watch when props change

- add for different browser
