(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(40)},27:function(e,t,n){},28:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(8),r=n.n(l),c=(n(27),n(2)),s=n(3),o=n(5),u=n(4),m=n(6),h=(n(28),n(10)),v={backgroundColor:"#FFFFFF",width:"96%"},d=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.courses.length;t++)e.push(i.a.createElement("tr",{key:t},i.a.createElement("td",null,this.props.courses[t][0]," ",this.props.courses[t][1])));return i.a.createElement("div",{style:{margin:"1vw"}},i.a.createElement("div",{style:{fontSize:"calc(3px + 2vmin)",textAlign:"left",width:"96%"}},this.props.name),i.a.createElement("table",{style:v},i.a.createElement("tbody",null,e)))}}]),t}(a.Component),g={backgroundColor:"#C5C8C6"},E=[{value:"cse",label:"Computer Science & Engineering"},{value:"me",label:"Mechanical Engineering"},{value:"bio",label:"Biology"},{value:"phys",label:"Physics"},{value:"math",label:"Applied Mathematics"}],p=i.a.createElement("div",null,i.a.createElement("div",{style:{fontSize:"calc(7px + 2vmin)",textAlign:"center",margin:"1vw"}},"General Education Requirements"),i.a.createElement("div",{style:{fontSize:"calc(5px + 2vmin)",textAlign:"left",margin:"1vw"}},"Lower Division General Education"),i.a.createElement(d,{name:"Spark Seminar",logic:"all",courses:[["SPARK","001"]]}),i.a.createElement(d,{name:"Written Communication",logic:"all",courses:[["WRI","010"]]}),i.a.createElement(d,{name:"Quantitative Reasoning",logic:"any",courses:[["ECON","010"],["MATH","011"],["MATH","021"],["PHIL","005"],["POLI","010"],["PSY","010"],["SOC","010"]]}),i.a.createElement(d,{name:"Language",logic:"any",courses:[["BIOE","021"],["CHN","002"],["CSE","021"],["FRE","002"],["JPN","002"],["ME","021"],["SPAN","002"]]})),S={cse:i.a.createElement("div",null,i.a.createElement("div",{style:{fontSize:"calc(7px + 2vmin)",textAlign:"center",margin:"1vw"}},"Major Requirements"),i.a.createElement("div",{style:{fontSize:"calc(5px + 2vmin)",textAlign:"left",margin:"1vw"}},"Required Major Preparation [32 Units]"),i.a.createElement(d,{name:"Mathematics Requirement [20 units]",logic:"all",courses:[["MATH","021"],["MATH","022"],["MATH","023"],["MATH","024"],["MATH","032"]]}),i.a.createElement(d,{name:"Physics Requirement [8 units]",logic:"all",courses:[["PHYS","008"],["PHYS","009"]]}),i.a.createElement(d,{name:"Biological or Earth Systems Science Requirement [4 units]",logic:"any",courses:[["PHYS","008"],["PHYS","009"]]}),i.a.createElement("div",{style:{fontSize:"calc(5px + 2vmin)",textAlign:"left",margin:"1vw"}},"Computer Science and Engineering Core [28 units]"),i.a.createElement(d,{name:"Lower Division Requirement [20 units]",logic:"all",courses:[["CSE","015"],["CSE","020"],["CSE","021"],["CSE","030"],["CSE","031"],["ENGR","065"]]}),i.a.createElement(d,{name:"Upper Division Requirement [8 units]",logic:"all",courses:[["CSE","100"],["CSE","120"]]}),i.a.createElement(d,{name:"Technical Electives Requirement [30 units]",logic:"30 units",courses:[["CSE","1**"]]})),me:i.a.createElement("div",null,i.a.createElement("div",{style:{fontSize:"calc(7px + 2vmin)",textAlign:"center",margin:"1vw"}},"Major Requirements"),i.a.createElement("div",{style:{fontSize:"calc(5px + 2vmin)",textAlign:"left",margin:"1vw"}},"Required Major Preparation [36 Units]"),i.a.createElement(d,{name:"Mathematics Requirement [20 units]",logic:"all",courses:[["MATH","021"],["MATH","022"],["MATH","023"],["MATH","024"],["MATH","032"]]}),i.a.createElement(d,{name:"Physics Requirement [8 units]",logic:"all",courses:[["PHYS","008"],["PHYS","009"]]}),i.a.createElement(d,{name:"Biological or Earth Systems Science Requirement [4 units]",logic:"any",courses:[["PHYS","008"],["PHYS","009"]]})),bio:i.a.createElement("div",null,i.a.createElement("div",{style:{fontSize:"calc(7px + 2vmin)",textAlign:"center",margin:"1vw"}},"Major Requirements"),i.a.createElement("div",{style:{fontSize:"calc(5px + 2vmin)",textAlign:"left",margin:"1vw"}},"Requirements for Biological Sciences Major"),i.a.createElement(d,{name:"Biological Sciences Requirement [14 units]",logic:"all",courses:[["BIO","001"],["BIO","001L"],["BIO","002"],["BIO","002L"],["BIO","110"]]})),phys:i.a.createElement("div",null,i.a.createElement("div",{style:{fontSize:"calc(7px + 2vmin)",textAlign:"center",margin:"1vw"}},"Major Requirements"),i.a.createElement("div",{style:{fontSize:"calc(5px + 2vmin)",textAlign:"left",margin:"1vw"}},"Requirements for Physics Major"),i.a.createElement(d,{name:"Biological Sciences Requirement [14 units]",logic:"all",courses:[["BIO","001"],["BIO","001L"],["BIO","002"],["BIO","002L"],["BIO","110"]]}))},b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState({major:e}),console.log("Option selected:",e),null!=e&&n.props.majorSelected()},n.state={major:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:g},i.a.createElement("div",{style:{fontSize:"calc(10px + 2vmin)",textAlign:"center"}},"Graduation Requirements"),i.a.createElement("div",{style:{width:"96%",padding:"1vw"}},i.a.createElement(h.a,{value:this.state.major,onChange:this.handleChange,options:E})),null===this.state.major?"":i.a.createElement("div",null,p,S[this.state.major.value]))}}]),t}(a.Component),j=n(9),f={backgroundColor:"#FFFFFF"},y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleCourseSubjectChange=function(e){n.setState({selectedSubject:e}),console.log("Option selected:",e)},n.state={selectedSubject:"",selectedCourseNumber:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{width:"100%"}},i.a.createElement("div",{style:{fontSize:"calc(3px + 2vmin)",textAlign:"left"}},this.props.season," ",this.props.year),i.a.createElement("div",null,i.a.createElement(h.a,{name:"Subject",value:this.state.selectedSubject,onChange:this.handleCourseSubjectChange,options:t.courseSubjects})),i.a.createElement("table",{style:f},i.a.createElement("tbody",null)))}}]),t}(a.Component),O=function e(t,n,a,i){Object(c.a)(this,e),this.subject=t,this.number=n,this.units=a,this.prerequisites=i},C={backgroundColor:"#C5EDEA"},w=["fall","winter","spring","summer"],A=[],x=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={startingYear:"",semesters:[]},n.handleChange=n.handleChange.bind(Object(j.a)(Object(j.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(j.a)(Object(j.a)(n)));var a=new XMLHttpRequest;return a.open("GET","testingcourselist.txt",!1),a.onreadystatechange=function(){if(4===a.readyState&&(200===a.status||0===a.status)){var e=a.responseText.split("\n");e.pop(),y.courses=[],y.courseSubjects=new Set([]);for(var t=0;t<e.length;t++){for(var n=e[t].split(" "),i=[],l=3;l<n.length;l++)i.push(n[l]);A.push(new O(n[0],n[1],n[2],i)),y.courses.push(new O(n[0],n[1],n[2],i)),y.courseSubjects.add(n[0])}y.courseSubjectNames=Array.from(y.courseSubjects),y.courseSubjects=[];for(var r=0;r<y.courseSubjectNames.length;r++)y.courseSubjects.push({value:y.courseSubjectNames[r],label:y.courseSubjectNames[r]});console.log(y.courses),console.log(y.courseSubjects)}},a.send(null),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({startingYear:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();for(var t=0,n=[],a=0;a<4;a++)for(var l=0;l<w.length;l+=2)n.push(i.a.createElement(y,{key:t++,year:parseInt(this.state.startingYear)+a,season:w[l]}));this.setState({semesters:n})}},{key:"render",value:function(){return i.a.createElement("div",{style:C},i.a.createElement("div",{style:{fontSize:"calc(10px + 2vmin)",textAlign:"center",width:"96%"}},"Plan"),i.a.createElement("div",{style:{width:"96%",padding:"1vw"}},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",null,i.a.createElement("input",{type:"number",placeholder:"Starting Year",value:this.state.startingYear,onChange:this.handleChange}))),this.state.semesters))}}]),t}(a.Component),R=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=!1;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},"On my Way"),i.a.createElement("div",{className:"App-body"},i.a.createElement(b,{majorSelected:function(){console.log("MAJOR SELECTED!"),e=!0}}),i.a.createElement(x,{majorChosen:e})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.5e7f7aaf.chunk.js.map