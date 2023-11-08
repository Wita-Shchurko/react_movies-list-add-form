(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var s=i(3),a=i.n(s),l=(i(10),i(11),i(1)),c=(i(12),i(13),i(0));const n=e=>{let{movie:t}=e;return Object(c.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(c.jsx)("div",{className:"card-image",children:Object(c.jsx)("figure",{className:"image is-4by3",children:Object(c.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsxs)("div",{className:"media",children:[Object(c.jsx)("div",{className:"media-left",children:Object(c.jsx)("figure",{className:"image is-48x48",children:Object(c.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(c.jsx)("div",{className:"media-content",children:Object(c.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(c.jsxs)("div",{className:"content",children:[t.description,Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},r=e=>{let{movies:t}=e;return Object(c.jsx)("div",{className:"movies",children:t.map((e=>Object(c.jsx)(n,{movie:e},e.imdbId)))})};var o=i(4),d=i.n(o);const m=e=>{let{name:t,value:i,label:s=t,placeholder:a="Enter ".concat(s),required:n=!1,onChange:r=(()=>{}),urlChecker:o=null}=e;const[m]=Object(l.useState)((()=>"".concat(t,"-").concat(Math.random().toFixed(16).slice(2)))),[b,j]=Object(l.useState)(!1),h=b&&n&&!i;return Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{className:"label",htmlFor:m,children:s}),Object(c.jsx)("div",{className:"control",children:Object(c.jsx)("input",{name:t,type:"text",id:m,"data-cy":"movie-".concat(t),className:d()("input",{"is-danger":h||(null===o||void 0===o?void 0:o.isUrlWrong)}),placeholder:a,value:i,onChange:e=>r(e),onBlur:()=>j(!0),onInput:()=>null===o||void 0===o?void 0:o.setIsUrlWrong(!1)})}),h&&Object(c.jsx)("p",{className:"help is-danger",children:"".concat(s," is required")}),(null===o||void 0===o?void 0:o.isUrlWrong)&&Object(c.jsx)("p",{className:"help is-danger",children:"URL is incorrect"})]})},b=e=>{let{onAdd:t}=e;const[i,s]=Object(l.useState)(0),[a,n]=Object(l.useState)({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),[r,o]=Object(l.useState)(!0),[d,b]=Object(l.useState)(!1),[j,h]=Object(l.useState)(!1);Object(l.useEffect)((()=>{a.title.trim()&&a.imdbId.trim()&&a.imdbUrl.trim()&&a.imgUrl.trim()?o(!1):o(!0)}));const g=e=>{const{name:t,value:i}=e.target;n({...a,[t]:i})};return Object(c.jsxs)("form",{className:"NewMovie",onSubmit:e=>{e.preventDefault();const l=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/;let c=!1;l.test(a.imdbUrl.trim())||(b(!0),c=!0),l.test(a.imgUrl.trim())||(h(!0),c=!0),c||(s(i+1),t(a),n({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}))},children:[Object(c.jsx)("h2",{className:"title",children:"Add a movie"}),Object(c.jsx)(m,{name:"title",label:"Title",value:a.title,onChange:e=>g(e),required:!0}),Object(c.jsx)(m,{name:"description",label:"Description",value:a.description,onChange:e=>g(e)}),Object(c.jsx)(m,{name:"imgUrl",label:"Image URL",value:a.imgUrl,onChange:e=>g(e),urlChecker:{isUrlWrong:j,setIsUrlWrong:h},required:!0}),Object(c.jsx)(m,{name:"imdbUrl",label:"Imdb URL",value:a.imdbUrl,onChange:e=>g(e),urlChecker:{isUrlWrong:d,setIsUrlWrong:b},required:!0}),Object(c.jsx)(m,{name:"imdbId",label:"Imdb ID",value:a.imdbId,onChange:e=>g(e),required:!0}),Object(c.jsx)("div",{className:"field is-grouped",children:Object(c.jsx)("div",{className:"control",children:Object(c.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:r,children:"Add"})})})]},i)};var j=i(5);const h=()=>{const[e,t]=Object(l.useState)(j);return Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)("div",{className:"page-content",children:Object(c.jsx)(r,{movies:e})}),Object(c.jsx)("div",{className:"sidebar",children:Object(c.jsx)(b,{onAdd:i=>(i=>{t([...e,i])})(i)})})]})};a.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.18fd9048.chunk.js.map