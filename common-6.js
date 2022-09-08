LavaPack.loadBundle([
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/jsbi/dist/jsbi-umd.js", {}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/jsbi/dist/jsbi-umd.js
      return function (require, module, exports) {
(function(i,_){"object"==typeof exports&&"undefined"!=typeof module?_(exports):"function"==typeof define&&define.amd?define(["exports"],_):(i=i||self,_(i.JSBI={}))})(this,function(i){'use strict';var _=Math.clz32,t=Math.abs,e=Math.max,g=Math.floor;class o extends Array{constructor(i,_){if(super(i),this.sign=_,i>o.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded")}static BigInt(i){var _=Number.isFinite;if("number"==typeof i){if(0===i)return o.__zero();if(o.__isOneDigitInt(i))return 0>i?o.__oneDigit(-i,!0):o.__oneDigit(i,!1);if(!_(i)||g(i)!==i)throw new RangeError("The number "+i+" cannot be converted to BigInt because it is not an integer");return o.__fromDouble(i)}if("string"==typeof i){const _=o.__fromString(i);if(null===_)throw new SyntaxError("Cannot convert "+i+" to a BigInt");return _}if("boolean"==typeof i)return!0===i?o.__oneDigit(1,!1):o.__zero();if("object"==typeof i){if(i.constructor===o)return i;const _=o.__toPrimitive(i);return o.BigInt(_)}throw new TypeError("Cannot convert "+i+" to a BigInt")}toDebugString(){const i=["BigInt["];for(const _ of this)i.push((_?(_>>>0).toString(16):_)+", ");return i.push("]"),i.join("")}toString(i=10){if(2>i||36<i)throw new RangeError("toString() radix argument must be between 2 and 36");return 0===this.length?"0":0==(i&i-1)?o.__toStringBasePowerOfTwo(this,i):o.__toStringGeneric(this,i,!1)}static toNumber(i){const _=i.length;if(0===_)return 0;if(1===_){const _=i.__unsignedDigit(0);return i.sign?-_:_}const t=i.__digit(_-1),e=o.__clz30(t),n=30*_-e;if(1024<n)return i.sign?-Infinity:1/0;let g=n-1,s=t,l=_-1;const r=e+3;let a=32===r?0:s<<r;a>>>=12;const u=r-12;let d=12<=r?0:s<<20+r,h=20+r;for(0<u&&0<l&&(l--,s=i.__digit(l),a|=s>>>30-u,d=s<<u+2,h=u+2);0<h&&0<l;)l--,s=i.__digit(l),d|=30<=h?s<<h-30:s>>>30-h,h-=30;const m=o.__decideRounding(i,h,l,s);if((1===m||0===m&&1==(1&d))&&(d=d+1>>>0,0===d&&(a++,0!=a>>>20&&(a=0,g++,1023<g))))return i.sign?-Infinity:1/0;const b=i.sign?-2147483648:0;return g=g+1023<<20,o.__kBitConversionInts[1]=b|g|a,o.__kBitConversionInts[0]=d,o.__kBitConversionDouble[0]}static unaryMinus(i){if(0===i.length)return i;const _=i.__copy();return _.sign=!i.sign,_}static bitwiseNot(i){return i.sign?o.__absoluteSubOne(i).__trim():o.__absoluteAddOne(i,!0)}static exponentiate(i,_){if(_.sign)throw new RangeError("Exponent must be positive");if(0===_.length)return o.__oneDigit(1,!1);if(0===i.length)return i;if(1===i.length&&1===i.__digit(0))return i.sign&&0==(1&_.__digit(0))?o.unaryMinus(i):i;if(1<_.length)throw new RangeError("BigInt too big");let t=_.__unsignedDigit(0);if(1===t)return i;if(t>=o.__kMaxLengthBits)throw new RangeError("BigInt too big");if(1===i.length&&2===i.__digit(0)){const _=1+(0|t/30),e=i.sign&&0!=(1&t),n=new o(_,e);n.__initializeDigits();const g=1<<t%30;return n.__setDigit(_-1,g),n}let e=null,n=i;for(0!=(1&t)&&(e=i),t>>=1;0!==t;t>>=1)n=o.multiply(n,n),0!=(1&t)&&(null===e?e=n:e=o.multiply(e,n));return e}static multiply(_,t){if(0===_.length)return _;if(0===t.length)return t;let i=_.length+t.length;30<=_.__clzmsd()+t.__clzmsd()&&i--;const e=new o(i,_.sign!==t.sign);e.__initializeDigits();for(let n=0;n<_.length;n++)o.__multiplyAccumulate(t,_.__digit(n),e,n);return e.__trim()}static divide(i,_){if(0===_.length)throw new RangeError("Division by zero");if(0>o.__absoluteCompare(i,_))return o.__zero();const t=i.sign!==_.sign,e=_.__unsignedDigit(0);let n;if(1===_.length&&32767>=e){if(1===e)return t===i.sign?i:o.unaryMinus(i);n=o.__absoluteDivSmall(i,e,null)}else n=o.__absoluteDivLarge(i,_,!0,!1);return n.sign=t,n.__trim()}static remainder(i,_){if(0===_.length)throw new RangeError("Division by zero");if(0>o.__absoluteCompare(i,_))return i;const t=_.__unsignedDigit(0);if(1===_.length&&32767>=t){if(1===t)return o.__zero();const _=o.__absoluteModSmall(i,t);return 0===_?o.__zero():o.__oneDigit(_,i.sign)}const e=o.__absoluteDivLarge(i,_,!1,!0);return e.sign=i.sign,e.__trim()}static add(i,_){const t=i.sign;return t===_.sign?o.__absoluteAdd(i,_,t):0<=o.__absoluteCompare(i,_)?o.__absoluteSub(i,_,t):o.__absoluteSub(_,i,!t)}static subtract(i,_){const t=i.sign;return t===_.sign?0<=o.__absoluteCompare(i,_)?o.__absoluteSub(i,_,t):o.__absoluteSub(_,i,!t):o.__absoluteAdd(i,_,t)}static leftShift(i,_){return 0===_.length||0===i.length?i:_.sign?o.__rightShiftByAbsolute(i,_):o.__leftShiftByAbsolute(i,_)}static signedRightShift(i,_){return 0===_.length||0===i.length?i:_.sign?o.__leftShiftByAbsolute(i,_):o.__rightShiftByAbsolute(i,_)}static unsignedRightShift(){throw new TypeError("BigInts have no unsigned right shift; use >> instead")}static lessThan(i,_){return 0>o.__compareToBigInt(i,_)}static lessThanOrEqual(i,_){return 0>=o.__compareToBigInt(i,_)}static greaterThan(i,_){return 0<o.__compareToBigInt(i,_)}static greaterThanOrEqual(i,_){return 0<=o.__compareToBigInt(i,_)}static equal(_,t){if(_.sign!==t.sign)return!1;if(_.length!==t.length)return!1;for(let e=0;e<_.length;e++)if(_.__digit(e)!==t.__digit(e))return!1;return!0}static notEqual(i,_){return!o.equal(i,_)}static bitwiseAnd(i,_){if(!i.sign&&!_.sign)return o.__absoluteAnd(i,_).__trim();if(i.sign&&_.sign){const t=e(i.length,_.length)+1;let n=o.__absoluteSubOne(i,t);const g=o.__absoluteSubOne(_);return n=o.__absoluteOr(n,g,n),o.__absoluteAddOne(n,!0,n).__trim()}return i.sign&&([i,_]=[_,i]),o.__absoluteAndNot(i,o.__absoluteSubOne(_)).__trim()}static bitwiseXor(i,_){if(!i.sign&&!_.sign)return o.__absoluteXor(i,_).__trim();if(i.sign&&_.sign){const t=e(i.length,_.length),n=o.__absoluteSubOne(i,t),g=o.__absoluteSubOne(_);return o.__absoluteXor(n,g,n).__trim()}const t=e(i.length,_.length)+1;i.sign&&([i,_]=[_,i]);let n=o.__absoluteSubOne(_,t);return n=o.__absoluteXor(n,i,n),o.__absoluteAddOne(n,!0,n).__trim()}static bitwiseOr(i,_){const t=e(i.length,_.length);if(!i.sign&&!_.sign)return o.__absoluteOr(i,_).__trim();if(i.sign&&_.sign){let e=o.__absoluteSubOne(i,t);const n=o.__absoluteSubOne(_);return e=o.__absoluteAnd(e,n,e),o.__absoluteAddOne(e,!0,e).__trim()}i.sign&&([i,_]=[_,i]);let n=o.__absoluteSubOne(_,t);return n=o.__absoluteAndNot(n,i,n),o.__absoluteAddOne(n,!0,n).__trim()}static asIntN(_,t){if(0===t.length)return t;if(_=g(_),0>_)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(0===_)return o.__zero();if(_>=o.__kMaxLengthBits)return t;const e=0|(_+29)/30;if(t.length<e)return t;const s=t.__unsignedDigit(e-1),l=1<<(_-1)%30;if(t.length===e&&s<l)return t;if(!((s&l)===l))return o.__truncateToNBits(_,t);if(!t.sign)return o.__truncateAndSubFromPowerOfTwo(_,t,!0);if(0==(s&l-1)){for(let n=e-2;0<=n;n--)if(0!==t.__digit(n))return o.__truncateAndSubFromPowerOfTwo(_,t,!1);return t.length===e&&s===l?t:o.__truncateToNBits(_,t)}return o.__truncateAndSubFromPowerOfTwo(_,t,!1)}static asUintN(i,_){if(0===_.length)return _;if(i=g(i),0>i)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(0===i)return o.__zero();if(_.sign){if(i>o.__kMaxLengthBits)throw new RangeError("BigInt too big");return o.__truncateAndSubFromPowerOfTwo(i,_,!1)}if(i>=o.__kMaxLengthBits)return _;const t=0|(i+29)/30;if(_.length<t)return _;const e=i%30;if(_.length==t){if(0===e)return _;const i=_.__digit(t-1);if(0==i>>>e)return _}return o.__truncateToNBits(i,_)}static ADD(i,_){if(i=o.__toPrimitive(i),_=o.__toPrimitive(_),"string"==typeof i)return"string"!=typeof _&&(_=_.toString()),i+_;if("string"==typeof _)return i.toString()+_;if(i=o.__toNumeric(i),_=o.__toNumeric(_),o.__isBigInt(i)&&o.__isBigInt(_))return o.add(i,_);if("number"==typeof i&&"number"==typeof _)return i+_;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")}static LT(i,_){return o.__compare(i,_,0)}static LE(i,_){return o.__compare(i,_,1)}static GT(i,_){return o.__compare(i,_,2)}static GE(i,_){return o.__compare(i,_,3)}static EQ(i,_){for(;;){if(o.__isBigInt(i))return o.__isBigInt(_)?o.equal(i,_):o.EQ(_,i);if("number"==typeof i){if(o.__isBigInt(_))return o.__equalToNumber(_,i);if("object"!=typeof _)return i==_;_=o.__toPrimitive(_)}else if("string"==typeof i){if(o.__isBigInt(_))return i=o.__fromString(i),null!==i&&o.equal(i,_);if("object"!=typeof _)return i==_;_=o.__toPrimitive(_)}else if("boolean"==typeof i){if(o.__isBigInt(_))return o.__equalToNumber(_,+i);if("object"!=typeof _)return i==_;_=o.__toPrimitive(_)}else if("symbol"==typeof i){if(o.__isBigInt(_))return!1;if("object"!=typeof _)return i==_;_=o.__toPrimitive(_)}else if("object"==typeof i){if("object"==typeof _&&_.constructor!==o)return i==_;i=o.__toPrimitive(i)}else return i==_}}static NE(i,_){return!o.EQ(i,_)}static __zero(){return new o(0,!1)}static __oneDigit(i,_){const t=new o(1,_);return t.__setDigit(0,i),t}__copy(){const _=new o(this.length,this.sign);for(let t=0;t<this.length;t++)_[t]=this[t];return _}__trim(){let i=this.length,_=this[i-1];for(;0===_;)i--,_=this[i-1],this.pop();return 0===i&&(this.sign=!1),this}__initializeDigits(){for(let _=0;_<this.length;_++)this[_]=0}static __decideRounding(i,_,t,e){if(0<_)return-1;let n;if(0>_)n=-_-1;else{if(0===t)return-1;t--,e=i.__digit(t),n=29}let g=1<<n;if(0==(e&g))return-1;if(g-=1,0!=(e&g))return 1;for(;0<t;)if(t--,0!==i.__digit(t))return 1;return 0}static __fromDouble(i){o.__kBitConversionDouble[0]=i;const _=2047&o.__kBitConversionInts[1]>>>20,t=_-1023,e=(0|t/30)+1,n=new o(e,0>i);let g=1048575&o.__kBitConversionInts[1]|1048576,s=o.__kBitConversionInts[0];const l=20,r=t%30;let a,u=0;if(r<20){const i=l-r;u=i+32,a=g>>>i,g=g<<32-i|s>>>i,s<<=32-i}else if(r===20)u=32,a=g,g=s,s=0;else{const i=r-l;u=32-i,a=g<<i|s>>>32-i,g=s<<i,s=0}n.__setDigit(e-1,a);for(let _=e-2;0<=_;_--)0<u?(u-=30,a=g>>>2,g=g<<30|s>>>2,s<<=30):a=0,n.__setDigit(_,a);return n.__trim()}static __isWhitespace(i){return!!(13>=i&&9<=i)||(159>=i?32==i:131071>=i?160==i||5760==i:196607>=i?(i&=131071,10>=i||40==i||41==i||47==i||95==i||4096==i):65279==i)}static __fromString(i,_=0){let t=0;const e=i.length;let n=0;if(n===e)return o.__zero();let g=i.charCodeAt(n);for(;o.__isWhitespace(g);){if(++n===e)return o.__zero();g=i.charCodeAt(n)}if(43===g){if(++n===e)return null;g=i.charCodeAt(n),t=1}else if(45===g){if(++n===e)return null;g=i.charCodeAt(n),t=-1}if(0===_){if(_=10,48===g){if(++n===e)return o.__zero();if(g=i.charCodeAt(n),88===g||120===g){if(_=16,++n===e)return null;g=i.charCodeAt(n)}else if(79===g||111===g){if(_=8,++n===e)return null;g=i.charCodeAt(n)}else if(66===g||98===g){if(_=2,++n===e)return null;g=i.charCodeAt(n)}}}else if(16===_&&48===g){if(++n===e)return o.__zero();if(g=i.charCodeAt(n),88===g||120===g){if(++n===e)return null;g=i.charCodeAt(n)}}if(0!=t&&10!==_)return null;for(;48===g;){if(++n===e)return o.__zero();g=i.charCodeAt(n)}const s=e-n;let l=o.__kMaxBitsPerChar[_],r=o.__kBitsPerCharTableMultiplier-1;if(s>1073741824/l)return null;const a=l*s+r>>>o.__kBitsPerCharTableShift,u=new o(0|(a+29)/30,!1),h=10>_?_:10,b=10<_?_-10:0;if(0==(_&_-1)){l>>=o.__kBitsPerCharTableShift;const _=[],t=[];let s=!1;do{let o=0,r=0;for(;;){let _;if(g-48>>>0<h)_=g-48;else if((32|g)-97>>>0<b)_=(32|g)-87;else{s=!0;break}if(r+=l,o=o<<l|_,++n===e){s=!0;break}if(g=i.charCodeAt(n),30<r+l)break}_.push(o),t.push(r)}while(!s);o.__fillFromParts(u,_,t)}else{u.__initializeDigits();let t=!1,s=0;do{let a=0,D=1;for(;;){let o;if(g-48>>>0<h)o=g-48;else if((32|g)-97>>>0<b)o=(32|g)-87;else{t=!0;break}const l=D*_;if(1073741823<l)break;if(D=l,a=a*_+o,s++,++n===e){t=!0;break}g=i.charCodeAt(n)}r=30*o.__kBitsPerCharTableMultiplier-1;const c=0|(l*s+r>>>o.__kBitsPerCharTableShift)/30;u.__inplaceMultiplyAdd(D,a,c)}while(!t)}if(n!==e){if(!o.__isWhitespace(g))return null;for(n++;n<e;n++)if(g=i.charCodeAt(n),!o.__isWhitespace(g))return null}return u.sign=-1==t,u.__trim()}static __fillFromParts(_,t,e){let n=0,g=0,o=0;for(let s=t.length-1;0<=s;s--){const i=t[s],l=e[s];g|=i<<o,o+=l,30===o?(_.__setDigit(n++,g),o=0,g=0):30<o&&(_.__setDigit(n++,1073741823&g),o-=30,g=i>>>l-o)}if(0!==g){if(n>=_.length)throw new Error("implementation bug");_.__setDigit(n++,g)}for(;n<_.length;n++)_.__setDigit(n,0)}static __toStringBasePowerOfTwo(_,i){const t=_.length;let e=i-1;e=(85&e>>>1)+(85&e),e=(51&e>>>2)+(51&e),e=(15&e>>>4)+(15&e);const n=e,g=i-1,s=_.__digit(t-1),l=o.__clz30(s);let r=0|(30*t-l+n-1)/n;if(_.sign&&r++,268435456<r)throw new Error("string too long");const a=Array(r);let u=r-1,d=0,h=0;for(let e=0;e<t-1;e++){const i=_.__digit(e),t=(d|i<<h)&g;a[u--]=o.__kConversionChars[t];const s=n-h;for(d=i>>>s,h=30-s;h>=n;)a[u--]=o.__kConversionChars[d&g],d>>>=n,h-=n}const m=(d|s<<h)&g;for(a[u--]=o.__kConversionChars[m],d=s>>>n-h;0!==d;)a[u--]=o.__kConversionChars[d&g],d>>>=n;if(_.sign&&(a[u--]="-"),-1!=u)throw new Error("implementation bug");return a.join("")}static __toStringGeneric(_,i,t){const e=_.length;if(0===e)return"";if(1===e){let e=_.__unsignedDigit(0).toString(i);return!1===t&&_.sign&&(e="-"+e),e}const n=30*e-o.__clz30(_.__digit(e-1)),g=o.__kMaxBitsPerChar[i],s=g-1;let l=n*o.__kBitsPerCharTableMultiplier;l+=s-1,l=0|l/s;const r=l+1>>1,a=o.exponentiate(o.__oneDigit(i,!1),o.__oneDigit(r,!1));let u,d;const h=a.__unsignedDigit(0);if(1===a.length&&32767>=h){u=new o(_.length,!1),u.__initializeDigits();let t=0;for(let e=2*_.length-1;0<=e;e--){const i=t<<15|_.__halfDigit(e);u.__setHalfDigit(e,0|i/h),t=0|i%h}d=t.toString(i)}else{const t=o.__absoluteDivLarge(_,a,!0,!0);u=t.quotient;const e=t.remainder.__trim();d=o.__toStringGeneric(e,i,!0)}u.__trim();let m=o.__toStringGeneric(u,i,!0);for(;d.length<r;)d="0"+d;return!1===t&&_.sign&&(m="-"+m),m+d}static __unequalSign(i){return i?-1:1}static __absoluteGreater(i){return i?-1:1}static __absoluteLess(i){return i?1:-1}static __compareToBigInt(i,_){const t=i.sign;if(t!==_.sign)return o.__unequalSign(t);const e=o.__absoluteCompare(i,_);return 0<e?o.__absoluteGreater(t):0>e?o.__absoluteLess(t):0}static __compareToNumber(i,_){if(o.__isOneDigitInt(_)){const e=i.sign,n=0>_;if(e!==n)return o.__unequalSign(e);if(0===i.length){if(n)throw new Error("implementation bug");return 0===_?0:-1}if(1<i.length)return o.__absoluteGreater(e);const g=t(_),s=i.__unsignedDigit(0);return s>g?o.__absoluteGreater(e):s<g?o.__absoluteLess(e):0}return o.__compareToDouble(i,_)}static __compareToDouble(i,_){if(_!==_)return _;if(_===1/0)return-1;if(_===-Infinity)return 1;const t=i.sign;if(t!==0>_)return o.__unequalSign(t);if(0===_)throw new Error("implementation bug: should be handled elsewhere");if(0===i.length)return-1;o.__kBitConversionDouble[0]=_;const e=2047&o.__kBitConversionInts[1]>>>20;if(2047==e)throw new Error("implementation bug: handled elsewhere");const n=e-1023;if(0>n)return o.__absoluteGreater(t);const g=i.length;let s=i.__digit(g-1);const l=o.__clz30(s),r=30*g-l,a=n+1;if(r<a)return o.__absoluteLess(t);if(r>a)return o.__absoluteGreater(t);let u=1048576|1048575&o.__kBitConversionInts[1],d=o.__kBitConversionInts[0];const h=20,m=29-l;if(m!==(0|(r-1)%30))throw new Error("implementation bug");let b,D=0;if(20>m){const i=h-m;D=i+32,b=u>>>i,u=u<<32-i|d>>>i,d<<=32-i}else if(20===m)D=32,b=u,u=d;else{const i=m-h;D=32-i,b=u<<i|d>>>32-i,u=d<<i}if(s>>>=0,b>>>=0,s>b)return o.__absoluteGreater(t);if(s<b)return o.__absoluteLess(t);for(let e=g-2;0<=e;e--){0<D?(D-=30,b=u>>>2,u=u<<30|d>>>2,d<<=30):b=0;const _=i.__unsignedDigit(e);if(_>b)return o.__absoluteGreater(t);if(_<b)return o.__absoluteLess(t)}if(0!==u||0!==d){if(0===D)throw new Error("implementation bug");return o.__absoluteLess(t)}return 0}static __equalToNumber(i,_){return o.__isOneDigitInt(_)?0===_?0===i.length:1===i.length&&i.sign===0>_&&i.__unsignedDigit(0)===t(_):0===o.__compareToDouble(i,_)}static __comparisonResultToBool(i,_){return 0===_?0>i:1===_?0>=i:2===_?0<i:3===_?0<=i:void 0}static __compare(i,_,t){if(i=o.__toPrimitive(i),_=o.__toPrimitive(_),"string"==typeof i&&"string"==typeof _)switch(t){case 0:return i<_;case 1:return i<=_;case 2:return i>_;case 3:return i>=_;}if(o.__isBigInt(i)&&"string"==typeof _)return _=o.__fromString(_),null!==_&&o.__comparisonResultToBool(o.__compareToBigInt(i,_),t);if("string"==typeof i&&o.__isBigInt(_))return i=o.__fromString(i),null!==i&&o.__comparisonResultToBool(o.__compareToBigInt(i,_),t);if(i=o.__toNumeric(i),_=o.__toNumeric(_),o.__isBigInt(i)){if(o.__isBigInt(_))return o.__comparisonResultToBool(o.__compareToBigInt(i,_),t);if("number"!=typeof _)throw new Error("implementation bug");return o.__comparisonResultToBool(o.__compareToNumber(i,_),t)}if("number"!=typeof i)throw new Error("implementation bug");if(o.__isBigInt(_))return o.__comparisonResultToBool(o.__compareToNumber(_,i),2^t);if("number"!=typeof _)throw new Error("implementation bug");return 0===t?i<_:1===t?i<=_:2===t?i>_:3===t?i>=_:void 0}__clzmsd(){return o.__clz30(this.__digit(this.length-1))}static __absoluteAdd(_,t,e){if(_.length<t.length)return o.__absoluteAdd(t,_,e);if(0===_.length)return _;if(0===t.length)return _.sign===e?_:o.unaryMinus(_);let n=_.length;(0===_.__clzmsd()||t.length===_.length&&0===t.__clzmsd())&&n++;const g=new o(n,e);let s=0,l=0;for(;l<t.length;l++){const i=_.__digit(l)+t.__digit(l)+s;s=i>>>30,g.__setDigit(l,1073741823&i)}for(;l<_.length;l++){const i=_.__digit(l)+s;s=i>>>30,g.__setDigit(l,1073741823&i)}return l<g.length&&g.__setDigit(l,s),g.__trim()}static __absoluteSub(_,t,e){if(0===_.length)return _;if(0===t.length)return _.sign===e?_:o.unaryMinus(_);const n=new o(_.length,e);let g=0,s=0;for(;s<t.length;s++){const i=_.__digit(s)-t.__digit(s)-g;g=1&i>>>30,n.__setDigit(s,1073741823&i)}for(;s<_.length;s++){const i=_.__digit(s)-g;g=1&i>>>30,n.__setDigit(s,1073741823&i)}return n.__trim()}static __absoluteAddOne(_,i,t=null){const e=_.length;null===t?t=new o(e,i):t.sign=i;let n=1;for(let g=0;g<e;g++){const i=_.__digit(g)+n;n=i>>>30,t.__setDigit(g,1073741823&i)}return 0!=n&&t.__setDigitGrow(e,1),t}static __absoluteSubOne(_,t){const e=_.length;t=t||e;const n=new o(t,!1);let g=1;for(let o=0;o<e;o++){const i=_.__digit(o)-g;g=1&i>>>30,n.__setDigit(o,1073741823&i)}if(0!=g)throw new Error("implementation bug");for(let g=e;g<t;g++)n.__setDigit(g,0);return n}static __absoluteAnd(_,t,e=null){let n=_.length,g=t.length,s=g;if(n<g){s=n;const i=_,e=n;_=t,n=g,t=i,g=e}let l=s;null===e?e=new o(l,!1):l=e.length;let r=0;for(;r<s;r++)e.__setDigit(r,_.__digit(r)&t.__digit(r));for(;r<l;r++)e.__setDigit(r,0);return e}static __absoluteAndNot(_,t,e=null){const n=_.length,g=t.length;let s=g;n<g&&(s=n);let l=n;null===e?e=new o(l,!1):l=e.length;let r=0;for(;r<s;r++)e.__setDigit(r,_.__digit(r)&~t.__digit(r));for(;r<n;r++)e.__setDigit(r,_.__digit(r));for(;r<l;r++)e.__setDigit(r,0);return e}static __absoluteOr(_,t,e=null){let n=_.length,g=t.length,s=g;if(n<g){s=n;const i=_,e=n;_=t,n=g,t=i,g=e}let l=n;null===e?e=new o(l,!1):l=e.length;let r=0;for(;r<s;r++)e.__setDigit(r,_.__digit(r)|t.__digit(r));for(;r<n;r++)e.__setDigit(r,_.__digit(r));for(;r<l;r++)e.__setDigit(r,0);return e}static __absoluteXor(_,t,e=null){let n=_.length,g=t.length,s=g;if(n<g){s=n;const i=_,e=n;_=t,n=g,t=i,g=e}let l=n;null===e?e=new o(l,!1):l=e.length;let r=0;for(;r<s;r++)e.__setDigit(r,_.__digit(r)^t.__digit(r));for(;r<n;r++)e.__setDigit(r,_.__digit(r));for(;r<l;r++)e.__setDigit(r,0);return e}static __absoluteCompare(_,t){const e=_.length-t.length;if(0!=e)return e;let n=_.length-1;for(;0<=n&&_.__digit(n)===t.__digit(n);)n--;return 0>n?0:_.__unsignedDigit(n)>t.__unsignedDigit(n)?1:-1}static __multiplyAccumulate(_,t,e,n){if(0===t)return;const g=32767&t,s=t>>>15;let l=0,r=0;for(let a,u=0;u<_.length;u++,n++){a=e.__digit(n);const i=_.__digit(u),t=32767&i,d=i>>>15,h=o.__imul(t,g),m=o.__imul(t,s),b=o.__imul(d,g),D=o.__imul(d,s);a+=r+h+l,l=a>>>30,a&=1073741823,a+=((32767&m)<<15)+((32767&b)<<15),l+=a>>>30,r=D+(m>>>15)+(b>>>15),e.__setDigit(n,1073741823&a)}for(;0!=l||0!==r;n++){let i=e.__digit(n);i+=l+r,r=0,l=i>>>30,e.__setDigit(n,1073741823&i)}}static __internalMultiplyAdd(_,t,e,g,s){let l=e,a=0;for(let n=0;n<g;n++){const i=_.__digit(n),e=o.__imul(32767&i,t),g=o.__imul(i>>>15,t),u=e+((32767&g)<<15)+a+l;l=u>>>30,a=g>>>15,s.__setDigit(n,1073741823&u)}if(s.length>g)for(s.__setDigit(g++,l+a);g<s.length;)s.__setDigit(g++,0);else if(0!==l+a)throw new Error("implementation bug")}__inplaceMultiplyAdd(i,_,t){t>this.length&&(t=this.length);const e=32767&i,n=i>>>15;let g=0,s=_;for(let l=0;l<t;l++){const i=this.__digit(l),_=32767&i,t=i>>>15,r=o.__imul(_,e),a=o.__imul(_,n),u=o.__imul(t,e),d=o.__imul(t,n);let h=s+r+g;g=h>>>30,h&=1073741823,h+=((32767&a)<<15)+((32767&u)<<15),g+=h>>>30,s=d+(a>>>15)+(u>>>15),this.__setDigit(l,1073741823&h)}if(0!=g||0!==s)throw new Error("implementation bug")}static __absoluteDivSmall(_,t,e=null){null===e&&(e=new o(_.length,!1));let n=0;for(let g,o=2*_.length-1;0<=o;o-=2){g=(n<<15|_.__halfDigit(o))>>>0;const i=0|g/t;n=0|g%t,g=(n<<15|_.__halfDigit(o-1))>>>0;const s=0|g/t;n=0|g%t,e.__setDigit(o>>>1,i<<15|s)}return e}static __absoluteModSmall(_,t){let e=0;for(let n=2*_.length-1;0<=n;n--){const i=(e<<15|_.__halfDigit(n))>>>0;e=0|i%t}return e}static __absoluteDivLarge(i,_,t,e){const g=_.__halfDigitLength(),n=_.length,s=i.__halfDigitLength()-g;let l=null;t&&(l=new o(s+2>>>1,!1),l.__initializeDigits());const r=new o(g+2>>>1,!1);r.__initializeDigits();const a=o.__clz15(_.__halfDigit(g-1));0<a&&(_=o.__specialLeftShift(_,a,0));const d=o.__specialLeftShift(i,a,1),u=_.__halfDigit(g-1);let h=0;for(let a,m=s;0<=m;m--){a=32767;const i=d.__halfDigit(m+g);if(i!==u){const t=(i<<15|d.__halfDigit(m+g-1))>>>0;a=0|t/u;let e=0|t%u;const n=_.__halfDigit(g-2),s=d.__halfDigit(m+g-2);for(;o.__imul(a,n)>>>0>(e<<16|s)>>>0&&(a--,e+=u,!(32767<e)););}o.__internalMultiplyAdd(_,a,0,n,r);let e=d.__inplaceSub(r,m,g+1);0!==e&&(e=d.__inplaceAdd(_,m,g),d.__setHalfDigit(m+g,32767&d.__halfDigit(m+g)+e),a--),t&&(1&m?h=a<<15:l.__setDigit(m>>>1,h|a))}if(e)return d.__inplaceRightShift(a),t?{quotient:l,remainder:d}:d;if(t)return l;throw new Error("unreachable")}static __clz15(i){return o.__clz30(i)-15}__inplaceAdd(_,t,e){let n=0;for(let g=0;g<e;g++){const i=this.__halfDigit(t+g)+_.__halfDigit(g)+n;n=i>>>15,this.__setHalfDigit(t+g,32767&i)}return n}__inplaceSub(_,t,e){let n=0;if(1&t){t>>=1;let g=this.__digit(t),o=32767&g,s=0;for(;s<e-1>>>1;s++){const i=_.__digit(s),e=(g>>>15)-(32767&i)-n;n=1&e>>>15,this.__setDigit(t+s,(32767&e)<<15|32767&o),g=this.__digit(t+s+1),o=(32767&g)-(i>>>15)-n,n=1&o>>>15}const i=_.__digit(s),l=(g>>>15)-(32767&i)-n;n=1&l>>>15,this.__setDigit(t+s,(32767&l)<<15|32767&o);if(t+s+1>=this.length)throw new RangeError("out of bounds");0==(1&e)&&(g=this.__digit(t+s+1),o=(32767&g)-(i>>>15)-n,n=1&o>>>15,this.__setDigit(t+_.length,1073709056&g|32767&o))}else{t>>=1;let g=0;for(;g<_.length-1;g++){const i=this.__digit(t+g),e=_.__digit(g),o=(32767&i)-(32767&e)-n;n=1&o>>>15;const s=(i>>>15)-(e>>>15)-n;n=1&s>>>15,this.__setDigit(t+g,(32767&s)<<15|32767&o)}const i=this.__digit(t+g),o=_.__digit(g),s=(32767&i)-(32767&o)-n;n=1&s>>>15;let l=0;0==(1&e)&&(l=(i>>>15)-(o>>>15)-n,n=1&l>>>15),this.__setDigit(t+g,(32767&l)<<15|32767&s)}return n}__inplaceRightShift(_){if(0===_)return;let t=this.__digit(0)>>>_;const e=this.length-1;for(let n=0;n<e;n++){const i=this.__digit(n+1);this.__setDigit(n,1073741823&i<<30-_|t),t=i>>>_}this.__setDigit(e,t)}static __specialLeftShift(_,t,e){const g=_.length,n=new o(g+e,!1);if(0===t){for(let t=0;t<g;t++)n.__setDigit(t,_.__digit(t));return 0<e&&n.__setDigit(g,0),n}let s=0;for(let o=0;o<g;o++){const i=_.__digit(o);n.__setDigit(o,1073741823&i<<t|s),s=i>>>30-t}return 0<e&&n.__setDigit(g,s),n}static __leftShiftByAbsolute(_,i){const t=o.__toShiftAmount(i);if(0>t)throw new RangeError("BigInt too big");const e=0|t/30,n=t%30,g=_.length,s=0!==n&&0!=_.__digit(g-1)>>>30-n,l=g+e+(s?1:0),r=new o(l,_.sign);if(0===n){let t=0;for(;t<e;t++)r.__setDigit(t,0);for(;t<l;t++)r.__setDigit(t,_.__digit(t-e))}else{let t=0;for(let _=0;_<e;_++)r.__setDigit(_,0);for(let o=0;o<g;o++){const i=_.__digit(o);r.__setDigit(o+e,1073741823&i<<n|t),t=i>>>30-n}if(s)r.__setDigit(g+e,t);else if(0!==t)throw new Error("implementation bug")}return r.__trim()}static __rightShiftByAbsolute(_,i){const t=_.length,e=_.sign,n=o.__toShiftAmount(i);if(0>n)return o.__rightShiftByMaximum(e);const g=0|n/30,s=n%30;let l=t-g;if(0>=l)return o.__rightShiftByMaximum(e);let r=!1;if(e){if(0!=(_.__digit(g)&(1<<s)-1))r=!0;else for(let t=0;t<g;t++)if(0!==_.__digit(t)){r=!0;break}}if(r&&0===s){const i=_.__digit(t-1);0==~i&&l++}let a=new o(l,e);if(0===s){a.__setDigit(l-1,0);for(let e=g;e<t;e++)a.__setDigit(e-g,_.__digit(e))}else{let e=_.__digit(g)>>>s;const n=t-g-1;for(let t=0;t<n;t++){const i=_.__digit(t+g+1);a.__setDigit(t,1073741823&i<<30-s|e),e=i>>>s}a.__setDigit(n,e)}return r&&(a=o.__absoluteAddOne(a,!0,a)),a.__trim()}static __rightShiftByMaximum(i){return i?o.__oneDigit(1,!0):o.__zero()}static __toShiftAmount(i){if(1<i.length)return-1;const _=i.__unsignedDigit(0);return _>o.__kMaxLengthBits?-1:_}static __toPrimitive(i,_="default"){if("object"!=typeof i)return i;if(i.constructor===o)return i;const t=i[Symbol.toPrimitive];if(t){const i=t(_);if("object"!=typeof i)return i;throw new TypeError("Cannot convert object to primitive value")}const e=i.valueOf;if(e){const _=e.call(i);if("object"!=typeof _)return _}const n=i.toString;if(n){const _=n.call(i);if("object"!=typeof _)return _}throw new TypeError("Cannot convert object to primitive value")}static __toNumeric(i){return o.__isBigInt(i)?i:+i}static __isBigInt(i){return"object"==typeof i&&null!==i&&i.constructor===o}static __truncateToNBits(i,_){const t=0|(i+29)/30,e=new o(t,_.sign),n=t-1;for(let t=0;t<n;t++)e.__setDigit(t,_.__digit(t));let g=_.__digit(n);if(0!=i%30){const _=32-i%30;g=g<<_>>>_}return e.__setDigit(n,g),e.__trim()}static __truncateAndSubFromPowerOfTwo(_,t,e){var n=Math.min;const g=0|(_+29)/30,s=new o(g,e);let l=0;const r=g-1;let a=0;for(const i=n(r,t.length);l<i;l++){const i=0-t.__digit(l)-a;a=1&i>>>30,s.__setDigit(l,1073741823&i)}for(;l<r;l++)s.__setDigit(l,0|1073741823&-a);let u=r<t.length?t.__digit(r):0;const d=_%30;let h;if(0==d)h=0-u-a,h&=1073741823;else{const i=32-d;u=u<<i>>>i;const _=1<<32-i;h=_-u-a,h&=_-1}return s.__setDigit(r,h),s.__trim()}__digit(_){return this[_]}__unsignedDigit(_){return this[_]>>>0}__setDigit(_,i){this[_]=0|i}__setDigitGrow(_,i){this[_]=0|i}__halfDigitLength(){const i=this.length;return 32767>=this.__unsignedDigit(i-1)?2*i-1:2*i}__halfDigit(_){return 32767&this[_>>>1]>>>15*(1&_)}__setHalfDigit(_,i){const t=_>>>1,e=this.__digit(t),n=1&_?32767&e|i<<15:1073709056&e|32767&i;this.__setDigit(t,n)}static __digitPow(i,_){let t=1;for(;0<_;)1&_&&(t*=i),_>>>=1,i*=i;return t}static __isOneDigitInt(i){return(1073741823&i)===i}}o.__kMaxLength=33554432,o.__kMaxLengthBits=o.__kMaxLength<<5,o.__kMaxBitsPerChar=[0,0,32,51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,165,166],o.__kBitsPerCharTableShift=5,o.__kBitsPerCharTableMultiplier=1<<o.__kBitsPerCharTableShift,o.__kConversionChars=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],o.__kBitConversionBuffer=new ArrayBuffer(8),o.__kBitConversionDouble=new Float64Array(o.__kBitConversionBuffer),o.__kBitConversionInts=new Int32Array(o.__kBitConversionBuffer),o.__clz30=_?function(i){return _(i)-2}:function(i){return 0===i?30:0|29-(0|Math.log(i>>>0)/Math.LN2)},o.__imul=Math.imul||function(i,_){return 0|i*_},i.default=o,Object.defineProperty(i,"__esModule",{value:!0})});
//# sourceMappingURL=jsbi-umd.js.map

      };
    };
  }
}, {package:"jsbi",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/jsbi/dist/jsbi-umd.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_baseGet.js", {"./_castPath":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_castPath.js","./_toKey":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_toKey.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_baseGet.js
      return function (require, module, exports) {
var castPath = require('./_castPath'),
    toKey = require('./_toKey');

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_baseGet.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/crc/lib/es6/create_buffer.js", {"buffer":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/browserify/node_modules/buffer/index.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/crc/lib/es6/create_buffer.js
      return function (require, module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buffer = require('buffer');

var createBuffer = _buffer.Buffer.from && _buffer.Buffer.alloc && _buffer.Buffer.allocUnsafe && _buffer.Buffer.allocUnsafeSlow ? _buffer.Buffer.from : // support for Node < 5.10
function (val) {
  return new _buffer.Buffer(val);
};

exports.default = createBuffer;

      };
    };
  }
}, {package:"crc",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/crc/lib/es6/create_buffer.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/crc/lib/es6/define_crc.js", {}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/crc/lib/es6/define_crc.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (model, calc) {
  var fn = function fn(buf, previous) {
    return calc(buf, previous) >>> 0;
  };
  fn.signed = calc;
  fn.unsigned = fn;
  fn.model = model;

  return fn;
};

      };
    };
  }
}, {package:"crc",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/crc/lib/es6/define_crc.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_toKey.js", {"./isSymbol":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/isSymbol.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_toKey.js
      return function (require, module, exports) {
var isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_toKey.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_castPath.js", {"./_isKey":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_isKey.js","./_stringToPath":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_stringToPath.js","./isArray":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/isArray.js","./toString":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/toString.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_castPath.js
      return function (require, module, exports) {
var isArray = require('./isArray'),
    isKey = require('./_isKey'),
    stringToPath = require('./_stringToPath'),
    toString = require('./toString');

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_castPath.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/isSymbol.js", {"./_baseGetTag":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_baseGetTag.js","./isObjectLike":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/isObjectLike.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/isSymbol.js
      return function (require, module, exports) {
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/isSymbol.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_isKey.js", {"./isArray":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/isArray.js","./isSymbol":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/isSymbol.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_isKey.js
      return function (require, module, exports) {
var isArray = require('./isArray'),
    isSymbol = require('./isSymbol');

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_isKey.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/toString.js", {"./_baseToString":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_baseToString.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/toString.js
      return function (require, module, exports) {
var baseToString = require('./_baseToString');

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/toString.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_stringToPath.js", {"./_memoizeCapped":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_memoizeCapped.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_stringToPath.js
      return function (require, module, exports) {
var memoizeCapped = require('./_memoizeCapped');

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_stringToPath.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_baseToString.js", {"./_Symbol":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_Symbol.js","./_arrayMap":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_arrayMap.js","./isArray":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/isArray.js","./isSymbol":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/isSymbol.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_baseToString.js
      return function (require, module, exports) {
var Symbol = require('./_Symbol'),
    arrayMap = require('./_arrayMap'),
    isArray = require('./isArray'),
    isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_baseToString.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_memoizeCapped.js", {"./memoize":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/memoize.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_memoizeCapped.js
      return function (require, module, exports) {
var memoize = require('./memoize');

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_memoizeCapped.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/memoize.js", {"./_MapCache":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_MapCache.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/memoize.js
      return function (require, module, exports) {
var MapCache = require('./_MapCache');

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/memoize.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_MapCache.js", {"./_mapCacheClear":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheClear.js","./_mapCacheDelete":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheDelete.js","./_mapCacheGet":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheGet.js","./_mapCacheHas":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheHas.js","./_mapCacheSet":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheSet.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_MapCache.js
      return function (require, module, exports) {
var mapCacheClear = require('./_mapCacheClear'),
    mapCacheDelete = require('./_mapCacheDelete'),
    mapCacheGet = require('./_mapCacheGet'),
    mapCacheHas = require('./_mapCacheHas'),
    mapCacheSet = require('./_mapCacheSet');

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_MapCache.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheGet.js", {"./_getMapData":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getMapData.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheGet.js
      return function (require, module, exports) {
var getMapData = require('./_getMapData');

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheGet.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheHas.js", {"./_getMapData":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getMapData.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheHas.js
      return function (require, module, exports) {
var getMapData = require('./_getMapData');

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheHas.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheSet.js", {"./_getMapData":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getMapData.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheSet.js
      return function (require, module, exports) {
var getMapData = require('./_getMapData');

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheSet.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheDelete.js", {"./_getMapData":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getMapData.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheDelete.js
      return function (require, module, exports) {
var getMapData = require('./_getMapData');

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheDelete.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheClear.js", {"./_Hash":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_Hash.js","./_ListCache":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_ListCache.js","./_Map":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_Map.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheClear.js
      return function (require, module, exports) {
var Hash = require('./_Hash'),
    ListCache = require('./_ListCache'),
    Map = require('./_Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_mapCacheClear.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getMapData.js", {"./_isKeyable":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_isKeyable.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getMapData.js
      return function (require, module, exports) {
var isKeyable = require('./_isKeyable');

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getMapData.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_Map.js", {"./_getNative":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getNative.js","./_root":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_root.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_Map.js
      return function (require, module, exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_Map.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_Hash.js", {"./_hashClear":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashClear.js","./_hashDelete":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashDelete.js","./_hashGet":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashGet.js","./_hashHas":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashHas.js","./_hashSet":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashSet.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_Hash.js
      return function (require, module, exports) {
var hashClear = require('./_hashClear'),
    hashDelete = require('./_hashDelete'),
    hashGet = require('./_hashGet'),
    hashHas = require('./_hashHas'),
    hashSet = require('./_hashSet');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_Hash.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_ListCache.js", {"./_listCacheClear":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheClear.js","./_listCacheDelete":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheDelete.js","./_listCacheGet":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheGet.js","./_listCacheHas":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheHas.js","./_listCacheSet":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheSet.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_ListCache.js
      return function (require, module, exports) {
var listCacheClear = require('./_listCacheClear'),
    listCacheDelete = require('./_listCacheDelete'),
    listCacheGet = require('./_listCacheGet'),
    listCacheHas = require('./_listCacheHas'),
    listCacheSet = require('./_listCacheSet');

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_ListCache.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_isKeyable.js", {}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_isKeyable.js
      return function (require, module, exports) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_isKeyable.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getNative.js", {"./_baseIsNative":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_baseIsNative.js","./_getValue":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getValue.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getNative.js
      return function (require, module, exports) {
var baseIsNative = require('./_baseIsNative'),
    getValue = require('./_getValue');

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getNative.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashDelete.js", {}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashDelete.js
      return function (require, module, exports) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashDelete.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashGet.js", {"./_nativeCreate":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_nativeCreate.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashGet.js
      return function (require, module, exports) {
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashGet.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashHas.js", {"./_nativeCreate":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_nativeCreate.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashHas.js
      return function (require, module, exports) {
var nativeCreate = require('./_nativeCreate');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashHas.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashSet.js", {"./_nativeCreate":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_nativeCreate.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashSet.js
      return function (require, module, exports) {
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashSet.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashClear.js", {"./_nativeCreate":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_nativeCreate.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashClear.js
      return function (require, module, exports) {
var nativeCreate = require('./_nativeCreate');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_hashClear.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheClear.js", {}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheClear.js
      return function (require, module, exports) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheClear.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheGet.js", {"./_assocIndexOf":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_assocIndexOf.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheGet.js
      return function (require, module, exports) {
var assocIndexOf = require('./_assocIndexOf');

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheGet.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheHas.js", {"./_assocIndexOf":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_assocIndexOf.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheHas.js
      return function (require, module, exports) {
var assocIndexOf = require('./_assocIndexOf');

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheHas.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheSet.js", {"./_assocIndexOf":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_assocIndexOf.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheSet.js
      return function (require, module, exports) {
var assocIndexOf = require('./_assocIndexOf');

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheSet.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheDelete.js", {"./_assocIndexOf":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_assocIndexOf.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheDelete.js
      return function (require, module, exports) {
var assocIndexOf = require('./_assocIndexOf');

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_listCacheDelete.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getValue.js", {}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getValue.js
      return function (require, module, exports) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getValue.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_baseIsNative.js", {"./_isMasked":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_isMasked.js","./_toSource":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_toSource.js","./isFunction":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/isFunction.js","./isObject":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/isObject.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_baseIsNative.js
      return function (require, module, exports) {
var isFunction = require('./isFunction'),
    isMasked = require('./_isMasked'),
    isObject = require('./isObject'),
    toSource = require('./_toSource');

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_baseIsNative.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_nativeCreate.js", {"./_getNative":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_getNative.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_nativeCreate.js
      return function (require, module, exports) {
var getNative = require('./_getNative');

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_nativeCreate.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_assocIndexOf.js", {"./eq":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/eq.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_assocIndexOf.js
      return function (require, module, exports) {
var eq = require('./eq');

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_assocIndexOf.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_toSource.js", {}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_toSource.js
      return function (require, module, exports) {
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_toSource.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_isMasked.js", {"./_coreJsData":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_coreJsData.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_isMasked.js
      return function (require, module, exports) {
var coreJsData = require('./_coreJsData');

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_isMasked.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/eq.js", {}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/eq.js
      return function (require, module, exports) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/eq.js",}],
["/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_coreJsData.js", {"./_root":"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_root.js"}, function(){
  with (this) {
    return function() {
      'use strict';
      // source: /home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_coreJsData.js
      return function (require, module, exports) {
var root = require('./_root');

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

      };
    };
  }
}, {package:"lodash",file:"/home/clarisco/Desktop/metamask-extension-develop/node_modules/lodash/_coreJsData.js",}]],[],{})

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9qc2JpL2Rpc3QvanNiaS11bWQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0LmpzIiwibm9kZV9tb2R1bGVzL2NyYy9saWIvZXM2L2NyZWF0ZV9idWZmZXIuanMiLCJub2RlX21vZHVsZXMvY3JjL2xpYi9lczYvZGVmaW5lX2NyYy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvS2V5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcENhY2hlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleWFibGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hIYXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoU2V0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19nZXRWYWx1ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21tb24tNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihpLF8pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP18oZXhwb3J0cyk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLF8pOihpPWl8fHNlbGYsXyhpLkpTQkk9e30pKX0pKHRoaXMsZnVuY3Rpb24oaSl7J3VzZSBzdHJpY3QnO3ZhciBfPU1hdGguY2x6MzIsdD1NYXRoLmFicyxlPU1hdGgubWF4LGc9TWF0aC5mbG9vcjtjbGFzcyBvIGV4dGVuZHMgQXJyYXl7Y29uc3RydWN0b3IoaSxfKXtpZihzdXBlcihpKSx0aGlzLnNpZ249XyxpPm8uX19rTWF4TGVuZ3RoKXRocm93IG5ldyBSYW5nZUVycm9yKFwiTWF4aW11bSBCaWdJbnQgc2l6ZSBleGNlZWRlZFwiKX1zdGF0aWMgQmlnSW50KGkpe3ZhciBfPU51bWJlci5pc0Zpbml0ZTtpZihcIm51bWJlclwiPT10eXBlb2YgaSl7aWYoMD09PWkpcmV0dXJuIG8uX196ZXJvKCk7aWYoby5fX2lzT25lRGlnaXRJbnQoaSkpcmV0dXJuIDA+aT9vLl9fb25lRGlnaXQoLWksITApOm8uX19vbmVEaWdpdChpLCExKTtpZighXyhpKXx8ZyhpKSE9PWkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgbnVtYmVyIFwiK2krXCIgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBCaWdJbnQgYmVjYXVzZSBpdCBpcyBub3QgYW4gaW50ZWdlclwiKTtyZXR1cm4gby5fX2Zyb21Eb3VibGUoaSl9aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkpe2NvbnN0IF89by5fX2Zyb21TdHJpbmcoaSk7aWYobnVsbD09PV8pdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiQ2Fubm90IGNvbnZlcnQgXCIraStcIiB0byBhIEJpZ0ludFwiKTtyZXR1cm4gX31pZihcImJvb2xlYW5cIj09dHlwZW9mIGkpcmV0dXJuITA9PT1pP28uX19vbmVEaWdpdCgxLCExKTpvLl9femVybygpO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBpKXtpZihpLmNvbnN0cnVjdG9yPT09bylyZXR1cm4gaTtjb25zdCBfPW8uX190b1ByaW1pdGl2ZShpKTtyZXR1cm4gby5CaWdJbnQoXyl9dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjb252ZXJ0IFwiK2krXCIgdG8gYSBCaWdJbnRcIil9dG9EZWJ1Z1N0cmluZygpe2NvbnN0IGk9W1wiQmlnSW50W1wiXTtmb3IoY29uc3QgXyBvZiB0aGlzKWkucHVzaCgoXz8oXz4+PjApLnRvU3RyaW5nKDE2KTpfKStcIiwgXCIpO3JldHVybiBpLnB1c2goXCJdXCIpLGkuam9pbihcIlwiKX10b1N0cmluZyhpPTEwKXtpZigyPml8fDM2PGkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJ0b1N0cmluZygpIHJhZGl4IGFyZ3VtZW50IG11c3QgYmUgYmV0d2VlbiAyIGFuZCAzNlwiKTtyZXR1cm4gMD09PXRoaXMubGVuZ3RoP1wiMFwiOjA9PShpJmktMSk/by5fX3RvU3RyaW5nQmFzZVBvd2VyT2ZUd28odGhpcyxpKTpvLl9fdG9TdHJpbmdHZW5lcmljKHRoaXMsaSwhMSl9c3RhdGljIHRvTnVtYmVyKGkpe2NvbnN0IF89aS5sZW5ndGg7aWYoMD09PV8pcmV0dXJuIDA7aWYoMT09PV8pe2NvbnN0IF89aS5fX3Vuc2lnbmVkRGlnaXQoMCk7cmV0dXJuIGkuc2lnbj8tXzpffWNvbnN0IHQ9aS5fX2RpZ2l0KF8tMSksZT1vLl9fY2x6MzAodCksbj0zMCpfLWU7aWYoMTAyNDxuKXJldHVybiBpLnNpZ24/LUluZmluaXR5OjEvMDtsZXQgZz1uLTEscz10LGw9Xy0xO2NvbnN0IHI9ZSszO2xldCBhPTMyPT09cj8wOnM8PHI7YT4+Pj0xMjtjb25zdCB1PXItMTI7bGV0IGQ9MTI8PXI/MDpzPDwyMCtyLGg9MjArcjtmb3IoMDx1JiYwPGwmJihsLS0scz1pLl9fZGlnaXQobCksYXw9cz4+PjMwLXUsZD1zPDx1KzIsaD11KzIpOzA8aCYmMDxsOylsLS0scz1pLl9fZGlnaXQobCksZHw9MzA8PWg/czw8aC0zMDpzPj4+MzAtaCxoLT0zMDtjb25zdCBtPW8uX19kZWNpZGVSb3VuZGluZyhpLGgsbCxzKTtpZigoMT09PW18fDA9PT1tJiYxPT0oMSZkKSkmJihkPWQrMT4+PjAsMD09PWQmJihhKyssMCE9YT4+PjIwJiYoYT0wLGcrKywxMDIzPGcpKSkpcmV0dXJuIGkuc2lnbj8tSW5maW5pdHk6MS8wO2NvbnN0IGI9aS5zaWduPy0yMTQ3NDgzNjQ4OjA7cmV0dXJuIGc9ZysxMDIzPDwyMCxvLl9fa0JpdENvbnZlcnNpb25JbnRzWzFdPWJ8Z3xhLG8uX19rQml0Q29udmVyc2lvbkludHNbMF09ZCxvLl9fa0JpdENvbnZlcnNpb25Eb3VibGVbMF19c3RhdGljIHVuYXJ5TWludXMoaSl7aWYoMD09PWkubGVuZ3RoKXJldHVybiBpO2NvbnN0IF89aS5fX2NvcHkoKTtyZXR1cm4gXy5zaWduPSFpLnNpZ24sX31zdGF0aWMgYml0d2lzZU5vdChpKXtyZXR1cm4gaS5zaWduP28uX19hYnNvbHV0ZVN1Yk9uZShpKS5fX3RyaW0oKTpvLl9fYWJzb2x1dGVBZGRPbmUoaSwhMCl9c3RhdGljIGV4cG9uZW50aWF0ZShpLF8pe2lmKF8uc2lnbil0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkV4cG9uZW50IG11c3QgYmUgcG9zaXRpdmVcIik7aWYoMD09PV8ubGVuZ3RoKXJldHVybiBvLl9fb25lRGlnaXQoMSwhMSk7aWYoMD09PWkubGVuZ3RoKXJldHVybiBpO2lmKDE9PT1pLmxlbmd0aCYmMT09PWkuX19kaWdpdCgwKSlyZXR1cm4gaS5zaWduJiYwPT0oMSZfLl9fZGlnaXQoMCkpP28udW5hcnlNaW51cyhpKTppO2lmKDE8Xy5sZW5ndGgpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJCaWdJbnQgdG9vIGJpZ1wiKTtsZXQgdD1fLl9fdW5zaWduZWREaWdpdCgwKTtpZigxPT09dClyZXR1cm4gaTtpZih0Pj1vLl9fa01heExlbmd0aEJpdHMpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJCaWdJbnQgdG9vIGJpZ1wiKTtpZigxPT09aS5sZW5ndGgmJjI9PT1pLl9fZGlnaXQoMCkpe2NvbnN0IF89MSsoMHx0LzMwKSxlPWkuc2lnbiYmMCE9KDEmdCksbj1uZXcgbyhfLGUpO24uX19pbml0aWFsaXplRGlnaXRzKCk7Y29uc3QgZz0xPDx0JTMwO3JldHVybiBuLl9fc2V0RGlnaXQoXy0xLGcpLG59bGV0IGU9bnVsbCxuPWk7Zm9yKDAhPSgxJnQpJiYoZT1pKSx0Pj49MTswIT09dDt0Pj49MSluPW8ubXVsdGlwbHkobixuKSwwIT0oMSZ0KSYmKG51bGw9PT1lP2U9bjplPW8ubXVsdGlwbHkoZSxuKSk7cmV0dXJuIGV9c3RhdGljIG11bHRpcGx5KF8sdCl7aWYoMD09PV8ubGVuZ3RoKXJldHVybiBfO2lmKDA9PT10Lmxlbmd0aClyZXR1cm4gdDtsZXQgaT1fLmxlbmd0aCt0Lmxlbmd0aDszMDw9Xy5fX2Nsem1zZCgpK3QuX19jbHptc2QoKSYmaS0tO2NvbnN0IGU9bmV3IG8oaSxfLnNpZ24hPT10LnNpZ24pO2UuX19pbml0aWFsaXplRGlnaXRzKCk7Zm9yKGxldCBuPTA7bjxfLmxlbmd0aDtuKyspby5fX211bHRpcGx5QWNjdW11bGF0ZSh0LF8uX19kaWdpdChuKSxlLG4pO3JldHVybiBlLl9fdHJpbSgpfXN0YXRpYyBkaXZpZGUoaSxfKXtpZigwPT09Xy5sZW5ndGgpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJEaXZpc2lvbiBieSB6ZXJvXCIpO2lmKDA+by5fX2Fic29sdXRlQ29tcGFyZShpLF8pKXJldHVybiBvLl9femVybygpO2NvbnN0IHQ9aS5zaWduIT09Xy5zaWduLGU9Xy5fX3Vuc2lnbmVkRGlnaXQoMCk7bGV0IG47aWYoMT09PV8ubGVuZ3RoJiYzMjc2Nz49ZSl7aWYoMT09PWUpcmV0dXJuIHQ9PT1pLnNpZ24/aTpvLnVuYXJ5TWludXMoaSk7bj1vLl9fYWJzb2x1dGVEaXZTbWFsbChpLGUsbnVsbCl9ZWxzZSBuPW8uX19hYnNvbHV0ZURpdkxhcmdlKGksXywhMCwhMSk7cmV0dXJuIG4uc2lnbj10LG4uX190cmltKCl9c3RhdGljIHJlbWFpbmRlcihpLF8pe2lmKDA9PT1fLmxlbmd0aCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkRpdmlzaW9uIGJ5IHplcm9cIik7aWYoMD5vLl9fYWJzb2x1dGVDb21wYXJlKGksXykpcmV0dXJuIGk7Y29uc3QgdD1fLl9fdW5zaWduZWREaWdpdCgwKTtpZigxPT09Xy5sZW5ndGgmJjMyNzY3Pj10KXtpZigxPT09dClyZXR1cm4gby5fX3plcm8oKTtjb25zdCBfPW8uX19hYnNvbHV0ZU1vZFNtYWxsKGksdCk7cmV0dXJuIDA9PT1fP28uX196ZXJvKCk6by5fX29uZURpZ2l0KF8saS5zaWduKX1jb25zdCBlPW8uX19hYnNvbHV0ZURpdkxhcmdlKGksXywhMSwhMCk7cmV0dXJuIGUuc2lnbj1pLnNpZ24sZS5fX3RyaW0oKX1zdGF0aWMgYWRkKGksXyl7Y29uc3QgdD1pLnNpZ247cmV0dXJuIHQ9PT1fLnNpZ24/by5fX2Fic29sdXRlQWRkKGksXyx0KTowPD1vLl9fYWJzb2x1dGVDb21wYXJlKGksXyk/by5fX2Fic29sdXRlU3ViKGksXyx0KTpvLl9fYWJzb2x1dGVTdWIoXyxpLCF0KX1zdGF0aWMgc3VidHJhY3QoaSxfKXtjb25zdCB0PWkuc2lnbjtyZXR1cm4gdD09PV8uc2lnbj8wPD1vLl9fYWJzb2x1dGVDb21wYXJlKGksXyk/by5fX2Fic29sdXRlU3ViKGksXyx0KTpvLl9fYWJzb2x1dGVTdWIoXyxpLCF0KTpvLl9fYWJzb2x1dGVBZGQoaSxfLHQpfXN0YXRpYyBsZWZ0U2hpZnQoaSxfKXtyZXR1cm4gMD09PV8ubGVuZ3RofHwwPT09aS5sZW5ndGg/aTpfLnNpZ24/by5fX3JpZ2h0U2hpZnRCeUFic29sdXRlKGksXyk6by5fX2xlZnRTaGlmdEJ5QWJzb2x1dGUoaSxfKX1zdGF0aWMgc2lnbmVkUmlnaHRTaGlmdChpLF8pe3JldHVybiAwPT09Xy5sZW5ndGh8fDA9PT1pLmxlbmd0aD9pOl8uc2lnbj9vLl9fbGVmdFNoaWZ0QnlBYnNvbHV0ZShpLF8pOm8uX19yaWdodFNoaWZ0QnlBYnNvbHV0ZShpLF8pfXN0YXRpYyB1bnNpZ25lZFJpZ2h0U2hpZnQoKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQmlnSW50cyBoYXZlIG5vIHVuc2lnbmVkIHJpZ2h0IHNoaWZ0OyB1c2UgPj4gaW5zdGVhZFwiKX1zdGF0aWMgbGVzc1RoYW4oaSxfKXtyZXR1cm4gMD5vLl9fY29tcGFyZVRvQmlnSW50KGksXyl9c3RhdGljIGxlc3NUaGFuT3JFcXVhbChpLF8pe3JldHVybiAwPj1vLl9fY29tcGFyZVRvQmlnSW50KGksXyl9c3RhdGljIGdyZWF0ZXJUaGFuKGksXyl7cmV0dXJuIDA8by5fX2NvbXBhcmVUb0JpZ0ludChpLF8pfXN0YXRpYyBncmVhdGVyVGhhbk9yRXF1YWwoaSxfKXtyZXR1cm4gMDw9by5fX2NvbXBhcmVUb0JpZ0ludChpLF8pfXN0YXRpYyBlcXVhbChfLHQpe2lmKF8uc2lnbiE9PXQuc2lnbilyZXR1cm4hMTtpZihfLmxlbmd0aCE9PXQubGVuZ3RoKXJldHVybiExO2ZvcihsZXQgZT0wO2U8Xy5sZW5ndGg7ZSsrKWlmKF8uX19kaWdpdChlKSE9PXQuX19kaWdpdChlKSlyZXR1cm4hMTtyZXR1cm4hMH1zdGF0aWMgbm90RXF1YWwoaSxfKXtyZXR1cm4hby5lcXVhbChpLF8pfXN0YXRpYyBiaXR3aXNlQW5kKGksXyl7aWYoIWkuc2lnbiYmIV8uc2lnbilyZXR1cm4gby5fX2Fic29sdXRlQW5kKGksXykuX190cmltKCk7aWYoaS5zaWduJiZfLnNpZ24pe2NvbnN0IHQ9ZShpLmxlbmd0aCxfLmxlbmd0aCkrMTtsZXQgbj1vLl9fYWJzb2x1dGVTdWJPbmUoaSx0KTtjb25zdCBnPW8uX19hYnNvbHV0ZVN1Yk9uZShfKTtyZXR1cm4gbj1vLl9fYWJzb2x1dGVPcihuLGcsbiksby5fX2Fic29sdXRlQWRkT25lKG4sITAsbikuX190cmltKCl9cmV0dXJuIGkuc2lnbiYmKFtpLF9dPVtfLGldKSxvLl9fYWJzb2x1dGVBbmROb3QoaSxvLl9fYWJzb2x1dGVTdWJPbmUoXykpLl9fdHJpbSgpfXN0YXRpYyBiaXR3aXNlWG9yKGksXyl7aWYoIWkuc2lnbiYmIV8uc2lnbilyZXR1cm4gby5fX2Fic29sdXRlWG9yKGksXykuX190cmltKCk7aWYoaS5zaWduJiZfLnNpZ24pe2NvbnN0IHQ9ZShpLmxlbmd0aCxfLmxlbmd0aCksbj1vLl9fYWJzb2x1dGVTdWJPbmUoaSx0KSxnPW8uX19hYnNvbHV0ZVN1Yk9uZShfKTtyZXR1cm4gby5fX2Fic29sdXRlWG9yKG4sZyxuKS5fX3RyaW0oKX1jb25zdCB0PWUoaS5sZW5ndGgsXy5sZW5ndGgpKzE7aS5zaWduJiYoW2ksX109W18saV0pO2xldCBuPW8uX19hYnNvbHV0ZVN1Yk9uZShfLHQpO3JldHVybiBuPW8uX19hYnNvbHV0ZVhvcihuLGksbiksby5fX2Fic29sdXRlQWRkT25lKG4sITAsbikuX190cmltKCl9c3RhdGljIGJpdHdpc2VPcihpLF8pe2NvbnN0IHQ9ZShpLmxlbmd0aCxfLmxlbmd0aCk7aWYoIWkuc2lnbiYmIV8uc2lnbilyZXR1cm4gby5fX2Fic29sdXRlT3IoaSxfKS5fX3RyaW0oKTtpZihpLnNpZ24mJl8uc2lnbil7bGV0IGU9by5fX2Fic29sdXRlU3ViT25lKGksdCk7Y29uc3Qgbj1vLl9fYWJzb2x1dGVTdWJPbmUoXyk7cmV0dXJuIGU9by5fX2Fic29sdXRlQW5kKGUsbixlKSxvLl9fYWJzb2x1dGVBZGRPbmUoZSwhMCxlKS5fX3RyaW0oKX1pLnNpZ24mJihbaSxfXT1bXyxpXSk7bGV0IG49by5fX2Fic29sdXRlU3ViT25lKF8sdCk7cmV0dXJuIG49by5fX2Fic29sdXRlQW5kTm90KG4saSxuKSxvLl9fYWJzb2x1dGVBZGRPbmUobiwhMCxuKS5fX3RyaW0oKX1zdGF0aWMgYXNJbnROKF8sdCl7aWYoMD09PXQubGVuZ3RoKXJldHVybiB0O2lmKF89ZyhfKSwwPl8pdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHZhbHVlOiBub3QgKGNvbnZlcnRpYmxlIHRvKSBhIHNhZmUgaW50ZWdlclwiKTtpZigwPT09XylyZXR1cm4gby5fX3plcm8oKTtpZihfPj1vLl9fa01heExlbmd0aEJpdHMpcmV0dXJuIHQ7Y29uc3QgZT0wfChfKzI5KS8zMDtpZih0Lmxlbmd0aDxlKXJldHVybiB0O2NvbnN0IHM9dC5fX3Vuc2lnbmVkRGlnaXQoZS0xKSxsPTE8PChfLTEpJTMwO2lmKHQubGVuZ3RoPT09ZSYmczxsKXJldHVybiB0O2lmKCEoKHMmbCk9PT1sKSlyZXR1cm4gby5fX3RydW5jYXRlVG9OQml0cyhfLHQpO2lmKCF0LnNpZ24pcmV0dXJuIG8uX190cnVuY2F0ZUFuZFN1YkZyb21Qb3dlck9mVHdvKF8sdCwhMCk7aWYoMD09KHMmbC0xKSl7Zm9yKGxldCBuPWUtMjswPD1uO24tLSlpZigwIT09dC5fX2RpZ2l0KG4pKXJldHVybiBvLl9fdHJ1bmNhdGVBbmRTdWJGcm9tUG93ZXJPZlR3byhfLHQsITEpO3JldHVybiB0Lmxlbmd0aD09PWUmJnM9PT1sP3Q6by5fX3RydW5jYXRlVG9OQml0cyhfLHQpfXJldHVybiBvLl9fdHJ1bmNhdGVBbmRTdWJGcm9tUG93ZXJPZlR3byhfLHQsITEpfXN0YXRpYyBhc1VpbnROKGksXyl7aWYoMD09PV8ubGVuZ3RoKXJldHVybiBfO2lmKGk9ZyhpKSwwPmkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHZhbHVlOiBub3QgKGNvbnZlcnRpYmxlIHRvKSBhIHNhZmUgaW50ZWdlclwiKTtpZigwPT09aSlyZXR1cm4gby5fX3plcm8oKTtpZihfLnNpZ24pe2lmKGk+by5fX2tNYXhMZW5ndGhCaXRzKXRocm93IG5ldyBSYW5nZUVycm9yKFwiQmlnSW50IHRvbyBiaWdcIik7cmV0dXJuIG8uX190cnVuY2F0ZUFuZFN1YkZyb21Qb3dlck9mVHdvKGksXywhMSl9aWYoaT49by5fX2tNYXhMZW5ndGhCaXRzKXJldHVybiBfO2NvbnN0IHQ9MHwoaSsyOSkvMzA7aWYoXy5sZW5ndGg8dClyZXR1cm4gXztjb25zdCBlPWklMzA7aWYoXy5sZW5ndGg9PXQpe2lmKDA9PT1lKXJldHVybiBfO2NvbnN0IGk9Xy5fX2RpZ2l0KHQtMSk7aWYoMD09aT4+PmUpcmV0dXJuIF99cmV0dXJuIG8uX190cnVuY2F0ZVRvTkJpdHMoaSxfKX1zdGF0aWMgQUREKGksXyl7aWYoaT1vLl9fdG9QcmltaXRpdmUoaSksXz1vLl9fdG9QcmltaXRpdmUoXyksXCJzdHJpbmdcIj09dHlwZW9mIGkpcmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIF8mJihfPV8udG9TdHJpbmcoKSksaStfO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBfKXJldHVybiBpLnRvU3RyaW5nKCkrXztpZihpPW8uX190b051bWVyaWMoaSksXz1vLl9fdG9OdW1lcmljKF8pLG8uX19pc0JpZ0ludChpKSYmby5fX2lzQmlnSW50KF8pKXJldHVybiBvLmFkZChpLF8pO2lmKFwibnVtYmVyXCI9PXR5cGVvZiBpJiZcIm51bWJlclwiPT10eXBlb2YgXylyZXR1cm4gaStfO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgbWl4IEJpZ0ludCBhbmQgb3RoZXIgdHlwZXMsIHVzZSBleHBsaWNpdCBjb252ZXJzaW9uc1wiKX1zdGF0aWMgTFQoaSxfKXtyZXR1cm4gby5fX2NvbXBhcmUoaSxfLDApfXN0YXRpYyBMRShpLF8pe3JldHVybiBvLl9fY29tcGFyZShpLF8sMSl9c3RhdGljIEdUKGksXyl7cmV0dXJuIG8uX19jb21wYXJlKGksXywyKX1zdGF0aWMgR0UoaSxfKXtyZXR1cm4gby5fX2NvbXBhcmUoaSxfLDMpfXN0YXRpYyBFUShpLF8pe2Zvcig7Oyl7aWYoby5fX2lzQmlnSW50KGkpKXJldHVybiBvLl9faXNCaWdJbnQoXyk/by5lcXVhbChpLF8pOm8uRVEoXyxpKTtpZihcIm51bWJlclwiPT10eXBlb2YgaSl7aWYoby5fX2lzQmlnSW50KF8pKXJldHVybiBvLl9fZXF1YWxUb051bWJlcihfLGkpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBfKXJldHVybiBpPT1fO189by5fX3RvUHJpbWl0aXZlKF8pfWVsc2UgaWYoXCJzdHJpbmdcIj09dHlwZW9mIGkpe2lmKG8uX19pc0JpZ0ludChfKSlyZXR1cm4gaT1vLl9fZnJvbVN0cmluZyhpKSxudWxsIT09aSYmby5lcXVhbChpLF8pO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBfKXJldHVybiBpPT1fO189by5fX3RvUHJpbWl0aXZlKF8pfWVsc2UgaWYoXCJib29sZWFuXCI9PXR5cGVvZiBpKXtpZihvLl9faXNCaWdJbnQoXykpcmV0dXJuIG8uX19lcXVhbFRvTnVtYmVyKF8sK2kpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBfKXJldHVybiBpPT1fO189by5fX3RvUHJpbWl0aXZlKF8pfWVsc2UgaWYoXCJzeW1ib2xcIj09dHlwZW9mIGkpe2lmKG8uX19pc0JpZ0ludChfKSlyZXR1cm4hMTtpZihcIm9iamVjdFwiIT10eXBlb2YgXylyZXR1cm4gaT09XztfPW8uX190b1ByaW1pdGl2ZShfKX1lbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBpKXtpZihcIm9iamVjdFwiPT10eXBlb2YgXyYmXy5jb25zdHJ1Y3RvciE9PW8pcmV0dXJuIGk9PV87aT1vLl9fdG9QcmltaXRpdmUoaSl9ZWxzZSByZXR1cm4gaT09X319c3RhdGljIE5FKGksXyl7cmV0dXJuIW8uRVEoaSxfKX1zdGF0aWMgX196ZXJvKCl7cmV0dXJuIG5ldyBvKDAsITEpfXN0YXRpYyBfX29uZURpZ2l0KGksXyl7Y29uc3QgdD1uZXcgbygxLF8pO3JldHVybiB0Ll9fc2V0RGlnaXQoMCxpKSx0fV9fY29weSgpe2NvbnN0IF89bmV3IG8odGhpcy5sZW5ndGgsdGhpcy5zaWduKTtmb3IobGV0IHQ9MDt0PHRoaXMubGVuZ3RoO3QrKylfW3RdPXRoaXNbdF07cmV0dXJuIF99X190cmltKCl7bGV0IGk9dGhpcy5sZW5ndGgsXz10aGlzW2ktMV07Zm9yKDswPT09XzspaS0tLF89dGhpc1tpLTFdLHRoaXMucG9wKCk7cmV0dXJuIDA9PT1pJiYodGhpcy5zaWduPSExKSx0aGlzfV9faW5pdGlhbGl6ZURpZ2l0cygpe2ZvcihsZXQgXz0wO188dGhpcy5sZW5ndGg7XysrKXRoaXNbX109MH1zdGF0aWMgX19kZWNpZGVSb3VuZGluZyhpLF8sdCxlKXtpZigwPF8pcmV0dXJuLTE7bGV0IG47aWYoMD5fKW49LV8tMTtlbHNle2lmKDA9PT10KXJldHVybi0xO3QtLSxlPWkuX19kaWdpdCh0KSxuPTI5fWxldCBnPTE8PG47aWYoMD09KGUmZykpcmV0dXJuLTE7aWYoZy09MSwwIT0oZSZnKSlyZXR1cm4gMTtmb3IoOzA8dDspaWYodC0tLDAhPT1pLl9fZGlnaXQodCkpcmV0dXJuIDE7cmV0dXJuIDB9c3RhdGljIF9fZnJvbURvdWJsZShpKXtvLl9fa0JpdENvbnZlcnNpb25Eb3VibGVbMF09aTtjb25zdCBfPTIwNDcmby5fX2tCaXRDb252ZXJzaW9uSW50c1sxXT4+PjIwLHQ9Xy0xMDIzLGU9KDB8dC8zMCkrMSxuPW5ldyBvKGUsMD5pKTtsZXQgZz0xMDQ4NTc1Jm8uX19rQml0Q29udmVyc2lvbkludHNbMV18MTA0ODU3NixzPW8uX19rQml0Q29udmVyc2lvbkludHNbMF07Y29uc3QgbD0yMCxyPXQlMzA7bGV0IGEsdT0wO2lmKHI8MjApe2NvbnN0IGk9bC1yO3U9aSszMixhPWc+Pj5pLGc9Zzw8MzItaXxzPj4+aSxzPDw9MzItaX1lbHNlIGlmKHI9PT0yMCl1PTMyLGE9ZyxnPXMscz0wO2Vsc2V7Y29uc3QgaT1yLWw7dT0zMi1pLGE9Zzw8aXxzPj4+MzItaSxnPXM8PGkscz0wfW4uX19zZXREaWdpdChlLTEsYSk7Zm9yKGxldCBfPWUtMjswPD1fO18tLSkwPHU/KHUtPTMwLGE9Zz4+PjIsZz1nPDwzMHxzPj4+MixzPDw9MzApOmE9MCxuLl9fc2V0RGlnaXQoXyxhKTtyZXR1cm4gbi5fX3RyaW0oKX1zdGF0aWMgX19pc1doaXRlc3BhY2UoaSl7cmV0dXJuISEoMTM+PWkmJjk8PWkpfHwoMTU5Pj1pPzMyPT1pOjEzMTA3MT49aT8xNjA9PWl8fDU3NjA9PWk6MTk2NjA3Pj1pPyhpJj0xMzEwNzEsMTA+PWl8fDQwPT1pfHw0MT09aXx8NDc9PWl8fDk1PT1pfHw0MDk2PT1pKTo2NTI3OT09aSl9c3RhdGljIF9fZnJvbVN0cmluZyhpLF89MCl7bGV0IHQ9MDtjb25zdCBlPWkubGVuZ3RoO2xldCBuPTA7aWYobj09PWUpcmV0dXJuIG8uX196ZXJvKCk7bGV0IGc9aS5jaGFyQ29kZUF0KG4pO2Zvcig7by5fX2lzV2hpdGVzcGFjZShnKTspe2lmKCsrbj09PWUpcmV0dXJuIG8uX196ZXJvKCk7Zz1pLmNoYXJDb2RlQXQobil9aWYoNDM9PT1nKXtpZigrK249PT1lKXJldHVybiBudWxsO2c9aS5jaGFyQ29kZUF0KG4pLHQ9MX1lbHNlIGlmKDQ1PT09Zyl7aWYoKytuPT09ZSlyZXR1cm4gbnVsbDtnPWkuY2hhckNvZGVBdChuKSx0PS0xfWlmKDA9PT1fKXtpZihfPTEwLDQ4PT09Zyl7aWYoKytuPT09ZSlyZXR1cm4gby5fX3plcm8oKTtpZihnPWkuY2hhckNvZGVBdChuKSw4OD09PWd8fDEyMD09PWcpe2lmKF89MTYsKytuPT09ZSlyZXR1cm4gbnVsbDtnPWkuY2hhckNvZGVBdChuKX1lbHNlIGlmKDc5PT09Z3x8MTExPT09Zyl7aWYoXz04LCsrbj09PWUpcmV0dXJuIG51bGw7Zz1pLmNoYXJDb2RlQXQobil9ZWxzZSBpZig2Nj09PWd8fDk4PT09Zyl7aWYoXz0yLCsrbj09PWUpcmV0dXJuIG51bGw7Zz1pLmNoYXJDb2RlQXQobil9fX1lbHNlIGlmKDE2PT09XyYmNDg9PT1nKXtpZigrK249PT1lKXJldHVybiBvLl9femVybygpO2lmKGc9aS5jaGFyQ29kZUF0KG4pLDg4PT09Z3x8MTIwPT09Zyl7aWYoKytuPT09ZSlyZXR1cm4gbnVsbDtnPWkuY2hhckNvZGVBdChuKX19aWYoMCE9dCYmMTAhPT1fKXJldHVybiBudWxsO2Zvcig7NDg9PT1nOyl7aWYoKytuPT09ZSlyZXR1cm4gby5fX3plcm8oKTtnPWkuY2hhckNvZGVBdChuKX1jb25zdCBzPWUtbjtsZXQgbD1vLl9fa01heEJpdHNQZXJDaGFyW19dLHI9by5fX2tCaXRzUGVyQ2hhclRhYmxlTXVsdGlwbGllci0xO2lmKHM+MTA3Mzc0MTgyNC9sKXJldHVybiBudWxsO2NvbnN0IGE9bCpzK3I+Pj5vLl9fa0JpdHNQZXJDaGFyVGFibGVTaGlmdCx1PW5ldyBvKDB8KGErMjkpLzMwLCExKSxoPTEwPl8/XzoxMCxiPTEwPF8/Xy0xMDowO2lmKDA9PShfJl8tMSkpe2w+Pj1vLl9fa0JpdHNQZXJDaGFyVGFibGVTaGlmdDtjb25zdCBfPVtdLHQ9W107bGV0IHM9ITE7ZG97bGV0IG89MCxyPTA7Zm9yKDs7KXtsZXQgXztpZihnLTQ4Pj4+MDxoKV89Zy00ODtlbHNlIGlmKCgzMnxnKS05Nz4+PjA8YilfPSgzMnxnKS04NztlbHNle3M9ITA7YnJlYWt9aWYocis9bCxvPW88PGx8XywrK249PT1lKXtzPSEwO2JyZWFrfWlmKGc9aS5jaGFyQ29kZUF0KG4pLDMwPHIrbClicmVha31fLnB1c2gobyksdC5wdXNoKHIpfXdoaWxlKCFzKTtvLl9fZmlsbEZyb21QYXJ0cyh1LF8sdCl9ZWxzZXt1Ll9faW5pdGlhbGl6ZURpZ2l0cygpO2xldCB0PSExLHM9MDtkb3tsZXQgYT0wLEQ9MTtmb3IoOzspe2xldCBvO2lmKGctNDg+Pj4wPGgpbz1nLTQ4O2Vsc2UgaWYoKDMyfGcpLTk3Pj4+MDxiKW89KDMyfGcpLTg3O2Vsc2V7dD0hMDticmVha31jb25zdCBsPUQqXztpZigxMDczNzQxODIzPGwpYnJlYWs7aWYoRD1sLGE9YSpfK28scysrLCsrbj09PWUpe3Q9ITA7YnJlYWt9Zz1pLmNoYXJDb2RlQXQobil9cj0zMCpvLl9fa0JpdHNQZXJDaGFyVGFibGVNdWx0aXBsaWVyLTE7Y29uc3QgYz0wfChsKnMrcj4+Pm8uX19rQml0c1BlckNoYXJUYWJsZVNoaWZ0KS8zMDt1Ll9faW5wbGFjZU11bHRpcGx5QWRkKEQsYSxjKX13aGlsZSghdCl9aWYobiE9PWUpe2lmKCFvLl9faXNXaGl0ZXNwYWNlKGcpKXJldHVybiBudWxsO2ZvcihuKys7bjxlO24rKylpZihnPWkuY2hhckNvZGVBdChuKSwhby5fX2lzV2hpdGVzcGFjZShnKSlyZXR1cm4gbnVsbH1yZXR1cm4gdS5zaWduPS0xPT10LHUuX190cmltKCl9c3RhdGljIF9fZmlsbEZyb21QYXJ0cyhfLHQsZSl7bGV0IG49MCxnPTAsbz0wO2ZvcihsZXQgcz10Lmxlbmd0aC0xOzA8PXM7cy0tKXtjb25zdCBpPXRbc10sbD1lW3NdO2d8PWk8PG8sbys9bCwzMD09PW8/KF8uX19zZXREaWdpdChuKyssZyksbz0wLGc9MCk6MzA8byYmKF8uX19zZXREaWdpdChuKyssMTA3Mzc0MTgyMyZnKSxvLT0zMCxnPWk+Pj5sLW8pfWlmKDAhPT1nKXtpZihuPj1fLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJpbXBsZW1lbnRhdGlvbiBidWdcIik7Xy5fX3NldERpZ2l0KG4rKyxnKX1mb3IoO248Xy5sZW5ndGg7bisrKV8uX19zZXREaWdpdChuLDApfXN0YXRpYyBfX3RvU3RyaW5nQmFzZVBvd2VyT2ZUd28oXyxpKXtjb25zdCB0PV8ubGVuZ3RoO2xldCBlPWktMTtlPSg4NSZlPj4+MSkrKDg1JmUpLGU9KDUxJmU+Pj4yKSsoNTEmZSksZT0oMTUmZT4+PjQpKygxNSZlKTtjb25zdCBuPWUsZz1pLTEscz1fLl9fZGlnaXQodC0xKSxsPW8uX19jbHozMChzKTtsZXQgcj0wfCgzMCp0LWwrbi0xKS9uO2lmKF8uc2lnbiYmcisrLDI2ODQzNTQ1NjxyKXRocm93IG5ldyBFcnJvcihcInN0cmluZyB0b28gbG9uZ1wiKTtjb25zdCBhPUFycmF5KHIpO2xldCB1PXItMSxkPTAsaD0wO2ZvcihsZXQgZT0wO2U8dC0xO2UrKyl7Y29uc3QgaT1fLl9fZGlnaXQoZSksdD0oZHxpPDxoKSZnO2FbdS0tXT1vLl9fa0NvbnZlcnNpb25DaGFyc1t0XTtjb25zdCBzPW4taDtmb3IoZD1pPj4+cyxoPTMwLXM7aD49bjspYVt1LS1dPW8uX19rQ29udmVyc2lvbkNoYXJzW2QmZ10sZD4+Pj1uLGgtPW59Y29uc3QgbT0oZHxzPDxoKSZnO2ZvcihhW3UtLV09by5fX2tDb252ZXJzaW9uQ2hhcnNbbV0sZD1zPj4+bi1oOzAhPT1kOylhW3UtLV09by5fX2tDb252ZXJzaW9uQ2hhcnNbZCZnXSxkPj4+PW47aWYoXy5zaWduJiYoYVt1LS1dPVwiLVwiKSwtMSE9dSl0aHJvdyBuZXcgRXJyb3IoXCJpbXBsZW1lbnRhdGlvbiBidWdcIik7cmV0dXJuIGEuam9pbihcIlwiKX1zdGF0aWMgX190b1N0cmluZ0dlbmVyaWMoXyxpLHQpe2NvbnN0IGU9Xy5sZW5ndGg7aWYoMD09PWUpcmV0dXJuXCJcIjtpZigxPT09ZSl7bGV0IGU9Xy5fX3Vuc2lnbmVkRGlnaXQoMCkudG9TdHJpbmcoaSk7cmV0dXJuITE9PT10JiZfLnNpZ24mJihlPVwiLVwiK2UpLGV9Y29uc3Qgbj0zMCplLW8uX19jbHozMChfLl9fZGlnaXQoZS0xKSksZz1vLl9fa01heEJpdHNQZXJDaGFyW2ldLHM9Zy0xO2xldCBsPW4qby5fX2tCaXRzUGVyQ2hhclRhYmxlTXVsdGlwbGllcjtsKz1zLTEsbD0wfGwvcztjb25zdCByPWwrMT4+MSxhPW8uZXhwb25lbnRpYXRlKG8uX19vbmVEaWdpdChpLCExKSxvLl9fb25lRGlnaXQociwhMSkpO2xldCB1LGQ7Y29uc3QgaD1hLl9fdW5zaWduZWREaWdpdCgwKTtpZigxPT09YS5sZW5ndGgmJjMyNzY3Pj1oKXt1PW5ldyBvKF8ubGVuZ3RoLCExKSx1Ll9faW5pdGlhbGl6ZURpZ2l0cygpO2xldCB0PTA7Zm9yKGxldCBlPTIqXy5sZW5ndGgtMTswPD1lO2UtLSl7Y29uc3QgaT10PDwxNXxfLl9faGFsZkRpZ2l0KGUpO3UuX19zZXRIYWxmRGlnaXQoZSwwfGkvaCksdD0wfGklaH1kPXQudG9TdHJpbmcoaSl9ZWxzZXtjb25zdCB0PW8uX19hYnNvbHV0ZURpdkxhcmdlKF8sYSwhMCwhMCk7dT10LnF1b3RpZW50O2NvbnN0IGU9dC5yZW1haW5kZXIuX190cmltKCk7ZD1vLl9fdG9TdHJpbmdHZW5lcmljKGUsaSwhMCl9dS5fX3RyaW0oKTtsZXQgbT1vLl9fdG9TdHJpbmdHZW5lcmljKHUsaSwhMCk7Zm9yKDtkLmxlbmd0aDxyOylkPVwiMFwiK2Q7cmV0dXJuITE9PT10JiZfLnNpZ24mJihtPVwiLVwiK20pLG0rZH1zdGF0aWMgX191bmVxdWFsU2lnbihpKXtyZXR1cm4gaT8tMToxfXN0YXRpYyBfX2Fic29sdXRlR3JlYXRlcihpKXtyZXR1cm4gaT8tMToxfXN0YXRpYyBfX2Fic29sdXRlTGVzcyhpKXtyZXR1cm4gaT8xOi0xfXN0YXRpYyBfX2NvbXBhcmVUb0JpZ0ludChpLF8pe2NvbnN0IHQ9aS5zaWduO2lmKHQhPT1fLnNpZ24pcmV0dXJuIG8uX191bmVxdWFsU2lnbih0KTtjb25zdCBlPW8uX19hYnNvbHV0ZUNvbXBhcmUoaSxfKTtyZXR1cm4gMDxlP28uX19hYnNvbHV0ZUdyZWF0ZXIodCk6MD5lP28uX19hYnNvbHV0ZUxlc3ModCk6MH1zdGF0aWMgX19jb21wYXJlVG9OdW1iZXIoaSxfKXtpZihvLl9faXNPbmVEaWdpdEludChfKSl7Y29uc3QgZT1pLnNpZ24sbj0wPl87aWYoZSE9PW4pcmV0dXJuIG8uX191bmVxdWFsU2lnbihlKTtpZigwPT09aS5sZW5ndGgpe2lmKG4pdGhyb3cgbmV3IEVycm9yKFwiaW1wbGVtZW50YXRpb24gYnVnXCIpO3JldHVybiAwPT09Xz8wOi0xfWlmKDE8aS5sZW5ndGgpcmV0dXJuIG8uX19hYnNvbHV0ZUdyZWF0ZXIoZSk7Y29uc3QgZz10KF8pLHM9aS5fX3Vuc2lnbmVkRGlnaXQoMCk7cmV0dXJuIHM+Zz9vLl9fYWJzb2x1dGVHcmVhdGVyKGUpOnM8Zz9vLl9fYWJzb2x1dGVMZXNzKGUpOjB9cmV0dXJuIG8uX19jb21wYXJlVG9Eb3VibGUoaSxfKX1zdGF0aWMgX19jb21wYXJlVG9Eb3VibGUoaSxfKXtpZihfIT09XylyZXR1cm4gXztpZihfPT09MS8wKXJldHVybi0xO2lmKF89PT0tSW5maW5pdHkpcmV0dXJuIDE7Y29uc3QgdD1pLnNpZ247aWYodCE9PTA+XylyZXR1cm4gby5fX3VuZXF1YWxTaWduKHQpO2lmKDA9PT1fKXRocm93IG5ldyBFcnJvcihcImltcGxlbWVudGF0aW9uIGJ1Zzogc2hvdWxkIGJlIGhhbmRsZWQgZWxzZXdoZXJlXCIpO2lmKDA9PT1pLmxlbmd0aClyZXR1cm4tMTtvLl9fa0JpdENvbnZlcnNpb25Eb3VibGVbMF09Xztjb25zdCBlPTIwNDcmby5fX2tCaXRDb252ZXJzaW9uSW50c1sxXT4+PjIwO2lmKDIwNDc9PWUpdGhyb3cgbmV3IEVycm9yKFwiaW1wbGVtZW50YXRpb24gYnVnOiBoYW5kbGVkIGVsc2V3aGVyZVwiKTtjb25zdCBuPWUtMTAyMztpZigwPm4pcmV0dXJuIG8uX19hYnNvbHV0ZUdyZWF0ZXIodCk7Y29uc3QgZz1pLmxlbmd0aDtsZXQgcz1pLl9fZGlnaXQoZy0xKTtjb25zdCBsPW8uX19jbHozMChzKSxyPTMwKmctbCxhPW4rMTtpZihyPGEpcmV0dXJuIG8uX19hYnNvbHV0ZUxlc3ModCk7aWYocj5hKXJldHVybiBvLl9fYWJzb2x1dGVHcmVhdGVyKHQpO2xldCB1PTEwNDg1NzZ8MTA0ODU3NSZvLl9fa0JpdENvbnZlcnNpb25JbnRzWzFdLGQ9by5fX2tCaXRDb252ZXJzaW9uSW50c1swXTtjb25zdCBoPTIwLG09MjktbDtpZihtIT09KDB8KHItMSklMzApKXRocm93IG5ldyBFcnJvcihcImltcGxlbWVudGF0aW9uIGJ1Z1wiKTtsZXQgYixEPTA7aWYoMjA+bSl7Y29uc3QgaT1oLW07RD1pKzMyLGI9dT4+PmksdT11PDwzMi1pfGQ+Pj5pLGQ8PD0zMi1pfWVsc2UgaWYoMjA9PT1tKUQ9MzIsYj11LHU9ZDtlbHNle2NvbnN0IGk9bS1oO0Q9MzItaSxiPXU8PGl8ZD4+PjMyLWksdT1kPDxpfWlmKHM+Pj49MCxiPj4+PTAscz5iKXJldHVybiBvLl9fYWJzb2x1dGVHcmVhdGVyKHQpO2lmKHM8YilyZXR1cm4gby5fX2Fic29sdXRlTGVzcyh0KTtmb3IobGV0IGU9Zy0yOzA8PWU7ZS0tKXswPEQ/KEQtPTMwLGI9dT4+PjIsdT11PDwzMHxkPj4+MixkPDw9MzApOmI9MDtjb25zdCBfPWkuX191bnNpZ25lZERpZ2l0KGUpO2lmKF8+YilyZXR1cm4gby5fX2Fic29sdXRlR3JlYXRlcih0KTtpZihfPGIpcmV0dXJuIG8uX19hYnNvbHV0ZUxlc3ModCl9aWYoMCE9PXV8fDAhPT1kKXtpZigwPT09RCl0aHJvdyBuZXcgRXJyb3IoXCJpbXBsZW1lbnRhdGlvbiBidWdcIik7cmV0dXJuIG8uX19hYnNvbHV0ZUxlc3ModCl9cmV0dXJuIDB9c3RhdGljIF9fZXF1YWxUb051bWJlcihpLF8pe3JldHVybiBvLl9faXNPbmVEaWdpdEludChfKT8wPT09Xz8wPT09aS5sZW5ndGg6MT09PWkubGVuZ3RoJiZpLnNpZ249PT0wPl8mJmkuX191bnNpZ25lZERpZ2l0KDApPT09dChfKTowPT09by5fX2NvbXBhcmVUb0RvdWJsZShpLF8pfXN0YXRpYyBfX2NvbXBhcmlzb25SZXN1bHRUb0Jvb2woaSxfKXtyZXR1cm4gMD09PV8/MD5pOjE9PT1fPzA+PWk6Mj09PV8/MDxpOjM9PT1fPzA8PWk6dm9pZCAwfXN0YXRpYyBfX2NvbXBhcmUoaSxfLHQpe2lmKGk9by5fX3RvUHJpbWl0aXZlKGkpLF89by5fX3RvUHJpbWl0aXZlKF8pLFwic3RyaW5nXCI9PXR5cGVvZiBpJiZcInN0cmluZ1wiPT10eXBlb2YgXylzd2l0Y2godCl7Y2FzZSAwOnJldHVybiBpPF87Y2FzZSAxOnJldHVybiBpPD1fO2Nhc2UgMjpyZXR1cm4gaT5fO2Nhc2UgMzpyZXR1cm4gaT49Xzt9aWYoby5fX2lzQmlnSW50KGkpJiZcInN0cmluZ1wiPT10eXBlb2YgXylyZXR1cm4gXz1vLl9fZnJvbVN0cmluZyhfKSxudWxsIT09XyYmby5fX2NvbXBhcmlzb25SZXN1bHRUb0Jvb2woby5fX2NvbXBhcmVUb0JpZ0ludChpLF8pLHQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiZvLl9faXNCaWdJbnQoXykpcmV0dXJuIGk9by5fX2Zyb21TdHJpbmcoaSksbnVsbCE9PWkmJm8uX19jb21wYXJpc29uUmVzdWx0VG9Cb29sKG8uX19jb21wYXJlVG9CaWdJbnQoaSxfKSx0KTtpZihpPW8uX190b051bWVyaWMoaSksXz1vLl9fdG9OdW1lcmljKF8pLG8uX19pc0JpZ0ludChpKSl7aWYoby5fX2lzQmlnSW50KF8pKXJldHVybiBvLl9fY29tcGFyaXNvblJlc3VsdFRvQm9vbChvLl9fY29tcGFyZVRvQmlnSW50KGksXyksdCk7aWYoXCJudW1iZXJcIiE9dHlwZW9mIF8pdGhyb3cgbmV3IEVycm9yKFwiaW1wbGVtZW50YXRpb24gYnVnXCIpO3JldHVybiBvLl9fY29tcGFyaXNvblJlc3VsdFRvQm9vbChvLl9fY29tcGFyZVRvTnVtYmVyKGksXyksdCl9aWYoXCJudW1iZXJcIiE9dHlwZW9mIGkpdGhyb3cgbmV3IEVycm9yKFwiaW1wbGVtZW50YXRpb24gYnVnXCIpO2lmKG8uX19pc0JpZ0ludChfKSlyZXR1cm4gby5fX2NvbXBhcmlzb25SZXN1bHRUb0Jvb2woby5fX2NvbXBhcmVUb051bWJlcihfLGkpLDJedCk7aWYoXCJudW1iZXJcIiE9dHlwZW9mIF8pdGhyb3cgbmV3IEVycm9yKFwiaW1wbGVtZW50YXRpb24gYnVnXCIpO3JldHVybiAwPT09dD9pPF86MT09PXQ/aTw9XzoyPT09dD9pPl86Mz09PXQ/aT49Xzp2b2lkIDB9X19jbHptc2QoKXtyZXR1cm4gby5fX2NsejMwKHRoaXMuX19kaWdpdCh0aGlzLmxlbmd0aC0xKSl9c3RhdGljIF9fYWJzb2x1dGVBZGQoXyx0LGUpe2lmKF8ubGVuZ3RoPHQubGVuZ3RoKXJldHVybiBvLl9fYWJzb2x1dGVBZGQodCxfLGUpO2lmKDA9PT1fLmxlbmd0aClyZXR1cm4gXztpZigwPT09dC5sZW5ndGgpcmV0dXJuIF8uc2lnbj09PWU/XzpvLnVuYXJ5TWludXMoXyk7bGV0IG49Xy5sZW5ndGg7KDA9PT1fLl9fY2x6bXNkKCl8fHQubGVuZ3RoPT09Xy5sZW5ndGgmJjA9PT10Ll9fY2x6bXNkKCkpJiZuKys7Y29uc3QgZz1uZXcgbyhuLGUpO2xldCBzPTAsbD0wO2Zvcig7bDx0Lmxlbmd0aDtsKyspe2NvbnN0IGk9Xy5fX2RpZ2l0KGwpK3QuX19kaWdpdChsKStzO3M9aT4+PjMwLGcuX19zZXREaWdpdChsLDEwNzM3NDE4MjMmaSl9Zm9yKDtsPF8ubGVuZ3RoO2wrKyl7Y29uc3QgaT1fLl9fZGlnaXQobCkrcztzPWk+Pj4zMCxnLl9fc2V0RGlnaXQobCwxMDczNzQxODIzJmkpfXJldHVybiBsPGcubGVuZ3RoJiZnLl9fc2V0RGlnaXQobCxzKSxnLl9fdHJpbSgpfXN0YXRpYyBfX2Fic29sdXRlU3ViKF8sdCxlKXtpZigwPT09Xy5sZW5ndGgpcmV0dXJuIF87aWYoMD09PXQubGVuZ3RoKXJldHVybiBfLnNpZ249PT1lP186by51bmFyeU1pbnVzKF8pO2NvbnN0IG49bmV3IG8oXy5sZW5ndGgsZSk7bGV0IGc9MCxzPTA7Zm9yKDtzPHQubGVuZ3RoO3MrKyl7Y29uc3QgaT1fLl9fZGlnaXQocyktdC5fX2RpZ2l0KHMpLWc7Zz0xJmk+Pj4zMCxuLl9fc2V0RGlnaXQocywxMDczNzQxODIzJmkpfWZvcig7czxfLmxlbmd0aDtzKyspe2NvbnN0IGk9Xy5fX2RpZ2l0KHMpLWc7Zz0xJmk+Pj4zMCxuLl9fc2V0RGlnaXQocywxMDczNzQxODIzJmkpfXJldHVybiBuLl9fdHJpbSgpfXN0YXRpYyBfX2Fic29sdXRlQWRkT25lKF8saSx0PW51bGwpe2NvbnN0IGU9Xy5sZW5ndGg7bnVsbD09PXQ/dD1uZXcgbyhlLGkpOnQuc2lnbj1pO2xldCBuPTE7Zm9yKGxldCBnPTA7ZzxlO2crKyl7Y29uc3QgaT1fLl9fZGlnaXQoZykrbjtuPWk+Pj4zMCx0Ll9fc2V0RGlnaXQoZywxMDczNzQxODIzJmkpfXJldHVybiAwIT1uJiZ0Ll9fc2V0RGlnaXRHcm93KGUsMSksdH1zdGF0aWMgX19hYnNvbHV0ZVN1Yk9uZShfLHQpe2NvbnN0IGU9Xy5sZW5ndGg7dD10fHxlO2NvbnN0IG49bmV3IG8odCwhMSk7bGV0IGc9MTtmb3IobGV0IG89MDtvPGU7bysrKXtjb25zdCBpPV8uX19kaWdpdChvKS1nO2c9MSZpPj4+MzAsbi5fX3NldERpZ2l0KG8sMTA3Mzc0MTgyMyZpKX1pZigwIT1nKXRocm93IG5ldyBFcnJvcihcImltcGxlbWVudGF0aW9uIGJ1Z1wiKTtmb3IobGV0IGc9ZTtnPHQ7ZysrKW4uX19zZXREaWdpdChnLDApO3JldHVybiBufXN0YXRpYyBfX2Fic29sdXRlQW5kKF8sdCxlPW51bGwpe2xldCBuPV8ubGVuZ3RoLGc9dC5sZW5ndGgscz1nO2lmKG48Zyl7cz1uO2NvbnN0IGk9XyxlPW47Xz10LG49Zyx0PWksZz1lfWxldCBsPXM7bnVsbD09PWU/ZT1uZXcgbyhsLCExKTpsPWUubGVuZ3RoO2xldCByPTA7Zm9yKDtyPHM7cisrKWUuX19zZXREaWdpdChyLF8uX19kaWdpdChyKSZ0Ll9fZGlnaXQocikpO2Zvcig7cjxsO3IrKyllLl9fc2V0RGlnaXQociwwKTtyZXR1cm4gZX1zdGF0aWMgX19hYnNvbHV0ZUFuZE5vdChfLHQsZT1udWxsKXtjb25zdCBuPV8ubGVuZ3RoLGc9dC5sZW5ndGg7bGV0IHM9ZztuPGcmJihzPW4pO2xldCBsPW47bnVsbD09PWU/ZT1uZXcgbyhsLCExKTpsPWUubGVuZ3RoO2xldCByPTA7Zm9yKDtyPHM7cisrKWUuX19zZXREaWdpdChyLF8uX19kaWdpdChyKSZ+dC5fX2RpZ2l0KHIpKTtmb3IoO3I8bjtyKyspZS5fX3NldERpZ2l0KHIsXy5fX2RpZ2l0KHIpKTtmb3IoO3I8bDtyKyspZS5fX3NldERpZ2l0KHIsMCk7cmV0dXJuIGV9c3RhdGljIF9fYWJzb2x1dGVPcihfLHQsZT1udWxsKXtsZXQgbj1fLmxlbmd0aCxnPXQubGVuZ3RoLHM9ZztpZihuPGcpe3M9bjtjb25zdCBpPV8sZT1uO189dCxuPWcsdD1pLGc9ZX1sZXQgbD1uO251bGw9PT1lP2U9bmV3IG8obCwhMSk6bD1lLmxlbmd0aDtsZXQgcj0wO2Zvcig7cjxzO3IrKyllLl9fc2V0RGlnaXQocixfLl9fZGlnaXQocil8dC5fX2RpZ2l0KHIpKTtmb3IoO3I8bjtyKyspZS5fX3NldERpZ2l0KHIsXy5fX2RpZ2l0KHIpKTtmb3IoO3I8bDtyKyspZS5fX3NldERpZ2l0KHIsMCk7cmV0dXJuIGV9c3RhdGljIF9fYWJzb2x1dGVYb3IoXyx0LGU9bnVsbCl7bGV0IG49Xy5sZW5ndGgsZz10Lmxlbmd0aCxzPWc7aWYobjxnKXtzPW47Y29uc3QgaT1fLGU9bjtfPXQsbj1nLHQ9aSxnPWV9bGV0IGw9bjtudWxsPT09ZT9lPW5ldyBvKGwsITEpOmw9ZS5sZW5ndGg7bGV0IHI9MDtmb3IoO3I8cztyKyspZS5fX3NldERpZ2l0KHIsXy5fX2RpZ2l0KHIpXnQuX19kaWdpdChyKSk7Zm9yKDtyPG47cisrKWUuX19zZXREaWdpdChyLF8uX19kaWdpdChyKSk7Zm9yKDtyPGw7cisrKWUuX19zZXREaWdpdChyLDApO3JldHVybiBlfXN0YXRpYyBfX2Fic29sdXRlQ29tcGFyZShfLHQpe2NvbnN0IGU9Xy5sZW5ndGgtdC5sZW5ndGg7aWYoMCE9ZSlyZXR1cm4gZTtsZXQgbj1fLmxlbmd0aC0xO2Zvcig7MDw9biYmXy5fX2RpZ2l0KG4pPT09dC5fX2RpZ2l0KG4pOyluLS07cmV0dXJuIDA+bj8wOl8uX191bnNpZ25lZERpZ2l0KG4pPnQuX191bnNpZ25lZERpZ2l0KG4pPzE6LTF9c3RhdGljIF9fbXVsdGlwbHlBY2N1bXVsYXRlKF8sdCxlLG4pe2lmKDA9PT10KXJldHVybjtjb25zdCBnPTMyNzY3JnQscz10Pj4+MTU7bGV0IGw9MCxyPTA7Zm9yKGxldCBhLHU9MDt1PF8ubGVuZ3RoO3UrKyxuKyspe2E9ZS5fX2RpZ2l0KG4pO2NvbnN0IGk9Xy5fX2RpZ2l0KHUpLHQ9MzI3NjcmaSxkPWk+Pj4xNSxoPW8uX19pbXVsKHQsZyksbT1vLl9faW11bCh0LHMpLGI9by5fX2ltdWwoZCxnKSxEPW8uX19pbXVsKGQscyk7YSs9citoK2wsbD1hPj4+MzAsYSY9MTA3Mzc0MTgyMyxhKz0oKDMyNzY3Jm0pPDwxNSkrKCgzMjc2NyZiKTw8MTUpLGwrPWE+Pj4zMCxyPUQrKG0+Pj4xNSkrKGI+Pj4xNSksZS5fX3NldERpZ2l0KG4sMTA3Mzc0MTgyMyZhKX1mb3IoOzAhPWx8fDAhPT1yO24rKyl7bGV0IGk9ZS5fX2RpZ2l0KG4pO2krPWwrcixyPTAsbD1pPj4+MzAsZS5fX3NldERpZ2l0KG4sMTA3Mzc0MTgyMyZpKX19c3RhdGljIF9faW50ZXJuYWxNdWx0aXBseUFkZChfLHQsZSxnLHMpe2xldCBsPWUsYT0wO2ZvcihsZXQgbj0wO248ZztuKyspe2NvbnN0IGk9Xy5fX2RpZ2l0KG4pLGU9by5fX2ltdWwoMzI3NjcmaSx0KSxnPW8uX19pbXVsKGk+Pj4xNSx0KSx1PWUrKCgzMjc2NyZnKTw8MTUpK2ErbDtsPXU+Pj4zMCxhPWc+Pj4xNSxzLl9fc2V0RGlnaXQobiwxMDczNzQxODIzJnUpfWlmKHMubGVuZ3RoPmcpZm9yKHMuX19zZXREaWdpdChnKyssbCthKTtnPHMubGVuZ3RoOylzLl9fc2V0RGlnaXQoZysrLDApO2Vsc2UgaWYoMCE9PWwrYSl0aHJvdyBuZXcgRXJyb3IoXCJpbXBsZW1lbnRhdGlvbiBidWdcIil9X19pbnBsYWNlTXVsdGlwbHlBZGQoaSxfLHQpe3Q+dGhpcy5sZW5ndGgmJih0PXRoaXMubGVuZ3RoKTtjb25zdCBlPTMyNzY3Jmksbj1pPj4+MTU7bGV0IGc9MCxzPV87Zm9yKGxldCBsPTA7bDx0O2wrKyl7Y29uc3QgaT10aGlzLl9fZGlnaXQobCksXz0zMjc2NyZpLHQ9aT4+PjE1LHI9by5fX2ltdWwoXyxlKSxhPW8uX19pbXVsKF8sbiksdT1vLl9faW11bCh0LGUpLGQ9by5fX2ltdWwodCxuKTtsZXQgaD1zK3IrZztnPWg+Pj4zMCxoJj0xMDczNzQxODIzLGgrPSgoMzI3NjcmYSk8PDE1KSsoKDMyNzY3JnUpPDwxNSksZys9aD4+PjMwLHM9ZCsoYT4+PjE1KSsodT4+PjE1KSx0aGlzLl9fc2V0RGlnaXQobCwxMDczNzQxODIzJmgpfWlmKDAhPWd8fDAhPT1zKXRocm93IG5ldyBFcnJvcihcImltcGxlbWVudGF0aW9uIGJ1Z1wiKX1zdGF0aWMgX19hYnNvbHV0ZURpdlNtYWxsKF8sdCxlPW51bGwpe251bGw9PT1lJiYoZT1uZXcgbyhfLmxlbmd0aCwhMSkpO2xldCBuPTA7Zm9yKGxldCBnLG89MipfLmxlbmd0aC0xOzA8PW87by09Mil7Zz0objw8MTV8Xy5fX2hhbGZEaWdpdChvKSk+Pj4wO2NvbnN0IGk9MHxnL3Q7bj0wfGcldCxnPShuPDwxNXxfLl9faGFsZkRpZ2l0KG8tMSkpPj4+MDtjb25zdCBzPTB8Zy90O249MHxnJXQsZS5fX3NldERpZ2l0KG8+Pj4xLGk8PDE1fHMpfXJldHVybiBlfXN0YXRpYyBfX2Fic29sdXRlTW9kU21hbGwoXyx0KXtsZXQgZT0wO2ZvcihsZXQgbj0yKl8ubGVuZ3RoLTE7MDw9bjtuLS0pe2NvbnN0IGk9KGU8PDE1fF8uX19oYWxmRGlnaXQobikpPj4+MDtlPTB8aSV0fXJldHVybiBlfXN0YXRpYyBfX2Fic29sdXRlRGl2TGFyZ2UoaSxfLHQsZSl7Y29uc3QgZz1fLl9faGFsZkRpZ2l0TGVuZ3RoKCksbj1fLmxlbmd0aCxzPWkuX19oYWxmRGlnaXRMZW5ndGgoKS1nO2xldCBsPW51bGw7dCYmKGw9bmV3IG8ocysyPj4+MSwhMSksbC5fX2luaXRpYWxpemVEaWdpdHMoKSk7Y29uc3Qgcj1uZXcgbyhnKzI+Pj4xLCExKTtyLl9faW5pdGlhbGl6ZURpZ2l0cygpO2NvbnN0IGE9by5fX2NsejE1KF8uX19oYWxmRGlnaXQoZy0xKSk7MDxhJiYoXz1vLl9fc3BlY2lhbExlZnRTaGlmdChfLGEsMCkpO2NvbnN0IGQ9by5fX3NwZWNpYWxMZWZ0U2hpZnQoaSxhLDEpLHU9Xy5fX2hhbGZEaWdpdChnLTEpO2xldCBoPTA7Zm9yKGxldCBhLG09czswPD1tO20tLSl7YT0zMjc2Nztjb25zdCBpPWQuX19oYWxmRGlnaXQobStnKTtpZihpIT09dSl7Y29uc3QgdD0oaTw8MTV8ZC5fX2hhbGZEaWdpdChtK2ctMSkpPj4+MDthPTB8dC91O2xldCBlPTB8dCV1O2NvbnN0IG49Xy5fX2hhbGZEaWdpdChnLTIpLHM9ZC5fX2hhbGZEaWdpdChtK2ctMik7Zm9yKDtvLl9faW11bChhLG4pPj4+MD4oZTw8MTZ8cyk+Pj4wJiYoYS0tLGUrPXUsISgzMjc2NzxlKSk7KTt9by5fX2ludGVybmFsTXVsdGlwbHlBZGQoXyxhLDAsbixyKTtsZXQgZT1kLl9faW5wbGFjZVN1YihyLG0sZysxKTswIT09ZSYmKGU9ZC5fX2lucGxhY2VBZGQoXyxtLGcpLGQuX19zZXRIYWxmRGlnaXQobStnLDMyNzY3JmQuX19oYWxmRGlnaXQobStnKStlKSxhLS0pLHQmJigxJm0/aD1hPDwxNTpsLl9fc2V0RGlnaXQobT4+PjEsaHxhKSl9aWYoZSlyZXR1cm4gZC5fX2lucGxhY2VSaWdodFNoaWZ0KGEpLHQ/e3F1b3RpZW50OmwscmVtYWluZGVyOmR9OmQ7aWYodClyZXR1cm4gbDt0aHJvdyBuZXcgRXJyb3IoXCJ1bnJlYWNoYWJsZVwiKX1zdGF0aWMgX19jbHoxNShpKXtyZXR1cm4gby5fX2NsejMwKGkpLTE1fV9faW5wbGFjZUFkZChfLHQsZSl7bGV0IG49MDtmb3IobGV0IGc9MDtnPGU7ZysrKXtjb25zdCBpPXRoaXMuX19oYWxmRGlnaXQodCtnKStfLl9faGFsZkRpZ2l0KGcpK247bj1pPj4+MTUsdGhpcy5fX3NldEhhbGZEaWdpdCh0K2csMzI3NjcmaSl9cmV0dXJuIG59X19pbnBsYWNlU3ViKF8sdCxlKXtsZXQgbj0wO2lmKDEmdCl7dD4+PTE7bGV0IGc9dGhpcy5fX2RpZ2l0KHQpLG89MzI3NjcmZyxzPTA7Zm9yKDtzPGUtMT4+PjE7cysrKXtjb25zdCBpPV8uX19kaWdpdChzKSxlPShnPj4+MTUpLSgzMjc2NyZpKS1uO249MSZlPj4+MTUsdGhpcy5fX3NldERpZ2l0KHQrcywoMzI3NjcmZSk8PDE1fDMyNzY3Jm8pLGc9dGhpcy5fX2RpZ2l0KHQrcysxKSxvPSgzMjc2NyZnKS0oaT4+PjE1KS1uLG49MSZvPj4+MTV9Y29uc3QgaT1fLl9fZGlnaXQocyksbD0oZz4+PjE1KS0oMzI3NjcmaSktbjtuPTEmbD4+PjE1LHRoaXMuX19zZXREaWdpdCh0K3MsKDMyNzY3JmwpPDwxNXwzMjc2NyZvKTtpZih0K3MrMT49dGhpcy5sZW5ndGgpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJvdXQgb2YgYm91bmRzXCIpOzA9PSgxJmUpJiYoZz10aGlzLl9fZGlnaXQodCtzKzEpLG89KDMyNzY3JmcpLShpPj4+MTUpLW4sbj0xJm8+Pj4xNSx0aGlzLl9fc2V0RGlnaXQodCtfLmxlbmd0aCwxMDczNzA5MDU2Jmd8MzI3NjcmbykpfWVsc2V7dD4+PTE7bGV0IGc9MDtmb3IoO2c8Xy5sZW5ndGgtMTtnKyspe2NvbnN0IGk9dGhpcy5fX2RpZ2l0KHQrZyksZT1fLl9fZGlnaXQoZyksbz0oMzI3NjcmaSktKDMyNzY3JmUpLW47bj0xJm8+Pj4xNTtjb25zdCBzPShpPj4+MTUpLShlPj4+MTUpLW47bj0xJnM+Pj4xNSx0aGlzLl9fc2V0RGlnaXQodCtnLCgzMjc2NyZzKTw8MTV8MzI3Njcmbyl9Y29uc3QgaT10aGlzLl9fZGlnaXQodCtnKSxvPV8uX19kaWdpdChnKSxzPSgzMjc2NyZpKS0oMzI3NjcmbyktbjtuPTEmcz4+PjE1O2xldCBsPTA7MD09KDEmZSkmJihsPShpPj4+MTUpLShvPj4+MTUpLW4sbj0xJmw+Pj4xNSksdGhpcy5fX3NldERpZ2l0KHQrZywoMzI3NjcmbCk8PDE1fDMyNzY3JnMpfXJldHVybiBufV9faW5wbGFjZVJpZ2h0U2hpZnQoXyl7aWYoMD09PV8pcmV0dXJuO2xldCB0PXRoaXMuX19kaWdpdCgwKT4+Pl87Y29uc3QgZT10aGlzLmxlbmd0aC0xO2ZvcihsZXQgbj0wO248ZTtuKyspe2NvbnN0IGk9dGhpcy5fX2RpZ2l0KG4rMSk7dGhpcy5fX3NldERpZ2l0KG4sMTA3Mzc0MTgyMyZpPDwzMC1ffHQpLHQ9aT4+Pl99dGhpcy5fX3NldERpZ2l0KGUsdCl9c3RhdGljIF9fc3BlY2lhbExlZnRTaGlmdChfLHQsZSl7Y29uc3QgZz1fLmxlbmd0aCxuPW5ldyBvKGcrZSwhMSk7aWYoMD09PXQpe2ZvcihsZXQgdD0wO3Q8Zzt0Kyspbi5fX3NldERpZ2l0KHQsXy5fX2RpZ2l0KHQpKTtyZXR1cm4gMDxlJiZuLl9fc2V0RGlnaXQoZywwKSxufWxldCBzPTA7Zm9yKGxldCBvPTA7bzxnO28rKyl7Y29uc3QgaT1fLl9fZGlnaXQobyk7bi5fX3NldERpZ2l0KG8sMTA3Mzc0MTgyMyZpPDx0fHMpLHM9aT4+PjMwLXR9cmV0dXJuIDA8ZSYmbi5fX3NldERpZ2l0KGcscyksbn1zdGF0aWMgX19sZWZ0U2hpZnRCeUFic29sdXRlKF8saSl7Y29uc3QgdD1vLl9fdG9TaGlmdEFtb3VudChpKTtpZigwPnQpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJCaWdJbnQgdG9vIGJpZ1wiKTtjb25zdCBlPTB8dC8zMCxuPXQlMzAsZz1fLmxlbmd0aCxzPTAhPT1uJiYwIT1fLl9fZGlnaXQoZy0xKT4+PjMwLW4sbD1nK2UrKHM/MTowKSxyPW5ldyBvKGwsXy5zaWduKTtpZigwPT09bil7bGV0IHQ9MDtmb3IoO3Q8ZTt0Kyspci5fX3NldERpZ2l0KHQsMCk7Zm9yKDt0PGw7dCsrKXIuX19zZXREaWdpdCh0LF8uX19kaWdpdCh0LWUpKX1lbHNle2xldCB0PTA7Zm9yKGxldCBfPTA7XzxlO18rKylyLl9fc2V0RGlnaXQoXywwKTtmb3IobGV0IG89MDtvPGc7bysrKXtjb25zdCBpPV8uX19kaWdpdChvKTtyLl9fc2V0RGlnaXQobytlLDEwNzM3NDE4MjMmaTw8bnx0KSx0PWk+Pj4zMC1ufWlmKHMpci5fX3NldERpZ2l0KGcrZSx0KTtlbHNlIGlmKDAhPT10KXRocm93IG5ldyBFcnJvcihcImltcGxlbWVudGF0aW9uIGJ1Z1wiKX1yZXR1cm4gci5fX3RyaW0oKX1zdGF0aWMgX19yaWdodFNoaWZ0QnlBYnNvbHV0ZShfLGkpe2NvbnN0IHQ9Xy5sZW5ndGgsZT1fLnNpZ24sbj1vLl9fdG9TaGlmdEFtb3VudChpKTtpZigwPm4pcmV0dXJuIG8uX19yaWdodFNoaWZ0QnlNYXhpbXVtKGUpO2NvbnN0IGc9MHxuLzMwLHM9biUzMDtsZXQgbD10LWc7aWYoMD49bClyZXR1cm4gby5fX3JpZ2h0U2hpZnRCeU1heGltdW0oZSk7bGV0IHI9ITE7aWYoZSl7aWYoMCE9KF8uX19kaWdpdChnKSYoMTw8cyktMSkpcj0hMDtlbHNlIGZvcihsZXQgdD0wO3Q8Zzt0KyspaWYoMCE9PV8uX19kaWdpdCh0KSl7cj0hMDticmVha319aWYociYmMD09PXMpe2NvbnN0IGk9Xy5fX2RpZ2l0KHQtMSk7MD09fmkmJmwrK31sZXQgYT1uZXcgbyhsLGUpO2lmKDA9PT1zKXthLl9fc2V0RGlnaXQobC0xLDApO2ZvcihsZXQgZT1nO2U8dDtlKyspYS5fX3NldERpZ2l0KGUtZyxfLl9fZGlnaXQoZSkpfWVsc2V7bGV0IGU9Xy5fX2RpZ2l0KGcpPj4+cztjb25zdCBuPXQtZy0xO2ZvcihsZXQgdD0wO3Q8bjt0Kyspe2NvbnN0IGk9Xy5fX2RpZ2l0KHQrZysxKTthLl9fc2V0RGlnaXQodCwxMDczNzQxODIzJmk8PDMwLXN8ZSksZT1pPj4+c31hLl9fc2V0RGlnaXQobixlKX1yZXR1cm4gciYmKGE9by5fX2Fic29sdXRlQWRkT25lKGEsITAsYSkpLGEuX190cmltKCl9c3RhdGljIF9fcmlnaHRTaGlmdEJ5TWF4aW11bShpKXtyZXR1cm4gaT9vLl9fb25lRGlnaXQoMSwhMCk6by5fX3plcm8oKX1zdGF0aWMgX190b1NoaWZ0QW1vdW50KGkpe2lmKDE8aS5sZW5ndGgpcmV0dXJuLTE7Y29uc3QgXz1pLl9fdW5zaWduZWREaWdpdCgwKTtyZXR1cm4gXz5vLl9fa01heExlbmd0aEJpdHM/LTE6X31zdGF0aWMgX190b1ByaW1pdGl2ZShpLF89XCJkZWZhdWx0XCIpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBpKXJldHVybiBpO2lmKGkuY29uc3RydWN0b3I9PT1vKXJldHVybiBpO2NvbnN0IHQ9aVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHQpe2NvbnN0IGk9dChfKTtpZihcIm9iamVjdFwiIT10eXBlb2YgaSlyZXR1cm4gaTt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKX1jb25zdCBlPWkudmFsdWVPZjtpZihlKXtjb25zdCBfPWUuY2FsbChpKTtpZihcIm9iamVjdFwiIT10eXBlb2YgXylyZXR1cm4gX31jb25zdCBuPWkudG9TdHJpbmc7aWYobil7Y29uc3QgXz1uLmNhbGwoaSk7aWYoXCJvYmplY3RcIiE9dHlwZW9mIF8pcmV0dXJuIF99dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIil9c3RhdGljIF9fdG9OdW1lcmljKGkpe3JldHVybiBvLl9faXNCaWdJbnQoaSk/aToraX1zdGF0aWMgX19pc0JpZ0ludChpKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgaSYmbnVsbCE9PWkmJmkuY29uc3RydWN0b3I9PT1vfXN0YXRpYyBfX3RydW5jYXRlVG9OQml0cyhpLF8pe2NvbnN0IHQ9MHwoaSsyOSkvMzAsZT1uZXcgbyh0LF8uc2lnbiksbj10LTE7Zm9yKGxldCB0PTA7dDxuO3QrKyllLl9fc2V0RGlnaXQodCxfLl9fZGlnaXQodCkpO2xldCBnPV8uX19kaWdpdChuKTtpZigwIT1pJTMwKXtjb25zdCBfPTMyLWklMzA7Zz1nPDxfPj4+X31yZXR1cm4gZS5fX3NldERpZ2l0KG4sZyksZS5fX3RyaW0oKX1zdGF0aWMgX190cnVuY2F0ZUFuZFN1YkZyb21Qb3dlck9mVHdvKF8sdCxlKXt2YXIgbj1NYXRoLm1pbjtjb25zdCBnPTB8KF8rMjkpLzMwLHM9bmV3IG8oZyxlKTtsZXQgbD0wO2NvbnN0IHI9Zy0xO2xldCBhPTA7Zm9yKGNvbnN0IGk9bihyLHQubGVuZ3RoKTtsPGk7bCsrKXtjb25zdCBpPTAtdC5fX2RpZ2l0KGwpLWE7YT0xJmk+Pj4zMCxzLl9fc2V0RGlnaXQobCwxMDczNzQxODIzJmkpfWZvcig7bDxyO2wrKylzLl9fc2V0RGlnaXQobCwwfDEwNzM3NDE4MjMmLWEpO2xldCB1PXI8dC5sZW5ndGg/dC5fX2RpZ2l0KHIpOjA7Y29uc3QgZD1fJTMwO2xldCBoO2lmKDA9PWQpaD0wLXUtYSxoJj0xMDczNzQxODIzO2Vsc2V7Y29uc3QgaT0zMi1kO3U9dTw8aT4+Pmk7Y29uc3QgXz0xPDwzMi1pO2g9Xy11LWEsaCY9Xy0xfXJldHVybiBzLl9fc2V0RGlnaXQocixoKSxzLl9fdHJpbSgpfV9fZGlnaXQoXyl7cmV0dXJuIHRoaXNbX119X191bnNpZ25lZERpZ2l0KF8pe3JldHVybiB0aGlzW19dPj4+MH1fX3NldERpZ2l0KF8saSl7dGhpc1tfXT0wfGl9X19zZXREaWdpdEdyb3coXyxpKXt0aGlzW19dPTB8aX1fX2hhbGZEaWdpdExlbmd0aCgpe2NvbnN0IGk9dGhpcy5sZW5ndGg7cmV0dXJuIDMyNzY3Pj10aGlzLl9fdW5zaWduZWREaWdpdChpLTEpPzIqaS0xOjIqaX1fX2hhbGZEaWdpdChfKXtyZXR1cm4gMzI3NjcmdGhpc1tfPj4+MV0+Pj4xNSooMSZfKX1fX3NldEhhbGZEaWdpdChfLGkpe2NvbnN0IHQ9Xz4+PjEsZT10aGlzLl9fZGlnaXQodCksbj0xJl8/MzI3NjcmZXxpPDwxNToxMDczNzA5MDU2JmV8MzI3NjcmaTt0aGlzLl9fc2V0RGlnaXQodCxuKX1zdGF0aWMgX19kaWdpdFBvdyhpLF8pe2xldCB0PTE7Zm9yKDswPF87KTEmXyYmKHQqPWkpLF8+Pj49MSxpKj1pO3JldHVybiB0fXN0YXRpYyBfX2lzT25lRGlnaXRJbnQoaSl7cmV0dXJuKDEwNzM3NDE4MjMmaSk9PT1pfX1vLl9fa01heExlbmd0aD0zMzU1NDQzMixvLl9fa01heExlbmd0aEJpdHM9by5fX2tNYXhMZW5ndGg8PDUsby5fX2tNYXhCaXRzUGVyQ2hhcj1bMCwwLDMyLDUxLDY0LDc1LDgzLDkwLDk2LDEwMiwxMDcsMTExLDExNSwxMTksMTIyLDEyNiwxMjgsMTMxLDEzNCwxMzYsMTM5LDE0MSwxNDMsMTQ1LDE0NywxNDksMTUxLDE1MywxNTQsMTU2LDE1OCwxNTksMTYwLDE2MiwxNjMsMTY1LDE2Nl0sby5fX2tCaXRzUGVyQ2hhclRhYmxlU2hpZnQ9NSxvLl9fa0JpdHNQZXJDaGFyVGFibGVNdWx0aXBsaWVyPTE8PG8uX19rQml0c1BlckNoYXJUYWJsZVNoaWZ0LG8uX19rQ29udmVyc2lvbkNoYXJzPVtcIjBcIixcIjFcIixcIjJcIixcIjNcIixcIjRcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIixcImFcIixcImJcIixcImNcIixcImRcIixcImVcIixcImZcIixcImdcIixcImhcIixcImlcIixcImpcIixcImtcIixcImxcIixcIm1cIixcIm5cIixcIm9cIixcInBcIixcInFcIixcInJcIixcInNcIixcInRcIixcInVcIixcInZcIixcIndcIixcInhcIixcInlcIixcInpcIl0sby5fX2tCaXRDb252ZXJzaW9uQnVmZmVyPW5ldyBBcnJheUJ1ZmZlcig4KSxvLl9fa0JpdENvbnZlcnNpb25Eb3VibGU9bmV3IEZsb2F0NjRBcnJheShvLl9fa0JpdENvbnZlcnNpb25CdWZmZXIpLG8uX19rQml0Q29udmVyc2lvbkludHM9bmV3IEludDMyQXJyYXkoby5fX2tCaXRDb252ZXJzaW9uQnVmZmVyKSxvLl9fY2x6MzA9Xz9mdW5jdGlvbihpKXtyZXR1cm4gXyhpKS0yfTpmdW5jdGlvbihpKXtyZXR1cm4gMD09PWk/MzA6MHwyOS0oMHxNYXRoLmxvZyhpPj4+MCkvTWF0aC5MTjIpfSxvLl9faW11bD1NYXRoLmltdWx8fGZ1bmN0aW9uKGksXyl7cmV0dXJuIDB8aSpffSxpLmRlZmF1bHQ9byxPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anNiaS11bWQuanMubWFwXG4iLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2J1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpO1xuXG52YXIgY3JlYXRlQnVmZmVyID0gX2J1ZmZlci5CdWZmZXIuZnJvbSAmJiBfYnVmZmVyLkJ1ZmZlci5hbGxvYyAmJiBfYnVmZmVyLkJ1ZmZlci5hbGxvY1Vuc2FmZSAmJiBfYnVmZmVyLkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPyBfYnVmZmVyLkJ1ZmZlci5mcm9tIDogLy8gc3VwcG9ydCBmb3IgTm9kZSA8IDUuMTBcbmZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIG5ldyBfYnVmZmVyLkJ1ZmZlcih2YWwpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQnVmZmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChtb2RlbCwgY2FsYykge1xuICB2YXIgZm4gPSBmdW5jdGlvbiBmbihidWYsIHByZXZpb3VzKSB7XG4gICAgcmV0dXJuIGNhbGMoYnVmLCBwcmV2aW91cykgPj4+IDA7XG4gIH07XG4gIGZuLnNpZ25lZCA9IGNhbGM7XG4gIGZuLnVuc2lnbmVkID0gZm47XG4gIGZuLm1vZGVsID0gbW9kZWw7XG5cbiAgcmV0dXJuIGZuO1xufTtcbiIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcbiIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IDQ2IC8qIC4gKi8pIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3ViU3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG4iLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG4iLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG4iLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcbiIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG4iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG4iLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIl0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWpzYmktdW1kLmpzLm1hcCJ9
