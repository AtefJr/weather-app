(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t),c.d(t,"apikey",(function(){return p}));var i=c(0),a=c(1),s=c.n(a),n=c(26),r=c.n(n),j=(c(33),c(34),c(8)),l=c(12),d=c.n(l),o=c(10),h=function(e){var t=e.suggestions,c=e.search_item,a=void 0===c?"":c,s=t.map((function(e,t){var c=e.LocalizedName.substring(a.length);return Object(i.jsx)("li",{className:"suggestions",children:Object(i.jsxs)(o.b,{to:"/city/".concat(e.Key,"/").concat(e.LocalizedName,"/").concat(e.Country.ID),children:[Object(i.jsx)("span",{style:{fontWeight:"bold",color:"red"},children:a}),c,", ",e.AdministrativeArea.LocalizedName,","," ",e.Country.LocalizedName]})},t)}));return Object(i.jsx)("div",{children:Object(i.jsx)("ul",{className:"suggestions",children:s})})},b=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(j.a)(n,2),l=r[0],b=r[1],u=function(e,t){var c=Object(a.useState)(e),i=Object(j.a)(c,2),s=i[0],n=i[1];return Object(a.useEffect)((function(){var c=setTimeout((function(){n(e)}),t);return function(){clearTimeout(c)}}),[e,t]),s}(l,800);Object(a.useEffect)((function(){u.length?d.a.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(p,"&q=").concat(u)).then((function(e){s(e.data)})):s([])}),[u]);var O=localStorage.getItem("city"),x=localStorage.getItem("name"),m=localStorage.getItem("country");return Object(i.jsxs)("div",{children:[Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{type:"text",placeholder:"Search for a City",onChange:function(e){return t=e.target.value,void b(t);var t}})," "]}),Object(i.jsx)("br",{}),null===O?"":Object(i.jsxs)(o.b,{className:"last-searched",to:"/city/".concat(O,"/").concat(x,"/").concat(m),children:["Last searched city: ",x,", ",m]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)(h,{suggestions:c,search_item:l})]})},u=function(e){var t=e.match.params,c=t.city,s=t.Name,n=t.Country,r=Object(a.useState)([{Temperature:{Metric:{Value:""}},RealFeelTemperature:{Metric:{Value:""}},Visibility:{Metric:{Value:""}},Pressure:{Metric:{Value:""}},Wind:{Speed:{Metric:{Value:""}}},RelativeHumidity:"",IndoorRelativeHumidity:"",WeatherText:"",WeatherIcon:"1"}]),l=Object(j.a)(r,2),o=l[0],h=l[1],b=Object(a.useState)(!1),u=Object(j.a)(b,2),O=u[0],x=u[1],m=Object(a.useState)(!1),v=Object(j.a)(m,2),f=v[0],g=v[1];return Object(a.useEffect)((function(){localStorage.setItem("city",c),localStorage.setItem("name",s),localStorage.setItem("country",n),x(!0),d.a.get("https://dataservice.accuweather.com/currentconditions/v1/".concat(c,"?apikey=").concat(p,"&details=true")).then((function(e){h(e.data),x(!1)})).catch((function(e){g(!0)}))}),[c,s,n]),Object(i.jsx)("section",{className:"ajax-section",children:Object(i.jsx)("div",{className:"container",children:f?Object(i.jsx)("div",{children:"Something went wrong ..."}):Object(i.jsx)("ul",{className:"cities",children:Object(i.jsxs)("li",{className:"city",children:[Object(i.jsxs)("h2",{className:"city-name",children:[Object(i.jsx)("span",{children:s}),Object(i.jsx)("sup",{children:n})]}),Object(i.jsx)("div",{className:"city-temp",children:O?Object(i.jsx)("div",{children:"Loading ..."}):Object(i.jsxs)("div",{children:[o[0].Temperature.Metric.Value,Object(i.jsx)("sup",{children:"\xb0C"})]})}),O?Object(i.jsx)("div",{}):Object(i.jsxs)("figure",{children:[Object(i.jsx)("img",{className:"city-icon",src:"https://developer.accuweather.com/sites/default/files/"+(1===o[0].WeatherIcon.toString().length?"0"+o[0].WeatherIcon:o[0].WeatherIcon)+"-s.png",alt:o[0].WeatherText}),Object(i.jsx)("figcaption",{children:o[0].WeatherText})]}),Object(i.jsxs)("div",{className:"details",children:[Object(i.jsx)("div",{children:O?Object(i.jsx)("div",{}):Object(i.jsxs)("div",{className:"city-detail",children:["RealFeel\xae"," ",Object(i.jsx)("span",{children:o[0].RealFeelTemperature.Metric.Value})," ","\xb0C"]})}),Object(i.jsx)("div",{children:O?Object(i.jsx)("div",{}):Object(i.jsxs)("div",{className:"city-detail",children:["Wind NNE"," ",Object(i.jsx)("span",{children:o[0].Wind.Speed.Metric.Value})," km/h"]})}),Object(i.jsx)("div",{children:O?Object(i.jsx)("div",{}):Object(i.jsxs)("div",{className:"city-detail",children:["Pressure"," ",Object(i.jsx)("span",{children:o[0].Pressure.Metric.Value})," mb"]})}),Object(i.jsx)("div",{children:O?Object(i.jsx)("div",{}):Object(i.jsxs)("div",{className:"city-detail",children:["Visibility"," ",Object(i.jsx)("span",{children:o[0].Visibility.Metric.Value})," km"]})}),Object(i.jsx)("div",{children:O?Object(i.jsx)("div",{}):Object(i.jsxs)("div",{className:"city-detail",children:["Humidity ",Object(i.jsx)("span",{children:o[0].RelativeHumidity}),"%"]})}),Object(i.jsx)("div",{children:O?Object(i.jsx)("div",{}):Object(i.jsxs)("div",{className:"city-detail",children:["Indoor Humidity"," ",Object(i.jsx)("span",{children:o[0].IndoorRelativeHumidity}),"%"]})})]})]})})})})},O=function(){return Object(i.jsx)("footer",{className:"page-footer",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("small",{children:["Made with ",Object(i.jsx)("span",{children:"\u2764"})," by"," ",Object(i.jsx)("a",{href:"https://www.linkedin.com/in/atefjr/",rel:"noreferrer",target:"_blank",children:"Mohamed Khalaf"}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{children:["Using",Object(i.jsx)("a",{href:"https://developer.accuweather.com/apis",rel:"noreferrer",target:"_blank",children:Object(i.jsx)("div",{className:"accu-link",children:"AccuWeather API"})})]})]})})})},x=c(2);var m=function(){return Object(i.jsx)(o.a,{basename:"/weather-app",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("header",{className:"top-banner",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"heading",children:" Simple Weather App "}),Object(i.jsxs)(x.c,{children:[Object(i.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(i.jsx)(b,{children:" "})}}),Object(i.jsx)(x.a,{exact:!0,path:"/city/:city/:Name/:Country",component:u})]})]})})," ",Object(i.jsx)(O,{})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),i(e),a(e),s(e),n(e)}))},p="RmQvUIQcXAfsIinKqn0yfXlB8YYuFI71";r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),v()}},[[57,1,2]]]);
//# sourceMappingURL=main.18947a5e.chunk.js.map