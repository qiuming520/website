"use strict";(self.webpackChunkzfile_docs=self.webpackChunkzfile_docs||[]).push([[762],{4476:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var r=s(7624),i=s(2172);const l={id:"ipsec-network_zh",title:"IPsec\u8de8\u96c6\u7fa4\u7f51\u7edc"},t="IPsec\u8de8\u96c6\u7fa4\u5bb9\u5668\u7f51\u7edc\u89e3\u51b3\u65b9\u6848",c={id:"i18n/zh/v0.2.0/ipsec-network_zh",title:"IPsec\u8de8\u96c6\u7fa4\u7f51\u7edc",description:"\u4f7f\u7528IPsec\u96a7\u9053\u5728\u516c\u5171IP\u4e0a\u8fdb\u884c\u8de8\u96c6\u7fa4\u5bb9\u5668\u7f51\u7edc\u901a\u4fe1",source:"@site/docs/i18n/zh/v0.2.0/ccn-ipsec-tunnel_zh.md",sourceDirName:"i18n/zh/v0.2.0",slug:"/i18n/zh/v0.2.0/ipsec-network_zh",permalink:"/website/i18n/zh/v0.2.0/ipsec-network_zh",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/i18n/zh/v0.2.0/ccn-ipsec-tunnel_zh.md",tags:[],version:"current",frontMatter:{id:"ipsec-network_zh",title:"IPsec\u8de8\u96c6\u7fa4\u7f51\u7edc"}},d={},o=[{value:"\u4f7f\u7528IPsec\u96a7\u9053\u5728\u516c\u5171IP\u4e0a\u8fdb\u884c\u8de8\u96c6\u7fa4\u5bb9\u5668\u7f51\u7edc\u901a\u4fe1",id:"\u4f7f\u7528ipsec\u96a7\u9053\u5728\u516c\u5171ip\u4e0a\u8fdb\u884c\u8de8\u96c6\u7fa4\u5bb9\u5668\u7f51\u7edc\u901a\u4fe1",level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:3},{value:"\u76ee\u6807",id:"\u76ee\u6807",level:3},{value:"\u8bbe\u8ba1\u7ec6\u8282",id:"\u8bbe\u8ba1\u7ec6\u8282",level:2},{value:"API\u53d8\u66f4",id:"api\u53d8\u66f4",level:3},{value:"Cluster API\u53d8\u66f4",id:"cluster-api\u53d8\u66f4",level:4},{value:"Clusternode API\u53d8\u66f4",id:"clusternode-api\u53d8\u66f4",level:4},{value:"Nodeconfig API\u53d8\u66f4",id:"nodeconfig-api\u53d8\u66f4",level:4},{value:"\u7ec4\u4ef6\u4fee\u6539",id:"\u7ec4\u4ef6\u4fee\u6539",level:3},{value:"Clusterlink-controller-manager",id:"clusterlink-controller-manager",level:4},{value:"Clusterlink-elector",id:"clusterlink-elector",level:4},{value:"Clusterlink-network-manager",id:"clusterlink-network-manager",level:4},{value:"clusterlink-agent",id:"clusterlink-agent",level:4},{value:"kosmosctl",id:"kosmosctl",level:4}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"ipsec\u8de8\u96c6\u7fa4\u5bb9\u5668\u7f51\u7edc\u89e3\u51b3\u65b9\u6848",children:"IPsec\u8de8\u96c6\u7fa4\u5bb9\u5668\u7f51\u7edc\u89e3\u51b3\u65b9\u6848"}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528ipsec\u96a7\u9053\u5728\u516c\u5171ip\u4e0a\u8fdb\u884c\u8de8\u96c6\u7fa4\u5bb9\u5668\u7f51\u7edc\u901a\u4fe1",children:"\u4f7f\u7528IPsec\u96a7\u9053\u5728\u516c\u5171IP\u4e0a\u8fdb\u884c\u8de8\u96c6\u7fa4\u5bb9\u5668\u7f51\u7edc\u901a\u4fe1"}),"\n",(0,r.jsx)(n.h3,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,r.jsx)(n.p,{children:"Kosmos\u662f\u4e00\u4e2a\u591a\u96c6\u7fa4\u89e3\u51b3\u65b9\u6848\uff0c\u7f51\u7edc\u662f\u5176\u91cd\u8981\u7ec4\u6210\u90e8\u5206\u3002\r\n\u6709\u65f6\u5019\uff0c\u9700\u8981\u5728\u4e0d\u540c\u7f51\u7edc\u7684Kubernetes\u96c6\u7fa4\u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\u3002\r\n\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4e24\u4e2a\u6216\u591a\u4e2a\u96c6\u7fa4\u53ea\u80fd\u901a\u8fc7\u516c\u5171\u4e92\u8054\u7f51\u8fdb\u884c\u901a\u4fe1\u3002\r\n\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cKosmos\u5b9e\u73b0\u4e86\u57fa\u4e8eIPsec\u96a7\u9053\u7684\u8de8\u96c6\u7fa4\u5bb9\u5668\u7f51\u7edc\u901a\u4fe1\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u52a8\u673a",children:"\u52a8\u673a"}),"\n",(0,r.jsx)(n.p,{children:"\u51fa\u4e8e\u707e\u96be\u6062\u590d\u7684\u8003\u8651\uff0c\u5e94\u7528\u90e8\u7f72\u53ef\u80fd\u9700\u8981\u5728\u591a\u4e91\u591a\u96c6\u7fa4\u73af\u5883\u7684\u4e0d\u540c\u533a\u57df\uff08\u8de8VPC\uff09\u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\u3002\r\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8e\u673a\u5668\u7684\u5185\u90e8IP\u5730\u5740\u901a\u5e38\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\u800c\u6ca1\u6709\u4e13\u7528\u7f51\u7edc\u8fde\u63a5\uff0c\u5bb9\u5668\u901a\u4fe1\u53d8\u5f97\u5177\u6709\u6311\u6218\u6027\u3002\r\n\u5e38\u89c1\u7684CNI\u96a7\u9053\u6280\u672f\u5982VxLAN\u6216IPIP\u5728\u516c\u5171\u4e92\u8054\u7f51\u73af\u5883\u4e0b\u53ef\u80fd\u65e0\u6cd5\u6709\u6548\u5de5\u4f5c\u3002\r\n\u4e3a\u89e3\u51b3\u6b64\u95ee\u9898\uff0cKosmos\u5b9e\u73b0\u4e86\u57fa\u4e8eIPsec\u96a7\u9053\u7684\u5bb9\u5668\u7f51\u7edc\u901a\u4fe1\u89e3\u51b3\u65b9\u6848\uff0c\u7528\u4e8e\u901a\u8fc7\u516c\u5171\u4e92\u8054\u7f51\u8fdb\u884c\u8de8\u4e91\u901a\u4fe1\u3002\r\n\u8be5\u89e3\u51b3\u65b9\u6848\u65e8\u5728\u6ee1\u8db3\u5728\u516c\u5171\u7f51\u7edc\u4e2d\u8fdb\u884c\u901a\u4fe1\u7684\u9700\u6c42\uff0c\u5e76\u8003\u8651\u6570\u636e\u4f20\u8f93\u7684\u5b89\u5168\u6027\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u76ee\u6807",children:"\u76ee\u6807"}),"\n",(0,r.jsx)(n.p,{children:"\u76ee\u6807\u662f\u4f7f\u7528\u5f39\u6027\u516c\u5171IP\u5730\u5740\u4f7f\u4e24\u4e2a\u96c6\u7fa4\u4e2d\u7684Pod\u80fd\u591f\u901a\u4fe1\u3002\u4e0b\u56fe\u5c55\u793a\u4e86\u6d41\u91cf\u7684\u6d41\u5411\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"IPsec_Tunnel",src:s(4040).c+"",width:"1301",height:"331"})}),"\n",(0,r.jsx)(n.admonition,{title:"NOTE",type:"info",children:(0,r.jsx)(n.p,{children:"\u6b64\u89e3\u51b3\u65b9\u6848\u4e0d\u6d89\u53ca\u96c6\u7fa4\u5185\u4e3b\u673a\u7f51\u7edc\u6a21\u5f0f\u4e0b\u7684\u5bb9\u5668\u7f51\u7edc\u901a\u4fe1\u3002\r\n\u4ec5\u5173\u6ce8IPv4\u5bb9\u5668\u7f51\u7edc\u901a\u4fe1\uff0c\u5e76\u4e0d\u6db5\u76d6IPv6\u5bb9\u5668\u7f51\u7edc\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbe\u8ba1\u7ec6\u8282",children:"\u8bbe\u8ba1\u7ec6\u8282"}),"\n",(0,r.jsx)(n.h3,{id:"api\u53d8\u66f4",children:"API\u53d8\u66f4"}),"\n",(0,r.jsx)(n.h4,{id:"cluster-api\u53d8\u66f4",children:"Cluster API\u53d8\u66f4"}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u89e3\u51b3\u65b9\u6848\u5411 ",(0,r.jsx)(n.code,{children:".spec.ClusterLinkOptions"})," \u6dfb\u52a0\u4e86\u4e09\u4e2a\u5b57\u6bb5\uff1a",(0,r.jsx)(n.code,{children:"NodeElasticIPMap"}),"\u3001",(0,r.jsx)(n.code,{children:"ClusterPodCIDRs"})," \u548c ",(0,r.jsx)(n.code,{children:"UseExternalApiserver"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"script",children:'type ClusterLinkOptions struct {\r\n    ...\r\n    // NodeElasticIPMap\u8868\u793aKubernetes\u4e2d\u8282\u70b9\u540d\u79f0\u4e0e\u6302\u8f7d\u5728\u8282\u70b9\u4e0a\u7684\u5f39\u6027IP\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\r\n    // +optional\r\n    NodeElasticIPMap map[string]string `json:"nodeElasticIPMap,omitempty"`\r\n    // +optional\r\n    ClusterPodCIDRs []string `json:"clusterpodCIDRs,omitempty"`\r\n    // +optional\r\n    UseExternalApiserver bool `json:"useexternalapiserver,omitempty"`\r\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NodeElasticIPMap"})," \u5b57\u6bb5\u8868\u793aKubernetes\u4e2d\u8282\u70b9\u540d\u79f0\u4e0e\u6302\u8f7d\u5728\u8282\u70b9\u4e0a\u7684\u5f39\u6027\u516c\u5171IP\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ClusterPodCIDRs"})," \u5b57\u6bb5\u7528\u4e8e\u8f93\u5165Pod CIDR\uff0c\u56e0\u4e3a\u5bf9\u4e8e\u67d0\u4e9bCNI\u63d2\u4ef6\u6765\u8bf4\u83b7\u53d6Pod CIDR\u5e76\u4e0d\u603b\u662f\u5bb9\u6613\u7684\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u5e38\u60c5\u51b5\u4e0b\uff0cKosmos\u901a\u8fc7kube-apiserver\u53c2\u6570\u83b7\u53d6\u670d\u52a1CIDR\u3002\r\n\u7136\u800c\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0ckube-apiserver\u4e0d\u662f\u96c6\u7fa4\u5185\u7684\u4e00\u4e2aPod\u3002\r\n\u56e0\u6b64\uff0c\u6dfb\u52a0\u4e86 ",(0,r.jsx)(n.code,{children:"UseExternalApiserver"})," \u5b57\u6bb5\u4ee5\u5904\u7406\u8fd9\u79cd\u60c5\u51b5\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"clusternode-api\u53d8\u66f4",children:"Clusternode API\u53d8\u66f4"}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u89e3\u51b3\u65b9\u6848\u5411 ",(0,r.jsx)(n.code,{children:".spec"})," \u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u5b57\u6bb5 ",(0,r.jsx)(n.code,{children:"ElasticIP"}),"\uff0c\u5e76\u5411 ",(0,r.jsx)(n.code,{children:".status"})," \u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u5b57\u6bb5 ",(0,r.jsx)(n.code,{children:"NodeStatus"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"script",children:'type ClusterNodeSpec struct {\r\n    ...\r\n    // +optional\r\n    ElasticIP string `json:"elasticip,omitempty"`\r\n}\r\n\r\ntype ClusterNodeStatus struct {\r\n    // +optional\r\n    NodeStatus string `json:"nodeStatus,omitempty"`\r\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ElasticIP"})," \u5b57\u6bb5\u63cf\u8ff0\u4e86\u6302\u8f7d\u5728\u8282\u70b9\u4e0a\u7684\u5f39\u6027\u516c\u5171IP\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NodeStatus"}),' \u5b57\u6bb5\u63cf\u8ff0\u4e86\u8282\u70b9\u7684\u72b6\u6001\uff0c\u53ef\u4ee5\u662f "Ready" \u6216 "NotReady"\u3002']}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"nodeconfig-api\u53d8\u66f4",children:"Nodeconfig API\u53d8\u66f4"}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u89e3\u51b3\u65b9\u6848\u5411 ",(0,r.jsx)(n.code,{children:".spec"})," \u6dfb\u52a0\u4e86\u4e24\u4e2a\u65b0\u5b57\u6bb5 ",(0,r.jsx)(n.code,{children:"XfrmPoliciesXfrmStates"})," \u548c ",(0,r.jsx)(n.code,{children:"IPsetsAvoidMasqs"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"script",children:'type NodeConfigSpec struct {\r\n    XfrmPolicies     []XfrmPolicy `json:"xfrmpolicies,omitempty"`\r\n    XfrmStates       []XfrmState  `json:"xfrmstates,omitempty"`\r\n    IPsetsAvoidMasqs []IPset      `json:"ipsetsavoidmasq,omitempty"`\r\n}\r\n\r\ntype XfrmPolicy struct {\r\n    LeftIP   string `json:"leftip"`\r\n    LeftNet  string `json:"leftnet"`\r\n    RightIP  string `json:"rightip"`\r\n    RightNet string `json:"rightnet"`\r\n    ReqID    int    `json:"reqid"`\r\n    Dir      int    `json:"dir"`\r\n}\r\n\r\ntype XfrmState struct {\r\n    LeftIP  string `json:"leftip"`\r\n    RightIP string `json:"rightip"`\r\n    ReqID   int    `json:"reqid"`\r\n    SPI     uint32 `json:"spi"`\r\n    PSK     string `json:"PSK"`\r\n}\r\n\r\ntype IPset struct {\r\n    CIDR string `json:"cidr"`\r\n    Name string `json:"name"`\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u65b0\u7684 ",(0,r.jsx)(n.code,{children:"XfrmPolicies"})," \u548c ",(0,r.jsx)(n.code,{children:"XfrmStates"})," \u5b57\u6bb5\u5b9a\u4e49\u4e86Kosmos\u521b\u5efa\u7684\u4e0eIPsec\u76f8\u5173\u7684\u89c4\u5219\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"IPsetsAvoidMasqs"})," \u5b57\u6bb5\u63cf\u8ff0\u4e86\u9700\u8981\u907f\u514d\u4f2a\u88c5\u7684\u7f51\u7edc\u6bb5\uff0c\u5141\u8bb8\u5bb9\u5668\u7684\u51fa\u7ad9\u6d41\u91cf\u4fdd\u7559\u5176\u5bb9\u5668IP\u5730\u5740\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u7ec4\u4ef6\u4fee\u6539",children:"\u7ec4\u4ef6\u4fee\u6539"}),"\n",(0,r.jsx)(n.h4,{id:"clusterlink-controller-manager",children:"Clusterlink-controller-manager"}),"\n",(0,r.jsx)(n.p,{children:"\u5904\u7406kube-apiserver\u4e0d\u5728\u96c6\u7fa4\u5185\u7684\u60c5\u51b5\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u96c6\u7fa4\u63a7\u5236\u5668\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"GetSvcByCreateInvalidSvc"})," \u51fd\u6570\u4f18\u5316\u670d\u52a1CIDR\u7684\u83b7\u53d6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8282\u70b9\u72b6\u6001\u540c\u6b65\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8282\u70b9\u63a7\u5236\u5668\u57fa\u4e8e ",(0,r.jsx)(n.code,{children:"Cluster"})," \u5bf9\u8c61\u7684 ",(0,r.jsx)(n.code,{children:"NodeElasticIPMap"})," \u5b57\u6bb5\u503c\uff0c\u540c\u6b65 ",(0,r.jsx)(n.code,{children:"clusternode"})," \u5bf9\u8c61\u7684 ",(0,r.jsx)(n.code,{children:"ElasticIP"})," \u5b57\u6bb5\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:['\u8282\u70b9\u63a7\u5236\u5668\u73b0\u5728\u6839\u636e\u8282\u70b9\u7684\u72b6\u6001\uff08"Ready" \u6216 "NotReady"\uff09\u66f4\u65b0 ',(0,r.jsx)(n.code,{children:"clusternode"})," \u5bf9\u8c61\u7684 ",(0,r.jsx)(n.code,{children:".Status.NodeStatus"})," \u5b57\u6bb5\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"clusterlink-elector",children:"Clusterlink-elector"}),"\n",(0,r.jsx)(n.p,{children:'\u9009\u4e3e\u6a21\u5757\u7528\u4e8e\u5728\u7f51\u5173\u6a21\u5f0f\u4e2d\u9009\u62e9\u7f51\u5173\u3002\u73b0\u5728\uff0c\u5b83\u53ef\u4ee5\u4ece\u5904\u4e8e "Ready" \u72b6\u6001\u7684\u8282\u70b9\u4e2d\u9009\u62e9\u4e00\u4e2a\u7f51\u5173\u3002'}),"\n",(0,r.jsx)(n.h4,{id:"clusterlink-network-manager",children:"Clusterlink-network-manager"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6dfb\u52a0\u5bf9\u67d0\u4e9bCNI\u63d2\u4ef6\u7684\u652f\u6301\r\n\u5bf9\u4e8e\u67d0\u4e9bCNI\u63d2\u4ef6\uff0c\u6dfb\u52a0\u4e86iptables\u89c4\u5219\u4ee5\u907f\u514d\u4f2a\u88c5\uff0c\u5141\u8bb8\u5bb9\u5668\u7684\u51fa\u7ad9\u6d41\u91cf\u4fdd\u7559\u5176\u5bb9\u5668IP\u5730\u5740\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6784\u5efaIPsec\u89c4\u5219\r\n\u901a\u5e38\u60c5\u51b5\u4e0b\uff0cKosmos\u521b\u5efa\u8def\u7531\u4ee5\u5b9e\u73b0\u5bb9\u5668\u901a\u4fe1\u3002\u5728IPsec\u96a7\u9053\u6a21\u5f0f\u4e0b\uff0c\u5982\u679c ",(0,r.jsx)(n.code,{children:"clusternode"})," \u7684 ",(0,r.jsx)(n.code,{children:"ElasticIP"})," \u5b57\u6bb5\u4e0d\u4e3a\u7a7a\uff0cKosmos\u4f1a\u521b\u5efa ",(0,r.jsx)(n.code,{children:"ip xfrm state"})," \u548c ",(0,r.jsx)(n.code,{children:"ip xfrm policy"})," \u89c4\u5219\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"clusterlink-agent",children:"clusterlink-agent"}),"\n",(0,r.jsxs)(n.p,{children:["\u6dfb\u52a0\u4e86\u6267\u884c\u7279\u5b9a\u64cd\u4f5c\u7684\u51fd\u6570\uff0c\u76f8\u5f53\u4e8e\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u6267\u884c ",(0,r.jsx)(n.code,{children:"ip xfrm state add/del"})," \u548c ",(0,r.jsx)(n.code,{children:"ip xfrm policy add/del"})," \u547d\u4ee4\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u907f\u514d\u4f2a\u88c5\uff0c\u6dfb\u52a0\u4e86\u6267\u884c ",(0,r.jsx)(n.code,{children:"ipset"})," \u547d\u4ee4\u548c\u521b\u5efaiptables\u89c4\u5219\u7684\u51fd\u6570\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"kosmosctl",children:"kosmosctl"}),"\n",(0,r.jsxs)(n.p,{children:["\u6dfb\u52a0\u4e86 ",(0,r.jsx)(n.code,{children:"NodeElasticIP"}),"\u3001",(0,r.jsx)(n.code,{children:"UseExternalApiserver"})," \u548c ",(0,r.jsx)(n.code,{children:"ClusterPodCIDRs"})," \u8f93\u5165\u53c2\u6570\uff0c\u7528\u4e8e\u586b\u5145 ",(0,r.jsx)(n.code,{children:"Cluster"})," CRD \u4e2d\u7684\u65b0\u5b57\u6bb5 ",(0,r.jsx)(n.code,{children:"NodeElasticIPMap"}),"\u3001",(0,r.jsx)(n.code,{children:"UseExternalApiserver"})," \u548c ",(0,r.jsx)(n.code,{children:"ClusterPodCIDRs"}),"\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},4040:(e,n,s)=>{s.d(n,{c:()=>r});const r=s.p+"assets/images/IPsec_Tunnel-9f261fc88ef5a03937ab257a45539388.jpeg"},2172:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>t});var r=s(1504);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);