(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2Zix":function(t,e,a){var s=a("NC/Y");t.exports=/MSIE|Trident/.test(s)},"4Brf":function(t,e,a){"use strict";var s=a("I+eb"),i=a("g6v/"),o=a("2oRo"),r=a("4zBA"),n=a("Gi26"),c=a("Fib7"),b=a("OpvP"),g=a("V37c"),d=a("m/L8").f,l=a("6JNq"),u=o.Symbol,f=u&&u.prototype;if(i&&c(u)&&(!("description"in f)||void 0!==u().description)){var h={},A=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:g(arguments[0]),e=b(f,this)?new u(t):void 0===t?u():u(t);return""===t&&(h[e]=!0),e};l(A,u),A.prototype=f,f.constructor=A;var p="Symbol(test)"==String(u("test")),w=r(f.toString),v=r(f.valueOf),m=/^Symbol\((.*)\)[^)]+$/,C=r("".replace),B=r("".slice);d(f,"description",{configurable:!0,get:function(){var t=v(this),e=w(t);if(n(h,t))return"";var a=p?B(e,7,-1):C(e,m,"$1");return""===a?void 0:a}}),s({global:!0,forced:!0},{Symbol:A})}},"5Tg+":function(t,e,a){var s=a("tiKp");e.f=s},AHpx:function(t,e,a){},"BA+P":function(t,e,a){"use strict";var s=a("n6yM"),i=a("PpWc"),o=a("ol0r"),r={components:{PostMeta:s.a,PostTags:i.a,CreatorBubble:o.a},props:["post"]},n=(a("YDir"),a("KHd+")),c=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-card content-box"},[t.post.hero_image?a("div",{staticClass:"bg-img",style:"background-image: url("+t.post.hero_image.src+")"}):t._e(),a("div",{staticClass:"post-card__content"},[a("h4",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),a("h5",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__subtitle",domProps:{innerHTML:t._s(t.post.category)}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),a("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),a("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),a("div",{staticClass:"creator"},t._l(t.post.creators,(function(t){return a("CreatorBubble",{key:t.id,attrs:{creator:t}})})),1),a("g-link",{staticClass:"post-card__link",attrs:{to:t.post.path}})],1)])}),[],!1,null,null,null);e.a=c.exports},BNF5:function(t,e,a){var s=a("NC/Y").match(/firefox\/(\d+)/i);t.exports=!!s&&+s[1]},BW2Y:function(t,e,a){},"BX/b":function(t,e,a){var s=a("xrYK"),i=a("/GqU"),o=a("JBy8").f,r=a("Ta7t"),n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return n&&"Window"==s(t)?function(t){try{return o(t)}catch(t){return r(n)}}(t):o(i(t))}},G5fe:function(t,e,a){"use strict";a("AHpx")},QjhJ:function(t,e,a){},Qo9l:function(t,e,a){var s=a("2oRo");t.exports=s},ToJy:function(t,e,a){"use strict";var s=a("I+eb"),i=a("4zBA"),o=a("We1y"),r=a("ewvW"),n=a("B/qT"),c=a("V37c"),b=a("0Dky"),g=a("rdv8"),d=a("pkCn"),l=a("BNF5"),u=a("2Zix"),f=a("LQDL"),h=a("USzg"),A=[],p=i(A.sort),w=i(A.push),v=b((function(){A.sort(void 0)})),m=b((function(){A.sort(null)})),C=d("sort"),B=!b((function(){if(f)return f<70;if(!(l&&l>3)){if(u)return!0;if(h)return h<603;var t,e,a,s,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(s=0;s<47;s++)A.push({k:e+s,v:a})}for(A.sort((function(t,e){return e.v-t.v})),s=0;s<A.length;s++)e=A[s].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}}));s({target:"Array",proto:!0,forced:v||!m||!C||!B},{sort:function(t){void 0!==t&&o(t);var e=r(this);if(B)return void 0===t?p(e):p(e,t);var a,s,i=[],b=n(e);for(s=0;s<b;s++)s in e&&w(i,e[s]);for(g(i,function(t){return function(e,a){return void 0===a?-1:void 0===e?1:void 0!==t?+t(e,a)||0:c(e)>c(a)?1:-1}}(t)),a=i.length,s=0;s<a;)e[s]=i[s++];for(;s<b;)delete e[s++];return e}})},USzg:function(t,e,a){var s=a("NC/Y").match(/AppleWebKit\/(\d+)\./);t.exports=!!s&&+s[1]},YDir:function(t,e,a){"use strict";a("QjhJ")},"dG/n":function(t,e,a){var s=a("Qo9l"),i=a("Gi26"),o=a("5Tg+"),r=a("m/L8").f;t.exports=function(t){var e=s.Symbol||(s.Symbol={});i(e,t)||r(e,t,{value:o.f(t)})}},"n+w2":function(t,e,a){"use strict";a.r(e);a("yq1k"),a("JTJg"),a("TeQF"),a("07d7"),a("oVuX"),a("2B1R"),a("SYor"),a("rB9j"),a("hByQ"),a("pNMO"),a("4Brf"),a("ToJy");var s={components:{PostCard:a("BA+P").a},metaInfo:function(){return this.$seo({title:"Tools/Resources",openGraph:{title:"Kawa Entertainment - Tools/Resources",image:"https://kawaentertainment.com/kawa_wave.png",description:"Kawa Entertainment is a talent first agency with a focus on technology and art. We only bring our very best to the table and treat our talent right."},twitter:{title:"Kawa Entertainment - Tools/Resources",image:"https://kawaentertainment.com/kawa_wave.png",description:"Kawa Entertainment is a talent first agency with a focus on technology and art. We only bring our very best to the table and treat our talent right."}})},data:function(){return{search:"",tagSearch:[],searchResults:[]}},watch:{search:function(t){this.UpdateSearch()},tagSearch:function(t){this.UpdateSearch()}},methods:{ToggleTag:function(t){this.tagSearch.includes(t)?this.tagSearch=this.tagSearch.filter((function(e){return e!=t})):this.tagSearch.push(t)},HasTag:function(t){return this.tagSearch.includes(t)},UpdateSearch:function(){var t=this;this.searchResults=this.$static.posts.edges.filter((function(e){var a=!0;t.tagSearch.length>0&&(a=e.node.tags.map((function(t){return t.title})).join(" ").toLowerCase().includes(t.tagSearch.join(" ").toLowerCase().trim()));var s=e.node.title.toLowerCase().includes(t.search.toLowerCase().trim())||e.node.description.toLowerCase().includes(t.search.toLowerCase().trim())||e.node.tags.map((function(t){return t.title})).join(" ").toLowerCase().includes(t.search.toLowerCase().trim());return a&&s}))}},mounted:function(){this.searchResults=this.$static.posts.edges},computed:{GetTags:function(){return this.$static.allAssetsTag.edges.filter((function(t){return t.node.belongsTo.totalCount>=2})).sort((function(t,e){return e.node.belongsTo.totalCount-t.node.belongsTo.totalCount}))}}},i=(a("uKsh"),a("KHd+")),o=a("Kw5r"),r=o.a.config.optionMergeStrategies.computed,n={posts:{edges:[{node:{id:"5fe7d8abe40ae6f8addb9c809bb42dfc",title:"Klock",published_date:"March 25th, 2022",description:"Want a local clock on your stream overlay? Then we've got you covered! Simply edit your clock precisely as you want and import it directly into your OBS scenes.",hero_image:{type:"image",mimeType:"image/png",src:"/assets/static/klock.198d85a.00b772ac8bf067c1053f5453a2ec0bd6.png",size:{width:1500,height:625},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/klock.1b91758.00b772ac8bf067c1053f5453a2ec0bd6.png 480w","/assets/static/klock.3df3210.00b772ac8bf067c1053f5453a2ec0bd6.png 1024w","/assets/static/klock.198d85a.00b772ac8bf067c1053f5453a2ec0bd6.png 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 625' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-f97de1677d69b83689bacac34ffd64a4'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-f97de1677d69b83689bacac34ffd64a4)' width='1500' height='625' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAbCAIAAABDQh69AAAACXBIWXMAAC4jAAAuIwF4pT92AAAE5ElEQVRYw%2b2YX0xbVRzHr1BYFgOTbFmyJ182CVDa3j%2b9/Xvb0vb2lv8wZGChMKCjf0E2/DPZXpzOBLKX%2bS8oZmyaLSoQQaB0bjozXnz0FWJMfNiDrr2nHV0cLhp/p5UKOEctzXDJkk9Ozvn1Nvd8z%2b/7O%2be0BEXRjzXEEwEPgKZohmIyht5xASRFS0kyYxQUraSYHRMAr1fRTCOrP5wZSj1HsyUkSe%2bIADAAvPt9rj5u9/4s9N4W3BhbosOvDVOkIrYEicgvtt4lvntEX6NIZPJRC4BlKyfJoKn1N7s/LLiR4EE2N6r0IrsXVftxH%2bB7kbUXd6p8iHcjuwd/Ck8CVX5R8NwRvL9XBt7V15WSJPPoBZSR5LSpZdXuv233iGYX8p2Njn6K/Gej71wWG/rFmgBqG4qOfobjYxNi60uirkN0nkJnRsWjp6MXJsVKb9iGlYP%2bWqVWupWXsiwAiu8QKT/P1f1RGQABqKInevq96EcT0aG3Y2MTqHkQec4g31vRyavRNz6Ijk%2bhzlPoyCBqGIi%2bOYYcJ2NX5lBDH6QIZg9LcFzDF5MK5qEFnf0MyChKYDQ/8S6wAXZLXT9qfRk1DqCOIeyZhheRxYXtBPEXXsG2OTyALVTfj3G8mvQSCAATntQK2xVA00z6rNUxDd5tYrnvLE4wdIx3xyzHcGt2xWyJod33Vwfigjdm7cUtDFMRwRsVvHftPrfaXLJNASRJpc%2b6vQhXAmTDqTL2qS0BjSWQatfzz8ga/WpLt8rEpLEREQ%2bfvVqt0Wp1STQabZL1w9Sn8OR6DTR%2bNwXrV5wp8N1tbaMKBVlRYeZ5m8FgTGCAIWAyVQCcwZgcGo0mgOMMVitvsVjhWxuPhW3dKTI/yMDQMBWbTYCOXs/pdHqYNMRlMjm0LKsyGo3wAAApgDyACFgvQbCTGwXs5GUOJmc2W7Q6zuf1OxyOrq7u6qoqhmECAyf6%2bgJ%2bf0Cn04FnXD2u5paWwRPHwTOQrvUu2kDaZUSlfQvaWgBYQsmqHI725iMtnZ2d4CK1St1xtKutrd3p7NBzBpVK7Wx3VlfXdHf1qFgWXPQAASQcp0qFhlOo9Vug4Uiliv6POfxXC8nlCrAQVCfMKblFKpWskmUVoCwxS4aBkSrZgYhKrbHbKzfUAOytCoVcayg4vyj55MecC0u5F5dzxpd3XcLkXVyWJIb5lzCS8aX8j3/Y/eH3ZZZaWi6jaCYLGQD3gwZYV/AGtEmgnyQVSQbhSUjRhgzQSqZcWmprJKbEvLm7%2b4Lxwvn4voU4MY2RzKzsnovvD8VzZuLETDx/diV3ZoWY/fVgs4eRlpBwpm//NgqzSVZqmmz2D%2bRGVl5urSMu3yoOocZFseSqaPhaLJgO502F6xbFmpuodlE8MBvZNRWuvikWL0SISfG5JhcjLc2OgMxO4k0CpHw9ceXWs0HRciPCXItor0ee/iJcNB2puBHhvhH5b8W9M%2bGcyTD9VeTAbBgEHGo6lk0BmZ3Ef1tIJi3jG3Km7xDB%2b5L5e7nBVUlw9al5DPHlKjG3mhfELYGH93Bn4f7B591Zs1AWABOymv2vjReeu144vFA4EioYDhUOh/YMh4pGQs%2bMJPojmKLhhT3nru19/XOZ3gz1R%2b3gT8rNJiQpMBJsLGkBT5Lk/%2b9vFVwe6YEvH0/%2bF3q8%2bBMxlBCNQ0uz7QAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"},path:"/assets/klock/",category:"Tool",creators:[{id:"kawa",title:"kawa",path:"/assets/author/kawa/"}],tags:[{id:"free",title:"free",path:"/assets/tag/free/"},{id:"online",title:"online",path:"/assets/tag/online/"},{id:"overlay",title:"overlay",path:"/assets/tag/overlay/"}]}},{node:{id:"7bed4963cdfb0a0d990ac39c8d0aa8fc",title:"Mascot Assets",published_date:"February 28th, 2022",description:"Thank you for the outpouring of love for our new mascots; the adorable crab Dango and precious fish Mochi! We are releasing a free asset pack to celebrate so you, too, can swim with our aquatic friends!",hero_image:{type:"image",mimeType:"image/png",src:"/assets/static/dango-render.0b85c65.31a7fd4ec585bb94b449fef27291b752.png",size:{width:1920,height:1080},sizes:"(max-width: 1920px) 100vw, 1920px",srcset:["/assets/static/dango-render.1b91758.31a7fd4ec585bb94b449fef27291b752.png 480w","/assets/static/dango-render.3df3210.31a7fd4ec585bb94b449fef27291b752.png 1024w","/assets/static/dango-render.0b85c65.31a7fd4ec585bb94b449fef27291b752.png 1920w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1920 1080' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-f01bef3f1bbf57b9176c4a6e7a23ab86'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-f01bef3f1bbf57b9176c4a6e7a23ab86)' width='1920' height='1080' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAkCAYAAAA5DDySAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOyUlEQVRo3q2aa1zN6RbHn70zx%2bDMGGNoSEoJMwbjNjgz4zojQkmkexFCqehOKneDXCK5NxG55i6XQrooKqFUcps5n3PmzLw6b87r31nrf9n99%2b6/yZzz4vnEvvZ8n9/6rbWelRDLMiCiMyFWZEHE7YdIOASRdARi1c8QKUch0nIh1p6AWH8SYuNpiM1nIbbkQ2w9D5F%2bEWLHZYhdVyF2X4PIvA6RdQNi3y2IA4UQh25DHL4DkV0M8fM9iKMlELllEMfLIfLuQ5ysgDj9AOLMQ4hzVRD51RAXaiAu1kJcfgxx5QnEtacQ1%2bshbjyDuNUAUdgIUdQEcfs5xB1ad5shil9A3KNV8hKi9JW8yl5DlNO6/0ZeFb/Iq5LXrxAPlCWidkMs3wsRuw8i/gBE4mGIldkQyTkQqccg1hyHWJcHseEUxKYzED%2bdkze/7QLE9ksQO69AZBCAPQUKgJsQ%2bwnAwSIZwJG7tHkCkEMAjpXKAE4wANr8qUoZwFkFwHna/IVHEJcUAFcZQJ0M4KYOAN68CcDLFgBl7wCgbv7h3wmA2ekflE8/WTn9VJ3TVwGYTp8BXJMB7OXTZwCFMgA%2bfQmAcvoM4DgDUE6fAZxhALT5c9VtB3C7qeX0/2cAfPoxdPpxfPqHWk4/hU4/jU5/LZ3%2bejr9jWda5G86/feUvwSgvAWAKn8tgIsyAAMBMFAIGNUQuPl/DAEzAHz6sXT68Xz6h%2bXYX62c/ho6/XUn31/%2bB4rMAeRYiX9JAQoAin8byQMewcAKuEIbL6BN32iE4XrdnwdQrgJ4YwWAevpa81ttxfzM5K8C0Mg/SyN/AmAgAMbsuwqA0rcaoJE3f/mpHAKXn8DhbDmyt2Zi2jECe6up7SZoLQysApDM76C5%2bbWSv8b9t1nEP8nfSACMJgXIAAysAEn6ZTCSCRp0FGBkBeTXwi/zFG6vTIPvvrP4gLPA9SZkbNuH/yyPxG8JCYg4SN9d%2bBxGVoEJgMYHit/DB7RZQAaw3xzAah33bxX/LenPwCGwl2S/nzZNAIwUAkb2gCPFcMq8hCEZpJrc%2b1L8G3QUYDhVgQsxSfgjIhz/jIzE%2bbTNWLEnF00JiWim9TIxCb8ThAknCWhRM2xaqaD5PcJAD4Ce/E3xr0l/m8%2b1MkADKyDzBgb8dALfbKT3HqBf8tAdaXXZdx0FYctQHxyCqDVUa%2bSWmynAwKnw4lM4pOxFqfdcPI%2bNx7PlK/BrdDR%2bi45Cc1w8XsQn4HniSvwRF4vsdPKqwiYY3hUGliqwBFDxLgApbTNAAyuA4v/T7fm45B%2bC6tmzkR6egEHb6D3ZJdgUuwZN/r54MG8%2b3gT6I3wdpdu8ShhzS6UsYGQAl%2bvw47QAFI0Zgxd00g2RUWhcEYPGmDg0x8bhBUMgFfwaH4%2b7azejPZvhLTJFvTBoSzYw%2bYAWgKn40cn/EoDTugBs2AQzb2Fa8m7UeM5EsbcPHnvNQpmfP/aFx6EyMAhVQcF4GDIPj2g9WBgG%2bwPXJSUYKBwkEBT/Pm7%2bONi5Cz2/CK/i4iQITaSE5phYCUJjXAJ%2bi4lB/qYdlAka5PVeZqgDQN28DMDSAI8qBqgDQBMCNjvIB/YWwi8yDTXu03GXANyb64P7tGq956DSPwAPTBDmoyE4GB4/0Xccu492R%2b7gg8MULnkPMDJiA9bbtEeavaOslqSVkvx58/zzdVIS/kUA3LOvyB5wo94CQBvMUA0DBtAqC1jNAG9TwEUYWQF7bmDKzGBUTJ%2bG4jlzUTrHG2UEoNTXD/dpqRAqyQcaAgPhtZFC7cg9uVjKIqPcSelzy3nMGjIWYcIGcZ3%2bitMjRuARqahhaQSeRUWjOiAES6PWKvWA0hNIKmh8z5pAA6DyzwIwywIygAGjJ%2bPQqNGool/6rtdslCgQyn18UeHnhwqC8DAgEFWkAudd9P5D9/DxjguYmpqFVdFrkBW5CmcWR6HQwxNnJ05C9tBhyHFwRMUXX6Ks35cIGzYF7Q4QsJsEoKBOAfDMugp0S2PLTPBeADRpUAPBwPVAVhHs3UMx9eMuOOrqhmofCgFy9DJeBKGCVFBBIfDMzxdb/BdKFeK8lAwUhYahKcAfrxfMx8tFC9EQGoqq1Sl4lb4dLyn%2bH5MPvA4JRt70uWjH33uJSuIr1BsU1Ld0hm31Al0AmjDQB5BrDoBVsFFdBGPTWVkVJN8Pkw9jmJ0LvuvyORJHfouLMzwkFZTP9UUJQbjj7oGDTk4Y7bsMGYnr0ejliRJKddUpqXgYPA%2b1i8Kk2F84ew4C54XiwiwvvCTps/zrVsQiaWOW3CdcfQobao5srhGMgrq3q4C9oBUAjRFqw0DfBDV1AJfCDIKrQobCBRI/T68z8HvSTqDzvFQMseuHLz62xTBbJ3g4DoCfowtWkbEV93FCnrMLsoMXUVr0wy0yy1nT3eEfFIIzM9xRR%2b7/lNZpgpXqOhX3QxdQ/IejLjwCDRHL8PuSxVi3harVm7S5ItrUHdrIbdoYm%2bHbVGAG4JX1gkgXgLYQ4o3zv/kxfp7rBa4duI2O2AVDOKWnyEy090tGr6GucO71FVw%2b6wOXzp/j6/adEN2pE26NHoNa8gNOkdVkilnTZiBm7HgUkz/Uzg9FNSmggZTwmjcethhPFy9B/dKlqCcI9QThRVQUMmNSkBqxEuuikuGakSfXA2YZwaJN1vUBnb7AHIC2ElR8wLT5n%2bWCaTltfMl2iOB1EP6ptNJg8F4J4ZUIMXkJjENnov1wT/zFM46grIS989c4OdkVD8gIZWP0xxPyhUbaeA1lhypaNVQnMIRqeqx2wUI8IRhPCUTdEoJAUOopHH7xJ88Y0A//tu%2bBs%2b7epIAG/TbZqg9YgdACQFsKK70Ab54NkVXBJ8%2bdI28%2bIA3CPRrCLVxekxdDfB8I8eVkiF4jIZzGwvBDGCkkE70j01FM2aFcyQycHssJwn1OkQTlIdcKBKGaINQQhEcUAgzhMYXFk7AwSQ11BOFJRCRSHJwxz7Y3uuynKrSE5GvKCm8zw3eUxiYA2l5AzQQMgU%2bfH%2bO7ghV7IcK2QcylE3elDY4PgvjOD2I0nchgNwiHURA9hsDY51sYvqfnQtMxdGowSqlOKCVT5OygQmAlVFqDwEogEBIEUsMTUsMzUkPi3DD8EL0Jk3blYdS%2b87IZatNiqzBofnd/IAPQNkOaTGAGQFHAUlYASX9WLMT0SIgpdPqTQkkB/hDDPWAYPBVihBeME%2bfDdZI/Njj1R6Gbm9TwyIUSQ/DRh0ChUc0hoYWgqIGV8GL8BLwcOhRvhg/HPwYPgut2%2bj3vvIKN1CNYywhW7grKlXCQegFTM2RhhGktji89x6%2bN3A2xaAvEvA0QQVShBabJXjB3FQyeMRQayzFqvC%2bODBiMWpe%2byP/cFjlUKFXQyXMoSBBYCVw2%2b8rFkiUErRpqCASroJyeC%2brtAt8efRDUzQ5%2b37qi2%2blySf5ShfjePYLiCaZusJURKmGQpqogp0UFUXsgXadTFpDXTojF22AI3QThtxprXQaisrcddtrawvXDjphha4fbnl4ooVzfCgIbo1Q2K2qgkvmhBkIlVZCvqFiK%2b3EmhONIGL6aBDHGCyKdirLCZhh07wyVUGhLuywD0DFCrQ9IEI61pEEGxqHDi//Ni2%2bWojJhnL8BX3/aE%2bM6dUaHrg4QnzljbOdu2NqvP8oJQCkttWQuVSpGPV/gHqKCaoXnIUE4FRqODvw7UgFmpBbckFMGY36NdGkqGaHkBToQWilBxxPMboRUHzCrB5RsoPoBP75asxgUw%2bH3MUxSxwezyR/GBeCTgROw0N4F15z7Iq97d6x3GYACqvmrvGnzc%2bbgHsG4RyBK2B8IRBmBKFNA1AQFoTE4CLnegeiWTMrkTfMtEt8h5lfJt8cMgCpE09W5JYRCKxC0ISEDUH1AUxBpw4DrAXWtUZbZY8flEKHPMS5Oh/BJxugxHrji2AdVzk64TqVwQk8HDPq0F8b3GYRN303EDQJRSSAekSFyD1FNfsDF0lPqEaoDAnBttg8iJnmi48LN1EPcle8P1eHJRc3sQJ0eFVhAaOUJijFahoQEwNIHzMJAqQq5IuSSmEtjvijlHoF/crXIr%2bH3UJFkDKECyS0C3nZ9cdWuB5J69sZXXXtBdOqGrl3s0LfnF3DqNRijXUYgePg4JI91RfqP05ExxQNbXT2QMHEGZo1yhcMId8o2ZLLbr8LIN8pnLKZHPD679LgFgqoEEwhLCDpq4GW6FjcLg%2bzWYWCtOWIgDIhfz0OW%2bRshfJPRo98oONKG23V3gehiD/GRLUTHrmj/UXd07%2b6Enr0Gwrb3UNg6joCd0zewcx6Fbn3/hg79x8M4lmqIxTuo47wkXa1Ll6iWAxQThNp3QFBCwlINKggJgFkYHDHPBloVqM2RekfAnSEDYXWsVgAs3CJXitMiqC6gU%2bz/PQy0OUEbFXaDILr3IyAOMHxij790dUTHHgPQwXE42g/8Ae3GBcEYsIZ%2bB/ru7Zfl%2bcKxMutTpAs64XBVExJm7bOeNzRpJkNmYaA1w2P6KlBbY4bBj7NqOD2yArhI4gLJbSkE1wbkCVL16B5FZfMiiAkhVEUGUwG1gEBRMeWzWjpxaePcavNVO28%2bp0S5RSYAJys1EDTT5LeGhIU3WIYFLwmAWRhoVaA1Q0sVnGoJA36MXxuTJdUDwj9FLpK4b%2bDP58/lz%2bfv4f8vV74znr5rVY6sIL5255tmHrDw5nmkZm2cZjlS11WDFRCW/mAajmrDwKwmsKKC9VoVnJKf49fzZ3G1yBtmeGs1dwoMap122nROvmLjISuP1/iu8KDFSN1sqvwnQFx%2bBwgJgBQGOmZozQvUjKBVgWSGx2Ul8Hv4ddKtUX7LZSovHqupk2V1sMpzRe3fFKhj9WwLCKoaeLqsB0L1h7aEhmqWpr8PeJsKLPsDFYJlKKhpkR/nuzztIJXlzcNUHqerA1WWu%2blvCpSxuh4EnjGyH%2biCqNABoecRVlQhAdBVgZWMoEJYa%2bkHSlYwG6RqTtwSwG4CsEcBYJosW4OgExIM4a0gNH950koVCgxSxn8Btyzzg0vwPhsAAAAASUVORK5CYII=' /%3e%3c/svg%3e"},path:"/assets/mascot-assets/",category:"Art",creators:[{id:"kawa",title:"kawa",path:"/assets/author/kawa/"}],tags:[{id:"free",title:"free",path:"/assets/tag/free/"},{id:"tits",title:"tits",path:"/assets/tag/tits/"}]}},{node:{id:"40df4e9026640a0e69d684175308c2a2",title:"Schedule Studio",published_date:"May 5th, 2022",description:"A browser-based schedule creation tool with completely custom color combinations built-in no Photoshop required!",hero_image:{type:"image",mimeType:"image/png",src:"/assets/static/schedule_studio.09b17d9.fe2fa26bd3b72b906aa96742e8ed56d4.png",size:{width:2560,height:1440},sizes:"(max-width: 2560px) 100vw, 2560px",srcset:["/assets/static/schedule_studio.1b91758.fe2fa26bd3b72b906aa96742e8ed56d4.png 480w","/assets/static/schedule_studio.3df3210.fe2fa26bd3b72b906aa96742e8ed56d4.png 1024w","/assets/static/schedule_studio.0b85c65.fe2fa26bd3b72b906aa96742e8ed56d4.png 1920w","/assets/static/schedule_studio.09b17d9.fe2fa26bd3b72b906aa96742e8ed56d4.png 2560w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2560 1440' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-c50f66f8ed2b4ec9dbb962ae4da29bbf'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-c50f66f8ed2b4ec9dbb962ae4da29bbf)' width='2560' height='1440' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAkCAYAAAA5DDySAAAACXBIWXMAAAsSAAALEgHS3X78AAATSElEQVRo3s1ZZ1RUWbauNdPT79d7s2Zev%2b7pfmMWBCWIGBAVlaAiiCA5GcmKgCTFgEgSUFuQIKiIiLYBSQomEBUMtAoWYgAUEyoiUAVVwAXkfm/fQzDOTPc4a17XWh/n3HPPqVtnn72//e2LqK2tjW9tbeU7Ozt5iUTCy%2bVyvr29nW9sbGStcC2Tydgc4X5TUxMvlUr55uZmnuM4NibcG7gv3BPmC/eFucL4wDOE9rcGEf1gdHd3IysrG8uWr8DFixeRnJKCzSEhOHAgHTEx27ArPgG7k1Pg5OSMgwczEBsbCy8vb6SmptKcA9TuR1paGpKSdkP4ZGRkYMmSpcjOzgYZFsIzyACgB/7mIBJOpp1OOcjfj5%2buNYXfHhPDO1hb8ZmHM/jgjRv4efp6vPNiR36Vmys/YYImv29fKm9v78C7u3vwZBAGX18/PjQ0jLe1teNramp5GxtbXktrKl9SUsKTcZlX/GY9QEZWaJa2Iu54PmIPZ0P88ClC9h7G9swzyL1QiuOXypB8phTxx/KQQad//fp15hmnT5/Gs2fPsGfPHty4cQPl5eXYtWsXLl8uwYkTWcwL6urqQCE06AG/BP92D5C1taKhRYrCN724KwOet3biupTH8Ve9eCLrweXGbhx70YMbNCZ8uK4u1vb29qKjo4P1hRDq6h8X%2bjzPMxCHfLopmWwQrXTdIpGAuGNw3r/bCEIIoLuLQ4ekCZLGBkibm9DTLkOvXAq5VAKuTYK3Mgk6WyVoeP0ab968wWtqiSRBRAciOjYmoKGhgW1G6Le0tHz2hOWSZgZZSxM4WatgSvBve5gx2v4/PIDjOnH%2bfCECAwMR4O8Pf8LJ/Hx4rPIExTQcHJfAzmExawP8A%2bDn54eAgEAGD4%2bVcHFxBXEAjftj7dq1WE5EKhDk0qXL4OjoSFj8Dg4OMHdaCQs3H5g4eWJpwCaEJKXhWF4%2b2mXC6f9zHjAYPv8gtD4XZiLhpIyNjOETGIQtUduwJmAttkZuhbb2NCgpKUNFRRXjxqlATU2dbXrLllBER0cjKioKzs4usLa2QWhoKCIiIrF5cwhbt3LlKkycOAnKymP71quqQ3X0CAy1Xg2Da10YdlYOq%2buEKxLYX5NAJ/EMSq6VoYfCSOCLX73x/r6E9jLgeTLinjZCK4WaVAix/u/92AgieXsHvDzc8N%2baM/H9bFMMmaiDH2OioTVVG6NGjWZGGDNGibXDhg3HpEmTYWg4H3p6%2bjAwmANj4wWYMUOnv2%2bMyZOn0DoFtmYQSmOhNGokhuvMh3JIOoZsyoDalnRoRv4E7fjTMN92ELUPHzJOkf4KDxjYiLBGLpdh4NPRSd/T9AatrxvQTpsX2Kmd45ghPjaCSGBpIY7PnTmDvNxc5JP7P336FEVFRcjLy8OpU6cGIdzLyzuJnJxc5Oa%2bgzDvXf8kzc3/YF0f8pGfk42cY0dx8sRxZB49gqKzZ1BXU43mhpfo%2bBxh/gIIHiNojVfESwdJl8RtDYf/LD34f/MXbFRQQIC2FtLc3VFfVYXOt28/MYJIsHp1dTVS9%2b9HMomdlJQ9lNIqsJ%2bu4%2bLikJCQgPj4dxCuExISP0LCB/335w%2bC7iXG7kRi/C4kJCYiflc80imdFhcXo7qqkgwg7zdA669yf%2bHkX7x6BQt9AxgLYfa738N0mjK2eZti%2bDd/wryh32OZqiI8hw5BFR1yJ2Wv940gEjp29vawMDdHyObN8CNCiyQOEGJYcPnRoxVYKHwRRitCYehf8Z2eBUTbSiGKudyH7aX4XXIlhocfx907dwZV4689/ZqHj6A9dhj01Idja5Aluh4fpjgogK%2bzPkb8z7dQHTYMKiIRkocMwbPaWrTTmgFOEAnpx8rMFN9O0oWCyRIozjJCVHgYJlEsjxw5CoqKY74YCmOUoTR8KP5i6ADR7iqIkir7kCiGKPUhvgvPRuXt2%2bgU4vQXGOBdDBPxSYns3tzCo%2boMnCxMpGA/CdRn4WXZDpRmBOBonBN2RTjAe5YK1pIRCoLWQVAv0n6yFAkWFNPDo36MRVjMDkTGbGdqT1B1YWHhzBu%2bHJGs3RoWhoioaETQM8K2xiAuKRnZpwpQTkqyQy7/xWpwcJ6sHU2vnuLF3QyEnzmN5w1FQM8lNFYmo/rCPtSW5uPJxWja7g1U5EfAlQwQpa%2bHZsoMsoEQkAmqjC7OnztH5JaDgoICvHz5EqWlpTh79ixphPP/IhSikH5kcW4mivNOoDD7GCouF0H%2b8im6SITJfyUJtraSvG7vRmvtBfyYfwLRR1JRXxiC6isH8OZuCV5XFuLV7UI8u34MXW%2by0Pn8GML/82t4z5gJKWWJAc0gEuRqQOBarHR1xTo/X7g7O2NnbBymTZvOUtiADvgi0HeoKI3BaJ15%2bKNvMv7otwf/5ZuCb9buxw9hmZgXlY5nTx7/XSN8KmikkMo4PCnPgu%2beFPgE%2bMBjxQoyAHmBvAE7QjfAbrkL9sXvwKWMaDwvi8d6he8RRxzX0dM9WJ%2bImlskmGegD317J1j6bYbRUndy1VASNP86A4wlIaQ2ajh%2bsPGB6DQgyuuC6GQPRDkdEJ3gIIo4j7Lr11g98bc44P3NC3OkJNM7uB5cLzyEwOhgHIlNgP2GKDyouEYB/gxe25Jg6LcF%2bTt34M7hfbhz7jgqTh3Go5uXmFQXPJ8ZgCPiycvOgrGjEwxp8wsdliMnKwsurm4wN7cgOWzLJPHHoJKXqcBP79l%2bdh4D9c3cfbHQcx1MPPzhuC4MQbszkJ6Zg7b3lNrf27zQdpILCx4giLj6J7WI2rEB9yjV4tZ1dDU%2bBCTPIX9ejd6SUuD8JchvluBaTgYunMzE61cvaPPyd0JI%2bCNUdg9JC9y%2bdYPSUSWkNFb3%2bDHTB1VVd5kuqKiowG0iywFUkbC4f//%2bR%2bNiiMViGrs9OH6H0pvwPdXVNai5fw8Py8vwiH5o9Y2reFVdBaqKAL7nF7h/G0td7USW2dm5VIo/Z0TGdfVAXF6KrO3rUZ2TjhflF9F0/2d01FWAE5fhWcExXNjrgwAna/jMmAXhwN%2bvEVgWiE9MwmIqVLw9PeFMcZSRlsbqgwkTNGFpZQ3/gAB4eXvD03M1g1AECaerq6uH1au92Jig/wW4ubmzMWH%2baiqKhCJoitZUTNPWxpTZczDeaS3UXDdCwzkIM3zC4bjzIEL2/oSmxteDbvlZI9DmOzo5qkgb4e60FA0v69HV3cPucV3deFh7F7kpvihI8MCFn7bjXlE2xHmHcCB8KYXJXoQsW4LllAWeXyhC%2b3uKkBVDc2fNhIG5LXxCo7FslTdWhkRBa7oOlBQUYbJgAXzXrIHfGl94kKQU%2boFkEGsrK2akcEptm4ODEbxpE3xo0zbW1iSmfNk8z1WrsHTJEqhSITVBcSR%2bcAzEHDGgRJ65jA5/ubgHzgTtpHMoLLmCt92f5wAmeLguVJVfg7XFIkyfMhE5J46hpakRbxqFElzK5Hvq3t3wI/L7KSMVj0rO4fXNYlzMz0Rd3ROsmj0bK8kAN%2bk3ClVD64AOaO3sgm/4NgybYYgRBuZQmDEXumGpmKQ/H5qak6CmMRFjxqpCaVwfVNQ1YGpuCQtrW9YamZjCxMwc%2bnMN2bX6BGG%2bCpurPE4N49TGQ3PKVGhOnIypsw2g6b4JYzzCMNY9BBN8oqAflQG/pENobHj1QWy%2bD4mkBT08hXPmPvz12z9j6AgF/PD9D5g5RR1aGiok2rQw9K9DoEUetjOrEM/vifHmzhXU3yuHpLmFhaCYQjZi8mSU7tgBOXlA60AW8LrXC/sawPTMYyzMqoRZfi2sb/NYVFgPU%2bqbnamD%2bdnHg1hE84zzqmGc%2b4C1C07WEKphcqqWXZudrvtgrgCzgkdYWFAHz3MPkFN8BfeuXkJlaTHq796mlEUc8LbrH3CAFDIivIantXB1MMcMHV3ERMdgf/ohRIeHsOrVzy8Qnt5rUEW8JG9qQBF5VNb1O3j24iWeP67DuZN5OHP2HDhh8%2b9Xg%2bbkikYHLhMzB8HMaz3mufpifuoF6Dj7Q9tqGabZuhCcP8B0O5e/iY/nvo/J1s7QdgmEtXcQ7FcHwH1jOCL2ZuB4Xn6fMHmP8D5HhO1khBcv6tmbp48/fO9bxMQnIWLHLhw5dASBiYewbPcJpKSlI2JXMmz8Q1Bw6SoLM8n7xZDVrW5MM1yI1a4uiCaJuoZiZJZ/NDS1pmE8iZfxKuMwftyXQV1VFZqjh2O4tSdEp7ohypJDlE0aIJN%2bwNE2/CHyLG6WlbE47%2bOAftZv/TQNCuW7AGETLf0vQJqam8HJ2pCYdRq6dm7Q0zOGz/ZkeGzdhW0k6nKzc3DndCbqH9ymDCcbVIHMA6zJA2Yu88KIyTMxco4lxs2cB4P1O5kB1BVHY/xYZYLSF0F93FhoKI7CmJmG%2bNO6A/hzUDr%2bTO03mw7jm6gCjAvNYBVdb2c7WqT9HtDaNmiEz73W%2buBNEBmth%2btEcXkVFrr4IiLlEPb/XA3byN0ouniJ5slQc62Y5PFlvP6Ia0TWdwCrW11YcPg6jPYXwzC1GOYlLex6/r5CNma0/8KXIfUC%2bx7jPedgkpQHk92nsCAxF2YZJbApfgmbMjmCagFxoxzdMjpl8gDpBwZo%2b8AjPg4NKRmts6MdlQ9qYLcuAtuOF8Bt537orQlF%2btHjePKAuOD6WTy5VUJZ48N0yzxg0fnn0A/dC73gJMzfmgZTIrU50RnQD06E/pZk6If8C7AlBQabEqi/m561B3rUztn2E4wPXYN5wUOYUnoUyDftCYdXEhk6%2bw0hbFr6gQE%2b5QghDfaSvs8uvgpVR29oeWzC1DVRUHHZCAf31aguysUT8U2SwE2fZBqRFT1U22IJAlyXI3LDOjjZWmFm4HaWttRGDYP6mNEsFL4EamMUoTHif1mI/SH2Kr7eWYqvfyzFf8Rewdd77uC70BMwP/0I1ncBk3Iefvff4vxLkrkSoWwl8mvrq/0/7xV94SAoxB/jtmHlGnf4bPCDBYmyqXoGGPndt9ji68PeNXxOVousyPLaxhaYoG%2bMyVYroDJDH7r%2bUZgwSQtqo0dAXUmRjPCFUFYiAwzByPl2%2bGq3GF8lleOrxHL8gfD71Bp8E5bN0q/NPcDmdi8WVQCOlTx2POxGERmipkmOFtpsR9vnvKKVubTwP4ojOwOQGrwYe4OXIz7AFvbmRnD19MemzeFofN0w6PofpEHB6mbkgjM3J0MneDd0yV0XZt%2bBQdhe6K7dDj0iRN2gPuivj4XBhrg%2bbNxFiBuE/oZYQlw/Ytl8vaB3a3Vprd7abdCj%2b7oUCrrCd2w9AKO0izDLuw/GReSNQhjYiHlYkkQQIOiUxLpunKzvxI3X7XjWImPe0DEYIq3MrV%2bRRF69MQgOqzywiOT8Yq/VsI9IgEdqHlwSf0JZ5V10feaVm8i6su/BBmmXMTshH3op52FxtQ0mx27Rj7sE4/QSGBEWHCzFnH1FmL37LMPMxNOYlXQGs6jVpWuDvUXQTT6H2TQ2h/rCfGGd8QDoegERomHSKRgnF2BuwkkYUfybXm6G5U0ONgMGEAst8YGYZzCnvj21ayksEh5148gzDudedDDCfCnp84C3lD0ePnqEOYExmBucgEnEARPdNsE8IgVOsenwTD6Ko0VXWKaQDP6fss%2bDWBaY6R4EZ4p9f8%2bVpAecob85CZpTp5P79%2bkADVWq6xUVYLbAGN4rPeBFWB8YgIA1PggK8Mdqdzf2XtFtxXJ4ebjDYqEJzVdk65iOUFGBBoWSMqVYjY0pGB60F1ODU6Admga9nVnQicyA2cVG2FQNGIEfNIJNf3%2bRYIjKPn7YTqGR%2brgLx8kYhWSMqhYON2sew3VnGhbvSMNs7xBMWuYDs9BE2Ebvw9Kd6QhJyWDyV6h0JULq7A8jkWV5D09VGr9oqTNv77eJt1rhzusFxvBkAJ40AK%2bhqsprqKnyKsrKvKGBAW9jYcHb21jzkWGhfFBAAL/O34/fvGEDvyloHb9iyRLeefkyfsF8Q16V5gvrxtP68erqvKbCCH6EnQ%2bvUwZeqZjj7W5x/OKf5bxHuZwnD%2bLnZlbydvfBW1X08hQGPG2egTbPWpv%2bPhmCtc5VvXzQg7d8TG03v%2b9ZL58sfsW7xWfwS388wBttjOV1PIP5hZvjeMuYVN7IYx2/yNSGb6iv53s75Hy3TMrzcim1rbzI5j5YflaxcoWypQvUTBfDKOUMpjt6QMvYElNN7aC10Ja1E40soTHXDBMMF7E3SAYOJHEX2WOOoysWrPCE5nxzqBksxMT5Fu/WsbXvWhUHL6gv94ey4xqorgyFRuQRzKbQsRHSYCVYCPw92PTPsRD3eYVA4kuIPJ3LJHDZlQEngmlYEgz8ImC2JQEWUcRlHuuZ1M%2b8cR8VEsow5DXHnnchnrhFSIMcGYGzrXjL2d7kOJuKHo7CgqOT4KzKez6ANc2xpnEBFje7GMiDOPMbXdyinzl2n1ictR%2bvtSrvG7O90cHZ/NzO2RLsyrs5xwfg7KvpeWJwdPKc9UD7McSfwkbcd8%2bqEpzpVRm3ZPt%2bjozAmUckc3prwjiT4DjOMjKFmxe0ndNxW8vNTTnLWdFezcp7OaNycMaE/wO1vqVa4OV9%2bwAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"},path:"/assets/schedule-studio/",category:"Tool",creators:[{id:"kawa",title:"kawa",path:"/assets/author/kawa/"}],tags:[{id:"online",title:"online",path:"/assets/tag/online/"},{id:"free",title:"free",path:"/assets/tag/free/"}]}},{node:{id:"44db3bff31a24312c5888c5e1bfca26a",title:"ViewLink: VR to Live2D",published_date:"April 6th, 2022",description:"Are you a VTuber that wants to stream VR games, but only have a Live2D model? With ViewLink, you can have your Live2D avatar react to VR gameplay without any fancy setup or additional hardware!",hero_image:{type:"image",mimeType:"image/png",src:"/assets/static/viewlink.198d85a.96d1858bd12e1930d9722d93a45ec9e1.png",size:{width:1500,height:852},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/viewlink.1b91758.96d1858bd12e1930d9722d93a45ec9e1.png 480w","/assets/static/viewlink.3df3210.96d1858bd12e1930d9722d93a45ec9e1.png 1024w","/assets/static/viewlink.198d85a.96d1858bd12e1930d9722d93a45ec9e1.png 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 852' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-45f89c4a37002c1f8bd13b349126e647'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-45f89c4a37002c1f8bd13b349126e647)' width='1500' height='852' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAkCAIAAAC2bqvFAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEMUlEQVRYw%2b2W3U9bdRjHj5nJvNA71F3peCvteWnPaU9boOvbmLxjKaWIpCtp6QrGIXUN6ULLLJaBsqlAoMNgol5UbgbGlpiMvTFH5m5Qi9F44dX%2bAUcoxUzT45eV4OKNB2SJxtM8OXn6/M7L83lefs%2bPUKs1/2khJAAJQAKQACQACUAC%2bH8DaHg1r1NrtDvXxw2gwffUGo5TH4z3vJZVqViFXE1THKlgKUr98P2PBUCpZOE9y3Lwvry8Avqu5MHyglXcAwvPa/X6clig5O0QzaP%2b4W2k4tiJuqr%2bMdO7CUt0xtTu3SbB46Ix/h4A31coSLfbHQqFCguL7PaWcDji9XYZDMdgZxgVTTPwOH8tLZW1t7965kwQSk1N7alTfihYOnq0EHpPz2tQdhg0Wnhv9vfLl%2b4fviUcup575pZQvJKzvn8ZYXiYYf7AMoAkG43mRCLBMMrR0XfgSmdnZ3V1TSh0trf3DY/HU11di2tzs72urj4ajY6MjMpkZdA9Hi9uvnjxPb%2b/u68vMDAQ7u7uMRpNLKdhacrU5iG/euBcfRD%2b7n7plQ1iPkN8sfnc14L1/MccRaK6DgxAq9WVlJQODg4ODb09MTEBjKmpqXg8PjMzc2H7Nwb73NwcjLHYMKgikUhBwbNtba%2bMj4/Pzs6CYXp6GglcW0sHAm%2bSJKXR6nU0yX5486Vvhb7V9eevbI3%2bmHlxKUssZInUr/SNdUNNI8swYgqJENm4SqUKkUun0wh5UVExvB8ePh%2bPX0JcUUvJZOrcubcSic8AgBKan7/scrkCgcDY2IXJycnjx6tAGYvFUqnFkZERnb4cjWswmuUL92TLv0W/3yCSW/1rmx/8lLGubBILmSO3BasvoEJni0gCIX7zQSHBObgLGFQL0tLV5Tt9uhdLdrvdYrE2Nb1cVXWioqISVMFgEDfX1tbZbM3o%2bMbGJojJZG5tdZrNFiXNVJqsXPIekfrdejsTTGc%2b%2bjlD3ch2f7NZv7Lx9LJQ5Q8eMAC6SqfTI/uon3xXYIdBoRcXl4Anb4fAjjvLyuQymZyiaCzBCEt%2bdbfXUZW8kjF8evfQVQEhP7y4FfshU3Y9q7iWPbuWeeFa1tzUytK0mLEgtoTweZvN5nKdRFCRBL/fj3g3N7e0tDgaGhoQ5vr6BniW32GQHEh%2b9/zLJruzBfHbW5DFGyi5IxDJLPF5puDLzXB6fSj9C7cqVE6keIYSOdT20APYVVDZPp8PleBwOOA6/rrdnaDq6OhwOp0Iv0b8GMJkoCnrwLhiJffUsvDEUu7Jq7kjd4SKT%2b7qDUZOxYocBXuexCik3aGWbwzIfmczj%2blrcpy0jM0ZZm%2baphYtr0d0ag5vFH%2bmIPZxjnhUwZj7szD2IVo9ugQY288rGZYkOTTuXk5E/57DHK/eo%2bvScVoCkAAkAAlAApAAJIB/LH8Acm/3C%2b8Ndw4AAAAASUVORK5CYII=' /%3e%3c/svg%3e"},path:"/assets/view-link-vr-to-live2-d/",category:"Program",creators:[{id:"kawa",title:"kawa",path:"/assets/author/kawa/"}],tags:[{id:"free",title:"free",path:"/assets/tag/free/"},{id:"VR",title:"VR",path:"/assets/tag/VR/"}]}}]},allAssetsTag:{edges:[{node:{id:"tits",path:"/assets/tag/tits/",belongsTo:{totalCount:1}}},{node:{id:"VR",path:"/assets/tag/VR/",belongsTo:{totalCount:1}}},{node:{id:"vts asset",path:"/assets/tag/vts%20asset/",belongsTo:{totalCount:2}}},{node:{id:"overlay",path:"/assets/tag/overlay/",belongsTo:{totalCount:1}}},{node:{id:"online",path:"/assets/tag/online/",belongsTo:{totalCount:2}}},{node:{id:"free",path:"/assets/tag/free/",belongsTo:{totalCount:4}}},{node:{id:"paid",path:"/assets/tag/paid/",belongsTo:{totalCount:3}}}]}},c=function(t){var e=t.options;e.__staticData?e.__staticData.data=n:(e.__staticData=o.a.observable({data:n}),e.computed=r({$static:function(){return e.__staticData.data}},e.computed))},b=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("FullLayout",{attrs:{Align:"flex-start"}},[a("div",{staticClass:"asset-content"},[a("PageHeader",{attrs:{title:"Assets",subtitle:"We strive to make streaming better not only for our talents but for\n        all streamers! Below are a collection of our efforts."}}),a("SearchBar",{attrs:{placeholder:"Search assets"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.searchResults.length>0?a("div",[a("div",{staticClass:"posts"},t._l(t.searchResults,(function(t){return a("PostCard",{key:t.node.id,staticClass:"post-card",attrs:{width:450,post:t.node}})})),1)]):a("div",{staticClass:"no-results"},[a("p",[t._v("Sorry, your search didn't return any results.")]),a("br"),a("p",[t._v("\n        Still can't find what you're looking for? Consider messaging us on\n        "),a("a",{attrs:{href:"https://twitter.com/kawa_entertain"}},[t._v("Twitter")]),t._v("\n        or reach out via email at\n        "),a("a",{attrs:{href:"mailto:company@kawaentertainment.com?subject=Kawa%20Website",target:"_blank"}},[t._v("\n          company@kawaentertainment.com\n        ")]),t._v("\n        to suggest we add additional tools!\n      ")])])],1)])}),[],!1,null,null,null);"function"==typeof c&&c(b);e.default=b.exports},ol0r:function(t,e,a){"use strict";a("qePV");var s={props:{creator:{type:Object},size:{type:Number,default:48},resize_auto:{type:Boolean,default:!1}},data:function(){return{mobile:!1}},methods:{IsMobile:function(){this.resize_auto&&(this.mobile=window.innerWidth<=800)}},unmounted:function(){window.removeEventListener("resize",this.IsMobile)},mounted:function(){window.addEventListener("resize",this.IsMobile),this.IsMobile()}},i=(a("G5fe"),a("KHd+")),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("g-link",{staticClass:"creator",attrs:{to:t.creator.path}},[s("g-image",{staticClass:"creator__image",style:{width:(t.mobile?.75*t.size:t.size)+"px",height:(t.mobile?.75*t.size:t.size)+"px"},attrs:{src:a("73RA")("./"+t.creator.id+".png")}})],1)}),[],!1,null,"81f4335c",null);e.a=o.exports},pNMO:function(t,e,a){"use strict";var s=a("I+eb"),i=a("2oRo"),o=a("0GbY"),r=a("K6Rb"),n=a("xluM"),c=a("4zBA"),b=a("xDBR"),g=a("g6v/"),d=a("STAE"),l=a("0Dky"),u=a("Gi26"),f=a("6LWA"),h=a("Fib7"),A=a("hh1v"),p=a("OpvP"),w=a("2bX/"),v=a("glrk"),m=a("ewvW"),C=a("/GqU"),B=a("oEtG"),y=a("V37c"),E=a("XGwC"),k=a("fHMY"),D=a("33Wh"),x=a("JBy8"),M=a("BX/b"),P=a("dBg+"),Q=a("Bs8V"),G=a("m/L8"),X=a("N+g0"),I=a("0eef"),T=a("82ph"),S=a("busE"),H=a("VpIT"),Y=a("93I0"),j=a("0BK2"),O=a("kOOl"),z=a("tiKp"),F=a("5Tg+"),V=a("dG/n"),R=a("1E5z"),U=a("afO8"),W=a("tycR").forEach,L=Y("hidden"),K=z("toPrimitive"),N=U.set,J=U.getterFor("Symbol"),q=Object.prototype,Z=i.Symbol,_=Z&&Z.prototype,$=i.TypeError,tt=i.QObject,et=o("JSON","stringify"),at=Q.f,st=G.f,it=M.f,ot=I.f,rt=c([].push),nt=H("symbols"),ct=H("op-symbols"),bt=H("string-to-symbol-registry"),gt=H("symbol-to-string-registry"),dt=H("wks"),lt=!tt||!tt.prototype||!tt.prototype.findChild,ut=g&&l((function(){return 7!=k(st({},"a",{get:function(){return st(this,"a",{value:7}).a}})).a}))?function(t,e,a){var s=at(q,e);s&&delete q[e],st(t,e,a),s&&t!==q&&st(q,e,s)}:st,ft=function(t,e){var a=nt[t]=k(_);return N(a,{type:"Symbol",tag:t,description:e}),g||(a.description=e),a},ht=function(t,e,a){t===q&&ht(ct,e,a),v(t);var s=B(e);return v(a),u(nt,s)?(a.enumerable?(u(t,L)&&t[L][s]&&(t[L][s]=!1),a=k(a,{enumerable:E(0,!1)})):(u(t,L)||st(t,L,E(1,{})),t[L][s]=!0),ut(t,s,a)):st(t,s,a)},At=function(t,e){v(t);var a=C(e),s=D(a).concat(mt(a));return W(s,(function(e){g&&!n(pt,a,e)||ht(t,e,a[e])})),t},pt=function(t){var e=B(t),a=n(ot,this,e);return!(this===q&&u(nt,e)&&!u(ct,e))&&(!(a||!u(this,e)||!u(nt,e)||u(this,L)&&this[L][e])||a)},wt=function(t,e){var a=C(t),s=B(e);if(a!==q||!u(nt,s)||u(ct,s)){var i=at(a,s);return!i||!u(nt,s)||u(a,L)&&a[L][s]||(i.enumerable=!0),i}},vt=function(t){var e=it(C(t)),a=[];return W(e,(function(t){u(nt,t)||u(j,t)||rt(a,t)})),a},mt=function(t){var e=t===q,a=it(e?ct:C(t)),s=[];return W(a,(function(t){!u(nt,t)||e&&!u(q,t)||rt(s,nt[t])})),s};(d||(S(_=(Z=function(){if(p(_,this))throw $("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,e=O(t),a=function(t){this===q&&n(a,ct,t),u(this,L)&&u(this[L],e)&&(this[L][e]=!1),ut(this,e,E(1,t))};return g&&lt&&ut(q,e,{configurable:!0,set:a}),ft(e,t)}).prototype,"toString",(function(){return J(this).tag})),S(Z,"withoutSetter",(function(t){return ft(O(t),t)})),I.f=pt,G.f=ht,X.f=At,Q.f=wt,x.f=M.f=vt,P.f=mt,F.f=function(t){return ft(z(t),t)},g&&(st(_,"description",{configurable:!0,get:function(){return J(this).description}}),b||S(q,"propertyIsEnumerable",pt,{unsafe:!0}))),s({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),W(D(dt),(function(t){V(t)})),s({target:"Symbol",stat:!0,forced:!d},{for:function(t){var e=y(t);if(u(bt,e))return bt[e];var a=Z(e);return bt[e]=a,gt[a]=e,a},keyFor:function(t){if(!w(t))throw $(t+" is not a symbol");if(u(gt,t))return gt[t]},useSetter:function(){lt=!0},useSimple:function(){lt=!1}}),s({target:"Object",stat:!0,forced:!d,sham:!g},{create:function(t,e){return void 0===e?k(t):At(k(t),e)},defineProperty:ht,defineProperties:At,getOwnPropertyDescriptor:wt}),s({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:vt,getOwnPropertySymbols:mt}),s({target:"Object",stat:!0,forced:l((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(m(t))}}),et)&&s({target:"JSON",stat:!0,forced:!d||l((function(){var t=Z();return"[null]"!=et([t])||"{}"!=et({a:t})||"{}"!=et(Object(t))}))},{stringify:function(t,e,a){var s=T(arguments),i=e;if((A(e)||void 0!==t)&&!w(t))return f(e)||(e=function(t,e){if(h(i)&&(e=n(i,this,t,e)),!w(e))return e}),s[1]=e,r(et,null,s)}});if(!_[K]){var Ct=_.valueOf;S(_,K,(function(t){return n(Ct,this)}))}R(Z,"Symbol"),j[L]=!0},rdv8:function(t,e,a){var s=a("Ta7t"),i=Math.floor,o=function(t,e){var a=t.length,c=i(a/2);return a<8?r(t,e):n(t,o(s(t,0,c),e),o(s(t,c),e),e)},r=function(t,e){for(var a,s,i=t.length,o=1;o<i;){for(s=o,a=t[o];s&&e(t[s-1],a)>0;)t[s]=t[--s];s!==o++&&(t[s]=a)}return t},n=function(t,e,a,s){for(var i=e.length,o=a.length,r=0,n=0;r<i||n<o;)t[r+n]=r<i&&n<o?s(e[r],a[n])<=0?e[r++]:a[n++]:r<i?e[r++]:a[n++];return t};t.exports=o},uKsh:function(t,e,a){"use strict";a("BW2Y")}}]);