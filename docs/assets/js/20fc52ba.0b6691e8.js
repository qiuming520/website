"use strict";(self.webpackChunkzfile_docs=self.webpackChunkzfile_docs||[]).push([[724],{2592:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var n=s(7624),o=s(2172);const l={id:"quick-start",title:"Quick Start"},c="Quick Start",i={id:"v0.2.0/quick-start",title:"Quick Start",description:"Kosmos is equipped with a tool called kosmosctl, which allows for quick deployment of Kosmos components, adding clusters, and testing network connectivity.",source:"@site/docs/v0.2.0/quickstart.md",sourceDirName:"v0.2.0",slug:"/v0.2.0/quick-start",permalink:"/website/v0.2.0/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/v0.2.0/quickstart.md",tags:[],version:"current",lastUpdatedBy:"ONE7live",lastUpdatedAt:1708679400,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{id:"quick-start",title:"Quick Start"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/website/v0.2.0/getting-started/introduction"},next:{title:"Multi-cluster Service Discovery",permalink:"/website/v0.2.0/tutorials/mcs-discovery"}},r={},a=[{value:"kosmosctl",id:"kosmosctl",level:2},{value:"Install Kosmos",id:"install-kosmos",level:2},{value:"Join the Leaf Cluster",id:"join-the-leaf-cluster",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsx)(t.p,{children:"Kosmos is equipped with a tool called kosmosctl, which allows for quick deployment of Kosmos components, adding clusters, and testing network connectivity."}),"\n",(0,n.jsx)(t.h2,{id:"kosmosctl",children:"kosmosctl"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"script",children:"wget https://github.com/kosmos-io/kosmos/releases/tag/v0.2.0-lts/kosmosctl-linux-amd64\nmv kosmosctl-linux-amd64 kosmosctl\n"})}),"\n",(0,n.jsx)(t.h2,{id:"install-kosmos",children:"Install Kosmos"}),"\n",(0,n.jsx)(t.p,{children:"The following command allows you to quickly run an experimental environment with three clusters. Install the control plane in the host cluster."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"script",children:"kosmosctl install  --cni calico --default-nic eth0 (We build a network tunnel based the network interface value passed by the arg default-nic)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"join-the-leaf-cluster",children:"Join the Leaf Cluster"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",metastring:"script",children:"kosmosctl join cluster --name cluster1 --kubeconfig ~/kubeconfig/cluster1-kubeconfig  --cni calico --default-nic eth0  --enable-all\nkosmosctl join cluster --name cluster2 --kubeconfig ~/kubeconfig/cluster2-kubeconfig  --cni calico --default-nic eth0  --enable-all\n"})}),"\n",(0,n.jsx)(t.p,{children:"And then we can Use the Kosmos clusters like single cluster."})]})}function d(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},2172:(e,t,s)=>{s.d(t,{I:()=>i,M:()=>c});var n=s(1504);const o={},l=n.createContext(o);function c(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);