!function(){var t,e=!1,n=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");n.addEventListener("click",(function(){e||(e=!0,n.disabled=!0,t=setInterval((function(){if(e){var n="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=n}else clearInterval(t)}),1e3))})),a.addEventListener("click",(function(){e&&(e=!1,n.disabled=!1,clearInterval(t))}))}();
//# sourceMappingURL=01-color-switcher.d413165c.js.map
