(this.webpackJsonpnucampsite=this.webpackJsonpnucampsite||[]).push([[0],{146:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),c=a.n(o);a(93),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(94),a(95),a(96),a(97),a(98);var s=a(19),l=a(20),m=a(22),i=a(21),u=a(87),d=a(148),p=a(149),E=a(150),f=a(151),h=a(152),g=a(153),v=a(7),b=function(){return r.a.createElement("div",{className:"col"},r.a.createElement("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading..."))},N="http://54.147.44.30/";function O(e){var t=e.campsite;return r.a.createElement(d.a,null,r.a.createElement(v.b,{to:"/directory/".concat(t._id)},r.a.createElement(p.a,{width:"100%",src:N+t.image,alt:t.name}),r.a.createElement(E.a,null,r.a.createElement(f.a,null,t.name))))}var y=function(e){var t=e.campsites.campsites.map((function(e){return r.a.createElement("div",{key:e._id,className:"col-md-5 m-1"},r.a.createElement(O,{campsite:e}))}));return e.campsites.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.campsites.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,e.campsites.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(v.b,{to:"/home"},"Home")),r.a.createElement(g.a,{active:!0},"Directory")),r.a.createElement("h2",null,"Directory"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},w=a(15),M=a(154),k=a(155),L=a(156),S=a(174),j=a(157),F=a(158),A=a(159),C=a(11),I=a(28);function T(e){var t=e.campsite,a=e.favorite,n=e.postFavorite;return r.a.createElement("div",{className:"col-md-5 m-1"},r.a.createElement(I.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.a,null,r.a.createElement(p.a,{top:!0,src:N+t.image,alt:t.name}),r.a.createElement(E.a,null,r.a.createElement(M.a,{outline:!0,color:"primary",onClick:function(){return a?console.log("Already favorite"):n(t._id)}},a?r.a.createElement("i",{className:"fa fa-heart"}):r.a.createElement("i",{className:"fa fa-heart-o"}))),r.a.createElement(k.a,null,r.a.createElement(L.a,null,t.description)))))}function D(e){var t=e.comments,a=e.postComment,n=e.campsiteId;return t?r.a.createElement("div",{className:"col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement(I.Stagger,{in:!0},t.map((function(e){return r.a.createElement(I.Fade,{in:!0,key:e._id},r.a.createElement("div",null,r.a.createElement("p",null,e.text),r.a.createElement("p",null,e.rating," stars"),r.a.createElement("p",null,"-- ",e.author.firstname," ",e.author.lastname," , ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.updatedAt))))))}))),r.a.createElement(x,{campsiteId:n,postComment:a})):r.a.createElement("div",null)}var x=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(w.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(w.a)(n)),n}return Object(l.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.campsiteId,e.rating,e.text)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(M.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("i",{className:"fa fa-pencil fa-lg"})," Submit Comment"),r.a.createElement(S.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(j.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(F.a,null,r.a.createElement(C.LocalForm,{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("div",{className:"form-group"},r.a.createElement(A.a,{htmlFor:"rating"},"Rating"),r.a.createElement(C.Control.select,{model:".rating",id:"rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"))),r.a.createElement("div",{className:"form-group"},r.a.createElement(A.a,{htmlFor:"text"},"Comment"),r.a.createElement(C.Control.textarea,{model:".text",id:"text",name:"text",rows:"6",className:"form-control"})),r.a.createElement(M.a,{type:"submit",color:"primary"},"Submit")))))}}]),a}(n.Component);var _=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,e.errMess)))):e.campsite?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(v.b,{to:"/directory"},"Directory")),r.a.createElement(g.a,{active:!0},e.campsite.name)),r.a.createElement("h2",null,e.campsite.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(T,{campsite:e.campsite,favorite:e.favorite,postFavorite:e.postFavorite}),r.a.createElement(D,{comments:e.comments,postComment:e.postComment,campsiteId:e.campsite._id}))):r.a.createElement("div",null)},R=a(160);function P(e){var t=e.campsite,a=e.deleteFavorite;return r.a.createElement(R.a,{tag:"li"},r.a.createElement(R.a,{left:!0,middle:!0},r.a.createElement(R.a,{object:!0,src:N+t.image,alt:t.name})),r.a.createElement(R.a,{body:!0,className:"ml-5"},r.a.createElement(R.a,{heading:!0},t.name),r.a.createElement("p",null,t.description),r.a.createElement(M.a,{outline:!0,color:"danger",onClick:function(){return a(t._id)}},r.a.createElement("i",{className:"fa fa-times"}))))}var U=function(e){if(e.favorites.isLoading)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null)));if(e.favorites.errMess)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.favorites.errMess)));if(e.favorites.favorites&&e.favorites.favorites.campsites.length>0){var t=e.favorites.favorites.campsites.map((function(t){return r.a.createElement("div",{key:t._id,className:"col-12 mt-5"},r.a.createElement(P,{campsite:t,deleteFavorite:e.deleteFavorite}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(v.b,{to:"/home"},"Home")),r.a.createElement(g.a,{active:!0},"My Favorites")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"My Favorites"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(R.a,{list:!0},t)))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,"You have no favorites selected.")))},G=a(161),q=a(162),W=a(163),J=a(164),B=a(165),z=a(166),H=a(167),V=a(168),Y=a(169),Q=a(170),Z=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(w.a)(n)),n.toggleModal=n.toggleModal.bind(Object(w.a)(n)),n.handleLogin=n.handleLogin.bind(Object(w.a)(n)),n.handleLogout=n.handleLogout.bind(Object(w.a)(n)),n}return Object(l.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),this.props.loginUser({username:this.username.value,password:this.password.value}),e.preventDefault()}},{key:"handleLogout",value:function(){this.props.logoutUser()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{fluid:!0},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,"NuCamp"),r.a.createElement("h2",null,"a better way to camp"))))),r.a.createElement(q.a,{dark:!0,sticky:"top",expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(W.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"/images/logo.png",height:"30",width:"30",alt:"NuCamp Logo"})),r.a.createElement(J.a,{onClick:this.toggleNav}),r.a.createElement(B.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(z.a,{navbar:!0},r.a.createElement(H.a,null,r.a.createElement(v.c,{className:"nav-link",to:"/home"},r.a.createElement("i",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(H.a,null,r.a.createElement(v.c,{className:"nav-link",to:"/directory"},r.a.createElement("i",{className:"fa fa-list fa-lg"})," Directory")),r.a.createElement(H.a,null,r.a.createElement(v.c,{className:"nav-link",to:"/favorites"},r.a.createElement("i",{className:"fa fa-heart fa-lg"})," My Favorites")),r.a.createElement(H.a,null,r.a.createElement(v.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("i",{className:"fa fa-info fa-lg"})," About")),r.a.createElement(H.a,null,r.a.createElement(v.c,{className:"nav-link",to:"/contactus"},r.a.createElement("i",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(z.a,{className:"ml-auto",navbar:!0},r.a.createElement(H.a,null,this.props.auth.isAuthenticated?r.a.createElement("div",null,r.a.createElement("div",{className:"navbar-text mr-3"},this.props.auth.user.username),r.a.createElement(M.a,{outline:!0,onClick:this.handleLogout},r.a.createElement("span",{className:"fa fa-sign-out fa-lg"})," Logout",this.props.auth.isFetching?r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-fw"}):null)):r.a.createElement(M.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("i",{className:"fa fa-sign-in fa-lg"})," Login",this.props.auth.isFetching?r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-fw"}):null)))))),r.a.createElement(S.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(j.a,{toggle:this.toggleModal},"Login"),r.a.createElement(F.a,null,r.a.createElement(V.a,{onSubmit:this.handleLogin},r.a.createElement(Y.a,null,r.a.createElement(A.a,{htmlFor:"username"},"Username"),r.a.createElement(Q.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(Y.a,null,r.a.createElement(A.a,{htmlFor:"password"},"Password"),r.a.createElement(Q.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(Y.a,{check:!0},r.a.createElement(A.a,{check:!0},r.a.createElement(Q.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(M.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),a}(n.Component);var $=function(e){return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-sm-2 offset-1"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(v.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/directory"},"Directory")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/aboutus"},"About")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/contactus"},"Contact")))),r.a.createElement("div",{className:"col-6 col-sm-3 text-center"},r.a.createElement("h5",null,"Social"),r.a.createElement("a",{className:"btn btn-social-icon btn-instagram",href:"http://instagram.com/"},r.a.createElement("i",{className:"fa fa-instagram"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/"},r.a.createElement("i",{className:"fa fa-facebook"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"}))),r.a.createElement("div",{className:"col-sm-4 text-center"},r.a.createElement("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234"},r.a.createElement("i",{className:"fa fa-phone"})," 1-206-555-1234"),r.a.createElement("br",null),r.a.createElement("a",{role:"button",className:"btn btn-link",href:"mailto:notreal@notreal.co"},r.a.createElement("i",{className:"fa fa-envelope-o"})," campsites@nucamp.co")))))};function K(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(b,null):n?r.a.createElement("h4",null,n):r.a.createElement(I.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(50%)"}},r.a.createElement(d.a,null,r.a.createElement(p.a,{src:N+t.image,alt:t.name}),r.a.createElement(k.a,null,r.a.createElement(f.a,null,t.name),r.a.createElement(L.a,null,t.description))))}var X=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md m-1"},r.a.createElement(K,{item:e.campsite,isLoading:e.campsitesLoading,errMess:e.campsitesErrMess})),r.a.createElement("div",{className:"col-md m-1"},r.a.createElement(K,{item:e.promotion,isLoading:e.promotionLoading,errMess:e.promotionErrMess})),r.a.createElement("div",{className:"col-md m-1"},r.a.createElement(K,{item:e.partner,isLoading:e.partnerLoading,errMess:e.partnerErrMess}))))},ee=a(171),te=a(172),ae=function(e){return e&&e.length},ne=function(e){return function(t){return!t||t.length<=e}},re=function(e){return function(t){return t&&t.length>=e}},oe=function(e){return!isNaN(+e)},ce=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},se=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(w.a)(n)),n}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){console.log("Current state is: "+JSON.stringify(e)),this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(v.b,{to:"/home"},"Home")),r.a.createElement(g.a,{active:!0},"Contact Us")),r.a.createElement("h2",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content align-items-center"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"1 Nucamp Way",r.a.createElement("br",null),"Seattle, WA 98001",r.a.createElement("br",null),"U.S.A.")),r.a.createElement("div",{className:"col"},r.a.createElement("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234"},r.a.createElement("i",{className:"fa fa-phone"})," 1-206-555-1234"),r.a.createElement("br",null),r.a.createElement("a",{role:"button",className:"btn btn-link",href:"mailto:fakeemail@fakeemail.co"},r.a.createElement("i",{className:"fa fa-envelope-o"})," campsites@nucamp.co"))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Send us your Feedback"),r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-md-10"},r.a.createElement(C.Form,{model:"feedbackForm",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(ee.a,{className:"form-group"},r.a.createElement(A.a,{htmlFor:"firstName",md:2},"First Name"),r.a.createElement(te.a,{md:10},r.a.createElement(C.Control.text,{model:".firstName",id:"firstName",name:"firstName",placeholder:"First Name",className:"form-control",validators:{required:ae,minLength:re(2),maxLength:ne(15)}}),r.a.createElement(C.Errors,{className:"text-danger",model:".firstName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(ee.a,{className:"form-group"},r.a.createElement(A.a,{htmlFor:"lastName",md:2},"Last Name"),r.a.createElement(te.a,{md:10},r.a.createElement(C.Control.text,{model:".lastName",id:"lastName",name:"lastName",placeholder:"Last Name",className:"form-control",validators:{required:ae,minLength:re(2),maxLength:ne(15)}}),r.a.createElement(C.Errors,{className:"text-danger",model:".lastName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(ee.a,{className:"form-group"},r.a.createElement(A.a,{htmlFor:"phoneNum",md:2},"Phone"),r.a.createElement(te.a,{md:10},r.a.createElement(C.Control.text,{model:".phoneNum",id:"phoneNum",name:"phoneNum",placeholder:"Phone number",className:"form-control",validators:{required:ae,minLength:re(10),maxLength:ne(15),isNumber:oe}}),r.a.createElement(C.Errors,{className:"text-danger",model:".phoneNum",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 10 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(ee.a,{className:"form-group"},r.a.createElement(A.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(te.a,{md:10},r.a.createElement(C.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:ae,validEmail:ce}}),r.a.createElement(C.Errors,{className:"text-danger",model:".email",show:"touched",component:"div",messages:{required:"Required",validEmail:"Invalid email address"}}))),r.a.createElement(ee.a,{className:"form-group"},r.a.createElement(te.a,{md:{size:4,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(A.a,{check:!0},r.a.createElement(C.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(te.a,{md:4},r.a.createElement(C.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"By Phone"),r.a.createElement("option",null,"By Email")))),r.a.createElement(ee.a,{className:"form-group"},r.a.createElement(A.a,{htmlFor:"feedback",md:2},"Your Feedback"),r.a.createElement(te.a,{md:10},r.a.createElement(C.Control.textarea,{model:".feedback",id:"feedback",name:"feedback",rows:"12",className:"form-control"}))),r.a.createElement(ee.a,{className:"form-group"},r.a.createElement(te.a,{md:{size:10,offset:2}},r.a.createElement(M.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component),le=a(173);function me(e){var t=e.partner;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{object:!0,src:N+t.image,alt:t.name,width:"150"}),r.a.createElement(R.a,{body:!0,className:"ml-5 mb-4"},r.a.createElement(R.a,{heading:!0},t.name),t.description)):r.a.createElement("div",null)}function ie(e){var t=e.partners.partners.map((function(e){return r.a.createElement(I.Fade,{in:!0,key:e._id},r.a.createElement(R.a,{tag:"li"},r.a.createElement(me,{partner:e})))}));return e.partners.isLoading?r.a.createElement(b,null):e.partners.errMess?r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,e.partners.errMess)):r.a.createElement("div",{className:"col mt-4"},r.a.createElement(R.a,{list:!0},r.a.createElement(I.Stagger,{in:!0},t)))}var ue=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(v.b,{to:"/home"},"Home")),r.a.createElement(g.a,{active:!0},"About Us")),r.a.createElement("h2",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h3",null,"Our Mission"),r.a.createElement("p",null,"We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(d.a,null,r.a.createElement(le.a,{className:"bg-primary text-white"},r.a.createElement("h3",null,"Facts At a Glance")),r.a.createElement(k.a,null,r.a.createElement("dl",{className:"row"},r.a.createElement("dt",{className:"col-6"},"Founded"),r.a.createElement("dd",{className:"col-6"},"February 3, 2016"),r.a.createElement("dt",{className:"col-6"},"No. of Campsites in 2019"),r.a.createElement("dd",{className:"col-6"},"563"),r.a.createElement("dt",{className:"col-6"},"No. of Reviews in 2019"),r.a.createElement("dd",{className:"col-6"},"4388"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"42"))))),r.a.createElement("div",{className:"col"},r.a.createElement(d.a,{className:"bg-light mt-3"},r.a.createElement(k.a,null,r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail."),r.a.createElement("footer",{className:"blockquote-footer"},"Muriel Strode,"," ",r.a.createElement("cite",{title:"Source Title"},'"Wind-Wafted Wild Flowers" - The Open Court, 1903'))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Community Partners")),r.a.createElement(ie,{partners:e.partners})))},de=a(9),pe=a(26),Ee=function(){return{type:"CAMPSITES_LOADING"}},fe=function(e){return{type:"CAMPSITES_FAILED",payload:e}},he=function(e){return{type:"ADD_CAMPSITES",payload:e}},ge=function(e){return{type:"COMMENTS_FAILED",payload:e}},ve=function(e){return{type:"ADD_COMMENTS",payload:e}},be=function(){return{type:"PROMOTIONS_LOADING"}},Ne=function(e){return{type:"PROMOTIONS_FAILED",payload:e}},Oe=function(e){return{type:"ADD_PROMOTIONS",payload:e}},ye=function(){return{type:"PARTNERS_LOADING"}},we=function(e){return{type:"PARTNERS_FAILED",payload:e}},Me=function(e){return{type:"ADD_PARTNERS",payload:e}},ke=function(){return function(e){e(Le());var t="Bearer "+localStorage.getItem("token");return fetch(N+"api/favorites",{headers:{Authorization:t}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(t){return e(je(t))})).catch((function(t){return e(Se(t.message))}))}},Le=function(){return{type:"FAVORITES_LOADING"}},Se=function(e){return{type:"FAVORITES_FAILED",payload:e}},je=function(e){return{type:"ADD_FAVORITES",payload:e}},Fe=a(16),Ae=["component"],Ce={postComment:function(e,t,a){return function(e,t,a){return function(n){var r={campsite:e,rating:t,text:a};console.log("Comment ",r);var o="Bearer "+localStorage.getItem("token");return fetch(N+"api/comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json",Authorization:o},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return n({type:"ADD_COMMENT",payload:e})})).catch((function(e){console.log("post comment",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(e,t,a)},postFeedback:function(e){return function(e){return function(){return fetch(N+"api/feedback",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){console.log("Feedback:",e),alert("Thank you for your feedback!\n"+JSON.stringify(e))})).catch((function(e){console.log("Feedback:",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(e)},fetchCampsites:function(){return function(e){return e(Ee()),fetch(N+"api/campsites").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(he(t))})).catch((function(t){return e(fe(t.message))}))}},resetFeedbackForm:function(){return C.actions.reset("feedbackForm")},fetchComments:function(){return function(e){return fetch(N+"api/comments").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ve(t))})).catch((function(t){return e(ge(t.message))}))}},fetchPromotions:function(){return function(e){return e(be()),fetch(N+"api/promotions").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Oe(t))})).catch((function(t){return e(Ne(t.message))}))}},fetchPartners:function(){return function(e){return e(ye()),fetch(N+"api/partners").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Me(t))})).catch((function(t){return e(we(t.message))}))}},loginUser:function(e){return function(e){return function(t){return t(function(e){return{type:"LOGIN_REQUEST",creds:e}}(e)),fetch(N+"api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(a){if(!a.success){var n=new Error("Error "+a.status);throw n.response=a,n}localStorage.setItem("token",a.token),localStorage.setItem("creds",JSON.stringify(e)),t(ke()),t(function(e){return{type:"LOGIN_SUCCESS",token:e.token}}(a))})).catch((function(e){return t({type:"LOGIN_FAILURE",message:e.message})}))}}(e)},logoutUser:function(){return function(e){e({type:"LOGOUT_REQUEST"}),localStorage.removeItem("token"),localStorage.removeItem("creds"),e(Se("Error 401: Unauthorized")),e({type:"LOGOUT_SUCCESS"})}},fetchFavorites:function(){return ke()},postFavorite:function(e){return function(e){return function(t){var a="Bearer "+localStorage.getItem("token");return fetch(N+"api/favorites/"+e,{method:"POST",headers:{Authorization:a},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){console.log("Favorite Added",e),t(je(e))})).catch((function(e){return t(Se(e.message))}))}}(e)},deleteFavorite:function(e){return function(e){return function(t){var a="Bearer "+localStorage.getItem("token");return fetch(N+"api/favorites/"+e,{method:"DELETE",headers:{Authorization:a},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){console.log("Favorite Deleted",e),t(je(e))})).catch((function(e){return t(Se(e.message))}))}}(e)}},Ie=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchCampsites(),this.props.fetchComments(),this.props.fetchPromotions(),this.props.fetchPartners(),this.props.fetchFavorites()}},{key:"render",value:function(){var e=this,t=function(t){var a=t.component,n=Object(u.a)(t,Ae);return r.a.createElement(de.b,Object.assign({},n,{render:function(t){return e.props.auth.isAuthenticated?r.a.createElement(a,t):r.a.createElement(de.a,{to:{pathname:"/home",state:{from:t.location}}})}}))};return r.a.createElement("div",null,r.a.createElement(Z,{auth:this.props.auth,loginUser:this.props.loginUser,logoutUser:this.props.logoutUser}),r.a.createElement(Fe.TransitionGroup,null,r.a.createElement(Fe.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(de.d,null,r.a.createElement(de.b,{path:"/home",component:function(){return r.a.createElement(X,{campsite:e.props.campsites.campsites.filter((function(e){return e.featured}))[0],campsitesLoading:e.props.campsites.isLoading,campsitesErrMess:e.props.campsites.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promotionLoading:e.props.promotions.isLoading,promotionErrMess:e.props.promotions.errMess,partner:e.props.partners.partners.filter((function(e){return e.featured}))[0],partnerLoading:e.props.partners.isLoading,partnerErrMess:e.props.partners.errMess})}}),r.a.createElement(de.b,{exact:!0,path:"/directory",render:function(){return r.a.createElement(y,{campsites:e.props.campsites})}}),r.a.createElement(de.b,{path:"/directory/:campsiteId",component:function(t){var a=t.match;return e.props.auth.isAuthenticated?r.a.createElement(_,{campsite:e.props.campsites.campsites.filter((function(e){return e._id===a.params.campsiteId}))[0],isLoading:e.props.campsites.isLoading,errMess:e.props.campsites.errMess,comments:e.props.comments.comments.filter((function(e){return e.campsite===a.params.campsiteId})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment,favorite:!!e.props.favorites.favorites.exists&&e.props.favorites.favorites.campsites.some((function(e){return e._id===a.params.campsiteId})),postFavorite:e.props.postFavorite}):r.a.createElement(_,{campsite:e.props.campsites.campsites.filter((function(e){return e._id===a.params.campsiteId}))[0],isLoading:e.props.campsites.isLoading,errMess:e.props.campsites.errMess,comments:e.props.comments.comments.filter((function(e){return e.campsite===a.params.campsiteId})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment,favorite:!1,postFavorite:e.props.postFavorite})}}),r.a.createElement(t,{exact:!0,path:"/favorites",component:function(){return r.a.createElement(U,{favorites:e.props.favorites,deleteFavorite:e.props.deleteFavorite})}}),r.a.createElement(de.b,{exact:!0,path:"/contactus",render:function(){return r.a.createElement(se,{postFeedback:e.props.postFeedback,resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(de.b,{exact:!0,path:"/aboutus",render:function(){return r.a.createElement(ue,{partners:e.props.partners})}}),r.a.createElement(de.a,{to:"/home"})))),r.a.createElement($,null))}}]),a}(n.Component),Te=Object(de.g)(Object(pe.connect)((function(e){return{campsites:e.campsites,comments:e.comments,partners:e.partners,promotions:e.promotions,favorites:e.favorites,auth:e.auth}}),Ce)(Ie)),De=a(6),xe=a(27),_e=a(85),Re=a(86),Pe=a.n(Re),Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,campsites:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CAMPSITES":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!1,errMess:null,campsites:t.payload});case"CAMPSITES_LOADING":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!0,errMess:null,campsites:[]});case"CAMPSITES_FAILED":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(De.a)(Object(De.a)({},e),{},{errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(De.a)(Object(De.a)({},e),{},{errMess:t.payload});case"ADD_COMMENT":var a=t.payload;return Object(De.a)(Object(De.a)({},e),{},{comments:e.comments.concat(a)});default:return e}},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,partners:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PARTNERS":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!1,errMess:null,partners:t.payload});case"PARTNERS_LOADING":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!0,errMess:null,partners:[]});case"PARTNERS_FAILED":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOTIONS":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOTIONS_LOADING":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case"PROMOTIONS_FAILED":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,favorites:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVORITES":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!1,errMess:null,favorites:t.payload});case"FAVORITES_LOADING":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!0,errMess:null,favorites:null});case"FAVORITES_FAILED":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!1,errMess:t.payload,favorites:null});default:return e}},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isAuthenticated:!!localStorage.getItem("token"),token:localStorage.getItem("token"),user:localStorage.getItem("creds")?JSON.parse(localStorage.getItem("creds")):null,errMess:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_REQUEST":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!0,isAuthenticated:!1,user:t.creds});case"LOGIN_SUCCESS":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!1,isAuthenticated:!0,errMess:"",token:t.token});case"LOGIN_FAILURE":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!1,isAuthenticated:!1,errMess:t.message});case"LOGOUT_REQUEST":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!0,isAuthenticated:!0});case"LOGOUT_SUCCESS":return Object(De.a)(Object(De.a)({},e),{},{isLoading:!1,isAuthenticated:!1,token:"",user:null});default:return e}},ze={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"Phone",feedback:""},He=(a(146),Object(xe.createStore)(Object(xe.combineReducers)(Object(De.a)({campsites:Ue,comments:Ge,partners:qe,promotions:We,auth:Be,favorites:Je},Object(C.createForms)({feedbackForm:ze}))),Object(xe.applyMiddleware)(_e.a,Pe.a))),Ve=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(pe.Provider,{store:He},r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement(Te,null))))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(147)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.264251fb.chunk.js.map