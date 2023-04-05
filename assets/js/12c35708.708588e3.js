"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[25541],{8978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},o="Best Practices",s={unversionedId:"connector-development/best-practices",id:"connector-development/best-practices",title:"Best Practices",description:"In order to guarantee the highest quality for connectors, we've compiled the following best practices for connector development. Connectors which follow these best practices will be labelled as \"Airbyte Certified\" to indicate they've passed a high quality bar and will perform reliably in all production use cases. Following these guidelines is not required for your contribution to Airbyte to be accepted, as they add a barrier to entry for contribution \\(though adopting them certainly doesn't hurt!\\).",source:"@site/../docs/connector-development/best-practices.md",sourceDirName:"connector-development",slug:"/connector-development/best-practices",permalink:"/connector-development/best-practices",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/best-practices.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Connector Specification Reference",permalink:"/connector-development/connector-specification-reference"},next:{title:"UX Handbook",permalink:"/connector-development/ux-handbook"}},l={},c=[{value:"Principles of developing connectors",id:"principles-of-developing-connectors",level:2},{value:"Quality certification checklist",id:"quality-certification-checklist",level:2},{value:"Integration Testing",id:"integration-testing",level:3},{value:"Check Connection",id:"check-connection",level:3},{value:"Rate Limiting",id:"rate-limiting",level:3},{value:"Maintaining connectors",id:"maintaining-connectors",level:2},{value:"Schema Breaking Changes",id:"schema-breaking-changes",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"best-practices"},"Best Practices"),(0,i.kt)("p",null,"In order to guarantee the highest quality for connectors, we've compiled the following best practices for connector development. Connectors which follow these best practices will be labelled as \"Airbyte Certified\" to indicate they've passed a high quality bar and will perform reliably in all production use cases. Following these guidelines is ",(0,i.kt)("strong",{parentName:"p"},"not required")," for your contribution to Airbyte to be accepted, as they add a barrier to entry for contribution ","(","though adopting them certainly doesn't hurt!",")","."),(0,i.kt)("h2",{id:"principles-of-developing-connectors"},"Principles of developing connectors"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Reliability + usability ",">"," more features.")," It is better to support 1 feature that works reliably and has a great UX than 2 that are unreliable or hard to use. One solid connector is better than 2 finicky ones."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Fail fast.")," A user should not be able to configure something that will not work. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Fail actionably.")," If a failure is actionable by the user, clearly let them know what they can do. Otherwise, make it very easy for them to give us necessary debugging information ","(","logs etc.",")")),(0,i.kt)("p",null,"From these principles we extrapolate the following goals for connectors, in descending priority order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Correct user input should result in a successful sync.")," If there is an issue, it should be extremely easy for the user to see and report. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Issues arising from bad user input should print an actionable error message."),' "Invalid credentials" is not an actionable message. "Please verify your username/password is correct" is better. '),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Wherever possible, a connector should support incremental sync.")," This prevents excessive load on the underlying data source.  ",(0,i.kt)("em",{parentName:"li"},"*","*")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"When running a sync, a connector should communicate its status frequently to provide clear feedback that it is working.")," Output a log message at least every 5 minutes. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"A connector should allow reading or writing as many entities as is feasible.")," Supporting syncing all entities from an API is preferred to only supporting a small subset which would satisfy narrow use cases. Similarly, a database should support as many data types as is feasible. ")),(0,i.kt)("p",null,"Note that in the above list, the ",(0,i.kt)("em",{parentName:"p"},"least")," important is the number of features it has ","(","e.g: whether an API connector supports all entities in the API",")",". The most important thing is that for its declared features, it is reliable and usable. The only exception are \u201cminimum viability\u201d features e.g: for some sources, it\u2019s not feasible to pull data without incremental due to rate limiting issues. In this case, those are considered usability issues."),(0,i.kt)("h2",{id:"quality-certification-checklist"},"Quality certification checklist"),(0,i.kt)("p",null,'When reviewing connectors, we\'ll use the following "checklist" to verify whether the connector is considered "Airbyte certified" or closer to beta or alpha:'),(0,i.kt)("h3",{id:"integration-testing"},"Integration Testing"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"As much as possible, prove functionality via testing"),". This means slightly different things depending on the type of connector:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"All connectors")," must test all the sync modes they support during integration tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Database connectors")," should test that they can replicate ",(0,i.kt)("strong",{parentName:"li"},"all")," supported data types in both ",(0,i.kt)("inlineCode",{parentName:"li"},"read")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"discover")," operations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API connectors")," should validate records that every stream outputs data",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If this causes rate limiting problems, there should be a periodic CI build which tests this on a less frequent cadence to avoid rate limiting")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Thoroughly test edge cases.")," While Airbyte provides a ",(0,i.kt)("a",{parentName:"p",href:"/connector-development/testing-connectors/connector-acceptance-tests-reference"},"Standard Test Suite")," that all connectors must pass, it's not possible for the standard test suite to cover all edge cases. When in doubt about whether the standard tests provide sufficient evidence of functionality, write a custom test case for your connector."),(0,i.kt)("h3",{id:"check-connection"},"Check Connection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Verify permissions upfront"),'. The "check connection" operation should verify any necessary permissions upfront e.g: the provided API token has read access to the API entities. ',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'In some cases it\'s not possible to verify permissions without knowing which streams the user wants to replicate. For example, a provided API token only needs read access to the "Employees" entity if the user wants to replicate the "Employees" stream. In this case, the CheckConnection operation should verify the minimum needed requirements ',"(","e.g: the API token exists",")",', and the "read" or "write" operation should verify all needed permissions based on the provided catalog, failing if a required permission is not granted.'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Provide actionable feedback for incorrect input.")," ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Examples of non actionable error messages",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"Can\'t connect". The only recourse this gives the user is to guess whether they need to dig through logs or guess which field of their input configuration is incorrect. '))),(0,i.kt)("li",{parentName:"ul"},"Examples of actionable error messages",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"Your username/password combination is incorrect"'),(0,i.kt)("li",{parentName:"ul"},'"Unable to reach Database host: please verify that there are no firewall rules preventing Airbyte from connecting to the database"'),(0,i.kt)("li",{parentName:"ul"},"etc...")))))),(0,i.kt)("h3",{id:"rate-limiting"},"Rate Limiting"),(0,i.kt)("p",null,"Most APIs enforce rate limits. Your connector should gracefully handle those ","(","i.e: without failing the connector process",")",". The most common way to handle rate limits is to implement backoff."),(0,i.kt)("h2",{id:"maintaining-connectors"},"Maintaining connectors"),(0,i.kt)("p",null,"Once a connector has been published for use within Airbyte, we must take special care to account for the customer impact of updates to the connector."),(0,i.kt)("h3",{id:"schema-breaking-changes"},"Schema Breaking Changes"),(0,i.kt)("p",null,"For connectors that are GA certified or highly used by customers, we should not introduce backwards incompatible changes into a stream's schema that impact how existing data is replicated and represented in the downstream destination. The schema serves as a contract with customers to define how data is synchronized. Subtractive changes can COMPLETELY BREAK a customer's workflows built on top of Airbyte, sometimes in a silent way. "),(0,i.kt)("p",null,"The following types of changes are to be considered to be breaking:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Removing a property field from a schema"),(0,i.kt)("li",{parentName:"ul"},"Renaming a property field in a schema"),(0,i.kt)("li",{parentName:"ul"},"Changing a property's data type")),(0,i.kt)("p",null,"Exceptions can be made on a case by case basis, but if your updates require a subtractive change to the schema, you should consider whether the change is necessary or if there is an alternative that will not break backwards compatibility."))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);