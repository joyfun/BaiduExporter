!function(t){function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var a={};return n.m=t,n.c=a,n.i=function(t){return t},n.d=function(t,n,a){Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=1)}([,function(t,n){!function(){function t(){var t=[];if(r)t.push({name:yunData.server_filename,link:yunData.dlink});else{var o=$("#fileItems .on");if(0==o.length)return void showToast("请选择一下你要保存的文件哦","MODE_CAUTION");for(var i=0;i<o.length;i++){var u=o[i],s=yunData[$(u).attr("_position")];t.push({name:s.server_filename,link:s.dlink})}}if("TXT"==a)CORE.dataBox.show(),CORE.dataBox.fillData(t);else{var l=CORE.parseAuth(e),c=CORE.aria2Data(t,l[0],l[2]);n(c)}}function n(t){for(var n=CORE.parseAuth(e),a=0;a<t.length;a++){var r={url:n[1],dataType:"json",type:"POST",data:JSON.stringify(t[a]),headers:{Authorization:n[0]}};sendToBackground("rpc_data",r,function(t){t?showToast("下载成功!赶紧去看看吧~","MODE_SUCCESS"):showToast("下载失败!是不是没有开启aria2?","MODE_FAILURE")})}}var a="RPC",e="http://localhost:6800/jsonrpc",r=window.location.pathname.includes("file");CORE.requestCookies([{url:"http://pan.baidu.com/",name:"BDUSS"},{url:"http://pcs.baidu.com/",name:"pcsett"}]);var o=CORE.addMenu.init("album");o.on("click",".rpc_export_list",function(){a="RPC",e=$(this).data("id"),t()}),o.on("click","#aria2_download",function(){a="TXT",CORE.dataBox.init("share"),t()})}()}]);