(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2qYH":function(t,s,e){"use strict";e.r(s);var a=e("A6W1"),i=e("BA+P"),b={components:{Author:a.a,PostCard:i.a},metaInfo:{title:"Hello, world!"}},o=e("KHd+"),r=null,n=Object(o.a)(b,(function(){var t=this.$createElement,s=this._self._c||t;return s("FullLayout",[s("h3",[this._v("\n    # "+this._s(this.$page.tag.title)+"\n  ")]),s("div",{staticClass:"posts"},this._l(this.$page.tag.belongsTo.edges,(function(t){return s("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)])}),[],!1,null,null,null);"function"==typeof r&&r(n);s.default=n.exports},A6W1:function(t,s,e){"use strict";var a={props:["showTitle"]},i=(e("ArLL"),e("KHd+")),b=e("Kw5r"),o=b.a.config.optionMergeStrategies.computed,r={metadata:{siteName:"Kawa Entertainment"}},n=function(t){var s=t.options;s.__staticData?s.__staticData.data=r:(s.__staticData=b.a.observable({data:r}),s.computed=o({$static:function(){return s.__staticData.data}},s.computed))},c=Object(i.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"author"},[s("g-image",{staticClass:"author__image",attrs:{alt:"Author image",src:e("cBFC"),width:"180",height:"180",blur:"5"}}),this.showTitle?s("h1",{staticClass:"author__site-title"},[this._v("\n\t\t"+this._s(this.$static.metadata.siteName)+"\n\t")]):this._e(),s("p",{staticClass:"author__intro"},[this._v("\n\t\tA simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.\n\t")]),this._m(0)],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"author__links"},[s("a",{attrs:{href:"//twitter.com/gridsome"}},[this._v("Follow on Twitter")]),s("a",{attrs:{href:"//github.com/gridsome/gridsome-starter-blog"}},[this._v("GitHub")])])}],!1,null,null,null);"function"==typeof n&&n(c);s.a=c.exports},ArLL:function(t,s,e){"use strict";e("bJc6")},"BA+P":function(t,s,e){"use strict";var a=e("n6yM"),i=e("PpWc"),b={components:{PostMeta:a.a,PostTags:i.a},props:["post"]},o=(e("YDir"),e("KHd+")),r=Object(o.a)(b,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"post-card content-box"},[t.post.cover_image?e("div",{staticClass:"bg-img",style:"background-image: url("+t.post.cover_image.src+")"}):t._e(),e("div",{staticClass:"post-card__content"},[e("h4",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),e("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),e("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),e("g-link",{staticClass:"post-card__link",attrs:{to:t.post.internalLink?t.post.internalLink:t.post.path}},[t._v("Link")])],1)])}),[],!1,null,null,null);s.a=r.exports},GsXb:function(t,s,e){"use strict";e("YUMm")},IHs4:function(t,s,e){},PpWc:function(t,s,e){"use strict";var a={props:["post"]},i=(e("GsXb"),e("KHd+")),b=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(s){return e("g-link",{key:s.id,staticClass:"post-tags__link",attrs:{to:s.path}},[e("span",[t._v("#")]),t._v(" "+t._s(s.title)+"\n  ")])})),1)}),[],!1,null,null,null);s.a=b.exports},QjhJ:function(t,s,e){},YDir:function(t,s,e){"use strict";e("QjhJ")},YIUa:function(t,s,e){"use strict";e("IHs4")},YUMm:function(t,s,e){},bJc6:function(t,s,e){},cBFC:function(t,s){t.exports={type:"image",mimeType:"image/png",src:"/assets/static/pidge.e6b6009.5cff519a8ea66641f64db5ae78c2376c.png",size:{width:180,height:180},sizes:"(max-width: 180px) 100vw, 180px",srcset:["/assets/static/pidge.e6b6009.5cff519a8ea66641f64db5ae78c2376c.png 180w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-cc986e3d774863ef12f09ff588d8152d'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-cc986e3d774863ef12f09ff588d8152d)' width='180' height='180' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC%2baJAAAACXBIWXMAAAsSAAALEgHS3X78AAAXaUlEQVRo3u2aB1RTab7AcWZn5s2%2bbbM7MzuAlEASIkVHRRAsKCJVqtRAAiQkhJBGAgmQAKFGepciXZoK0hUpAlJEepUmAgMiCDZABCn3fTi7e/ad3dnVGZyz75253hNv7uHc%2b//9%2b//7IrTv//gh9AvALwC/APwC8P8MQFZWVv7tIScn%2b/YAd/aB650b4L//TIC/Cg1E3odAIMTFxcXExCQkYJIwaZgUXFIKLiEpJfb2KwIpA/54F0F%2bBIDsW03KvlXqjlZRKJS0tJSoqOheMXE4AqWmdhpnZ%2b/N5cRHBGYlhOUlBafH8MO8nJlES2sTbTVVJQQCKS4BQ6F2sH9uACQcjkQgJGDSomKSoqJi3wiLiEtIAhbNs1oMGj09ObaruXJhrGVz9h70%2bM6bicq1sdLXI0XgXBstfjNW%2bqK/YLIxvT4vhEWwlEGCfygFeTnwWKCCt2b8wABAYXA44ls5FMFSj2Jv6s5yDuTzMpNiB3o61l4tQOsPoKWON%2bMVL/vyFzpzHrdfftyePdeR%2b/fnk668xa78l71XV3qvlif6KB3cD5OGK8jLAxRhYWHZn8EC3xv9zHFljoNZnBuuLi3yeectaGUegha3FhrWH9xYGix63lew2HNloTt/oSsfSPykOw9cf/%2b50Jn/BJDcy55pzHjWmtucKTipfFgajth5MlIKBM%2bPcKr3jgHg9JIwqT/88UtvLu/RcPt8e9mblSUIWoOedWzP1r1%2bcGN5sGgHo79gh6Q7f7H7CiABSM96r4LrJ515823Zc3ezJmtT5urSO/PDTx5VFN4rTrDQPfytAnCqDwsApJeGw8FbblaUQBvT820596/FQNvT0NYraLkXej22Odv8aqhoZajk1VDx69Gy1eFScPGyr/B5f%2bHqaBm4D07gRbMtWY/uZIzfSlqoz8gLdv3yy6%2bjvUmK38p/WABgXxkZGTk5%2bcbqou25lrm2jPbskLGy5M3vGjcWBqG5%2bq2V77Zfjb9%2bUA6E3phv23rcDM01bM01b03XPB8oXp%2b%2b/ebhzc2JyvXxG/Ntl2ebMqbr0yaqLk1VJQdSbRwsdGBS0kBBHxAA5EyQKHMT/DYmKmdaM2bvZJQHsgYLY2dqLq8%2bqN4YL1%2bb79l%2bcm9H8SMl20%2b7oOX70Hzj9uspaLF1daZ16eFt8HVzqgqab1qdbpltTp9tznrUlAkwHjdlEq0Nvv5GVG6nksh%2bEIAd6cUlCWj95f6rs62XH7VkjeSH57o4tF8O7skIWRosW%2boFHl%2b89vDWs%2b4rL/oLgSOtjpS%2bGb%2bxPnV7%2b/Gd9dGqxa6i7dfD0OLd7cUWaPP5y7HbL/quAB9b6Miba8/ZmqoK9mGAWvK%2bRnhXAOCbKCSi7XrEfFMmyC2jxbEdcT7hNiadly80RPIe1Wc967g6mBsGpHnSngti90ln/vy9nLmW7OWBgs2Zmpc9xd9Vpq5O1m7P3dmcqd5%2bPrC2OLr%2b6Db0pGl9ohIYbWWkBNoeCvTligiLgvq4ywCg3u4Vk3TCGs5UJY%2bWxoFM0pXoV%2b/Pop491ZMdXBbA7EoTPO260hzjPXglYrouFSTKnVRzL3uy6lJvXtiLnoKVwZLha7FzjVlrY%2bXAMqvDJa/n%2bpbHq6BnrdsLzeBzfb5xfbl/c3PFytxKQkL83e0g9I7JR0xcojzNdyQrZKI6%2bbv61OZA1lUXAt/crDMjqCTYNZuBn2vI6L0SUcKnjxfHPqi4CBIUAHjUmNGTHVoRwJqsS5soiR8rjF4ZKl4aKAK1bG2%2b8/lA%2bavB4lfjVdvrQ9tr4yuP%2byAI6mxrh0vD3z0ShN4l%2bYBac0zlcN/1qDo/5nx7ztC1yFtMQo6rc46vT004pzYlwFVLYzg77Lva1MpIj2qB61BeeHeGYLrm0tP2vKdtuT0ZghSabVkQ63YIB1hvafD6Ymfe6nTdfEfBdG3q895C6EkjtDT4arZzc6kD2l5AW9q8uxGE3kH9sqCRtDQ6Wxvlec2V%2bHKwoCddUEywzvXzXOhqy3UljZUnBtjbpTiiZyuTp2ouJbMJFT60geSAK26OaVynTD4ji8/0sTBRgyM05eQFVLvZ9pynPVeWRstmGjKHr0UuduZvz9RuTdeuT9WuP6qBoKnQC4JvvhFWUFDYPQBJKbyptsDWJIuFB%2bmlM9m/mIR1MzOO43rQ9XSZZjp5kSGxZFImDfusIbPrWoTB0YOOZ05S1E8TVVRtj6oy9XQSGA7xZKztyaMYzTPxfArQwovB6%2bOlF7tTAkDwgMrwortgsS1/ZbgEejOYdikJpKN3DOV3AJCVlZCGW5w5bn1COZOFXxkqAm/Nx6Pp%2broCR4If1sbgwEElBLwmKy2OSolxsKhP9FGWRymI7MWoqpLPnA40M/Az0Y8lWDcEs8tcCdUpvtcTvR/eSXvWX9CTGtgW5/Oir2B5sHimPgNE/HxrNrTYkpqYuJsAIAZgCKT2kUNnFWQjbM1WBgru54ZlYc2KggNW21vGc3Lq/QUOx9QuerpDcxO3kxPCHfFYNTUHjVPuBgbXyPRcB%2bccB3IhiZFDdMrC2ZeGcJ72X5tpubw5XHLTz6UggDHfnf%2bi79rkzcSR6zFTNcnQbIPA10dYRFRhtwB2xgAUSklBXgUlw9I5s9CYOVGZlIezqokLf1FXM5WZNRqd0OMdOJ6XuzU9Ai1OveltH0tLv%2bMTcJ3MCMHYprLdwJlAocQ6EGKsccF2tiMNKQOVCaFMOyPlg8nu5DQeK86N1JMfOnQl4kFF/OroDTsLMwlJ2K4F8d8cSUpc3OTwtyOXQ5505VexSTle7s8qyit5/CwGsy4gaCwjE5oe2Xw4%2bLqvba60eCAs5k5waHFagh%2bLZq2no3/82KlDSpJfiXzymZCo8Fef/9dnwl/8nqSpHmWHS8WTIu0cMrwowzkhEzcTB8oTvpWVk0GhZHe3EgN9iMNg8lKwSg9y342LhR6kIjaz0j%2bIbmBwwYmYwue1ZaauDHdBM6NrAx3zN8qG4hPjPThfffXlETGYtyOp5nbJqWNYEaFQhV9F7BH69Le//jTbBReFtgzRNrhCImey3NjWVo2xXgt1aQneTsIie9%2b9GL9HMwfGP3EpafwJFWAEZytdFSkppIjI7z7/XO2kmjOFrHnqdFpYKPR8eu1%2b12LtrceFBeVpSScUDjxpa%2b9pHfPk5QkJCX38sZTEN71CQn8Io1k1ejNY6hrZWEIRkZJPpkU6kWrDPR5XXcLqq4OmS353K/HfzfOykpKSF%2b0tutOCYCJfCwntuX79OgRtb21sax5nIsRlNqYGoYeDL5rr3rQ1t5cXRHjzIWjTP6bxqC6QW/r3whZSh5iudrqtKUElVBxORbWcze3yv5CEI8UzKJ2Jvp1ZgkPyKDAVyO56M/e3jIRE7Tsog7zl6XyVRfj1Z58NDg6OjAyfMGoR%2bgQDdFx3JReae7jU3rTeeXektqLrXhvoDkbGpnJH1xyvLmmaJRLP6LRlhXck%2bRc42caYmydZ27cGhUTbOjAsTLsS/LJ9qWJi4u/VkL7/SCkrK4lA6CodrmKTD4vv1dbR3XizWda64pr6cK8yLT8xE5odXWprelZXvdx7b7Kns7m6Kjsimkbn%2bLJotxiUpuCQ8kheHosQbWV0GUescGbeYvPSqbRCHmU0/QLVQk8U%2bI/8hwT4vjkFweCufzaX5WKqqOTB598oLvQpLAmv6uitqd4a7l5pb1qsqQQMTxuqRwryZgryJ5OThqNiVsvL%2b1OT4qjYAAPNFGeni3jHGBvbFJZbqKN98wV2b0rA2eNKMGm43PvMND8GADgSCoW6YKZf6edz08%2bfrqGV4u5%2bJzqis6z42VDfen/76962V22Nz2pvPa%2buXG2qX6mvWaqpXCwrrgsSmKketTuqWOLhfjcjNdqFGuLKTvb2LOaSu6O8bid6H9gvJ/M%2bAfBjAHZWh5BIFXk5%2b5Mql905zytKNxvrtloaHpSVLL94/ma4F4i%2b1Hj7VWcLOJea6l7eqX1eX71Ue%2btJeXF9YGAc1r4pNHR7sCsnPPR%2b9c0Ud3YyybozitcR7VUczwVNu/wHmsj%2b13SGQskgkX8SFolnuUBN9YtVFY/LitafLm4uLz0uKpjJzbkfn/CoqHBrfHCtvx1gvKy8MZme8aLm5uumute1t1arKlviYuy19JlGxoUsh944/m1/JslYK/WCy88E8LYmyEvAYBQLs427DattjffLCj2xdj0BIZ0uHl7a%2bklou5G09O3p4a2pYWh%2bIontVuLvt9Z650Vj7WJFaX98YpCp8SVb8xIGviWE0xPj7aSrLrxX/LTiAaCXfR9oqP9nSyyoQ/v3j1cUr/fcg74bIWPRXwh9FKBjUE5z7fAJWu5pg1bmth4O3IwKD2Uy3oz1rfW2LbfeeVZRWs0PiMOYNvFoVZ6UjhCPQLShyN69oPuXhMGQ77849%2bOX13cGZXEJDxIB6m17kJezPNKLQZuBOtfq5d8RHXMnKS4dNHD2hFSO%2b%2bqD/u2HO%2b70sqVu7urVXAo919Gm0pV0x4seb2smsXfv98vt8u%2b/KLQL%2bwNS0tINackztZXF8VG5/vzqoKA4QzO%2bvkkSw63uSkFNYdFofRX0eHxjvB9kp8XqG6OJlxJssaV0XL0HJZtojZQQh8vIyP2EdfafBABeLI1AnDhyZK61AZodT/T1Oi4mWRAQvLW%2bDgrw5OPHRdHRG733QIe3Odb/srXh6fXr1%2bhubF2NJi6tiIpTRMJhcMSPU/yuWUD%2bbZeK0dFZBZHwcrbmYgzDGpOVlh7C82YamzwqugbNPth80L/c0bxQWtIbGoX8s4jl0UP3AzmWqkdEJWAgGaB%2bmgC7sMUEWl8QDHRLizf9HdDUyN342AgaLd/XdyLnMjTev/FwYLlrJ5O2BoUekoB98d%2b/wamdzMBb6R45KIVAyv3kTZrd2SPbryAvLikZQHKE7nc/77o7VFb04EbpymDnxsTgWl/bSuXNXAZL%2bus/g27P2/C83cnT4qIiKvtQcARS9j8E4C8Tj4RkCpsNDfW%2bGunemByEJu5vddwdSknBn1b/9Fe/AtLvExYZCY3yweO%2bEhVFva2I/0G7lKA8I2WQKAQyic54WlrysqqyLynZ3wIt8acvgeh79uz57JNPLmHw85dzrl%2bK37tX7L0WQHe5F/rrntxfLhBIBEimSopKmmfOHjqsCCaec0rK2vu//fo3v90RXWjPJx9/DC4YWro93kEvmurGW25LikvsyhblewOAWRuJBJEHEp8sHA4HbgPSiOpRVTsbO0%2bWu5uL2wGF/dKSMFlp1Ed7doQGon/%2b6afg4tzBw13eAf3xCSApLQ93nziqDJ4jLyf/swLIoGSUFI8cVzmmr3MObWqpo6njQmF4u3vx3Dxt0RgTXROMpvFplIq2rDpJ3fKbP3z10Ud7Pnnr%2bidl9t3l%2bbX5BCx3392eGYEWJgloyy%2b//ga43F/28n8GANQ%2b1H6F/RYm5hSi8zkdXRzWjk6mMil0U6PzJ1XUThxQMzioY6WiZ6VspKegbaio/efffSX09jA%2bfAQ0F60e/Nmb5dDc%2bObDQejZdNGlBFXU8TMq6tJSCDhc%2bu1PEGQ/tAVQMjIIILqBjsGRg8oH5ZUOyx87qaitoWzCpQS6YT2NlXRUZY5oKpwwOXwyHI11PK0hIywSboXpCwhp9fR9mJ8H6vHWxP3tqSFoemRtcpBuYXsWqWGtY2N07ryEhAQwr6zsj8F4NwDZfTAJ2CHZY9rHjZXkjpLQHHenYCbO380hiEcJCXALszxpoyghz9U3KaS63PPyGxGE55AohRTmiCCiyd27NyL6zVD3xljf1vgANDm0PXkfdEeLI90UQzNdJQ0uNchKz1ZORkFKGiaDAk61E2C7CQDsKyEpcVpJm%2bcclhKRb3L2PMmaFcSJIVt7ONtwSZYcDpFvoGRqpnjiviC0iy/Y6Ub5QZcdna%2bS6V0BwR2C8KmrV1e7W0E3ujHauzk%2bsD0zCnxpoqLYA403VMd4OvkFu0dh9Slnjurvlz0oJQVDyiDk5OTfMTaE/v06ChKhdFCZae/FxPvGXsggWTidVT7Hd4nEmbjaGTHt9Bnujn50G3eclmkZzaWG43WLzW3meFexuR3BESNJKWMp6U8qK1401y3da3wzuLN096yjMdsviI3noPWoNLQHy47rYsulWHuQLNwJpm72FmRp8X0gF7/9nY7s29%2bVyP4Lmwj9280B4DxES5q9Ps3BlO3FCMPoOKvsO84mBdJtffAmLKKZq8A9ko7hGp%2byuhUUNFtQ8PBmaUVEWAmN1RcW0x918V5YZPelS98VX1%2b/17jcfqfp2hUmlmml43yBGxfhE0vDcHAGVGstEvYcxY3gGx%2bcGROYCR6uLH/qi9/9EVhDEiaBRMJBBP6QQYT%2bpfrlEEi4xnG9cK%2bLFGuOFy3slIqWhQ7Z%2bJiJmTYmMTTHBefrbM11c/Bn2nrpHcekcb2h%2b10r9xpf97ffTIrvCI24fSEkO1Qw01T7vKn2RnQ0DU1zxnJjg1J5zkFEUxbJwo1pz8Mb0RxNXdmOgXQc30rXQf%2bkCcGCaGtE8KD6OFozTyud%2b1ZOCQlHSe9snL0PwM4PgQA3So5m6wneZ2/I4JD91RVVHNFuXs4CzYNnQeTpqRieUtDQP2bsaEHDnXcLcnJd77m70t0KRsft8YH1kZ61gQ7QET24WcwnMTGGVHeygEP0o9p4cBz9bXQpQOt0DC/SN8nbJdj4lMU5FQM9JWMzdbzDebek8OxgbiKPFsalCgChsar5PnEUHPlPNv%2bEfnBTAwYTFxPTOWWC0XPxZYYkh2WRrF3V5FQt9XAJodkUSzeSqZOrrTvRxMXeyJmIJvu4ROAMCONlhdBY/2rvvR3RH42t3%2b%2bMY7hY62BC%2bQm%2bzHCiqaudAR2t48zE%2bQS6RbmTBA7mLjqqhgbHjeg2LmwHX7ajwJsRnnXxGsdJoKtirqeob6p63kEba6tue07tnARM4h9XHYX%2baX8vLiF2GK5kqUUCOgOxG%2bwRHeYV78%2bOMDuud0ZJD%2biGYc8Hn0Ee8UkReTEXUuxNqHxGhIm6Q463LzTcs9LXDs09nKm7yTTHYIzJrg7%2bjmaubKK/owXH3oTl7iTgUkIDPSM0Vc6dOqBhrGbt6uDnTg6xNWI5oT0TQjI9yMFES7qRkp7hIQOcpr2nPZuN5VgbYST/LcBO1MvLwSSl5OAKzuZUb1qoB1kQyInG6JDYRF9gUKIu2trI2osazsT5ckhBRDP3UK9EBs7DztDFmxZCs/fj4xkvwRA8OdyakkQwQPtxIlk4X5wxiHV3KsYnJSov1CuZaMU%2beVDjxH51M3U7eyNXkhWPRw3FGtIPyRzl0oPYpAtmZwkaCmcJWvYsKwbL2sXBgITRJNiZ4kGheFslfgDg%2b7ZEVET0tKJeGC/KlxZINOfYG7M4JAFaC8/AsL0ZEbpHztHxrpH8lAC3aDqWH8SJD%2bXFonWx3rQIsjUvTpDBxLtXBwmqBEGWGuY0nC8N4w08x0oHp3/8vJkWGnveTkNFWxWlTEdTQUrgs6L4rIjowBQverjat5pqh054u4RjDVx0lY3s1K298BycroO5mg1W1xFvQCNaO0vDpf5VDICEI4NEEtBOHqQAug2HjuXaGjLtjV2ZeH83Jz7TzqUwvRxvinfGuIfwErMSrvkxo6MD0gNcYy3PWKMNMMA%2bkX7JNHtf82OaBGOci0MgycKDjObx6MEOFhSqNQ94EbCk8UlLrqMv0z7AycqTbufDpQaH8C4yCX7njpxhEpl%2brrEW2jibM1Z0U2esFg6jhbfRckBrEu3O0ah4Fhwh/YMA4P6BfYeZeI8rl67jDck22mQeRQBewHYMEHjEZiZe01DUDuaEUu1dQOoM4SbwXaJSovJvlTTEBGb4UKPMTps721K4lHCiJcMZ5xrOv%2bSM5nmQL0T6pnqQg2yNyV7USI5TsBtB4MeK8XONJppxAB7wH4a9jxOaa6FJPIpQJFgywVe8Ic7ZhGx6zNJOzxFvSLHVI7uT/P1cwn05gTApyX90of8BtO6a/cmd2DkAAAAASUVORK5CYII=' /%3e%3c/svg%3e"}},n6yM:function(t,s,e){"use strict";var a={props:["post"]},i=(e("YIUa"),e("KHd+")),b=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"post-meta"},[t._v("\n   Posted "+t._s(t.post.date)+".\n   "),t.post.timeToRead?[e("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);s.a=b.exports}}]);