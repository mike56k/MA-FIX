(this["webpackJsonpvk-apps-image-example"]=this["webpackJsonpvk-apps-image-example"]||[]).push([[0],{133:function(e,t,a){e.exports=a(176)},176:function(e,t,a){"use strict";a.r(t);a(134),a(159);var n=a(0),r=a.n(n),c=a(60),l=a.n(c),m=a(15),s=a.n(m),i=a(37),o=a.n(i),u=a(61),p=a(62),d=a(63),g=a(66),E=a(65),f=a(6),h=(a(175),function(e){Object(g.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getImage=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("url").value,console.log({image:t}),t&&n.setState({image:t});case 3:case"end":return e.stop()}}),e)}))),n.state={user:null},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;s.a.send("VKWebAppGetUserInfo",{}).then((function(t){e.setState({user:t})}))}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.image;return r.a.createElement(f.l,{activePanel:"main"},r.a.createElement(f.h,{id:"main"},r.a.createElement(f.i,null,t?r.a.createElement(f.j,{status:"VK Apps Image Example",before:r.a.createElement(f.a,{size:36,src:t.photo_100})},t.first_name):"VK Apps Image Example"),r.a.createElement(f.e,{header:r.a.createElement(f.f,{mode:"secondary"},"\u0417\u0430\u0434\u0430\u043d\u0438\u0435")},r.a.createElement(f.c,null,"\u0423 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u043c\u0438\u043d\u0438-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0438\u043c\u0435\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u043e \u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0441\u0441\u044b\u043b\u043a\u0435. \u0423\u0432\u044b, \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0434\u043e\u043f\u0443\u0449\u0435\u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u0438\u0437-\u0437\u0430 \u0447\u0435\u0433\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0441\u0441\u044b\u043b\u043a\u0443. \u041d\u0443\u0436\u043d\u043e \u043e\u0431\u044a\u044f\u0441\u043d\u0438\u0442\u044c \u043f\u043e\u0447\u0435\u043c\u0443 \u0442\u0430\u043a \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0438 \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e \u043a\u0440\u0430\u0441\u0438\u0432\u043e \u0438 \u043b\u0430\u043a\u043e\u043d\u0438\u0447\u043d\u043e."),r.a.createElement(f.c,null,"\u0414\u043b\u044f \u043e\u0431\u043b\u0435\u0433\u0447\u0435\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"," ",r.a.createElement(f.k,{weight:"semibold"},"https://service.pavel.im/image")," ","(good code \u2014 \u0432\u0441\u0435 \u043a\u0440\u0443\u0442\u043e, bad code \u2014 \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430)"),r.a.createElement(f.d,null,r.a.createElement(f.g,{type:"text",id:"url"}),r.a.createElement(f.b,{size:"xl",onClick:this.getImage},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c")),!!a&&r.a.createElement(f.c,{style:{textAlign:"center"}},r.a.createElement("img",{src:a,alt:"remote file"})))))}}]),a}(r.a.Component));s.a.send("VKWebAppInit",{}),l.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.a09106af.chunk.js.map