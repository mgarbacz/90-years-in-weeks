!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},r={},n={},i={}.hasOwnProperty,a=function(e,t){var r=n[e]||n[e+"/index.js"];return r||e},s=/^\.\.?(\/|$)/,u=function(e,t){for(var r,n=[],i=(s.test(t)?e+"/"+t:t).split("/"),a=0,u=i.length;u>a;a++)r=i[a],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},l=function(t){return function(r){var n=u(o(t),r);return e.require(n,t)}},c=function(e,t){var n={id:e,exports:{}};return r[e]=n,t(n.exports,l(e),n),n.exports},d=function(e,n){null==n&&(n="/");var s=a(e,n);if(i.call(r,s))return r[s].exports;if(i.call(t,s))return c(s,t[s]);var o=u(s,"./index");if(i.call(r,o))return r[o].exports;if(i.call(t,o))return c(o,t[o]);throw new Error('Cannot find module "'+e+'" from "'+n+'"')};d.alias=function(e,t){n[t]=e},d.register=d.define=function(e,r){if("object"==typeof e)for(var n in e)i.call(e,n)&&d.register(n,e[n]);else t[e]=r},d.list=function(){var e=[];for(var r in t)i.call(t,r)&&e.push(r);return e},d.brunch=!0,d._cache=r,e.require=d}}(),require.register("birthdate",function(e,t,r){"use strict";var n=t("constants"),i=t("date-helper"),a={birthdateElement:document.getElementById("birthdate"),setBirthdate:function(e){this.birthdateElement.value=e.toISOString().split("T")[0],this.birthdateElement.dispatchEvent(new Event("input"))},getWeeksSinceBirthdate:function(){var e=new Date(this.birthdateElement.value),t=i.todayInMs()-e.getTime(),r=t/n.MS_IN_SECOND,a=r/n.SECONDS_IN_MINUTE,s=a/n.MINUTES_IN_HOUR,u=s/n.HOURS_IN_DAY,o=u/n.DAYS_IN_YEAR,l=Math.round(o*n.WEEKS_IN_YEAR);return l},setupInputListener:function(e){this.birthdateElement.addEventListener("input",e)}};r.exports=a}),require.register("constants",function(e,t,r){"use strict";var n=1e3,i=60,a=60,s=24,u=365.25,o=52,l=90;r.exports={MS_IN_SECOND:n,SECONDS_IN_MINUTE:i,MINUTES_IN_HOUR:a,HOURS_IN_DAY:s,DAYS_IN_YEAR:u,WEEKS_IN_YEAR:o,TOTAL_YEARS:l}}),require.register("date-helper",function(e,t,r){"use strict";var n={today:function i(){var i=new Date;return i.setUTCHours(0,0,0,0),i},todayInMs:function(){return this.today().getTime()},yearsAgoFromToday:function(e){var t=this.today();return t.setUTCFullYear(t.getUTCFullYear()-e),t}};r.exports=n}),require.register("grid",function(e,t,r){"use strict";var n=t("constants"),i={gridElement:document.getElementById("grid"),fillWeeks:0,weekTemplate:function(e){var t="week";return e<this.fillWeeks&&(t+=" filled"),'<div class="'+t+'"></div>'},yearTemplate:function(e){for(var t='<div class="year">',r=0;r<n.WEEKS_IN_YEAR;r++){var i=e*n.WEEKS_IN_YEAR+r;t+=this.weekTemplate(i)}return t+"</div>"},gridTemplate:function(){for(var e="",t=0;t<n.TOTAL_YEARS;t++)e+=this.yearTemplate(t);return e},render:function(e){this.fillWeeks=e,this.gridElement.innerHTML=this.gridTemplate()}};r.exports=i}),require.register("init",function(e,t,r){"use strict";var n=t("constants"),i=t("date-helper"),a=t("grid"),s=t("birthdate");s.setupInputListener(function(){var e=s.getWeeksSinceBirthdate();a.render(e)});var u=i.yearsAgoFromToday(n.TOTAL_YEARS);s.setBirthdate(u)});