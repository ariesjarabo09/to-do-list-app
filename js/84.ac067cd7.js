"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[84],{2084:(e,l,t)=>{t.r(l),t.d(l,{default:()=>T});var o=t(9835),n=t(6970),a=t(1957);const s=(0,o._)("div",{class:"text-h4"},"To-Do List",-1),i={class:"row justify-center"},d={class:"col-12"},u=(0,o._)("div",{class:"row justify-center"},[(0,o._)("div",{class:"col-12"},[(0,o._)("div",{class:"text-h6"},"No Items")])],-1),c=(0,o._)("div",{class:"text-h6"}," Are you sure you want to delete this task? ",-1);function r(e,l,t,r,m,w){const f=(0,o.up)("q-card-section"),g=(0,o.up)("q-input"),p=(0,o.up)("q-btn"),k=(0,o.up)("q-separator"),v=(0,o.up)("q-td"),b=(0,o.up)("q-table"),y=(0,o.up)("q-card-actions"),_=(0,o.up)("q-card"),C=(0,o.up)("q-dialog"),I=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(I,{class:"flex flex-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{class:"my-card",style:{width:"600px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[s])),_:1}),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o._)("div",i,[(0,o._)("div",d,[(0,o.Wm)(g,{modelValue:e.todoTask,"onUpdate:modelValue":l[0]||(l[0]=l=>e.todoTask=l),label:"Input Task"},null,8,["modelValue"]),(0,o.Wm)(g,{modelValue:e.personel,"onUpdate:modelValue":l[1]||(l[1]=l=>e.personel=l),label:"Assigned Personnel To The Task"},null,8,["modelValue"]),(0,o.Wm)(p,{round:"",dense:"",flat:"",label:"Submit",color:"primary",disable:!e.todoTask,onClick:e.addItem},null,8,["disable","onClick"])])])])),_:1}),(0,o.Wm)(k),e.todoList.length>0?((0,o.wg)(),(0,o.j4)(f,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{rows:e.todoList,columns:e.columns,"row-key":"id",flat:"","wrap-cells":"",class:"my-table"},{"body-cell-todoList":(0,o.w5)((l=>[l.row.editing?((0,o.wg)(),(0,o.j4)(v,{key:1,class:"text-left"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{modelValue:l.row.todoList,"onUpdate:modelValue":e=>l.row.todoList=e,dense:"",onBlur:t=>e.saveItem(l.row),onKeydown:(0,a.D2)((t=>e.saveItem(l.row)),["enter"])},null,8,["modelValue","onUpdate:modelValue","onBlur","onKeydown"])])),_:2},1024)):((0,o.wg)(),(0,o.j4)(v,{key:0,class:"text-left"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(l.row.todoList),1)])),_:2},1024))])),"body-cell-name":(0,o.w5)((l=>[l.row.editing?((0,o.wg)(),(0,o.j4)(v,{key:1,class:"text-left"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{modelValue:l.row.name,"onUpdate:modelValue":e=>l.row.name=e,dense:"",onBlur:t=>e.saveItem(l.row),onKeydown:(0,a.D2)((t=>e.saveItem(l.row)),["enter"])},null,8,["modelValue","onUpdate:modelValue","onBlur","onKeydown"])])),_:2},1024)):((0,o.wg)(),(0,o.j4)(v,{key:0,class:"text-left"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(l.row.name),1)])),_:2},1024))])),"body-cell-actions":(0,o.w5)((l=>[(0,o.Wm)(v,{key:"actions",class:"text-center"},{default:(0,o.w5)((()=>[l.row.editing?((0,o.wg)(),(0,o.j4)(p,{key:1,round:"",dense:"",flat:"",icon:"done",class:"text-light-blue-6",onClick:t=>e.toggleEditing(l.row)},null,8,["onClick"])):((0,o.wg)(),(0,o.j4)(p,{key:0,round:"",dense:"",flat:"",icon:"edit",class:"text-light-blue-6",onClick:t=>e.toggleEditing(l.row)},null,8,["onClick"])),(0,o.Wm)(p,{round:"",dense:"",flat:"",icon:"clear",class:"text-red-6",onClick:t=>e.confirmDeleteItem(l.row)},null,8,["onClick"])])),_:2},1024)])),_:1},8,["rows","columns"])])),_:1})):((0,o.wg)(),(0,o.j4)(f,{key:1},{default:(0,o.w5)((()=>[u])),_:1})),(0,o.Wm)(C,{modelValue:e.showConfirmation,"onUpdate:modelValue":l[2]||(l[2]=l=>e.showConfirmation=l),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[c])),_:1}),(0,o.Wm)(y,{align:"right"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{label:"Cancel",color:"primary",onClick:e.cancelDeleteItem},null,8,["onClick"]),(0,o.Wm)(p,{label:"Delete",color:"negative",onClick:e.deleteItemConfirmed},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}t(9665);var m=t(499);const w=(0,o.aZ)({name:"IndexPage",setup(){const e=(0,m.iH)(""),l=(0,m.iH)([]),t=(0,m.iH)(!1),n=(0,m.iH)(null),a=(0,m.iH)(""),s=(0,m.iH)([]);function i(){const e=localStorage.getItem("todoList");e&&(l.value=JSON.parse(e),console.log("Fetched tasks:",l.value))}function d(){if(!e.value)return;const t={id:Date.now(),todoList:e.value,name:a.value,editing:!1};l.value.push(t),e.value="",a.value="",g()}function u(e){const t=l.value.findIndex((l=>l.id===e.id));-1!==t&&(l.value.splice(t,1),g())}function c(e){n.value=e,t.value=!0}function r(){t.value=!1,n.value=null}function w(){u(n.value),t.value=!1,n.value=null}function f(e){e.editing=!e.editing,console.log(e.editing)}function g(){localStorage.setItem("todoList",JSON.stringify(l.value))}function p(e){e.editing=!1,g()}(0,o.bv)((()=>{i()}));const k=[{name:"todoList",required:!0,label:"Task",align:"left",field:"todoList",sortable:!0},{name:"name",required:!0,label:"Assigned Personnel",align:"left",field:"name",sortable:!0},{name:"actions",label:"Actions",field:"actions",align:"center"}];return{todoTask:e,todoList:l,showConfirmation:t,itemToDelete:n,personel:a,personelList:s,columns:k,addItem:d,deleteItem:u,confirmDeleteItem:c,cancelDeleteItem:r,deleteItemConfirmed:w,toggleEditing:f,saveItem:p}}});var f=t(1639),g=t(9885),p=t(4458),k=t(3190),v=t(6611),b=t(4455),y=t(926),_=t(1721),C=t(7220),I=t(2074),h=t(1821),W=t(9984),V=t.n(W);const x=(0,f.Z)(w,[["render",r]]),T=x;V()(w,"components",{QPage:g.Z,QCard:p.Z,QCardSection:k.Z,QInput:v.Z,QBtn:b.Z,QSeparator:y.Z,QTable:_.Z,QTd:C.Z,QDialog:I.Z,QCardActions:h.Z})}}]);