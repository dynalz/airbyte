"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4760],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73624:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={},s="Managing Airbyte Cloud",c={unversionedId:"cloud/managing-airbyte-cloud",id:"cloud/managing-airbyte-cloud",title:"Managing Airbyte Cloud",description:"This page will help you manage your Airbyte Cloud workspaces and understand Airbyte Cloud limitations.",source:"@site/../docs/cloud/managing-airbyte-cloud.md",sourceDirName:"cloud",slug:"/cloud/managing-airbyte-cloud",permalink:"/cloud/managing-airbyte-cloud",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/cloud/managing-airbyte-cloud.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Core Concepts",permalink:"/cloud/core-concepts"},next:{title:"Deploy Airbyte",permalink:"/quickstart/deploy-airbyte"}},p={},u=[{value:"Manage your Airbyte Cloud workspace",id:"manage-your-airbyte-cloud-workspace",level:2},{value:"Add users to your workspace",id:"add-users-to-your-workspace",level:3},{value:"Switch between multiple workspaces",id:"switch-between-multiple-workspaces",level:3},{value:"Rename a workspace",id:"rename-a-workspace",level:3},{value:"Delete a workspace",id:"delete-a-workspace",level:3},{value:"Manage Airbyte Cloud notifications",id:"manage-airbyte-cloud-notifications",level:2},{value:"Understand Airbyte Cloud limits",id:"understand-airbyte-cloud-limits",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"managing-airbyte-cloud"},"Managing Airbyte Cloud"),(0,o.kt)("p",null,"This page will help you manage your Airbyte Cloud workspaces and understand Airbyte Cloud limitations."),(0,o.kt)("h2",{id:"manage-your-airbyte-cloud-workspace"},"Manage your Airbyte Cloud workspace"),(0,o.kt)("p",null,"An Airbyte Workspace allows you to collaborate with other users and manage connections under a shared billing account."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Airbyte ",(0,o.kt)("a",{parentName:"p",href:"https://airbyte.com/pricing"},"credits")," are assigned per workspace and cannot be transferred between workspaces."))),(0,o.kt)("h3",{id:"add-users-to-your-workspace"},"Add users to your workspace"),(0,o.kt)("p",null,"To add a user to your workspace:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Airbyte Cloud dashboard, click ",(0,o.kt)("strong",{parentName:"p"},"Settings")," in the left-hand navigation bar. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Workspace Settings sidebar, click ",(0,o.kt)("strong",{parentName:"p"},"Access Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the top right-hand corner, click ",(0,o.kt)("strong",{parentName:"p"},"+ New User"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Add new users window, enter the email address of the user you want to invite to your workspace. Click ",(0,o.kt)("strong",{parentName:"p"},"Send invitation"),"."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The user will have access to only the workspace you invited them to. Also note that they will be added as a workspace admin by default."))))),(0,o.kt)("h3",{id:"switch-between-multiple-workspaces"},"Switch between multiple workspaces"),(0,o.kt)("p",null,"To switch between workspaces:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the Airbyte Cloud dashboard, click the current workspace name under the Airbyte logo in the left-hand navigation bar."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"View all workspaces"),"."),(0,o.kt)("li",{parentName:"ol"},"Click the name of the workspace you want to switch to.")),(0,o.kt)("h3",{id:"rename-a-workspace"},"Rename a workspace"),(0,o.kt)("p",null,"To rename a workspace:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the Airbyte Cloud dashboard, click ",(0,o.kt)("strong",{parentName:"li"},"Settings")," in the left-hand navigation bar. "),(0,o.kt)("li",{parentName:"ol"},"In the Workspace Settings sidebar, click ",(0,o.kt)("strong",{parentName:"li"},"General Settings"),"."),(0,o.kt)("li",{parentName:"ol"},"In the Workspace name field, enter the new name for your workspace. Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("h3",{id:"delete-a-workspace"},"Delete a workspace"),(0,o.kt)("p",null,"To delete a workspace:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the Airbyte Cloud dashboard, click ",(0,o.kt)("strong",{parentName:"li"},"Settings")," in the left-hand navigation bar. "),(0,o.kt)("li",{parentName:"ol"},"In the Workspace Settings sidebar, click ",(0,o.kt)("strong",{parentName:"li"},"General Settings"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Delete your workspace"),".")),(0,o.kt)("h2",{id:"manage-airbyte-cloud-notifications"},"Manage Airbyte Cloud notifications"),(0,o.kt)("p",null,"To set up Slack notifications:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the Airbyte Cloud dashboard, click ",(0,o.kt)("strong",{parentName:"li"},"Settings")," in the left-hand navigation bar. "),(0,o.kt)("li",{parentName:"ol"},"In the Workspace Settings sidebar, click ",(0,o.kt)("strong",{parentName:"li"},"Notifications.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://api.slack.com/messaging/webhooks"},"Create an Incoming Webhook for Slack"),"."),(0,o.kt)("li",{parentName:"ol"},"Navigate back to the Airbyte Cloud dashboard > Settings > Notifications and enter the Webhook URL. Click ",(0,o.kt)("strong",{parentName:"li"},"Save changes"),"."),(0,o.kt)("li",{parentName:"ol"},"Toggle the ",(0,o.kt)("strong",{parentName:"li"},"Send notifications when sync fails")," and ",(0,o.kt)("strong",{parentName:"li"},"Send notifications when sync succeeds")," buttons as required.")),(0,o.kt)("h2",{id:"understand-airbyte-cloud-limits"},"Understand Airbyte Cloud limits"),(0,o.kt)("p",null,"Understanding the following limitations will help you better manage Airbyte Cloud:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Max number of workspaces per user: 100"),(0,o.kt)("li",{parentName:"ul"},"Max number of sources in a workspace: 100"),(0,o.kt)("li",{parentName:"ul"},"Max number of destinations in a workspace: 100"),(0,o.kt)("li",{parentName:"ul"},"Max number of connection in a workspace: 100"),(0,o.kt)("li",{parentName:"ul"},"Max number of streams that can be returned by a source in a discover call: 1K"),(0,o.kt)("li",{parentName:"ul"},"Max number of streams that can be configured to sync in a single connection: 1K"),(0,o.kt)("li",{parentName:"ul"},"Size of a single record: 100MB"),(0,o.kt)("li",{parentName:"ul"},"Shortest sync schedule: Every 60 min"),(0,o.kt)("li",{parentName:"ul"},"Schedule accuracy: +/- 30 min")))}m.isMDXComponent=!0}}]);