

/*function FionaBot(noRandomFlag) { ... }: This is 
the constructor function for the FionaBot chatbot.
When called with the new keyword,
it creates an instance of the FionaBot chatbot.*/

/*this.noRandom= (noRandomFlag)? true:false;: This line 
sets the noRandom property of the FionaBot instance. 
The noRandomFlag is a boolean parameter passed to the 
constructor. If noRandomFlag is true, it means that random 
responses should be disabled, and noRandom will be set to 
true. Otherwise, if noRandomFlag is false, random responses 
will be allowed, and noRandom will be set to false.*/

/*this.capitalizeFirstLetter=true;: This line sets the 
capitalizeFirstLetter property of the FionaBot instance. 
It indicates whether the chatbot should capitalize the 
first letter of its responses. By default, it is set to 
true, meaning the chatbot will capitalize the first letter.*/

/*this.debug=false;: This line sets the debug property of 
the FionaBot instance. It determines whether the chatbot 
should display debug information during its operation. 
By default, it is set to false, meaning debug mode is disabled.*/

/*this.memSize=20;: This line sets the memSize property of the 
FionaBot instance. It determines the maximum number of previous 
responses the chatbot will remember in its memory. By default, 
it is set to 20. */

/*this.version="1.1 (original)";: This line sets the version 
property of the FionaBot instance. It stores the version number 
of the chatbot. In this case, it is set to "1.1 (original)".*/

/*if (!this._dataParsed) this._init();: This condition checks 
whether the _dataParsed property of the FionaBot instance is false. 
If it is false, it means the chatbot's data hasn't been parsed and 
initialized yet. In this case, the _init() method will be called 
to parse and initialize the chatbot's data.*/

/*this.reset();: This line calls the reset() method of the FionaBot 
instance. The reset() method initializes or resets various internal 
variables and memory used by the chatbot. */

/*"FionaBot(noRandomFlag)" with the "new" 
keyword, it creates an instance of the 
FionaBot chatbot. The "noRandomFlag" 
is a setting that determines whether 
the chatbot should respond randomly or not.*/

function FionaBot(noRandomFlag) {
	this.noRandom= (noRandomFlag)? true:false;
	this.capitalizeFirstLetter=true;
	this.debug=false;
	this.memSize=20;
	this.version="1.1 (original)";
	if (!this._dataParsed) this._init();
	this.reset();
}

// The purpose of the reset method is to reset the state of the bot to its initial configuration. 

FionaBot.prototype.reset = function() {
	this.quit=false; //this.quit=false;: This line sets the quit property of the FionaBot object to false. 
	this.mem=[]; 
	this.lastchoice=[];
	for (var k=0; k<FionaKeywords.length; k++) {
		this.lastchoice[k]=[];
		var rules=FionaKeywords[k][2];
		for (var i=0; i<rules.length; i++) this.lastchoice[k][i]=-1;
	}
}

FionaBot.prototype._dataParsed = false;

FionaBot.prototype._init = function() {
	// install ref to global object
	var global=FionaBot.prototype.global=self;
	// parse data and convert it from canonical form to internal use
	// prodoce synonym list
	var synPatterns={};
	if ((global.FionaSynons) && (typeof FionaSynons == 'object')) {
		for (var i in FionaSynons) synPatterns[i]='('+i+'|'+FionaSynons[i].join('|')+')';
	}
	// check for keywords or install empty structure to prevent any errors
	if ((!global.FionaKeywords) || (typeof FionaKeywords.length == 'undefined')) {
		FionaKeywords=[['###',0,[['###',[]]]]];
	}
	// 1st convert rules to regexps
	// expand synonyms and insert asterisk expressions for backtracking
	var sre=/@(\S+)/;
	//Symbol Regular Expression
	var are=/(\S)\s*\*\s*(\S)/;
	//Asterisk Regular Expression
	var are1=/^\s*\*\s*(\S)/;
	var are2=/(\S)\s*\*\s*$/;
	var are3=/^\s*\*\s*$/;
	var wsre=/\s+/g;
	for (var k=0; k<FionaKeywords.length; k++) {
		var rules=FionaKeywords[k][2];
		FionaKeywords[k][3]=k; // save original index for sorting
		for (var i=0; i<rules.length; i++) {
			var r=rules[i];
			// check mem flag and store it as decomp's element 2
			if (r[0].charAt(0)=='$') {
				var ofs=1;
				while (r[0].charAt[ofs]==' ') ofs++;
				r[0]=r[0].substring(ofs);
				r[2]=true;
			}
			else {
				r[2]=false;
			}
			// expand synonyms (v.1.1: work around lambda function)
			var m=sre.exec(r[0]);
			while (m) {
				var sp=(synPatterns[m[1]])? synPatterns[m[1]]:m[1];
				r[0]=r[0].substring(0,m.index)+sp+r[0].substring(m.index+m[0].length);
				m=sre.exec(r[0]);
			}
			// expand asterisk expressions (v.1.1: work around lambda function)
			if (are3.test(r[0])) {
				r[0]='\\s*(.*)\\s*';
			}
			else {
				m=are.exec(r[0]);
				if (m) {
					var lp='';
					var rp=r[0];
					while (m) {
						lp+=rp.substring(0,m.index+1);
						if (m[1]!=')') lp+='\\b';
						lp+='\\s*(.*)\\s*';
						if ((m[2]!='(') && (m[2]!='\\')) lp+='\\b';
						lp+=m[2];
						rp=rp.substring(m.index+m[0].length);
						m=are.exec(rp);
					}
					r[0]=lp+rp;
				}
				m=are1.exec(r[0]);
				if (m) {
					var lp='\\s*(.*)\\s*';
					if ((m[1]!=')') && (m[1]!='\\')) lp+='\\b';
					r[0]=lp+r[0].substring(m.index-1+m[0].length);
				}
				m=are2.exec(r[0]);
				if (m) {
					var lp=r[0].substring(0,m.index+1);
					if (m[1]!='(') lp+='\\b';
					r[0]=lp+'\\s*(.*)\\s*';
				}
			}
			// expand white space
			r[0]=r[0].replace(wsre, '\\s+');
			wsre.lastIndex=0;
		}
	}
	// now sort keywords by rank (highest first)
	FionaKeywords.sort(this._sortKeywords);
	// and compose regexps and refs for pres and posts
	FionaBot.prototype.pres={};
	FionaBot.prototype.posts={};
	if ((global.FionaPres) && (FionaPres.length)) {
		var a=new Array();
		for (var i=0; i<FionaPres.length; i+=2) {
			a.push(FionaPres[i]);
			FionaBot.prototype.pres[FionaPres[i]]=FionaPres[i+1];
		}
		FionaBot.prototype.preExp = new RegExp('\\b('+a.join('|')+')\\b');
	}
	else {
		// default (should not match)
		FionaBot.prototype.preExp = /####/;
		FionaBot.prototype.pres['####']='####';
	}
	if ((global.FionaPosts) && (FionaPosts.length)) {
		var a=new Array();
		for (var i=0; i<FionaPosts.length; i+=2) {
			a.push(FionaPosts[i]);
			FionaBot.prototype.posts[FionaPosts[i]]=FionaPosts[i+1];
		}
		FionaBot.prototype.postExp = new RegExp('\\b('+a.join('|')+')\\b');
	}
	else {
		// default (should not match)
		FionaBot.prototype.postExp = /####/;
		FionaBot.prototype.posts['####']='####';
	}
	// check for FionaQuits and install default if missing
	if ((!global.FionaQuits) || (typeof FionaQuits.length == 'undefined')) {
		FionaQuits=[];
	}
	// done
	FionaBot.prototype._dataParsed=true;
}

FionaBot.prototype._sortKeywords = function(a,b) {
	// sort by rank
	if (a[1]>b[1]) return -1
	else if (a[1]<b[1]) return 1
	// or original index
	else if (a[3]>b[3]) return 1
	else if (a[3]<b[3]) return -1
	else return 0;
}

FionaBot.prototype.transform = function(text) {
	var rpl='';
	this.quit=false;
	// unify text string
	text=text.toLowerCase();
	text=text.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g, ' ');
	text=text.replace(/\s+-+\s+/g, '.');
	text=text.replace(/\s*[,\.\?!;]+\s*/g, '.');
	text=text.replace(/\s*\bbut\b\s*/g, '.');
	text=text.replace(/\s{2,}/g, ' ');
	// split text in part sentences and loop through them
	var parts=text.split('.');
	for (var i=0; i<parts.length; i++) {
		var part=parts[i];
		if (part!='') {
			// check for quit expression
			for (var q=0; q<FionaQuits.length; q++) {
				if (FionaQuits[q]==part) {
					this.quit=true;
					return this.getFinal();
				}
			}
			// preprocess (v.1.1: work around lambda function)
			var m=this.preExp.exec(part);
			if (m) {
				var lp='';
				var rp=part;
				while (m) {
					lp+=rp.substring(0,m.index)+this.pres[m[1]];
					rp=rp.substring(m.index+m[0].length);
					m=this.preExp.exec(rp);
				}
				part=lp+rp;
			}
			this.sentence=part;
			// loop trough keywords
			for (var k=0; k<FionaKeywords.length; k++) {
				if (part.search(new RegExp('\\b'+FionaKeywords[k][0]+'\\b', 'i'))>=0) {
					rpl = this._execRule(k);
				}
				if (rpl!='') return rpl;
			}
		}
	}
	// nothing matched try mem
	rpl=this._memGet();
	// if nothing in mem, so try xnone
	if (rpl=='') {
		this.sentence=' ';
		var k=this._getRuleIndexByKey('xnone');
		if (k>=0) rpl=this._execRule(k);
	}
	// return reply or default string
	return (rpl!='')? rpl : 'I am at a loss for words.';
}

FionaBot.prototype._execRule = function(k) {
	var rule=FionaKeywords[k];
	var decomps=rule[2];
	var paramre=/\(([0-9]+)\)/;
	for (var i=0; i<decomps.length; i++) {
		var m=this.sentence.match(decomps[i][0]);
		if (m!=null) {
			var reasmbs=decomps[i][1];
			var memflag=decomps[i][2];
			var ri= (this.noRandom)? 0 : Math.floor(Math.random()*reasmbs.length);
			if (((this.noRandom) && (this.lastchoice[k][i]>ri)) || (this.lastchoice[k][i]==ri)) {
				ri= ++this.lastchoice[k][i];
				if (ri>=reasmbs.length) {
					ri=0;
					this.lastchoice[k][i]=-1;
				}
			}
			else {
				this.lastchoice[k][i]=ri;
			}
			var rpl=reasmbs[ri];
			if (this.debug) alert('match:\nkey: '+FionaKeywords[k][0]+
				'\nrank: '+FionaKeywords[k][1]+
				'\ndecomp: '+decomps[i][0]+
				'\nreasmb: '+rpl+
				'\nmemflag: '+memflag);
			if (rpl.search('^goto ', 'i')==0) {
				ki=this._getRuleIndexByKey(rpl.substring(5));
				if (ki>=0) return this._execRule(ki);
			}
			// substitute positional params (v.1.1: work around lambda function)
			var m1=paramre.exec(rpl);
			if (m1) {
				var lp='';
				var rp=rpl;
				while (m1) {
					var param = m[parseInt(m1[1])];
					// postprocess param
					var m2=this.postExp.exec(param);
					if (m2) {
						var lp2='';
						var rp2=param;
						while (m2) {
							lp2+=rp2.substring(0,m2.index)+this.posts[m2[1]];
							rp2=rp2.substring(m2.index+m2[0].length);
							m2=this.postExp.exec(rp2);
						}
						param=lp2+rp2;
					}
					lp+=rp.substring(0,m1.index)+param;
					rp=rp.substring(m1.index+m1[0].length);
					m1=paramre.exec(rp);
				}
				rpl=lp+rp;
			}
			rpl=this._postTransform(rpl);
			if (memflag) this._memSave(rpl)
			else return rpl;
		}
	}
	return '';
}

FionaBot.prototype._postTransform = function(s) {
	// final cleanings
	s=s.replace(/\s{2,}/g, ' ');
	s=s.replace(/\s+\./g, '.');
	if ((this.global.FionaPostTransforms) && (FionaPostTransforms.length)) {
		for (var i=0; i<FionaPostTransforms.length; i+=2) {
			s=s.replace(FionaPostTransforms[i], FionaPostTransforms[i+1]);
			FionaPostTransforms[i].lastIndex=0;
		}
	}
	// capitalize first char (v.1.1: work around lambda function)
	if (this.capitalizeFirstLetter) {
		var re=/^([a-z])/;
		var m=re.exec(s);
		if (m) s=m[0].toUpperCase()+s.substring(1);
	}
	return s;
}

FionaBot.prototype._getRuleIndexByKey = function(key) {
	for (var k=0; k<FionaKeywords.length; k++) {
		if (FionaKeywords[k][0]==key) return k;
	}
	return -1;
}

FionaBot.prototype._memSave = function(t) {
	this.mem.push(t);
	if (this.mem.length>this.memSize) this.mem.shift();
}

FionaBot.prototype._memGet = function() {
	if (this.mem.length) {
		if (this.noRandom) return this.mem.shift();
		else {
			var n=Math.floor(Math.random()*this.mem.length);
			var rpl=this.mem[n];
			for (var i=n+1; i<this.mem.length; i++) this.mem[i-1]=this.mem[i];
			this.mem.length--;
			return rpl;
		}
	}
	else return '';
}

FionaBot.prototype.getFinal = function() {
	if (!FionaBot.prototype.global.FionaFinals) return '';
	return FionaFinals[Math.floor(Math.random()*FionaFinals.length)];
}

FionaBot.prototype.getInitial = function() {
	if (!FionaBot.prototype.global.FionaInitials) return '';
	return FionaInitials[Math.floor(Math.random()*FionaInitials.length)];
}


// fix array.prototype methods (push, shift) if not implemented (MSIE fix)
if (typeof Array.prototype.push == 'undefined') {
	Array.prototype.push=function(v) { return this[this.length]=v; };
}
if (typeof Array.prototype.shift == 'undefined') {
	Array.prototype.shift=function() {
		if (this.length==0) return null;
		var e0=this[0];
		for (var i=1; i<this.length; i++) this[i-1]=this[i];
		this.length--;
		return e0;
	};
}

// eof