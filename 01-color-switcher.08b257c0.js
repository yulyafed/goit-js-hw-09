const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,d=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=e}),1e3)})),t.addEventListener("click",(function(){clearInterval(d),e.disabled=!1,t.disabled=!0})),t.disabled=!0;let d=null;
//# sourceMappingURL=01-color-switcher.08b257c0.js.map
