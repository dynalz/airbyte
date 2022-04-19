"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5427],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},51246:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],s={},o="Salesloft",u={unversionedId:"integrations/sources/salesloft",id:"integrations/sources/salesloft",title:"Salesloft",description:"Overview",source:"@site/../docs/integrations/sources/salesloft.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/salesloft",permalink:"/integrations/sources/salesloft",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/salesloft.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Salesforce",permalink:"/integrations/sources/salesforce"},next:{title:"Sendgrid",permalink:"/integrations/sources/sendgrid"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Streams",id:"streams",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"salesloft"},"Salesloft"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The Salesloft source supports both ",(0,l.kt)("inlineCode",{parentName:"p"},"Full Refresh")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Incremental")," syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,l.kt)("h3",{id:"output-schema"},"Output schema"),(0,l.kt)("p",null,"Several output streams are available from this source. A list of these streams can be found below in the ",(0,l.kt)("a",{parentName:"p",href:"/integrations/sources/salesloft#streams"},"Streams")," section."),(0,l.kt)("h3",{id:"features"},"Features"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,l.kt)("h2",{id:"getting-started"},"Getting started"),(0,l.kt)("h3",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Salesloft Account"),(0,l.kt)("li",{parentName:"ul"},"Salesloft OAuth credentials")),(0,l.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,l.kt)("p",null,"Getting an admin level oauth credentials require registering as partner. Check out ",(0,l.kt)("a",{parentName:"p",href:"https://salesloft.com/partner-with-salesloft/"},"here")," and ",(0,l.kt)("a",{parentName:"p",href:"https://help.salesloft.com/s/article/Getting-Started-with-the-Salesloft-API"},"here")),(0,l.kt)("h2",{id:"streams"},"Streams"),(0,l.kt)("p",null,"List of available streams:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CadenceMemberships"),(0,l.kt)("li",{parentName:"ul"},"Cadences"),(0,l.kt)("li",{parentName:"ul"},"People"),(0,l.kt)("li",{parentName:"ul"},"Users"),(0,l.kt)("li",{parentName:"ul"},"Emails"),(0,l.kt)("li",{parentName:"ul"},"Account Stages"),(0,l.kt)("li",{parentName:"ul"},"Account Tiers"),(0,l.kt)("li",{parentName:"ul"},"Accounts"),(0,l.kt)("li",{parentName:"ul"},"Actions"),(0,l.kt)("li",{parentName:"ul"},"Calls"),(0,l.kt)("li",{parentName:"ul"},"Emails Templates"),(0,l.kt)("li",{parentName:"ul"},"Emails Template Attachements"),(0,l.kt)("li",{parentName:"ul"},"Imports"),(0,l.kt)("li",{parentName:"ul"},"Notes"),(0,l.kt)("li",{parentName:"ul"},"Person Stages"),(0,l.kt)("li",{parentName:"ul"},"Phone Number Assignments"),(0,l.kt)("li",{parentName:"ul"},"Steps"),(0,l.kt)("li",{parentName:"ul"},"Team Templates"),(0,l.kt)("li",{parentName:"ul"},"Team Template Attachements"),(0,l.kt)("li",{parentName:"ul"},"CRM Activities"),(0,l.kt)("li",{parentName:"ul"},"CRM Users"),(0,l.kt)("li",{parentName:"ul"},"Groups"),(0,l.kt)("li",{parentName:"ul"},"Successes")),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-03-28"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11460"},"11460")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Added multiple new streams (Accounts, Actions, Calls, Notes ... )")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-03-17"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11239"},"11239")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Added new Emails stream")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-01-25"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8617"},"8617")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-10-22"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6962"},"6962")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Salesloft Connector")))))}d.isMDXComponent=!0}}]);