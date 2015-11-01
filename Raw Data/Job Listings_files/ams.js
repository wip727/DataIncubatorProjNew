
var ua=navigator.userAgent.toLowerCase();var isSafari=(ua.indexOf("safari")!=-1);var isChrome=(ua.indexOf("chrome")!=-1);var isiPad=(ua.indexOf("ipad")!=-1);var isIE=(ua.indexOf("msie")!=-1);var isIE8=(ua.indexOf("msie 8.")!=-1||ua.indexOf("msie 9.")!=-1||ua.indexOf("msie 10.")!=-1);function setCookie(name,value,expires,path,domain,secure){document.cookie=name+"="+escape(value)+
((expires)?"; expires="+expires.toGMTString():"")+
((path)?"; path="+path:"; path=/")+
((domain)?"; domain="+domain:"")+
((secure)?"; secure":"");}
function getCookie(name){var dc=document.cookie;var prefix=name+"=";var begin=dc.indexOf("; "+prefix);if(begin==-1){begin=dc.indexOf(prefix);if(begin!=0)return null;}else{begin+=2;}
var end=document.cookie.indexOf(";",begin);if(end==-1)end=dc.length;return unescape(dc.substring(begin+prefix.length,end));}
function deleteCookie(name)
{var exp=new Date();exp.setTime(exp.getTime()-1800);document.cookie=name+"=0; expires="+exp.toGMTString()+"; path=/";}
function getScrollPos()
{return window.pageYOffset?window.pageYOffset:window.document.body.scrollTop?window.document.body.scrollTop:window.scrollY?window.scrollY:window.document.documentElement.scrollTop;}
function saveScrollPos()
{var y=getScrollPos();if(y)setCookie("AMSy",y);return true;}
function restoreScrollPos()
{var y=parseInt(getCookie("AMSy"));deleteCookie("AMSy");if(y>0)window.scrollTo(0,y);}
var defSC=false;var fds_src='',rteOK=false;if(document.URL){fds_src=document.URL.replace(/([^:\/])\/.*$/,'$1');}
if(typeof initRTE!="undefined"){initRTE("","","");rteOK=isRichText;}
function onLoadCallback(){if(defSC){var a,inputs=document.getElementsByTagName('a');for(var i=0;(a=inputs[i]);i++){if(!a.onclick)a.onclick=saveScrollPos;}
restoreScrollPos();}
var m,inputs,input;if((m=document.getElementsByName('action'))&&m.length>0){inputs=document.getElementsByTagName('input');for(var i=0;(input=inputs[i]);i++){if(input.type=='text'&&input.name&&(input.name=='startDate'||input.name=='StartDate'||input.name=='EndDate'||input.name=='DeadLine'||input.name=='ExpDate'||input.name=='Date'||input.name=='JobsAfter'||input.className&&input.className=='Date')){if(!input.onblur)input.onblur=checkMysqlDate;loadDynamicJavascript('/styles/CalendarPopup.js');var img=document.createElement('img');img.setAttribute('src',fds_src+'/icons/cal.png');img.setAttribute('title','date selector');img.setAttribute('alt','date selector');img.setAttribute('id','anc'+input.name);var psel=input.value?input.value:'';if(document.all){img.onclick=function(){CalendarPopupSub(this.previousSibling.name,'yyyy/MM/dd',this.previousSibling.value);};}else{img.setAttribute('onClick',"CalendarPopupSub('"+input.name+"','yyyy/MM/dd','"+psel+"')");}
if(input.nextSibling){input.parentNode.insertBefore(img,input.nextSibling);}else{input.parentNode.appendChild(img);}}
if((isIE||isSafari&&!isChrome)&&input.type=='file'&&input.form&&!input.form.IEmsg){var div=document.createElement('div');div.setAttribute('class','redsml');div.appendChild(document.createTextNode("*** if file upload doesn't work, please try a different web browser ***"));input.form.appendChild(div);input.form.IEmsg=1;if(1||isSafari){sendXMLHttp('?ajax-close','GET',false);}}}
document.forms[0].onsubmit=checkSubmit;if(m[0].value=='apply'||m[0].value=='refs'){document.forms[0].onkeypress=keyEventHandler;}
inputs=document.getElementsByTagName('textarea');for(var i=0;(input=inputs[i]);i++){if(rteOK&&input.className&&input.className.match(/^rte/)){addRTEicon(input);}
if(input.getAttribute("maxlength")){var max=parseInt(input.getAttribute("maxlength")),alertUp=0;if(max>10){input.onkeyup=function(){if(this.value.length>max){if(!alertUp){alertUp=1;alert('Maximum number of characters exceeded: '+max);alertUp=0;}
this.value=this.value.substr(0,max);return false;}}
if(!input.onblur)input.onblur=input.onkeyup;}}}
for(var i=0;(input=document.forms[i]);i++){if(input.id&&input.id.toString().match(/^Save_\w+$/)){loadDynamicJavascript('/styles/autosave.js');break;}}}
inputs=document.getElementsByTagName('table');for(var l=0;(input=inputs[l]);l++){if(input.className&&input.className.match(/setTrBgClr/)){for(var i=0;i<input.rows.length;i++){input.rows[i].onclick=function(){setTrBgClr(this);};}}else if(input.className&&input.className.match(/setTcBgClr/)){for(var i=0;i<input.rows.length;i++){for(var j=0;j<input.rows[i].cells.length;j++){input.rows[i].cells[j].onclick=function(){setTcBgClr(this);};}}}}
if(isIE){var ul,uls=document.getElementsByTagName('ul');for(var i=0;(ul=uls[i]);i++){if(!ul.className||ul.className!='nav')continue;var li,lis=ul.getElementsByTagName('li');for(var j=0;(li=lis[j]);j++){li.onmouseover=function(){this.className='iehover';}
li.onmouseout=function(){this.className='';}
var liul,liuls=li.getElementsByTagName('ul');for(var k=0;(liul=liuls[k]);k++){liul.style.marginLeft='-40px';if(!isIE8)liul.style.marginTop='12px';}}}}
if(1){var tip=document.createElement('div');tip.id='dhtmltooltip';ietruebody().appendChild(tip);}
if(window.name&&window.name.match(/^(nW|vieW|cgi_)/)){window.focus();}}
function keyEventHandler(evt){var evt=(evt)?evt:((event)?event:null);var node=(evt.target)?evt.target:((evt.srcElement)?evt.srcElement:null);if((evt.keyCode==13||evt.which==13)&&(node.type=="text"||node.type=="file")){return false;}}
function checkSubmit(){var ok=1;if(document.forms[0].checkSubmitOK)return true;var rQ=[],rQn=[],ra=[],o;if(document.forms[0].elements){for(var j=0;(o=document.forms[0].elements[j]);j++){if(o.name&&o.name.match(/^rQ:/)&&o.value){rQn[o.value]=o.name;}}}
var spans=document.getElementsByTagName('span'),span,r={};for(var i=0;(span=spans[i]);i++){if(!span.className||span.className!='star')continue;r=findNextInput(span);if(r&&r.o){ra.push(r);if(r.o.name&&rQn[r.o.name]){if(!rQ[rQn[r.o.name]])rQ[rQn[r.o.name]]=r.v;}}}
for(var i=0;(r=ra[i]);i++){if(r&&r.o&&r.v==''&&(!r.o.name||!rQn[r.o.name]||!rQ[rQn[r.o.name]])){var style='2px solid red';if(r.o.type=="radio"||r.o.type=="checkbox"){if(r.o.name){var radios=document.getElementsByName(r.o.name),radio;for(var j=0;(radio=radios[j]);j++){if(isIE||isSafari){wrapNode(radio,'span').style.border=style;}else{radio.parentNode.style.border=style;}}}else{if(isIE||isSafari){wrapNode(r.o,'span').style.border=style;}else{r.o.parentNode.style.border=style;}}}else{if(isIE||isSafari){wrapNode(r.o,'span').style.border=style;}else{r.o.style.border=style;}}
ok=0;}}
if(!ok){alert('Please fill in all the required fields outlined in red, then submit again.');document.forms[0].checkSubmitOK=1;return false;}
return true;}
function findNextInput(span){var r={};if(!span)return r;for(var p=span;p&&(!p.parentNode||p!=p.parentNode);p=p.parentNode){if(p.nextSibling){for(var o=p.nextSibling;o;o=o.nextSibling){r=findNextInputSub(o);if(r&&r.o)return r;}}}}
function findNextInputSub(o){var r={},v='',f=false;if(o.type&&o.type=="select-one"){v=o.options[o.selectedIndex].value;f=o;if(f.id&&f.id.match(/^(formatblock|fontname|fontsize)_/)){f=false;}
if(v.match(/^Select One/))v='';}else if(o.type&&o.type=="select-multiple"){for(var j=0;j<o.options.length;j++){if(o.options[j].selected&&!o.options[j].value.match(/^Select One/)){v+=o.options[j].value;}}
f=o;}else if(o.type&&(o.type=="radio"||o.type=="checkbox")){if(o.name){v='';var radios=document.getElementsByName(o.name),radio;for(var j=0;(radio=radios[j]);j++){if(radio.checked){v+=radio.value;}}}else if(o.checked){v=o.value;}
f=o;}else if(o.type&&o.type!='hidden'){v=o.value;f=o;}
if(!f&&o.firstChild){for(var c=o.firstChild;c;c=c.nextSibling){r=findNextInputSub(c);if(r&&r.o)return r;}}
return{o:f,v:v};}
function wrapNode(o,w){if(o.parentNode&&o.parentNode.type&&o.parentNode.type==w)return o.parentNode;var n=document.createElement(w);n.appendChild(o.cloneNode(true));o.parentNode.replaceChild(n,o);return n;}
function setTrBgClr(tr){var o=tr.parentNode;for(var c=o.firstChild;c;c=c.nextSibling){if(!c.nodeType||c.nodeType!=1)continue;if(c.style&&c.style.backgroundColor){c.style.backgroundColor='';}}
tr.style.backgroundColor='#ffcc99';}
function setTcBgClr(td){var tbl=td.parentNode.parentNode,I=-1,J=0;if(!tbl)return;for(var i=0;i<tbl.rows.length;i++){for(var j=0;j<tbl.rows[i].cells.length;j++){if(tbl.rows[i].cells[j]==td){I=i;J=j;break;}}
if(I>-1)break;}
if(J==0){for(var i=0;i<tbl.rows.length;i++){tbl.rows[i].style.backgroundColor=i==I?'#ffcc99':'';}}else{for(var i=0;i<tbl.rows.length;i++){for(var j=0;j<tbl.rows[i].cells.length;j++){tbl.rows[i].cells[j].style.backgroundColor=j==J?'#ffcc99':'';}}}}
var resizeTAw=0,resizeTAh=0,resizeTAwc=0,resizeTAhc=0;function resizeTA(e,n){var iframe=(document.getElementsByName(n))[0];if(!iframe)return false;var h=iframe.offsetHeight,w=iframe.clientWidth?iframe.clientWidth:iframe.offsetWidth;if(!resizeTAw&&!resizeTAh){if(w&&h&&iframe.cols&&iframe.rows){resizeTAwc=w/iframe.cols;resizeTAhc=h/iframe.rows;resizeTAw=resizeTAwc*15.5;resizeTAh=resizeTAhc*10.5;}else{resizeTAw=60;resizeTAh=80;}}
if(!e.shiftKey){if(h)iframe.style.height=h+resizeTAh+'px';if(w)iframe.style.width=w+resizeTAw+'px';}else{if(h>80)iframe.style.height=h-resizeTAh+'px';if(w>60)iframe.style.width=w-resizeTAw+'px';}
if(resizeTAwc&&document.getElementById('wc')){w=iframe.clientWidth?iframe.clientWidth:iframe.offsetWidth;document.getElementById('wc').innerHTML='('+parseInt(w/resizeTAwc)+' chars wide)';}}
function checkMysqlDate(e,o){var t=o?o:(e&&e.target)?e.target:window.event.srcElement;if(!t.name)return false;if(t.value&&!t.value.match(/^\s*\d\d+\D\d\d*\D\d\d*\s*$/)){alert('Date must be in the YYYY/MM/DD format: '+t.value);}
return true;}
if(window.attachEvent){window.attachEvent('onload',onLoadCallback);if(rteOK)document.attachEvent('onmouseout',updateRTEs);}else if(window.addEventListener){window.addEventListener('load',onLoadCallback,false);if(rteOK)document.addEventListener('mouseout',updateRTEs,false);}else{window.onload=onLoadCallback;if(rteOK)document.onmouseout=updateRTEs;}
var offsetxpoint=-60;var offsetypoint=10;var ie=document.all;var ns6=document.getElementById&&!document.all;var enabletip=false,ddrivetipobj=null;var tipobj=null;function ietruebody(){return(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body;}
function ddrivetip(e,thetext,thecolor,thewidth){if(ie||ns6){if(ddrivetipobj&&e.target&&ddrivetipobj==e.target)return;if(!tipobj)tipobj=document.all?document.all["dhtmltooltip"]:document.getElementById?document.getElementById("dhtmltooltip"):"";if(typeof thewidth!="undefined")tipobj.style.width=thewidth+"px";if(typeof thecolor!="undefined"&&thecolor!="")tipobj.style.backgroundColor=thecolor;tipobj.innerHTML=thetext;enabletip=true;ddrivetipobj=null;positiontip(e);return false;}}
function positiontip(e){if(enabletip){var curX=(ns6)?e.pageX:event.clientX+ietruebody().scrollLeft;var curY=(ns6)?e.pageY:event.clientY+ietruebody().scrollTop;var rightedge=ie&&!window.opera?ietruebody().clientWidth-event.clientX-offsetxpoint:window.innerWidth-e.clientX-offsetxpoint-20;var bottomedge=ie&&!window.opera?ietruebody().clientHeight-event.clientY-offsetypoint:window.innerHeight-e.clientY-offsetypoint-20;var leftedge=(offsetxpoint<0)?offsetxpoint*(-1):-1000;if(rightedge<tipobj.offsetWidth)
tipobj.style.left=ie?ietruebody().scrollLeft+event.clientX-tipobj.offsetWidth+"px":window.pageXOffset+e.clientX-tipobj.offsetWidth+"px";else if(curX<leftedge)
tipobj.style.left="5px";else
tipobj.style.left=curX+offsetxpoint+"px";if(bottomedge<tipobj.offsetHeight)
tipobj.style.top=ie?ietruebody().scrollTop+event.clientY-tipobj.offsetHeight-offsetypoint+"px":window.pageYOffset+e.clientY-tipobj.offsetHeight-offsetypoint+"px";else
tipobj.style.top=curY+offsetypoint+"px";tipobj.style.visibility="visible";}}
function hideddrivetip(){if(ns6||ie){if(ddrivetipobj)return;enabletip=false;tipobj.style.visibility="hidden";tipobj.style.left="-1000px";tipobj.style.backgroundColor='';tipobj.style.width='';}}
function togddrivetip(obj,e,act,thecolor,thewidth,noajax,names){if(obj&&(!ddrivetipobj||ddrivetipobj!=obj)){ddrivetip(e,noajax?act:'please wait...',thecolor,thewidth);ddrivetipobj=obj;if(!noajax){if(names){sendXMLHttp(act,'POST',true,'',names);}else if(act){sendXMLHttp('?ajax-'+act,'GET',true);}}}else{ddrivetipobj=null;hideddrivetip();}}
var fs="\035";var XMLHttpOrg=[];function sendXMLHttp(action,method,async,data,names){var xmlreq=false;if(window.XMLHttpRequest){try{xmlreq=new XMLHttpRequest();}catch(e1){;}}else if(window.ActiveXObject){try{xmlreq=new ActiveXObject("Msxml2.XMLHTTP");}catch(e1){try{xmlreq=new ActiveXObject("Microsoft.XMLHTTP");}catch(e2){;}}}
if(!xmlreq)return true;try{var fds_url=document.URL.replace(/[\?#].*$/,'');if(!method||method.match(/[Gg][Ee][Tt]/)){xmlreq.open('GET',fds_url+action,async?true:false);xmlreq.onreadystatechange=function(){handleXMLHttpResponse(xmlreq);};xmlreq.send(null);}else{xmlreq.open('POST',fds_url,async?true:false);xmlreq.onreadystatechange=function(){handleXMLHttpResponse(xmlreq);};xmlreq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");if(action&&!names){xmlreq.send('action=ajax&act='+action+'&'+data);}else{var a=new Array();if(names){var v='',b=names.split(',');for(var i in b){a[b[i]]=1;if(!v&&b[i]!='all')v=b[i];}
if(v&&!data){var iv=document.getElementsByName(v)[0];if(iv&&iv.form)data=iv.form;}}
var s='',form=data.action?data:data.form,isform=data.action?1:0;if(action)s+='&act='+action;for(var i=0;i<form.elements.length;i++){if(form.elements[i].name){var o=form.elements[i],n=o.name,v=o.value;if(names&&!a[n]&&!a['all'])continue;if(o.type){if(o.type=="select-one"&&o.selectedIndex>=0){v=o.options[o.selectedIndex].value;}else if(o.type=="select-multiple"){for(var j=0;j<o.options.length;j++){if(o.options[j].selected){s+='&'+n+'='+encodeURIComponent(o.options[j].value);}}
n='';}else if(o.type=="radio"||o.type=="checkbox"){if(o.checked){s+='&'+n+'='+encodeURIComponent(o.value);}
n='';}else if(o.type=="submit"){if(isform||data!=o){n='';}}else if(o.type=="reset"){n='';}}
if(n){s+='&'+n+'='+encodeURIComponent(v);}}}
xmlreq.send(s.match(/&action=/)?s:'action=ajax'+s);}}}catch(er){;}
return true;}
function handleXMLHttpResponse(xmlreq){try{if(xmlreq.readyState==4){if(xmlreq.status==200){var response=xmlreq.responseText;var a=response.split(fs),i,n,e,k=1;for(var j=0;j<a.length;j++){if(a[j].match(/^[0-9a-zA-Z_]+=/)&&(i=a[j].indexOf('='))>0){n=a[j].substr(0,i);e=document.getElementById(n);if(e){if(!XMLHttpOrg[n]){XMLHttpOrg[n]=e.innerHTML;}
removeAllChildren(e);e.innerHTML=k?XMLHttpOrg[n]+'<p />'+a[j].substr(i+1):a[j].substr(i+1);k=1;}else if(n=='function'){eval(a[j].substr(i+1));}}else if(a[j].match(/\(.*\)/)){eval(a[j]);}else if(a[j]=='clear'){k=0;}else if(a[j]=='wfit'&&e){var w=getMaxWidthAllChildren(e)+50;if(!e.offsetWidth||w>e.offsetWidth)e.style.width=w+'px';}}}else if(xmlreq.status){alert("HTTP error: "+xmlreq.status);}
xmlreq=false;}}catch(er){xmlreq=false;}}
function removeAllChildren(o){try{for(var c=o.firstChild;c;c=c.nextSibling){removeAllChildren(c);c=null;}}catch(er){;}}
function getMaxWidthAllChildren(o){var v,w=o.offsetWidth?o.offsetWidth:0;try{for(var c=o.firstChild;c;c=c.nextSibling){v=getMaxWidthAllChildren(c);if(v>w)w=v;}}catch(er){;}
return w;}
var JS_Loaded=[];function loadDynamicJavascript(src){if(JS_Loaded[src])return;JS_Loaded[src]=1;if(src.indexOf('://')<0){if(fds_src){src=fds_src+src;}}
var script=document.createElement('script');script.type='text/javascript';script.src=src;document.getElementsByTagName('head')[0].appendChild(script);}
var CalendarPopupA=[];function CalendarPopupSub(name,fmt){if(!CalendarPopupA[name]){CalendarPopupA[name]=new CalendarPopup();CalendarPopupA[name].showYearNavigation();}
CalendarPopupA[name].select(document.getElementsByName(name)[0],'anc'+name,fmt);}
function toggleDisplay(id){var div=document.getElementById(id);if(!div)return false;var opn=document.getElementsByName(id+'_open')[0];if(div.style.display=='none'){div.style.display="";if(opn)opn.value="yes";}else{div.style.display="none";if(opn)opn.value="";}}
function addRTEicon(input){var n=input.name,pv=document.getElementById('rte_'+n);if(!n||!input||pv)return false;var img=document.createElement('img');img.setAttribute('src',fds_src+'/icons/edit.gif');img.setAttribute('id','rte_'+n);img.setAttribute('width',"16");img.setAttribute('height',"16");img.setAttribute('title','switch on editor mode');img.setAttribute('alt','switch on editor mode');if(isIE){img.onclick=function(){rteEidtCallback(n);};}else{img.setAttribute('onClick',"rteEidtCallback('"+n+"')");}
if(input.nextSibling){input.parentNode.insertBefore(img,input.nextSibling);}else{input.parentNode.appendChild(img);}
if(isIE){}}
function rteEidtCallback(n){var iframe,img=document.getElementById('rte_'+n),t='switch off editor mode';var txtarea=document.getElementsByName(n)[0];var cs=n.match(/(gWebEnter|EOEform)/);if((iframe=document.getElementById(n+'_rte'))){clearRichText(n);if(cs&&txtarea){var s='g='+g+'&n='+n+'&v='+encodeURIComponent(txtarea.value);sendXMLHttp('s2c','POST',true,s);}
t='switch on editor mode';}else{var v=txtarea?txtarea.value:'';writeRichText(n,'',0,0,true,false);if(cs&&v){var s='g='+g+'&rte='+n+'_rte&v='+encodeURIComponent(v);sendXMLHttp('c2s','POST',true,s);}}
if(img)img.setAttribute('title',t);}
function edInsertContent(which,myValue){var myField=document.getElementById(which);if(!myField)myField=document.getElementsByName(which)[0];if(document.selection){myField.focus();var sel=document.selection.createRange();sel.pasteHTML(myValue);sel.select();}
else if(myField.selectionStart||myField.selectionStart=='0'){var startPos=myField.selectionStart;var endPos=myField.selectionEnd;var scrollTop=myField.scrollTop;myField.value=myField.value.substring(0,startPos)
+myValue
+myField.value.substring(endPos,myField.value.length);myField.focus();myField.selectionStart=startPos+myValue.length;myField.selectionEnd=startPos+myValue.length;myField.scrollTop=scrollTop;}else{myField.value+=myValue;myField.focus();}}
function insertCGI(nm,nv,g,e){if(e){togddrivetip(this,e,'mc-'+g+'-0--'+nm+'-'+nv,'lightgrey',300);}else{edInsertContent(nm.name,nm.html);}}
function insertRTECGI(rte,e){if(e){if(document.all){frames[rte].focus();InsertHTMLselrng=frames[rte].document.selection.createRange();}
togddrivetip(this,e,'mc-'+g+'-0--'+rte,'lightgrey',300);}else{InsertHTML(rte);}}
function prvCGI(nm,nv,g,e){var om=document.getElementsByName(nm)[0],ov=document.getElementsByName(nv)[0];if(!om)return;var s='g='+g+'&m='+encodeURIComponent(om.value);if(ov)s+='&v='+encodeURIComponent(ov.value);togddrivetip(this,e,'preview wait...','lightgrey',500,1);if(ddrivetipobj)sendXMLHttp('prv','POST',true,s);}
var addQAsI=0;function addQAs(g,o){var n=addQAsI++,clone=document.createElement('div');clone.innerHTML='<b>Ask applicant this question?</b> '+'<INPUT TYPE="hidden" NAME="gID" VALUE="q'+n+'"> '+'<INPUT TYPE="checkbox" NAME="gUsedq'+n+'" checked> '+'&nbsp; Tag: <INPUT TEXT NAME="gTagq'+n+'" value="" size=10> '+'&nbsp; share?<INPUT TYPE="checkbox" NAME="gSharedq'+n+'"> '+'<img src="/icons/prv.gif" onclick="prvCGI(\'gWebEnterq'+n+'\',\'gWebViewq'+n+'\','+g+',event)" /> <img src="/icons/drag.png" class="draghdl" /><br> '+'<TEXTAREA NAME="gWebEnterq'+n+'" ROWS="8" COLS="85" onBlur="utn=\'q'+n+'\'" class="rtecgi" readonlyX="yes" ></TEXTAREA><br /> '+'<TEXTAREA NAME="gWebViewq'+n+'" ROWS="3" COLS="85" onBlur="utn=\'q'+n+'\'" ></TEXTAREA>';clone.className='border';clone.id='divq'+n;document.getElementById('DragContainer0').appendChild(clone);if(DragDrops){clone.setAttribute('DragObj',0);}
addRTEicon(document.getElementsByName('gWebEnterq'+n)[0]);}
var isGecko,dragHelperOK=0;function myCreateDragContainer(id){var o=document.getElementById(id);if(!o)return;if(isIE){if(!dragHelperOK)window.attachEvent('onload',function(){document.body.appendChild(dragHelper);});dragHelperOK=1;window.attachEvent('onload',function(){CreateDragContainer(o);});}else{CreateDragContainer(o);}}
function dragdropSub(curTarget,rootSibling){var child,s='',o=document.getElementById('DragContainer0');if(!o)return;for(child=o.firstChild;child;child=child.nextSibling){if(child.id)s+=' '+child.id;}
if(document.forms[0].QAodr)document.forms[0].QAodr.value=s;if(!isGecko)return;var input,inputs=curTarget.getElementsByTagName('iframe');for(var i=0;(input=inputs[i]);i++){if(!input.name||!input.name.match(/_rte$/)||!input.id)continue;var n=input.name.replace(/_rte$/,''),txt=document.getElementsByName(n)[0];if(txt&&txt.value){enableDesignMode(input.name,txt.value,false);}}}
function getById(n){return document.getElementById(n);}
function getByName(n){return document.getElementsByName(n)[0];}
function setDisplay(){var m=arguments.length-1;if(m<1)return;for(var i=0;i<m;i++){arguments[i].style.display=arguments[m];}}
function mcSetDisplay(sel,s){var v=s?s:sel.options[sel.selectedIndex].value;var mcName=getById('mcName'),mcSize=getById('mcSize'),mcRTE=getById('mcRTE'),mcMax=getById('mcMax'),mcNL=getById('mcNL'),mcTxt=getById('mcTxt'),mcSels=getById('mcSels'),mcIE=getById('mcIE');setDisplay(mcRTE,'none');setDisplay(mcIE,'none');setDisplay(mcMax,'none');if(v==1||v==6){setDisplay(mcName,mcSize,'');setDisplay(mcNL,mcTxt,mcSels,'none');if(v==1)setDisplay(mcMax,'');}else if(v==2||v==3){setDisplay(mcName,mcNL,mcTxt,mcSels,'');setDisplay(mcSize,'none');}else if(v==4){setDisplay(mcName,mcSize,mcTxt,mcSels,'');setDisplay(mcNL,'none');}else if(v==5){setDisplay(mcName,'');setDisplay(mcSize,mcNL,mcTxt,mcSels,'none');}else if(v==7){setDisplay(mcSels,'');setDisplay(mcName,mcSize,mcNL,mcTxt,mcReq,'none');}else{setDisplay(mcName,mcSize,mcTxt,mcRTE,mcMax,'');setDisplay(mcNL,mcTxt,mcSels,'none');}}
function chkPass(n,t){var pw=document.getElementsByName(n)[0];if(!pw||!pw.value)return;var s='v='+encodeURIComponent(pw.value);if(t)s+='&t='+encodeURIComponent(t);sendXMLHttp('chkpass','POST',true,s);}
var busyIntervalId=0,busyIntervalRun=0,busylinkCalled=0;function busychklk(lk,tm){if(tm){busyIntervalRun=0;if(busyIntervalId)clearInterval(busyIntervalId);busyIntervalId=setInterval("busychklk('"+lk+"')",tm);}else{if(busyIntervalRun)return;busyIntervalRun=1;sendXMLHttp('?ajax-blk----'+lk,'GET',true);}}
function busylink(e,lk,tm){if(busylinkCalled){alert("Please don't click again until the current one finishes.");return false;}busylinkCalled=1;var div=document.getElementById('busy');if(!div){div=document.createElement('div');div.setAttribute('id','busy');div.setAttribute('style','display:none;position:absolute;z-index:1000;top:-100px;left:-200px;')
var img=document.createElement('img');img.setAttribute('src',fds_src+'/icons/busy.gif');img.onclick=busyclear;div.appendChild(img);document.lastChild.appendChild(div);}
var curY=60,curX=(window.innerWidth?window.innerWidth:document.body.offsetWidth)-80;if(e){curX=(ns6)?e.pageX:event.clientX+ietruebody().scrollLeft;curY=(ns6)?e.pageY:event.clientY+ietruebody().scrollTop;}
if(curX&&curY){div.style.display='block';div.style.top=curY+'px';div.style.left=curX+'px';}
if(lk){busychklk(lk,tm?tm:5000);}
return true;}
function busyclear(){var div=document.getElementById('busy');if(div){div.style.display='none';}
if(busyIntervalId)clearInterval(busyIntervalId);busylinkCalled=0;}
function multiSelection(n,s){var sel=document.getElementsByName(n)[0];if(!sel)return;if(sel.multiple){sel.size=1;sel.multiple=false;}else{sel.size=s;sel.multiple="multiple";}}
function emlChk(o,g,lt){sendXMLHttp('emlChk','POST',true,'&eml='+encodeURIComponent(o.value)+(g?'&g='+g:'')+(lt?'&j='+lt:''));}
function useLtr(o,fID){var h=document.getElementsByName('fID'+fID)[0];h.value=h.value.match(/[1-9]/)?0:1;o.src=o.src.replace(/[^\/]+$/,h.value.match(/[1-9]/)?'closer.png':'check14.png');return h.value;}
function selEEOVT(){var sel=document.getElementsByName('EOEVeteranTypes'),c=0;if(!sel)return;for(var j=0;j<sel.length;j++){if(sel[j].checked)c=1;}
var vo=document.getElementsByName('EOEVeteran');if(!vo)return;for(var j=0;j<vo.length;j++){if(vo[j].checked){if(!c||vo[j].value!='Yes'){vo[j].checked=false;}}else if(c&&vo[j].value=='Yes'){vo[j].checked=true;}}}
function selEEOV(o){if(!o||o.value=='Yes')return;var sel=document.getElementsByName('EOEVeteranTypes');if(!sel)return;for(var j=0;j<sel.length;j++){if(sel[j].checked)sel[j].checked=false;}}