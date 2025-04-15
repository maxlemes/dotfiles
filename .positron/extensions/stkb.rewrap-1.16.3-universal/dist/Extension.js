var $19YtE$vscode = require("vscode");
var $19YtE$fastdiff = require("fast-diff");
var $19YtE$path = require("path");
var $19YtE$fs = require("fs");
var $19YtE$json5 = require("json5");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "activate", () => $fad922d34226e04f$export$234c45b355edd85b);
$parcel$export(module.exports, "getCoreSettings", () => $48bcbed0cf086a92$export$7b76d8f1f719850);
function $ed39e963967a3eea$export$9652023d9040757(x) {
    return x != null && typeof x === "object" && Symbol.iterator in x;
}
function $ed39e963967a3eea$export$1e2f57719e155213(x) {
    return Array.isArray(x) || ArrayBuffer.isView(x);
}
function $ed39e963967a3eea$var$isComparer(x) {
    return typeof x.Compare === "function";
}
function $ed39e963967a3eea$var$isComparable(x) {
    return typeof x.CompareTo === "function";
}
function $ed39e963967a3eea$var$isEquatable(x) {
    return typeof x.Equals === "function";
}
function $ed39e963967a3eea$var$isHashable(x) {
    return typeof x.GetHashCode === "function";
}
function $ed39e963967a3eea$export$e29d65b7eabdc6dd(x) {
    return x != null && typeof x.Dispose === "function";
}
function $ed39e963967a3eea$export$52febab2880147bb(x, y) {
    return Object.getPrototypeOf(x).constructor === Object.getPrototypeOf(y).constructor;
}
class $ed39e963967a3eea$export$95c529ba89ee4ce7 {
    constructor(iter){
        this.iter = iter;
    }
    ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
        return this.current;
    }
    ["System.Collections.IEnumerator.get_Current"]() {
        return this.current;
    }
    ["System.Collections.IEnumerator.MoveNext"]() {
        const cur = this.iter.next();
        this.current = cur.value;
        return !cur.done;
    }
    ["System.Collections.IEnumerator.Reset"]() {
        throw new Error("JS iterators cannot be reset");
    }
    Dispose() {
        return;
    }
}
function $ed39e963967a3eea$export$a41738691dcd8bea(o) {
    return typeof o.GetEnumerator === "function" ? o.GetEnumerator() : new $ed39e963967a3eea$export$95c529ba89ee4ce7(o[Symbol.iterator]());
}
function $ed39e963967a3eea$export$21e0669b7bd01bb4(en) {
    return {
        [Symbol.iterator] () {
            return this;
        },
        next () {
            const hasNext = en["System.Collections.IEnumerator.MoveNext"]();
            const current = hasNext ? en["System.Collections.IEnumerator.get_Current"]() : undefined;
            return {
                done: !hasNext,
                value: current
            };
        }
    };
}
class $ed39e963967a3eea$export$6f7eded1b7c5be2f {
    constructor(f){
        this.Compare = f || $ed39e963967a3eea$export$398604a469f7de9a;
    }
}
function $ed39e963967a3eea$export$40090773fd11c74c(comparer) {
    // Sometimes IEqualityComparer also implements IComparer
    if ($ed39e963967a3eea$var$isComparer(comparer)) return new $ed39e963967a3eea$export$6f7eded1b7c5be2f(comparer.Compare);
    else return new $ed39e963967a3eea$export$6f7eded1b7c5be2f((x, y)=>{
        const xhash = comparer.GetHashCode(x);
        const yhash = comparer.GetHashCode(y);
        if (xhash === yhash) return comparer.Equals(x, y) ? 0 : -1;
        else return xhash < yhash ? -1 : 1;
    });
}
function $ed39e963967a3eea$export$27555cdfb0b84a1a(actual, expected, msg) {
    if (!$ed39e963967a3eea$export$e9bab7fafb253603(actual, expected)) throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {
        actual: actual,
        expected: expected
    });
}
function $ed39e963967a3eea$export$49eedac51f614f7d(actual, expected, msg) {
    if ($ed39e963967a3eea$export$e9bab7fafb253603(actual, expected)) throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {
        actual: actual,
        expected: expected
    });
}
class $ed39e963967a3eea$export$b624eff549462981 {
    constructor(factory){
        this.factory = factory;
        this.isValueCreated = false;
    }
    get Value() {
        if (!this.isValueCreated) {
            this.createdValue = this.factory();
            this.isValueCreated = true;
        }
        return this.createdValue;
    }
    get IsValueCreated() {
        return this.isValueCreated;
    }
}
function $ed39e963967a3eea$export$c5f9bac959aafb6(v) {
    return new $ed39e963967a3eea$export$b624eff549462981(()=>v
    );
}
function $ed39e963967a3eea$export$eeb1958fe3944641(i, length) {
    let str = i.toString(10);
    while(str.length < length)str = "0" + str;
    return str;
}
function $ed39e963967a3eea$export$9251776e912f9733(i, lengthLeft, lengthRight) {
    let str = i.toString(10);
    while(str.length < lengthLeft)str = "0" + str;
    while(str.length < lengthRight)str = str + "0";
    return str;
}
function $ed39e963967a3eea$export$b4360650442640a0(date) {
    const date1 = date;
    return typeof date1.offset === "number" ? date1.offset : date.kind === 1 /* UTC */  ? 0 : date.getTimezoneOffset() * -60000;
}
function $ed39e963967a3eea$export$a3afeaad75c2403e(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 65535 + i + 1 : i;
    return i.toString(radix);
}
function $ed39e963967a3eea$export$afbd86327cbebb03(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 4294967295 + i + 1 : i;
    return i.toString(radix);
}
class $ed39e963967a3eea$export$f3f95c9f1920e9b5 {
    static id(o) {
        if (!$ed39e963967a3eea$export$f3f95c9f1920e9b5.idMap.has(o)) $ed39e963967a3eea$export$f3f95c9f1920e9b5.idMap.set(o, ++$ed39e963967a3eea$export$f3f95c9f1920e9b5.count);
        return $ed39e963967a3eea$export$f3f95c9f1920e9b5.idMap.get(o);
    }
}
$ed39e963967a3eea$export$f3f95c9f1920e9b5.idMap = new WeakMap();
$ed39e963967a3eea$export$f3f95c9f1920e9b5.count = 0;
function $ed39e963967a3eea$export$b9b095ec8c02760b(s) {
    let i = 0;
    let h = 5381;
    const len = s.length;
    while(i < len)h = h * 33 ^ s.charCodeAt(i++);
    return h;
}
function $ed39e963967a3eea$export$a9844eb73de0a218(x) {
    return x * 2654435761 | 0;
}
function $ed39e963967a3eea$export$4a6567c520a28ea3(hashes) {
    if (hashes.length === 0) return 0;
    return hashes.reduce((h1, h2)=>{
        return (h1 << 5) + h1 ^ h2;
    });
}
function $ed39e963967a3eea$export$9657185e7652fc5b(x) {
    if (x == null) return 0;
    switch(typeof x){
        case "boolean":
            return x ? 1 : 0;
        case "number":
            return $ed39e963967a3eea$export$a9844eb73de0a218(x);
        case "string":
            return $ed39e963967a3eea$export$b9b095ec8c02760b(x);
        default:
            return $ed39e963967a3eea$export$a9844eb73de0a218($ed39e963967a3eea$export$f3f95c9f1920e9b5.id(x));
    }
}
function $ed39e963967a3eea$export$66b47a187ef76f1c(x) {
    if (x == null) return 0;
    else if ($ed39e963967a3eea$var$isHashable(x)) return x.GetHashCode();
    else return $ed39e963967a3eea$export$9657185e7652fc5b(x);
}
function $ed39e963967a3eea$export$2e003ac3dfcb70a3(x) {
    return x.getTime();
}
function $ed39e963967a3eea$export$34638350c54b9a1b(x) {
    const len = x.length;
    const hashes = new Array(len);
    for(let i = 0; i < len; i++)hashes[i] = $ed39e963967a3eea$export$2e619f11ca48bee4(x[i]);
    return $ed39e963967a3eea$export$4a6567c520a28ea3(hashes);
}
function $ed39e963967a3eea$export$2e619f11ca48bee4(x) {
    if (x == null) return 0;
    switch(typeof x){
        case "boolean":
            return x ? 1 : 0;
        case "number":
            return $ed39e963967a3eea$export$a9844eb73de0a218(x);
        case "string":
            return $ed39e963967a3eea$export$b9b095ec8c02760b(x);
        default:
            if ($ed39e963967a3eea$var$isHashable(x)) return x.GetHashCode();
            else if ($ed39e963967a3eea$export$1e2f57719e155213(x)) return $ed39e963967a3eea$export$34638350c54b9a1b(x);
            else if (x instanceof Date) return $ed39e963967a3eea$export$2e003ac3dfcb70a3(x);
            else if (Object.getPrototypeOf(x).constructor === Object) {
                // TODO: check call-stack to prevent cyclic objects?
                const hashes = Object.values(x).map((v)=>$ed39e963967a3eea$export$2e619f11ca48bee4(v)
                );
                return $ed39e963967a3eea$export$4a6567c520a28ea3(hashes);
            } else // Classes don't implement GetHashCode by default, but must use identity hashing
            return $ed39e963967a3eea$export$a9844eb73de0a218($ed39e963967a3eea$export$f3f95c9f1920e9b5.id(x));
    }
}
function $ed39e963967a3eea$export$2ba04dca110a1015(x) {
    return $ed39e963967a3eea$export$b9b095ec8c02760b(String(x));
}
function $ed39e963967a3eea$export$fed18027a0c1a84b(x) {
    return x == null ? 0 : $ed39e963967a3eea$var$isHashable(x) ? x.GetHashCode() : $ed39e963967a3eea$export$a9844eb73de0a218($ed39e963967a3eea$export$f3f95c9f1920e9b5.id(x));
}
function $ed39e963967a3eea$export$b9a64d2e4daf3c9f(x, y, eq) {
    if (x == null) return y == null;
    if (y == null) return false;
    if (x.length !== y.length) return false;
    for(let i = 0; i < x.length; i++){
        if (!eq(x[i], y[i])) return false;
    }
    return true;
}
function $ed39e963967a3eea$export$dc63f52ecf814bf8(x, y) {
    return $ed39e963967a3eea$export$b9a64d2e4daf3c9f(x, y, $ed39e963967a3eea$export$e9bab7fafb253603);
}
function $ed39e963967a3eea$var$equalObjects(x, y) {
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) return false;
    xKeys.sort();
    yKeys.sort();
    for(let i = 0; i < xKeys.length; i++){
        if (xKeys[i] !== yKeys[i] || !$ed39e963967a3eea$export$e9bab7fafb253603(x[xKeys[i]], y[yKeys[i]])) return false;
    }
    return true;
}
function $ed39e963967a3eea$export$e9bab7fafb253603(x, y) {
    if (x === y) return true;
    else if (x == null) return y == null;
    else if (y == null) return false;
    else if (typeof x !== "object") return false;
    else if ($ed39e963967a3eea$var$isEquatable(x)) return x.Equals(y);
    else if ($ed39e963967a3eea$export$1e2f57719e155213(x)) return $ed39e963967a3eea$export$1e2f57719e155213(y) && $ed39e963967a3eea$export$dc63f52ecf814bf8(x, y);
    else if (x instanceof Date) return y instanceof Date && $ed39e963967a3eea$export$c4c806e061935577(x, y) === 0;
    else return Object.getPrototypeOf(x).constructor === Object && $ed39e963967a3eea$var$equalObjects(x, y);
}
function $ed39e963967a3eea$export$c4c806e061935577(x, y) {
    let xtime;
    let ytime;
    // DateTimeOffset and DateTime deals with equality differently.
    if ("offset" in x && "offset" in y) {
        xtime = x.getTime();
        ytime = y.getTime();
    } else {
        xtime = x.getTime() + $ed39e963967a3eea$export$b4360650442640a0(x);
        ytime = y.getTime() + $ed39e963967a3eea$export$b4360650442640a0(y);
    }
    return xtime === ytime ? 0 : xtime < ytime ? -1 : 1;
}
function $ed39e963967a3eea$export$591cc4a8025fba16(x, y) {
    return x === y ? 0 : x < y ? -1 : 1;
}
function $ed39e963967a3eea$export$7b00afb96b8966ce(x, y, comp) {
    if (x == null) return y == null ? 0 : 1;
    if (y == null) return -1;
    if (x.length !== y.length) return x.length < y.length ? -1 : 1;
    for(let i = 0, j = 0; i < x.length; i++){
        j = comp(x[i], y[i]);
        if (j !== 0) return j;
    }
    return 0;
}
function $ed39e963967a3eea$export$fc16749c794bf6ff(x, y) {
    return $ed39e963967a3eea$export$7b00afb96b8966ce(x, y, $ed39e963967a3eea$export$398604a469f7de9a);
}
function $ed39e963967a3eea$var$compareObjects(x, y) {
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) return xKeys.length < yKeys.length ? -1 : 1;
    xKeys.sort();
    yKeys.sort();
    for(let i = 0, j = 0; i < xKeys.length; i++){
        const key = xKeys[i];
        if (key !== yKeys[i]) return key < yKeys[i] ? -1 : 1;
        else {
            j = $ed39e963967a3eea$export$398604a469f7de9a(x[key], y[key]);
            if (j !== 0) return j;
        }
    }
    return 0;
}
function $ed39e963967a3eea$export$398604a469f7de9a(x, y) {
    if (x === y) return 0;
    else if (x == null) return y == null ? 0 : -1;
    else if (y == null) return 1;
    else if (typeof x !== "object") return x < y ? -1 : 1;
    else if ($ed39e963967a3eea$var$isComparable(x)) return x.CompareTo(y);
    else if ($ed39e963967a3eea$export$1e2f57719e155213(x)) return $ed39e963967a3eea$export$1e2f57719e155213(y) ? $ed39e963967a3eea$export$fc16749c794bf6ff(x, y) : -1;
    else if (x instanceof Date) return y instanceof Date ? $ed39e963967a3eea$export$c4c806e061935577(x, y) : -1;
    else return Object.getPrototypeOf(x).constructor === Object ? $ed39e963967a3eea$var$compareObjects(x, y) : -1;
}
function $ed39e963967a3eea$export$96ec731ed4dcb222(comparer, x, y) {
    return comparer(x, y) < 0 ? x : y;
}
function $ed39e963967a3eea$export$8960430cfd85939f(comparer, x, y) {
    return comparer(x, y) > 0 ? x : y;
}
function $ed39e963967a3eea$export$7d15b64cf5a3a4c4(comparer, value, $ed39e963967a3eea$export$96ec731ed4dcb222, $ed39e963967a3eea$export$8960430cfd85939f) {
    return comparer(value, $ed39e963967a3eea$export$96ec731ed4dcb222) < 0 ? $ed39e963967a3eea$export$96ec731ed4dcb222 : comparer(value, $ed39e963967a3eea$export$8960430cfd85939f) > 0 ? $ed39e963967a3eea$export$8960430cfd85939f : value;
}
function $ed39e963967a3eea$export$2e17fe64ec9a826e(value1) {
    let atom = value1;
    return (value, isSetter)=>{
        if (!isSetter) return atom;
        else {
            atom = value;
            return void 0;
        }
    };
}
function $ed39e963967a3eea$export$ad1552835d16e4ca(fields) {
    const obj = {
    };
    for (const kv of fields)obj[kv[0]] = kv[1];
    return obj;
}
function $ed39e963967a3eea$export$abe6afec815e60a8(mutator) {
    const opts = {
    };
    mutator(opts);
    return opts;
}
function $ed39e963967a3eea$export$2077e0241d6afd3c(value, digits = 0) {
    const m = Math.pow(10, digits);
    const n = +(digits ? value * m : value).toFixed(8);
    const i = Math.floor(n);
    const f = n - i;
    const e = 0.00000001;
    const r = f > 0.5 - e && f < 0.5 + e ? i % 2 === 0 ? i : i + 1 : Math.round(n);
    return digits ? r / m : r;
}
function $ed39e963967a3eea$export$c5552dfdbc7cec71(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}
function $ed39e963967a3eea$export$c9f44f6b6738bb00($ed39e963967a3eea$export$96ec731ed4dcb222, $ed39e963967a3eea$export$8960430cfd85939f) {
    return Math.floor(Math.random() * ($ed39e963967a3eea$export$8960430cfd85939f - $ed39e963967a3eea$export$96ec731ed4dcb222)) + $ed39e963967a3eea$export$96ec731ed4dcb222;
}
function $ed39e963967a3eea$export$5f828d93ff035aa8(buffer) {
    if (buffer == null) throw new Error("Buffer cannot be null");
    for(let i = 0; i < buffer.length; i += 6){
        // Pick random 48-bit number. Fill buffer in 2 24-bit chunks to avoid bitwise truncation.
        let r = Math.floor(Math.random() * 281474976710656); // Low 24 bits = chunk 1.
        const rhi = Math.floor(r / 16777216); // High 24 bits shifted via division = chunk 2.
        for(let j = 0; j < 6 && i + j < buffer.length; j++){
            if (j === 3) r = rhi;
            buffer[i + j] = r & 255;
            r >>>= 8;
        }
    }
}
function $ed39e963967a3eea$export$4aad32b45f511863(s) {
    // https://stackoverflow.com/a/4458580/524236
    return decodeURIComponent(s.replace(/\+/g, "%20"));
}
function $ed39e963967a3eea$export$c6a168a6353a7fe6(s) {
    return encodeURIComponent(s).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
}
function $ed39e963967a3eea$export$a793387c99636443(s) {
    return encodeURI(s);
}
function $ed39e963967a3eea$export$85b9a36db797e02b(col) {
    if ($ed39e963967a3eea$export$1e2f57719e155213(col)) return col.length;
    else {
        let $ed39e963967a3eea$export$85b9a36db797e02b = 0;
        for (const _ of col)$ed39e963967a3eea$export$85b9a36db797e02b++;
        return $ed39e963967a3eea$export$85b9a36db797e02b;
    }
}
function $ed39e963967a3eea$export$42ffd38884aecdac(col) {
    if ($ed39e963967a3eea$export$1e2f57719e155213(col)) col.splice(0);
    else col.clear();
}
const $ed39e963967a3eea$var$CURRIED = Symbol("curried");
function $ed39e963967a3eea$export$7864d59d01b6d6bf(arity, f) {
    // f may be a function option with None value
    if (f == null || f.length > 1) return f;
    const uncurried = (...args)=>{
        let res = f;
        for(let i = 0; i < arity; i++)res = res(args[i]);
        return res;
    };
    uncurried[$ed39e963967a3eea$var$CURRIED] = f;
    return uncurried;
}
function $ed39e963967a3eea$var$_curry(args, arity, f) {
    return (arg)=>arity === 1 ? f(...args.concat([
            arg
        ])) : $ed39e963967a3eea$var$_curry(args.concat([
            arg
        ]), arity - 1, f)
    ;
}
function $ed39e963967a3eea$export$c3095a23b368d1f2(arity, f) {
    if (f == null || f.length === 1) return f;
    else if ($ed39e963967a3eea$var$CURRIED in f) return f[$ed39e963967a3eea$var$CURRIED];
    else return $ed39e963967a3eea$var$_curry([], arity, f);
}
function $ed39e963967a3eea$export$f09417b7b47dae29(arity, f) {
    return f.length > arity ? (...args1)=>(...args2)=>f.apply(undefined, args1.concat(args2))
     : f;
}
function $ed39e963967a3eea$export$955fe82a9145db62(arity, f, args) {
    if (f == null) return undefined;
    else if ($ed39e963967a3eea$var$CURRIED in f) {
        f = f[$ed39e963967a3eea$var$CURRIED];
        for(let i = 0; i < args.length; i++)f = f(args[i]);
        return f;
    } else return $ed39e963967a3eea$var$_curry(args, arity, f);
}
function $ed39e963967a3eea$export$880b1e43568f4c50(fn1, mappings1) {
    function mapArg(fn, arg1, mappings, idx) {
        const mapping = mappings[idx];
        if (mapping !== 0) {
            const expectedArity = mapping[0];
            const actualArity = mapping[1];
            if (expectedArity > 1) arg1 = $ed39e963967a3eea$export$c3095a23b368d1f2(expectedArity, arg1);
            if (actualArity > 1) arg1 = $ed39e963967a3eea$export$7864d59d01b6d6bf(actualArity, arg1);
        }
        const res = fn(arg1);
        if (idx + 1 === mappings.length) return res;
        else return (arg)=>mapArg(res, arg, mappings, idx + 1)
        ;
    }
    return (arg)=>mapArg(fn1, arg, mappings1, 0)
    ;
}


function $ae70510fbd2502e5$export$67548df8c961d303(self) {
    let count = 0;
    let str = "[";
    for (const x of self){
        if (count === 0) str += $ae70510fbd2502e5$export$f84e8e69fd4488a5(x);
        else if (count === 100) {
            str += "; ...";
            break;
        } else str += "; " + $ae70510fbd2502e5$export$f84e8e69fd4488a5(x);
        count++;
    }
    return str + "]";
}
function $ae70510fbd2502e5$export$f84e8e69fd4488a5(x, callStack = 0) {
    if (x != null && typeof x === "object") {
        if (typeof x.toString === "function") return x.toString();
        else if (Symbol.iterator in x) return $ae70510fbd2502e5$export$67548df8c961d303(x);
        else {
            const cons = Object.getPrototypeOf(x).constructor;
            return cons === Object && callStack < 10 ? "{ " + Object.entries(x).map(([k, v])=>k + " = " + $ae70510fbd2502e5$export$f84e8e69fd4488a5(v, callStack + 1)
            ).join("\n  ") + " }" : cons.name;
        }
    }
    return String(x);
}
function $ae70510fbd2502e5$export$19c5b35f73b7bbbc(name, fields) {
    if (fields.length === 0) return name;
    else {
        let fieldStr = "";
        let withParens = true;
        if (fields.length === 1) {
            fieldStr = $ae70510fbd2502e5$export$f84e8e69fd4488a5(fields[0]);
            withParens = fieldStr.indexOf(" ") >= 0;
        } else fieldStr = fields.map((x)=>$ae70510fbd2502e5$export$f84e8e69fd4488a5(x)
        ).join(", ");
        return name + (withParens ? " (" : " ") + fieldStr + (withParens ? ")" : "");
    }
}
class $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    get name() {
        return this.cases()[this.tag];
    }
    toJSON() {
        return this.fields.length === 0 ? this.name : [
            this.name
        ].concat(this.fields);
    }
    toString() {
        return $ae70510fbd2502e5$export$19c5b35f73b7bbbc(this.name, this.fields);
    }
    GetHashCode() {
        const hashes = this.fields.map((x)=>$ed39e963967a3eea$export$2e619f11ca48bee4(x)
        );
        hashes.splice(0, 0, $ed39e963967a3eea$export$a9844eb73de0a218(this.tag));
        return $ed39e963967a3eea$export$4a6567c520a28ea3(hashes);
    }
    Equals(other) {
        if (this === other) return true;
        else if (!$ed39e963967a3eea$export$52febab2880147bb(this, other)) return false;
        else if (this.tag === other.tag) return $ed39e963967a3eea$export$dc63f52ecf814bf8(this.fields, other.fields);
        else return false;
    }
    CompareTo(other) {
        if (this === other) return 0;
        else if (!$ed39e963967a3eea$export$52febab2880147bb(this, other)) return -1;
        else if (this.tag === other.tag) return $ed39e963967a3eea$export$fc16749c794bf6ff(this.fields, other.fields);
        else return this.tag < other.tag ? -1 : 1;
    }
}
function $ae70510fbd2502e5$var$recordToJSON(self) {
    const o = {
    };
    const keys = Object.keys(self);
    for(let i = 0; i < keys.length; i++)o[keys[i]] = self[keys[i]];
    return o;
}
function $ae70510fbd2502e5$var$recordToString(self) {
    return "{ " + Object.entries(self).map(([k, v])=>k + " = " + $ae70510fbd2502e5$export$f84e8e69fd4488a5(v)
    ).join("\n  ") + " }";
}
function $ae70510fbd2502e5$var$recordGetHashCode(self) {
    const hashes = Object.values(self).map((v)=>$ed39e963967a3eea$export$2e619f11ca48bee4(v)
    );
    return $ed39e963967a3eea$export$4a6567c520a28ea3(hashes);
}
function $ae70510fbd2502e5$var$recordEquals(self, other) {
    if (self === other) return true;
    else if (!$ed39e963967a3eea$export$52febab2880147bb(self, other)) return false;
    else {
        const thisNames = Object.keys(self);
        for(let i = 0; i < thisNames.length; i++){
            if (!$ed39e963967a3eea$export$e9bab7fafb253603(self[thisNames[i]], other[thisNames[i]])) return false;
        }
        return true;
    }
}
function $ae70510fbd2502e5$var$recordCompareTo(self, other) {
    if (self === other) return 0;
    else if (!$ed39e963967a3eea$export$52febab2880147bb(self, other)) return -1;
    else {
        const thisNames = Object.keys(self);
        for(let i = 0; i < thisNames.length; i++){
            const result = $ed39e963967a3eea$export$398604a469f7de9a(self[thisNames[i]], other[thisNames[i]]);
            if (result !== 0) return result;
        }
        return 0;
    }
}
class $ae70510fbd2502e5$export$5b163c6d120341e7 {
    toJSON() {
        return $ae70510fbd2502e5$var$recordToJSON(this);
    }
    toString() {
        return $ae70510fbd2502e5$var$recordToString(this);
    }
    GetHashCode() {
        return $ae70510fbd2502e5$var$recordGetHashCode(this);
    }
    Equals(other) {
        return $ae70510fbd2502e5$var$recordEquals(this, other);
    }
    CompareTo(other) {
        return $ae70510fbd2502e5$var$recordCompareTo(this, other);
    }
}
class $ae70510fbd2502e5$export$be150d1a3c7e94fe {
    constructor(contentsOrGetter, setter){
        if (typeof setter === "function") {
            this.getter = contentsOrGetter;
            this.setter = setter;
        } else {
            this.getter = ()=>contentsOrGetter
            ;
            this.setter = (v)=>{
                contentsOrGetter = v;
            };
        }
    }
    get contents() {
        return this.getter();
    }
    set contents(v) {
        this.setter(v);
    }
}
class $ae70510fbd2502e5$export$e2f174de097e0bcd {
    constructor(message){
        this.message = message;
    }
}
function $ae70510fbd2502e5$export$40f07171f4b6ee01(x) {
    return x instanceof $ae70510fbd2502e5$export$e2f174de097e0bcd || x instanceof Error;
}
class $ae70510fbd2502e5$export$bf6d26922abbea07 extends $ae70510fbd2502e5$export$e2f174de097e0bcd {
    toJSON() {
        return $ae70510fbd2502e5$var$recordToJSON(this);
    }
    toString() {
        return $ae70510fbd2502e5$var$recordToString(this);
    }
    GetHashCode() {
        return $ae70510fbd2502e5$var$recordGetHashCode(this);
    }
    Equals(other) {
        return $ae70510fbd2502e5$var$recordEquals(this, other);
    }
    CompareTo(other) {
        return $ae70510fbd2502e5$var$recordCompareTo(this, other);
    }
}
class $ae70510fbd2502e5$export$56fde45cb633adea extends $ae70510fbd2502e5$export$bf6d26922abbea07 {
    constructor(arg1, arg2, arg3){
        super();
        this.arg1 = arg1;
        this.arg2 = arg2 | 0;
        this.arg3 = arg3 | 0;
        this.message = "The match cases were incomplete";
    }
}
class $ae70510fbd2502e5$export$ab9c25261cd8c720 {
}





const $99dffd8ec22d454a$export$8f701197936bc2a6 = Symbol("numeric");
function $99dffd8ec22d454a$export$e90fb89750dba83f(x) {
    return typeof x === "number" || (x === null || x === void 0 ? void 0 : x[$99dffd8ec22d454a$export$8f701197936bc2a6]);
}
function $99dffd8ec22d454a$export$398604a469f7de9a(x, y) {
    if (typeof x === "number") return x < y ? -1 : x > y ? 1 : 0;
    else return x.CompareTo(y);
}
function $99dffd8ec22d454a$export$2060d2db72cce88f(x, y) {
    if (typeof x === "number") return x * y;
    else return x[$99dffd8ec22d454a$export$8f701197936bc2a6]().multiply(y);
}
function $99dffd8ec22d454a$export$a81f732198733497(x, dp) {
    if (typeof x === "number") return x.toFixed(dp);
    else return x[$99dffd8ec22d454a$export$8f701197936bc2a6]().toFixed(dp);
}
function $99dffd8ec22d454a$export$3e91a10e66078270(x, sd) {
    if (typeof x === "number") return x.toPrecision(sd);
    else return x[$99dffd8ec22d454a$export$8f701197936bc2a6]().toPrecision(sd);
}
function $99dffd8ec22d454a$export$888cb08ddc4765be(x, dp) {
    if (typeof x === "number") return x.toExponential(dp);
    else return x[$99dffd8ec22d454a$export$8f701197936bc2a6]().toExponential(dp);
}
function $99dffd8ec22d454a$export$7ea66e3774a60b67(x) {
    if (typeof x === "number") return (Number(x) >>> 0).toString(16);
    else return x[$99dffd8ec22d454a$export$8f701197936bc2a6]().toHex();
}


// The shared prototype object.
var $709497f03c873a62$var$P = {
    GetHashCode () {
        return $ed39e963967a3eea$export$4a6567c520a28ea3([
            this.s,
            this.e
        ].concat(this.c));
    },
    Equals (x) {
        return !this.cmp(x);
    },
    CompareTo (x) {
        return this.cmp(x);
    },
    [$99dffd8ec22d454a$export$8f701197936bc2a6] () {
        const _this = this;
        return {
            multiply: (y)=>_this.mul(y)
            ,
            toPrecision: (sd)=>_this.toPrecision(sd)
            ,
            toExponential: (dp)=>_this.toExponential(dp)
            ,
            toFixed: (dp)=>_this.toFixed(dp)
            ,
            toHex: ()=>(Number(_this) >>> 0).toString(16)
        };
    }
};
/*
 *  big.js v6.0.3
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2020 Michael Mclaughlin
 *  https://github.com/MikeMcl/big.js/LICENCE.md
 */ /************************************** EDITABLE DEFAULTS *****************************************/ // The default values below must be integers within the stated ranges.
/*
 * The maximum number of decimal places (DP) of the results of operations involving division:
 * div and sqrt, and pow with negative exponents.
 */ var $709497f03c873a62$var$DP = 28, /*
 * The rounding mode (RM) used when rounding to the above decimal places.
 *
 *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
 *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
 *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
 *  3  Away from zero.                                  (ROUND_UP)
 */ $709497f03c873a62$var$RM = 1, // The maximum value of DP and Big.DP.
$709497f03c873a62$var$MAX_DP = 1000000, // The maximum magnitude of the exponent argument to the pow method.
$709497f03c873a62$var$MAX_POWER = 1000000, /*
 * The negative exponent (NE) at and beneath which toString returns exponential notation.
 * (JavaScript numbers: -7)
 * -1000000 is the minimum recommended exponent value of a Big.
 */ $709497f03c873a62$var$NE = -29, /*
 * The positive exponent (PE) at and above which toString returns exponential notation.
 * (JavaScript numbers: 21)
 * 1000000 is the maximum recommended exponent value of a Big, but this limit is not enforced.
 */ $709497f03c873a62$var$PE = 29, /*
 * When true, an error will be thrown if a primitive number is passed to the Big constructor,
 * or if valueOf is called, or if toNumber is called on a Big which cannot be converted to a
 * primitive number without a loss of precision.
 */ $709497f03c873a62$var$STRICT = false, /**************************************************************************************************/ // Error messages.
$709497f03c873a62$var$NAME = '[big.js] ', $709497f03c873a62$var$INVALID = $709497f03c873a62$var$NAME + 'Invalid ', $709497f03c873a62$var$INVALID_DP = $709497f03c873a62$var$INVALID + 'decimal places', $709497f03c873a62$var$INVALID_RM = $709497f03c873a62$var$INVALID + 'rounding mode', $709497f03c873a62$var$DIV_BY_ZERO = $709497f03c873a62$var$NAME + 'Division by zero', $709497f03c873a62$var$UNDEFINED = void 0, $709497f03c873a62$var$NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
/*
 * Create and return a Big constructor.
 */ function $709497f03c873a62$var$_Big_() {
    /*
     * The Big constructor and exported function.
     * Create and return a new instance of a Big number object.
     *
     * n {number|string|Big} A numeric value.
     */ function $709497f03c873a62$export$721faf8597f6f672(n) {
        var x = this;
        // Enable constructor usage without new.
        if (!(x instanceof $709497f03c873a62$export$721faf8597f6f672)) return n === $709497f03c873a62$var$UNDEFINED ? $709497f03c873a62$var$_Big_() : new $709497f03c873a62$export$721faf8597f6f672(n);
        // Duplicate.
        if (n instanceof $709497f03c873a62$export$721faf8597f6f672) {
            x.s = n.s;
            x.e = n.e;
            x.c = n.c.slice();
            $709497f03c873a62$var$normalize(x);
        } else {
            if (typeof n !== 'string') {
                if ($709497f03c873a62$export$721faf8597f6f672.strict === true) throw TypeError($709497f03c873a62$var$INVALID + 'number');
                // Minus zero?
                n = n === 0 && 1 / n < 0 ? '-0' : String(n);
            }
            $709497f03c873a62$var$parse(x, n);
        }
        // Retain a reference to this Big constructor.
        // Shadow Big.prototype.constructor which points to Object.
        x.constructor = $709497f03c873a62$export$721faf8597f6f672;
    }
    $709497f03c873a62$export$721faf8597f6f672.prototype = $709497f03c873a62$var$P;
    $709497f03c873a62$export$721faf8597f6f672.DP = $709497f03c873a62$var$DP;
    $709497f03c873a62$export$721faf8597f6f672.RM = $709497f03c873a62$var$RM;
    $709497f03c873a62$export$721faf8597f6f672.NE = $709497f03c873a62$var$NE;
    $709497f03c873a62$export$721faf8597f6f672.PE = $709497f03c873a62$var$PE;
    $709497f03c873a62$export$721faf8597f6f672.strict = $709497f03c873a62$var$STRICT;
    return $709497f03c873a62$export$721faf8597f6f672;
}
function $709497f03c873a62$var$normalize(x1) {
    // x = round(x, DP, 0);
    if (x1.c.length > 1 && !x1.c[0]) {
        let i = x1.c.findIndex((x)=>x
        );
        x1.c = x1.c.slice(i);
        x1.e = x1.e - i;
    }
}
/*
 * Parse the number or string value passed to a Big constructor.
 *
 * x {Big} A Big number instance.
 * n {number|string} A numeric value.
 */ function $709497f03c873a62$var$parse(x, n) {
    var e, i, nl;
    if (!$709497f03c873a62$var$NUMERIC.test(n)) throw Error($709497f03c873a62$var$INVALID + 'number');
    // Determine sign.
    x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;
    // Decimal point?
    if ((e = n.indexOf('.')) > -1) n = n.replace('.', '');
    // Exponential form?
    if ((i = n.search(/e/i)) > 0) {
        // Determine exponent.
        if (e < 0) e = i;
        e += +n.slice(i + 1);
        n = n.substring(0, i);
    } else if (e < 0) // Integer.
    e = n.length;
    nl = n.length;
    // Determine leading zeros before decimal point.
    for(i = 0; i < e && i < nl && n.charAt(i) == '0';)++i;
    // original version (ignores decimal point).
    // // Determine leading zeros.
    // for (i = 0; i < nl && n.charAt(i) == '0';) ++i;
    if (i == nl) // Zero.
    x.c = [
        x.e = 0
    ];
    else {
        x.e = e - i - 1;
        x.c = [];
        // Convert string to array of digits without leading zeros
        for(e = 0; i < nl;)x.c[e++] = +n.charAt(i++);
    // older version (doesn't keep trailing zeroes).
    // // Determine trailing zeros.
    // for (; nl > 0 && n.charAt(--nl) == '0';);
    // // Convert string to array of digits without leading/trailing zeros.
    // for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
    }
    x = $709497f03c873a62$var$round(x, $709497f03c873a62$export$721faf8597f6f672.DP + 1, $709497f03c873a62$export$721faf8597f6f672.RM);
    return x;
}
/*
 * Round Big x to a maximum of sd significant digits using rounding mode rm.
 *
 * x {Big} The Big to round.
 * sd {number} Significant digits: integer, 0 to MAX_DP inclusive.
 * rm {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 * [more] {boolean} Whether the result of division was truncated.
 */ function $709497f03c873a62$var$round(x, sd, rm, more) {
    var xc = x.c;
    if (rm === $709497f03c873a62$var$UNDEFINED) rm = $709497f03c873a62$export$721faf8597f6f672.RM;
    if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) throw Error($709497f03c873a62$var$INVALID_RM);
    if (sd < 1) {
        more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== $709497f03c873a62$var$UNDEFINED)));
        xc.length = 1;
        if (more) {
            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
            x.e = x.e - sd + 1;
            xc[0] = 1;
        } else // Zero.
        xc[0] = x.e = 0;
    } else if (sd < xc.length) {
        // xc[sd] is the digit after the digit that may be rounded up.
        const isZero = xc.findIndex((xci, idx)=>idx >= sd && xci > 0
        ) < 0;
        more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== $709497f03c873a62$var$UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !isZero);
        // Remove any digits after the required precision.
        xc.length = sd--;
        // Round up?
        if (more) // Rounding up may mean the previous digit has to be rounded up.
        for(; ++xc[sd] > 9;){
            xc[sd] = 0;
            if (!sd--) {
                ++x.e;
                xc.unshift(1);
            }
        }
        // Remove trailing zeros.
        for(sd = xc.length; !xc[--sd];)xc.pop();
    }
    return x;
}
/*
 * Return a string representing the value of Big x in normal or exponential notation.
 * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
 */ function $709497f03c873a62$var$stringify(x, doExponential, isNonzero) {
    var e = x.e, s = x.c.join(''), n = s.length;
    // Exponential notation?
    if (doExponential) s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;
    else if (e < 0) {
        for(; ++e;)s = '0' + s;
        s = '0.' + s;
    } else if (e > 0) {
        if (++e > n) for(e -= n; e--;)s += '0';
        else if (e < n) s = s.slice(0, e) + '.' + s.slice(e);
    } else if (n > 1) s = s.charAt(0) + '.' + s.slice(1);
    return x.s < 0 && isNonzero ? '-' + s : s;
}
// Prototype/instance methods
/*
 * Return a new Big whose value is the absolute value of this Big.
 */ $709497f03c873a62$var$P.abs = function() {
    var x = new this.constructor(this);
    x.s = 1;
    return x;
};
/*
 * Return 1 if the value of this Big is greater than the value of Big y,
 *       -1 if the value of this Big is less than the value of Big y, or
 *        0 if they have the same value.
 */ $709497f03c873a62$var$P.cmp = function(y) {
    var isneg, $709497f03c873a62$export$721faf8597f6f672 = this.constructor, x = new $709497f03c873a62$export$721faf8597f6f672(this), y = new $709497f03c873a62$export$721faf8597f6f672(y), xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
    // Either zero?
    if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;
    // Signs differ?
    if (i != j) return i;
    isneg = i < 0;
    // Compare exponents.
    if (k != l) return k > l ^ isneg ? 1 : -1;
    // Compare digit by digit.
    j = Math.max(xc.length, yc.length);
    for(i = 0; i < j; i++){
        k = i < xc.length ? xc[i] : 0;
        l = i < yc.length ? yc[i] : 0;
        if (k != l) return k > l ^ isneg ? 1 : -1;
    }
    return 0;
// original version (doesn't compare well trailing zeroes, e.g. 1.0 with 1.00)
// j = (k = xc.length) < (l = yc.length) ? k : l;
// // Compare digit by digit.
// for (i = -1; ++i < j;) {
//   if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
// }
// // Compare lengths.
// return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};
/*
 * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
 * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */ $709497f03c873a62$var$P.div = function(y) {
    var $709497f03c873a62$export$721faf8597f6f672 = this.constructor, x = new $709497f03c873a62$export$721faf8597f6f672(this), y = new $709497f03c873a62$export$721faf8597f6f672(y), a = x.c, b = y.c, k = x.s == y.s ? 1 : -1, dp = $709497f03c873a62$export$721faf8597f6f672.DP;
    if (dp !== ~~dp || dp < 0 || dp > $709497f03c873a62$var$MAX_DP) throw Error($709497f03c873a62$var$INVALID_DP);
    // Divisor is zero?
    if (!b[0]) throw Error($709497f03c873a62$var$DIV_BY_ZERO);
    // Dividend is 0? Return +-0.
    if (!a[0]) {
        y.s = k;
        y.c = [
            y.e = 0
        ];
        return y;
    }
    var bl, bt, n, cmp, ri, bz = b.slice(), ai = bl = b.length, al = a.length, r = a.slice(0, bl), rl = r.length, q = y, qc = q.c = [], qi = 0, p = dp + (q.e = x.e - y.e) + 1; // precision of the result
    q.s = k;
    k = p < 0 ? 0 : p;
    // Create version of divisor with leading zero.
    bz.unshift(0);
    // Add zeros to make remainder as long as divisor.
    for(; (rl++) < bl;)r.push(0);
    do {
        // n is how many times the divisor goes into current remainder.
        for(n = 0; n < 10; n++){
            // Compare divisor and remainder.
            if (bl != (rl = r.length)) cmp = bl > rl ? 1 : -1;
            else {
                for(ri = -1, cmp = 0; ++ri < bl;)if (b[ri] != r[ri]) {
                    cmp = b[ri] > r[ri] ? 1 : -1;
                    break;
                }
            }
            // If divisor < remainder, subtract divisor from remainder.
            if (cmp < 0) {
                // Remainder can't be more than 1 digit longer than divisor.
                // Equalise lengths using divisor with extra leading zero?
                for(bt = rl == bl ? b : bz; rl;){
                    if (r[--rl] < bt[rl]) {
                        ri = rl;
                        for(; ri && !r[--ri];)r[ri] = 9;
                        --r[ri];
                        r[rl] += 10;
                    }
                    r[rl] -= bt[rl];
                }
                for(; !r[0];)r.shift();
            } else break;
        }
        // Add the digit n to the result array.
        qc[qi++] = cmp ? n : ++n;
        // Update the remainder.
        if (r[0] && cmp) r[rl] = a[ai] || 0;
        else r = [
            a[ai]
        ];
    }while (((ai++) < al || r[0] !== $709497f03c873a62$var$UNDEFINED) && k--)
    // Leading zero? Do not remove if result is simply zero (qi == 1).
    if (!qc[0] && qi != 1) {
        // There can't be more than one zero.
        qc.shift();
        q.e--;
        p--;
    }
    // Round?
    if (qi > p) $709497f03c873a62$var$round(q, p, $709497f03c873a62$export$721faf8597f6f672.RM, r[0] !== $709497f03c873a62$var$UNDEFINED);
    return q;
};
/*
 * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
 */ $709497f03c873a62$var$P.eq = function(y) {
    return this.cmp(y) === 0;
};
/*
 * Return true if the value of this Big is greater than the value of Big y, otherwise return
 * false.
 */ $709497f03c873a62$var$P.gt = function(y) {
    return this.cmp(y) > 0;
};
/*
 * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
 * return false.
 */ $709497f03c873a62$var$P.gte = function(y) {
    return this.cmp(y) > -1;
};
/*
 * Return true if the value of this Big is less than the value of Big y, otherwise return false.
 */ $709497f03c873a62$var$P.lt = function(y) {
    return this.cmp(y) < 0;
};
/*
 * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
 * return false.
 */ $709497f03c873a62$var$P.lte = function(y) {
    return this.cmp(y) < 1;
};
/*
 * Return a new Big whose value is the value of this Big minus the value of Big y.
 */ $709497f03c873a62$var$P.minus = $709497f03c873a62$var$P.sub = function(y) {
    var i, j, t, xlty, $709497f03c873a62$export$721faf8597f6f672 = this.constructor, x = new $709497f03c873a62$export$721faf8597f6f672(this), y = new $709497f03c873a62$export$721faf8597f6f672(y), a = x.s, b = y.s;
    // Signs differ?
    if (a != b) {
        y.s = -b;
        return x.plus(y);
    }
    var xc = x.c.slice(), xe = x.e, yc = y.c, ye = y.e;
    // Either zero?
    if (!xc[0] || !yc[0]) {
        if (yc[0]) y.s = -b;
        else if (xc[0]) y = new $709497f03c873a62$export$721faf8597f6f672(x);
        else y.s = 1;
        return y;
    }
    // Determine which is the bigger number. Prepend zeros to equalise exponents.
    if (a = xe - ye) {
        if (xlty = a < 0) {
            a = -a;
            t = xc;
        } else {
            ye = xe;
            t = yc;
        }
        t.reverse();
        for(b = a; b--;)t.push(0);
        t.reverse();
    } else {
        // Exponents equal. Check digit by digit.
        j = ((xlty = xc.length < yc.length) ? xc : yc).length;
        for(a = b = 0; b < j; b++)if (xc[b] != yc[b]) {
            xlty = xc[b] < yc[b];
            break;
        }
    }
    // x < y? Point xc to the array of the bigger number.
    if (xlty) {
        t = xc;
        xc = yc;
        yc = t;
        y.s = -y.s;
    }
    /*
     * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
     * needs to start at yc.length.
     */ if ((b = (j = yc.length) - (i = xc.length)) > 0) for(; b--;)xc[i++] = 0;
    // Subtract yc from xc.
    for(b = i; j > a;){
        if (xc[--j] < yc[j]) {
            for(i = j; i && !xc[--i];)xc[i] = 9;
            --xc[i];
            xc[j] += 10;
        }
        xc[j] -= yc[j];
    }
    // Remove trailing zeros.
    for(; xc[--b] === 0;)xc.pop();
    // Remove leading zeros and adjust exponent accordingly.
    for(; xc[0] === 0;){
        xc.shift();
        --ye;
    }
    if (!xc[0]) {
        // n - n = +0
        y.s = 1;
        // Result must be zero.
        xc = [
            ye = 0
        ];
    }
    y.c = xc;
    y.e = ye;
    return y;
};
/*
 * Return a new Big whose value is the value of this Big modulo the value of Big y.
 */ $709497f03c873a62$var$P.mod = function(y) {
    var ygtx, $709497f03c873a62$export$721faf8597f6f672 = this.constructor, x = new $709497f03c873a62$export$721faf8597f6f672(this), y = new $709497f03c873a62$export$721faf8597f6f672(y), a = x.s, b = y.s;
    if (!y.c[0]) throw Error($709497f03c873a62$var$DIV_BY_ZERO);
    x.s = y.s = 1;
    ygtx = y.cmp(x) == 1;
    x.s = a;
    y.s = b;
    if (ygtx) return new $709497f03c873a62$export$721faf8597f6f672(x);
    a = $709497f03c873a62$export$721faf8597f6f672.DP;
    b = $709497f03c873a62$export$721faf8597f6f672.RM;
    $709497f03c873a62$export$721faf8597f6f672.DP = $709497f03c873a62$export$721faf8597f6f672.RM = 0;
    x = x.div(y);
    $709497f03c873a62$export$721faf8597f6f672.DP = a;
    $709497f03c873a62$export$721faf8597f6f672.RM = b;
    return this.minus(x.times(y));
};
/*
 * Return a new Big whose value is the value of this Big plus the value of Big y.
 */ $709497f03c873a62$var$P.plus = $709497f03c873a62$var$P.add = function(y) {
    var e, k, t, $709497f03c873a62$export$721faf8597f6f672 = this.constructor, x = new $709497f03c873a62$export$721faf8597f6f672(this), y = new $709497f03c873a62$export$721faf8597f6f672(y);
    // Signs differ?
    if (x.s != y.s) {
        y.s = -y.s;
        return x.minus(y);
    }
    var xe = x.e, xc = x.c, ye = y.e, yc = y.c;
    // Either zero?
    if (!xc[0] || !yc[0]) {
        if (!yc[0]) {
            if (xc[0]) y = new $709497f03c873a62$export$721faf8597f6f672(x);
            else y.s = x.s;
        }
        return y;
    }
    xc = xc.slice();
    // Prepend zeros to equalise exponents.
    // Note: reverse faster than unshifts.
    if (e = xe - ye) {
        if (e > 0) {
            ye = xe;
            t = yc;
        } else {
            e = -e;
            t = xc;
        }
        t.reverse();
        for(; e--;)t.push(0);
        t.reverse();
    }
    // Point xc to the longer array.
    if (xc.length - yc.length < 0) {
        t = yc;
        yc = xc;
        xc = t;
    }
    e = yc.length;
    // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
    for(k = 0; e; xc[e] %= 10)k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0;
    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    if (k) {
        xc.unshift(k);
        ++ye;
    }
    // Remove trailing zeros.
    for(e = xc.length; xc[--e] === 0;)xc.pop();
    y.c = xc;
    y.e = ye;
    return y;
};
/*
 * Return a Big whose value is the value of this Big raised to the power n.
 * If n is negative, round to a maximum of Big.DP decimal places using rounding
 * mode Big.RM.
 *
 * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
 */ $709497f03c873a62$var$P.pow = function(n) {
    var $709497f03c873a62$export$721faf8597f6f672 = this.constructor, x = new $709497f03c873a62$export$721faf8597f6f672(this), y = new $709497f03c873a62$export$721faf8597f6f672('1'), one = new $709497f03c873a62$export$721faf8597f6f672('1'), isneg = n < 0;
    if (n !== ~~n || n < -$709497f03c873a62$var$MAX_POWER || n > $709497f03c873a62$var$MAX_POWER) throw Error($709497f03c873a62$var$INVALID + 'exponent');
    if (isneg) n = -n;
    for(;;){
        if (n & 1) y = y.times(x);
        n >>= 1;
        if (!n) break;
        x = x.times(x);
    }
    return isneg ? one.div(y) : y;
};
/*
 * Return a new Big whose value is the value of this Big rounded to a maximum precision of sd
 * significant digits using rounding mode rm, or Big.RM if rm is not specified.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */ $709497f03c873a62$var$P.prec = function(sd, rm) {
    if (sd !== ~~sd || sd < 1 || sd > $709497f03c873a62$var$MAX_DP) throw Error($709497f03c873a62$var$INVALID + 'precision');
    return $709497f03c873a62$var$round(new this.constructor(this), sd, rm);
};
/*
 * Return a new Big whose value is the value of this Big rounded to a maximum of dp decimal places
 * using rounding mode rm, or Big.RM if rm is not specified.
 * If dp is negative, round to an integer which is a multiple of 10**-dp.
 * If dp is not specified, round to 0 decimal places.
 *
 * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */ $709497f03c873a62$var$P.round = function(dp, rm) {
    if (dp === $709497f03c873a62$var$UNDEFINED) dp = 0;
    else if (dp !== ~~dp || dp < -$709497f03c873a62$var$MAX_DP || dp > $709497f03c873a62$var$MAX_DP) throw Error($709497f03c873a62$var$INVALID_DP);
    return $709497f03c873a62$var$round(new this.constructor(this), dp + this.e + 1, rm);
};
/*
 * Return a new Big whose value is the square root of the value of this Big, rounded, if
 * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */ $709497f03c873a62$var$P.sqrt = function() {
    var r, c, t, $709497f03c873a62$export$721faf8597f6f672 = this.constructor, x = new $709497f03c873a62$export$721faf8597f6f672(this), s = x.s, e = x.e, half = new $709497f03c873a62$export$721faf8597f6f672('0.5');
    // Zero?
    if (!x.c[0]) return new $709497f03c873a62$export$721faf8597f6f672(x);
    // Negative?
    if (s < 0) throw Error($709497f03c873a62$var$NAME + 'No square root');
    // Estimate.
    s = Math.sqrt(x + '');
    // Math.sqrt underflow/overflow?
    // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
    if (s === 0 || s === 1 / 0) {
        c = x.c.join('');
        if (!(c.length + e & 1)) c += '0';
        s = Math.sqrt(c);
        e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
        r = new $709497f03c873a62$export$721faf8597f6f672((s == 1 / 0 ? '5e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
    } else r = new $709497f03c873a62$export$721faf8597f6f672(s + '');
    e = r.e + ($709497f03c873a62$export$721faf8597f6f672.DP += 4);
    // Newton-Raphson iteration.
    do {
        t = r;
        r = half.times(t.plus(x.div(t)));
    }while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''))
    return $709497f03c873a62$var$round(r, ($709497f03c873a62$export$721faf8597f6f672.DP -= 4) + r.e + 1, $709497f03c873a62$export$721faf8597f6f672.RM);
};
/*
 * Return a new Big whose value is the value of this Big times the value of Big y.
 */ $709497f03c873a62$var$P.times = $709497f03c873a62$var$P.mul = function(y) {
    var c, $709497f03c873a62$export$721faf8597f6f672 = this.constructor, x = new $709497f03c873a62$export$721faf8597f6f672(this), y = new $709497f03c873a62$export$721faf8597f6f672(y), xc = x.c, yc = y.c, a = xc.length, b = yc.length, i = x.e, j = y.e;
    // Determine sign of result.
    y.s = x.s == y.s ? 1 : -1;
    // Return signed 0 if either 0.
    if (!xc[0] || !yc[0]) {
        y.c = [
            y.e = 0
        ];
        return y;
    }
    // Initialise exponent of result as x.e + y.e.
    y.e = i + j;
    // If array xc has fewer digits than yc, swap xc and yc, and lengths.
    if (a < b) {
        c = xc;
        xc = yc;
        yc = c;
        j = a;
        a = b;
        b = j;
    }
    // Initialise coefficient array of result with zeros.
    for(c = new Array(j = a + b); j--;)c[j] = 0;
    // Multiply.
    // i is initially xc.length.
    for(i = b; i--;){
        b = 0;
        // a is yc.length.
        for(j = a + i; j > i;){
            // Current sum of products at this digit position, plus carry.
            b = c[j] + yc[i] * xc[j - i - 1] + b;
            c[j--] = b % 10;
            // carry
            b = b / 10 | 0;
        }
        c[j] = b;
    }
    // Increment result exponent if there is a final carry, otherwise remove leading zero.
    if (b) ++y.e;
    else c.shift();
    // Remove trailing zeros.
    for(i = c.length; !c[--i];)c.pop();
    y.c = c;
    return y;
};
/*
 * Return a string representing the value of this Big in exponential notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */ $709497f03c873a62$var$P.toExponential = function(dp, rm) {
    var x = this, n = x.c[0];
    if (dp !== $709497f03c873a62$var$UNDEFINED) {
        if (dp !== ~~dp || dp < 0 || dp > $709497f03c873a62$var$MAX_DP) throw Error($709497f03c873a62$var$INVALID_DP);
        x = $709497f03c873a62$var$round(new x.constructor(x), ++dp, rm);
        for(; x.c.length < dp;)x.c.push(0);
    }
    return $709497f03c873a62$var$stringify(x, true, !!n);
};
/*
 * Return a string representing the value of this Big in normal notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 */ $709497f03c873a62$var$P.toFixed = function(dp, rm) {
    var x = this, n = x.c[0];
    if (dp !== $709497f03c873a62$var$UNDEFINED) {
        if (dp !== ~~dp || dp < 0 || dp > $709497f03c873a62$var$MAX_DP) throw Error($709497f03c873a62$var$INVALID_DP);
        x = $709497f03c873a62$var$round(new x.constructor(x), dp + x.e + 1, rm);
        // x.e may have changed if the value is rounded up.
        for(dp = dp + x.e + 1; x.c.length < dp;)x.c.push(0);
    }
    return $709497f03c873a62$var$stringify(x, false, !!n);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Omit the sign for negative zero.
 */ $709497f03c873a62$var$P.toJSON = $709497f03c873a62$var$P.toString = function() {
    var x = this, $709497f03c873a62$export$721faf8597f6f672 = x.constructor;
    return $709497f03c873a62$var$stringify(x, x.e <= $709497f03c873a62$export$721faf8597f6f672.NE || x.e >= $709497f03c873a62$export$721faf8597f6f672.PE, !!x.c[0]);
};
/*
 * Return the value of this Big as a primitve number.
 */ $709497f03c873a62$var$P.toNumber = function() {
    var n = Number($709497f03c873a62$var$stringify(this, true, true));
    if (this.constructor.strict === true && !this.eq(n.toString())) throw Error($709497f03c873a62$var$NAME + 'Imprecise conversion');
    return n;
};
/*
 * Return a string representing the value of this Big rounded to sd significant digits using
 * rounding mode rm, or Big.RM if rm is not specified.
 * Use exponential notation if sd is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */ $709497f03c873a62$var$P.toPrecision = function(sd, rm) {
    var x = this, $709497f03c873a62$export$721faf8597f6f672 = x.constructor, n = x.c[0];
    if (sd !== $709497f03c873a62$var$UNDEFINED) {
        if (sd !== ~~sd || sd < 1 || sd > $709497f03c873a62$var$MAX_DP) throw Error($709497f03c873a62$var$INVALID + 'precision');
        x = $709497f03c873a62$var$round(new $709497f03c873a62$export$721faf8597f6f672(x), sd, rm);
        for(; x.c.length < sd;)x.c.push(0);
    }
    return $709497f03c873a62$var$stringify(x, sd <= x.e || x.e <= $709497f03c873a62$export$721faf8597f6f672.NE || x.e >= $709497f03c873a62$export$721faf8597f6f672.PE, !!n);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Include the sign for negative zero.
 */ $709497f03c873a62$var$P.valueOf = function() {
    var x = this, $709497f03c873a62$export$721faf8597f6f672 = x.constructor;
    if ($709497f03c873a62$export$721faf8597f6f672.strict === true) throw Error($709497f03c873a62$var$NAME + 'valueOf disallowed');
    return $709497f03c873a62$var$stringify(x, x.e <= $709497f03c873a62$export$721faf8597f6f672.NE || x.e >= $709497f03c873a62$export$721faf8597f6f672.PE, true);
};
var $709497f03c873a62$export$721faf8597f6f672 = $709497f03c873a62$var$_Big_();
var /// <reference types="https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/big.js/index.d.ts" />
$709497f03c873a62$export$2e2bcd8739ae039 = $709497f03c873a62$export$721faf8597f6f672;



var $1899f7f029760344$export$2e2bcd8739ae039 = $709497f03c873a62$export$2e2bcd8739ae039;
const $1899f7f029760344$export$1a6223d840786ec0 = new $709497f03c873a62$export$2e2bcd8739ae039(0);
const $1899f7f029760344$export$ae43249cd38c8649 = new $709497f03c873a62$export$2e2bcd8739ae039(1);
const $1899f7f029760344$export$75e2aaa55d56b95a = new $709497f03c873a62$export$2e2bcd8739ae039(-1);
const $1899f7f029760344$export$67edc40118395795 = new $709497f03c873a62$export$2e2bcd8739ae039("79228162514264337593543950335");
const $1899f7f029760344$export$8ebb19e07f98fc82 = new $709497f03c873a62$export$2e2bcd8739ae039("-79228162514264337593543950335");
function $1899f7f029760344$export$398604a469f7de9a(x, y) {
    return x.cmp(y);
}
function $1899f7f029760344$export$e9bab7fafb253603(x, y) {
    return !x.cmp(y);
}
function $1899f7f029760344$export$2335f513bbd82c6d(x) {
    return x.abs();
}
function $1899f7f029760344$export$2077e0241d6afd3c(x, digits = 0) {
    return x.round(digits, 2 /* ROUND_HALF_EVEN */ );
}
function $1899f7f029760344$export$6a506b36fdea397d(x) {
    return x.round(0, 0 /* ROUND_DOWN */ );
}
function $1899f7f029760344$export$1d7d6ea1b95b29ae(x) {
    return x.round(0, x.cmp(0) >= 0 ? 3 /* ROUND_UP */  : 0 /* ROUND_DOWN */ );
}
function $1899f7f029760344$export$a3fe094919f356fd(x) {
    return x.round(0, x.cmp(0) >= 0 ? 0 /* ROUND_DOWN */  : 3 /* ROUND_UP */ );
}
function $1899f7f029760344$export$9c297f60e22e3389(x, n) {
    return x.pow(n);
}
function $1899f7f029760344$export$eba8049fb5020b81(x) {
    return x.sqrt();
}
function $1899f7f029760344$export$a5fb1fdca49990a(x, y) {
    return x.add(y);
}
function $1899f7f029760344$export$1ba572a54983744c(x, y) {
    return x.sub(y);
}
function $1899f7f029760344$export$bef948e98114a357(x, y) {
    return x.mul(y);
}
function $1899f7f029760344$export$a6e41fbebc04a9a6(x, y) {
    return x.div(y);
}
function $1899f7f029760344$export$ded19a969d94df2c(x, y) {
    return x.mod(y);
}
function $1899f7f029760344$export$816012df0c0b827b(x) {
    const x2 = new $709497f03c873a62$export$2e2bcd8739ae039(x);
    x2.s = -x2.s || 0;
    return x2;
}
const $1899f7f029760344$export$e16d8520af44a096 = $1899f7f029760344$export$a5fb1fdca49990a;
const $1899f7f029760344$export$4e2d2ead65e5f7e3 = $1899f7f029760344$export$1ba572a54983744c;
const $1899f7f029760344$export$2060d2db72cce88f = $1899f7f029760344$export$bef948e98114a357;
const $1899f7f029760344$export$cd007d971a5a2143 = $1899f7f029760344$export$a6e41fbebc04a9a6;
const $1899f7f029760344$export$159037f780d3415c = $1899f7f029760344$export$ded19a969d94df2c;
const $1899f7f029760344$export$aef51622e549b8b0 = $1899f7f029760344$export$816012df0c0b827b;
function $1899f7f029760344$export$f84e8e69fd4488a5(x) {
    return x.toString();
}
function $1899f7f029760344$export$468ff95b83d315e5(str, defValue) {
    try {
        defValue.contents = new $709497f03c873a62$export$2e2bcd8739ae039(str.trim());
        return true;
    } catch (_a) {
        return false;
    }
}
function $1899f7f029760344$export$98e6a39c04603d36(str) {
    const defValue = new $ae70510fbd2502e5$export$be150d1a3c7e94fe($1899f7f029760344$export$1a6223d840786ec0);
    if ($1899f7f029760344$export$468ff95b83d315e5(str, defValue)) return defValue.contents;
    else throw new Error("Input string was not in a correct format.");
}
function $1899f7f029760344$export$a0a81dc3380ce7d3(x) {
    return +x;
}
function $1899f7f029760344$var$decimalToHex(dec, bitSize) {
    const hex = new Uint8Array(bitSize / 4 | 0);
    let hexCount = 1;
    for(let d = 0; d < dec.length; d++){
        let value = dec[d];
        for(let i = 0; i < hexCount; i++){
            const digit = hex[i] * 10 + value | 0;
            hex[i] = digit & 15;
            value = digit >> 4;
        }
        if (value !== 0) hex[hexCount++] = value;
    }
    return hex.slice(0, hexCount); // digits in reverse order
}
function $1899f7f029760344$var$hexToDecimal(hex, bitSize) {
    const dec = new Uint8Array(bitSize * 301 / 1000 + 1 | 0);
    let decCount = 1;
    for(let d = hex.length - 1; d >= 0; d--){
        let carry = hex[d];
        for(let i = 0; i < decCount; i++){
            const val = dec[i] * 16 + carry | 0;
            dec[i] = val % 10 | 0;
            carry = val / 10 | 0;
        }
        while(carry > 0){
            dec[decCount++] = carry % 10 | 0;
            carry = carry / 10 | 0;
        }
    }
    return dec.slice(0, decCount); // digits in reverse order
}
function $1899f7f029760344$var$setInt32Bits(hexDigits, bits, offset) {
    for(let i = 0; i < 8; i++)hexDigits[offset + i] = bits >> i * 4 & 15;
}
function $1899f7f029760344$var$getInt32Bits(hexDigits, offset) {
    let bits = 0;
    for(let i = 0; i < 8; i++)bits = bits | hexDigits[offset + i] << i * 4;
    return bits;
}
function $1899f7f029760344$export$a2cc8ea05f36c769(bits) {
    return $1899f7f029760344$export$6f511d4f8a01d621(bits[0], bits[1], bits[2], bits[3]);
}
function $1899f7f029760344$export$6f511d4f8a01d621(low, mid, high, signExp) {
    const isNegative = signExp < 0;
    const scale = signExp >> 16 & 127;
    return $1899f7f029760344$export$4ce09b63b66aecc9(low, mid, high, isNegative, scale);
}
function $1899f7f029760344$export$4ce09b63b66aecc9(low, mid, high, isNegative, scale) {
    const bitSize = 96;
    const hexDigits = new Uint8Array(bitSize / 4);
    $1899f7f029760344$var$setInt32Bits(hexDigits, low, 0);
    $1899f7f029760344$var$setInt32Bits(hexDigits, mid, 8);
    $1899f7f029760344$var$setInt32Bits(hexDigits, high, 16);
    const decDigits = $1899f7f029760344$var$hexToDecimal(hexDigits, bitSize);
    scale = scale & 127;
    const big = new $709497f03c873a62$export$2e2bcd8739ae039(0);
    big.c = Array.from(decDigits.reverse());
    big.e = decDigits.length - scale - 1;
    big.s = isNegative ? -1 : 1;
    const d = new $709497f03c873a62$export$2e2bcd8739ae039(big);
    return d;
}
function $1899f7f029760344$export$afb88973713cb16a(d) {
    const bitSize = 96;
    const decDigits = Uint8Array.from(d.c);
    const hexDigits = $1899f7f029760344$var$decimalToHex(decDigits, bitSize);
    const low = $1899f7f029760344$var$getInt32Bits(hexDigits, 0);
    const mid = $1899f7f029760344$var$getInt32Bits(hexDigits, 8);
    const high = $1899f7f029760344$var$getInt32Bits(hexDigits, 16);
    const decStr = d.toString();
    const dotPos = decStr.indexOf(".");
    const scale = dotPos < 0 ? 0 : decStr.length - dotPos - 1;
    const signExp = (scale & 127) << 16 | (d.s < 0 ? 2147483648 : 0);
    return [
        low,
        mid,
        high,
        signExp
    ];
} // export function makeRangeStepFunction(step: Decimal, last: Decimal) {
 //   const stepComparedWithZero = step.cmp(get_Zero);
 //   if (stepComparedWithZero === 0) {
 //     throw new Error("The step of a range cannot be zero");
 //   }
 //   const stepGreaterThanZero = stepComparedWithZero > 0;
 //   return (x: Decimal) => {
 //     const comparedWithLast = x.cmp(last);
 //     if ((stepGreaterThanZero && comparedWithLast <= 0)
 //       || (!stepGreaterThanZero && comparedWithLast >= 0)) {
 //       return [x, op_Addition(x, step)];
 //     } else {
 //       return undefined;
 //     }
 //   };
 // }


var $d70d15e757640036$export$2fb4bfa701a7ee12;
(function($d70d15e757640036$export$2fb4bfa701a7ee12) {
    // None = 0x00000000,
    // AllowLeadingWhite = 0x00000001,
    // AllowTrailingWhite = 0x00000002,
    // AllowLeadingSign = 0x00000004,
    // AllowTrailingSign = 0x00000008,
    // AllowParentheses = 0x00000010,
    // AllowDecimalPoint = 0x00000020,
    // AllowThousands = 0x00000040,
    // AllowExponent = 0x00000080,
    // AllowCurrencySymbol = 0x00000100,
    $d70d15e757640036$export$2fb4bfa701a7ee12[$d70d15e757640036$export$2fb4bfa701a7ee12["AllowHexSpecifier"] = 512] = "AllowHexSpecifier";
// Integer = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign,
// HexNumber = AllowLeadingWhite | AllowTrailingWhite | AllowHexSpecifier,
// Number = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign |
//          AllowTrailingSign | AllowDecimalPoint | AllowThousands,
// Float = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign |
//         AllowDecimalPoint | AllowExponent,
// Currency = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign | AllowTrailingSign |
//            AllowParentheses | AllowDecimalPoint | AllowThousands | AllowCurrencySymbol,
// Any = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign | AllowTrailingSign |
//       AllowParentheses | AllowDecimalPoint | AllowThousands | AllowCurrencySymbol | AllowExponent,
})($d70d15e757640036$export$2fb4bfa701a7ee12 || ($d70d15e757640036$export$2fb4bfa701a7ee12 = {
}));
function $d70d15e757640036$var$validResponse(regexMatch, radix) {
    const [, sign, prefix, digits] = regexMatch;
    return {
        sign: sign || "",
        prefix: prefix || "",
        digits: digits,
        radix: radix
    };
}
function $d70d15e757640036$var$getRange(unsigned, bitsize) {
    switch(bitsize){
        case 8:
            return unsigned ? [
                0,
                255
            ] : [
                -128,
                127
            ];
        case 16:
            return unsigned ? [
                0,
                65535
            ] : [
                -32768,
                32767
            ];
        case 32:
            return unsigned ? [
                0,
                4294967295
            ] : [
                -2147483648,
                2147483647
            ];
        default:
            throw new Error("Invalid bit size.");
    }
}
function $d70d15e757640036$var$getInvalidDigits(radix) {
    switch(radix){
        case 2:
            return /[^0-1]/;
        case 8:
            return /[^0-7]/;
        case 10:
            return /[^0-9]/;
        case 16:
            return /[^0-9a-fA-F]/;
        default:
            throw new Error("Invalid Base.");
    }
}
function $d70d15e757640036$var$getRadix(prefix, style) {
    if (style & $d70d15e757640036$export$2fb4bfa701a7ee12.AllowHexSpecifier) return 16;
    else switch(prefix){
        case "0b":
        case "0B":
            return 2;
        case "0o":
        case "0O":
            return 8;
        case "0x":
        case "0X":
            return 16;
        default:
            return 10;
    }
}
function $d70d15e757640036$export$1ea939691cdc45b8(str, style, radix) {
    const integerRegex = /^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/;
    const res = integerRegex.exec(str.replace(/_/g, ""));
    if (res != null) {
        const [, , prefix, digits] = res;
        radix = radix || $d70d15e757640036$var$getRadix(prefix, style);
        const invalidDigits = $d70d15e757640036$var$getInvalidDigits(radix);
        if (!invalidDigits.test(digits)) return $d70d15e757640036$var$validResponse(res, radix);
    }
    return null;
}
function $d70d15e757640036$export$98e6a39c04603d36(str, style, unsigned, bitsize, radix) {
    const res = $d70d15e757640036$export$1ea939691cdc45b8(str, style, radix);
    if (res != null) {
        let v = Number.parseInt(res.sign + res.digits, res.radix);
        if (!Number.isNaN(v)) {
            const [umin, umax] = $d70d15e757640036$var$getRange(true, bitsize);
            if (!unsigned && res.radix !== 10 && v >= umin && v <= umax) v = v << 32 - bitsize >> 32 - bitsize;
            const [min, max] = $d70d15e757640036$var$getRange(unsigned, bitsize);
            if (v >= min && v <= max) return v;
        }
    }
    throw new Error("Input string was not in a correct format.");
}
function $d70d15e757640036$export$468ff95b83d315e5(str, style, unsigned, bitsize, defValue) {
    try {
        defValue.contents = $d70d15e757640036$export$98e6a39c04603d36(str, style, unsigned, bitsize);
        return true;
    } catch (_a) {
        return false;
    }
}
function $d70d15e757640036$export$4cbff5ef24614dc7(x) {
    return x === -128 ? x : -x;
}
function $d70d15e757640036$export$9b736586c807d703(x) {
    return x === -32768 ? x : -x;
}
function $d70d15e757640036$export$87c665ad90b41cb3(x) {
    return x === -2147483648 ? x : -x;
}
function $d70d15e757640036$export$9edaf4efe6390181(x, y, out) {
    const div = ~~(x / y);
    const rem = x % y;
    if (out != null) {
        out.contents = rem;
        return div;
    } else return [
        div,
        rem
    ];
}


var $103c256fb9c18a8e$exports = {};

$parcel$export($103c256fb9c18a8e$exports, "Long", () => $103c256fb9c18a8e$export$12ac1d26449d9c2e, (v) => $103c256fb9c18a8e$export$12ac1d26449d9c2e = v);
$parcel$export($103c256fb9c18a8e$exports, "equals", () => $103c256fb9c18a8e$export$e9bab7fafb253603, (v) => $103c256fb9c18a8e$export$e9bab7fafb253603 = v);
$parcel$export($103c256fb9c18a8e$exports, "compare", () => $103c256fb9c18a8e$export$398604a469f7de9a, (v) => $103c256fb9c18a8e$export$398604a469f7de9a = v);
$parcel$export($103c256fb9c18a8e$exports, "toString", () => $103c256fb9c18a8e$export$f84e8e69fd4488a5, (v) => $103c256fb9c18a8e$export$f84e8e69fd4488a5 = v);
$parcel$export($103c256fb9c18a8e$exports, "multiply", () => $103c256fb9c18a8e$export$2060d2db72cce88f, (v) => $103c256fb9c18a8e$export$2060d2db72cce88f = v);
$parcel$export($103c256fb9c18a8e$exports, "fromBytes", () => $103c256fb9c18a8e$export$de2da3025c30316c, (v) => $103c256fb9c18a8e$export$de2da3025c30316c = v);
$parcel$export($103c256fb9c18a8e$exports, "toBytes", () => $103c256fb9c18a8e$export$30a71edf0753ed6b, (v) => $103c256fb9c18a8e$export$30a71edf0753ed6b = v);
$parcel$export($103c256fb9c18a8e$exports, "fromInt", () => $103c256fb9c18a8e$export$62ffe363f1b08494, (v) => $103c256fb9c18a8e$export$62ffe363f1b08494 = v);
$parcel$export($103c256fb9c18a8e$exports, "fromBits", () => $103c256fb9c18a8e$export$af782817a0bb622d, (v) => $103c256fb9c18a8e$export$af782817a0bb622d = v);
$parcel$export($103c256fb9c18a8e$exports, "fromNumber", () => $103c256fb9c18a8e$export$7bbb4164c9a77bc2, (v) => $103c256fb9c18a8e$export$7bbb4164c9a77bc2 = v);
$parcel$export($103c256fb9c18a8e$exports, "ZERO", () => $103c256fb9c18a8e$export$2a1795c9359f92b9, (v) => $103c256fb9c18a8e$export$2a1795c9359f92b9 = v);
$parcel$export($103c256fb9c18a8e$exports, "negate", () => $103c256fb9c18a8e$export$aef51622e549b8b0, (v) => $103c256fb9c18a8e$export$aef51622e549b8b0 = v);
$parcel$export($103c256fb9c18a8e$exports, "fromString", () => $103c256fb9c18a8e$export$3004f64547af360e, (v) => $103c256fb9c18a8e$export$3004f64547af360e = v);
$parcel$export($103c256fb9c18a8e$exports, "add", () => $103c256fb9c18a8e$export$e16d8520af44a096, (v) => $103c256fb9c18a8e$export$e16d8520af44a096 = v);
$parcel$export($103c256fb9c18a8e$exports, "fromValue", () => $103c256fb9c18a8e$export$5f36b26c3833b3ba, (v) => $103c256fb9c18a8e$export$5f36b26c3833b3ba = v);
$parcel$export($103c256fb9c18a8e$exports, "ONE", () => $103c256fb9c18a8e$export$30f1bb5a4a4a5467, (v) => $103c256fb9c18a8e$export$30f1bb5a4a4a5467 = v);
$parcel$export($103c256fb9c18a8e$exports, "toInt", () => $103c256fb9c18a8e$export$e7a1baa2fae31f0f, (v) => $103c256fb9c18a8e$export$e7a1baa2fae31f0f = v);
$parcel$export($103c256fb9c18a8e$exports, "toNumber", () => $103c256fb9c18a8e$export$a0a81dc3380ce7d3, (v) => $103c256fb9c18a8e$export$a0a81dc3380ce7d3 = v);
$parcel$export($103c256fb9c18a8e$exports, "isNegative", () => $103c256fb9c18a8e$export$d0909a4f38b5c4d0, (v) => $103c256fb9c18a8e$export$d0909a4f38b5c4d0 = v);
$parcel$export($103c256fb9c18a8e$exports, "divide", () => $103c256fb9c18a8e$export$cd007d971a5a2143, (v) => $103c256fb9c18a8e$export$cd007d971a5a2143 = v);
$parcel$export($103c256fb9c18a8e$exports, "subtract", () => $103c256fb9c18a8e$export$4e2d2ead65e5f7e3, (v) => $103c256fb9c18a8e$export$4e2d2ead65e5f7e3 = v);
$parcel$export($103c256fb9c18a8e$exports, "getHighBits", () => $103c256fb9c18a8e$export$c8eeef792e5e2eee, (v) => $103c256fb9c18a8e$export$c8eeef792e5e2eee = v);
$parcel$export($103c256fb9c18a8e$exports, "getHighBitsUnsigned", () => $103c256fb9c18a8e$export$7a2febf4c9a31fb2, (v) => $103c256fb9c18a8e$export$7a2febf4c9a31fb2 = v);
$parcel$export($103c256fb9c18a8e$exports, "getLowBits", () => $103c256fb9c18a8e$export$4a10214d6ebc19b0, (v) => $103c256fb9c18a8e$export$4a10214d6ebc19b0 = v);
$parcel$export($103c256fb9c18a8e$exports, "getLowBitsUnsigned", () => $103c256fb9c18a8e$export$4c488f0e2ac21b03, (v) => $103c256fb9c18a8e$export$4c488f0e2ac21b03 = v);
$parcel$export($103c256fb9c18a8e$exports, "notEquals", () => $103c256fb9c18a8e$export$e72580e7aad6105c, (v) => $103c256fb9c18a8e$export$e72580e7aad6105c = v);
$parcel$export($103c256fb9c18a8e$exports, "lessThan", () => $103c256fb9c18a8e$export$9b050841a3a1b328, (v) => $103c256fb9c18a8e$export$9b050841a3a1b328 = v);
$parcel$export($103c256fb9c18a8e$exports, "lessThanOrEqual", () => $103c256fb9c18a8e$export$52dc2ecba809cb1a, (v) => $103c256fb9c18a8e$export$52dc2ecba809cb1a = v);
$parcel$export($103c256fb9c18a8e$exports, "greaterThan", () => $103c256fb9c18a8e$export$f517ea36c68d4644, (v) => $103c256fb9c18a8e$export$f517ea36c68d4644 = v);
$parcel$export($103c256fb9c18a8e$exports, "greaterThanOrEqual", () => $103c256fb9c18a8e$export$1d972cf4acc123bd, (v) => $103c256fb9c18a8e$export$1d972cf4acc123bd = v);
$parcel$export($103c256fb9c18a8e$exports, "not", () => $103c256fb9c18a8e$export$6003a5f097c73977, (v) => $103c256fb9c18a8e$export$6003a5f097c73977 = v);
$parcel$export($103c256fb9c18a8e$exports, "shiftRight", () => $103c256fb9c18a8e$export$86c449e29266e58a, (v) => $103c256fb9c18a8e$export$86c449e29266e58a = v);
$parcel$export($103c256fb9c18a8e$exports, "shiftLeft", () => $103c256fb9c18a8e$export$f613292be21d0bc3, (v) => $103c256fb9c18a8e$export$f613292be21d0bc3 = v);
$parcel$export($103c256fb9c18a8e$exports, "shiftRightUnsigned", () => $103c256fb9c18a8e$export$fd2d1dabe2e60497, (v) => $103c256fb9c18a8e$export$fd2d1dabe2e60497 = v);
$parcel$export($103c256fb9c18a8e$exports, "modulo", () => $103c256fb9c18a8e$export$ba467bec01d66def, (v) => $103c256fb9c18a8e$export$ba467bec01d66def = v);
$parcel$export($103c256fb9c18a8e$exports, "and", () => $103c256fb9c18a8e$export$21c0ac7fe1cef1b8, (v) => $103c256fb9c18a8e$export$21c0ac7fe1cef1b8 = v);
$parcel$export($103c256fb9c18a8e$exports, "or", () => $103c256fb9c18a8e$export$252bb8b3bbdf6749, (v) => $103c256fb9c18a8e$export$252bb8b3bbdf6749 = v);
$parcel$export($103c256fb9c18a8e$exports, "xor", () => $103c256fb9c18a8e$export$6444ef5cd411280c, (v) => $103c256fb9c18a8e$export$6444ef5cd411280c = v);

/**
 * wasm optimizations, to do native i64 multiplication and divide
 */ var $103c256fb9c18a8e$var$wasm = null;
try {
    $103c256fb9c18a8e$var$wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
        0,
        97,
        115,
        109,
        1,
        0,
        0,
        0,
        1,
        13,
        2,
        96,
        0,
        1,
        127,
        96,
        4,
        127,
        127,
        127,
        127,
        1,
        127,
        3,
        7,
        6,
        0,
        1,
        1,
        1,
        1,
        1,
        6,
        6,
        1,
        127,
        1,
        65,
        0,
        11,
        7,
        50,
        6,
        3,
        109,
        117,
        108,
        0,
        1,
        5,
        100,
        105,
        118,
        95,
        115,
        0,
        2,
        5,
        100,
        105,
        118,
        95,
        117,
        0,
        3,
        5,
        114,
        101,
        109,
        95,
        115,
        0,
        4,
        5,
        114,
        101,
        109,
        95,
        117,
        0,
        5,
        8,
        103,
        101,
        116,
        95,
        104,
        105,
        103,
        104,
        0,
        0,
        10,
        191,
        1,
        6,
        4,
        0,
        35,
        0,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        126,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        127,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        128,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        129,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        130,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11
    ])), {
    }).exports;
} catch (e) {
// no wasm support :(
}
function $103c256fb9c18a8e$export$12ac1d26449d9c2e(low, high, unsigned) {
    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */ this.low = low | 0;
    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */ this.high = high | 0;
    /**
     * Whether unsigned or not.
     * @type {boolean}
     */ this.unsigned = !!unsigned;
}
$103c256fb9c18a8e$export$12ac1d26449d9c2e.prototype.GetHashCode = function() {
    let h1 = this.unsigned ? 1 : 0;
    h1 = (h1 << 5) + h1 ^ this.high;
    h1 = (h1 << 5) + h1 ^ this.low;
    return h1;
};
$103c256fb9c18a8e$export$12ac1d26449d9c2e.prototype.Equals = function(x) {
    return $103c256fb9c18a8e$export$e9bab7fafb253603(this, x);
};
$103c256fb9c18a8e$export$12ac1d26449d9c2e.prototype.CompareTo = function(x) {
    return $103c256fb9c18a8e$export$398604a469f7de9a(this, x);
};
$103c256fb9c18a8e$export$12ac1d26449d9c2e.prototype.toString = function(radix) {
    return $103c256fb9c18a8e$export$f84e8e69fd4488a5(this, radix);
};
$103c256fb9c18a8e$export$12ac1d26449d9c2e.prototype.toJSON = function() {
    return $103c256fb9c18a8e$export$f84e8e69fd4488a5(this);
};
$103c256fb9c18a8e$export$12ac1d26449d9c2e.prototype[$99dffd8ec22d454a$export$8f701197936bc2a6] = function() {
    const x = this;
    return {
        multiply: (y)=>$103c256fb9c18a8e$export$2060d2db72cce88f(x, y)
        ,
        toPrecision: (sd)=>String(x) + 0..toPrecision(sd).substr(1)
        ,
        toExponential: (dp)=>String(x) + 0..toExponential(dp).substr(1)
        ,
        toFixed: (dp)=>String(x) + 0..toFixed(dp).substr(1)
        ,
        toHex: ()=>$103c256fb9c18a8e$export$f84e8e69fd4488a5(x.unsigned ? x : $103c256fb9c18a8e$export$de2da3025c30316c($103c256fb9c18a8e$export$30a71edf0753ed6b(x), true), 16)
    };
};
// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.
/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */ $103c256fb9c18a8e$export$12ac1d26449d9c2e.prototype.__isLong__;
Object.defineProperty($103c256fb9c18a8e$export$12ac1d26449d9c2e.prototype, "__isLong__", {
    value: true
});
function $103c256fb9c18a8e$export$d8c61589c31c4718(obj) {
    return (obj && obj["__isLong__"]) === true;
}
/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */ // Long.isLong = isLong;
/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */ var $103c256fb9c18a8e$var$INT_CACHE = {
};
/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */ var $103c256fb9c18a8e$var$UINT_CACHE = {
};
function $103c256fb9c18a8e$export$62ffe363f1b08494(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = 0 <= value && value < 256) {
            cachedObj = $103c256fb9c18a8e$var$UINT_CACHE[value];
            if (cachedObj) return cachedObj;
        }
        obj = $103c256fb9c18a8e$export$af782817a0bb622d(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache) $103c256fb9c18a8e$var$UINT_CACHE[value] = obj;
        return obj;
    } else {
        value |= 0;
        if (cache = -128 <= value && value < 128) {
            cachedObj = $103c256fb9c18a8e$var$INT_CACHE[value];
            if (cachedObj) return cachedObj;
        }
        obj = $103c256fb9c18a8e$export$af782817a0bb622d(value, value < 0 ? -1 : 0, false);
        if (cache) $103c256fb9c18a8e$var$INT_CACHE[value] = obj;
        return obj;
    }
}
function $103c256fb9c18a8e$export$7bbb4164c9a77bc2(value, unsigned) {
    if (isNaN(value)) return unsigned ? $103c256fb9c18a8e$export$e35e43f82f36d912 : $103c256fb9c18a8e$export$2a1795c9359f92b9;
    if (unsigned) {
        if (value < 0) return $103c256fb9c18a8e$export$e35e43f82f36d912;
        if (value >= $103c256fb9c18a8e$var$TWO_PWR_64_DBL) return $103c256fb9c18a8e$export$ece7599f9193150b;
    } else {
        if (value <= -$103c256fb9c18a8e$var$TWO_PWR_63_DBL) return $103c256fb9c18a8e$export$10e1f42189ea83da;
        if (value + 1 >= $103c256fb9c18a8e$var$TWO_PWR_63_DBL) return $103c256fb9c18a8e$export$e5fd331eb7ecbb12;
    }
    if (value < 0) return $103c256fb9c18a8e$export$aef51622e549b8b0($103c256fb9c18a8e$export$7bbb4164c9a77bc2(-value, unsigned));
    return $103c256fb9c18a8e$export$af782817a0bb622d(value % $103c256fb9c18a8e$var$TWO_PWR_32_DBL | 0, value / $103c256fb9c18a8e$var$TWO_PWR_32_DBL | 0, unsigned);
}
function $103c256fb9c18a8e$export$af782817a0bb622d(lowBits, highBits, unsigned) {
    return new $103c256fb9c18a8e$export$12ac1d26449d9c2e(lowBits, highBits, unsigned);
}
/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */ // Long.fromBits = fromBits;
/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */ var $103c256fb9c18a8e$var$pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)
function $103c256fb9c18a8e$export$3004f64547af360e(str, unsigned, radix) {
    if (str.length === 0) throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return $103c256fb9c18a8e$export$2a1795c9359f92b9;
    if (typeof unsigned === 'number') // For goog.math.long compatibility
    radix = unsigned, unsigned = false;
    else unsigned = !!unsigned;
    radix = radix || 10;
    if (radix < 2 || 36 < radix) throw RangeError('radix');
    var p = str.indexOf('-');
    if (p > 0) throw Error('interior hyphen');
    else if (p === 0) return $103c256fb9c18a8e$export$aef51622e549b8b0($103c256fb9c18a8e$export$3004f64547af360e(str.substring(1), unsigned, radix));
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = $103c256fb9c18a8e$export$7bbb4164c9a77bc2($103c256fb9c18a8e$var$pow_dbl(radix, 8));
    var result = $103c256fb9c18a8e$export$2a1795c9359f92b9;
    for(var i = 0; i < str.length; i += 8){
        var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = $103c256fb9c18a8e$export$7bbb4164c9a77bc2($103c256fb9c18a8e$var$pow_dbl(radix, size));
            result = $103c256fb9c18a8e$export$e16d8520af44a096($103c256fb9c18a8e$export$2060d2db72cce88f(result, power), $103c256fb9c18a8e$export$7bbb4164c9a77bc2(value));
        } else {
            result = $103c256fb9c18a8e$export$2060d2db72cce88f(result, radixToPower);
            result = $103c256fb9c18a8e$export$e16d8520af44a096(result, $103c256fb9c18a8e$export$7bbb4164c9a77bc2(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}
function $103c256fb9c18a8e$export$5f36b26c3833b3ba(val, unsigned) {
    if (typeof val === 'number') return $103c256fb9c18a8e$export$7bbb4164c9a77bc2(val, unsigned);
    if (typeof val === 'string') return $103c256fb9c18a8e$export$3004f64547af360e(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return $103c256fb9c18a8e$export$af782817a0bb622d(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}
/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */ // Long.fromValue = fromValue;
// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.
/**
 * @type {number}
 * @const
 * @inner
 */ var $103c256fb9c18a8e$var$TWO_PWR_16_DBL = 65536;
/**
 * @type {number}
 * @const
 * @inner
 */ var $103c256fb9c18a8e$var$TWO_PWR_24_DBL = 16777216;
/**
 * @type {number}
 * @const
 * @inner
 */ var $103c256fb9c18a8e$var$TWO_PWR_32_DBL = $103c256fb9c18a8e$var$TWO_PWR_16_DBL * $103c256fb9c18a8e$var$TWO_PWR_16_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */ var $103c256fb9c18a8e$var$TWO_PWR_64_DBL = $103c256fb9c18a8e$var$TWO_PWR_32_DBL * $103c256fb9c18a8e$var$TWO_PWR_32_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */ var $103c256fb9c18a8e$var$TWO_PWR_63_DBL = $103c256fb9c18a8e$var$TWO_PWR_64_DBL / 2;
/**
 * @type {!Long}
 * @const
 * @inner
 */ var $103c256fb9c18a8e$var$TWO_PWR_24 = $103c256fb9c18a8e$export$62ffe363f1b08494($103c256fb9c18a8e$var$TWO_PWR_24_DBL);
var $103c256fb9c18a8e$export$2a1795c9359f92b9 = $103c256fb9c18a8e$export$62ffe363f1b08494(0);
var $103c256fb9c18a8e$export$e35e43f82f36d912 = $103c256fb9c18a8e$export$62ffe363f1b08494(0, true);
var $103c256fb9c18a8e$export$30f1bb5a4a4a5467 = $103c256fb9c18a8e$export$62ffe363f1b08494(1);
var $103c256fb9c18a8e$export$789f666db4213815 = $103c256fb9c18a8e$export$62ffe363f1b08494(1, true);
var $103c256fb9c18a8e$export$e5b31325dd05546c = $103c256fb9c18a8e$export$62ffe363f1b08494(-1);
var $103c256fb9c18a8e$export$e5fd331eb7ecbb12 = $103c256fb9c18a8e$export$af782817a0bb622d(-1, 2147483647, false);
var $103c256fb9c18a8e$export$ece7599f9193150b = $103c256fb9c18a8e$export$af782817a0bb622d(-1, -1, true);
var $103c256fb9c18a8e$export$10e1f42189ea83da = $103c256fb9c18a8e$export$af782817a0bb622d(0, -2147483648, false);
function $103c256fb9c18a8e$export$e7a1baa2fae31f0f($this) {
    return $this.unsigned ? $this.low >>> 0 : $this.low;
}
function $103c256fb9c18a8e$export$a0a81dc3380ce7d3($this) {
    if ($this.unsigned) return ($this.high >>> 0) * $103c256fb9c18a8e$var$TWO_PWR_32_DBL + ($this.low >>> 0);
    return $this.high * $103c256fb9c18a8e$var$TWO_PWR_32_DBL + ($this.low >>> 0);
}
function $103c256fb9c18a8e$export$f84e8e69fd4488a5($this, radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix) throw RangeError('radix');
    if ($103c256fb9c18a8e$export$c46ec7d82fb1f602($this)) return '0';
    if ($103c256fb9c18a8e$export$d0909a4f38b5c4d0($this)) {
        if ($103c256fb9c18a8e$export$e9bab7fafb253603($this, $103c256fb9c18a8e$export$10e1f42189ea83da)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = $103c256fb9c18a8e$export$7bbb4164c9a77bc2(radix), div = $103c256fb9c18a8e$export$cd007d971a5a2143($this, radixLong), rem1 = $103c256fb9c18a8e$export$4e2d2ead65e5f7e3($103c256fb9c18a8e$export$2060d2db72cce88f(div, radixLong), $this);
            return $103c256fb9c18a8e$export$f84e8e69fd4488a5(div, radix) + $103c256fb9c18a8e$export$e7a1baa2fae31f0f(rem1).toString(radix);
        } else return '-' + $103c256fb9c18a8e$export$f84e8e69fd4488a5($103c256fb9c18a8e$export$aef51622e549b8b0($this), radix);
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = $103c256fb9c18a8e$export$7bbb4164c9a77bc2($103c256fb9c18a8e$var$pow_dbl(radix, 6), $this.unsigned), rem = $this;
    var result = '';
    while(true){
        var remDiv = $103c256fb9c18a8e$export$cd007d971a5a2143(rem, radixToPower), intval = $103c256fb9c18a8e$export$e7a1baa2fae31f0f($103c256fb9c18a8e$export$4e2d2ead65e5f7e3(rem, $103c256fb9c18a8e$export$2060d2db72cce88f(remDiv, radixToPower))) >>> 0, digits = intval.toString(radix);
        rem = remDiv;
        if ($103c256fb9c18a8e$export$c46ec7d82fb1f602(rem)) return digits + result;
        else {
            while(digits.length < 6)digits = '0' + digits;
            result = '' + digits + result;
        }
    }
}
function $103c256fb9c18a8e$export$c8eeef792e5e2eee($this) {
    return $this.high;
}
function $103c256fb9c18a8e$export$7a2febf4c9a31fb2($this) {
    return $this.high >>> 0;
}
function $103c256fb9c18a8e$export$4a10214d6ebc19b0($this) {
    return $this.low;
}
function $103c256fb9c18a8e$export$4c488f0e2ac21b03($this) {
    return $this.low >>> 0;
}
function $103c256fb9c18a8e$export$ef5a11dd04094ebe($this) {
    if ($103c256fb9c18a8e$export$d0909a4f38b5c4d0($this)) return $103c256fb9c18a8e$export$e9bab7fafb253603($this, $103c256fb9c18a8e$export$10e1f42189ea83da) ? 64 : $103c256fb9c18a8e$export$ef5a11dd04094ebe($103c256fb9c18a8e$export$aef51622e549b8b0($this));
    var val = $this.high != 0 ? $this.high : $this.low;
    for(var bit = 31; bit > 0; bit--)if ((val & 1 << bit) != 0) break;
    return $this.high != 0 ? bit + 33 : bit + 1;
}
function $103c256fb9c18a8e$export$c46ec7d82fb1f602($this) {
    return $this.high === 0 && $this.low === 0;
}
function $103c256fb9c18a8e$export$d0909a4f38b5c4d0($this) {
    return !$this.unsigned && $this.high < 0;
}
function $103c256fb9c18a8e$export$7e69d4236fcc3b19($this) {
    return $this.unsigned || $this.high >= 0;
}
function $103c256fb9c18a8e$export$d36793d8f5c37d4d($this) {
    return ($this.low & 1) === 1;
}
function $103c256fb9c18a8e$export$ce16302d1253e25($this) {
    return ($this.low & 1) === 0;
}
function $103c256fb9c18a8e$export$e9bab7fafb253603($this, other) {
    if (!$103c256fb9c18a8e$export$d8c61589c31c4718(other)) other = $103c256fb9c18a8e$export$5f36b26c3833b3ba(other);
    if ($this.unsigned !== other.unsigned && $this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
    return $this.high === other.high && $this.low === other.low;
}
function $103c256fb9c18a8e$export$e72580e7aad6105c($this, other) {
    return !$103c256fb9c18a8e$export$e9bab7fafb253603($this, /* validates */ other);
}
function $103c256fb9c18a8e$export$9b050841a3a1b328($this, other) {
    return $103c256fb9c18a8e$export$398604a469f7de9a($this, /* validates */ other) < 0;
}
function $103c256fb9c18a8e$export$52dc2ecba809cb1a($this, other) {
    return $103c256fb9c18a8e$export$398604a469f7de9a($this, /* validates */ other) <= 0;
}
function $103c256fb9c18a8e$export$f517ea36c68d4644($this, other) {
    return $103c256fb9c18a8e$export$398604a469f7de9a($this, /* validates */ other) > 0;
}
function $103c256fb9c18a8e$export$1d972cf4acc123bd($this, other) {
    return $103c256fb9c18a8e$export$398604a469f7de9a($this, /* validates */ other) >= 0;
}
function $103c256fb9c18a8e$export$398604a469f7de9a($this, other) {
    if (!$103c256fb9c18a8e$export$d8c61589c31c4718(other)) other = $103c256fb9c18a8e$export$5f36b26c3833b3ba(other);
    if ($103c256fb9c18a8e$export$e9bab7fafb253603($this, other)) return 0;
    var thisNeg = $103c256fb9c18a8e$export$d0909a4f38b5c4d0($this), otherNeg = $103c256fb9c18a8e$export$d0909a4f38b5c4d0(other);
    if (thisNeg && !otherNeg) return -1;
    if (!thisNeg && otherNeg) return 1;
    // At this point the sign bits are the same
    if (!$this.unsigned) return $103c256fb9c18a8e$export$d0909a4f38b5c4d0($103c256fb9c18a8e$export$4e2d2ead65e5f7e3($this, other)) ? -1 : 1;
    // Both are positive if at least one is unsigned
    return other.high >>> 0 > $this.high >>> 0 || other.high === $this.high && other.low >>> 0 > $this.low >>> 0 ? -1 : 1;
}
function $103c256fb9c18a8e$export$aef51622e549b8b0($this) {
    if (!$this.unsigned && $103c256fb9c18a8e$export$e9bab7fafb253603($this, $103c256fb9c18a8e$export$10e1f42189ea83da)) return $103c256fb9c18a8e$export$10e1f42189ea83da;
    return $103c256fb9c18a8e$export$e16d8520af44a096($103c256fb9c18a8e$export$6003a5f097c73977($this), $103c256fb9c18a8e$export$30f1bb5a4a4a5467);
}
function $103c256fb9c18a8e$export$e16d8520af44a096($this, addend) {
    if (!$103c256fb9c18a8e$export$d8c61589c31c4718(addend)) addend = $103c256fb9c18a8e$export$5f36b26c3833b3ba(addend);
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = $this.high >>> 16;
    var a32 = $this.high & 65535;
    var a16 = $this.low >>> 16;
    var a00 = $this.low & 65535;
    var b48 = addend.high >>> 16;
    var b32 = addend.high & 65535;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 65535;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 65535;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 65535;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 65535;
    c48 += a48 + b48;
    c48 &= 65535;
    return $103c256fb9c18a8e$export$af782817a0bb622d(c16 << 16 | c00, c48 << 16 | c32, $this.unsigned);
}
function $103c256fb9c18a8e$export$4e2d2ead65e5f7e3($this, subtrahend) {
    if (!$103c256fb9c18a8e$export$d8c61589c31c4718(subtrahend)) subtrahend = $103c256fb9c18a8e$export$5f36b26c3833b3ba(subtrahend);
    return $103c256fb9c18a8e$export$e16d8520af44a096($this, $103c256fb9c18a8e$export$aef51622e549b8b0(subtrahend));
}
function $103c256fb9c18a8e$export$2060d2db72cce88f($this, multiplier) {
    if ($103c256fb9c18a8e$export$c46ec7d82fb1f602($this)) return $this.unsigned ? $103c256fb9c18a8e$export$e35e43f82f36d912 : $103c256fb9c18a8e$export$2a1795c9359f92b9;
    if (!$103c256fb9c18a8e$export$d8c61589c31c4718(multiplier)) multiplier = $103c256fb9c18a8e$export$5f36b26c3833b3ba(multiplier);
    // use wasm support if present
    if ($103c256fb9c18a8e$var$wasm) {
        var low = $103c256fb9c18a8e$var$wasm.mul($this.low, $this.high, multiplier.low, multiplier.high);
        return $103c256fb9c18a8e$export$af782817a0bb622d(low, $103c256fb9c18a8e$var$wasm.get_high(), $this.unsigned);
    }
    if ($103c256fb9c18a8e$export$c46ec7d82fb1f602(multiplier)) return $this.unsigned ? $103c256fb9c18a8e$export$e35e43f82f36d912 : $103c256fb9c18a8e$export$2a1795c9359f92b9;
    if ($103c256fb9c18a8e$export$e9bab7fafb253603($this, $103c256fb9c18a8e$export$10e1f42189ea83da)) return $103c256fb9c18a8e$export$d36793d8f5c37d4d(multiplier) ? $103c256fb9c18a8e$export$10e1f42189ea83da : $103c256fb9c18a8e$export$2a1795c9359f92b9;
    if ($103c256fb9c18a8e$export$e9bab7fafb253603(multiplier, $103c256fb9c18a8e$export$10e1f42189ea83da)) return $103c256fb9c18a8e$export$d36793d8f5c37d4d($this) ? $103c256fb9c18a8e$export$10e1f42189ea83da : $103c256fb9c18a8e$export$2a1795c9359f92b9;
    if ($103c256fb9c18a8e$export$d0909a4f38b5c4d0($this)) {
        if ($103c256fb9c18a8e$export$d0909a4f38b5c4d0(multiplier)) return $103c256fb9c18a8e$export$2060d2db72cce88f($103c256fb9c18a8e$export$aef51622e549b8b0($this), $103c256fb9c18a8e$export$aef51622e549b8b0(multiplier));
        else return $103c256fb9c18a8e$export$aef51622e549b8b0($103c256fb9c18a8e$export$2060d2db72cce88f($103c256fb9c18a8e$export$aef51622e549b8b0($this), multiplier));
    } else if ($103c256fb9c18a8e$export$d0909a4f38b5c4d0(multiplier)) return $103c256fb9c18a8e$export$aef51622e549b8b0($103c256fb9c18a8e$export$2060d2db72cce88f($this, $103c256fb9c18a8e$export$aef51622e549b8b0(multiplier)));
    // If both longs are small, use float multiplication
    if ($103c256fb9c18a8e$export$9b050841a3a1b328($this, $103c256fb9c18a8e$var$TWO_PWR_24) && $103c256fb9c18a8e$export$9b050841a3a1b328(multiplier, $103c256fb9c18a8e$var$TWO_PWR_24)) return $103c256fb9c18a8e$export$7bbb4164c9a77bc2($103c256fb9c18a8e$export$a0a81dc3380ce7d3($this) * $103c256fb9c18a8e$export$a0a81dc3380ce7d3(multiplier), $this.unsigned);
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = $this.high >>> 16;
    var a32 = $this.high & 65535;
    var a16 = $this.low >>> 16;
    var a00 = $this.low & 65535;
    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 65535;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 65535;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 65535;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 65535;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 65535;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 65535;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 65535;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 65535;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 65535;
    return $103c256fb9c18a8e$export$af782817a0bb622d(c16 << 16 | c00, c48 << 16 | c32, $this.unsigned);
}
function $103c256fb9c18a8e$export$cd007d971a5a2143($this, divisor) {
    if (!$103c256fb9c18a8e$export$d8c61589c31c4718(divisor)) divisor = $103c256fb9c18a8e$export$5f36b26c3833b3ba(divisor);
    if ($103c256fb9c18a8e$export$c46ec7d82fb1f602(divisor)) throw Error('division by zero');
    // use wasm support if present
    if ($103c256fb9c18a8e$var$wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!$this.unsigned && $this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) // be consistent with non-wasm code path
        return $this;
        var low = ($this.unsigned ? $103c256fb9c18a8e$var$wasm.div_u : $103c256fb9c18a8e$var$wasm.div_s)($this.low, $this.high, divisor.low, divisor.high);
        return $103c256fb9c18a8e$export$af782817a0bb622d(low, $103c256fb9c18a8e$var$wasm.get_high(), $this.unsigned);
    }
    if ($103c256fb9c18a8e$export$c46ec7d82fb1f602($this)) return $this.unsigned ? $103c256fb9c18a8e$export$e35e43f82f36d912 : $103c256fb9c18a8e$export$2a1795c9359f92b9;
    var approx, rem, res;
    if (!$this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if ($103c256fb9c18a8e$export$e9bab7fafb253603($this, $103c256fb9c18a8e$export$10e1f42189ea83da)) {
            if ($103c256fb9c18a8e$export$e9bab7fafb253603(divisor, $103c256fb9c18a8e$export$30f1bb5a4a4a5467) || $103c256fb9c18a8e$export$e9bab7fafb253603(divisor, $103c256fb9c18a8e$export$e5b31325dd05546c)) return $103c256fb9c18a8e$export$10e1f42189ea83da; // recall that -MIN_VALUE == MIN_VALUE
            else if ($103c256fb9c18a8e$export$e9bab7fafb253603(divisor, $103c256fb9c18a8e$export$10e1f42189ea83da)) return $103c256fb9c18a8e$export$30f1bb5a4a4a5467;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = $103c256fb9c18a8e$export$86c449e29266e58a($this, 1);
                approx = $103c256fb9c18a8e$export$f613292be21d0bc3($103c256fb9c18a8e$export$cd007d971a5a2143(halfThis, divisor), 1);
                if ($103c256fb9c18a8e$export$e9bab7fafb253603(approx, $103c256fb9c18a8e$export$2a1795c9359f92b9)) return $103c256fb9c18a8e$export$d0909a4f38b5c4d0(divisor) ? $103c256fb9c18a8e$export$30f1bb5a4a4a5467 : $103c256fb9c18a8e$export$e5b31325dd05546c;
                else {
                    rem = $103c256fb9c18a8e$export$4e2d2ead65e5f7e3($this, $103c256fb9c18a8e$export$2060d2db72cce88f(divisor, approx));
                    res = $103c256fb9c18a8e$export$e16d8520af44a096(approx, $103c256fb9c18a8e$export$cd007d971a5a2143(rem, divisor));
                    return res;
                }
            }
        } else if ($103c256fb9c18a8e$export$e9bab7fafb253603(divisor, $103c256fb9c18a8e$export$10e1f42189ea83da)) return $this.unsigned ? $103c256fb9c18a8e$export$e35e43f82f36d912 : $103c256fb9c18a8e$export$2a1795c9359f92b9;
        if ($103c256fb9c18a8e$export$d0909a4f38b5c4d0($this)) {
            if ($103c256fb9c18a8e$export$d0909a4f38b5c4d0(divisor)) return $103c256fb9c18a8e$export$cd007d971a5a2143($103c256fb9c18a8e$export$aef51622e549b8b0($this), $103c256fb9c18a8e$export$aef51622e549b8b0(divisor));
            return $103c256fb9c18a8e$export$aef51622e549b8b0($103c256fb9c18a8e$export$cd007d971a5a2143($103c256fb9c18a8e$export$aef51622e549b8b0($this), divisor));
        } else if ($103c256fb9c18a8e$export$d0909a4f38b5c4d0(divisor)) return $103c256fb9c18a8e$export$aef51622e549b8b0($103c256fb9c18a8e$export$cd007d971a5a2143($this, $103c256fb9c18a8e$export$aef51622e549b8b0(divisor)));
        res = $103c256fb9c18a8e$export$2a1795c9359f92b9;
    } else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned) divisor = $103c256fb9c18a8e$export$908ef9a84e4ca2d4(divisor);
        if ($103c256fb9c18a8e$export$f517ea36c68d4644(divisor, $this)) return $103c256fb9c18a8e$export$e35e43f82f36d912;
        if ($103c256fb9c18a8e$export$f517ea36c68d4644(divisor, $103c256fb9c18a8e$export$fd2d1dabe2e60497($this, 1))) return $103c256fb9c18a8e$export$789f666db4213815;
        res = $103c256fb9c18a8e$export$e35e43f82f36d912;
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = $this;
    while($103c256fb9c18a8e$export$1d972cf4acc123bd(rem, divisor)){
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor($103c256fb9c18a8e$export$a0a81dc3380ce7d3(rem) / $103c256fb9c18a8e$export$a0a81dc3380ce7d3(divisor)));
        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = log2 <= 48 ? 1 : $103c256fb9c18a8e$var$pow_dbl(2, log2 - 48), // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
        approxRes = $103c256fb9c18a8e$export$7bbb4164c9a77bc2(approx), approxRem = $103c256fb9c18a8e$export$2060d2db72cce88f(approxRes, divisor);
        while($103c256fb9c18a8e$export$d0909a4f38b5c4d0(approxRem) || $103c256fb9c18a8e$export$f517ea36c68d4644(approxRem, rem)){
            approx -= delta;
            approxRes = $103c256fb9c18a8e$export$7bbb4164c9a77bc2(approx, $this.unsigned);
            approxRem = $103c256fb9c18a8e$export$2060d2db72cce88f(approxRes, divisor);
        }
        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if ($103c256fb9c18a8e$export$c46ec7d82fb1f602(approxRes)) approxRes = $103c256fb9c18a8e$export$30f1bb5a4a4a5467;
        res = $103c256fb9c18a8e$export$e16d8520af44a096(res, approxRes);
        rem = $103c256fb9c18a8e$export$4e2d2ead65e5f7e3(rem, approxRem);
    }
    return res;
}
function $103c256fb9c18a8e$export$ba467bec01d66def($this, divisor) {
    if (!$103c256fb9c18a8e$export$d8c61589c31c4718(divisor)) divisor = $103c256fb9c18a8e$export$5f36b26c3833b3ba(divisor);
    // use wasm support if present
    if ($103c256fb9c18a8e$var$wasm) {
        var low = ($this.unsigned ? $103c256fb9c18a8e$var$wasm.rem_u : $103c256fb9c18a8e$var$wasm.rem_s)($this.low, $this.high, divisor.low, divisor.high);
        return $103c256fb9c18a8e$export$af782817a0bb622d(low, $103c256fb9c18a8e$var$wasm.get_high(), $this.unsigned);
    }
    return $103c256fb9c18a8e$export$4e2d2ead65e5f7e3($this, $103c256fb9c18a8e$export$2060d2db72cce88f($103c256fb9c18a8e$export$cd007d971a5a2143($this, divisor), divisor));
}
function $103c256fb9c18a8e$export$6003a5f097c73977($this) {
    return $103c256fb9c18a8e$export$af782817a0bb622d(~$this.low, ~$this.high, $this.unsigned);
}
function $103c256fb9c18a8e$export$21c0ac7fe1cef1b8($this, other) {
    if (!$103c256fb9c18a8e$export$d8c61589c31c4718(other)) other = $103c256fb9c18a8e$export$5f36b26c3833b3ba(other);
    return $103c256fb9c18a8e$export$af782817a0bb622d($this.low & other.low, $this.high & other.high, $this.unsigned);
}
function $103c256fb9c18a8e$export$252bb8b3bbdf6749($this, other) {
    if (!$103c256fb9c18a8e$export$d8c61589c31c4718(other)) other = $103c256fb9c18a8e$export$5f36b26c3833b3ba(other);
    return $103c256fb9c18a8e$export$af782817a0bb622d($this.low | other.low, $this.high | other.high, $this.unsigned);
}
function $103c256fb9c18a8e$export$6444ef5cd411280c($this, other) {
    if (!$103c256fb9c18a8e$export$d8c61589c31c4718(other)) other = $103c256fb9c18a8e$export$5f36b26c3833b3ba(other);
    return $103c256fb9c18a8e$export$af782817a0bb622d($this.low ^ other.low, $this.high ^ other.high, $this.unsigned);
}
function $103c256fb9c18a8e$export$f613292be21d0bc3($this, numBits) {
    if ($103c256fb9c18a8e$export$d8c61589c31c4718(numBits)) numBits = $103c256fb9c18a8e$export$e7a1baa2fae31f0f(numBits);
    if ((numBits &= 63) === 0) return $this;
    else if (numBits < 32) return $103c256fb9c18a8e$export$af782817a0bb622d($this.low << numBits, $this.high << numBits | $this.low >>> 32 - numBits, $this.unsigned);
    else return $103c256fb9c18a8e$export$af782817a0bb622d(0, $this.low << numBits - 32, $this.unsigned);
}
function $103c256fb9c18a8e$export$86c449e29266e58a($this, numBits) {
    if ($103c256fb9c18a8e$export$d8c61589c31c4718(numBits)) numBits = $103c256fb9c18a8e$export$e7a1baa2fae31f0f(numBits);
    if ((numBits &= 63) === 0) return $this;
    else if (numBits < 32) return $103c256fb9c18a8e$export$af782817a0bb622d($this.low >>> numBits | $this.high << 32 - numBits, $this.high >> numBits, $this.unsigned);
    else return $103c256fb9c18a8e$export$af782817a0bb622d($this.high >> numBits - 32, $this.high >= 0 ? 0 : -1, $this.unsigned);
}
function $103c256fb9c18a8e$export$fd2d1dabe2e60497($this, numBits) {
    if ($103c256fb9c18a8e$export$d8c61589c31c4718(numBits)) numBits = $103c256fb9c18a8e$export$e7a1baa2fae31f0f(numBits);
    numBits &= 63;
    if (numBits === 0) return $this;
    else {
        var high = $this.high;
        if (numBits < 32) {
            var low = $this.low;
            return $103c256fb9c18a8e$export$af782817a0bb622d(low >>> numBits | high << 32 - numBits, high >>> numBits, $this.unsigned);
        } else if (numBits === 32) return $103c256fb9c18a8e$export$af782817a0bb622d(high, 0, $this.unsigned);
        else return $103c256fb9c18a8e$export$af782817a0bb622d(high >>> numBits - 32, 0, $this.unsigned);
    }
}
const $103c256fb9c18a8e$export$c5ff7c6cb12f5f46 = function $103c256fb9c18a8e$export$c5ff7c6cb12f5f46(numBits) {
    var b;
    if ($103c256fb9c18a8e$export$d8c61589c31c4718(numBits)) numBits = numBits.toInt();
    if ((numBits &= 63) === 0) return this;
    if (numBits === 32) return $103c256fb9c18a8e$export$af782817a0bb622d(this.high, this.low, this.unsigned);
    if (numBits < 32) {
        b = 32 - numBits;
        return $103c256fb9c18a8e$export$af782817a0bb622d(this.low << numBits | this.high >>> b, this.high << numBits | this.low >>> b, this.unsigned);
    }
    numBits -= 32;
    b = 32 - numBits;
    return $103c256fb9c18a8e$export$af782817a0bb622d(this.high << numBits | this.low >>> b, this.low << numBits | this.high >>> b, this.unsigned);
};
const $103c256fb9c18a8e$export$b8ff662d454dbe46 = function $103c256fb9c18a8e$export$b8ff662d454dbe46(numBits) {
    var b;
    if ($103c256fb9c18a8e$export$d8c61589c31c4718(numBits)) numBits = numBits.toInt();
    if ((numBits &= 63) === 0) return this;
    if (numBits === 32) return $103c256fb9c18a8e$export$af782817a0bb622d(this.high, this.low, this.unsigned);
    if (numBits < 32) {
        b = 32 - numBits;
        return $103c256fb9c18a8e$export$af782817a0bb622d(this.high << b | this.low >>> numBits, this.low << b | this.high >>> numBits, this.unsigned);
    }
    numBits -= 32;
    b = 32 - numBits;
    return $103c256fb9c18a8e$export$af782817a0bb622d(this.low << b | this.high >>> numBits, this.high << b | this.low >>> numBits, this.unsigned);
};
function $103c256fb9c18a8e$export$505ae59dc97b3d08($this) {
    if (!$this.unsigned) return $this;
    return $103c256fb9c18a8e$export$af782817a0bb622d($this.low, $this.high, false);
}
function $103c256fb9c18a8e$export$908ef9a84e4ca2d4($this) {
    if ($this.unsigned) return $this;
    return $103c256fb9c18a8e$export$af782817a0bb622d($this.low, $this.high, true);
}
function $103c256fb9c18a8e$export$30a71edf0753ed6b($this, le) {
    return le ? $103c256fb9c18a8e$export$4e5655041aced948($this) : $103c256fb9c18a8e$export$7fca740e0e0e35ff($this);
}
function $103c256fb9c18a8e$export$4e5655041aced948($this) {
    var hi = $this.high, lo = $this.low;
    return [
        lo & 255,
        lo >>> 8 & 255,
        lo >>> 16 & 255,
        lo >>> 24,
        hi & 255,
        hi >>> 8 & 255,
        hi >>> 16 & 255,
        hi >>> 24
    ];
}
function $103c256fb9c18a8e$export$7fca740e0e0e35ff($this) {
    var hi = $this.high, lo = $this.low;
    return [
        hi >>> 24,
        hi >>> 16 & 255,
        hi >>> 8 & 255,
        hi & 255,
        lo >>> 24,
        lo >>> 16 & 255,
        lo >>> 8 & 255,
        lo & 255
    ];
}
function $103c256fb9c18a8e$export$de2da3025c30316c(bytes, unsigned, le) {
    return le ? $103c256fb9c18a8e$export$c1b063d566627ce9(bytes, unsigned) : $103c256fb9c18a8e$export$3a3e04395cb3b0a4(bytes, unsigned);
}
function $103c256fb9c18a8e$export$c1b063d566627ce9(bytes, unsigned) {
    return new $103c256fb9c18a8e$export$12ac1d26449d9c2e(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
}
function $103c256fb9c18a8e$export$3a3e04395cb3b0a4(bytes, unsigned) {
    return new $103c256fb9c18a8e$export$12ac1d26449d9c2e(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
}


var $6918e3a1d48b1f14$export$2e2bcd8739ae039 = $103c256fb9c18a8e$exports.Long;
const $6918e3a1d48b1f14$export$1a6223d840786ec0 = $103c256fb9c18a8e$exports.ZERO;
const $6918e3a1d48b1f14$export$ae43249cd38c8649 = $103c256fb9c18a8e$exports.ONE;
const $6918e3a1d48b1f14$export$a5fb1fdca49990a = $103c256fb9c18a8e$exports.add;
const $6918e3a1d48b1f14$export$1ba572a54983744c = $103c256fb9c18a8e$exports.subtract;
const $6918e3a1d48b1f14$export$bef948e98114a357 = $103c256fb9c18a8e$exports.multiply;
const $6918e3a1d48b1f14$export$a6e41fbebc04a9a6 = $103c256fb9c18a8e$exports.divide;
const $6918e3a1d48b1f14$export$ded19a969d94df2c = $103c256fb9c18a8e$exports.modulo;
const $6918e3a1d48b1f14$export$816012df0c0b827b = $103c256fb9c18a8e$exports.negate;
const $6918e3a1d48b1f14$export$db0cfad3fbfda1ec = $103c256fb9c18a8e$exports.shiftLeft;
const $6918e3a1d48b1f14$export$ac7ec3136e34a438 = $103c256fb9c18a8e$exports.shiftRight;
const $6918e3a1d48b1f14$export$acf92122e8147bcc = $103c256fb9c18a8e$exports.shiftRightUnsigned;
const $6918e3a1d48b1f14$export$63100fead1d420ec = $103c256fb9c18a8e$exports.and;
const $6918e3a1d48b1f14$export$3b31a93857920c35 = $103c256fb9c18a8e$exports.or;
const $6918e3a1d48b1f14$export$c0fdf16846965bbb = $103c256fb9c18a8e$exports.xor;
const $6918e3a1d48b1f14$export$67b770e7c3b07aa3 = $103c256fb9c18a8e$exports.not;
const $6918e3a1d48b1f14$export$8a328cfc4fb13f5a = $103c256fb9c18a8e$exports.lessThan;
const $6918e3a1d48b1f14$export$6b30a4ddd4d0a923 = $103c256fb9c18a8e$exports.lessThanOrEqual;
const $6918e3a1d48b1f14$export$3a91b96ca595f805 = $103c256fb9c18a8e$exports.greaterThan;
const $6918e3a1d48b1f14$export$bf572eb710c3cf1f = $103c256fb9c18a8e$exports.greaterThanOrEqual;
const $6918e3a1d48b1f14$export$9b1d5575afd83331 = $103c256fb9c18a8e$exports.equals;
const $6918e3a1d48b1f14$export$fabc92498ab6f0b9 = $103c256fb9c18a8e$exports.notEquals;
const $6918e3a1d48b1f14$export$e9bab7fafb253603 = $103c256fb9c18a8e$exports.equals;
const $6918e3a1d48b1f14$export$398604a469f7de9a = $103c256fb9c18a8e$exports.compare;
const $6918e3a1d48b1f14$export$62ffe363f1b08494 = $103c256fb9c18a8e$exports.fromInt;
const $6918e3a1d48b1f14$export$af782817a0bb622d = $103c256fb9c18a8e$exports.fromBits;
const $6918e3a1d48b1f14$export$de2da3025c30316c = $103c256fb9c18a8e$exports.fromBytes;
const $6918e3a1d48b1f14$export$7bbb4164c9a77bc2 = $103c256fb9c18a8e$exports.fromNumber;
const $6918e3a1d48b1f14$export$3004f64547af360e = $103c256fb9c18a8e$exports.fromString;
const $6918e3a1d48b1f14$export$5f36b26c3833b3ba = $103c256fb9c18a8e$exports.fromValue;
const $6918e3a1d48b1f14$export$e7a1baa2fae31f0f = $103c256fb9c18a8e$exports.toInt;
const $6918e3a1d48b1f14$export$30a71edf0753ed6b = $103c256fb9c18a8e$exports.toBytes;
const $6918e3a1d48b1f14$export$a0a81dc3380ce7d3 = $103c256fb9c18a8e$exports.toNumber;
const $6918e3a1d48b1f14$export$f84e8e69fd4488a5 = $103c256fb9c18a8e$exports.toString;
const $6918e3a1d48b1f14$export$4a10214d6ebc19b0 = $103c256fb9c18a8e$exports.getLowBits;
const $6918e3a1d48b1f14$export$c8eeef792e5e2eee = $103c256fb9c18a8e$exports.getHighBits;
const $6918e3a1d48b1f14$export$4c488f0e2ac21b03 = $103c256fb9c18a8e$exports.getLowBitsUnsigned;
const $6918e3a1d48b1f14$export$7a2febf4c9a31fb2 = $103c256fb9c18a8e$exports.getHighBitsUnsigned;
function $6918e3a1d48b1f14$var$getMaxValue(unsigned, radix, isNegative) {
    switch(radix){
        case 2:
            return unsigned ? "1111111111111111111111111111111111111111111111111111111111111111" : isNegative ? "1000000000000000000000000000000000000000000000000000000000000000" : "111111111111111111111111111111111111111111111111111111111111111";
        case 8:
            return unsigned ? "1777777777777777777777" : isNegative ? "1000000000000000000000" : "777777777777777777777";
        case 10:
            return unsigned ? "18446744073709551615" : isNegative ? "9223372036854775808" : "9223372036854775807";
        case 16:
            return unsigned ? "FFFFFFFFFFFFFFFF" : isNegative ? "8000000000000000" : "7FFFFFFFFFFFFFFF";
        default:
            throw new Error("Invalid radix.");
    }
}
function $6918e3a1d48b1f14$export$2335f513bbd82c6d(x) {
    if (!x.unsigned && $103c256fb9c18a8e$exports.isNegative(x)) return $6918e3a1d48b1f14$export$816012df0c0b827b(x);
    else return x;
}
function $6918e3a1d48b1f14$export$ee060913cffc652(value, unsigned, kind) {
    let x = value;
    let xh = 0;
    switch(kind){
        case 0:
            x = value << 24 >> 24;
            xh = x;
            break;
        case 4:
            x = value << 24 >>> 24;
            break;
        case 1:
            x = value << 16 >> 16;
            xh = x;
            break;
        case 5:
            x = value << 16 >>> 16;
            break;
        case 2:
            x = value >> 0;
            xh = x;
            break;
        case 6:
            x = value >>> 0;
            break;
    }
    return $103c256fb9c18a8e$exports.fromBits(x, xh >> 31, unsigned);
}
function $6918e3a1d48b1f14$export$98e6a39c04603d36(str, style, unsigned, _bitsize, radix) {
    const res = $d70d15e757640036$export$1ea939691cdc45b8(str, style, radix);
    if (res != null) {
        const lessOrEqual = (x, y)=>{
            const len = Math.max(x.length, y.length);
            return x.padStart(len, "0") <= y.padStart(len, "0");
        };
        const isNegative = res.sign === "-";
        const maxValue = $6918e3a1d48b1f14$var$getMaxValue(unsigned || res.radix !== 10, res.radix, isNegative);
        if (lessOrEqual(res.digits.toUpperCase(), maxValue)) {
            str = isNegative ? res.sign + res.digits : res.digits;
            return $103c256fb9c18a8e$exports.fromString(str, unsigned, res.radix);
        }
    }
    throw new Error("Input string was not in a correct format.");
}
function $6918e3a1d48b1f14$export$468ff95b83d315e5(str, style, unsigned, bitsize, defValue) {
    try {
        defValue.contents = $6918e3a1d48b1f14$export$98e6a39c04603d36(str, style, unsigned, bitsize);
        return true;
    } catch (_a) {
        return false;
    }
}
function $6918e3a1d48b1f14$export$b04aee43a70c325e(ms, offset) {
    return $6918e3a1d48b1f14$export$bef948e98114a357($6918e3a1d48b1f14$export$a5fb1fdca49990a($6918e3a1d48b1f14$export$a5fb1fdca49990a($103c256fb9c18a8e$exports.fromNumber(ms), 62135596800000), offset), 10000);
}
function $6918e3a1d48b1f14$export$2044bef34fee81ea(ticks) {
    return $103c256fb9c18a8e$exports.toNumber($6918e3a1d48b1f14$export$1ba572a54983744c($6918e3a1d48b1f14$export$a6e41fbebc04a9a6(ticks, 10000), 62135596800000));
}
function $6918e3a1d48b1f14$export$9edaf4efe6390181(x, y, out) {
    const div = $6918e3a1d48b1f14$export$a6e41fbebc04a9a6(x, y);
    const rem = $6918e3a1d48b1f14$export$ded19a969d94df2c(x, y);
    if (out != null) {
        out.contents = rem;
        return div;
    } else return [
        div,
        rem
    ];
}


class $7d684f9c58c88b9e$export$5da6bb266b244b1f {
    constructor(declaringType, tag, $7d684f9c58c88b9e$export$a8ff84c12d48cfa6, fields){
        this.declaringType = declaringType;
        this.tag = tag;
        this.name = $7d684f9c58c88b9e$export$a8ff84c12d48cfa6;
        this.fields = fields;
    }
}
class $7d684f9c58c88b9e$export$49bbbea0e28f81da {
    constructor($7d684f9c58c88b9e$export$a8ff84c12d48cfa6, parameters, returnType){
        this.name = $7d684f9c58c88b9e$export$a8ff84c12d48cfa6;
        this.parameters = parameters;
        this.returnType = returnType;
    }
}
class $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e {
    constructor(fullname, generics, construct, parent, fields, cases, enumCases){
        this.fullname = fullname;
        this.generics = generics;
        this.construct = construct;
        this.parent = parent;
        this.fields = fields;
        this.cases = cases;
        this.enumCases = enumCases;
    }
    toString() {
        return $7d684f9c58c88b9e$export$1d6cfa7493842c29(this);
    }
    GetHashCode() {
        return $7d684f9c58c88b9e$export$c14f61804029af13(this);
    }
    Equals(other) {
        return $7d684f9c58c88b9e$export$e9bab7fafb253603(this, other);
    }
}
class $7d684f9c58c88b9e$export$e2a012deca8e0eb5 extends $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e {
    constructor($7d684f9c58c88b9e$export$a8ff84c12d48cfa6){
        super($7d684f9c58c88b9e$export$a8ff84c12d48cfa6);
    }
}
function $7d684f9c58c88b9e$export$18737d7a203fc740(t) {
    return t.generics != null ? t.generics : [];
}
function $7d684f9c58c88b9e$export$c14f61804029af13(t) {
    const fullnameHash = $ed39e963967a3eea$export$b9b095ec8c02760b(t.fullname);
    const genHashes = $7d684f9c58c88b9e$export$18737d7a203fc740(t).map($7d684f9c58c88b9e$export$c14f61804029af13);
    return $ed39e963967a3eea$export$4a6567c520a28ea3([
        fullnameHash,
        ...genHashes
    ]);
}
function $7d684f9c58c88b9e$export$e9bab7fafb253603(t1, t2) {
    if (t1.fullname === "") return t2.fullname === "" && $ed39e963967a3eea$export$b9a64d2e4daf3c9f($7d684f9c58c88b9e$export$b0ab498daed3dd7f(t1), $7d684f9c58c88b9e$export$b0ab498daed3dd7f(t2), ([k1, v1], [k2, v2])=>k1 === k2 && $7d684f9c58c88b9e$export$e9bab7fafb253603(v1, v2)
    );
    else return t1.fullname === t2.fullname && $ed39e963967a3eea$export$b9a64d2e4daf3c9f($7d684f9c58c88b9e$export$18737d7a203fc740(t1), $7d684f9c58c88b9e$export$18737d7a203fc740(t2), $7d684f9c58c88b9e$export$e9bab7fafb253603);
}
function $7d684f9c58c88b9e$export$8547d5acd31924e(fullname, generics, construct, parent) {
    return new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e(fullname, generics, construct, parent);
}
function $7d684f9c58c88b9e$export$d341dea990ee4af6(fullname, generics, construct, fields) {
    return new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e(fullname, generics, construct, undefined, fields);
}
function $7d684f9c58c88b9e$export$4bca6dc9d780d464(...fields) {
    return new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("", undefined, undefined, undefined, ()=>fields
    );
}
function $7d684f9c58c88b9e$export$1ae0dd948e267c6b(fullname, generics, construct, cases) {
    const t = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e(fullname, generics, construct, undefined, undefined, ()=>{
        const caseNames = construct.prototype.cases();
        return cases().map((fields, i)=>new $7d684f9c58c88b9e$export$5da6bb266b244b1f(t, i, caseNames[i], fields)
        );
    });
    return t;
}
function $7d684f9c58c88b9e$export$2163aa004254c8ff(...generics) {
    return new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.Tuple`" + generics.length, generics);
}
function $7d684f9c58c88b9e$export$7740535942dd94ab(...generics) {
    return new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.Func`" + generics.length, generics);
}
function $7d684f9c58c88b9e$export$14857d36df600d23(argType, returnType) {
    return new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("Microsoft.FSharp.Core.FSharpFunc`2", [
        argType,
        returnType
    ]);
}
function $7d684f9c58c88b9e$export$a0bfd80c70f2d46b(generic) {
    return new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("Microsoft.FSharp.Core.FSharpOption`1", [
        generic
    ]);
}
function $7d684f9c58c88b9e$export$5fe717259b8d6105(generic) {
    return new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("Microsoft.FSharp.Collections.FSharpList`1", [
        generic
    ]);
}
function $7d684f9c58c88b9e$export$9242f430c61b672d(generic) {
    return new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("[]", [
        generic
    ]);
}
function $7d684f9c58c88b9e$export$3120ec9ec286ab54(fullname, underlyingType, enumCases) {
    return new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e(fullname, [
        underlyingType
    ], undefined, undefined, undefined, undefined, enumCases);
}
function $7d684f9c58c88b9e$export$cfd970c638408302(fullname) {
    return new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e(fullname);
}
function $7d684f9c58c88b9e$export$6041990b44031fc4($7d684f9c58c88b9e$export$a8ff84c12d48cfa6) {
    return new $7d684f9c58c88b9e$export$e2a012deca8e0eb5($7d684f9c58c88b9e$export$a8ff84c12d48cfa6);
}
const $7d684f9c58c88b9e$export$e63caa28a27bc62e = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.Object");
const $7d684f9c58c88b9e$export$ffcad4a7b72710d8 = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("Microsoft.FSharp.Core.Unit");
const $7d684f9c58c88b9e$export$4b19e09c28c31d09 = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.Char");
const $7d684f9c58c88b9e$export$36bbd56a39d3f734 = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.String");
const $7d684f9c58c88b9e$export$4b2f4351dd8f4737 = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.Boolean");
const $7d684f9c58c88b9e$export$e123199e7dc4cbf4 = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.SByte");
const $7d684f9c58c88b9e$export$c006cc52c5c39616 = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.Byte");
const $7d684f9c58c88b9e$export$482d438fe95b1d2b = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.Int16");
const $7d684f9c58c88b9e$export$d96ab529e3d5b757 = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.UInt16");
const $7d684f9c58c88b9e$export$d5481a1dd0e3648a = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.Int32");
const $7d684f9c58c88b9e$export$173d14c9e9e1a539 = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.UInt32");
const $7d684f9c58c88b9e$export$b51642c3501712df = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.Single");
const $7d684f9c58c88b9e$export$8ff85e1c626cc255 = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.Double");
const $7d684f9c58c88b9e$export$71595c79c7738f26 = new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e("System.Decimal");
function $7d684f9c58c88b9e$export$a8ff84c12d48cfa6(info) {
    if (Array.isArray(info)) return info[0];
    else if (info instanceof $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e) {
        const elemType = $7d684f9c58c88b9e$export$cc56411ddc6ec102(info);
        if (elemType != null) return $7d684f9c58c88b9e$export$a8ff84c12d48cfa6(elemType) + "[]";
        else {
            const i = info.fullname.lastIndexOf(".");
            return i === -1 ? info.fullname : info.fullname.substr(i + 1);
        }
    } else return info.name;
}
function $7d684f9c58c88b9e$export$1d6cfa7493842c29(t) {
    const elemType = $7d684f9c58c88b9e$export$cc56411ddc6ec102(t);
    if (elemType != null) return $7d684f9c58c88b9e$export$1d6cfa7493842c29(elemType) + "[]";
    else if (t.generics == null || t.generics.length === 0) return t.fullname;
    else return t.fullname + "[" + t.generics.map((x)=>$7d684f9c58c88b9e$export$1d6cfa7493842c29(x)
    ).join(",") + "]";
}
function $7d684f9c58c88b9e$export$76a88f7de6507443(t) {
    const elemType = $7d684f9c58c88b9e$export$cc56411ddc6ec102(t);
    if (elemType != null) return $7d684f9c58c88b9e$export$76a88f7de6507443(elemType);
    else {
        const i = t.fullname.lastIndexOf(".");
        return i === -1 ? "" : t.fullname.substr(0, i);
    }
}
function $7d684f9c58c88b9e$export$43bee75e5e14138e(t) {
    return $7d684f9c58c88b9e$export$cc56411ddc6ec102(t) != null;
}
function $7d684f9c58c88b9e$export$cc56411ddc6ec102(t) {
    var _a;
    return t.fullname === "[]" && ((_a = t.generics) === null || _a === void 0 ? void 0 : _a.length) === 1 ? t.generics[0] : undefined;
}
function $7d684f9c58c88b9e$export$6fbcf00b2c9d37c4(t) {
    return t.generics != null && t.generics.length > 0;
}
function $7d684f9c58c88b9e$export$9bc22e80ea04e051(t) {
    return t instanceof $7d684f9c58c88b9e$export$e2a012deca8e0eb5;
}
function $7d684f9c58c88b9e$export$9fc8c979231a883(t) {
    return t.enumCases != null && t.enumCases.length > 0;
}
function $7d684f9c58c88b9e$export$b0cce8e3db537309(t1, t2) {
    return t1.parent != null && (t1.parent.Equals(t2) || $7d684f9c58c88b9e$export$b0cce8e3db537309(t1.parent, t2));
}
function $7d684f9c58c88b9e$var$isErasedToNumber(t) {
    return $7d684f9c58c88b9e$export$9fc8c979231a883(t) || [
        $7d684f9c58c88b9e$export$e123199e7dc4cbf4.fullname,
        $7d684f9c58c88b9e$export$c006cc52c5c39616.fullname,
        $7d684f9c58c88b9e$export$482d438fe95b1d2b.fullname,
        $7d684f9c58c88b9e$export$d96ab529e3d5b757.fullname,
        $7d684f9c58c88b9e$export$d5481a1dd0e3648a.fullname,
        $7d684f9c58c88b9e$export$173d14c9e9e1a539.fullname,
        $7d684f9c58c88b9e$export$b51642c3501712df.fullname,
        $7d684f9c58c88b9e$export$8ff85e1c626cc255.fullname, 
    ].includes(t.fullname);
}
function $7d684f9c58c88b9e$export$142173e695a3a13(t, o) {
    switch(typeof o){
        case "boolean":
            return t.fullname === $7d684f9c58c88b9e$export$4b2f4351dd8f4737.fullname;
        case "string":
            return t.fullname === $7d684f9c58c88b9e$export$36bbd56a39d3f734.fullname;
        case "function":
            return $7d684f9c58c88b9e$export$f6e2535fb5126e54(t);
        case "number":
            return $7d684f9c58c88b9e$var$isErasedToNumber(t);
        default:
            return t.construct != null && o instanceof t.construct;
    }
}
function $7d684f9c58c88b9e$export$615e91928d222e7d(t) {
    return t.generics == null ? t : new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e(t.fullname, t.generics.map(()=>$7d684f9c58c88b9e$export$e63caa28a27bc62e
    ));
}
function $7d684f9c58c88b9e$export$1e17737c7179d31d(t) {
    var _a;
    return (_a = t.generics) === null || _a === void 0 ? void 0 : _a[0];
}
function $7d684f9c58c88b9e$export$70a5d58ec00f3c11(t) {
    if ($7d684f9c58c88b9e$export$9fc8c979231a883(t) && t.enumCases != null) return t.enumCases.map((kv)=>kv[1]
    );
    else throw new Error(`${t.fullname} is not an enum type`);
}
function $7d684f9c58c88b9e$export$cd2722bb53d0bea8(t) {
    if ($7d684f9c58c88b9e$export$9fc8c979231a883(t) && t.enumCases != null) return t.enumCases.map((kv)=>kv[0]
    );
    else throw new Error(`${t.fullname} is not an enum type`);
}
function $7d684f9c58c88b9e$var$getEnumCase(t, v) {
    if (t.enumCases != null) {
        if (typeof v === "string") {
            for (const kv of t.enumCases){
                if (kv[0] === v) return kv;
            }
            throw new Error(`'${v}' was not found in ${t.fullname}`);
        } else {
            for (const kv of t.enumCases){
                if (kv[1] === v) return kv;
            }
            // .NET returns the number even if it doesn't match any of the cases
            return [
                "",
                v
            ];
        }
    } else throw new Error(`${t.fullname} is not an enum type`);
}
function $7d684f9c58c88b9e$export$b5de0eeb63903617(t, str) {
    // TODO: better int parsing here, parseInt ceils floats: "4.8" -> 4
    const value = parseInt(str, 10);
    return $7d684f9c58c88b9e$var$getEnumCase(t, isNaN(value) ? str : value)[1];
}
function $7d684f9c58c88b9e$export$5fc9b63d26bd9368(t, str, defValue) {
    try {
        defValue.contents = $7d684f9c58c88b9e$export$b5de0eeb63903617(t, str);
        return true;
    } catch (_a) {
        return false;
    }
}
function $7d684f9c58c88b9e$export$e1d90e20ad64402a(t, v) {
    return $7d684f9c58c88b9e$var$getEnumCase(t, v)[0];
}
function $7d684f9c58c88b9e$export$2190ecbdbd91c18b(t, v) {
    try {
        const kv = $7d684f9c58c88b9e$var$getEnumCase(t, v);
        return kv[0] != null && kv[0] !== "";
    } catch (_a) {
    // supress error
    }
    return false;
}
function $7d684f9c58c88b9e$export$9842ee3eadac7211(t) {
    if (t.cases != null) return t.cases();
    else throw new Error(`${t.fullname} is not an F# union type`);
}
function $7d684f9c58c88b9e$export$b0ab498daed3dd7f(t) {
    if (t.fields != null) return t.fields();
    else throw new Error(`${t.fullname} is not an F# record type`);
}
function $7d684f9c58c88b9e$export$1f28650e18437653(t) {
    if ($7d684f9c58c88b9e$export$62b73b2f8f623580(t) && t.generics != null) return t.generics;
    else throw new Error(`${t.fullname} is not a tuple type`);
}
function $7d684f9c58c88b9e$export$5db3156b25539904(t) {
    if ($7d684f9c58c88b9e$export$f6e2535fb5126e54(t) && t.generics != null) {
        const gen = t.generics;
        return [
            gen[0],
            gen[1]
        ];
    } else throw new Error(`${t.fullname} is not an F# function type`);
}
function $7d684f9c58c88b9e$export$99587fd450e9f2d(t) {
    return t instanceof $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e ? t.cases != null : t instanceof $ae70510fbd2502e5$export$6cbb4f8fa0c4c986;
}
function $7d684f9c58c88b9e$export$6ba840931da50680(t) {
    return t instanceof $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e ? t.fields != null : t instanceof $ae70510fbd2502e5$export$5b163c6d120341e7;
}
function $7d684f9c58c88b9e$export$62b73b2f8f623580(t) {
    return t.fullname.startsWith("System.Tuple");
}
function $7d684f9c58c88b9e$export$f6e2535fb5126e54(t) {
    return t.fullname === "Microsoft.FSharp.Core.FSharpFunc`2";
}
function $7d684f9c58c88b9e$export$191ac0eced82ce46(v, t) {
    const cases = $7d684f9c58c88b9e$export$9842ee3eadac7211(t);
    const case_ = cases[v.tag];
    if (case_ == null) throw new Error(`Cannot find case ${v.name} in union type`);
    return [
        case_,
        v.fields
    ];
}
function $7d684f9c58c88b9e$export$309400f473e3880b(uci) {
    return uci.fields == null ? [] : uci.fields;
}
function $7d684f9c58c88b9e$export$9e3a3700ce0b0b89(v) {
    return Object.keys(v).map((k)=>v[k]
    );
}
function $7d684f9c58c88b9e$export$ba212be7256ab0fb(v, field) {
    return v[field[0]];
}
function $7d684f9c58c88b9e$export$6e8639fe0290f3b5(v) {
    return v;
}
function $7d684f9c58c88b9e$export$1a60394d1cea06d(v, i) {
    return v[i];
}
function $7d684f9c58c88b9e$export$e56a6584f93e6957(uci, values) {
    const expectedLength = (uci.fields || []).length;
    if (values.length !== expectedLength) throw new Error(`Expected an array of length ${expectedLength} but got ${values.length}`);
    return uci.declaringType.construct != null ? new uci.declaringType.construct(uci.tag, ...values) : {
    };
}
function $7d684f9c58c88b9e$export$b58500a28530c18(t, values) {
    const fields = $7d684f9c58c88b9e$export$b0ab498daed3dd7f(t);
    if (fields.length !== values.length) throw new Error(`Expected an array of length ${fields.length} but got ${values.length}`);
    return t.construct != null ? new t.construct(...values) : fields.reduce((obj, [key, _t], i)=>{
        obj[key] = values[i];
        return obj;
    }, {
    });
}
function $7d684f9c58c88b9e$export$f3583c34ca02a326(values, _t) {
    return values;
}
function $7d684f9c58c88b9e$export$89fe0430e2244c8d(t, generics) {
    return new $7d684f9c58c88b9e$export$f0c1fe746ce4bb1e(t.fullname, generics, t.construct, t.parent, t.fields, t.cases);
}
function $7d684f9c58c88b9e$export$99152e8d49ca4e7d(t, consArgs) {
    // TODO: Check if consArgs length is same as t.construct?
    // (Arg types can still be different)
    if (typeof t.construct === "function") return new t.construct(...consArgs !== null && consArgs !== void 0 ? consArgs : []);
    else if ($7d684f9c58c88b9e$var$isErasedToNumber(t)) return 0;
    else switch(t.fullname){
        case $7d684f9c58c88b9e$export$e63caa28a27bc62e.fullname:
            return {
            };
        case $7d684f9c58c88b9e$export$4b2f4351dd8f4737.fullname:
            return false;
        case "System.Int64":
        case "System.UInt64":
            // typeof<int64> and typeof<uint64> get transformed to class_type("System.Int64")
            // and class_type("System.UInt64") respectively. Test for the name of the primitive type.
            return $6918e3a1d48b1f14$export$62ffe363f1b08494(0);
        case $7d684f9c58c88b9e$export$71595c79c7738f26.fullname:
            return new $1899f7f029760344$export$2e2bcd8739ae039(0);
        case $7d684f9c58c88b9e$export$4b19e09c28c31d09.fullname:
            // Even though char is a value type, it's erased to string, and Unchecked.defaultof<char> is null
            return null;
        default:
            throw new Error(`Cannot access constructor of ${t.fullname}`);
    }
}
function $7d684f9c58c88b9e$export$bf7199a9ebcb84a9(propertyInfo, v) {
    return v[propertyInfo[0]];
}
// Fable.Core.Reflection
function $7d684f9c58c88b9e$var$assertUnion(x) {
    if (!(x instanceof $ae70510fbd2502e5$export$6cbb4f8fa0c4c986)) throw new Error(`Value is not an F# union type`);
}
function $7d684f9c58c88b9e$export$2687ce0d4702ff61(x) {
    $7d684f9c58c88b9e$var$assertUnion(x);
    return x.tag;
}
function $7d684f9c58c88b9e$export$b1398297ef8fc3ed(x) {
    $7d684f9c58c88b9e$var$assertUnion(x);
    return x.cases()[x.tag];
}
function $7d684f9c58c88b9e$export$d42e393b18dfe5d3(x) {
    $7d684f9c58c88b9e$var$assertUnion(x);
    return x.fields;
}


class $2c0e5be185a9291c$export$a7566b2ec63e8493 extends $ae70510fbd2502e5$export$5b163c6d120341e7 {
    constructor(line, block){
        super();
        this.line = line;
        this.block = block;
    }
}
function $2c0e5be185a9291c$export$2323b948e94eb234() {
    return $7d684f9c58c88b9e$export$d341dea990ee4af6("Rewrap.CustomMarkers", [], $2c0e5be185a9291c$export$a7566b2ec63e8493, ()=>[
            [
                "line",
                $7d684f9c58c88b9e$export$36bbd56a39d3f734
            ],
            [
                "block",
                $7d684f9c58c88b9e$export$2163aa004254c8ff($7d684f9c58c88b9e$export$36bbd56a39d3f734, $7d684f9c58c88b9e$export$36bbd56a39d3f734)
            ]
        ]
    );
}
class $2c0e5be185a9291c$export$b6afa8811b7e644e extends $ae70510fbd2502e5$export$5b163c6d120341e7 {
    constructor(language, path, getMarkers){
        super();
        this.language = language;
        this.path = path;
        this.getMarkers = getMarkers;
    }
}
function $2c0e5be185a9291c$export$63730b4b3ecce5f1() {
    return $7d684f9c58c88b9e$export$d341dea990ee4af6("Rewrap.File", [], $2c0e5be185a9291c$export$b6afa8811b7e644e, ()=>[
            [
                "language",
                $7d684f9c58c88b9e$export$36bbd56a39d3f734
            ],
            [
                "path",
                $7d684f9c58c88b9e$export$36bbd56a39d3f734
            ],
            [
                "getMarkers",
                $7d684f9c58c88b9e$export$7740535942dd94ab($2c0e5be185a9291c$export$2323b948e94eb234())
            ]
        ]
    );
}
class $2c0e5be185a9291c$export$c72f6eaae7b9adff extends $ae70510fbd2502e5$export$5b163c6d120341e7 {
    constructor(column, tabWidth, doubleSentenceSpacing, reformat, wholeComment){
        super();
        this.column = column | 0;
        this.tabWidth = tabWidth | 0;
        this.doubleSentenceSpacing = doubleSentenceSpacing;
        this.reformat = reformat;
        this.wholeComment = wholeComment;
    }
}
function $2c0e5be185a9291c$export$b088197328349f7e() {
    return $7d684f9c58c88b9e$export$d341dea990ee4af6("Rewrap.Settings", [], $2c0e5be185a9291c$export$c72f6eaae7b9adff, ()=>[
            [
                "column",
                $7d684f9c58c88b9e$export$d5481a1dd0e3648a
            ],
            [
                "tabWidth",
                $7d684f9c58c88b9e$export$d5481a1dd0e3648a
            ],
            [
                "doubleSentenceSpacing",
                $7d684f9c58c88b9e$export$4b2f4351dd8f4737
            ],
            [
                "reformat",
                $7d684f9c58c88b9e$export$4b2f4351dd8f4737
            ],
            [
                "wholeComment",
                $7d684f9c58c88b9e$export$4b2f4351dd8f4737
            ]
        ]
    );
}
class $2c0e5be185a9291c$export$13807d9ee5a34a42 extends $ae70510fbd2502e5$export$5b163c6d120341e7 {
    constructor(line, character){
        super();
        this.line = line | 0;
        this.character = character | 0;
    }
}
function $2c0e5be185a9291c$export$ad1154327601b750() {
    return $7d684f9c58c88b9e$export$d341dea990ee4af6("Rewrap.Position", [], $2c0e5be185a9291c$export$13807d9ee5a34a42, ()=>[
            [
                "line",
                $7d684f9c58c88b9e$export$d5481a1dd0e3648a
            ],
            [
                "character",
                $7d684f9c58c88b9e$export$d5481a1dd0e3648a
            ]
        ]
    );
}
class $2c0e5be185a9291c$export$e7cee7ee8bea336b extends $ae70510fbd2502e5$export$5b163c6d120341e7 {
    constructor(anchor, active){
        super();
        this.anchor = anchor;
        this.active = active;
    }
}
function $2c0e5be185a9291c$export$c86e63932fd599ad() {
    return $7d684f9c58c88b9e$export$d341dea990ee4af6("Rewrap.Selection", [], $2c0e5be185a9291c$export$e7cee7ee8bea336b, ()=>[
            [
                "anchor",
                $2c0e5be185a9291c$export$ad1154327601b750()
            ],
            [
                "active",
                $2c0e5be185a9291c$export$ad1154327601b750()
            ]
        ]
    );
}
class $2c0e5be185a9291c$export$6ed0965c9443aaa6 {
    constructor(startLine_, endLine_, lines_, selections_){
        this.startLine_ = startLine_ | 0;
        this.endLine_ = endLine_ | 0;
        this.lines_ = lines_;
        this.selections_ = selections_;
    }
    get startLine() {
        const _ = this;
        return _.startLine_ | 0;
    }
    get endLine() {
        const _ = this;
        return _.endLine_ | 0;
    }
    get lines() {
        const _ = this;
        return _.lines_;
    }
    get selections() {
        const _ = this;
        return _.selections_;
    }
    get isEmpty() {
        const _ = this;
        return _.endLine_ < _.startLine_ && _.lines_.length === 0;
    }
    static get empty() {
        return new $2c0e5be185a9291c$export$6ed0965c9443aaa6(0, -1, [], []);
    }
    withSelections(newSels) {
        const _ = this;
        return new $2c0e5be185a9291c$export$6ed0965c9443aaa6(_.startLine_, _.endLine_, _.lines_, newSels);
    }
}
function $2c0e5be185a9291c$export$1fd4bf095255a941() {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("Rewrap.Edit", void 0, $2c0e5be185a9291c$export$6ed0965c9443aaa6);
}
function $2c0e5be185a9291c$export$f8c8165fdcdd4fd3(startLine_, endLine_, lines_, selections_) {
    return new $2c0e5be185a9291c$export$6ed0965c9443aaa6(startLine_, endLine_, lines_, selections_);
}
class $2c0e5be185a9291c$export$e2baa7eb8e218448 extends $ae70510fbd2502e5$export$5b163c6d120341e7 {
    constructor(filePath, version, selections){
        super();
        this.filePath = filePath;
        this.version = version | 0;
        this.selections = selections;
    }
}
function $2c0e5be185a9291c$export$5bcc73c1c5a36d02() {
    return $7d684f9c58c88b9e$export$d341dea990ee4af6("Rewrap.DocState", [], $2c0e5be185a9291c$export$e2baa7eb8e218448, ()=>[
            [
                "filePath",
                $7d684f9c58c88b9e$export$36bbd56a39d3f734
            ],
            [
                "version",
                $7d684f9c58c88b9e$export$d5481a1dd0e3648a
            ],
            [
                "selections",
                $7d684f9c58c88b9e$export$9242f430c61b672d($2c0e5be185a9291c$export$c86e63932fd599ad())
            ]
        ]
    );
}



class $7e4c281993e75c03$export$9f9d0139d032da4f {
    constructor($7e4c281993e75c03$export$2ab9a8f9f1186f14){
        this.value = $7e4c281993e75c03$export$2ab9a8f9f1186f14;
    }
    toJSON() {
        return this.value;
    }
    // Don't add "Some" for consistency with erased options
    toString() {
        return String(this.value);
    }
    GetHashCode() {
        return $ed39e963967a3eea$export$2e619f11ca48bee4(this.value);
    }
    Equals(other) {
        if (other == null) return false;
        else return $ed39e963967a3eea$export$e9bab7fafb253603(this.value, other instanceof $7e4c281993e75c03$export$9f9d0139d032da4f ? other.value : other);
    }
    CompareTo(other) {
        if (other == null) return 1;
        else return $ed39e963967a3eea$export$398604a469f7de9a(this.value, other instanceof $7e4c281993e75c03$export$9f9d0139d032da4f ? other.value : other);
    }
}
function $7e4c281993e75c03$export$ad14ef4001db2bcd(x) {
    return x == null || x instanceof $7e4c281993e75c03$export$9f9d0139d032da4f ? new $7e4c281993e75c03$export$9f9d0139d032da4f(x) : x;
}
function $7e4c281993e75c03$export$2ab9a8f9f1186f14(x) {
    if (x == null) throw new Error("Option has no value");
    else return x instanceof $7e4c281993e75c03$export$9f9d0139d032da4f ? x.value : x;
}
function $7e4c281993e75c03$export$e724fd86d7aa146b(x) {
    // This will fail with unit probably, an alternative would be:
    // return x === null ? undefined : (x === undefined ? new Some(x) : x);
    return x == null ? undefined : x;
}
function $7e4c281993e75c03$export$b187f57ee1822bc5(x) {
    return x == null ? null : $7e4c281993e75c03$export$2ab9a8f9f1186f14(x);
}
function $7e4c281993e75c03$export$bffa455ba8c619a6(x) {
    return x == null ? undefined : $7e4c281993e75c03$export$2ab9a8f9f1186f14(x);
}
function $7e4c281993e75c03$export$45b10814cc054894(opt) {
    return opt == null ? [] : [
        $7e4c281993e75c03$export$2ab9a8f9f1186f14(opt)
    ];
}
function $7e4c281993e75c03$export$37721a79838ca038(opt, defaultValue) {
    return opt != null ? $7e4c281993e75c03$export$2ab9a8f9f1186f14(opt) : defaultValue;
}
function $7e4c281993e75c03$export$c90763f2293d7e67(opt, defThunk) {
    return opt != null ? $7e4c281993e75c03$export$2ab9a8f9f1186f14(opt) : defThunk();
}
function $7e4c281993e75c03$export$3dea766d36a8935f(predicate, opt) {
    return opt != null ? predicate($7e4c281993e75c03$export$2ab9a8f9f1186f14(opt)) ? opt : undefined : opt;
}
function $7e4c281993e75c03$export$871de8747c9eaa88(mapping, opt) {
    return opt != null ? $7e4c281993e75c03$export$ad14ef4001db2bcd(mapping($7e4c281993e75c03$export$2ab9a8f9f1186f14(opt))) : undefined;
}
function $7e4c281993e75c03$export$5be556bf484c4f10(mapping, opt1, opt2) {
    return opt1 != null && opt2 != null ? mapping($7e4c281993e75c03$export$2ab9a8f9f1186f14(opt1), $7e4c281993e75c03$export$2ab9a8f9f1186f14(opt2)) : undefined;
}
function $7e4c281993e75c03$export$f7389512af34c855(mapping, opt1, opt2, opt3) {
    return opt1 != null && opt2 != null && opt3 != null ? mapping($7e4c281993e75c03$export$2ab9a8f9f1186f14(opt1), $7e4c281993e75c03$export$2ab9a8f9f1186f14(opt2), $7e4c281993e75c03$export$2ab9a8f9f1186f14(opt3)) : undefined;
}
function $7e4c281993e75c03$export$2385a24977818dd0(binder, opt) {
    return opt != null ? binder($7e4c281993e75c03$export$2ab9a8f9f1186f14(opt)) : undefined;
}
function $7e4c281993e75c03$export$4324eaa7776d3b57(op, arg) {
    try {
        return $7e4c281993e75c03$export$ad14ef4001db2bcd(op(arg));
    } catch (_a) {
        return undefined;
    }
}



function $5a541a3f8220d610$export$882a7a2eca8e1502(cons, len) {
    if (typeof cons === "function") return new cons(len);
    else return new Array(len);
}
function $5a541a3f8220d610$var$indexNotFound() {
    throw new Error("An index satisfying the predicate was not found in the collection.");
}
function $5a541a3f8220d610$var$differentLengths() {
    throw new Error("Arrays had different lengths");
}
function $5a541a3f8220d610$export$10d8903dec122b9d(array1, array2, cons) {
    const len1 = array1.length | 0;
    const len2 = array2.length | 0;
    const newArray = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, len1 + len2);
    for(let i = 0; i <= len1 - 1; i++)newArray[i] = array1[i];
    for(let i_1 = 0; i_1 <= len2 - 1; i_1++)newArray[i_1 + len1] = array2[i_1];
    return newArray;
}
function $5a541a3f8220d610$export$3dea766d36a8935f(predicate, array) {
    return array.filter(predicate);
}
function $5a541a3f8220d610$export$9563e054e6f787fb(target, targetIndex, count, value) {
    const start = targetIndex | 0;
    return target.fill(value, start, start + count);
}
function $5a541a3f8220d610$export$482c79a7d4ed32a1(array, start, count) {
    const start_1 = start | 0;
    return array.slice(start_1, start_1 + count);
}
function $5a541a3f8220d610$export$4c7897fafd92b108(array) {
    if (array.length === 0) throw new Error("The input array was empty\\nParameter name: array");
    return array[array.length - 1];
}
function $5a541a3f8220d610$export$e5907b21d797cce6(array) {
    if (array.length === 0) return void 0;
    else return $7e4c281993e75c03$export$ad14ef4001db2bcd(array[array.length - 1]);
}
function $5a541a3f8220d610$export$e5bd5b3b105c2a71(f, source, cons) {
    const len = source.length | 0;
    const target = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, len);
    for(let i = 0; i <= len - 1; i++)target[i] = f(i, source[i]);
    return target;
}
function $5a541a3f8220d610$export$871de8747c9eaa88(f, source, cons) {
    const len = source.length | 0;
    const target = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, len);
    for(let i = 0; i <= len - 1; i++)target[i] = f(source[i]);
    return target;
}
function $5a541a3f8220d610$export$aded800c294daba4(f, source1, source2, cons) {
    if (source1.length !== source2.length) throw new Error("Arrays had different lengths");
    const result = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, source1.length);
    for(let i = 0; i <= source1.length - 1; i++)result[i] = f(i, source1[i], source2[i]);
    return result;
}
function $5a541a3f8220d610$export$5be556bf484c4f10(f, source1, source2, cons) {
    if (source1.length !== source2.length) throw new Error("Arrays had different lengths");
    const result = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, source1.length);
    for(let i = 0; i <= source1.length - 1; i++)result[i] = f(source1[i], source2[i]);
    return result;
}
function $5a541a3f8220d610$export$9ba7fb30dbbb3821(f, source1, source2, source3, cons) {
    if (source1.length !== source2.length ? true : source2.length !== source3.length) throw new Error("Arrays had different lengths");
    const result = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, source1.length);
    for(let i = 0; i <= source1.length - 1; i++)result[i] = f(i, source1[i], source2[i], source3[i]);
    return result;
}
function $5a541a3f8220d610$export$f7389512af34c855(f, source1, source2, source3, cons) {
    if (source1.length !== source2.length ? true : source2.length !== source3.length) throw new Error("Arrays had different lengths");
    const result = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, source1.length);
    for(let i = 0; i <= source1.length - 1; i++)result[i] = f(source1[i], source2[i], source3[i]);
    return result;
}
function $5a541a3f8220d610$export$9b19c2e3f2aab20f(mapping, state, array, cons) {
    const matchValue = array.length | 0;
    if (matchValue === 0) return [
        [],
        state
    ];
    else {
        let acc = state;
        const res = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, matchValue);
        for(let i = 0; i <= array.length - 1; i++){
            const patternInput = mapping(acc, array[i]);
            res[i] = patternInput[0];
            acc = patternInput[1];
        }
        return [
            res,
            acc
        ];
    }
}
function $5a541a3f8220d610$export$6d7c6abab27be307(mapping, array, state, cons) {
    const matchValue = array.length | 0;
    if (matchValue === 0) return [
        [],
        state
    ];
    else {
        let acc = state;
        const res = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, matchValue);
        for(let i = array.length - 1; i >= 0; i--){
            const patternInput = mapping(array[i], acc);
            res[i] = patternInput[0];
            acc = patternInput[1];
        }
        return [
            res,
            acc
        ];
    }
}
function $5a541a3f8220d610$export$ddf7c77acd0bf516(source) {
    const len = source.length | 0;
    const target = new Array(len);
    for(let i = 0; i <= len - 1; i++)target[i] = [
        i,
        source[i]
    ];
    return target;
}
function $5a541a3f8220d610$export$6a506b36fdea397d(count, array) {
    const count_1 = $ed39e963967a3eea$export$8960430cfd85939f((x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
    , 0, count) | 0;
    const start = 0;
    return array.slice(start, start + count_1);
}
function $5a541a3f8220d610$export$ee1b3e54f0441b22(arrays, cons) {
    const arrays_1 = Array.isArray(arrays) ? arrays : Array.from(arrays);
    const matchValue = arrays_1.length | 0;
    switch(matchValue){
        case 0:
            return $5a541a3f8220d610$export$882a7a2eca8e1502(cons, 0);
        case 1:
            return arrays_1[0];
        default:
            {
                let totalIdx = 0;
                let totalLength = 0;
                for(let idx = 0; idx <= arrays_1.length - 1; idx++){
                    const arr_1 = arrays_1[idx];
                    totalLength = totalLength + arr_1.length | 0;
                }
                const result = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, totalLength);
                for(let idx_1 = 0; idx_1 <= arrays_1.length - 1; idx_1++){
                    const arr_2 = arrays_1[idx_1];
                    for(let j = 0; j <= arr_2.length - 1; j++){
                        result[totalIdx] = arr_2[j];
                        totalIdx = totalIdx + 1 | 0;
                    }
                }
                return result;
            }
    }
}
function $5a541a3f8220d610$export$bb44f104e3c54dae(mapping, array, cons) {
    return $5a541a3f8220d610$export$ee1b3e54f0441b22($5a541a3f8220d610$export$871de8747c9eaa88(mapping, array, null), cons);
}
function $5a541a3f8220d610$export$9c59b80dda569a6e(predicate, array) {
    return array.filter(predicate);
}
function $5a541a3f8220d610$export$2344b14b097df817(value, array, eq) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i >= array.length) return false;
            else if (eq.Equals(value, array[i])) return true;
            else {
                i_mut = i + 1;
                continue loop;
            }
            break;
        }
    };
    return loop(0);
}
function $5a541a3f8220d610$export$6e22c362a0406a2c(cons) {
    return $5a541a3f8220d610$export$882a7a2eca8e1502(cons, 0);
}
function $5a541a3f8220d610$export$439306a4dcaafbb9(value, cons) {
    const ar = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, 1);
    ar[0] = value;
    return ar;
}
function $5a541a3f8220d610$export$2a47f398eeff8b01(count, initializer, cons) {
    if (count < 0) throw new Error("The input must be non-negative\\nParameter name: count");
    const result = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, count);
    for(let i = 0; i <= count - 1; i++)result[i] = initializer(i);
    return result;
}
function $5a541a3f8220d610$export$8f9d79d42bff1aac(array) {
    if (array.length < 2) return [];
    else {
        const count = array.length - 1 | 0;
        const result = new Array(count);
        for(let i = 0; i <= count - 1; i++)result[i] = [
            array[i],
            array[i + 1]
        ];
        return result;
    }
}
function $5a541a3f8220d610$export$606959e7ccb797f0(count, initial, cons) {
    if (count < 0) throw new Error("The input must be non-negative\\nParameter name: count");
    const result = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, count);
    for(let i = 0; i <= result.length - 1; i++)result[i] = initial;
    return result;
}
function $5a541a3f8220d610$export$784d13d8ee351f07(array) {
    return array.slice();
}
function $5a541a3f8220d610$export$66c1ae025e96b4bc(array) {
    const array_2 = array.slice();
    return array_2.reverse();
}
function $5a541a3f8220d610$export$c87d910e63d22ed6(folder, state, array, cons) {
    const res = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, array.length + 1);
    res[0] = state;
    for(let i = 0; i <= array.length - 1; i++)res[i + 1] = folder(res[i], array[i]);
    return res;
}
function $5a541a3f8220d610$export$7bd1078b283d99ad(folder, array, state, cons) {
    const res = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, array.length + 1);
    res[array.length] = state;
    for(let i = array.length - 1; i >= 0; i--)res[i] = folder(array[i], res[i + 1]);
    return res;
}
function $5a541a3f8220d610$export$955fc4a6c4be454d(count, array, cons) {
    if (count > array.length) throw new Error("count is greater than array length\\nParameter name: count");
    if (count === array.length) return $5a541a3f8220d610$export$882a7a2eca8e1502(cons, 0);
    else {
        const count_1 = (count < 0 ? 0 : count) | 0;
        return array.slice(count_1);
    }
}
function $5a541a3f8220d610$export$175dedd748069215(predicate, array, cons) {
    let count = 0;
    while(count < array.length && predicate(array[count]))count = count + 1 | 0;
    if (count === array.length) return $5a541a3f8220d610$export$882a7a2eca8e1502(cons, 0);
    else {
        const count_1 = count | 0;
        return array.slice(count_1);
    }
}
function $5a541a3f8220d610$export$b7df5d561049483a(count, array, cons) {
    if (count < 0) throw new Error("The input must be non-negative\\nParameter name: count");
    if (count > array.length) throw new Error("count is greater than array length\\nParameter name: count");
    if (count === 0) return $5a541a3f8220d610$export$882a7a2eca8e1502(cons, 0);
    else {
        const start = 0;
        return array.slice(start, start + count);
    }
}
function $5a541a3f8220d610$export$9384c7afe4015e42(predicate, array, cons) {
    let count = 0;
    while(count < array.length && predicate(array[count]))count = count + 1 | 0;
    if (count === 0) return $5a541a3f8220d610$export$882a7a2eca8e1502(cons, 0);
    else {
        const start = 0;
        const count_1 = count | 0;
        return array.slice(start, start + count_1);
    }
}
function $5a541a3f8220d610$export$7085ea1126df7818(x, array) {
    array.push(x);
}
function $5a541a3f8220d610$export$9760889ead41947a(range, array) {
    const enumerator = $ed39e963967a3eea$export$a41738691dcd8bea(range);
    try {
        while(enumerator["System.Collections.IEnumerator.MoveNext"]())$5a541a3f8220d610$export$7085ea1126df7818(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"](), array);
    } finally{
        enumerator.Dispose();
    }
}
function $5a541a3f8220d610$export$73ea5dcdf758ae6e(index, range, array) {
    let index_1;
    let i = index;
    const enumerator = $ed39e963967a3eea$export$a41738691dcd8bea(range);
    try {
        while(enumerator["System.Collections.IEnumerator.MoveNext"]()){
            const x = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            index_1 = i | 0, array.splice(index_1, 0, x);
            i = i + 1 | 0;
        }
    } finally{
        enumerator.Dispose();
    }
}
function $5a541a3f8220d610$export$94ff4a985fbc3b28(item_1, array) {
    const i = array.indexOf(item_1, 0);
    if (i > -1) {
        array.splice(i, 1);
        return true;
    } else return false;
}
function $5a541a3f8220d610$export$50ed39f80a942033(predicate, array) {
    const countRemoveAll = (count)=>{
        const i = array.findIndex(predicate);
        if (i > -1) {
            array.splice(i, 1);
            return countRemoveAll(count) + 1 | 0;
        } else return count | 0;
    };
    return countRemoveAll(0) | 0;
}
function $5a541a3f8220d610$export$1c7fb22ad89b2a7c(source, sourceIndex, target, targetIndex, count) {
    const diff = targetIndex - sourceIndex | 0;
    for(let i = sourceIndex; i <= sourceIndex + count - 1; i++)target[i + diff] = source[i];
}
function $5a541a3f8220d610$export$880a04cef8d49d7b(source, sourceIndex, target, targetIndex, count) {
    try {
        target.set(source.subarray(sourceIndex, sourceIndex + count), targetIndex);
    } catch (matchValue) {
        $5a541a3f8220d610$export$1c7fb22ad89b2a7c(source, sourceIndex, target, targetIndex, count);
    }
}
function $5a541a3f8220d610$export$305f7d4e9d4624f2(array, item_1, start, count) {
    const start_1 = $7e4c281993e75c03$export$37721a79838ca038(start, 0) | 0;
    const i = array.indexOf(item_1, start_1);
    if (count != null && i >= start_1 + $7e4c281993e75c03$export$2ab9a8f9f1186f14(count)) return -1;
    else return i | 0;
}
function $5a541a3f8220d610$export$b29f828819edca8d(f, source, cons) {
    const len = source.length | 0;
    const res1 = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, len);
    const res2 = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, len);
    let iTrue = 0;
    let iFalse = 0;
    for(let i = 0; i <= len - 1; i++)if (f(source[i])) {
        res1[iTrue] = source[i];
        iTrue = iTrue + 1 | 0;
    } else {
        res2[iFalse] = source[i];
        iFalse = iFalse + 1 | 0;
    }
    return [
        $5a541a3f8220d610$export$6a506b36fdea397d(iTrue, res1),
        $5a541a3f8220d610$export$6a506b36fdea397d(iFalse, res2)
    ];
}
function $5a541a3f8220d610$export$71aa6c912b956294(predicate, array) {
    const matchValue = array.find(predicate);
    if (matchValue == null) return $5a541a3f8220d610$var$indexNotFound();
    else return $7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue);
}
function $5a541a3f8220d610$export$d65cb303b863e3bf(predicate, array) {
    return array.find(predicate);
}
function $5a541a3f8220d610$export$de3a4d4a0d731119(predicate, array) {
    const matchValue = array.findIndex(predicate);
    if (matchValue > -1) return matchValue | 0;
    else return $5a541a3f8220d610$var$indexNotFound() | 0;
}
function $5a541a3f8220d610$export$5c13475397a61429(predicate, array) {
    const matchValue = array.findIndex(predicate);
    if (matchValue > -1) return matchValue;
    else return void 0;
}
function $5a541a3f8220d610$export$357523c63a2253b9(chooser, array) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i >= array.length) return $5a541a3f8220d610$var$indexNotFound();
            else {
                const matchValue = chooser(array[i]);
                if (matchValue != null) return $7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue);
                else {
                    i_mut = i + 1;
                    continue loop;
                }
            }
            break;
        }
    };
    return loop(0);
}
function $5a541a3f8220d610$export$d944e5c60afb688e(chooser, array) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i >= array.length) return void 0;
            else {
                const matchValue = chooser(array[i]);
                if (matchValue == null) {
                    i_mut = i + 1;
                    continue loop;
                } else return matchValue;
            }
            break;
        }
    };
    return loop(0);
}
function $5a541a3f8220d610$export$ec18defb06d12add(predicate, array) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i < 0) return $5a541a3f8220d610$var$indexNotFound();
            else if (predicate(array[i])) return array[i];
            else {
                i_mut = i - 1;
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1);
}
function $5a541a3f8220d610$export$36425195e236bb0f(predicate, array) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i < 0) return void 0;
            else if (predicate(array[i])) return $7e4c281993e75c03$export$ad14ef4001db2bcd(array[i]);
            else {
                i_mut = i - 1;
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1);
}
function $5a541a3f8220d610$export$8855a8be7bd3e9f8(predicate, array) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i < 0) return -1;
            else if (predicate(array[i])) return i | 0;
            else {
                i_mut = i - 1;
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1) | 0;
}
function $5a541a3f8220d610$export$78e19deb30f83296(predicate, array) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i < 0) return $5a541a3f8220d610$var$indexNotFound() | 0;
            else if (predicate(array[i])) return i | 0;
            else {
                i_mut = i - 1;
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1) | 0;
}
function $5a541a3f8220d610$export$e1cc954945760117(predicate, array) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i < 0) return void 0;
            else if (predicate(array[i])) return i;
            else {
                i_mut = i - 1;
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1);
}
function $5a541a3f8220d610$export$7877a478dd30fd3d(chooser, array, cons) {
    const res = [];
    for(let i = 0; i <= array.length - 1; i++){
        const matchValue = chooser(array[i]);
        if (matchValue != null) {
            const y = $7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue);
            res.push(y);
        }
    }
    if (typeof cons === "function") return $5a541a3f8220d610$export$871de8747c9eaa88((x)=>x
    , res, cons);
    else return res;
}
function $5a541a3f8220d610$export$c336ee92e62ce644(folder, state, array) {
    return array.reduce((delegateArg0, delegateArg1, delegateArg2)=>folder(delegateArg2, delegateArg0, delegateArg1)
    , state);
}
function $5a541a3f8220d610$export$93e2b83da34ff82a(folder, state, array) {
    return array.reduce((delegateArg0, delegateArg1)=>folder(delegateArg0, delegateArg1)
    , state);
}
function $5a541a3f8220d610$export$c1a059043cc9c119(action, array) {
    for(let i = 0; i <= array.length - 1; i++)action(array[i]);
}
function $5a541a3f8220d610$export$5a067165821eae2d(action, array) {
    for(let i = 0; i <= array.length - 1; i++)action(i, array[i]);
}
function $5a541a3f8220d610$export$d1731a37ee7d4fbb(action, array1, array2) {
    if (array1.length !== array2.length) $5a541a3f8220d610$var$differentLengths();
    for(let i = 0; i <= array1.length - 1; i++)action(array1[i], array2[i]);
}
function $5a541a3f8220d610$export$ab3c1f9aeb4948fd(action, array1, array2) {
    if (array1.length !== array2.length) $5a541a3f8220d610$var$differentLengths();
    for(let i = 0; i <= array1.length - 1; i++)action(i, array1[i], array2[i]);
}
function $5a541a3f8220d610$export$dd1bc94b04021eeb(array) {
    return array.length === 0;
}
function $5a541a3f8220d610$export$e5bd981f5eeebe3b(predicate, array) {
    return array.every(predicate);
}
function $5a541a3f8220d610$export$95e62ad65da8b7d2(f, array) {
    const size = array.length | 0;
    const res = array.slice();
    const checkFlags = new Array(size);
    $5a541a3f8220d610$export$5a067165821eae2d((i, x)=>{
        const j = f(i) | 0;
        if (j < 0 ? true : j >= size) throw new Error("Not a valid permutation");
        res[j] = x;
        checkFlags[j] = 1;
    }, array);
    if (!checkFlags.every((y)=>1 === y
    )) throw new Error("Not a valid permutation");
    return res;
}
function $5a541a3f8220d610$export$673bd84e9c48e6b2(target, lower, upper, source) {
    const lower_1 = $7e4c281993e75c03$export$37721a79838ca038(lower, 0) | 0;
    const upper_1 = $7e4c281993e75c03$export$37721a79838ca038(upper, 0) | 0;
    const length = (upper_1 > 0 ? upper_1 : target.length - 1) - lower_1 | 0;
    for(let i = 0; i <= length; i++)target[i + lower_1] = source[i];
}
function $5a541a3f8220d610$export$9a2c8f31e984c6d5(projection, xs, comparer) {
    xs.sort((x, y)=>comparer.Compare(projection(x), projection(y))
    );
}
function $5a541a3f8220d610$export$f76e9de28552298f(xs, comparer) {
    xs.sort((x, y)=>comparer.Compare(x, y)
    );
}
function $5a541a3f8220d610$export$97db5808d8f88186(xs, comparer) {
    const xs_1 = xs.slice();
    xs_1.sort((x, y)=>comparer.Compare(x, y)
    );
    return xs_1;
}
function $5a541a3f8220d610$export$b035e44d7bb4278f(projection, xs, comparer) {
    const xs_1 = xs.slice();
    xs_1.sort((x, y)=>comparer.Compare(projection(x), projection(y))
    );
    return xs_1;
}
function $5a541a3f8220d610$export$9a59fdf05ed66d15(xs, comparer) {
    const xs_1 = xs.slice();
    xs_1.sort((x, y)=>comparer.Compare(x, y) * -1
    );
    return xs_1;
}
function $5a541a3f8220d610$export$ca6dab212df382f6(projection, xs, comparer) {
    const xs_1 = xs.slice();
    xs_1.sort((x, y)=>comparer.Compare(projection(x), projection(y)) * -1
    );
    return xs_1;
}
function $5a541a3f8220d610$export$a9e7d1a6fdcfefde(comparer, xs) {
    const comparer_1 = comparer;
    const xs_1 = xs.slice();
    xs_1.sort(comparer_1);
    return xs_1;
}
function $5a541a3f8220d610$export$8016484fb8238078(xs, ys) {
    const len1 = xs.length | 0;
    const len2 = ys.length | 0;
    const res = new Array(len1 * len2);
    for(let i = 0; i <= xs.length - 1; i++)for(let j = 0; j <= ys.length - 1; j++)res[i * len2 + j] = [
        xs[i],
        ys[j]
    ];
    return res;
}
function $5a541a3f8220d610$export$c48e357c1a89b78d(generator, state) {
    const res = [];
    const loop = (state_1_mut)=>{
        loop: while(true){
            const state_1 = state_1_mut;
            const matchValue = generator(state_1);
            if (matchValue != null) {
                const x = matchValue[0];
                const s = matchValue[1];
                res.push(x);
                state_1_mut = s;
                continue loop;
            }
            break;
        }
    };
    loop(state);
    return res;
}
function $5a541a3f8220d610$export$23c8d3f8757cab88(array) {
    const len = array.length | 0;
    const res1 = new Array(len);
    const res2 = new Array(len);
    $5a541a3f8220d610$export$5a067165821eae2d((i, tupledArg)=>{
        res1[i] = tupledArg[0];
        res2[i] = tupledArg[1];
    }, array);
    return [
        res1,
        res2
    ];
}
function $5a541a3f8220d610$export$a52790ad56d35e3d(array) {
    const len = array.length | 0;
    const res1 = new Array(len);
    const res2 = new Array(len);
    const res3 = new Array(len);
    $5a541a3f8220d610$export$5a067165821eae2d((i, tupledArg)=>{
        res1[i] = tupledArg[0];
        res2[i] = tupledArg[1];
        res3[i] = tupledArg[2];
    }, array);
    return [
        res1,
        res2,
        res3
    ];
}
function $5a541a3f8220d610$export$8901015135f2fb22(array1, array2) {
    if (array1.length !== array2.length) $5a541a3f8220d610$var$differentLengths();
    const result = new Array(array1.length);
    for(let i = 0; i <= array1.length - 1; i++)result[i] = [
        array1[i],
        array2[i]
    ];
    return result;
}
function $5a541a3f8220d610$export$a3c629e5d025ffc1(array1, array2, array3) {
    if (array1.length !== array2.length ? true : array2.length !== array3.length) $5a541a3f8220d610$var$differentLengths();
    const result = new Array(array1.length);
    for(let i = 0; i <= array1.length - 1; i++)result[i] = [
        array1[i],
        array2[i],
        array3[i]
    ];
    return result;
}
function $5a541a3f8220d610$export$6302d00ba2848bf(chunkSize, array) {
    if (chunkSize < 1) throw new Error("The input must be positive.\\nParameter name: size");
    if (array.length === 0) return [
        []
    ];
    else {
        const result = [];
        for(let x = 0; x <= ~~Math.ceil(array.length / chunkSize) - 1; x++){
            let slice;
            const start_1 = x * chunkSize | 0;
            slice = array.slice(start_1, start_1 + chunkSize);
            result.push(slice);
        }
        return result;
    }
}
function $5a541a3f8220d610$export$b0d75975ac0be0e1(index, array) {
    let start;
    if (index < 0) throw new Error("The input must be non-negative\\nParameter name: index");
    if (index > array.length) throw new Error("The input sequence has an insufficient number of elements.\\nParameter name: index");
    return [
        (start = 0, array.slice(start, start + index)),
        array.slice(index)
    ];
}
function $5a541a3f8220d610$export$ecb3797c03e8ce0c(comparer, array1, array2) {
    if (array1 == null) {
        if (array2 == null) return 0;
        else return -1;
    } else if (array2 == null) return 1;
    else {
        let i = 0;
        let result = 0;
        const length1 = array1.length | 0;
        const length2 = array2.length | 0;
        if (length1 > length2) return 1;
        else if (length1 < length2) return -1;
        else {
            while(i < length1 && result === 0){
                result = comparer(array1[i], array2[i]) | 0;
                i = i + 1 | 0;
            }
            return result | 0;
        }
    }
}
function $5a541a3f8220d610$export$9d4fa3538bf09487(equals, array1, array2) {
    if (array1 == null) {
        if (array2 == null) return true;
        else return false;
    } else if (array2 == null) return false;
    else {
        let i = 0;
        let result = true;
        const length1 = array1.length | 0;
        const length2 = array2.length | 0;
        if (length1 > length2) return false;
        else if (length1 < length2) return false;
        else {
            while(i < length1 && result){
                result = equals(array1[i], array2[i]);
                i = i + 1 | 0;
            }
            return result;
        }
    }
}
function $5a541a3f8220d610$export$3367fc0da2c111f0(array) {
    if (array.length === 1) return array[0];
    else if (array.length === 0) throw new Error("The input sequence was empty\\nParameter name: array");
    else throw new Error("Input array too long\\nParameter name: array");
}
function $5a541a3f8220d610$export$22f0cfb94dab14ba(array) {
    if (array.length === 1) return $7e4c281993e75c03$export$ad14ef4001db2bcd(array[0]);
    else return void 0;
}
function $5a541a3f8220d610$export$5fd5031fecdacec3(array) {
    if (array.length === 0) throw new Error("The input array was empty\\nParameter name: array");
    else return array[0];
}
function $5a541a3f8220d610$export$1acbe849d0cb723e(array) {
    if (array.length === 0) return void 0;
    else return $7e4c281993e75c03$export$ad14ef4001db2bcd(array[0]);
}
function $5a541a3f8220d610$export$c01875f616615628(array) {
    if (array.length === 0) throw new Error("Not enough elements\\nParameter name: array");
    return array.slice(1);
}
function $5a541a3f8220d610$export$7061c75fc5af8b7e(index, array) {
    return array[index];
}
function $5a541a3f8220d610$export$3fe40c3a4d8cb094(index, array) {
    if (index < 0 ? true : index >= array.length) return void 0;
    else return $7e4c281993e75c03$export$ad14ef4001db2bcd(array[index]);
}
function $5a541a3f8220d610$export$550943be80b2169b(folder, array, state) {
    return array.reduceRight((delegateArg0, delegateArg1, delegateArg2)=>folder(delegateArg2, delegateArg1, delegateArg0)
    , state);
}
function $5a541a3f8220d610$export$c38b8353041a4f48(folder, array, state) {
    return array.reduceRight((delegateArg0, delegateArg1)=>folder(delegateArg1, delegateArg0)
    , state);
}
function $5a541a3f8220d610$export$665dec9c39c3adad(folder, state, array1, array2) {
    let acc = state;
    if (array1.length !== array2.length) throw new Error("Arrays have different lengths");
    for(let i = 0; i <= array1.length - 1; i++)acc = folder(i, acc, array1[i], array2[i]);
    return acc;
}
function $5a541a3f8220d610$export$6eef545db8c1f6e(folder, state, array1, array2) {
    return $5a541a3f8220d610$export$665dec9c39c3adad((_arg1, acc, x, y)=>folder(acc, x, y)
    , state, array1, array2);
}
function $5a541a3f8220d610$export$eb873be546c6a428(folder, array1, array2, state) {
    let acc = state;
    if (array1.length !== array2.length) $5a541a3f8220d610$var$differentLengths();
    const size = array1.length | 0;
    for(let i = 1; i <= size; i++)acc = folder(i - 1, array1[size - i], array2[size - i], acc);
    return acc;
}
function $5a541a3f8220d610$export$f04d6919de1a1f94(f, array1, array2, state) {
    return $5a541a3f8220d610$export$eb873be546c6a428((_arg1, x, y, acc)=>f(x, y, acc)
    , array1, array2, state);
}
function $5a541a3f8220d610$export$533b26079ad0b4b(reduction, array) {
    if (array.length === 0) throw new Error("The input array was empty");
    const reduction_1 = reduction;
    return array.reduce(reduction_1);
}
function $5a541a3f8220d610$export$90cf02207d4ef99b(reduction, array) {
    if (array.length === 0) throw new Error("The input array was empty");
    const reduction_1 = reduction;
    return array.reduceRight(reduction_1);
}
function $5a541a3f8220d610$export$a85e1ff32f9fff6e(predicate, array1, array2) {
    return $5a541a3f8220d610$export$6eef545db8c1f6e((acc, x, y)=>acc && predicate(x, y)
    , true, array1, array2);
}
function $5a541a3f8220d610$export$f9300ec6f6f05293(predicate_mut, array_mut, index_mut) {
    $5a541a3f8220d610$export$f9300ec6f6f05293: while(true){
        const predicate = predicate_mut, array = array_mut, index = index_mut;
        if (index === array.length) return false;
        else if (predicate(array[index])) return true;
        else {
            predicate_mut = predicate;
            array_mut = array;
            index_mut = index + 1;
            continue $5a541a3f8220d610$export$f9300ec6f6f05293;
        }
        break;
    }
}
function $5a541a3f8220d610$export$f7e9f41ea797a17(predicate, array) {
    return $5a541a3f8220d610$export$f9300ec6f6f05293(predicate, array, 0);
}
function $5a541a3f8220d610$export$5c0f099be5c4dc6a(predicate_mut, array1_mut, array2_mut, index_mut) {
    $5a541a3f8220d610$export$5c0f099be5c4dc6a: while(true){
        const predicate = predicate_mut, array1 = array1_mut, array2 = array2_mut, index = index_mut;
        if (index === array1.length) return false;
        else if (predicate(array1[index], array2[index])) return true;
        else {
            predicate_mut = predicate;
            array1_mut = array1;
            array2_mut = array2;
            index_mut = index + 1;
            continue $5a541a3f8220d610$export$5c0f099be5c4dc6a;
        }
        break;
    }
}
function $5a541a3f8220d610$export$d04ae74aaa2c0655(predicate, array1, array2) {
    if (array1.length !== array2.length) $5a541a3f8220d610$var$differentLengths();
    return $5a541a3f8220d610$export$5c0f099be5c4dc6a(predicate, array1, array2, 0);
}
function $5a541a3f8220d610$export$8a63f25cc62965f1(array, adder) {
    let acc = adder.GetZero();
    for(let i = 0; i <= array.length - 1; i++)acc = adder.Add(acc, array[i]);
    return acc;
}
function $5a541a3f8220d610$export$9e8299ab977385a3(projection, array, adder) {
    let acc = adder.GetZero();
    for(let i = 0; i <= array.length - 1; i++)acc = adder.Add(acc, projection(array[i]));
    return acc;
}
function $5a541a3f8220d610$export$ad1963a493908da4(projection, xs, comparer) {
    return $5a541a3f8220d610$export$533b26079ad0b4b((x, y)=>comparer.Compare(projection(y), projection(x)) > 0 ? y : x
    , xs);
}
function $5a541a3f8220d610$export$8960430cfd85939f(xs, comparer) {
    return $5a541a3f8220d610$export$533b26079ad0b4b((x, y)=>comparer.Compare(y, x) > 0 ? y : x
    , xs);
}
function $5a541a3f8220d610$export$8c826aa0fa59ac68(projection, xs, comparer) {
    return $5a541a3f8220d610$export$533b26079ad0b4b((x, y)=>comparer.Compare(projection(y), projection(x)) > 0 ? x : y
    , xs);
}
function $5a541a3f8220d610$export$96ec731ed4dcb222(xs, comparer) {
    return $5a541a3f8220d610$export$533b26079ad0b4b((x, y)=>comparer.Compare(y, x) > 0 ? x : y
    , xs);
}
function $5a541a3f8220d610$export$cc6710ee5f037d57(array, averager) {
    if (array.length === 0) throw new Error("The input array was empty\\nParameter name: array");
    let total = averager.GetZero();
    for(let i = 0; i <= array.length - 1; i++)total = averager.Add(total, array[i]);
    return averager.DivideByInt(total, array.length);
}
function $5a541a3f8220d610$export$9077387bc3582185(projection, array, averager) {
    if (array.length === 0) throw new Error("The input array was empty\\nParameter name: array");
    let total = averager.GetZero();
    for(let i = 0; i <= array.length - 1; i++)total = averager.Add(total, projection(array[i]));
    return averager.DivideByInt(total, array.length);
}
function $5a541a3f8220d610$export$5f2b86065ccf5a1(windowSize, source) {
    if (windowSize <= 0) throw new Error("windowSize must be positive");
    let res;
    const len = $ed39e963967a3eea$export$8960430cfd85939f((x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
    , 0, source.length - windowSize) | 0;
    res = new Array(len);
    for(let i = windowSize; i <= source.length; i++)res[i - windowSize] = source.slice(i - windowSize, i - 1 + 1);
    return res;
}
function $5a541a3f8220d610$export$7120a88bf3d39e8(chunks, array) {
    if (chunks < 1) throw new Error("The input must be positive.\\nParameter name: chunks");
    if (array.length === 0) return [
        []
    ];
    else {
        const result = [];
        const chunks_1 = $ed39e963967a3eea$export$96ec731ed4dcb222((x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
        , chunks, array.length) | 0;
        const minChunkSize = ~~(array.length / chunks_1) | 0;
        const chunksWithExtraItem = array.length % chunks_1 | 0;
        for(let i = 0; i <= chunks_1 - 1; i++){
            const chunkSize = (i < chunksWithExtraItem ? minChunkSize + 1 : minChunkSize) | 0;
            let slice;
            const start_1 = i * minChunkSize + $ed39e963967a3eea$export$96ec731ed4dcb222((x_1, y_1)=>$ed39e963967a3eea$export$591cc4a8025fba16(x_1, y_1)
            , chunksWithExtraItem, i) | 0;
            slice = array.slice(start_1, start_1 + chunkSize);
            result.push(slice);
        }
        return result;
    }
}
function $5a541a3f8220d610$export$9cb09a71b7d66923(arrays, cons) {
    const arrays_1 = Array.isArray(arrays) ? arrays : Array.from(arrays);
    const len = arrays_1.length | 0;
    if (len === 0) return new Array(0);
    else {
        const lenInner = arrays_1[0].length | 0;
        if (!$5a541a3f8220d610$export$e5bd981f5eeebe3b((a)=>a.length === lenInner
        , arrays_1)) $5a541a3f8220d610$var$differentLengths();
        const result = new Array(lenInner);
        for(let i = 0; i <= lenInner - 1; i++){
            result[i] = $5a541a3f8220d610$export$882a7a2eca8e1502(cons, len);
            for(let j = 0; j <= len - 1; j++)result[i][j] = arrays_1[j][i];
        }
        return result;
    }
}





const $a7dcd3f332f34f65$var$CaseRules = {
    None: 0,
    LowerFirst: 1,
    SnakeCase: 2,
    SnakeCaseAllCaps: 3,
    KebabCase: 4
};
function $a7dcd3f332f34f65$var$dashify(str, separator) {
    return str.replace(/[a-z]?[A-Z]/g, (m)=>m.length === 1 ? m.toLowerCase() : m.charAt(0) + separator + m.charAt(1).toLowerCase()
    );
}
function $a7dcd3f332f34f65$var$changeCase(str, caseRule) {
    switch(caseRule){
        case $a7dcd3f332f34f65$var$CaseRules.LowerFirst:
            return str.charAt(0).toLowerCase() + str.slice(1);
        case $a7dcd3f332f34f65$var$CaseRules.SnakeCase:
            return $a7dcd3f332f34f65$var$dashify(str, "_");
        case $a7dcd3f332f34f65$var$CaseRules.SnakeCaseAllCaps:
            return $a7dcd3f332f34f65$var$dashify(str, "_").toUpperCase();
        case $a7dcd3f332f34f65$var$CaseRules.KebabCase:
            return $a7dcd3f332f34f65$var$dashify(str, "-");
        case $a7dcd3f332f34f65$var$CaseRules.None:
        default:
            return str;
    }
}
function $a7dcd3f332f34f65$export$c0695a590b8490e7(fields, caseRule1 = $a7dcd3f332f34f65$var$CaseRules.None) {
    const obj = {
    };
    const definedCaseRule = caseRule1;
    function fail(kvPair) {
        throw new Error("Cannot infer key and value of " + String(kvPair));
    }
    function assign(key, caseRule, value) {
        key = $a7dcd3f332f34f65$var$changeCase(key, caseRule);
        obj[key] = value;
    }
    for (let kvPair1 of fields){
        let caseRule = $a7dcd3f332f34f65$var$CaseRules.None;
        if (kvPair1 == null) fail(kvPair1);
        // Deflate unions and use the defined case rule
        if (kvPair1 instanceof $ae70510fbd2502e5$export$6cbb4f8fa0c4c986) {
            const name = kvPair1.cases()[kvPair1.tag];
            kvPair1 = kvPair1.fields.length === 0 ? name : [
                name
            ].concat(kvPair1.fields);
            caseRule = definedCaseRule;
        }
        if (Array.isArray(kvPair1)) switch(kvPair1.length){
            case 0:
                fail(kvPair1);
                break;
            case 1:
                assign(kvPair1[0], caseRule, true);
                break;
            case 2:
                const value = kvPair1[1];
                assign(kvPair1[0], caseRule, value);
                break;
            default:
                assign(kvPair1[0], caseRule, kvPair1.slice(1));
        }
        else if (typeof kvPair1 === "string") assign(kvPair1, caseRule, true);
        else fail(kvPair1);
    }
    return obj;
}
function $a7dcd3f332f34f65$export$ce913dab6077e540(v, map) {
    for (const kv of map){
        if ($ed39e963967a3eea$export$e9bab7fafb253603(v, kv[1])) return true;
    }
    return false;
}
function $a7dcd3f332f34f65$export$8e0f4a40881f4a6f(map, key, defaultValue) {
    if (map.has(key)) {
        defaultValue.contents = map.get(key);
        return true;
    }
    return false;
}
function $a7dcd3f332f34f65$export$59d4ed6bef8b84dd(v, set) {
    if (set.has(v)) return false;
    set.add(v);
    return true;
}
function $a7dcd3f332f34f65$export$640abc42af5f7b25(dict, k, v) {
    if (dict.has(k)) throw new Error("An item with the same key has already been added. Key: " + k);
    dict.set(k, v);
}
function $a7dcd3f332f34f65$export$6e0d12c66f82a152(map, key) {
    if (map.has(key)) return map.get(key);
    else throw new Error(`The given key '${key}' was not present in the dictionary.`);
}



let $fa430270a1cc70db$var$lastDocState = new $2c0e5be185a9291c$export$e2baa7eb8e218448("", 0, []);
const $fa430270a1cc70db$var$docWrappingColumns = new Map([]);
function $fa430270a1cc70db$export$2eecdacd3f587409(filePath, rulers) {
    let x;
    const setAndReturn = (column)=>{
        $fa430270a1cc70db$var$docWrappingColumns.set(filePath, column);
        return column | 0;
    };
    const firstRuler = $5a541a3f8220d610$export$5fd5031fecdacec3(rulers) | 0;
    if (!$fa430270a1cc70db$var$docWrappingColumns.has(filePath)) return setAndReturn(firstRuler) | 0;
    else return setAndReturn($7e4c281993e75c03$export$37721a79838ca038($5a541a3f8220d610$export$d65cb303b863e3bf((x = $a7dcd3f332f34f65$export$6e0d12c66f82a152($fa430270a1cc70db$var$docWrappingColumns, filePath) | 0, (y)=>x === y
    ), rulers), firstRuler)) | 0;
}
function $fa430270a1cc70db$export$e6ea2f8a2f53b195(docState, rulers) {
    let x;
    const filePath = docState.filePath;
    if (!$fa430270a1cc70db$var$docWrappingColumns.has(filePath)) return $fa430270a1cc70db$export$2eecdacd3f587409(filePath, rulers) | 0;
    else {
        const rulerIndex = $7e4c281993e75c03$export$37721a79838ca038($7e4c281993e75c03$export$871de8747c9eaa88((i)=>{
            if ($ed39e963967a3eea$export$e9bab7fafb253603(docState, $fa430270a1cc70db$var$lastDocState)) return (i + 1) % rulers.length | 0;
            else return i | 0;
        }, $5a541a3f8220d610$export$5c13475397a61429((x = $a7dcd3f332f34f65$export$6e0d12c66f82a152($fa430270a1cc70db$var$docWrappingColumns, filePath) | 0, (y)=>x === y
        ), rulers)), 0) | 0;
        $fa430270a1cc70db$var$docWrappingColumns.set(filePath, rulers[rulerIndex]);
        return $a7dcd3f332f34f65$export$6e0d12c66f82a152($fa430270a1cc70db$var$docWrappingColumns, filePath) | 0;
    }
}
function $fa430270a1cc70db$export$5b4c6cdc0f868d63(docState) {
    $fa430270a1cc70db$var$lastDocState = docState;
}








function $54378cf75d4620d7$export$4dcf2a40c0851df0(offset) {
    const isMinus = offset < 0;
    offset = Math.abs(offset);
    const hours = ~~(offset / 3600000);
    const minutes = offset % 3600000 / 60000;
    return (isMinus ? "-" : "+") + $ed39e963967a3eea$export$eeb1958fe3944641(hours, 2) + ":" + $ed39e963967a3eea$export$eeb1958fe3944641(minutes, 2);
}
function $54378cf75d4620d7$export$44fcf6ab0130c000($54378cf75d4620d7$export$324d90190a8b822a, half) {
    const str = $54378cf75d4620d7$export$324d90190a8b822a.toISOString();
    return half === "first" ? str.substring(0, str.indexOf("T")) : str.substring(str.indexOf("T") + 1, str.length - 1);
}
function $54378cf75d4620d7$var$dateToISOString(d, utc) {
    if (utc) return d.toISOString();
    else {
        // JS Date is always local
        const printOffset = d.kind == null ? true : d.kind === 2 /* Local */ ;
        return $ed39e963967a3eea$export$eeb1958fe3944641(d.getFullYear(), 4) + "-" + $ed39e963967a3eea$export$eeb1958fe3944641(d.getMonth() + 1, 2) + "-" + $ed39e963967a3eea$export$eeb1958fe3944641(d.getDate(), 2) + "T" + $ed39e963967a3eea$export$eeb1958fe3944641(d.getHours(), 2) + ":" + $ed39e963967a3eea$export$eeb1958fe3944641(d.getMinutes(), 2) + ":" + $ed39e963967a3eea$export$eeb1958fe3944641(d.getSeconds(), 2) + "." + $ed39e963967a3eea$export$eeb1958fe3944641(d.getMilliseconds(), 3) + (printOffset ? $54378cf75d4620d7$export$4dcf2a40c0851df0(d.getTimezoneOffset() * -60000) : "");
    }
}
function $54378cf75d4620d7$var$dateToISOStringWithOffset(dateWithOffset, offset) {
    const str = dateWithOffset.toISOString();
    return str.substring(0, str.length - 1) + $54378cf75d4620d7$export$4dcf2a40c0851df0(offset);
}
function $54378cf75d4620d7$var$dateToStringWithCustomFormat($54378cf75d4620d7$export$324d90190a8b822a, format, utc) {
    return format.replace(/(\w)\1*/g, (match)=>{
        let rep = Number.NaN;
        switch(match.substring(0, 1)){
            case "y":
                const y = utc ? $54378cf75d4620d7$export$324d90190a8b822a.getUTCFullYear() : $54378cf75d4620d7$export$324d90190a8b822a.getFullYear();
                rep = match.length < 4 ? y % 100 : y;
                break;
            case "M":
                rep = (utc ? $54378cf75d4620d7$export$324d90190a8b822a.getUTCMonth() : $54378cf75d4620d7$export$324d90190a8b822a.getMonth()) + 1;
                break;
            case "d":
                rep = utc ? $54378cf75d4620d7$export$324d90190a8b822a.getUTCDate() : $54378cf75d4620d7$export$324d90190a8b822a.getDate();
                break;
            case "H":
                rep = utc ? $54378cf75d4620d7$export$324d90190a8b822a.getUTCHours() : $54378cf75d4620d7$export$324d90190a8b822a.getHours();
                break;
            case "h":
                const h = utc ? $54378cf75d4620d7$export$324d90190a8b822a.getUTCHours() : $54378cf75d4620d7$export$324d90190a8b822a.getHours();
                rep = h > 12 ? h % 12 : h;
                break;
            case "m":
                rep = utc ? $54378cf75d4620d7$export$324d90190a8b822a.getUTCMinutes() : $54378cf75d4620d7$export$324d90190a8b822a.getMinutes();
                break;
            case "s":
                rep = utc ? $54378cf75d4620d7$export$324d90190a8b822a.getUTCSeconds() : $54378cf75d4620d7$export$324d90190a8b822a.getSeconds();
                break;
            case "f":
                rep = utc ? $54378cf75d4620d7$export$324d90190a8b822a.getUTCMilliseconds() : $54378cf75d4620d7$export$324d90190a8b822a.getMilliseconds();
                break;
        }
        if (Number.isNaN(rep)) return match;
        else return rep < 10 && match.length > 1 ? "0" + rep : "" + rep;
    });
}
function $54378cf75d4620d7$var$dateToStringWithOffset($54378cf75d4620d7$export$324d90190a8b822a, format) {
    var _a, _b, _c;
    const d = new Date($54378cf75d4620d7$export$324d90190a8b822a.getTime() + ((_a = $54378cf75d4620d7$export$324d90190a8b822a.offset) !== null && _a !== void 0 ? _a : 0));
    if (typeof format !== "string") return d.toISOString().replace(/\.\d+/, "").replace(/[A-Z]|\.\d+/g, " ") + $54378cf75d4620d7$export$4dcf2a40c0851df0((_b = $54378cf75d4620d7$export$324d90190a8b822a.offset) !== null && _b !== void 0 ? _b : 0);
    else if (format.length === 1) switch(format){
        case "D":
        case "d":
            return $54378cf75d4620d7$export$44fcf6ab0130c000(d, "first");
        case "T":
        case "t":
            return $54378cf75d4620d7$export$44fcf6ab0130c000(d, "second");
        case "O":
        case "o":
            return $54378cf75d4620d7$var$dateToISOStringWithOffset(d, (_c = $54378cf75d4620d7$export$324d90190a8b822a.offset) !== null && _c !== void 0 ? _c : 0);
        default:
            throw new Error("Unrecognized Date print format");
    }
    else return $54378cf75d4620d7$var$dateToStringWithCustomFormat(d, format, true);
}
function $54378cf75d4620d7$var$dateToStringWithKind($54378cf75d4620d7$export$324d90190a8b822a, format) {
    const utc = $54378cf75d4620d7$export$324d90190a8b822a.kind === 1 /* UTC */ ;
    if (typeof format !== "string") return utc ? $54378cf75d4620d7$export$324d90190a8b822a.toUTCString() : $54378cf75d4620d7$export$324d90190a8b822a.toLocaleString();
    else if (format.length === 1) switch(format){
        case "D":
        case "d":
            return utc ? $54378cf75d4620d7$export$44fcf6ab0130c000($54378cf75d4620d7$export$324d90190a8b822a, "first") : $54378cf75d4620d7$export$324d90190a8b822a.toLocaleDateString();
        case "T":
        case "t":
            return utc ? $54378cf75d4620d7$export$44fcf6ab0130c000($54378cf75d4620d7$export$324d90190a8b822a, "second") : $54378cf75d4620d7$export$324d90190a8b822a.toLocaleTimeString();
        case "O":
        case "o":
            return $54378cf75d4620d7$var$dateToISOString($54378cf75d4620d7$export$324d90190a8b822a, utc);
        default:
            throw new Error("Unrecognized Date print format");
    }
    else return $54378cf75d4620d7$var$dateToStringWithCustomFormat($54378cf75d4620d7$export$324d90190a8b822a, format, utc);
}
function $54378cf75d4620d7$export$f84e8e69fd4488a5($54378cf75d4620d7$export$324d90190a8b822a, format, _provider) {
    return $54378cf75d4620d7$export$324d90190a8b822a.offset != null ? $54378cf75d4620d7$var$dateToStringWithOffset($54378cf75d4620d7$export$324d90190a8b822a, format) : $54378cf75d4620d7$var$dateToStringWithKind($54378cf75d4620d7$export$324d90190a8b822a, format);
}
function $54378cf75d4620d7$export$82f9ebd9adeba146(value, kind) {
    const d = new Date(value);
    d.kind = (kind == null ? 0 /* Unspecified */  : kind) | 0;
    return d;
}
function $54378cf75d4620d7$export$b4dd4c63617c9281(ticks, kind) {
    ticks = $6918e3a1d48b1f14$export$5f36b26c3833b3ba(ticks);
    kind = kind != null ? kind : 2 /* Local */ ; // better default than Unspecified
    let $54378cf75d4620d7$export$324d90190a8b822a = $54378cf75d4620d7$export$82f9ebd9adeba146($6918e3a1d48b1f14$export$2044bef34fee81ea(ticks), kind);
    // Ticks are local to offset (in this case, either UTC or Local/Unknown).
    // If kind is anything but UTC, that means that the tick number was not
    // in utc, thus getTime() cannot return UTC, and needs to be shifted.
    if (kind !== 1 /* UTC */ ) $54378cf75d4620d7$export$324d90190a8b822a = $54378cf75d4620d7$export$82f9ebd9adeba146($54378cf75d4620d7$export$324d90190a8b822a.getTime() - $ed39e963967a3eea$export$b4360650442640a0($54378cf75d4620d7$export$324d90190a8b822a), kind);
    return $54378cf75d4620d7$export$324d90190a8b822a;
}
function $54378cf75d4620d7$export$e10d98d82915c35a($54378cf75d4620d7$export$324d90190a8b822a, kind) {
    var _a;
    switch(kind){
        case 1 /* UTC */ :
            return $54378cf75d4620d7$export$82f9ebd9adeba146($54378cf75d4620d7$export$324d90190a8b822a.getTime(), 1 /* UTC */ );
        case 2 /* Local */ :
            return $54378cf75d4620d7$export$82f9ebd9adeba146($54378cf75d4620d7$export$324d90190a8b822a.getTime(), 2 /* Local */ );
        default:
            const d = $54378cf75d4620d7$export$82f9ebd9adeba146($54378cf75d4620d7$export$324d90190a8b822a.getTime() + ((_a = $54378cf75d4620d7$export$324d90190a8b822a.offset) !== null && _a !== void 0 ? _a : 0), kind);
            return $54378cf75d4620d7$export$82f9ebd9adeba146(d.getTime() - $ed39e963967a3eea$export$b4360650442640a0(d), kind);
    }
}
function $54378cf75d4620d7$export$3d27d42b1034de5c($54378cf75d4620d7$export$324d90190a8b822a) {
    return $6918e3a1d48b1f14$export$b04aee43a70c325e($54378cf75d4620d7$export$324d90190a8b822a.getTime(), $ed39e963967a3eea$export$b4360650442640a0($54378cf75d4620d7$export$324d90190a8b822a));
}
function $54378cf75d4620d7$export$5805e19da86cbb3c() {
    // This is "0001-01-01T00:00:00.000Z", actual JS min value is -8640000000000000
    return $54378cf75d4620d7$export$82f9ebd9adeba146(-62135596800000, 0 /* Unspecified */ );
}
function $54378cf75d4620d7$export$b9dc90d6499a9909() {
    // This is "9999-12-31T23:59:59.999Z", actual JS max value is 8640000000000000
    return $54378cf75d4620d7$export$82f9ebd9adeba146(253402300799999, 0 /* Unspecified */ );
}
function $54378cf75d4620d7$export$a6658d265f3f7695(input) {
    function fail() {
        throw new Error(`The string is not a valid Date: ${input}`);
    }
    if (input === null || input.trim() === "") fail();
    // ISO dates without TZ are parsed as UTC. Adding time without TZ keeps them local.
    if (input.length === 10 && input[4] === "-" && input[7] === "-") input += "T00:00:00";
    let $54378cf75d4620d7$export$324d90190a8b822a = new Date(input);
    let offset = null;
    if (isNaN($54378cf75d4620d7$export$324d90190a8b822a.getTime())) {
        // Try to check strings JS Date cannot parse (see #1045, #1422)
        // tslint:disable-next-line:max-line-length
        const m = /^\s*(\d+[^\w\s:]\d+[^\w\s:]\d+)?\s*(\d+:\d+(?::\d+(?:\.\d+)?)?)?\s*([AaPp][Mm])?\s*(Z|[+-]([01]?\d):?([0-5]?\d)?)?\s*$/.exec(input);
        if (m != null) {
            let baseDate;
            let timeInSeconds = 0;
            if (m[2] != null) {
                const timeParts = m[2].split(":");
                timeInSeconds = parseInt(timeParts[0], 10) * 3600 + parseInt(timeParts[1] || "0", 10) * 60 + parseFloat(timeParts[2] || "0");
                if (m[3] != null && m[3].toUpperCase() === "PM") timeInSeconds += 720;
            }
            if (m[4] != null) {
                if (m[1] != null) baseDate = new Date(m[1] + " UTC");
                else {
                    const d = new Date();
                    baseDate = new Date(d.getUTCFullYear() + "/" + (d.getUTCMonth() + 1) + "/" + d.getUTCDate());
                }
                if (m[4] === "Z") offset = "Z";
                else {
                    let offsetInMinutes = parseInt(m[5], 10) * 60 + parseInt(m[6] || "0", 10);
                    if (m[4][0] === "-") offsetInMinutes *= -1;
                    offset = offsetInMinutes;
                    timeInSeconds -= offsetInMinutes * 60;
                }
            } else if (m[1] != null) baseDate = new Date(m[1]);
            else {
                const d = new Date();
                baseDate = new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate());
            }
            $54378cf75d4620d7$export$324d90190a8b822a = new Date(baseDate.getTime() + timeInSeconds * 1000);
            // correct for daylight savings time
            $54378cf75d4620d7$export$324d90190a8b822a = new Date($54378cf75d4620d7$export$324d90190a8b822a.getTime() + ($54378cf75d4620d7$export$324d90190a8b822a.getTimezoneOffset() - baseDate.getTimezoneOffset()) * 60000);
        } else fail();
        // Check again the date is valid after transformations, see #2229
        if (isNaN($54378cf75d4620d7$export$324d90190a8b822a.getTime())) fail();
    }
    return [
        $54378cf75d4620d7$export$324d90190a8b822a,
        offset
    ];
}
function $54378cf75d4620d7$export$98e6a39c04603d36(str, detectUTC = false) {
    const [$54378cf75d4620d7$export$324d90190a8b822a, offset] = $54378cf75d4620d7$export$a6658d265f3f7695(str);
    // .NET always parses DateTime as Local if there's offset info (even "Z")
    // Newtonsoft.Json uses UTC if the offset is "Z"
    const kind = offset != null ? detectUTC && offset === "Z" ? 1 /* UTC */  : 2 /* Local */  : 0 /* Unspecified */ ;
    return $54378cf75d4620d7$export$82f9ebd9adeba146($54378cf75d4620d7$export$324d90190a8b822a.getTime(), kind);
}
function $54378cf75d4620d7$export$468ff95b83d315e5(v, defValue) {
    try {
        defValue.contents = $54378cf75d4620d7$export$98e6a39c04603d36(v);
        return true;
    } catch (_err) {
        return false;
    }
}
function $54378cf75d4620d7$export$185802fd694ee1f5($54378cf75d4620d7$export$31803937850fb2da, $54378cf75d4620d7$export$af5de1609f06c8e6, $54378cf75d4620d7$export$d2d39d1adcc883a2, h = 0, m = 0, s = 0, ms = 0, kind) {
    const dateValue = kind === 1 /* UTC */  ? Date.UTC($54378cf75d4620d7$export$31803937850fb2da, $54378cf75d4620d7$export$af5de1609f06c8e6 - 1, $54378cf75d4620d7$export$d2d39d1adcc883a2, h, m, s, ms) : new Date($54378cf75d4620d7$export$31803937850fb2da, $54378cf75d4620d7$export$af5de1609f06c8e6 - 1, $54378cf75d4620d7$export$d2d39d1adcc883a2, h, m, s, ms).getTime();
    if (isNaN(dateValue)) throw new Error("The parameters describe an unrepresentable Date.");
    const $54378cf75d4620d7$export$324d90190a8b822a = $54378cf75d4620d7$export$82f9ebd9adeba146(dateValue, kind);
    if ($54378cf75d4620d7$export$31803937850fb2da <= 99) $54378cf75d4620d7$export$324d90190a8b822a.setFullYear($54378cf75d4620d7$export$31803937850fb2da, $54378cf75d4620d7$export$af5de1609f06c8e6 - 1, $54378cf75d4620d7$export$d2d39d1adcc883a2);
    return $54378cf75d4620d7$export$324d90190a8b822a;
}
function $54378cf75d4620d7$export$461939dd4422153() {
    return $54378cf75d4620d7$export$82f9ebd9adeba146(Date.now(), 2 /* Local */ );
}
function $54378cf75d4620d7$export$a56f095995763cca() {
    return $54378cf75d4620d7$export$82f9ebd9adeba146(Date.now(), 1 /* UTC */ );
}
function $54378cf75d4620d7$export$d0bdf45af03a6ea3() {
    return $54378cf75d4620d7$export$324d90190a8b822a($54378cf75d4620d7$export$461939dd4422153());
}
function $54378cf75d4620d7$export$553d7fa8e3805fc0($54378cf75d4620d7$export$31803937850fb2da) {
    return $54378cf75d4620d7$export$31803937850fb2da % 4 === 0 && $54378cf75d4620d7$export$31803937850fb2da % 100 !== 0 || $54378cf75d4620d7$export$31803937850fb2da % 400 === 0;
}
function $54378cf75d4620d7$export$4169ecd548fbc13a($54378cf75d4620d7$export$31803937850fb2da, $54378cf75d4620d7$export$af5de1609f06c8e6) {
    return $54378cf75d4620d7$export$af5de1609f06c8e6 === 2 ? $54378cf75d4620d7$export$553d7fa8e3805fc0($54378cf75d4620d7$export$31803937850fb2da) ? 29 : 28 : $54378cf75d4620d7$export$af5de1609f06c8e6 >= 8 ? $54378cf75d4620d7$export$af5de1609f06c8e6 % 2 === 0 ? 31 : 30 : $54378cf75d4620d7$export$af5de1609f06c8e6 % 2 === 0 ? 30 : 31;
}
function $54378cf75d4620d7$export$3230e995afdc9bec($54378cf75d4620d7$export$324d90190a8b822a) {
    return $54378cf75d4620d7$export$324d90190a8b822a.kind === 1 /* UTC */  ? $54378cf75d4620d7$export$324d90190a8b822a : $54378cf75d4620d7$export$82f9ebd9adeba146($54378cf75d4620d7$export$324d90190a8b822a.getTime(), 1 /* UTC */ );
}
function $54378cf75d4620d7$export$b96ad347bdf3bd16($54378cf75d4620d7$export$324d90190a8b822a) {
    return $54378cf75d4620d7$export$324d90190a8b822a.kind === 2 /* Local */  ? $54378cf75d4620d7$export$324d90190a8b822a : $54378cf75d4620d7$export$82f9ebd9adeba146($54378cf75d4620d7$export$324d90190a8b822a.getTime(), 2 /* Local */ );
}
function $54378cf75d4620d7$export$5289b38f662a812a(d, kind) {
    return $54378cf75d4620d7$export$185802fd694ee1f5($54378cf75d4620d7$export$31803937850fb2da(d), $54378cf75d4620d7$export$af5de1609f06c8e6(d), $54378cf75d4620d7$export$d2d39d1adcc883a2(d), $54378cf75d4620d7$export$842e383dfc19bc67(d), $54378cf75d4620d7$export$1cacba1045a8e790(d), $54378cf75d4620d7$export$3d3c77ce7df7d30d(d), $54378cf75d4620d7$export$edc5e5cb87280477(d), kind);
}
function $54378cf75d4620d7$export$54a89be6af0881dc(d) {
    return $54378cf75d4620d7$export$842e383dfc19bc67(d) * 3600000 + $54378cf75d4620d7$export$1cacba1045a8e790(d) * 60000 + $54378cf75d4620d7$export$3d3c77ce7df7d30d(d) * 1000 + $54378cf75d4620d7$export$edc5e5cb87280477(d);
}
function $54378cf75d4620d7$export$324d90190a8b822a(d) {
    return $54378cf75d4620d7$export$185802fd694ee1f5($54378cf75d4620d7$export$31803937850fb2da(d), $54378cf75d4620d7$export$af5de1609f06c8e6(d), $54378cf75d4620d7$export$d2d39d1adcc883a2(d), 0, 0, 0, 0, d.kind);
}
function $54378cf75d4620d7$export$d2d39d1adcc883a2(d) {
    return d.kind === 1 /* UTC */  ? d.getUTCDate() : d.getDate();
}
function $54378cf75d4620d7$export$842e383dfc19bc67(d) {
    return d.kind === 1 /* UTC */  ? d.getUTCHours() : d.getHours();
}
function $54378cf75d4620d7$export$edc5e5cb87280477(d) {
    return d.kind === 1 /* UTC */  ? d.getUTCMilliseconds() : d.getMilliseconds();
}
function $54378cf75d4620d7$export$1cacba1045a8e790(d) {
    return d.kind === 1 /* UTC */  ? d.getUTCMinutes() : d.getMinutes();
}
function $54378cf75d4620d7$export$af5de1609f06c8e6(d) {
    return (d.kind === 1 /* UTC */  ? d.getUTCMonth() : d.getMonth()) + 1;
}
function $54378cf75d4620d7$export$3d3c77ce7df7d30d(d) {
    return d.kind === 1 /* UTC */  ? d.getUTCSeconds() : d.getSeconds();
}
function $54378cf75d4620d7$export$31803937850fb2da(d) {
    return d.kind === 1 /* UTC */  ? d.getUTCFullYear() : d.getFullYear();
}
function $54378cf75d4620d7$export$a24aefd2b69080a9(d) {
    return d.kind === 1 /* UTC */  ? d.getUTCDay() : d.getDay();
}
function $54378cf75d4620d7$export$75898a44428fae85(d) {
    const _year = $54378cf75d4620d7$export$31803937850fb2da(d);
    const _month = $54378cf75d4620d7$export$af5de1609f06c8e6(d);
    let _day = $54378cf75d4620d7$export$d2d39d1adcc883a2(d);
    for(let i = 1; i < _month; i++)_day += $54378cf75d4620d7$export$4169ecd548fbc13a(_year, i);
    return _day;
}
function $54378cf75d4620d7$export$e16d8520af44a096(d, ts) {
    const newDate = $54378cf75d4620d7$export$82f9ebd9adeba146(d.getTime() + ts, d.kind);
    if (d.kind === 2 /* Local */ ) {
        const oldTzOffset = d.getTimezoneOffset();
        const newTzOffset = newDate.getTimezoneOffset();
        return oldTzOffset !== newTzOffset ? $54378cf75d4620d7$export$82f9ebd9adeba146(newDate.getTime() + (newTzOffset - oldTzOffset) * 60000, d.kind) : newDate;
    } else return newDate;
}
function $54378cf75d4620d7$export$dd412b56f1e4d8aa(d, v) {
    return $54378cf75d4620d7$export$e16d8520af44a096(d, v * 86400000);
}
function $54378cf75d4620d7$export$4a4306ad4fa0e5e6(d, v) {
    return $54378cf75d4620d7$export$e16d8520af44a096(d, v * 3600000);
}
function $54378cf75d4620d7$export$2287e3d29250119e(d, v) {
    return $54378cf75d4620d7$export$e16d8520af44a096(d, v * 60000);
}
function $54378cf75d4620d7$export$3cb31b0df13be68(d, v) {
    return $54378cf75d4620d7$export$e16d8520af44a096(d, v * 1000);
}
function $54378cf75d4620d7$export$baf757aaf0c95c94(d, v) {
    return $54378cf75d4620d7$export$e16d8520af44a096(d, v);
}
function $54378cf75d4620d7$export$3d83eec43f4ea476(d, v) {
    const newMonth = $54378cf75d4620d7$export$af5de1609f06c8e6(d);
    const newYear = $54378cf75d4620d7$export$31803937850fb2da(d) + v;
    const _daysInMonth = $54378cf75d4620d7$export$4169ecd548fbc13a(newYear, newMonth);
    const newDay = Math.min(_daysInMonth, $54378cf75d4620d7$export$d2d39d1adcc883a2(d));
    return $54378cf75d4620d7$export$185802fd694ee1f5(newYear, newMonth, newDay, $54378cf75d4620d7$export$842e383dfc19bc67(d), $54378cf75d4620d7$export$1cacba1045a8e790(d), $54378cf75d4620d7$export$3d3c77ce7df7d30d(d), $54378cf75d4620d7$export$edc5e5cb87280477(d), d.kind);
}
function $54378cf75d4620d7$export$17c93e242b2d3a22(d, v) {
    let newMonth = $54378cf75d4620d7$export$af5de1609f06c8e6(d) + v;
    let newMonth_ = 0;
    let yearOffset = 0;
    if (newMonth > 12) {
        newMonth_ = newMonth % 12;
        yearOffset = Math.floor(newMonth / 12);
        newMonth = newMonth_;
    } else if (newMonth < 1) {
        newMonth_ = 12 + newMonth % 12;
        yearOffset = Math.floor(newMonth / 12) + (newMonth_ === 12 ? -1 : 0);
        newMonth = newMonth_;
    }
    const newYear = $54378cf75d4620d7$export$31803937850fb2da(d) + yearOffset;
    const _daysInMonth = $54378cf75d4620d7$export$4169ecd548fbc13a(newYear, newMonth);
    const newDay = Math.min(_daysInMonth, $54378cf75d4620d7$export$d2d39d1adcc883a2(d));
    return $54378cf75d4620d7$export$185802fd694ee1f5(newYear, newMonth, newDay, $54378cf75d4620d7$export$842e383dfc19bc67(d), $54378cf75d4620d7$export$1cacba1045a8e790(d), $54378cf75d4620d7$export$3d3c77ce7df7d30d(d), $54378cf75d4620d7$export$edc5e5cb87280477(d), d.kind);
}
function $54378cf75d4620d7$export$4e2d2ead65e5f7e3(d, that) {
    return typeof that === "number" ? $54378cf75d4620d7$export$e16d8520af44a096(d, -that) : d.getTime() - that.getTime();
}
function $54378cf75d4620d7$export$c72df26d2bb0681f(d) {
    return d.toDateString();
}
function $54378cf75d4620d7$export$ed29312e46cde58f(d) {
    return d.toLocaleDateString();
}
function $54378cf75d4620d7$export$f45b9f9645a703d3(d) {
    return d.toLocaleTimeString();
}
function $54378cf75d4620d7$export$9384d167e08fd225(d) {
    return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
function $54378cf75d4620d7$export$e9bab7fafb253603(d1, d2) {
    return d1.getTime() === d2.getTime();
}
const $54378cf75d4620d7$export$398604a469f7de9a = $ed39e963967a3eea$export$c4c806e061935577;
const $54378cf75d4620d7$export$53576907a5c40ba3 = $ed39e963967a3eea$export$c4c806e061935577;
function $54378cf75d4620d7$export$a5fb1fdca49990a(x, y) {
    return $54378cf75d4620d7$export$e16d8520af44a096(x, y);
}
function $54378cf75d4620d7$export$1ba572a54983744c(x, y) {
    return $54378cf75d4620d7$export$4e2d2ead65e5f7e3(x, y);
}
function $54378cf75d4620d7$export$22d85042c308f25c(x) {
    const jan = new Date(x.getFullYear(), 0, 1);
    const jul = new Date(x.getFullYear(), 6, 1);
    return $54378cf75d4620d7$var$isDST(jan.getTimezoneOffset(), jul.getTimezoneOffset(), x.getTimezoneOffset());
}
function $54378cf75d4620d7$var$isDST(janOffset, julOffset, tOffset) {
    return Math.min(janOffset, julOffset) === tOffset;
}
var $54378cf75d4620d7$export$2e2bcd8739ae039 = $54378cf75d4620d7$export$82f9ebd9adeba146;



function $14cb28be03f8bba6$export$185802fd694ee1f5(pattern, $14cb28be03f8bba6$export$41c562ebe57d11e2 = 0) {
    // Supported RegexOptions
    // * IgnoreCase:  0x0001
    // * Multiline:   0x0002
    // * Singleline:  0x0010
    // * ECMAScript:  0x0100 (ignored)
    if (($14cb28be03f8bba6$export$41c562ebe57d11e2 & -276) !== 0) throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Singleline and ECMAScript");
    let flags = "g";
    flags += $14cb28be03f8bba6$export$41c562ebe57d11e2 & 1 ? "i" : ""; // 0x0001 RegexOptions.IgnoreCase
    flags += $14cb28be03f8bba6$export$41c562ebe57d11e2 & 2 ? "m" : "";
    flags += $14cb28be03f8bba6$export$41c562ebe57d11e2 & 16 ? "s" : "";
    return new RegExp(pattern, flags);
}
function $14cb28be03f8bba6$export$4e7f196112fea3c5(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function $14cb28be03f8bba6$export$e8bacd2802a88316(str) {
    return str.replace(/\\([\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
}
function $14cb28be03f8bba6$export$b74c33566721f70f(reg, input, startAt = 0) {
    reg.lastIndex = startAt;
    return reg.test(input);
}
function $14cb28be03f8bba6$export$4659b591c19bdf3d(reg, input, startAt = 0) {
    reg.lastIndex = startAt;
    return reg.exec(input);
}
function $14cb28be03f8bba6$export$de994efd351b291c(reg, input, startAt = 0) {
    reg.lastIndex = startAt;
    if (!reg.global) throw new Error("Non-global RegExp"); // Prevent infinite loop
    let m = reg.exec(input);
    const $14cb28be03f8bba6$export$de994efd351b291c = [];
    while(m !== null){
        $14cb28be03f8bba6$export$de994efd351b291c.push(m);
        m = reg.exec(input);
    }
    return $14cb28be03f8bba6$export$de994efd351b291c;
}
function $14cb28be03f8bba6$export$41c562ebe57d11e2(reg) {
    let $14cb28be03f8bba6$export$41c562ebe57d11e2 = 256; // ECMAScript
    $14cb28be03f8bba6$export$41c562ebe57d11e2 |= reg.ignoreCase ? 1 : 0;
    $14cb28be03f8bba6$export$41c562ebe57d11e2 |= reg.multiline ? 2 : 0;
    return $14cb28be03f8bba6$export$41c562ebe57d11e2;
}
function $14cb28be03f8bba6$export$77ad94ebf1c2b9ed(reg, input, replacement, limit, offset = 0) {
    function replacer() {
        let res = arguments[0];
        if (limit) {
            limit--;
            const $14cb28be03f8bba6$export$4659b591c19bdf3d = [];
            const len = arguments.length;
            // arguments: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_a_parameter
            // * match: matched substring
            // * p1, p2, ...: nth capture group string
            // * offset: offset of matched substring
            // * string: whole string examined
            // * groups: named capturing groups
            //           ONLY if regex contains a named capture group AND browser supports named groups
            // -> last element can be groups OR input string
            // -> check if last element is string
            const withGroups = typeof arguments[len - 1] !== "string";
            let pLast = withGroups ? len - 3 : len - 2;
            for(let i = 0; i < pLast; i++)$14cb28be03f8bba6$export$4659b591c19bdf3d.push(arguments[i]);
            $14cb28be03f8bba6$export$4659b591c19bdf3d.index = arguments[pLast++];
            $14cb28be03f8bba6$export$4659b591c19bdf3d.input = arguments[pLast++];
            if (withGroups) $14cb28be03f8bba6$export$4659b591c19bdf3d.groups = arguments[pLast];
            res = replacement($14cb28be03f8bba6$export$4659b591c19bdf3d);
        }
        return res;
    }
    if (typeof reg === "string") {
        const tmp = reg;
        reg = $14cb28be03f8bba6$export$185802fd694ee1f5(input, limit !== null && limit !== void 0 ? limit : 0);
        input = tmp;
        limit = undefined;
    }
    if (typeof replacement === "function") {
        limit = limit == null ? -1 : limit;
        return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
    } else {
        replacement = replacement// $0 doesn't work with JS regex, see #1155
        .replace(/\$0/g, (_s)=>"$&"
        )// named groups in replacement are `${name}` in .Net, but `$<name>` in JS (in regex: groups are `(?<name>...)` in both)
        .replace(/\${([^}]+)}/g, "\$<$1>");
        if (limit != null) {
            let m;
            const sub1 = input.substring(offset);
            const _matches = $14cb28be03f8bba6$export$de994efd351b291c(reg, sub1);
            const sub2 = $14cb28be03f8bba6$export$de994efd351b291c.length > limit ? (m = _matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
            return input.substring(0, offset) + sub2.replace(reg, replacement) + input.substring(offset + sub2.length);
        } else return input.replace(reg, replacement);
    }
}
function $14cb28be03f8bba6$export$65980d18b75784e2(reg, input, limit, offset = 0) {
    if (typeof reg === "string") {
        const tmp = reg;
        reg = $14cb28be03f8bba6$export$185802fd694ee1f5(input, limit !== null && limit !== void 0 ? limit : 0);
        input = tmp;
        limit = undefined;
    }
    input = input.substring(offset);
    return input.split(reg, limit);
}



const $518fcccc33d36a20$var$fsFormatRegExp = /(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g;
const $518fcccc33d36a20$var$interpolateRegExp = /(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;
const $518fcccc33d36a20$var$formatRegExp = /\{(\d+)(,-?\d+)?(?:\:([a-zA-Z])(\d{0,2})|\:(.+?))?\}/g;
function $518fcccc33d36a20$var$isLessThan(x, y) {
    return $99dffd8ec22d454a$export$398604a469f7de9a(x, y) < 0;
}
function $518fcccc33d36a20$var$cmp(x, y, ic) {
    function isIgnoreCase(i) {
        return i === true || i === 1 /* CurrentCultureIgnoreCase */  || i === 3 /* InvariantCultureIgnoreCase */  || i === 5 /* OrdinalIgnoreCase */ ;
    }
    function isOrdinal(i) {
        return i === 4 /* Ordinal */  || i === 5 /* OrdinalIgnoreCase */ ;
    }
    if (x == null) return y == null ? 0 : -1;
    if (y == null) return 1;
     // everything is bigger than null
    if (isOrdinal(ic)) {
        if (isIgnoreCase(ic)) {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }
        return x === y ? 0 : x < y ? -1 : 1;
    } else {
        if (isIgnoreCase(ic)) {
            x = x.toLocaleLowerCase();
            y = y.toLocaleLowerCase();
        }
        return x.localeCompare(y);
    }
}
function $518fcccc33d36a20$export$398604a469f7de9a(...args) {
    switch(args.length){
        case 2:
            return $518fcccc33d36a20$var$cmp(args[0], args[1], false);
        case 3:
            return $518fcccc33d36a20$var$cmp(args[0], args[1], args[2]);
        case 4:
            return $518fcccc33d36a20$var$cmp(args[0], args[1], args[2] === true);
        case 5:
            return $518fcccc33d36a20$var$cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), false);
        case 6:
            return $518fcccc33d36a20$var$cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5]);
        case 7:
            return $518fcccc33d36a20$var$cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5] === true);
        default:
            throw new Error("String.compare: Unsupported number of parameters");
    }
}
function $518fcccc33d36a20$export$bfd84690a68064b1(x, y) {
    return $518fcccc33d36a20$var$cmp(x, y, 4 /* Ordinal */ );
}
function $518fcccc33d36a20$export$53576907a5c40ba3(x, y) {
    return $518fcccc33d36a20$var$cmp(x, y, 0 /* CurrentCulture */ );
}
function $518fcccc33d36a20$export$68326237475e9a7d(str, pattern, ic) {
    if (str.length >= pattern.length) return $518fcccc33d36a20$var$cmp(str.substr(0, pattern.length), pattern, ic) === 0;
    return false;
}
function $518fcccc33d36a20$export$3ce79d7714e5c4aa(str, anyOf, ...args) {
    if (str == null || str === "") return -1;
    const startIndex = args.length > 0 ? args[0] : 0;
    if (startIndex < 0) throw new Error("Start index cannot be negative");
    const length = args.length > 1 ? args[1] : str.length - startIndex;
    if (length < 0) throw new Error("Length cannot be negative");
    if (length > str.length - startIndex) throw new Error("Invalid startIndex and length");
    str = str.substr(startIndex, length);
    for (const c of anyOf){
        const index = str.indexOf(c);
        if (index > -1) return index + startIndex;
    }
    return -1;
}
function $518fcccc33d36a20$export$d1317194012d6b34(input) {
    return {
        input: input,
        cont: $518fcccc33d36a20$export$214f04bcc4009507(input)
    };
}
function $518fcccc33d36a20$export$89e29e4ab65e70a9(str, values) {
    let valIdx = 0;
    let strIdx = 0;
    let result = "";
    $518fcccc33d36a20$var$interpolateRegExp.lastIndex = 0;
    let match = $518fcccc33d36a20$var$interpolateRegExp.exec(str);
    while(match){
        // The first group corresponds to the no-escape char (^|[^%]), the actual pattern starts in the next char
        // Note: we don't use negative lookbehind because some browsers don't support it yet
        const matchIndex = match.index + (match[1] || "").length;
        result += str.substring(strIdx, matchIndex).replace(/%%/g, "%");
        const [, , flags, padLength, precision, $518fcccc33d36a20$export$d9468344d3651243] = match;
        result += $518fcccc33d36a20$var$formatReplacement(values[valIdx++], flags, padLength, precision, $518fcccc33d36a20$export$d9468344d3651243);
        strIdx = $518fcccc33d36a20$var$interpolateRegExp.lastIndex;
        // Likewise we need to move interpolateRegExp.lastIndex one char behind to make sure we match the no-escape char next time
        $518fcccc33d36a20$var$interpolateRegExp.lastIndex -= 1;
        match = $518fcccc33d36a20$var$interpolateRegExp.exec(str);
    }
    result += str.substring(strIdx).replace(/%%/g, "%");
    return result;
}
function $518fcccc33d36a20$var$continuePrint(cont, arg) {
    return typeof arg === "string" ? cont(arg) : arg.cont(cont);
}
function $518fcccc33d36a20$export$3de07bdccee76bc5(arg) {
    // Don't remove the lambda here, see #1357
    return $518fcccc33d36a20$var$continuePrint((x)=>console.log(x)
    , arg);
}
function $518fcccc33d36a20$export$457e5164de7d35a2(arg) {
    return $518fcccc33d36a20$var$continuePrint((x)=>console.error(x)
    , arg);
}
function $518fcccc33d36a20$export$598ff36d54604b81(arg) {
    return $518fcccc33d36a20$var$continuePrint((x)=>x
    , arg);
}
function $518fcccc33d36a20$export$c5eda7bb099ceb11(arg) {
    return $518fcccc33d36a20$var$continuePrint((x)=>{
        throw new Error(x);
    }, arg);
}
function $518fcccc33d36a20$var$formatReplacement(rep, flags, padLength, precision, $518fcccc33d36a20$export$d9468344d3651243) {
    let sign = "";
    flags = flags || "";
    $518fcccc33d36a20$export$d9468344d3651243 = $518fcccc33d36a20$export$d9468344d3651243 || "";
    if ($99dffd8ec22d454a$export$e90fb89750dba83f(rep)) {
        if ($518fcccc33d36a20$export$d9468344d3651243.toLowerCase() !== "x") {
            if ($518fcccc33d36a20$var$isLessThan(rep, 0)) {
                rep = $99dffd8ec22d454a$export$2060d2db72cce88f(rep, -1);
                sign = "-";
            } else {
                if (flags.indexOf(" ") >= 0) sign = " ";
                else if (flags.indexOf("+") >= 0) sign = "+";
            }
        }
        precision = precision == null ? null : parseInt(precision, 10);
        switch($518fcccc33d36a20$export$d9468344d3651243){
            case "f":
            case "F":
                precision = precision != null ? precision : 6;
                rep = $99dffd8ec22d454a$export$a81f732198733497(rep, precision);
                break;
            case "g":
            case "G":
                rep = precision != null ? $99dffd8ec22d454a$export$3e91a10e66078270(rep, precision) : $99dffd8ec22d454a$export$3e91a10e66078270(rep);
                break;
            case "e":
            case "E":
                rep = precision != null ? $99dffd8ec22d454a$export$888cb08ddc4765be(rep, precision) : $99dffd8ec22d454a$export$888cb08ddc4765be(rep);
                break;
            case "x":
                rep = $99dffd8ec22d454a$export$7ea66e3774a60b67(rep);
                break;
            case "X":
                rep = $99dffd8ec22d454a$export$7ea66e3774a60b67(rep).toUpperCase();
                break;
            default:
                rep = String(rep);
                break;
        }
    } else if (rep instanceof Date) rep = $54378cf75d4620d7$export$f84e8e69fd4488a5(rep);
    else rep = $ae70510fbd2502e5$export$f84e8e69fd4488a5(rep);
    padLength = typeof padLength === "number" ? padLength : parseInt(padLength, 10);
    if (!isNaN(padLength)) {
        const zeroFlag = flags.indexOf("0") >= 0; // Use '0' for left padding
        const minusFlag = flags.indexOf("-") >= 0; // Right padding
        const ch = minusFlag || !zeroFlag ? " " : "0";
        if (ch === "0") {
            rep = $518fcccc33d36a20$export$bc3bea8325045070(rep, padLength - sign.length, ch, minusFlag);
            rep = sign + rep;
        } else rep = $518fcccc33d36a20$export$bc3bea8325045070(sign + rep, padLength, ch, minusFlag);
    } else rep = sign + rep;
    return rep;
}
function $518fcccc33d36a20$var$createPrinter(cont, _strParts, _matches, _result = "", padArg = -1) {
    return (...args)=>{
        // Make copies of the values passed by reference because the function can be used multiple times
        let result = _result;
        const strParts = _strParts.slice();
        const matches = _matches.slice();
        for (const arg of args){
            const [, , flags, _padLength, precision, $518fcccc33d36a20$export$d9468344d3651243] = matches[0];
            let padLength = _padLength;
            if (padArg >= 0) {
                padLength = padArg;
                padArg = -1;
            } else if (padLength === "*") {
                if (arg < 0) throw new Error("Non-negative number required");
                padArg = arg;
                continue;
            }
            result += strParts[0];
            result += $518fcccc33d36a20$var$formatReplacement(arg, flags, padLength, precision, $518fcccc33d36a20$export$d9468344d3651243);
            strParts.splice(0, 1);
            matches.splice(0, 1);
        }
        if (matches.length === 0) {
            result += strParts[0];
            return cont(result);
        } else return $518fcccc33d36a20$var$createPrinter(cont, strParts, matches, result, padArg);
    };
}
function $518fcccc33d36a20$export$214f04bcc4009507(str) {
    return (cont)=>{
        $518fcccc33d36a20$var$fsFormatRegExp.lastIndex = 0;
        const strParts = [];
        const matches = [];
        let strIdx = 0;
        let match = $518fcccc33d36a20$var$fsFormatRegExp.exec(str);
        while(match){
            // The first group corresponds to the no-escape char (^|[^%]), the actual pattern starts in the next char
            // Note: we don't use negative lookbehind because some browsers don't support it yet
            const matchIndex = match.index + (match[1] || "").length;
            strParts.push(str.substring(strIdx, matchIndex).replace(/%%/g, "%"));
            matches.push(match);
            strIdx = $518fcccc33d36a20$var$fsFormatRegExp.lastIndex;
            // Likewise we need to move fsFormatRegExp.lastIndex one char behind to make sure we match the no-escape char next time
            $518fcccc33d36a20$var$fsFormatRegExp.lastIndex -= 1;
            match = $518fcccc33d36a20$var$fsFormatRegExp.exec(str);
        }
        if (strParts.length === 0) return cont(str.replace(/%%/g, "%"));
        else {
            strParts.push(str.substring(strIdx).replace(/%%/g, "%"));
            return $518fcccc33d36a20$var$createPrinter(cont, strParts, matches);
        }
    };
}
function $518fcccc33d36a20$export$d9468344d3651243(str, ...args) {
    if (typeof str === "object" && args.length > 0) {
        // Called with culture info
        str = args[0];
        args.shift();
    }
    return str.replace($518fcccc33d36a20$var$formatRegExp, (_, idx, padLength, $518fcccc33d36a20$export$d9468344d3651243, precision, pattern)=>{
        let rep = args[idx];
        if ($99dffd8ec22d454a$export$e90fb89750dba83f(rep)) {
            precision = precision == null ? null : parseInt(precision, 10);
            switch($518fcccc33d36a20$export$d9468344d3651243){
                case "f":
                case "F":
                    precision = precision != null ? precision : 2;
                    rep = $99dffd8ec22d454a$export$a81f732198733497(rep, precision);
                    break;
                case "g":
                case "G":
                    rep = precision != null ? $99dffd8ec22d454a$export$3e91a10e66078270(rep, precision) : $99dffd8ec22d454a$export$3e91a10e66078270(rep);
                    break;
                case "e":
                case "E":
                    rep = precision != null ? $99dffd8ec22d454a$export$888cb08ddc4765be(rep, precision) : $99dffd8ec22d454a$export$888cb08ddc4765be(rep);
                    break;
                case "p":
                case "P":
                    precision = precision != null ? precision : 2;
                    rep = $99dffd8ec22d454a$export$a81f732198733497($99dffd8ec22d454a$export$2060d2db72cce88f(rep, 100), precision) + " %";
                    break;
                case "d":
                case "D":
                    rep = precision != null ? $518fcccc33d36a20$export$bc3bea8325045070(String(rep), precision, "0") : String(rep);
                    break;
                case "x":
                case "X":
                    rep = precision != null ? $518fcccc33d36a20$export$bc3bea8325045070($99dffd8ec22d454a$export$7ea66e3774a60b67(rep), precision, "0") : $99dffd8ec22d454a$export$7ea66e3774a60b67(rep);
                    if ($518fcccc33d36a20$export$d9468344d3651243 === "X") rep = rep.toUpperCase();
                    break;
                default:
                    if (pattern) {
                        let sign = "";
                        rep = pattern.replace(/(0+)(\.0+)?/, (_, intPart, decimalPart)=>{
                            if ($518fcccc33d36a20$var$isLessThan(rep, 0)) {
                                rep = $99dffd8ec22d454a$export$2060d2db72cce88f(rep, -1);
                                sign = "-";
                            }
                            rep = $99dffd8ec22d454a$export$a81f732198733497(rep, decimalPart != null ? decimalPart.length - 1 : 0);
                            return $518fcccc33d36a20$export$bc3bea8325045070(rep, (intPart || "").length - sign.length + (decimalPart != null ? decimalPart.length : 0), "0");
                        });
                        rep = sign + rep;
                    }
            }
        } else if (rep instanceof Date) rep = $54378cf75d4620d7$export$f84e8e69fd4488a5(rep, pattern || $518fcccc33d36a20$export$d9468344d3651243);
        else rep = $ae70510fbd2502e5$export$f84e8e69fd4488a5(rep);
        padLength = parseInt((padLength || " ").substring(1), 10);
        if (!isNaN(padLength)) rep = $518fcccc33d36a20$export$bc3bea8325045070(String(rep), Math.abs(padLength), " ", padLength < 0);
        return rep;
    });
}
function $518fcccc33d36a20$export$10fdab3683b55b22(str, search) {
    const idx = str.lastIndexOf(search);
    return idx >= 0 && idx === str.length - search.length;
}
function $518fcccc33d36a20$export$2a47f398eeff8b01(n, f) {
    if (n < 0) throw new Error("String length must be non-negative");
    const xs = new Array(n);
    for(let i = 0; i < n; i++)xs[i] = f(i);
    return xs.join("");
}
function $518fcccc33d36a20$export$21a5ca8aa77d35ff(str, startIndex, value) {
    if (startIndex < 0 || startIndex > str.length) throw new Error("startIndex is negative or greater than the length of this instance.");
    return str.substring(0, startIndex) + value + str.substring(startIndex);
}
function $518fcccc33d36a20$export$c8733ae29fb53302(str) {
    return typeof str !== "string" || str.length === 0;
}
function $518fcccc33d36a20$export$c6e2787f63ca055d(str) {
    return typeof str !== "string" || /^\s*$/.test(str);
}
function $518fcccc33d36a20$export$ee1b3e54f0441b22(...xs) {
    return xs.map((x)=>String(x)
    ).join("");
}
function $518fcccc33d36a20$export$f7e2c8231c57a8bd(delimiter, xs) {
    if (Array.isArray(xs)) return xs.join(delimiter);
    else return Array.from(xs).join(delimiter);
}
function $518fcccc33d36a20$export$5b532d5614fd5b39(delimiter, xs, startIndex, count) {
    const endIndexPlusOne = startIndex + count;
    if (endIndexPlusOne > xs.length) throw new Error("Index and count must refer to a location within the buffer.");
    return xs.slice(startIndex, endIndexPlusOne).join(delimiter);
}
function $518fcccc33d36a20$var$notSupported(name) {
    throw new Error("The environment doesn't support '" + name + "', please use a polyfill.");
}
function $518fcccc33d36a20$export$2e65ad783d953e9e(inArray) {
    let str = "";
    for(let i = 0; i < inArray.length; i++)str += String.fromCharCode(inArray[i]);
    return typeof btoa === "function" ? btoa(str) : $518fcccc33d36a20$var$notSupported("btoa");
}
function $518fcccc33d36a20$export$fdad0628bec1dd41(b64Encoded) {
    const binary = typeof atob === "function" ? atob(b64Encoded) : $518fcccc33d36a20$var$notSupported("atob");
    const bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++)bytes[i] = binary.charCodeAt(i);
    return bytes;
}
function $518fcccc33d36a20$export$bc3bea8325045070(str, len, ch, isRight) {
    ch = ch || " ";
    len = len - str.length;
    for(let i = 0; i < len; i++)str = isRight ? str + ch : ch + str;
    return str;
}
function $518fcccc33d36a20$export$7e24a29324041c48(str, len, ch) {
    return $518fcccc33d36a20$export$bc3bea8325045070(str, len, ch, true);
}
function $518fcccc33d36a20$export$cd7f480d6b8286c3(str, startIndex, count) {
    if (startIndex >= str.length) throw new Error("startIndex must be less than length of string");
    if (typeof count === "number" && startIndex + count > str.length) throw new Error("Index and count must refer to a location within the string.");
    return str.slice(0, startIndex) + (typeof count === "number" ? str.substr(startIndex + count) : "");
}
function $518fcccc33d36a20$export$77ad94ebf1c2b9ed(str, search, $518fcccc33d36a20$export$77ad94ebf1c2b9ed) {
    return str.replace(new RegExp($14cb28be03f8bba6$export$4e7f196112fea3c5(search), "g"), $518fcccc33d36a20$export$77ad94ebf1c2b9ed);
}
function $518fcccc33d36a20$export$606959e7ccb797f0(n, x) {
    return $518fcccc33d36a20$export$2a47f398eeff8b01(n, ()=>x
    );
}
function $518fcccc33d36a20$export$2a1422e7517645a9(input, index) {
    if (index < 0 || index >= input.length) throw new Error("Index was outside the bounds of the array.");
    return input[index];
}
function $518fcccc33d36a20$export$65980d18b75784e2(str, splitters, count, options) {
    count = typeof count === "number" ? count : undefined;
    options = typeof options === "number" ? options : 0;
    if (count && count < 0) throw new Error("Count cannot be less than zero");
    if (count === 0) return [];
    const removeEmpty = (options & 1) === 1;
    const $518fcccc33d36a20$export$87c2784dc9fc4ab = (options & 2) === 2;
    splitters = splitters || [];
    splitters = splitters.filter((x)=>x
    ).map($14cb28be03f8bba6$export$4e7f196112fea3c5);
    splitters = splitters.length > 0 ? splitters : [
        "\\s"
    ];
    const splits = [];
    const reg = new RegExp(splitters.join("|"), "g");
    let findSplits = true;
    let i = 0;
    do {
        const match = reg.exec(str);
        if (match === null) {
            const candidate = $518fcccc33d36a20$export$87c2784dc9fc4ab ? str.substring(i).trim() : str.substring(i);
            if (!removeEmpty || candidate.length > 0) splits.push(candidate);
            findSplits = false;
        } else {
            const candidate = $518fcccc33d36a20$export$87c2784dc9fc4ab ? str.substring(i, match.index).trim() : str.substring(i, match.index);
            if (!removeEmpty || candidate.length > 0) {
                if (count != null && splits.length + 1 === count) {
                    splits.push($518fcccc33d36a20$export$87c2784dc9fc4ab ? str.substring(i).trim() : str.substring(i));
                    findSplits = false;
                } else splits.push(candidate);
            }
            i = reg.lastIndex;
        }
    }while (findSplits)
    return splits;
}
function $518fcccc33d36a20$export$87c2784dc9fc4ab(str, ...chars) {
    if (chars.length === 0) return str.trim();
    const pattern = "[" + $14cb28be03f8bba6$export$4e7f196112fea3c5(chars.join("")) + "]+";
    return str.replace(new RegExp("^" + pattern), "").replace(new RegExp(pattern + "$"), "");
}
function $518fcccc33d36a20$export$fec973013a01a752(str, ...chars) {
    return chars.length === 0 ? str.trimStart() : str.replace(new RegExp("^[" + $14cb28be03f8bba6$export$4e7f196112fea3c5(chars.join("")) + "]+"), "");
}
function $518fcccc33d36a20$export$8eb38b2a7b91ac21(str, ...chars) {
    return chars.length === 0 ? str.trimEnd() : str.replace(new RegExp("[" + $14cb28be03f8bba6$export$4e7f196112fea3c5(chars.join("")) + "]+$"), "");
}
function $518fcccc33d36a20$export$3dea766d36a8935f(pred, x) {
    return x.split("").filter((c)=>pred(c)
    ).join("");
}
function $518fcccc33d36a20$export$662d3818631fba36(str, startIndex, length) {
    if (startIndex + (length || 0) > str.length) throw new Error("Invalid startIndex and/or length");
    return length != null ? str.substr(startIndex, length) : str.substr(startIndex);
}
function $518fcccc33d36a20$export$bc71a178fd8db0f(strs, ...args) {
    return {
        strs: strs,
        args: args
    };
}
function $518fcccc33d36a20$export$6088d99012177da4(fmts) {
    return (strs, ...args)=>({
            strs: strs,
            args: args,
            fmts: fmts
        })
    ;
}
function $518fcccc33d36a20$export$f61ac8b6f1f46202(s) {
    return s.fmts ? s.strs.reduce((acc, newPart, index)=>acc + `{${String(index - 1) + s.fmts[index - 1]}}` + newPart
    ) : s.strs.reduce((acc, newPart, index)=>acc + `{${index - 1}}` + newPart
    );
}







const $c5730ae5119245ea$export$1d7558b55257001d = "The index was outside the range of elements in the list.";
const $c5730ae5119245ea$export$c005a33403882123 = "List was empty";
const $c5730ae5119245ea$export$2f1b8e728b004525 = "The input must be non-negative.";
const $c5730ae5119245ea$export$bb8ebba5bfe3f17a = "The input sequence was empty.";
const $c5730ae5119245ea$export$8f2c469045724186 = "The input sequence contains more than one element.";
const $c5730ae5119245ea$export$bc2c3bc917b1d953 = "An index satisfying the predicate was not found in the collection.";
const $c5730ae5119245ea$export$da3d1203d4648eef = "The lists had different lengths.";
const $c5730ae5119245ea$export$9f17aeddfa374276 = "The input sequence has an insufficient number of elements.";
class $c5730ae5119245ea$export$46fa32c6f8b2f86 extends $ae70510fbd2502e5$export$5b163c6d120341e7 {
    constructor($c5730ae5119245ea$export$5fd5031fecdacec3, $c5730ae5119245ea$export$c01875f616615628){
        super();
        this.head = $c5730ae5119245ea$export$5fd5031fecdacec3;
        this.tail = $c5730ae5119245ea$export$c01875f616615628;
    }
    toString() {
        const xs = this;
        return "[" + $518fcccc33d36a20$export$f7e2c8231c57a8bd("; ", xs) + "]";
    }
    Equals(other) {
        const xs = this;
        if (xs === other) return true;
        else {
            const loop = (xs_1_mut, ys_1_mut)=>{
                loop: while(true){
                    const xs_1 = xs_1_mut, ys_1 = ys_1_mut;
                    const matchValue = [
                        xs_1.tail,
                        ys_1.tail
                    ];
                    if (matchValue[0] != null) {
                        if (matchValue[1] != null) {
                            const xt = matchValue[0];
                            const yt = matchValue[1];
                            if ($ed39e963967a3eea$export$e9bab7fafb253603(xs_1.head, ys_1.head)) {
                                xs_1_mut = xt;
                                ys_1_mut = yt;
                                continue loop;
                            } else return false;
                        } else return false;
                    } else if (matchValue[1] != null) return false;
                    else return true;
                    break;
                }
            };
            return loop(xs, other);
        }
    }
    GetHashCode() {
        const xs = this;
        const loop = (i_mut, h_mut, xs_1_mut)=>{
            loop: while(true){
                const i = i_mut, h = h_mut, xs_1 = xs_1_mut;
                const matchValue = xs_1.tail;
                if (matchValue != null) {
                    const t = matchValue;
                    if (i > 18) return h | 0;
                    else {
                        i_mut = i + 1;
                        h_mut = (h << 1) + $ed39e963967a3eea$export$2e619f11ca48bee4(xs_1.head) + 631 * i;
                        xs_1_mut = t;
                        continue loop;
                    }
                } else return h | 0;
                break;
            }
        };
        return loop(0, 0, xs) | 0;
    }
    toJSON(_key) {
        const this$ = this;
        return Array.from(this$);
    }
    CompareTo(other) {
        const xs = this;
        const loop = (xs_1_mut, ys_1_mut)=>{
            loop: while(true){
                const xs_1 = xs_1_mut, ys_1 = ys_1_mut;
                const matchValue = [
                    xs_1.tail,
                    ys_1.tail
                ];
                if (matchValue[0] != null) {
                    if (matchValue[1] != null) {
                        const xt = matchValue[0];
                        const yt = matchValue[1];
                        const c = $ed39e963967a3eea$export$398604a469f7de9a(xs_1.head, ys_1.head) | 0;
                        if (c === 0) {
                            xs_1_mut = xt;
                            ys_1_mut = yt;
                            continue loop;
                        } else return c | 0;
                    } else return 1;
                } else if (matchValue[1] != null) return -1;
                else return 0;
                break;
            }
        };
        return loop(xs, other) | 0;
    }
    GetEnumerator() {
        const xs = this;
        return $c5730ae5119245ea$export$d5c5f9d2dd7dbba2(xs);
    }
    [Symbol.iterator]() {
        return $ed39e963967a3eea$export$21e0669b7bd01bb4(this.GetEnumerator());
    }
    ["System.Collections.IEnumerable.GetEnumerator"]() {
        const xs = this;
        return $ed39e963967a3eea$export$a41738691dcd8bea(xs);
    }
}
function $c5730ae5119245ea$export$6c33004ecbd2f682(gen0) {
    return $7d684f9c58c88b9e$export$d341dea990ee4af6("ListModule.FSharpList", [
        gen0
    ], $c5730ae5119245ea$export$46fa32c6f8b2f86, ()=>[
            [
                "head",
                gen0
            ],
            [
                "tail",
                $7d684f9c58c88b9e$export$a0bfd80c70f2d46b($c5730ae5119245ea$export$6c33004ecbd2f682(gen0))
            ]
        ]
    );
}
class $c5730ae5119245ea$export$9eb8d7afe7bf3554 {
    constructor(xs){
        this.xs = xs;
        this.it = this.xs;
        this.current = null;
    }
    ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
        const __ = this;
        return __.current;
    }
    ["System.Collections.IEnumerator.get_Current"]() {
        const __ = this;
        return __.current;
    }
    ["System.Collections.IEnumerator.MoveNext"]() {
        const __ = this;
        const matchValue = __.it.tail;
        if (matchValue != null) {
            const t = matchValue;
            __.current = __.it.head;
            __.it = t;
            return true;
        } else return false;
    }
    ["System.Collections.IEnumerator.Reset"]() {
        const __ = this;
        __.it = __.xs;
        __.current = null;
    }
    Dispose() {
    }
}
function $c5730ae5119245ea$export$a7e43f4a4fc711bd(gen0) {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("ListModule.ListEnumerator`1", [
        gen0
    ], $c5730ae5119245ea$export$9eb8d7afe7bf3554);
}
function $c5730ae5119245ea$export$d5c5f9d2dd7dbba2(xs) {
    return new $c5730ae5119245ea$export$9eb8d7afe7bf3554(xs);
}
function $c5730ae5119245ea$export$ca5f14a39f7c3bde() {
    return new $c5730ae5119245ea$export$46fa32c6f8b2f86(null, void 0);
}
function $c5730ae5119245ea$export$62ac43da335545f6(x, xs) {
    return new $c5730ae5119245ea$export$46fa32c6f8b2f86(x, xs);
}
function $c5730ae5119245ea$export$10d5772debd84bf1(xs) {
    return xs.tail == null;
}
function $c5730ae5119245ea$export$f15c1e15e73226cf(xs) {
    const loop = (i_mut, xs_1_mut)=>{
        loop: while(true){
            const i = i_mut, xs_1 = xs_1_mut;
            const matchValue = xs_1.tail;
            if (matchValue != null) {
                i_mut = i + 1;
                xs_1_mut = matchValue;
                continue loop;
            } else return i | 0;
            break;
        }
    };
    return loop(0, xs) | 0;
}
function $c5730ae5119245ea$export$1d866465156343c7(xs) {
    const matchValue = xs.tail;
    if (matchValue != null) return xs.head;
    else throw new Error($c5730ae5119245ea$export$c005a33403882123 + "\\nParameter name: " + "list");
}
function $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs) {
    const matchValue = xs.tail;
    if (matchValue != null) return matchValue;
    else throw new Error($c5730ae5119245ea$export$c005a33403882123 + "\\nParameter name: " + "list");
}
function $c5730ae5119245ea$export$f63236b60aa2bf0(xs, index) {
    const loop = (i_mut, xs_1_mut)=>{
        loop: while(true){
            const i = i_mut, xs_1 = xs_1_mut;
            const matchValue = xs_1.tail;
            if (matchValue != null) {
                if (i === index) return xs_1.head;
                else {
                    i_mut = i + 1;
                    xs_1_mut = matchValue;
                    continue loop;
                }
            } else throw new Error($c5730ae5119245ea$export$1d7558b55257001d + "\\nParameter name: " + "index");
            break;
        }
    };
    return loop(0, xs);
}
function $c5730ae5119245ea$export$6e22c362a0406a2c() {
    return $c5730ae5119245ea$export$ca5f14a39f7c3bde();
}
function $c5730ae5119245ea$export$8327ebbef2a0ba76(x, xs) {
    return $c5730ae5119245ea$export$62ac43da335545f6(x, xs);
}
function $c5730ae5119245ea$export$439306a4dcaafbb9(x) {
    return $c5730ae5119245ea$export$62ac43da335545f6(x, $c5730ae5119245ea$export$ca5f14a39f7c3bde());
}
function $c5730ae5119245ea$export$dd1bc94b04021eeb(xs) {
    return $c5730ae5119245ea$export$10d5772debd84bf1(xs);
}
function $c5730ae5119245ea$export$f24224f1c91d8156(xs) {
    return $c5730ae5119245ea$export$f15c1e15e73226cf(xs);
}
function $c5730ae5119245ea$export$5fd5031fecdacec3(xs) {
    return $c5730ae5119245ea$export$1d866465156343c7(xs);
}
function $c5730ae5119245ea$export$1acbe849d0cb723e(xs) {
    if ($c5730ae5119245ea$export$10d5772debd84bf1(xs)) return void 0;
    else return $7e4c281993e75c03$export$ad14ef4001db2bcd($c5730ae5119245ea$export$1d866465156343c7(xs));
}
function $c5730ae5119245ea$export$c01875f616615628(xs) {
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs);
}
function $c5730ae5119245ea$export$e5907b21d797cce6(xs_mut) {
    $c5730ae5119245ea$export$e5907b21d797cce6: while(true){
        const xs = xs_mut;
        if ($c5730ae5119245ea$export$10d5772debd84bf1(xs)) return void 0;
        else {
            const t = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs);
            if ($c5730ae5119245ea$export$10d5772debd84bf1(t)) return $7e4c281993e75c03$export$ad14ef4001db2bcd($c5730ae5119245ea$export$1d866465156343c7(xs));
            else {
                xs_mut = t;
                continue $c5730ae5119245ea$export$e5907b21d797cce6;
            }
        }
        break;
    }
}
function $c5730ae5119245ea$export$4c7897fafd92b108(xs) {
    const matchValue = $c5730ae5119245ea$export$e5907b21d797cce6(xs);
    if (matchValue == null) throw new Error($c5730ae5119245ea$export$c005a33403882123);
    else return $7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue);
}
function $c5730ae5119245ea$export$ecb3797c03e8ce0c(comparer, xs, ys) {
    const loop = (xs_1_mut, ys_1_mut)=>{
        loop: while(true){
            const xs_1 = xs_1_mut, ys_1 = ys_1_mut;
            const matchValue = [
                $c5730ae5119245ea$export$10d5772debd84bf1(xs_1),
                $c5730ae5119245ea$export$10d5772debd84bf1(ys_1)
            ];
            if (matchValue[0]) {
                if (matchValue[1]) return 0;
                else return -1;
            } else if (matchValue[1]) return 1;
            else {
                const c = comparer($c5730ae5119245ea$export$1d866465156343c7(xs_1), $c5730ae5119245ea$export$1d866465156343c7(ys_1)) | 0;
                if (c === 0) {
                    xs_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs_1);
                    ys_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(ys_1);
                    continue loop;
                } else return c | 0;
            }
            break;
        }
    };
    return loop(xs, ys) | 0;
}
function $c5730ae5119245ea$export$45b10814cc054894(xs) {
    const len = $c5730ae5119245ea$export$f15c1e15e73226cf(xs) | 0;
    const res = $5a541a3f8220d610$export$9563e054e6f787fb(new Array(len), 0, len, null);
    const loop = (i_mut, xs_1_mut)=>{
        loop: while(true){
            const i = i_mut, xs_1 = xs_1_mut;
            if (!$c5730ae5119245ea$export$10d5772debd84bf1(xs_1)) {
                res[i] = $c5730ae5119245ea$export$1d866465156343c7(xs_1);
                i_mut = i + 1;
                xs_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs_1);
                continue loop;
            }
            break;
        }
    };
    loop(0, xs);
    return res;
}
function $c5730ae5119245ea$export$93e2b83da34ff82a(folder, state, xs) {
    let acc = state;
    let xs_1 = xs;
    while(!$c5730ae5119245ea$export$10d5772debd84bf1(xs_1)){
        acc = folder(acc, $c5730ae5119245ea$export$1d866465156343c7(xs_1));
        xs_1 = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs_1);
    }
    return acc;
}
function $c5730ae5119245ea$export$66c1ae025e96b4bc(xs) {
    return $c5730ae5119245ea$export$93e2b83da34ff82a((acc, x)=>$c5730ae5119245ea$export$62ac43da335545f6(x, acc)
    , $c5730ae5119245ea$export$ca5f14a39f7c3bde(), xs);
}
function $c5730ae5119245ea$export$c38b8353041a4f48(folder, xs, state) {
    return $5a541a3f8220d610$export$c38b8353041a4f48(folder, $c5730ae5119245ea$export$45b10814cc054894(xs), state);
}
function $c5730ae5119245ea$export$c336ee92e62ce644(folder, state, xs) {
    const loop = (i_mut, acc_mut, xs_1_mut)=>{
        loop: while(true){
            const i = i_mut, acc = acc_mut, xs_1 = xs_1_mut;
            if ($c5730ae5119245ea$export$10d5772debd84bf1(xs_1)) return acc;
            else {
                i_mut = i + 1;
                acc_mut = folder(i, acc, $c5730ae5119245ea$export$1d866465156343c7(xs_1));
                xs_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs_1);
                continue loop;
            }
            break;
        }
    };
    return loop(0, state, xs);
}
function $c5730ae5119245ea$export$6eef545db8c1f6e(folder, state, xs, ys) {
    let acc = state;
    let xs_1 = xs;
    let ys_1 = ys;
    while(!$c5730ae5119245ea$export$10d5772debd84bf1(xs_1) && !$c5730ae5119245ea$export$10d5772debd84bf1(ys_1)){
        acc = folder(acc, $c5730ae5119245ea$export$1d866465156343c7(xs_1), $c5730ae5119245ea$export$1d866465156343c7(ys_1));
        xs_1 = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs_1);
        ys_1 = $c5730ae5119245ea$export$4e0d45844bd5cd6a(ys_1);
    }
    return acc;
}
function $c5730ae5119245ea$export$f04d6919de1a1f94(folder, xs, ys, state) {
    return $5a541a3f8220d610$export$f04d6919de1a1f94(folder, $c5730ae5119245ea$export$45b10814cc054894(xs), $c5730ae5119245ea$export$45b10814cc054894(ys), state);
}
function $c5730ae5119245ea$export$c48e357c1a89b78d(gen, state) {
    const loop = (acc_mut, node_mut)=>{
        let t;
        loop: while(true){
            const acc = acc_mut, node = node_mut;
            const matchValue = gen(acc);
            if (matchValue != null) {
                acc_mut = matchValue[1];
                node_mut = (t = new $c5730ae5119245ea$export$46fa32c6f8b2f86(matchValue[0], void 0), node.tail = t, t);
                continue loop;
            } else return node;
            break;
        }
    };
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    const node_1 = loop(state, root);
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    node_1.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$c1a059043cc9c119(action, xs) {
    $c5730ae5119245ea$export$93e2b83da34ff82a((unitVar0, x)=>{
        action(x);
    }, void 0, xs);
}
function $c5730ae5119245ea$export$d1731a37ee7d4fbb(action, xs, ys) {
    $c5730ae5119245ea$export$6eef545db8c1f6e((unitVar0, x, y)=>{
        action(x, y);
    }, void 0, xs, ys);
}
function $c5730ae5119245ea$export$5a067165821eae2d(action, xs) {
    $c5730ae5119245ea$export$93e2b83da34ff82a((i, x)=>{
        action(i, x);
        return i + 1 | 0;
    }, 0, xs);
}
function $c5730ae5119245ea$export$ab3c1f9aeb4948fd(action, xs, ys) {
    $c5730ae5119245ea$export$6eef545db8c1f6e((i, x, y)=>{
        action(i, x, y);
        return i + 1 | 0;
    }, 0, xs, ys);
}
function $c5730ae5119245ea$export$1344b76b7b5a4395(xs) {
    return xs;
}
function $c5730ae5119245ea$export$2d23f4f67ce65296(xs, tail_1) {
    let res = tail_1;
    for(let i = xs.length - 1; i >= 0; i--)res = $c5730ae5119245ea$export$62ac43da335545f6(xs[i], res);
    return res;
}
function $c5730ae5119245ea$export$cb197a913f6bb809(xs) {
    return $c5730ae5119245ea$export$2d23f4f67ce65296(xs, $c5730ae5119245ea$export$ca5f14a39f7c3bde());
}
function $c5730ae5119245ea$export$c80b5fc7454ef206(xs) {
    let xs_3, t;
    if ($ed39e963967a3eea$export$1e2f57719e155213(xs)) return $c5730ae5119245ea$export$cb197a913f6bb809(xs);
    else if (xs instanceof $c5730ae5119245ea$export$46fa32c6f8b2f86) return xs;
    else {
        const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
        let node = root;
        const enumerator = $ed39e963967a3eea$export$a41738691dcd8bea(xs);
        try {
            while(enumerator["System.Collections.IEnumerator.MoveNext"]()){
                const x = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                node = (xs_3 = node, t = new $c5730ae5119245ea$export$46fa32c6f8b2f86(x, void 0), xs_3.tail = t, t);
            }
        } finally{
            enumerator.Dispose();
        }
        const xs_5 = node;
        const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
        xs_5.tail = t_2;
        return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
    }
}
function $c5730ae5119245ea$export$ee1b3e54f0441b22(lists) {
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    let node = root;
    const action = (xs)=>{
        node = $c5730ae5119245ea$export$93e2b83da34ff82a((acc, x)=>{
            const t = new $c5730ae5119245ea$export$46fa32c6f8b2f86(x, void 0);
            acc.tail = t;
            return t;
        }, node, xs);
    };
    if ($ed39e963967a3eea$export$1e2f57719e155213(lists)) lists.forEach(action);
    else if (lists instanceof $c5730ae5119245ea$export$46fa32c6f8b2f86) $c5730ae5119245ea$export$c1a059043cc9c119(action, lists);
    else {
        const enumerator = $ed39e963967a3eea$export$a41738691dcd8bea(lists);
        try {
            while(enumerator["System.Collections.IEnumerator.MoveNext"]())action(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]());
        } finally{
            enumerator.Dispose();
        }
    }
    const xs_6 = node;
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    xs_6.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$c87d910e63d22ed6(folder, state, xs) {
    let xs_4, t_2;
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    let node;
    const t = new $c5730ae5119245ea$export$46fa32c6f8b2f86(state, void 0);
    root.tail = t;
    node = t;
    let acc = state;
    let xs_3 = xs;
    while(!$c5730ae5119245ea$export$10d5772debd84bf1(xs_3)){
        acc = folder(acc, $c5730ae5119245ea$export$1d866465156343c7(xs_3));
        node = (xs_4 = node, t_2 = new $c5730ae5119245ea$export$46fa32c6f8b2f86(acc, void 0), xs_4.tail = t_2, t_2);
        xs_3 = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs_3);
    }
    const xs_6 = node;
    const t_4 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    xs_6.tail = t_4;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$7bd1078b283d99ad(folder, xs, state) {
    return $c5730ae5119245ea$export$cb197a913f6bb809($5a541a3f8220d610$export$7bd1078b283d99ad(folder, $c5730ae5119245ea$export$45b10814cc054894(xs), state));
}
function $c5730ae5119245ea$export$10d8903dec122b9d(xs, ys) {
    return $c5730ae5119245ea$export$93e2b83da34ff82a((acc, x)=>$c5730ae5119245ea$export$62ac43da335545f6(x, acc)
    , ys, $c5730ae5119245ea$export$66c1ae025e96b4bc(xs));
}
function $c5730ae5119245ea$export$bb44f104e3c54dae(mapping, xs) {
    let xs_1, t;
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    let node = root;
    let ys = xs;
    while(!$c5730ae5119245ea$export$10d5772debd84bf1(ys)){
        let zs = mapping($c5730ae5119245ea$export$1d866465156343c7(ys));
        while(!$c5730ae5119245ea$export$10d5772debd84bf1(zs)){
            node = (xs_1 = node, t = new $c5730ae5119245ea$export$46fa32c6f8b2f86($c5730ae5119245ea$export$1d866465156343c7(zs), void 0), xs_1.tail = t, t);
            zs = $c5730ae5119245ea$export$4e0d45844bd5cd6a(zs);
        }
        ys = $c5730ae5119245ea$export$4e0d45844bd5cd6a(ys);
    }
    const xs_3 = node;
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    xs_3.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$e5bd5b3b105c2a71(mapping, xs) {
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    const node = $c5730ae5119245ea$export$c336ee92e62ce644((i, acc, x)=>{
        const t = new $c5730ae5119245ea$export$46fa32c6f8b2f86(mapping(i, x), void 0);
        acc.tail = t;
        return t;
    }, root, xs);
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$871de8747c9eaa88(mapping, xs) {
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    const node = $c5730ae5119245ea$export$93e2b83da34ff82a((acc, x)=>{
        const t = new $c5730ae5119245ea$export$46fa32c6f8b2f86(mapping(x), void 0);
        acc.tail = t;
        return t;
    }, root, xs);
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$ddf7c77acd0bf516(xs) {
    return $c5730ae5119245ea$export$e5bd5b3b105c2a71((i, x)=>[
            i,
            x
        ]
    , xs);
}
function $c5730ae5119245ea$export$5be556bf484c4f10(mapping, xs, ys) {
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    const node = $c5730ae5119245ea$export$6eef545db8c1f6e((acc, x, y)=>{
        const t = new $c5730ae5119245ea$export$46fa32c6f8b2f86(mapping(x, y), void 0);
        acc.tail = t;
        return t;
    }, root, xs, ys);
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$aded800c294daba4(mapping, xs, ys) {
    const loop = (i_mut, acc_mut, xs_1_mut, ys_1_mut)=>{
        let t;
        loop: while(true){
            const i = i_mut, acc = acc_mut, xs_1 = xs_1_mut, ys_1 = ys_1_mut;
            if ($c5730ae5119245ea$export$10d5772debd84bf1(xs_1) ? true : $c5730ae5119245ea$export$10d5772debd84bf1(ys_1)) return acc;
            else {
                i_mut = i + 1;
                acc_mut = (t = new $c5730ae5119245ea$export$46fa32c6f8b2f86(mapping(i, $c5730ae5119245ea$export$1d866465156343c7(xs_1), $c5730ae5119245ea$export$1d866465156343c7(ys_1)), void 0), acc.tail = t, t);
                xs_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs_1);
                ys_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(ys_1);
                continue loop;
            }
            break;
        }
    };
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    const node_1 = loop(0, root, xs, ys);
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    node_1.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$f7389512af34c855(mapping, xs, ys, zs) {
    const loop = (acc_mut, xs_1_mut, ys_1_mut, zs_1_mut)=>{
        let t;
        loop: while(true){
            const acc = acc_mut, xs_1 = xs_1_mut, ys_1 = ys_1_mut, zs_1 = zs_1_mut;
            if (($c5730ae5119245ea$export$10d5772debd84bf1(xs_1) ? true : $c5730ae5119245ea$export$10d5772debd84bf1(ys_1)) ? true : $c5730ae5119245ea$export$10d5772debd84bf1(zs_1)) return acc;
            else {
                acc_mut = (t = new $c5730ae5119245ea$export$46fa32c6f8b2f86(mapping($c5730ae5119245ea$export$1d866465156343c7(xs_1), $c5730ae5119245ea$export$1d866465156343c7(ys_1), $c5730ae5119245ea$export$1d866465156343c7(zs_1)), void 0), acc.tail = t, t);
                xs_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs_1);
                ys_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(ys_1);
                zs_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(zs_1);
                continue loop;
            }
            break;
        }
    };
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    const node_1 = loop(root, xs, ys, zs);
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    node_1.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$9b19c2e3f2aab20f(mapping, state, xs) {
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    const patternInput_1 = $c5730ae5119245ea$export$93e2b83da34ff82a((tupledArg, x)=>{
        let t;
        const patternInput = mapping(tupledArg[1], x);
        return [
            (t = new $c5730ae5119245ea$export$46fa32c6f8b2f86(patternInput[0], void 0), (tupledArg[0].tail = t, t)),
            patternInput[1]
        ];
    }, [
        root,
        state
    ], xs);
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    patternInput_1[0].tail = t_2;
    return [
        $c5730ae5119245ea$export$4e0d45844bd5cd6a(root),
        patternInput_1[1]
    ];
}
function $c5730ae5119245ea$export$6d7c6abab27be307(mapping, xs, state) {
    return $c5730ae5119245ea$export$9b19c2e3f2aab20f((acc, x)=>mapping(x, acc)
    , state, $c5730ae5119245ea$export$66c1ae025e96b4bc(xs));
}
function $c5730ae5119245ea$export$d944e5c60afb688e(f, xs) {
    const loop = (xs_1_mut)=>{
        loop: while(true){
            const xs_1 = xs_1_mut;
            if ($c5730ae5119245ea$export$10d5772debd84bf1(xs_1)) return void 0;
            else {
                const matchValue = f($c5730ae5119245ea$export$1d866465156343c7(xs_1));
                if (matchValue == null) {
                    xs_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs_1);
                    continue loop;
                } else return matchValue;
            }
            break;
        }
    };
    return loop(xs);
}
function $c5730ae5119245ea$export$357523c63a2253b9(f, xs) {
    const matchValue = $c5730ae5119245ea$export$d944e5c60afb688e(f, xs);
    if (matchValue == null) throw new Error($c5730ae5119245ea$export$bc2c3bc917b1d953);
    else return $7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue);
}
function $c5730ae5119245ea$export$d65cb303b863e3bf(f, xs) {
    return $c5730ae5119245ea$export$d944e5c60afb688e((x)=>f(x) ? $7e4c281993e75c03$export$ad14ef4001db2bcd(x) : void 0
    , xs);
}
function $c5730ae5119245ea$export$71aa6c912b956294(f, xs) {
    const matchValue = $c5730ae5119245ea$export$d65cb303b863e3bf(f, xs);
    if (matchValue == null) throw new Error($c5730ae5119245ea$export$bc2c3bc917b1d953);
    else return $7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue);
}
function $c5730ae5119245ea$export$36425195e236bb0f(f, xs) {
    return $5a541a3f8220d610$export$36425195e236bb0f(f, $c5730ae5119245ea$export$45b10814cc054894(xs));
}
function $c5730ae5119245ea$export$ec18defb06d12add(f, xs) {
    const matchValue = $c5730ae5119245ea$export$36425195e236bb0f(f, xs);
    if (matchValue == null) throw new Error($c5730ae5119245ea$export$bc2c3bc917b1d953);
    else return $7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue);
}
function $c5730ae5119245ea$export$5c13475397a61429(f, xs) {
    const loop = (i_mut, xs_1_mut)=>{
        loop: while(true){
            const i = i_mut, xs_1 = xs_1_mut;
            if ($c5730ae5119245ea$export$10d5772debd84bf1(xs_1)) return void 0;
            else if (f($c5730ae5119245ea$export$1d866465156343c7(xs_1))) return i;
            else {
                i_mut = i + 1;
                xs_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs_1);
                continue loop;
            }
            break;
        }
    };
    return loop(0, xs);
}
function $c5730ae5119245ea$export$de3a4d4a0d731119(f, xs) {
    const matchValue = $c5730ae5119245ea$export$5c13475397a61429(f, xs);
    if (matchValue == null) throw new Error($c5730ae5119245ea$export$bc2c3bc917b1d953);
    else return matchValue | 0;
}
function $c5730ae5119245ea$export$e1cc954945760117(f, xs) {
    return $5a541a3f8220d610$export$e1cc954945760117(f, $c5730ae5119245ea$export$45b10814cc054894(xs));
}
function $c5730ae5119245ea$export$78e19deb30f83296(f, xs) {
    const matchValue = $c5730ae5119245ea$export$e1cc954945760117(f, xs);
    if (matchValue == null) throw new Error($c5730ae5119245ea$export$bc2c3bc917b1d953);
    else return matchValue | 0;
}
function $c5730ae5119245ea$export$3fe40c3a4d8cb094(n, xs) {
    const loop = (i_mut, xs_1_mut)=>{
        loop: while(true){
            const i = i_mut, xs_1 = xs_1_mut;
            if ($c5730ae5119245ea$export$10d5772debd84bf1(xs_1)) return void 0;
            else if (i === n) return $7e4c281993e75c03$export$ad14ef4001db2bcd($c5730ae5119245ea$export$1d866465156343c7(xs_1));
            else {
                i_mut = i + 1;
                xs_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs_1);
                continue loop;
            }
            break;
        }
    };
    return loop(0, xs);
}
function $c5730ae5119245ea$export$7061c75fc5af8b7e(n, xs) {
    return $c5730ae5119245ea$export$f63236b60aa2bf0(xs, n);
}
function $c5730ae5119245ea$export$3dea766d36a8935f(f, xs) {
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    const node = $c5730ae5119245ea$export$93e2b83da34ff82a((acc, x)=>{
        if (f(x)) {
            const t = new $c5730ae5119245ea$export$46fa32c6f8b2f86(x, void 0);
            acc.tail = t;
            return t;
        } else return acc;
    }, root, xs);
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$b29f828819edca8d(f, xs) {
    const patternInput = [
        $c5730ae5119245ea$export$ca5f14a39f7c3bde(),
        $c5730ae5119245ea$export$ca5f14a39f7c3bde()
    ];
    const root2 = patternInput[1];
    const root1 = patternInput[0];
    const patternInput_1 = $c5730ae5119245ea$export$93e2b83da34ff82a($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (tupledArg)=>{
        const lacc = tupledArg[0];
        const racc = tupledArg[1];
        return (x)=>{
            let t, t_2;
            return f(x) ? [
                (t = new $c5730ae5119245ea$export$46fa32c6f8b2f86(x, void 0), (lacc.tail = t, t)),
                racc
            ] : [
                lacc,
                (t_2 = new $c5730ae5119245ea$export$46fa32c6f8b2f86(x, void 0), (racc.tail = t_2, t_2))
            ];
        };
    }), [
        root1,
        root2
    ], xs);
    const t_4 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    patternInput_1[0].tail = t_4;
    const t_5 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    patternInput_1[1].tail = t_5;
    return [
        $c5730ae5119245ea$export$4e0d45844bd5cd6a(root1),
        $c5730ae5119245ea$export$4e0d45844bd5cd6a(root2)
    ];
}
function $c5730ae5119245ea$export$7877a478dd30fd3d(f, xs) {
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    const node = $c5730ae5119245ea$export$93e2b83da34ff82a((acc, x)=>{
        const matchValue = f(x);
        if (matchValue == null) return acc;
        else {
            const t = new $c5730ae5119245ea$export$46fa32c6f8b2f86($7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue), void 0);
            acc.tail = t;
            return t;
        }
    }, root, xs);
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$2344b14b097df817(value, xs, eq) {
    return $c5730ae5119245ea$export$5c13475397a61429((v)=>eq.Equals(value, v)
    , xs) != null;
}
function $c5730ae5119245ea$export$2a47f398eeff8b01(n, f) {
    let xs, t;
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    let node = root;
    for(let i = 0; i <= n - 1; i++)node = (xs = node, t = new $c5730ae5119245ea$export$46fa32c6f8b2f86(f(i), void 0), xs.tail = t, t);
    const xs_2 = node;
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    xs_2.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$606959e7ccb797f0(n, x) {
    return $c5730ae5119245ea$export$2a47f398eeff8b01(n, (_arg1)=>x
    );
}
function $c5730ae5119245ea$export$533b26079ad0b4b(f, xs) {
    if ($c5730ae5119245ea$export$10d5772debd84bf1(xs)) throw new Error($c5730ae5119245ea$export$c005a33403882123);
    else return $c5730ae5119245ea$export$93e2b83da34ff82a(f, $c5730ae5119245ea$export$5fd5031fecdacec3(xs), $c5730ae5119245ea$export$c01875f616615628(xs));
}
function $c5730ae5119245ea$export$90cf02207d4ef99b(f, xs) {
    if ($c5730ae5119245ea$export$10d5772debd84bf1(xs)) throw new Error($c5730ae5119245ea$export$c005a33403882123);
    else return $c5730ae5119245ea$export$c38b8353041a4f48(f, $c5730ae5119245ea$export$c01875f616615628(xs), $c5730ae5119245ea$export$5fd5031fecdacec3(xs));
}
function $c5730ae5119245ea$export$e5bd981f5eeebe3b(f, xs) {
    return $c5730ae5119245ea$export$93e2b83da34ff82a((acc, x)=>acc && f(x)
    , true, xs);
}
function $c5730ae5119245ea$export$a85e1ff32f9fff6e(f, xs, ys) {
    return $c5730ae5119245ea$export$6eef545db8c1f6e((acc, x, y)=>acc && f(x, y)
    , true, xs, ys);
}
function $c5730ae5119245ea$export$f7e9f41ea797a17(f, xs) {
    return $c5730ae5119245ea$export$5c13475397a61429(f, xs) != null;
}
function $c5730ae5119245ea$export$d04ae74aaa2c0655(f_mut, xs_mut, ys_mut) {
    $c5730ae5119245ea$export$d04ae74aaa2c0655: while(true){
        const f = f_mut, xs = xs_mut, ys = ys_mut;
        const matchValue = [
            $c5730ae5119245ea$export$10d5772debd84bf1(xs),
            $c5730ae5119245ea$export$10d5772debd84bf1(ys)
        ];
        let pattern_matching_result;
        if (matchValue[0]) {
            if (matchValue[1]) pattern_matching_result = 0;
            else pattern_matching_result = 2;
        } else if (matchValue[1]) pattern_matching_result = 2;
        else pattern_matching_result = 1;
        switch(pattern_matching_result){
            case 0:
                return false;
            case 1:
                if (f($c5730ae5119245ea$export$1d866465156343c7(xs), $c5730ae5119245ea$export$1d866465156343c7(ys))) return true;
                else {
                    f_mut = f;
                    xs_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs);
                    ys_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(ys);
                    continue $c5730ae5119245ea$export$d04ae74aaa2c0655;
                }
            case 2:
                throw new Error($c5730ae5119245ea$export$da3d1203d4648eef + "\\nParameter name: " + "list2");
        }
        break;
    }
}
function $c5730ae5119245ea$export$23c8d3f8757cab88(xs) {
    return $c5730ae5119245ea$export$c38b8353041a4f48((tupledArg, tupledArg_1)=>[
            $c5730ae5119245ea$export$62ac43da335545f6(tupledArg[0], tupledArg_1[0]),
            $c5730ae5119245ea$export$62ac43da335545f6(tupledArg[1], tupledArg_1[1])
        ]
    , xs, [
        $c5730ae5119245ea$export$ca5f14a39f7c3bde(),
        $c5730ae5119245ea$export$ca5f14a39f7c3bde()
    ]);
}
function $c5730ae5119245ea$export$a52790ad56d35e3d(xs) {
    return $c5730ae5119245ea$export$c38b8353041a4f48((tupledArg, tupledArg_1)=>[
            $c5730ae5119245ea$export$62ac43da335545f6(tupledArg[0], tupledArg_1[0]),
            $c5730ae5119245ea$export$62ac43da335545f6(tupledArg[1], tupledArg_1[1]),
            $c5730ae5119245ea$export$62ac43da335545f6(tupledArg[2], tupledArg_1[2])
        ]
    , xs, [
        $c5730ae5119245ea$export$ca5f14a39f7c3bde(),
        $c5730ae5119245ea$export$ca5f14a39f7c3bde(),
        $c5730ae5119245ea$export$ca5f14a39f7c3bde()
    ]);
}
function $c5730ae5119245ea$export$8901015135f2fb22(xs, ys) {
    return $c5730ae5119245ea$export$5be556bf484c4f10((x, y)=>[
            x,
            y
        ]
    , xs, ys);
}
function $c5730ae5119245ea$export$a3c629e5d025ffc1(xs, ys, zs) {
    return $c5730ae5119245ea$export$f7389512af34c855((x, y, z)=>[
            x,
            y,
            z
        ]
    , xs, ys, zs);
}
function $c5730ae5119245ea$export$a9e7d1a6fdcfefde(comparer, xs) {
    const arr = $c5730ae5119245ea$export$45b10814cc054894(xs);
    arr.sort(comparer);
    return $c5730ae5119245ea$export$cb197a913f6bb809(arr);
}
function $c5730ae5119245ea$export$97db5808d8f88186(xs, comparer) {
    return $c5730ae5119245ea$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(x, y)
    , xs);
}
function $c5730ae5119245ea$export$b035e44d7bb4278f(projection, xs, comparer) {
    return $c5730ae5119245ea$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(projection(x), projection(y))
    , xs);
}
function $c5730ae5119245ea$export$9a59fdf05ed66d15(xs, comparer) {
    return $c5730ae5119245ea$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(x, y) * -1
    , xs);
}
function $c5730ae5119245ea$export$ca6dab212df382f6(projection, xs, comparer) {
    return $c5730ae5119245ea$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(projection(x), projection(y)) * -1
    , xs);
}
function $c5730ae5119245ea$export$8a63f25cc62965f1(xs, adder) {
    return $c5730ae5119245ea$export$93e2b83da34ff82a((acc, x)=>adder.Add(acc, x)
    , adder.GetZero(), xs);
}
function $c5730ae5119245ea$export$9e8299ab977385a3(f, xs, adder) {
    return $c5730ae5119245ea$export$93e2b83da34ff82a((acc, x)=>adder.Add(acc, f(x))
    , adder.GetZero(), xs);
}
function $c5730ae5119245ea$export$ad1963a493908da4(projection, xs, comparer) {
    return $c5730ae5119245ea$export$533b26079ad0b4b((x, y)=>comparer.Compare(projection(y), projection(x)) > 0 ? y : x
    , xs);
}
function $c5730ae5119245ea$export$8960430cfd85939f(xs, comparer) {
    return $c5730ae5119245ea$export$533b26079ad0b4b((x, y)=>comparer.Compare(y, x) > 0 ? y : x
    , xs);
}
function $c5730ae5119245ea$export$8c826aa0fa59ac68(projection, xs, comparer) {
    return $c5730ae5119245ea$export$533b26079ad0b4b((x, y)=>comparer.Compare(projection(y), projection(x)) > 0 ? x : y
    , xs);
}
function $c5730ae5119245ea$export$96ec731ed4dcb222(xs, comparer) {
    return $c5730ae5119245ea$export$533b26079ad0b4b((x, y)=>comparer.Compare(y, x) > 0 ? x : y
    , xs);
}
function $c5730ae5119245ea$export$cc6710ee5f037d57(xs, averager) {
    let count = 0;
    return averager.DivideByInt($c5730ae5119245ea$export$93e2b83da34ff82a((acc, x)=>{
        count = count + 1 | 0;
        return averager.Add(acc, x);
    }, averager.GetZero(), xs), count);
}
function $c5730ae5119245ea$export$9077387bc3582185(f, xs, averager) {
    let count = 0;
    return averager.DivideByInt($c5730ae5119245ea$export$93e2b83da34ff82a((acc, x)=>{
        count = count + 1 | 0;
        return averager.Add(acc, f(x));
    }, averager.GetZero(), xs), count);
}
function $c5730ae5119245ea$export$95e62ad65da8b7d2(f, xs) {
    return $c5730ae5119245ea$export$cb197a913f6bb809($5a541a3f8220d610$export$95e62ad65da8b7d2(f, $c5730ae5119245ea$export$45b10814cc054894(xs)));
}
function $c5730ae5119245ea$export$6302d00ba2848bf(chunkSize, xs) {
    return $c5730ae5119245ea$export$cb197a913f6bb809($5a541a3f8220d610$export$871de8747c9eaa88((xs_1)=>$c5730ae5119245ea$export$cb197a913f6bb809(xs_1)
    , $5a541a3f8220d610$export$6302d00ba2848bf(chunkSize, $c5730ae5119245ea$export$45b10814cc054894(xs))));
}
function $c5730ae5119245ea$export$8016484fb8238078(xs, ys) {
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    let node = root;
    $c5730ae5119245ea$export$c1a059043cc9c119((x)=>{
        $c5730ae5119245ea$export$c1a059043cc9c119((y)=>{
            let xs_1, t;
            node = (xs_1 = node, t = new $c5730ae5119245ea$export$46fa32c6f8b2f86([
                x,
                y
            ], void 0), xs_1.tail = t, t);
        }, ys);
    }, xs);
    const xs_3 = node;
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    xs_3.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$955fc4a6c4be454d(count_mut, xs_mut) {
    $c5730ae5119245ea$export$955fc4a6c4be454d: while(true){
        const count = count_mut, xs = xs_mut;
        if (count <= 0) return xs;
        else if ($c5730ae5119245ea$export$10d5772debd84bf1(xs)) throw new Error($c5730ae5119245ea$export$9f17aeddfa374276 + "\\nParameter name: " + "list");
        else {
            count_mut = count - 1;
            xs_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs);
            continue $c5730ae5119245ea$export$955fc4a6c4be454d;
        }
        break;
    }
}
function $c5730ae5119245ea$export$175dedd748069215(predicate_mut, xs_mut) {
    $c5730ae5119245ea$export$175dedd748069215: while(true){
        const predicate = predicate_mut, xs = xs_mut;
        if ($c5730ae5119245ea$export$10d5772debd84bf1(xs)) return xs;
        else if (!predicate($c5730ae5119245ea$export$1d866465156343c7(xs))) return xs;
        else {
            predicate_mut = predicate;
            xs_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs);
            continue $c5730ae5119245ea$export$175dedd748069215;
        }
        break;
    }
}
function $c5730ae5119245ea$export$b7df5d561049483a(count, xs) {
    if (count < 0) throw new Error($c5730ae5119245ea$export$2f1b8e728b004525 + "\\nParameter name: " + "count");
    const loop = (i_mut, acc_mut, xs_1_mut)=>{
        let t;
        loop: while(true){
            const i = i_mut, acc = acc_mut, xs_1 = xs_1_mut;
            if (i <= 0) return acc;
            else if ($c5730ae5119245ea$export$10d5772debd84bf1(xs_1)) throw new Error($c5730ae5119245ea$export$9f17aeddfa374276 + "\\nParameter name: " + "list");
            else {
                i_mut = i - 1;
                acc_mut = (t = new $c5730ae5119245ea$export$46fa32c6f8b2f86($c5730ae5119245ea$export$1d866465156343c7(xs_1), void 0), acc.tail = t, t);
                xs_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs_1);
                continue loop;
            }
            break;
        }
    };
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    const node = loop(count, root, xs);
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$9384c7afe4015e42(predicate, xs) {
    const loop = (acc_mut, xs_1_mut)=>{
        let t;
        loop: while(true){
            const acc = acc_mut, xs_1 = xs_1_mut;
            if ($c5730ae5119245ea$export$10d5772debd84bf1(xs_1)) return acc;
            else if (!predicate($c5730ae5119245ea$export$1d866465156343c7(xs_1))) return acc;
            else {
                acc_mut = (t = new $c5730ae5119245ea$export$46fa32c6f8b2f86($c5730ae5119245ea$export$1d866465156343c7(xs_1), void 0), acc.tail = t, t);
                xs_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs_1);
                continue loop;
            }
            break;
        }
    };
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    const node = loop(root, xs);
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$6a506b36fdea397d(count, xs) {
    const loop = (i_mut, acc_mut, xs_1_mut)=>{
        let t;
        loop: while(true){
            const i = i_mut, acc = acc_mut, xs_1 = xs_1_mut;
            if (i <= 0) return acc;
            else if ($c5730ae5119245ea$export$10d5772debd84bf1(xs_1)) return acc;
            else {
                i_mut = i - 1;
                acc_mut = (t = new $c5730ae5119245ea$export$46fa32c6f8b2f86($c5730ae5119245ea$export$1d866465156343c7(xs_1), void 0), acc.tail = t, t);
                xs_1_mut = $c5730ae5119245ea$export$4e0d45844bd5cd6a(xs_1);
                continue loop;
            }
            break;
        }
    };
    const root = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    const node = loop(count, root, xs);
    const t_2 = $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $c5730ae5119245ea$export$4e0d45844bd5cd6a(root);
}
function $c5730ae5119245ea$export$9899dbe95982df9a(startIndex, endIndex, xs) {
    const len = $c5730ae5119245ea$export$f24224f1c91d8156(xs) | 0;
    const startIndex_1 = $7e4c281993e75c03$export$37721a79838ca038(startIndex, 0) | 0;
    const endIndex_1 = $7e4c281993e75c03$export$37721a79838ca038(endIndex, len - 1) | 0;
    if (startIndex_1 < 0) throw new Error($c5730ae5119245ea$export$1d7558b55257001d + "\\nParameter name: " + "startIndex");
    else if (endIndex_1 >= len) throw new Error($c5730ae5119245ea$export$1d7558b55257001d + "\\nParameter name: " + "endIndex");
    else if (endIndex_1 < startIndex_1) return $c5730ae5119245ea$export$ca5f14a39f7c3bde();
    else return $c5730ae5119245ea$export$b7df5d561049483a(endIndex_1 - startIndex_1 + 1, $c5730ae5119245ea$export$955fc4a6c4be454d(startIndex_1, xs));
}
function $c5730ae5119245ea$export$b0d75975ac0be0e1(index, xs) {
    if (index < 0) throw new Error($c5730ae5119245ea$export$2f1b8e728b004525 + "\\nParameter name: " + "index");
    if (index > $c5730ae5119245ea$export$f15c1e15e73226cf(xs)) throw new Error($c5730ae5119245ea$export$9f17aeddfa374276 + "\\nParameter name: " + "index");
    return [
        $c5730ae5119245ea$export$b7df5d561049483a(index, xs),
        $c5730ae5119245ea$export$955fc4a6c4be454d(index, xs)
    ];
}
function $c5730ae5119245ea$export$3367fc0da2c111f0(xs) {
    if ($c5730ae5119245ea$export$10d5772debd84bf1(xs)) throw new Error($c5730ae5119245ea$export$bb8ebba5bfe3f17a + "\\nParameter name: " + "list");
    else if ($c5730ae5119245ea$export$10d5772debd84bf1($c5730ae5119245ea$export$4e0d45844bd5cd6a(xs))) return $c5730ae5119245ea$export$1d866465156343c7(xs);
    else throw new Error($c5730ae5119245ea$export$8f2c469045724186 + "\\nParameter name: " + "list");
}
function $c5730ae5119245ea$export$22f0cfb94dab14ba(xs) {
    if (!$c5730ae5119245ea$export$10d5772debd84bf1(xs) && $c5730ae5119245ea$export$10d5772debd84bf1($c5730ae5119245ea$export$4e0d45844bd5cd6a(xs))) return $7e4c281993e75c03$export$ad14ef4001db2bcd($c5730ae5119245ea$export$1d866465156343c7(xs));
    else return void 0;
}
function $c5730ae5119245ea$export$9c59b80dda569a6e(predicate, xs) {
    return $c5730ae5119245ea$export$3dea766d36a8935f(predicate, xs);
}
function $c5730ae5119245ea$export$8f9d79d42bff1aac(xs) {
    return $c5730ae5119245ea$export$cb197a913f6bb809($5a541a3f8220d610$export$8f9d79d42bff1aac($c5730ae5119245ea$export$45b10814cc054894(xs)));
}
function $c5730ae5119245ea$export$5f2b86065ccf5a1(windowSize, xs) {
    return $c5730ae5119245ea$export$cb197a913f6bb809($5a541a3f8220d610$export$871de8747c9eaa88((xs_1)=>$c5730ae5119245ea$export$cb197a913f6bb809(xs_1)
    , $5a541a3f8220d610$export$5f2b86065ccf5a1(windowSize, $c5730ae5119245ea$export$45b10814cc054894(xs))));
}
function $c5730ae5119245ea$export$7120a88bf3d39e8(chunks, xs) {
    return $c5730ae5119245ea$export$cb197a913f6bb809($5a541a3f8220d610$export$871de8747c9eaa88((xs_1)=>$c5730ae5119245ea$export$cb197a913f6bb809(xs_1)
    , $5a541a3f8220d610$export$7120a88bf3d39e8(chunks, $c5730ae5119245ea$export$45b10814cc054894(xs))));
}
function $c5730ae5119245ea$export$9cb09a71b7d66923(lists) {
    return $c5730ae5119245ea$export$cb197a913f6bb809($5a541a3f8220d610$export$871de8747c9eaa88((xs_1)=>$c5730ae5119245ea$export$cb197a913f6bb809(xs_1)
    , $5a541a3f8220d610$export$9cb09a71b7d66923($5a541a3f8220d610$export$871de8747c9eaa88((xs)=>$c5730ae5119245ea$export$45b10814cc054894(xs)
    , Array.from(lists)))));
}















function $45c922adbd186168$export$5aed47dd1f4bcbcc(hash, eq) {
    return {
        Equals (x, y) {
            return eq(x, y);
        },
        GetHashCode (x_1) {
            return hash(x_1);
        }
    };
}
function $45c922adbd186168$export$2887c3ff5c15faf3() {
    return $45c922adbd186168$export$5aed47dd1f4bcbcc((obj)=>$ed39e963967a3eea$export$2e619f11ca48bee4(obj)
    , (e1, e2)=>$ed39e963967a3eea$export$e9bab7fafb253603(e1, e2)
    );
}
function $45c922adbd186168$export$ab9580ec4835c401() {
    return $45c922adbd186168$export$5aed47dd1f4bcbcc((obj)=>$ed39e963967a3eea$export$9657185e7652fc5b(obj)
    , (e1, e2)=>e1 === e2
    );
}
function $45c922adbd186168$export$5deb45fecd67f859(comparer) {
    return {
        Compare (x, y) {
            return comparer(x, y);
        }
    };
}
function $45c922adbd186168$export$fe834b789c7fece1() {
    return $45c922adbd186168$export$5deb45fecd67f859((e1, e2)=>$ed39e963967a3eea$export$398604a469f7de9a(e1, e2)
    );
}






class $ce5b1f4bb3ba745d$export$a76dbac5bd058d1b {
    constructor(value, capacity){
        this.buf = [];
        if (!$518fcccc33d36a20$export$c8733ae29fb53302(value)) this.buf.push(value);
    }
    toString() {
        const __ = this;
        return $518fcccc33d36a20$export$f7e2c8231c57a8bd("", __.buf);
    }
}
function $ce5b1f4bb3ba745d$export$b08fe2043fd86648() {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("System.Text.StringBuilder", void 0, $ce5b1f4bb3ba745d$export$a76dbac5bd058d1b);
}
function $ce5b1f4bb3ba745d$export$c5d05c6a25e844a2(value, capacity) {
    return new $ce5b1f4bb3ba745d$export$a76dbac5bd058d1b(value, capacity);
}
function $ce5b1f4bb3ba745d$export$260c34d6b3e20770(capacity) {
    return $ce5b1f4bb3ba745d$export$c5d05c6a25e844a2("", capacity);
}
function $ce5b1f4bb3ba745d$export$f1bbb1bc6adb5e98(value) {
    return $ce5b1f4bb3ba745d$export$c5d05c6a25e844a2(value, 16);
}
function $ce5b1f4bb3ba745d$export$11d4896a43bc5bcd() {
    return $ce5b1f4bb3ba745d$export$c5d05c6a25e844a2("", 16);
}
function $ce5b1f4bb3ba745d$export$6b50450544032b4c(x, s) {
    x.buf.push(s);
    return x;
}
function $ce5b1f4bb3ba745d$export$380be314ac460f13(x, c) {
    x.buf.push(c);
    return x;
}
function $ce5b1f4bb3ba745d$export$b8a92401e368f9b1(x, o) {
    x.buf.push($ed39e963967a3eea$export$afbd86327cbebb03(o));
    return x;
}
function $ce5b1f4bb3ba745d$export$7cad49e1ef432605(x, o) {
    x.buf.push(o.toString());
    return x;
}
function $ce5b1f4bb3ba745d$export$884ea596fb61d3ad(x, o) {
    x.buf.push($ae70510fbd2502e5$export$f84e8e69fd4488a5(o));
    return x;
}
function $ce5b1f4bb3ba745d$export$4b402a09adf229a1(x, o) {
    x.buf.push($ae70510fbd2502e5$export$f84e8e69fd4488a5(o));
    return x;
}
function $ce5b1f4bb3ba745d$export$2392525085e82003(x, cs) {
    x.buf.push(cs.join(''));
    return x;
}
function $ce5b1f4bb3ba745d$export$f4d22e689b6dca5d(x, s) {
    x.buf.push($ae70510fbd2502e5$export$f84e8e69fd4488a5(s));
    return x;
}
function $ce5b1f4bb3ba745d$export$53e9426b275a6099(x, fmt, o) {
    x.buf.push($518fcccc33d36a20$export$d9468344d3651243(fmt, o));
    return x;
}
function $ce5b1f4bb3ba745d$export$5ef3f527b248937a(x) {
    x.buf.push("\n");
    return x;
}
function $ce5b1f4bb3ba745d$export$adc172ef5ec1d9a4(x, s) {
    x.buf.push(s);
    x.buf.push("\n");
    return x;
}
function $ce5b1f4bb3ba745d$export$7ca6c13ca0fbff04(x) {
    let len = 0;
    for(let i = x.buf.length - 1; i >= 0; i--)len = len + x.buf[i].length | 0;
    return len | 0;
}
function $ce5b1f4bb3ba745d$export$fd7ff3bb38b7c8f9(x, firstIndex, length) {
    return $518fcccc33d36a20$export$662d3818631fba36($ae70510fbd2502e5$export$f84e8e69fd4488a5(x), firstIndex, length);
}
function $ce5b1f4bb3ba745d$export$de20c0c77a1c82b3(x) {
    $ed39e963967a3eea$export$42ffd38884aecdac(x.buf);
    return x;
}


const $586af16ba21f6539$export$c41c26fdec11ec90 = {
    ["System.Collections.IEqualityComparer.Equals541DA560"] (x, y) {
        return $ed39e963967a3eea$export$e9bab7fafb253603(x, y);
    },
    ["System.Collections.IEqualityComparer.GetHashCode4E60E31B"] (x_1) {
        return $ed39e963967a3eea$export$2e619f11ca48bee4(x_1);
    }
};
const $586af16ba21f6539$export$ea99482f058f81ef = {
    ["System.Collections.IEqualityComparer.Equals541DA560"] (x, y) {
        return $ed39e963967a3eea$export$e9bab7fafb253603(x, y);
    },
    ["System.Collections.IEqualityComparer.GetHashCode4E60E31B"] (x_1) {
        return $ed39e963967a3eea$export$2e619f11ca48bee4(x_1);
    }
};
function $586af16ba21f6539$export$d009ffa0939ac970() {
    return $45c922adbd186168$export$fe834b789c7fece1();
}
function $586af16ba21f6539$export$af918a4279da88c8() {
    return $45c922adbd186168$export$fe834b789c7fece1();
}
function $586af16ba21f6539$export$f62943dc50e062f2() {
    return $45c922adbd186168$export$2887c3ff5c15faf3();
}
function $586af16ba21f6539$export$a382d3621b8bd42a() {
    return $45c922adbd186168$export$2887c3ff5c15faf3();
}
function $586af16ba21f6539$export$85b0ce7ccd58cf96(message) {
    return new Error(message);
}
function $586af16ba21f6539$export$13e7d0bec9443a96(exn) {
    return exn.message;
}
function $586af16ba21f6539$export$49fc45e4e62e7426(x) {
    throw new Error(x);
}
function $586af16ba21f6539$export$cdb8bb7ae421efe4(resource, action) {
    try {
        return action(resource);
    } finally{
        if ($ed39e963967a3eea$export$e9bab7fafb253603(resource, null)) ;
        else resource.Dispose();
    }
}
function $586af16ba21f6539$export$71bc834cee2b44c0(_lockObj, action) {
    return action();
}
function $586af16ba21f6539$export$3fceb385c593a12(input) {
    return input.Value;
}
function $586af16ba21f6539$export$db1d2a6f3518bc00(continuation, builder, format) {
    return format.cont((s)=>{
        $ce5b1f4bb3ba745d$export$6b50450544032b4c(builder, s);
        return continuation();
    });
}
function $586af16ba21f6539$export$1ca523c0edc2f91a(builder, format) {
    return $586af16ba21f6539$export$db1d2a6f3518bc00(()=>{
    }, builder, format);
}




const $c4c313718bcc393b$export$c1d29bc2efedc7e2 = "Enumeration already finished.";
const $c4c313718bcc393b$export$d4f75b74a8a85920 = "Enumeration has not started. Call MoveNext.";
const $c4c313718bcc393b$export$bb8ebba5bfe3f17a = "The input sequence was empty.";
const $c4c313718bcc393b$export$8f2c469045724186 = "The input sequence contains more than one element.";
const $c4c313718bcc393b$export$bc2c3bc917b1d953 = "An index satisfying the predicate was not found in the collection.";
const $c4c313718bcc393b$export$9f17aeddfa374276 = "The input sequence has an insufficient number of elements.";
const $c4c313718bcc393b$export$5c8816aab4f46f58 = "Reset is not supported on this enumerator.";
function $c4c313718bcc393b$export$c9c12dccafdc9e15() {
    throw new Error($c4c313718bcc393b$export$5c8816aab4f46f58);
}
function $c4c313718bcc393b$export$fe7fea637c109b1() {
    throw new Error($c4c313718bcc393b$export$d4f75b74a8a85920);
}
function $c4c313718bcc393b$export$8314a61089d7dfd1() {
    throw new Error($c4c313718bcc393b$export$c1d29bc2efedc7e2);
}
class $c4c313718bcc393b$export$f84f5f7a2af4015b {
    constructor(f){
        this.f = f;
    }
    toString() {
        const xs = this;
        const maxCount = 4;
        let i = 0;
        let str = "seq [";
        const e = $ed39e963967a3eea$export$a41738691dcd8bea(xs);
        try {
            while(i < maxCount && e["System.Collections.IEnumerator.MoveNext"]()){
                if (i > 0) str = str + "; ";
                str = str + $ae70510fbd2502e5$export$f84e8e69fd4488a5(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
                i = i + 1 | 0;
            }
            if (i === maxCount) str = str + "; ...";
            return str + "]";
        } finally{
            e.Dispose();
        }
    }
    GetEnumerator() {
        const x = this;
        return x.f();
    }
    [Symbol.iterator]() {
        return $ed39e963967a3eea$export$21e0669b7bd01bb4(this.GetEnumerator());
    }
    ["System.Collections.IEnumerable.GetEnumerator"]() {
        const x = this;
        return x.f();
    }
}
function $c4c313718bcc393b$export$cc091c09229b4253(gen0) {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("SeqModule.Enumerator.Seq", [
        gen0
    ], $c4c313718bcc393b$export$f84f5f7a2af4015b);
}
function $c4c313718bcc393b$export$9de9c521f6c9f38f(f) {
    return new $c4c313718bcc393b$export$f84f5f7a2af4015b(f);
}
class $c4c313718bcc393b$export$2cbf863d8f6afaa7 {
    constructor(current, next, dispose){
        this.current = current;
        this.next = next;
        this.dispose = dispose;
    }
    ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
        const __ = this;
        return __.current();
    }
    ["System.Collections.IEnumerator.get_Current"]() {
        const __ = this;
        return __.current();
    }
    ["System.Collections.IEnumerator.MoveNext"]() {
        const __ = this;
        return __.next();
    }
    ["System.Collections.IEnumerator.Reset"]() {
        $c4c313718bcc393b$export$c9c12dccafdc9e15();
    }
    Dispose() {
        const __ = this;
        __.dispose();
    }
}
function $c4c313718bcc393b$export$8ea20ec9fcb9b264(gen0) {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("SeqModule.Enumerator.FromFunctions`1", [
        gen0
    ], $c4c313718bcc393b$export$2cbf863d8f6afaa7);
}
function $c4c313718bcc393b$export$df49e5e409220125(current, next, dispose) {
    return new $c4c313718bcc393b$export$2cbf863d8f6afaa7(current, next, dispose);
}
function $c4c313718bcc393b$export$ebf0eca22469dbbc(e) {
    return $c4c313718bcc393b$export$df49e5e409220125(()=>e["System.Collections.IEnumerator.get_Current"]()
    , ()=>e["System.Collections.IEnumerator.MoveNext"]()
    , ()=>{
        if ($ed39e963967a3eea$export$e29d65b7eabdc6dd(e)) e.Dispose();
    });
}
function $c4c313718bcc393b$export$20426c14ee45c85e(sources) {
    let outerOpt = void 0;
    let innerOpt = void 0;
    let started = false;
    let finished = false;
    let curr = void 0;
    const finish = ()=>{
        finished = true;
        if (innerOpt != null) {
            const inner = innerOpt;
            try {
                inner.Dispose();
            } finally{
                innerOpt = void 0;
            }
        }
        if (outerOpt != null) {
            const outer = outerOpt;
            try {
                outer.Dispose();
            } finally{
                outerOpt = void 0;
            }
        }
    };
    return $c4c313718bcc393b$export$df49e5e409220125(()=>{
        if (!started) $c4c313718bcc393b$export$fe7fea637c109b1();
        else if (finished) $c4c313718bcc393b$export$8314a61089d7dfd1();
        if (curr != null) return $7e4c281993e75c03$export$2ab9a8f9f1186f14(curr);
        else return $c4c313718bcc393b$export$8314a61089d7dfd1();
    }, ()=>{
        let copyOfStruct;
        if (!started) started = true;
        if (finished) return false;
        else {
            let res = void 0;
            while(res == null){
                const matchValue = [
                    outerOpt,
                    innerOpt
                ];
                if (matchValue[0] != null) {
                    if (matchValue[1] != null) {
                        const inner_1 = matchValue[1];
                        if (inner_1["System.Collections.IEnumerator.MoveNext"]()) {
                            curr = $7e4c281993e75c03$export$ad14ef4001db2bcd(inner_1["System.Collections.Generic.IEnumerator`1.get_Current"]());
                            res = true;
                        } else try {
                            inner_1.Dispose();
                        } finally{
                            innerOpt = void 0;
                        }
                    } else {
                        const outer_1 = matchValue[0];
                        if (outer_1["System.Collections.IEnumerator.MoveNext"]()) {
                            const ie = outer_1["System.Collections.Generic.IEnumerator`1.get_Current"]();
                            innerOpt = (copyOfStruct = ie, $ed39e963967a3eea$export$a41738691dcd8bea(copyOfStruct));
                        } else {
                            finish();
                            res = false;
                        }
                    }
                } else outerOpt = $ed39e963967a3eea$export$a41738691dcd8bea(sources);
            }
            return $7e4c281993e75c03$export$2ab9a8f9f1186f14(res);
        }
    }, ()=>{
        if (!finished) finish();
    });
}
function $c4c313718bcc393b$export$8da5aab8659eb06(f, e) {
    return $c4c313718bcc393b$export$df49e5e409220125(()=>e["System.Collections.Generic.IEnumerator`1.get_Current"]()
    , ()=>e["System.Collections.IEnumerator.MoveNext"]()
    , ()=>{
        try {
            e.Dispose();
        } finally{
            f();
        }
    });
}
function $c4c313718bcc393b$export$d82b80f0dbfe256d(openf, compute, closef) {
    let started = false;
    let curr = void 0;
    let state = $7e4c281993e75c03$export$ad14ef4001db2bcd(openf());
    const dispose = ()=>{
        if (state != null) {
            const x_1 = $7e4c281993e75c03$export$2ab9a8f9f1186f14(state);
            try {
                closef(x_1);
            } finally{
                state = void 0;
            }
        }
    };
    const finish = ()=>{
        try {
            dispose();
        } finally{
            curr = void 0;
        }
    };
    return $c4c313718bcc393b$export$df49e5e409220125(()=>{
        if (!started) $c4c313718bcc393b$export$fe7fea637c109b1();
        if (curr != null) return $7e4c281993e75c03$export$2ab9a8f9f1186f14(curr);
        else return $c4c313718bcc393b$export$8314a61089d7dfd1();
    }, ()=>{
        if (!started) started = true;
        if (state != null) {
            const s = $7e4c281993e75c03$export$2ab9a8f9f1186f14(state);
            let matchValue_1;
            try {
                matchValue_1 = compute(s);
            } catch (matchValue) {
                finish();
                throw matchValue;
            }
            if (matchValue_1 != null) {
                curr = matchValue_1;
                return true;
            } else {
                finish();
                return false;
            }
        } else return false;
    }, dispose);
}
function $c4c313718bcc393b$export$f054447c84a06e65(f, state) {
    let curr = void 0;
    let acc = state;
    return $c4c313718bcc393b$export$df49e5e409220125(()=>{
        if (curr != null) {
            const x = curr[0];
            const st = curr[1];
            return x;
        } else return $c4c313718bcc393b$export$fe7fea637c109b1();
    }, ()=>{
        curr = f(acc);
        if (curr != null) {
            const x_1 = curr[0];
            const st_1 = curr[1];
            acc = st_1;
            return true;
        } else return false;
    }, ()=>{
    });
}
function $c4c313718bcc393b$export$6362f022d562392() {
    throw new Error($c4c313718bcc393b$export$bc2c3bc917b1d953);
}
function $c4c313718bcc393b$export$14d5e08ade3f14c2(argName, arg) {
    if (arg == null) $586af16ba21f6539$export$49fc45e4e62e7426(argName);
}
function $c4c313718bcc393b$export$327d67905f90fa80(f) {
    return $c4c313718bcc393b$export$9de9c521f6c9f38f(f);
}
function $c4c313718bcc393b$export$c80b5fc7454ef206(xs) {
    $c4c313718bcc393b$export$14d5e08ade3f14c2("source", xs);
    return $ed39e963967a3eea$export$a41738691dcd8bea(xs);
}
function $c4c313718bcc393b$export$1391212d75b2ee65(generator) {
    return $c4c313718bcc393b$export$327d67905f90fa80(()=>$ed39e963967a3eea$export$a41738691dcd8bea(generator())
    );
}
function $c4c313718bcc393b$export$ee1b3e54f0441b22(sources) {
    return $c4c313718bcc393b$export$327d67905f90fa80(()=>$c4c313718bcc393b$export$20426c14ee45c85e(sources)
    );
}
function $c4c313718bcc393b$export$c48e357c1a89b78d(generator, state) {
    return $c4c313718bcc393b$export$327d67905f90fa80(()=>$c4c313718bcc393b$export$f054447c84a06e65(generator, state)
    );
}
function $c4c313718bcc393b$export$6e22c362a0406a2c() {
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>new Array(0)
    );
}
function $c4c313718bcc393b$export$439306a4dcaafbb9(x) {
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>$5a541a3f8220d610$export$439306a4dcaafbb9(x)
    );
}
function $c4c313718bcc393b$export$cb197a913f6bb809(arr) {
    return arr;
}
function $c4c313718bcc393b$export$45b10814cc054894(xs) {
    if (xs instanceof $c5730ae5119245ea$export$46fa32c6f8b2f86) return $c5730ae5119245ea$export$45b10814cc054894(xs);
    else return Array.from(xs);
}
function $c4c313718bcc393b$export$97ef4da51e4fceb3(xs) {
    return xs;
}
function $c4c313718bcc393b$export$effcdbd76139450(xs) {
    if ($ed39e963967a3eea$export$1e2f57719e155213(xs)) return $c5730ae5119245ea$export$cb197a913f6bb809(xs);
    else if (xs instanceof $c5730ae5119245ea$export$46fa32c6f8b2f86) return xs;
    else return $c5730ae5119245ea$export$c80b5fc7454ef206(xs);
}
function $c4c313718bcc393b$export$80d376111cc09ad7(create, compute, dispose) {
    return $c4c313718bcc393b$export$327d67905f90fa80(()=>$c4c313718bcc393b$export$d82b80f0dbfe256d(create, compute, dispose)
    );
}
function $c4c313718bcc393b$export$7395da449cea18d1(create, compute, dispose) {
    return $c4c313718bcc393b$export$327d67905f90fa80(()=>{
        let i = -1;
        return $c4c313718bcc393b$export$d82b80f0dbfe256d(create, (x)=>{
            i = i + 1 | 0;
            return compute(i, x);
        }, dispose);
    });
}
function $c4c313718bcc393b$export$10d8903dec122b9d(xs, ys) {
    return $c4c313718bcc393b$export$ee1b3e54f0441b22([
        xs,
        ys
    ]);
}
function $c4c313718bcc393b$export$f2db7d5238e1d23f(xs) {
    return $c4c313718bcc393b$export$327d67905f90fa80(()=>{
        $c4c313718bcc393b$export$14d5e08ade3f14c2("source", xs);
        return $c4c313718bcc393b$export$ebf0eca22469dbbc($ed39e963967a3eea$export$a41738691dcd8bea(xs));
    });
}
function $c4c313718bcc393b$export$7877a478dd30fd3d(chooser, xs) {
    return $c4c313718bcc393b$export$80d376111cc09ad7(()=>$c4c313718bcc393b$export$c80b5fc7454ef206(xs)
    , (e)=>{
        let curr = void 0;
        while(curr == null && e["System.Collections.IEnumerator.MoveNext"]())curr = chooser(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
        return curr;
    }, (e_1)=>{
        e_1.Dispose();
    });
}
function $c4c313718bcc393b$export$ecb3797c03e8ce0c(comparer, xs, ys) {
    const e1 = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
    try {
        const e2 = $c4c313718bcc393b$export$c80b5fc7454ef206(ys);
        try {
            let c = 0;
            let b1 = e1["System.Collections.IEnumerator.MoveNext"]();
            let b2 = e2["System.Collections.IEnumerator.MoveNext"]();
            while(c === 0 && b1 && b2){
                c = comparer(e1["System.Collections.Generic.IEnumerator`1.get_Current"](), e2["System.Collections.Generic.IEnumerator`1.get_Current"]()) | 0;
                if (c === 0) {
                    b1 = e1["System.Collections.IEnumerator.MoveNext"]();
                    b2 = e2["System.Collections.IEnumerator.MoveNext"]();
                }
            }
            return (c !== 0 ? c : b1 ? 1 : b2 ? -1 : 0) | 0;
        } finally{
            e2.Dispose();
        }
    } finally{
        e1.Dispose();
    }
}
function $c4c313718bcc393b$export$2344b14b097df817(value, xs, comparer) {
    const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
    try {
        let found = false;
        while(!found && e["System.Collections.IEnumerator.MoveNext"]())found = comparer.Equals(value, e["System.Collections.Generic.IEnumerator`1.get_Current"]());
        return found;
    } finally{
        e.Dispose();
    }
}
function $c4c313718bcc393b$export$861f8efb7480e521(create, moveNext, current) {
    return $c4c313718bcc393b$export$80d376111cc09ad7(create, (x)=>moveNext(x) ? $7e4c281993e75c03$export$ad14ef4001db2bcd(current(x)) : void 0
    , (x_1)=>{
        const matchValue = x_1;
        if ($ed39e963967a3eea$export$e29d65b7eabdc6dd(matchValue)) matchValue.Dispose();
    });
}
function $c4c313718bcc393b$export$a961e324f78542f0(source, compensation) {
    const compensation_1 = compensation;
    return $c4c313718bcc393b$export$327d67905f90fa80(()=>{
        try {
            return $c4c313718bcc393b$export$8da5aab8659eb06(compensation_1, $c4c313718bcc393b$export$c80b5fc7454ef206(source));
        } catch (matchValue) {
            compensation_1();
            throw matchValue;
        }
    });
}
function $c4c313718bcc393b$export$19377b1e8666bd96(resource, source) {
    const compensation = ()=>{
        if ($ed39e963967a3eea$export$e9bab7fafb253603(resource, null)) ;
        else {
            let copyOfStruct = resource;
            copyOfStruct.Dispose();
        }
    };
    return $c4c313718bcc393b$export$327d67905f90fa80(()=>{
        try {
            return $c4c313718bcc393b$export$8da5aab8659eb06(compensation, $c4c313718bcc393b$export$c80b5fc7454ef206(source(resource)));
        } catch (matchValue_1) {
            compensation();
            throw matchValue_1;
        }
    });
}
function $c4c313718bcc393b$export$d6ea9ba8df458a3e(guard, xs) {
    return $c4c313718bcc393b$export$ee1b3e54f0441b22($c4c313718bcc393b$export$c48e357c1a89b78d((i)=>guard() ? [
            xs,
            i + 1
        ] : void 0
    , 0));
}
function $c4c313718bcc393b$export$3dea766d36a8935f(f, xs) {
    return $c4c313718bcc393b$export$7877a478dd30fd3d((x)=>{
        if (f(x)) return $7e4c281993e75c03$export$ad14ef4001db2bcd(x);
        else return void 0;
    }, xs);
}
function $c4c313718bcc393b$export$f7e9f41ea797a17(predicate, xs) {
    const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
    try {
        let found = false;
        while(!found && e["System.Collections.IEnumerator.MoveNext"]())found = predicate(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
        return found;
    } finally{
        e.Dispose();
    }
}
function $c4c313718bcc393b$export$d04ae74aaa2c0655(predicate, xs, ys) {
    const e1 = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
    try {
        const e2 = $c4c313718bcc393b$export$c80b5fc7454ef206(ys);
        try {
            let found = false;
            while(!found && e1["System.Collections.IEnumerator.MoveNext"]() && e2["System.Collections.IEnumerator.MoveNext"]())found = predicate(e1["System.Collections.Generic.IEnumerator`1.get_Current"](), e2["System.Collections.Generic.IEnumerator`1.get_Current"]());
            return found;
        } finally{
            e2.Dispose();
        }
    } finally{
        e1.Dispose();
    }
}
function $c4c313718bcc393b$export$3367fc0da2c111f0(xs) {
    const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
    try {
        if (e["System.Collections.IEnumerator.MoveNext"]()) {
            const v = e["System.Collections.Generic.IEnumerator`1.get_Current"]();
            if (e["System.Collections.IEnumerator.MoveNext"]()) throw new Error($c4c313718bcc393b$export$8f2c469045724186 + "\\nParameter name: " + "source");
            else return v;
        } else throw new Error($c4c313718bcc393b$export$bb8ebba5bfe3f17a + "\\nParameter name: " + "source");
    } finally{
        e.Dispose();
    }
}
function $c4c313718bcc393b$export$22f0cfb94dab14ba(xs) {
    const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
    try {
        if (e["System.Collections.IEnumerator.MoveNext"]()) {
            const v = e["System.Collections.Generic.IEnumerator`1.get_Current"]();
            return e["System.Collections.IEnumerator.MoveNext"]() ? void 0 : $7e4c281993e75c03$export$ad14ef4001db2bcd(v);
        } else return void 0;
    } finally{
        e.Dispose();
    }
}
function $c4c313718bcc393b$export$d65cb303b863e3bf(predicate, xs) {
    const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
    try {
        let res = void 0;
        while(res == null && e["System.Collections.IEnumerator.MoveNext"]()){
            const c = e["System.Collections.Generic.IEnumerator`1.get_Current"]();
            if (predicate(c)) res = $7e4c281993e75c03$export$ad14ef4001db2bcd(c);
        }
        return res;
    } finally{
        e.Dispose();
    }
}
function $c4c313718bcc393b$export$71aa6c912b956294(predicate, xs) {
    const matchValue = $c4c313718bcc393b$export$d65cb303b863e3bf(predicate, xs);
    if (matchValue == null) return $c4c313718bcc393b$export$6362f022d562392();
    else return $7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue);
}
function $c4c313718bcc393b$export$36425195e236bb0f(predicate, xs) {
    return $5a541a3f8220d610$export$36425195e236bb0f(predicate, $c4c313718bcc393b$export$45b10814cc054894(xs));
}
function $c4c313718bcc393b$export$ec18defb06d12add(predicate, xs) {
    const matchValue = $c4c313718bcc393b$export$36425195e236bb0f(predicate, xs);
    if (matchValue == null) return $c4c313718bcc393b$export$6362f022d562392();
    else return $7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue);
}
function $c4c313718bcc393b$export$5c13475397a61429(predicate, xs) {
    const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
    try {
        const loop = (i_mut)=>{
            loop: while(true){
                const i = i_mut;
                if (e["System.Collections.IEnumerator.MoveNext"]()) {
                    if (predicate(e["System.Collections.Generic.IEnumerator`1.get_Current"]())) return i;
                    else {
                        i_mut = i + 1;
                        continue loop;
                    }
                } else return void 0;
                break;
            }
        };
        return loop(0);
    } finally{
        e.Dispose();
    }
}
function $c4c313718bcc393b$export$de3a4d4a0d731119(predicate, xs) {
    const matchValue = $c4c313718bcc393b$export$5c13475397a61429(predicate, xs);
    if (matchValue == null) return $c4c313718bcc393b$export$6362f022d562392() | 0;
    else return matchValue | 0;
}
function $c4c313718bcc393b$export$e1cc954945760117(predicate, xs) {
    return $5a541a3f8220d610$export$e1cc954945760117(predicate, $c4c313718bcc393b$export$45b10814cc054894(xs));
}
function $c4c313718bcc393b$export$78e19deb30f83296(predicate, xs) {
    const matchValue = $c4c313718bcc393b$export$e1cc954945760117(predicate, xs);
    if (matchValue == null) return $c4c313718bcc393b$export$6362f022d562392() | 0;
    else return matchValue | 0;
}
function $c4c313718bcc393b$export$93e2b83da34ff82a(folder, state, xs) {
    const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
    try {
        let acc = state;
        while(e["System.Collections.IEnumerator.MoveNext"]())acc = folder(acc, e["System.Collections.Generic.IEnumerator`1.get_Current"]());
        return acc;
    } finally{
        e.Dispose();
    }
}
function $c4c313718bcc393b$export$c38b8353041a4f48(folder, xs, state) {
    return $5a541a3f8220d610$export$c38b8353041a4f48(folder, $c4c313718bcc393b$export$45b10814cc054894(xs), state);
}
function $c4c313718bcc393b$export$6eef545db8c1f6e(folder, state, xs, ys) {
    const e1 = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
    try {
        const e2 = $c4c313718bcc393b$export$c80b5fc7454ef206(ys);
        try {
            let acc = state;
            while(e1["System.Collections.IEnumerator.MoveNext"]() && e2["System.Collections.IEnumerator.MoveNext"]())acc = folder(acc, e1["System.Collections.Generic.IEnumerator`1.get_Current"](), e2["System.Collections.Generic.IEnumerator`1.get_Current"]());
            return acc;
        } finally{
            e2.Dispose();
        }
    } finally{
        e1.Dispose();
    }
}
function $c4c313718bcc393b$export$f04d6919de1a1f94(folder, xs, ys, state) {
    return $5a541a3f8220d610$export$f04d6919de1a1f94(folder, $c4c313718bcc393b$export$45b10814cc054894(xs), $c4c313718bcc393b$export$45b10814cc054894(ys), state);
}
function $c4c313718bcc393b$export$e5bd981f5eeebe3b(predicate, xs) {
    return !$c4c313718bcc393b$export$f7e9f41ea797a17((x)=>!predicate(x)
    , xs);
}
function $c4c313718bcc393b$export$a85e1ff32f9fff6e(predicate, xs, ys) {
    return !$c4c313718bcc393b$export$d04ae74aaa2c0655((x, y)=>!predicate(x, y)
    , xs, ys);
}
function $c4c313718bcc393b$export$1acbe849d0cb723e(xs) {
    if ($ed39e963967a3eea$export$1e2f57719e155213(xs)) return $5a541a3f8220d610$export$1acbe849d0cb723e(xs);
    else if (xs instanceof $c5730ae5119245ea$export$46fa32c6f8b2f86) return $c5730ae5119245ea$export$1acbe849d0cb723e(xs);
    else {
        const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
        try {
            return e["System.Collections.IEnumerator.MoveNext"]() ? $7e4c281993e75c03$export$ad14ef4001db2bcd(e["System.Collections.Generic.IEnumerator`1.get_Current"]()) : void 0;
        } finally{
            e.Dispose();
        }
    }
}
function $c4c313718bcc393b$export$5fd5031fecdacec3(xs) {
    const matchValue = $c4c313718bcc393b$export$1acbe849d0cb723e(xs);
    if (matchValue == null) throw new Error($c4c313718bcc393b$export$bb8ebba5bfe3f17a + "\\nParameter name: " + "source");
    else return $7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue);
}
function $c4c313718bcc393b$export$2a47f398eeff8b01(count, f) {
    return $c4c313718bcc393b$export$c48e357c1a89b78d((i)=>i < count ? [
            f(i),
            i + 1
        ] : void 0
    , 0);
}
function $c4c313718bcc393b$export$eac530aded73d64c(f) {
    return $c4c313718bcc393b$export$2a47f398eeff8b01(2147483647, f);
}
function $c4c313718bcc393b$export$dd1bc94b04021eeb(xs) {
    if ($ed39e963967a3eea$export$1e2f57719e155213(xs)) return xs.length === 0;
    else if (xs instanceof $c5730ae5119245ea$export$46fa32c6f8b2f86) return $c5730ae5119245ea$export$dd1bc94b04021eeb(xs);
    else {
        const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
        try {
            return !e["System.Collections.IEnumerator.MoveNext"]();
        } finally{
            e.Dispose();
        }
    }
}
function $c4c313718bcc393b$export$3fe40c3a4d8cb094(index, xs) {
    if ($ed39e963967a3eea$export$1e2f57719e155213(xs)) return $5a541a3f8220d610$export$3fe40c3a4d8cb094(index, xs);
    else if (xs instanceof $c5730ae5119245ea$export$46fa32c6f8b2f86) return $c5730ae5119245ea$export$3fe40c3a4d8cb094(index, xs);
    else {
        const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
        try {
            const loop = (index_1_mut)=>{
                loop: while(true){
                    const index_1 = index_1_mut;
                    if (!e["System.Collections.IEnumerator.MoveNext"]()) return void 0;
                    else if (index_1 === 0) return $7e4c281993e75c03$export$ad14ef4001db2bcd(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
                    else {
                        index_1_mut = index_1 - 1;
                        continue loop;
                    }
                    break;
                }
            };
            return loop(index);
        } finally{
            e.Dispose();
        }
    }
}
function $c4c313718bcc393b$export$7061c75fc5af8b7e(index, xs) {
    const matchValue = $c4c313718bcc393b$export$3fe40c3a4d8cb094(index, xs);
    if (matchValue == null) throw new Error($c4c313718bcc393b$export$9f17aeddfa374276 + "\\nParameter name: " + "index");
    else return $7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue);
}
function $c4c313718bcc393b$export$c1a059043cc9c119(action, xs) {
    $c4c313718bcc393b$export$93e2b83da34ff82a((unitVar0, x)=>{
        action(x);
    }, void 0, xs);
}
function $c4c313718bcc393b$export$d1731a37ee7d4fbb(action, xs, ys) {
    $c4c313718bcc393b$export$6eef545db8c1f6e((unitVar0, x, y)=>{
        action(x, y);
    }, void 0, xs, ys);
}
function $c4c313718bcc393b$export$5a067165821eae2d(action, xs) {
    $c4c313718bcc393b$export$93e2b83da34ff82a((i, x)=>{
        action(i, x);
        return i + 1 | 0;
    }, 0, xs);
}
function $c4c313718bcc393b$export$ab3c1f9aeb4948fd(action, xs, ys) {
    $c4c313718bcc393b$export$6eef545db8c1f6e((i, x, y)=>{
        action(i, x, y);
        return i + 1 | 0;
    }, 0, xs, ys);
}
function $c4c313718bcc393b$export$e5907b21d797cce6(xs) {
    const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
    try {
        const loop = (acc_mut)=>{
            loop: while(true){
                const acc = acc_mut;
                if (!e["System.Collections.IEnumerator.MoveNext"]()) return acc;
                else {
                    acc_mut = e["System.Collections.Generic.IEnumerator`1.get_Current"]();
                    continue loop;
                }
                break;
            }
        };
        return e["System.Collections.IEnumerator.MoveNext"]() ? $7e4c281993e75c03$export$ad14ef4001db2bcd(loop(e["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0;
    } finally{
        e.Dispose();
    }
}
function $c4c313718bcc393b$export$4c7897fafd92b108(xs) {
    const matchValue = $c4c313718bcc393b$export$e5907b21d797cce6(xs);
    if (matchValue == null) throw new Error($c4c313718bcc393b$export$9f17aeddfa374276 + "\\nParameter name: " + "source");
    else return $7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue);
}
function $c4c313718bcc393b$export$f24224f1c91d8156(xs) {
    if ($ed39e963967a3eea$export$1e2f57719e155213(xs)) return xs.length | 0;
    else if (xs instanceof $c5730ae5119245ea$export$46fa32c6f8b2f86) return $c5730ae5119245ea$export$f24224f1c91d8156(xs) | 0;
    else {
        const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
        try {
            let count = 0;
            while(e["System.Collections.IEnumerator.MoveNext"]())count = count + 1 | 0;
            return count | 0;
        } finally{
            e.Dispose();
        }
    }
}
function $c4c313718bcc393b$export$871de8747c9eaa88(mapping, xs) {
    return $c4c313718bcc393b$export$80d376111cc09ad7(()=>$c4c313718bcc393b$export$c80b5fc7454ef206(xs)
    , (e)=>e["System.Collections.IEnumerator.MoveNext"]() ? $7e4c281993e75c03$export$ad14ef4001db2bcd(mapping(e["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0
    , (e_1)=>{
        e_1.Dispose();
    });
}
function $c4c313718bcc393b$export$e5bd5b3b105c2a71(mapping, xs) {
    return $c4c313718bcc393b$export$7395da449cea18d1(()=>$c4c313718bcc393b$export$c80b5fc7454ef206(xs)
    , (i, e)=>e["System.Collections.IEnumerator.MoveNext"]() ? $7e4c281993e75c03$export$ad14ef4001db2bcd(mapping(i, e["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0
    , (e_1)=>{
        e_1.Dispose();
    });
}
function $c4c313718bcc393b$export$ddf7c77acd0bf516(xs) {
    return $c4c313718bcc393b$export$e5bd5b3b105c2a71((i, x)=>[
            i,
            x
        ]
    , xs);
}
function $c4c313718bcc393b$export$5be556bf484c4f10(mapping, xs, ys) {
    return $c4c313718bcc393b$export$80d376111cc09ad7(()=>[
            $c4c313718bcc393b$export$c80b5fc7454ef206(xs),
            $c4c313718bcc393b$export$c80b5fc7454ef206(ys)
        ]
    , (tupledArg)=>{
        const e1 = tupledArg[0];
        const e2 = tupledArg[1];
        return e1["System.Collections.IEnumerator.MoveNext"]() && e2["System.Collections.IEnumerator.MoveNext"]() ? $7e4c281993e75c03$export$ad14ef4001db2bcd(mapping(e1["System.Collections.Generic.IEnumerator`1.get_Current"](), e2["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0;
    }, (tupledArg_1)=>{
        try {
            tupledArg_1[0].Dispose();
        } finally{
            tupledArg_1[1].Dispose();
        }
    });
}
function $c4c313718bcc393b$export$aded800c294daba4(mapping, xs, ys) {
    return $c4c313718bcc393b$export$7395da449cea18d1(()=>[
            $c4c313718bcc393b$export$c80b5fc7454ef206(xs),
            $c4c313718bcc393b$export$c80b5fc7454ef206(ys)
        ]
    , (i, tupledArg)=>{
        const e1 = tupledArg[0];
        const e2 = tupledArg[1];
        return e1["System.Collections.IEnumerator.MoveNext"]() && e2["System.Collections.IEnumerator.MoveNext"]() ? $7e4c281993e75c03$export$ad14ef4001db2bcd(mapping(i, e1["System.Collections.Generic.IEnumerator`1.get_Current"](), e2["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0;
    }, (tupledArg_1)=>{
        try {
            tupledArg_1[0].Dispose();
        } finally{
            tupledArg_1[1].Dispose();
        }
    });
}
function $c4c313718bcc393b$export$f7389512af34c855(mapping, xs, ys, zs) {
    return $c4c313718bcc393b$export$80d376111cc09ad7(()=>[
            $c4c313718bcc393b$export$c80b5fc7454ef206(xs),
            $c4c313718bcc393b$export$c80b5fc7454ef206(ys),
            $c4c313718bcc393b$export$c80b5fc7454ef206(zs)
        ]
    , (tupledArg)=>{
        const e1 = tupledArg[0];
        const e2 = tupledArg[1];
        const e3 = tupledArg[2];
        return e1["System.Collections.IEnumerator.MoveNext"]() && e2["System.Collections.IEnumerator.MoveNext"]() && e3["System.Collections.IEnumerator.MoveNext"]() ? $7e4c281993e75c03$export$ad14ef4001db2bcd(mapping(e1["System.Collections.Generic.IEnumerator`1.get_Current"](), e2["System.Collections.Generic.IEnumerator`1.get_Current"](), e3["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0;
    }, (tupledArg_1)=>{
        try {
            tupledArg_1[0].Dispose();
        } finally{
            try {
                tupledArg_1[1].Dispose();
            } finally{
                tupledArg_1[2].Dispose();
            }
        }
    });
}
function $c4c313718bcc393b$export$b2cbc93d4da94977(xs) {
    $c4c313718bcc393b$export$14d5e08ade3f14c2("source", xs);
    return $c4c313718bcc393b$export$871de8747c9eaa88((x)=>x
    , xs);
}
class $c4c313718bcc393b$export$52178a8464ab8b5 {
    constructor(cleanup, res){
        this.cleanup = cleanup;
        this.res = res;
    }
    Dispose() {
        const _ = this;
        _.cleanup();
    }
    GetEnumerator() {
        const _ = this;
        return $ed39e963967a3eea$export$a41738691dcd8bea(_.res);
    }
    [Symbol.iterator]() {
        return $ed39e963967a3eea$export$21e0669b7bd01bb4(this.GetEnumerator());
    }
    ["System.Collections.IEnumerable.GetEnumerator"]() {
        const _ = this;
        return $ed39e963967a3eea$export$a41738691dcd8bea(_.res);
    }
}
function $c4c313718bcc393b$export$9ceff0ca41e4c11a(gen0) {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("SeqModule.CachedSeq`1", [
        gen0
    ], $c4c313718bcc393b$export$52178a8464ab8b5);
}
function $c4c313718bcc393b$export$3e405a892b2f2a5a(cleanup, res) {
    return new $c4c313718bcc393b$export$52178a8464ab8b5(cleanup, res);
}
function $c4c313718bcc393b$export$d9518c87d556a0bb(_) {
    _.cleanup();
}
function $c4c313718bcc393b$export$69a3209f1a06c04d(source) {
    $c4c313718bcc393b$export$14d5e08ade3f14c2("source", source);
    const prefix = [];
    let enumeratorR = void 0;
    return $c4c313718bcc393b$export$3e405a892b2f2a5a(()=>{
        $ed39e963967a3eea$export$42ffd38884aecdac(prefix);
        let pattern_matching_result, e;
        if (enumeratorR != null) {
            if ($7e4c281993e75c03$export$2ab9a8f9f1186f14(enumeratorR) != null) {
                pattern_matching_result = 0;
                e = $7e4c281993e75c03$export$2ab9a8f9f1186f14(enumeratorR);
            } else pattern_matching_result = 1;
        } else pattern_matching_result = 1;
        switch(pattern_matching_result){
            case 0:
                e.Dispose();
                break;
        }
        enumeratorR = void 0;
    }, $c4c313718bcc393b$export$c48e357c1a89b78d((i_1)=>{
        if (i_1 < prefix.length) return [
            prefix[i_1],
            i_1 + 1
        ];
        else {
            if (i_1 >= prefix.length) {
                let optEnumerator_2;
                if (enumeratorR != null) optEnumerator_2 = $7e4c281993e75c03$export$2ab9a8f9f1186f14(enumeratorR);
                else {
                    const optEnumerator = $ed39e963967a3eea$export$a41738691dcd8bea(source);
                    enumeratorR = $7e4c281993e75c03$export$ad14ef4001db2bcd(optEnumerator);
                    optEnumerator_2 = optEnumerator;
                }
                if (optEnumerator_2 == null) ;
                else {
                    const enumerator = optEnumerator_2;
                    if (enumerator["System.Collections.IEnumerator.MoveNext"]()) prefix.push(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]());
                    else {
                        enumerator.Dispose();
                        enumeratorR = $7e4c281993e75c03$export$ad14ef4001db2bcd(void 0);
                    }
                }
            }
            return i_1 < prefix.length ? [
                prefix[i_1],
                i_1 + 1
            ] : void 0;
        }
    }, 0));
}
function $c4c313718bcc393b$export$8016484fb8238078(xs, ys) {
    const ysCache = $c4c313718bcc393b$export$69a3209f1a06c04d(ys);
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>$c4c313718bcc393b$export$ee1b3e54f0441b22($c4c313718bcc393b$export$871de8747c9eaa88((x)=>$c4c313718bcc393b$export$871de8747c9eaa88((y)=>[
                    x,
                    y
                ]
            , ysCache)
        , xs))
    );
}
function $c4c313718bcc393b$export$9b19c2e3f2aab20f(mapping, state, xs) {
    const patternInput = $5a541a3f8220d610$export$9b19c2e3f2aab20f(mapping, state, $c4c313718bcc393b$export$45b10814cc054894(xs));
    return [
        $c4c313718bcc393b$export$b2cbc93d4da94977(patternInput[0]),
        patternInput[1]
    ];
}
function $c4c313718bcc393b$export$6d7c6abab27be307(mapping, xs, state) {
    const patternInput = $5a541a3f8220d610$export$6d7c6abab27be307(mapping, $c4c313718bcc393b$export$45b10814cc054894(xs), state);
    return [
        $c4c313718bcc393b$export$b2cbc93d4da94977(patternInput[0]),
        patternInput[1]
    ];
}
function $c4c313718bcc393b$export$d944e5c60afb688e(chooser, xs) {
    const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
    try {
        let res = void 0;
        while(res == null && e["System.Collections.IEnumerator.MoveNext"]())res = chooser(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
        return res;
    } finally{
        e.Dispose();
    }
}
function $c4c313718bcc393b$export$357523c63a2253b9(chooser, xs) {
    const matchValue = $c4c313718bcc393b$export$d944e5c60afb688e(chooser, xs);
    if (matchValue == null) return $c4c313718bcc393b$export$6362f022d562392();
    else return $7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue);
}
function $c4c313718bcc393b$export$533b26079ad0b4b(folder, xs) {
    const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
    try {
        const loop = (acc_mut)=>{
            loop: while(true){
                const acc = acc_mut;
                if (e["System.Collections.IEnumerator.MoveNext"]()) {
                    acc_mut = folder(acc, e["System.Collections.Generic.IEnumerator`1.get_Current"]());
                    continue loop;
                } else return acc;
                break;
            }
        };
        if (e["System.Collections.IEnumerator.MoveNext"]()) return loop(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
        else throw new Error($c4c313718bcc393b$export$bb8ebba5bfe3f17a);
    } finally{
        e.Dispose();
    }
}
function $c4c313718bcc393b$export$90cf02207d4ef99b(folder, xs) {
    const arr = $c4c313718bcc393b$export$45b10814cc054894(xs);
    if (arr.length > 0) return arr.reduceRight(folder);
    else throw new Error($c4c313718bcc393b$export$bb8ebba5bfe3f17a);
}
function $c4c313718bcc393b$export$606959e7ccb797f0(n, x) {
    return $c4c313718bcc393b$export$2a47f398eeff8b01(n, (_arg1)=>x
    );
}
function $c4c313718bcc393b$export$66c1ae025e96b4bc(xs) {
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>$c4c313718bcc393b$export$cb197a913f6bb809($5a541a3f8220d610$export$66c1ae025e96b4bc($c4c313718bcc393b$export$45b10814cc054894(xs)))
    );
}
function $c4c313718bcc393b$export$c87d910e63d22ed6(folder, state, xs) {
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>{
        let acc = state;
        return $c4c313718bcc393b$export$ee1b3e54f0441b22([
            $c4c313718bcc393b$export$439306a4dcaafbb9(state),
            $c4c313718bcc393b$export$871de8747c9eaa88((x)=>{
                acc = folder(acc, x);
                return acc;
            }, xs)
        ]);
    });
}
function $c4c313718bcc393b$export$7bd1078b283d99ad(folder, xs, state) {
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>$c4c313718bcc393b$export$cb197a913f6bb809($5a541a3f8220d610$export$7bd1078b283d99ad(folder, $c4c313718bcc393b$export$45b10814cc054894(xs), state))
    );
}
function $c4c313718bcc393b$export$955fc4a6c4be454d(count, xs) {
    return $c4c313718bcc393b$export$327d67905f90fa80(()=>{
        const e = $c4c313718bcc393b$export$c80b5fc7454ef206(xs);
        try {
            for(let i = 1; i <= count; i++){
                if (!e["System.Collections.IEnumerator.MoveNext"]()) throw new Error($c4c313718bcc393b$export$9f17aeddfa374276 + "\\nParameter name: " + "source");
            }
            return $c4c313718bcc393b$export$8da5aab8659eb06(()=>{
            }, e);
        } catch (matchValue) {
            e.Dispose();
            throw matchValue;
        }
    });
}
function $c4c313718bcc393b$export$175dedd748069215(predicate, xs) {
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>{
        let skipped = true;
        return $c4c313718bcc393b$export$3dea766d36a8935f((x)=>{
            if (skipped) skipped = predicate(x);
            return !skipped;
        }, xs);
    });
}
function $c4c313718bcc393b$export$c01875f616615628(xs) {
    return $c4c313718bcc393b$export$955fc4a6c4be454d(1, xs);
}
function $c4c313718bcc393b$export$b7df5d561049483a(count, xs) {
    return $c4c313718bcc393b$export$7395da449cea18d1(()=>$c4c313718bcc393b$export$c80b5fc7454ef206(xs)
    , (i, e)=>{
        if (i < count) {
            if (e["System.Collections.IEnumerator.MoveNext"]()) return $7e4c281993e75c03$export$ad14ef4001db2bcd(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
            else throw new Error($c4c313718bcc393b$export$9f17aeddfa374276 + "\\nParameter name: " + "source");
        } else return void 0;
    }, (e_1)=>{
        e_1.Dispose();
    });
}
function $c4c313718bcc393b$export$9384c7afe4015e42(predicate, xs) {
    return $c4c313718bcc393b$export$80d376111cc09ad7(()=>$c4c313718bcc393b$export$c80b5fc7454ef206(xs)
    , (e)=>e["System.Collections.IEnumerator.MoveNext"]() && predicate(e["System.Collections.Generic.IEnumerator`1.get_Current"]()) ? $7e4c281993e75c03$export$ad14ef4001db2bcd(e["System.Collections.Generic.IEnumerator`1.get_Current"]()) : void 0
    , (e_1)=>{
        e_1.Dispose();
    });
}
function $c4c313718bcc393b$export$6a506b36fdea397d(count, xs) {
    return $c4c313718bcc393b$export$7395da449cea18d1(()=>$c4c313718bcc393b$export$c80b5fc7454ef206(xs)
    , (i, e)=>i < count && e["System.Collections.IEnumerator.MoveNext"]() ? $7e4c281993e75c03$export$ad14ef4001db2bcd(e["System.Collections.Generic.IEnumerator`1.get_Current"]()) : void 0
    , (e_1)=>{
        e_1.Dispose();
    });
}
function $c4c313718bcc393b$export$8901015135f2fb22(xs, ys) {
    return $c4c313718bcc393b$export$5be556bf484c4f10((x, y)=>[
            x,
            y
        ]
    , xs, ys);
}
function $c4c313718bcc393b$export$a3c629e5d025ffc1(xs, ys, zs) {
    return $c4c313718bcc393b$export$f7389512af34c855((x, y, z)=>[
            x,
            y,
            z
        ]
    , xs, ys, zs);
}
function $c4c313718bcc393b$export$bb44f104e3c54dae(mapping, xs) {
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>$c4c313718bcc393b$export$ee1b3e54f0441b22($c4c313718bcc393b$export$871de8747c9eaa88(mapping, xs))
    );
}
function $c4c313718bcc393b$export$9c59b80dda569a6e(predicate, xs) {
    return $c4c313718bcc393b$export$3dea766d36a8935f(predicate, xs);
}
function $c4c313718bcc393b$export$8f9d79d42bff1aac(xs) {
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>$c4c313718bcc393b$export$cb197a913f6bb809($5a541a3f8220d610$export$8f9d79d42bff1aac($c4c313718bcc393b$export$45b10814cc054894(xs)))
    );
}
function $c4c313718bcc393b$export$7120a88bf3d39e8(chunks, xs) {
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>$c4c313718bcc393b$export$cb197a913f6bb809($5a541a3f8220d610$export$871de8747c9eaa88((arr)=>$c4c313718bcc393b$export$cb197a913f6bb809(arr)
        , $5a541a3f8220d610$export$7120a88bf3d39e8(chunks, $c4c313718bcc393b$export$45b10814cc054894(xs))))
    );
}
function $c4c313718bcc393b$export$5f2b86065ccf5a1(windowSize, xs) {
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>$c4c313718bcc393b$export$cb197a913f6bb809($5a541a3f8220d610$export$871de8747c9eaa88((arr)=>$c4c313718bcc393b$export$cb197a913f6bb809(arr)
        , $5a541a3f8220d610$export$5f2b86065ccf5a1(windowSize, $c4c313718bcc393b$export$45b10814cc054894(xs))))
    );
}
function $c4c313718bcc393b$export$9cb09a71b7d66923(xss) {
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>$c4c313718bcc393b$export$cb197a913f6bb809($5a541a3f8220d610$export$871de8747c9eaa88((arr)=>$c4c313718bcc393b$export$cb197a913f6bb809(arr)
        , $5a541a3f8220d610$export$9cb09a71b7d66923($5a541a3f8220d610$export$871de8747c9eaa88((xs_1)=>$c4c313718bcc393b$export$45b10814cc054894(xs_1)
        , $c4c313718bcc393b$export$45b10814cc054894(xss)))))
    );
}
function $c4c313718bcc393b$export$a9e7d1a6fdcfefde(comparer, xs) {
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>{
        const arr = $c4c313718bcc393b$export$45b10814cc054894(xs);
        arr.sort(comparer);
        return $c4c313718bcc393b$export$cb197a913f6bb809(arr);
    });
}
function $c4c313718bcc393b$export$97db5808d8f88186(xs, comparer) {
    return $c4c313718bcc393b$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(x, y)
    , xs);
}
function $c4c313718bcc393b$export$b035e44d7bb4278f(projection, xs, comparer) {
    return $c4c313718bcc393b$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(projection(x), projection(y))
    , xs);
}
function $c4c313718bcc393b$export$9a59fdf05ed66d15(xs, comparer) {
    return $c4c313718bcc393b$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(x, y) * -1
    , xs);
}
function $c4c313718bcc393b$export$ca6dab212df382f6(projection, xs, comparer) {
    return $c4c313718bcc393b$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(projection(x), projection(y)) * -1
    , xs);
}
function $c4c313718bcc393b$export$8a63f25cc62965f1(xs, adder) {
    return $c4c313718bcc393b$export$93e2b83da34ff82a((acc, x)=>adder.Add(acc, x)
    , adder.GetZero(), xs);
}
function $c4c313718bcc393b$export$9e8299ab977385a3(f, xs, adder) {
    return $c4c313718bcc393b$export$93e2b83da34ff82a((acc, x)=>adder.Add(acc, f(x))
    , adder.GetZero(), xs);
}
function $c4c313718bcc393b$export$ad1963a493908da4(projection, xs, comparer) {
    return $c4c313718bcc393b$export$533b26079ad0b4b((x, y)=>comparer.Compare(projection(y), projection(x)) > 0 ? y : x
    , xs);
}
function $c4c313718bcc393b$export$8960430cfd85939f(xs, comparer) {
    return $c4c313718bcc393b$export$533b26079ad0b4b((x, y)=>comparer.Compare(y, x) > 0 ? y : x
    , xs);
}
function $c4c313718bcc393b$export$8c826aa0fa59ac68(projection, xs, comparer) {
    return $c4c313718bcc393b$export$533b26079ad0b4b((x, y)=>comparer.Compare(projection(y), projection(x)) > 0 ? x : y
    , xs);
}
function $c4c313718bcc393b$export$96ec731ed4dcb222(xs, comparer) {
    return $c4c313718bcc393b$export$533b26079ad0b4b((x, y)=>comparer.Compare(y, x) > 0 ? x : y
    , xs);
}
function $c4c313718bcc393b$export$cc6710ee5f037d57(xs, averager) {
    let count = 0;
    const total = $c4c313718bcc393b$export$93e2b83da34ff82a((acc, x)=>{
        count = count + 1 | 0;
        return averager.Add(acc, x);
    }, averager.GetZero(), xs);
    if (count === 0) throw new Error($c4c313718bcc393b$export$bb8ebba5bfe3f17a + "\\nParameter name: " + "source");
    else return averager.DivideByInt(total, count);
}
function $c4c313718bcc393b$export$9077387bc3582185(f, xs, averager) {
    let count = 0;
    const total = $c4c313718bcc393b$export$93e2b83da34ff82a((acc, x)=>{
        count = count + 1 | 0;
        return averager.Add(acc, f(x));
    }, averager.GetZero(), xs);
    if (count === 0) throw new Error($c4c313718bcc393b$export$bb8ebba5bfe3f17a + "\\nParameter name: " + "source");
    else return averager.DivideByInt(total, count);
}
function $c4c313718bcc393b$export$95e62ad65da8b7d2(f, xs) {
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>$c4c313718bcc393b$export$cb197a913f6bb809($5a541a3f8220d610$export$95e62ad65da8b7d2(f, $c4c313718bcc393b$export$45b10814cc054894(xs)))
    );
}
function $c4c313718bcc393b$export$6302d00ba2848bf(chunkSize, xs) {
    return $c4c313718bcc393b$export$1391212d75b2ee65(()=>$c4c313718bcc393b$export$cb197a913f6bb809($5a541a3f8220d610$export$871de8747c9eaa88((arr)=>$c4c313718bcc393b$export$cb197a913f6bb809(arr)
        , $5a541a3f8220d610$export$6302d00ba2848bf(chunkSize, $c4c313718bcc393b$export$45b10814cc054894(xs))))
    );
}





class $3583e200a8ea3134$export$bd5b6bfc5fa2ee61 extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "Functor"
        ];
    }
}
function $3583e200a8ea3134$export$682f9183770380ae() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Prelude.Functor", [], $3583e200a8ea3134$export$bd5b6bfc5fa2ee61, ()=>[
            []
        ]
    );
}
class $3583e200a8ea3134$export$fd0fe42029639505 extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "Bifunctor"
        ];
    }
}
function $3583e200a8ea3134$export$d698539a2a89b125() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Prelude.Bifunctor", [], $3583e200a8ea3134$export$fd0fe42029639505, ()=>[
            []
        ]
    );
}
class $3583e200a8ea3134$export$25ba4469a069167 extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "Alt"
        ];
    }
}
function $3583e200a8ea3134$export$d253e42e1c6aef82() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Prelude.Alt", [], $3583e200a8ea3134$export$25ba4469a069167, ()=>[
            []
        ]
    );
}
class $3583e200a8ea3134$export$98af59ef663f7095 extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "HasDefault"
        ];
    }
}
function $3583e200a8ea3134$export$f2f0cede92b75aea() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Prelude.HasDefault", [], $3583e200a8ea3134$export$98af59ef663f7095, ()=>[
            []
        ]
    );
}
class $3583e200a8ea3134$export$a79837a2b764b73d extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "HasSize"
        ];
    }
}
function $3583e200a8ea3134$export$e1ce192203823c76() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Prelude.HasSize", [], $3583e200a8ea3134$export$a79837a2b764b73d, ()=>[
            []
        ]
    );
}
class $3583e200a8ea3134$export$d5a6d2063011a4a0 extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "Nonempty"
        ];
    }
    GetEnumerator() {
        const self = this;
        return $ed39e963967a3eea$export$a41738691dcd8bea($c4c313718bcc393b$export$97ef4da51e4fceb3($c5730ae5119245ea$export$8327ebbef2a0ba76(self.fields[0], self.fields[1])));
    }
    [Symbol.iterator]() {
        return $ed39e963967a3eea$export$21e0669b7bd01bb4(this.GetEnumerator());
    }
    ["System.Collections.IEnumerable.GetEnumerator"]() {
        const r = this;
        return $ed39e963967a3eea$export$a41738691dcd8bea(r);
    }
}
function $3583e200a8ea3134$export$4984d4827624d577(gen0) {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Prelude.Nonempty`1", [
        gen0
    ], $3583e200a8ea3134$export$d5a6d2063011a4a0, ()=>[
            [
                [
                    "Item1",
                    gen0
                ],
                [
                    "Item2",
                    $7d684f9c58c88b9e$export$5fe717259b8d6105(gen0)
                ]
            ]
        ]
    );
}
function $3583e200a8ea3134$export$587352910a580561(_arg1, _arg2) {
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], $c5730ae5119245ea$export$10d8903dec122b9d(_arg1.fields[1], $c5730ae5119245ea$export$8327ebbef2a0ba76(_arg2.fields[0], _arg2.fields[1])));
}
function $3583e200a8ea3134$export$b7ddf5be20359725(_arg5, _arg6) {
    return $c5730ae5119245ea$export$f24224f1c91d8156(_arg6.fields[1]) + 1;
}
class $3583e200a8ea3134$export$4ac727d0279625de extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "This",
            "That",
            "These"
        ];
    }
}
function $3583e200a8ea3134$export$2eb94597ba19184f(gen0, gen1) {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Prelude.These`2", [
        gen0,
        gen1
    ], $3583e200a8ea3134$export$4ac727d0279625de, ()=>[
            [
                [
                    "Item",
                    gen0
                ]
            ],
            [
                [
                    "Item",
                    gen1
                ]
            ],
            [
                [
                    "Item1",
                    gen0
                ],
                [
                    "Item2",
                    gen1
                ]
            ]
        ]
    );
}
function $3583e200a8ea3134$export$d89f551de2738ab3(maybeA, b) {
    if (maybeA == null) return new $3583e200a8ea3134$export$4ac727d0279625de(1, b);
    else return new $3583e200a8ea3134$export$4ac727d0279625de(2, $7e4c281993e75c03$export$2ab9a8f9f1186f14(maybeA), b);
}
function $3583e200a8ea3134$export$41663dd4c93319e0(a, maybeB) {
    if (maybeB == null) return new $3583e200a8ea3134$export$4ac727d0279625de(0, a);
    else return new $3583e200a8ea3134$export$4ac727d0279625de(2, a, $7e4c281993e75c03$export$2ab9a8f9f1186f14(maybeB));
}
function $3583e200a8ea3134$export$481bbdc992532e79(f, these) {
    switch(these.tag){
        case 1:
            return new $3583e200a8ea3134$export$4ac727d0279625de(1, these.fields[0]);
        case 2:
            return new $3583e200a8ea3134$export$4ac727d0279625de(2, f(these.fields[0]), these.fields[1]);
        default:
            return new $3583e200a8ea3134$export$4ac727d0279625de(0, f(these.fields[0]));
    }
}
class $3583e200a8ea3134$export$9f4132aa238b51eb {
    constructor(){
    }
}
function $3583e200a8ea3134$export$72cb1caea509dc1b() {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("Prelude.OptionBuilder", void 0, $3583e200a8ea3134$export$9f4132aa238b51eb);
}
function $3583e200a8ea3134$export$845c791fda464ad9() {
    return new $3583e200a8ea3134$export$9f4132aa238b51eb();
}
function $3583e200a8ea3134$export$e5403e43878ec1b6(_, x, f) {
    if (x != null) return f($7e4c281993e75c03$export$2ab9a8f9f1186f14(x));
    else return void 0;
}
function $3583e200a8ea3134$export$ba4da117d7bdef59(_, x) {
    return $7e4c281993e75c03$export$ad14ef4001db2bcd(x);
}
function $3583e200a8ea3134$export$b234b9af24438e(_, x) {
    return x;
}
const $3583e200a8ea3134$export$a75d1723e6bda2ec = $3583e200a8ea3134$export$845c791fda464ad9();
function $3583e200a8ea3134$export$477b54a49458a048(_arg1) {
    if (!$c5730ae5119245ea$export$dd1bc94b04021eeb(_arg1)) return $c5730ae5119245ea$export$c01875f616615628(_arg1);
    else return void 0;
}
function $3583e200a8ea3134$export$159f0336ef148a04(list) {
    return $7e4c281993e75c03$export$871de8747c9eaa88((list_2)=>$c5730ae5119245ea$export$66c1ae025e96b4bc(list_2)
    , $3583e200a8ea3134$export$477b54a49458a048($c5730ae5119245ea$export$66c1ae025e96b4bc(list)));
}
function $3583e200a8ea3134$export$24cd92fe340086fd(n, list) {
    let n_1;
    if (n === 0) return list;
    else return $7e4c281993e75c03$export$37721a79838ca038($7e4c281993e75c03$export$871de8747c9eaa88((n_1 = n - 1 | 0, (list_1)=>$3583e200a8ea3134$export$24cd92fe340086fd(n_1, list_1)
    ), $3583e200a8ea3134$export$477b54a49458a048(list)), $c5730ae5119245ea$export$6e22c362a0406a2c());
}
function $3583e200a8ea3134$export$408aaad965f58251(predicate) {
    const loop = (output_mut, remaining_mut)=>{
        loop: while(true){
            const output = output_mut, remaining = remaining_mut;
            if (!$c5730ae5119245ea$export$dd1bc94b04021eeb(remaining)) {
                const head = $c5730ae5119245ea$export$5fd5031fecdacec3(remaining);
                if (predicate(head)) {
                    output_mut = $c5730ae5119245ea$export$8327ebbef2a0ba76(head, output);
                    remaining_mut = $c5730ae5119245ea$export$c01875f616615628(remaining);
                    continue loop;
                } else return [
                    $c5730ae5119245ea$export$66c1ae025e96b4bc(output),
                    remaining
                ];
            } else return [
                $c5730ae5119245ea$export$66c1ae025e96b4bc(output),
                $c5730ae5119245ea$export$6e22c362a0406a2c()
            ];
            break;
        }
    };
    return $ed39e963967a3eea$export$955fe82a9145db62(1, loop, [
        $c5730ae5119245ea$export$6e22c362a0406a2c()
    ]);
}
function $3583e200a8ea3134$export$f57f1824c5412723(fn) {
    const loop = (acc_mut, _arg1_mut)=>{
        loop: while(true){
            const acc = acc_mut, _arg1 = _arg1_mut;
            if ($c5730ae5119245ea$export$dd1bc94b04021eeb(_arg1)) return [
                $c5730ae5119245ea$export$66c1ae025e96b4bc(acc),
                $c5730ae5119245ea$export$6e22c362a0406a2c()
            ];
            else {
                const rest = $c5730ae5119245ea$export$c01875f616615628(_arg1);
                const h = $c5730ae5119245ea$export$5fd5031fecdacec3(_arg1);
                const matchValue = fn(h);
                if (matchValue == null) return [
                    $c5730ae5119245ea$export$66c1ae025e96b4bc(acc),
                    $c5730ae5119245ea$export$8327ebbef2a0ba76(h, rest)
                ];
                else {
                    acc_mut = $c5730ae5119245ea$export$8327ebbef2a0ba76($7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue), acc);
                    _arg1_mut = rest;
                    continue loop;
                }
            }
            break;
        }
    };
    return $ed39e963967a3eea$export$955fe82a9145db62(1, loop, [
        $c5730ae5119245ea$export$6e22c362a0406a2c()
    ]);
}
function $3583e200a8ea3134$export$ab7587a9c063da06(n, list) {
    return [
        $c5730ae5119245ea$export$6a506b36fdea397d(n, list),
        $3583e200a8ea3134$export$24cd92fe340086fd(n, list)
    ];
}
function $3583e200a8ea3134$export$5835bdd4dd0bd418(def, _arg1) {
    if ($c5730ae5119245ea$export$dd1bc94b04021eeb(_arg1)) return def;
    else return $ed39e963967a3eea$export$96ec731ed4dcb222((x_1, y_1)=>$ed39e963967a3eea$export$398604a469f7de9a(x_1, y_1)
    , def, $c5730ae5119245ea$export$96ec731ed4dcb222(_arg1, {
        Compare: (x, y)=>$ed39e963967a3eea$export$398604a469f7de9a(x, y)
    }));
}
function $3583e200a8ea3134$export$236f5df1c02f3d73(n, str) {
    if (n > str.length) return "";
    else return $518fcccc33d36a20$export$662d3818631fba36(str, $ed39e963967a3eea$export$8960430cfd85939f((x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
    , n, 0));
}
function $3583e200a8ea3134$export$66b1838215db0958(n, str) {
    if (n > str.length) return str;
    else return $518fcccc33d36a20$export$662d3818631fba36(str, 0, $ed39e963967a3eea$export$8960430cfd85939f((x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
    , n, 0));
}




function $1cbdac383b1632f3$export$effcdbd76139450(_arg1) {
    return $c5730ae5119245ea$export$8327ebbef2a0ba76(_arg1.fields[0], _arg1.fields[1]);
}
function $1cbdac383b1632f3$export$88e0dae599377b39(_arg1) {
    if (!$c5730ae5119245ea$export$dd1bc94b04021eeb(_arg1)) return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $c5730ae5119245ea$export$5fd5031fecdacec3(_arg1), $c5730ae5119245ea$export$c01875f616615628(_arg1));
    else return void 0;
}
function $1cbdac383b1632f3$export$da968afc9c9924d3(xs) {
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $c4c313718bcc393b$export$5fd5031fecdacec3(xs), $c5730ae5119245ea$export$c80b5fc7454ef206($c4c313718bcc393b$export$c01875f616615628(xs)));
}
function $1cbdac383b1632f3$export$8327ebbef2a0ba76(h, neList) {
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, h, $1cbdac383b1632f3$export$effcdbd76139450(neList));
}
function $1cbdac383b1632f3$export$c40cf5aab899f397(last_1, _arg1) {
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], $c5730ae5119245ea$export$10d8903dec122b9d(_arg1.fields[1], $c5730ae5119245ea$export$439306a4dcaafbb9(last_1)));
}
function $1cbdac383b1632f3$export$10d8903dec122b9d(_arg1, b) {
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], $c5730ae5119245ea$export$10d8903dec122b9d(_arg1.fields[1], $1cbdac383b1632f3$export$effcdbd76139450(b)));
}
function $1cbdac383b1632f3$export$29480e6fb0d9904(listA, neListB) {
    const matchValue = $1cbdac383b1632f3$export$88e0dae599377b39(listA);
    if (matchValue == null) return neListB;
    else return $1cbdac383b1632f3$export$10d8903dec122b9d(matchValue, neListB);
}
function $1cbdac383b1632f3$export$5fd5031fecdacec3(_arg1) {
    return _arg1.fields[0];
}
function $1cbdac383b1632f3$export$c01875f616615628(_arg1) {
    return _arg1.fields[1];
}
function $1cbdac383b1632f3$export$4c7897fafd92b108(_arg1) {
    return $7e4c281993e75c03$export$37721a79838ca038($c5730ae5119245ea$export$e5907b21d797cce6(_arg1.fields[1]), _arg1.fields[0]);
}
function $1cbdac383b1632f3$export$d65cb303b863e3bf(predicate) {
    return (arg)=>$c5730ae5119245ea$export$d65cb303b863e3bf(predicate, $1cbdac383b1632f3$export$effcdbd76139450(arg))
    ;
}
function $1cbdac383b1632f3$export$edb1c8e715f3944e(list) {
    return $1cbdac383b1632f3$export$da968afc9c9924d3($c5730ae5119245ea$export$66c1ae025e96b4bc($1cbdac383b1632f3$export$effcdbd76139450(list)));
}
function $1cbdac383b1632f3$export$f727098520cf33f5(fn, _arg1) {
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, fn(_arg1.fields[0]), _arg1.fields[1]);
}
function $1cbdac383b1632f3$export$87b4ba1f7891f330(fn, _arg1) {
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], $c5730ae5119245ea$export$871de8747c9eaa88(fn, _arg1.fields[1]));
}
function $1cbdac383b1632f3$export$8f2e0aff6bb7bc72(fn) {
    return (arg_1)=>$1cbdac383b1632f3$export$edb1c8e715f3944e($1cbdac383b1632f3$export$87b4ba1f7891f330(fn, $1cbdac383b1632f3$export$edb1c8e715f3944e(arg_1)))
    ;
}
function $1cbdac383b1632f3$export$fc3358c9db04462(fn) {
    return (arg_1)=>$1cbdac383b1632f3$export$edb1c8e715f3944e($1cbdac383b1632f3$export$f727098520cf33f5(fn, $1cbdac383b1632f3$export$edb1c8e715f3944e(arg_1)))
    ;
}
function $1cbdac383b1632f3$export$9b19c2e3f2aab20f(fn, s, _arg1) {
    const patternInput = fn(s, _arg1.fields[0]);
    const tupledArg = $c5730ae5119245ea$export$9b19c2e3f2aab20f(fn, patternInput[1], _arg1.fields[1]);
    return [
        new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, patternInput[0], tupledArg[0]),
        tupledArg[1]
    ];
}
function $1cbdac383b1632f3$export$605b1175d78d31fa(h) {
    return (arg10$0040)=>$1cbdac383b1632f3$export$f727098520cf33f5((_arg1)=>h
        , arg10$0040)
    ;
}
function $1cbdac383b1632f3$export$c28c8388be0ab31a(fn, neList) {
    const loop = (output_mut, _arg1_mut)=>{
        loop: while(true){
            const output = output_mut, _arg1 = _arg1_mut;
            if (!$c5730ae5119245ea$export$dd1bc94b04021eeb(_arg1)) {
                output_mut = $1cbdac383b1632f3$export$10d8903dec122b9d(fn($c5730ae5119245ea$export$5fd5031fecdacec3(_arg1)), output);
                _arg1_mut = $c5730ae5119245ea$export$c01875f616615628(_arg1);
                continue loop;
            } else return output;
            break;
        }
    };
    const _arg1_1 = $1cbdac383b1632f3$export$edb1c8e715f3944e(neList);
    return loop(fn(_arg1_1.fields[0]), _arg1_1.fields[1]);
}
function $1cbdac383b1632f3$export$b0d75975ac0be0e1(n, _arg1) {
    const loop = (count_mut, leftAcc_mut, maybeRightAcc_mut)=>{
        loop: while(true){
            const count = count_mut, leftAcc = leftAcc_mut, maybeRightAcc = maybeRightAcc_mut;
            if (maybeRightAcc != null) {
                const xs = maybeRightAcc.fields[1];
                if (count < 1) return [
                    leftAcc,
                    maybeRightAcc
                ];
                else {
                    count_mut = count - 1;
                    leftAcc_mut = $1cbdac383b1632f3$export$8327ebbef2a0ba76(maybeRightAcc.fields[0], leftAcc);
                    maybeRightAcc_mut = $1cbdac383b1632f3$export$88e0dae599377b39(xs);
                    continue loop;
                }
            } else return [
                leftAcc,
                void 0
            ];
            break;
        }
    };
    const tupledArg = loop(n - 1, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], $c5730ae5119245ea$export$6e22c362a0406a2c()), $1cbdac383b1632f3$export$88e0dae599377b39(_arg1.fields[1]));
    return [
        $1cbdac383b1632f3$export$edb1c8e715f3944e(tupledArg[0]),
        tupledArg[1]
    ];
}
function $1cbdac383b1632f3$export$afc1bfabebaf28a2(predicate) {
    const loop = (output_mut, maybeRemaining_mut)=>{
        let t;
        loop: while(true){
            const output = output_mut, maybeRemaining = maybeRemaining_mut;
            let pattern_matching_result, h_1, t_1;
            if (maybeRemaining != null) {
                if (t = maybeRemaining.fields[1], predicate(maybeRemaining.fields[0])) {
                    pattern_matching_result = 0;
                    h_1 = maybeRemaining.fields[0];
                    t_1 = maybeRemaining.fields[1];
                } else pattern_matching_result = 1;
            } else pattern_matching_result = 1;
            switch(pattern_matching_result){
                case 0:
                    output_mut = $c5730ae5119245ea$export$8327ebbef2a0ba76(h_1, output);
                    maybeRemaining_mut = $1cbdac383b1632f3$export$88e0dae599377b39(t_1);
                    continue loop;
                case 1:
                    return $7e4c281993e75c03$export$871de8747c9eaa88((o)=>[
                            o,
                            maybeRemaining
                        ]
                    , $1cbdac383b1632f3$export$88e0dae599377b39($c5730ae5119245ea$export$66c1ae025e96b4bc(output)));
            }
            break;
        }
    };
    return (arg)=>loop($c5730ae5119245ea$export$6e22c362a0406a2c(), arg)
    ;
}
function $1cbdac383b1632f3$export$ec880bbf53567368(fn) {
    const loop = (output_mut, maybeRemaining_mut)=>{
        loop: while(true){
            const output = output_mut, maybeRemaining = maybeRemaining_mut;
            if (maybeRemaining != null) {
                const t = maybeRemaining.fields[1];
                const matchValue = fn(maybeRemaining.fields[0]);
                if (matchValue == null) return $7e4c281993e75c03$export$871de8747c9eaa88((o)=>[
                        o,
                        maybeRemaining
                    ]
                , $1cbdac383b1632f3$export$88e0dae599377b39($c5730ae5119245ea$export$66c1ae025e96b4bc(output)));
                else {
                    output_mut = $c5730ae5119245ea$export$8327ebbef2a0ba76($7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue), output);
                    maybeRemaining_mut = $1cbdac383b1632f3$export$88e0dae599377b39(t);
                    continue loop;
                }
            } else return $7e4c281993e75c03$export$871de8747c9eaa88((o_1)=>[
                    o_1,
                    maybeRemaining
                ]
            , $1cbdac383b1632f3$export$88e0dae599377b39($c5730ae5119245ea$export$66c1ae025e96b4bc(output)));
            break;
        }
    };
    return (arg)=>loop($c5730ae5119245ea$export$6e22c362a0406a2c(), arg)
    ;
}
function $1cbdac383b1632f3$export$d6aec2285be45753(predicate) {
    const loop = (output_mut, _arg1_mut)=>{
        let nextList;
        loop: while(true){
            const output = output_mut, _arg1 = _arg1_mut;
            const h = _arg1.fields[0];
            const matchValue = $1cbdac383b1632f3$export$88e0dae599377b39(_arg1.fields[1]);
            let pattern_matching_result, nextList_1;
            if (matchValue != null) {
                if (nextList = matchValue, !predicate(h)) {
                    pattern_matching_result = 0;
                    nextList_1 = matchValue;
                } else pattern_matching_result = 1;
            } else pattern_matching_result = 1;
            switch(pattern_matching_result){
                case 0:
                    output_mut = $c5730ae5119245ea$export$8327ebbef2a0ba76(h, output);
                    _arg1_mut = nextList_1;
                    continue loop;
                case 1:
                    return [
                        new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, h, output),
                        matchValue
                    ];
            }
            break;
        }
    };
    return (arg)=>{
        const tupledArg = loop($c5730ae5119245ea$export$6e22c362a0406a2c(), arg);
        return [
            $1cbdac383b1632f3$export$edb1c8e715f3944e(tupledArg[0]),
            tupledArg[1]
        ];
    };
}
function $1cbdac383b1632f3$export$c48e357c1a89b78d(fn) {
    const loop = (output_mut, input_mut)=>{
        loop: while(true){
            const output = output_mut, input = input_mut;
            const matchValue = fn(input);
            if (matchValue[1] == null) return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, matchValue[0], output);
            else {
                output_mut = $c5730ae5119245ea$export$8327ebbef2a0ba76(matchValue[0], output);
                input_mut = $7e4c281993e75c03$export$2ab9a8f9f1186f14(matchValue[1]);
                continue loop;
            }
            break;
        }
    };
    return (arg)=>$1cbdac383b1632f3$export$edb1c8e715f3944e(loop($c5730ae5119245ea$export$6e22c362a0406a2c(), arg))
    ;
}










function $6f9339dcb7ad0d09$export$7ee701e290d9865(l) {
    return $518fcccc33d36a20$export$c6e2787f63ca055d(l);
}
function $6f9339dcb7ad0d09$export$2344b14b097df817(regex, line) {
    return $14cb28be03f8bba6$export$b74c33566721f70f(regex, line);
}
function $6f9339dcb7ad0d09$export$68326237475e9a7d(marker, line) {
    return $14cb28be03f8bba6$export$b74c33566721f70f($14cb28be03f8bba6$export$185802fd694ee1f5("^\\s*" + marker), line);
}
function $6f9339dcb7ad0d09$export$d2d84020f5326cd0(regex, line) {
    const m = $14cb28be03f8bba6$export$4659b591c19bdf3d(regex, line);
    if (m != null) return $3583e200a8ea3134$export$66b1838215db0958(m.index + m[0].length, line);
    else return void 0;
}
const $6f9339dcb7ad0d09$var$leadingWhitespaceRegex = /^\s*/g;
function $6f9339dcb7ad0d09$export$c3ab302d598ba56c(line) {
    return $14cb28be03f8bba6$export$4659b591c19bdf3d($6f9339dcb7ad0d09$var$leadingWhitespaceRegex, line)[0];
}
function $6f9339dcb7ad0d09$export$949cdd5cc1255afe(line) {
    if ($6f9339dcb7ad0d09$export$2344b14b097df817(/[A-Za-z0-9À-￿]/g, line)) return !$6f9339dcb7ad0d09$export$2344b14b097df817(/^=(begin|end)\s*$/g, line);
    else return false;
}
function $6f9339dcb7ad0d09$export$65980d18b75784e2(regex, line) {
    const prefix = $7e4c281993e75c03$export$37721a79838ca038($6f9339dcb7ad0d09$export$d2d84020f5326cd0(regex, line), "");
    return [
        prefix,
        $3583e200a8ea3134$export$236f5df1c02f3d73(prefix.length, line)
    ];
}
function $6f9339dcb7ad0d09$export$5efd720ef35c8e98(tabSize, str) {
    const matchValue = $c5730ae5119245ea$export$66c1ae025e96b4bc($c5730ae5119245ea$export$cb197a913f6bb809(str.split("\t")));
    if (!$c5730ae5119245ea$export$dd1bc94b04021eeb(matchValue)) return $518fcccc33d36a20$export$f7e2c8231c57a8bd("", $c5730ae5119245ea$export$66c1ae025e96b4bc($c5730ae5119245ea$export$8327ebbef2a0ba76($c5730ae5119245ea$export$5fd5031fecdacec3(matchValue), $c5730ae5119245ea$export$871de8747c9eaa88((s)=>$518fcccc33d36a20$export$7e24a29324041c48(s, (~~(s.length / tabSize) + 1) * tabSize)
    , $c5730ae5119245ea$export$c01875f616615628(matchValue)))));
    else return str;
}
function $6f9339dcb7ad0d09$export$de9247834912d11c(tabSize, column, charCode) {
    let x_4, x_6, x_8;
    if (charCode === 0) return 1;
    else if (charCode === 9) return tabSize - column % tabSize | 0;
    else if (charCode < 32) return 0;
    else if (charCode < 11904) return 1;
    else if (x_4 = charCode, x_4 >= 11904 && x_4 <= 55215) return 2;
    else if (x_6 = charCode, x_6 >= 63744 && x_6 <= 64255) return 2;
    else if (x_8 = charCode, x_8 >= 65281 && x_8 <= 65374) return 2;
    else return 1;
}
function $6f9339dcb7ad0d09$export$6736e22116c64a4c(offset, tabWidth, str) {
    const tabWidth_1 = $ed39e963967a3eea$export$8960430cfd85939f((x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
    , tabWidth, 1) | 0;
    const loop = (acc_mut, i_mut)=>{
        loop: while(true){
            const acc = acc_mut, i = i_mut;
            if (i >= str.length) return acc - offset | 0;
            else {
                acc_mut = acc + $6f9339dcb7ad0d09$export$de9247834912d11c(tabWidth_1, acc, str[i].charCodeAt(0));
                i_mut = i + 1;
                continue loop;
            }
            break;
        }
    };
    return loop(offset, 0) | 0;
}
const $6f9339dcb7ad0d09$export$13c2f47aa8a3882d = (tabWidth)=>(str)=>$6f9339dcb7ad0d09$export$6736e22116c64a4c(0, tabWidth, str)
;
class $6f9339dcb7ad0d09$export$17d680238e50603e {
    constructor(p, c){
        this.p = p;
        this.c = c;
    }
    toString() {
        const this$ = this;
        return $6f9339dcb7ad0d09$export$42f65d3844869e20(this$) + $6f9339dcb7ad0d09$export$f587a4e4415f4276(this$);
    }
}
function $6f9339dcb7ad0d09$export$ce355770cc1c8d90() {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("Line.Line", void 0, $6f9339dcb7ad0d09$export$17d680238e50603e);
}
function $6f9339dcb7ad0d09$export$45b30bb84adefa7e(p, c) {
    return new $6f9339dcb7ad0d09$export$17d680238e50603e(p, c);
}
function $6f9339dcb7ad0d09$export$42f65d3844869e20(_) {
    return _.p;
}
function $6f9339dcb7ad0d09$export$f587a4e4415f4276(_) {
    return _.c;
}
function $6f9339dcb7ad0d09$export$30daa94a794cb556(line) {
    return $6f9339dcb7ad0d09$export$45b30bb84adefa7e($6f9339dcb7ad0d09$export$42f65d3844869e20(line), $6f9339dcb7ad0d09$export$f587a4e4415f4276(line));
}
function $6f9339dcb7ad0d09$export$6574aa8202715258(str, splitAt) {
    const splitAt_1 = $ed39e963967a3eea$export$96ec731ed4dcb222((x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
    , splitAt, str.length) | 0;
    return $6f9339dcb7ad0d09$export$45b30bb84adefa7e($518fcccc33d36a20$export$662d3818631fba36(str, 0, splitAt_1), $518fcccc33d36a20$export$662d3818631fba36(str, splitAt_1));
}
function $6f9339dcb7ad0d09$var$Line_$ctor_4E535C37(line, splitAt) {
    return $6f9339dcb7ad0d09$export$6574aa8202715258($6f9339dcb7ad0d09$export$42f65d3844869e20(line) + $6f9339dcb7ad0d09$export$f587a4e4415f4276(line), splitAt);
}
function $6f9339dcb7ad0d09$export$d6fc32550865b077(_) {
    return _.p.length;
}
function $6f9339dcb7ad0d09$export$e8c29fbc0feda43c() {
    return (d)=>(line)=>$6f9339dcb7ad0d09$export$f587a4e4415f4276(line) === "" ? line : $6f9339dcb7ad0d09$var$Line_$ctor_4E535C37(line, $6f9339dcb7ad0d09$export$42f65d3844869e20(line).length + d)
    ;
}
function $6f9339dcb7ad0d09$export$6c40cc0b77eab95d() {
    return (indent)=>(line)=>{
            const trimmed = $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).trimStart();
            return $6f9339dcb7ad0d09$var$Line_$ctor_4E535C37(line, $ed39e963967a3eea$export$96ec731ed4dcb222((x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
            , indent, $6f9339dcb7ad0d09$export$42f65d3844869e20(line).length + $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).length - trimmed.length));
        }
    ;
}
function $6f9339dcb7ad0d09$export$56b8a9d80ba24b50() {
    return (fn)=>(line)=>$6f9339dcb7ad0d09$export$45b30bb84adefa7e($6f9339dcb7ad0d09$export$42f65d3844869e20(line), fn($6f9339dcb7ad0d09$export$f587a4e4415f4276(line)))
    ;
}
function $6f9339dcb7ad0d09$export$64cd1025b86a9dd2() {
    return (fn)=>(line)=>$6f9339dcb7ad0d09$export$45b30bb84adefa7e(fn($6f9339dcb7ad0d09$export$42f65d3844869e20(line)), $6f9339dcb7ad0d09$export$f587a4e4415f4276(line))
    ;
}
function $6f9339dcb7ad0d09$export$9ea60b4cdf98722c() {
    return (f)=>(g)=>(line)=>$6f9339dcb7ad0d09$export$45b30bb84adefa7e(f($6f9339dcb7ad0d09$export$42f65d3844869e20(line)), g($6f9339dcb7ad0d09$export$f587a4e4415f4276(line)))
    ;
}
function $6f9339dcb7ad0d09$export$b53b8f8eed07f89c() {
    return (line)=>$ae70510fbd2502e5$export$f84e8e69fd4488a5(line)
    ;
}
function $6f9339dcb7ad0d09$export$cfa968944e936c15(fn, line) {
    return fn($6f9339dcb7ad0d09$export$f587a4e4415f4276(line));
}








function $54420dd84792de0d$var$isWhitespace(cc) {
    if (cc !== 0 && cc <= 32) return true;
    else return cc === 12288;
}
function $54420dd84792de0d$export$b59aa2bf8bdd5430(charCode) {
    if (charCode >= 12352 && charCode <= 12543 ? true : charCode >= 13312 && charCode <= 19903) return true;
    else if (charCode >= 19968) return charCode <= 40959;
    else return false;
}
const $54420dd84792de0d$export$19f7251a75f6b29f = $5a541a3f8220d610$export$871de8747c9eaa88((value)=>value.charCodeAt(0)
, "})]?,;¢°′″‰℃、。｡､￠，．：；？！％・･ゝゞヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ｧｨｩｪｫｬｭｮｯｰ”〉》」』】〕）］｝｣".split(""), Uint16Array);
const $54420dd84792de0d$export$148708de43fd0cdf = $5a541a3f8220d610$export$871de8747c9eaa88((value)=>value.charCodeAt(0)
, "([{‘“〈《「『【〔（［｛｢£¥＄￡￥＋".split(""), Uint16Array);
function $54420dd84792de0d$export$20b87730f55e1dec(c1, c2) {
    if ($54420dd84792de0d$var$isWhitespace(c1) ? true : $54420dd84792de0d$var$isWhitespace(c2)) return true;
    else if ($5a541a3f8220d610$export$2344b14b097df817(c1, $54420dd84792de0d$export$148708de43fd0cdf, {
        Equals: (x, y)=>x === y
        ,
        GetHashCode: (x)=>$ed39e963967a3eea$export$a9844eb73de0a218(x)
    }) ? true : $5a541a3f8220d610$export$2344b14b097df817(c2, $54420dd84792de0d$export$19f7251a75f6b29f, {
        Equals: (x_1, y_1)=>x_1 === y_1
        ,
        GetHashCode: (x_1)=>$ed39e963967a3eea$export$a9844eb73de0a218(x_1)
    })) return false;
    else if ($54420dd84792de0d$export$b59aa2bf8bdd5430(c1) ? true : $54420dd84792de0d$export$b59aa2bf8bdd5430(c2)) return true;
    else return false;
}
function $54420dd84792de0d$export$c0210628b8ec1aab(c1, c2) {
    if ($54420dd84792de0d$export$b59aa2bf8bdd5430(c1) ? true : $54420dd84792de0d$export$b59aa2bf8bdd5430(c2)) return false;
    else return true;
}
function $54420dd84792de0d$export$1f12e983147761a0(doubleSentenceSpacing, lines) {
    const stops = new Uint16Array([
        46,
        63,
        33
    ]);
    return $c5730ae5119245ea$export$533b26079ad0b4b((acc, line)=>{
        if (line === "" ? true : acc === "") return acc;
        else {
            const acc_1 = acc.trimEnd();
            const accEnd = acc_1[acc_1.length - 1].charCodeAt(0);
            const space = doubleSentenceSpacing && $5a541a3f8220d610$export$2344b14b097df817(accEnd, stops, {
                Equals: (x, y)=>x === y
                ,
                GetHashCode: (x)=>$ed39e963967a3eea$export$a9844eb73de0a218(x)
            }) ? "  " : " ";
            if ($54420dd84792de0d$export$c0210628b8ec1aab(accEnd, line[0].charCodeAt(0))) return acc_1 + space + line;
            else return acc_1 + line;
        }
    }, $1cbdac383b1632f3$export$effcdbd76139450(lines));
}
function $54420dd84792de0d$export$ed6703e98539aa2b(addLine, tabWidth, maxWidth, str) {
    const prefixWidth = (prefixes)=>$6f9339dcb7ad0d09$export$13c2f47aa8a3882d(tabWidth)($1cbdac383b1632f3$export$5fd5031fecdacec3(prefixes))
    ;
    const findBreakPos = (min_mut, p_mut)=>{
        findBreakPos: while(true){
            const min = min_mut, p = p_mut;
            if (p === min) return min | 0;
            else if ($54420dd84792de0d$export$20b87730f55e1dec(str[p - 1].charCodeAt(0), str[p].charCodeAt(0))) return p | 0;
            else {
                min_mut = min;
                p_mut = p - 1;
                continue findBreakPos;
            }
            break;
        }
    };
    const outputLine = (prefixes_1, pStart, pEnd)=>{
        let patternInput;
        const list_1 = prefixes_1;
        patternInput = [
            list_1.fields[0],
            $7e4c281993e75c03$export$37721a79838ca038($1cbdac383b1632f3$export$88e0dae599377b39(list_1.fields[1]), list_1)
        ];
        addLine(patternInput[0] + $518fcccc33d36a20$export$77ad94ebf1c2b9ed(pEnd > pStart ? $518fcccc33d36a20$export$662d3818631fba36(str, pStart, pEnd - pStart).trim() : $518fcccc33d36a20$export$662d3818631fba36(str, pStart), "\u0000", " "));
        return patternInput[1];
    };
    const loop = (prefixes_2_mut, lineStart_mut, curWidth_mut, pStr_mut)=>{
        loop: while(true){
            const prefixes_2 = prefixes_2_mut, lineStart = lineStart_mut, curWidth = curWidth_mut, pStr = pStr_mut;
            if (pStr >= str.length) outputLine(prefixes_2, lineStart, 0);
            else {
                const charCode = str[pStr].charCodeAt(0);
                const newWidth = curWidth + $6f9339dcb7ad0d09$export$de9247834912d11c(tabWidth, curWidth, charCode) | 0;
                if (newWidth <= maxWidth ? true : $54420dd84792de0d$var$isWhitespace(charCode)) {
                    prefixes_2_mut = prefixes_2;
                    lineStart_mut = lineStart;
                    curWidth_mut = newWidth;
                    pStr_mut = pStr + 1;
                    continue loop;
                } else {
                    const breakPos = findBreakPos(lineStart, pStr) | 0;
                    if (breakPos <= lineStart) {
                        prefixes_2_mut = prefixes_2;
                        lineStart_mut = lineStart;
                        curWidth_mut = newWidth;
                        pStr_mut = pStr + 1;
                        continue loop;
                    } else {
                        const nextPrefixes_1 = outputLine(prefixes_2, lineStart, breakPos);
                        prefixes_2_mut = nextPrefixes_1;
                        lineStart_mut = breakPos;
                        curWidth_mut = prefixWidth(nextPrefixes_1);
                        pStr_mut = breakPos;
                        continue loop;
                    }
                }
            }
            break;
        }
    };
    return (prefixes_3)=>{
        loop(prefixes_3, 0, prefixWidth(prefixes_3), 0);
    };
}
class $54420dd84792de0d$export$8fd5d8cae2018caf {
    constructor(settings){
        this.settings = settings;
        this.startLine = 0;
        this.linesConsumed = 0;
        this.outputLines = $c5730ae5119245ea$export$6e22c362a0406a2c();
    }
}
function $54420dd84792de0d$export$f61d4fa4e4ae4a01() {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("Wrapping.OutputBuffer", void 0, $54420dd84792de0d$export$8fd5d8cae2018caf);
}
function $54420dd84792de0d$export$30f38f058075571c(settings) {
    return new $54420dd84792de0d$export$8fd5d8cae2018caf(settings);
}
function $54420dd84792de0d$var$OutputBuffer__get_IsEmpty(_) {
    return $c5730ae5119245ea$export$dd1bc94b04021eeb(_.outputLines);
}
function $54420dd84792de0d$export$58febc67f35f03ed(this$, lines) {
    if ($54420dd84792de0d$var$OutputBuffer__get_IsEmpty(this$)) this$.startLine = this$.startLine + $3583e200a8ea3134$export$b7ddf5be20359725(new $3583e200a8ea3134$export$a79837a2b764b73d(0), lines) | 0;
    else $54420dd84792de0d$export$fe5a27f68faa6da2(this$, lines);
}
function $54420dd84792de0d$export$d56009ea6366e3c0(_, lines) {
    let patternInput;
    const arg = [
        0,
        _.outputLines
    ];
    patternInput = $c4c313718bcc393b$export$93e2b83da34ff82a((tupledArg, l)=>[
            tupledArg[0] + 1,
            $c5730ae5119245ea$export$8327ebbef2a0ba76($6f9339dcb7ad0d09$export$42f65d3844869e20(l) + $6f9339dcb7ad0d09$export$f587a4e4415f4276(l), tupledArg[1])
        ]
    , [
        arg[0],
        arg[1]
    ], lines);
    _.linesConsumed = _.linesConsumed + patternInput[0] | 0;
    _.outputLines = patternInput[1];
}
function $54420dd84792de0d$export$fe5a27f68faa6da2(_, lines) {
    let patternInput;
    const arg = [
        0,
        _.outputLines
    ];
    patternInput = $c4c313718bcc393b$export$93e2b83da34ff82a((tupledArg, l)=>[
            tupledArg[0] + 1,
            $c5730ae5119245ea$export$8327ebbef2a0ba76(l, tupledArg[1])
        ]
    , [
        arg[0],
        arg[1]
    ], lines);
    _.linesConsumed = _.linesConsumed + patternInput[0] | 0;
    _.outputLines = patternInput[1];
}
function $54420dd84792de0d$export$f73f9cf198e0c171(this$, mbPrefixFn, lines) {
    let matchValue, fn, f_6, _arg4_1;
    let prefixes;
    const f_1 = (l)=>$6f9339dcb7ad0d09$export$42f65d3844869e20(l)
    ;
    const _arg4 = lines;
    prefixes = new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_1(_arg4.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_1, _arg4.fields[1]));
    $54420dd84792de0d$export$258fe58438b50cd2(this$, (matchValue = [
        mbPrefixFn,
        prefixes
    ], matchValue[0] != null ? $c5730ae5119245ea$export$dd1bc94b04021eeb(matchValue[1].fields[1]) ? (fn = matchValue[0], new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, matchValue[1].fields[0], $c5730ae5119245ea$export$439306a4dcaafbb9(fn(matchValue[1].fields[0])))) : prefixes : prefixes), (f_6 = (l_1)=>$6f9339dcb7ad0d09$export$f587a4e4415f4276(l_1)
    , (_arg4_1 = lines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_6(_arg4_1.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_6, _arg4_1.fields[1])))));
}
function $54420dd84792de0d$export$258fe58438b50cd2(_, prefixes, contents) {
    $54420dd84792de0d$export$ed6703e98539aa2b((line)=>{
        _.outputLines = $c5730ae5119245ea$export$8327ebbef2a0ba76(line, _.outputLines);
    }, _.settings.tabWidth, _.settings.column > 0 ? _.settings.column : 2147483647, $54420dd84792de0d$export$1f12e983147761a0(_.settings.doubleSentenceSpacing, contents))(prefixes);
    _.linesConsumed = _.linesConsumed + $3583e200a8ea3134$export$b7ddf5be20359725(new $3583e200a8ea3134$export$a79837a2b764b73d(0), contents) | 0;
}
function $54420dd84792de0d$export$a063593adec9431c(_) {
    return new $2c0e5be185a9291c$export$6ed0965c9443aaa6(_.startLine, _.startLine + _.linesConsumed - 1, $c5730ae5119245ea$export$45b10814cc054894($c5730ae5119245ea$export$66c1ae025e96b4bc(_.outputLines)), []);
}










class $80fa799ee6d7bef5$export$841858b892ce1f4c {
    constructor(settings){
        this["settings@39"] = settings;
        this.blocks = $c5730ae5119245ea$export$6e22c362a0406a2c();
        this.lines = $c5730ae5119245ea$export$6e22c362a0406a2c();
        this["output@"] = $54420dd84792de0d$export$30f38f058075571c(this["settings@39"]);
    }
}
function $80fa799ee6d7bef5$export$fc44f086f36ad72e() {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("Parsing_.Context", void 0, $80fa799ee6d7bef5$export$841858b892ce1f4c);
}
function $80fa799ee6d7bef5$export$97a0acc1878fafa1(settings) {
    return new $80fa799ee6d7bef5$export$841858b892ce1f4c(settings);
}
class $80fa799ee6d7bef5$export$48808c686fe495c4 extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "Comment",
            "Wrap",
            "NoWrap",
            "Embedded"
        ];
    }
}
function $80fa799ee6d7bef5$export$db69bb63a550c22c() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Parsing_.BlockType", [], $80fa799ee6d7bef5$export$48808c686fe495c4, ()=>[
            [],
            [],
            [],
            []
        ]
    );
}
class $80fa799ee6d7bef5$export$12ac6b477b8fc5a1 {
    constructor(bType){
        this["bType@58"] = bType;
    }
}
function $80fa799ee6d7bef5$export$3b837f8118293b74() {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("Parsing_.NewBlock", void 0, $80fa799ee6d7bef5$export$12ac6b477b8fc5a1);
}
function $80fa799ee6d7bef5$export$198dd60615d23c21(bType) {
    return new $80fa799ee6d7bef5$export$12ac6b477b8fc5a1(bType);
}
class $80fa799ee6d7bef5$export$d96a8827a60d6b69 extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "Comment",
            "Wrap",
            "NoWrap",
            "NBlock"
        ];
    }
}
function $80fa799ee6d7bef5$export$3b141bb8ed484235() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Parsing_.Block", [], $80fa799ee6d7bef5$export$d96a8827a60d6b69, ()=>[
            [
                [
                    "Item",
                    $3583e200a8ea3134$export$4984d4827624d577($80fa799ee6d7bef5$export$3b141bb8ed484235())
                ]
            ],
            [
                [
                    "Item",
                    $7d684f9c58c88b9e$export$2163aa004254c8ff($7d684f9c58c88b9e$export$2163aa004254c8ff($7d684f9c58c88b9e$export$36bbd56a39d3f734, $7d684f9c58c88b9e$export$36bbd56a39d3f734), $3583e200a8ea3134$export$4984d4827624d577($7d684f9c58c88b9e$export$36bbd56a39d3f734))
                ]
            ],
            [
                [
                    "Item",
                    $3583e200a8ea3134$export$4984d4827624d577($7d684f9c58c88b9e$export$36bbd56a39d3f734)
                ]
            ],
            [
                [
                    "Item",
                    $7d684f9c58c88b9e$export$2163aa004254c8ff($80fa799ee6d7bef5$export$3b837f8118293b74(), $3583e200a8ea3134$export$4984d4827624d577($6f9339dcb7ad0d09$export$ce355770cc1c8d90()))
                ]
            ]
        ]
    );
}
class $80fa799ee6d7bef5$export$29d72869e7026af1 extends $80fa799ee6d7bef5$export$12ac6b477b8fc5a1 {
    constructor(prefixFn_){
        super(new $80fa799ee6d7bef5$export$48808c686fe495c4(1));
        this.prefixFn_ = prefixFn_;
    }
    ["Parsing_.NewBlock.output"](ctx, lines) {
        const x = this;
        $54420dd84792de0d$export$f73f9cf198e0c171($80fa799ee6d7bef5$export$a4a33b11512a3b06(ctx), $80fa799ee6d7bef5$export$572f3d3a83259cff(x), lines);
    }
}
function $80fa799ee6d7bef5$export$2cb195029d98c0e0() {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("Parsing_.WrapBlock", void 0, $80fa799ee6d7bef5$export$29d72869e7026af1, $80fa799ee6d7bef5$export$3b837f8118293b74());
}
function $80fa799ee6d7bef5$export$6c7746daf41e93bc(prefixFn_) {
    return new $80fa799ee6d7bef5$export$29d72869e7026af1(prefixFn_);
}
class $80fa799ee6d7bef5$export$997e26b23dd8be82 extends $80fa799ee6d7bef5$export$12ac6b477b8fc5a1 {
    constructor(){
        super(new $80fa799ee6d7bef5$export$48808c686fe495c4(2));
    }
    ["Parsing_.NewBlock.output"](ctx, lines) {
        $54420dd84792de0d$export$d56009ea6366e3c0($80fa799ee6d7bef5$export$a4a33b11512a3b06(ctx), lines);
    }
}
function $80fa799ee6d7bef5$export$2ba012468061a35d() {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("Parsing_.NoWrapBlock", void 0, $80fa799ee6d7bef5$export$997e26b23dd8be82, $80fa799ee6d7bef5$export$3b837f8118293b74());
}
function $80fa799ee6d7bef5$export$8b427b1937a4f84b() {
    return new $80fa799ee6d7bef5$export$997e26b23dd8be82();
}
class $80fa799ee6d7bef5$export$2f97f029c0ae7f93 {
    constructor(line, blockType, isDefault, nextParser){
        this["line@113"] = line;
        this["blockType@113"] = blockType;
        this["isDefault@113"] = isDefault;
        this["nextParser@113"] = nextParser;
    }
}
function $80fa799ee6d7bef5$export$a503633e7a55bbf4(gen0) {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("Parsing_.LineRes`1", [
        gen0
    ], $80fa799ee6d7bef5$export$2f97f029c0ae7f93);
}
function $80fa799ee6d7bef5$export$3937884c04eca177(line, blockType, isDefault, nextParser) {
    return new $80fa799ee6d7bef5$export$2f97f029c0ae7f93(line, blockType, isDefault, nextParser);
}
class $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6 extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "Pending",
            "Finished"
        ];
    }
}
function $80fa799ee6d7bef5$export$fcecbfedf032a43d() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Parsing_.FirstLineRes", [], $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6, ()=>[
            [
                [
                    "Item",
                    $80fa799ee6d7bef5$export$a503633e7a55bbf4($7d684f9c58c88b9e$export$14857d36df600d23($6f9339dcb7ad0d09$export$ce355770cc1c8d90(), $80fa799ee6d7bef5$export$d0588c6ad7cba293()))
                ]
            ],
            [
                [
                    "Item",
                    $80fa799ee6d7bef5$export$a503633e7a55bbf4($7d684f9c58c88b9e$export$a0bfd80c70f2d46b($7d684f9c58c88b9e$export$14857d36df600d23($6f9339dcb7ad0d09$export$ce355770cc1c8d90(), $80fa799ee6d7bef5$export$fcecbfedf032a43d())))
                ]
            ]
        ]
    );
}
class $80fa799ee6d7bef5$export$3f8e93861147162e extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "ThisLine",
            "FinishedOnPrev"
        ];
    }
}
function $80fa799ee6d7bef5$export$d0588c6ad7cba293() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Parsing_.NextLineRes", [], $80fa799ee6d7bef5$export$3f8e93861147162e, ()=>[
            [
                [
                    "Item",
                    $80fa799ee6d7bef5$export$fcecbfedf032a43d()
                ]
            ],
            [
                [
                    "Item",
                    $7d684f9c58c88b9e$export$a0bfd80c70f2d46b($80fa799ee6d7bef5$export$fcecbfedf032a43d())
                ]
            ]
        ]
    );
}
class $80fa799ee6d7bef5$var$PLState extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "NewParser",
            "InParser"
        ];
    }
}
function $80fa799ee6d7bef5$var$PLState$reflection() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Parsing_.PLState", [], $80fa799ee6d7bef5$var$PLState, ()=>[
            [
                [
                    "Item",
                    $7d684f9c58c88b9e$export$a0bfd80c70f2d46b($7d684f9c58c88b9e$export$14857d36df600d23($6f9339dcb7ad0d09$export$ce355770cc1c8d90(), $80fa799ee6d7bef5$export$fcecbfedf032a43d()))
                ]
            ],
            [
                [
                    "Item1",
                    $7d684f9c58c88b9e$export$5fe717259b8d6105($6f9339dcb7ad0d09$export$ce355770cc1c8d90())
                ],
                [
                    "Item2",
                    $80fa799ee6d7bef5$export$a503633e7a55bbf4($7d684f9c58c88b9e$export$14857d36df600d23($6f9339dcb7ad0d09$export$ce355770cc1c8d90(), $80fa799ee6d7bef5$export$d0588c6ad7cba293()))
                ]
            ]
        ]
    );
}
class $80fa799ee6d7bef5$var$SpecialLineRes extends $80fa799ee6d7bef5$export$2f97f029c0ae7f93 {
    constructor(line, nextParser, fn){
        super(line, $80fa799ee6d7bef5$export$841eb07a4e16193, false, nextParser);
        this["fn@158"] = fn;
    }
}
function $80fa799ee6d7bef5$var$SpecialLineRes$reflection() {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("Parsing_.SpecialLineRes", void 0, $80fa799ee6d7bef5$var$SpecialLineRes, $80fa799ee6d7bef5$export$a503633e7a55bbf4($7d684f9c58c88b9e$export$14857d36df600d23($6f9339dcb7ad0d09$export$ce355770cc1c8d90(), $80fa799ee6d7bef5$export$d0588c6ad7cba293())));
}
function $80fa799ee6d7bef5$var$SpecialLineRes_$ctor_3133BB29(line, nextParser, fn) {
    return new $80fa799ee6d7bef5$var$SpecialLineRes(line, nextParser, fn);
}
function $80fa799ee6d7bef5$export$a4a33b11512a3b06(__) {
    return __["output@"];
}
function $80fa799ee6d7bef5$export$e97046137fc6b021(_) {
    return _["settings@39"];
}
function $80fa799ee6d7bef5$export$19e00b0658143a52(_) {
    return (block)=>{
        _.blocks = $c5730ae5119245ea$export$8327ebbef2a0ba76(block, _.blocks);
    };
}
function $80fa799ee6d7bef5$export$cf92fd1f7736bad1(_) {
    return $1cbdac383b1632f3$export$da968afc9c9924d3($c5730ae5119245ea$export$66c1ae025e96b4bc(_.blocks));
}
function $80fa799ee6d7bef5$export$89c7aed90bbbd7f3(_) {
    return _["bType@58"];
}
function $80fa799ee6d7bef5$export$9e6a9adb797d15ad(x) {
    return $ed39e963967a3eea$export$e9bab7fafb253603($80fa799ee6d7bef5$export$89c7aed90bbbd7f3(x), new $80fa799ee6d7bef5$export$48808c686fe495c4(0));
}
function $80fa799ee6d7bef5$export$cc84ec394701b4e3(x) {
    if ($80fa799ee6d7bef5$export$9e6a9adb797d15ad(x)) return true;
    else return $ed39e963967a3eea$export$e9bab7fafb253603($80fa799ee6d7bef5$export$89c7aed90bbbd7f3(x), new $80fa799ee6d7bef5$export$48808c686fe495c4(3));
}
function $80fa799ee6d7bef5$export$4b73583fcb149b37(_arg1, b) {
    switch(b.tag){
        case 2:
            return $3583e200a8ea3134$export$b7ddf5be20359725(new $3583e200a8ea3134$export$a79837a2b764b73d(0), b.fields[0]) | 0;
        case 1:
            return $3583e200a8ea3134$export$b7ddf5be20359725(new $3583e200a8ea3134$export$a79837a2b764b73d(0), b.fields[0][1]) | 0;
        case 3:
            return $3583e200a8ea3134$export$b7ddf5be20359725(new $3583e200a8ea3134$export$a79837a2b764b73d(0), b.fields[0][1]) | 0;
        default:
            return $c4c313718bcc393b$export$9e8299ab977385a3((b_1)=>$80fa799ee6d7bef5$export$4b73583fcb149b37(new $3583e200a8ea3134$export$a79837a2b764b73d(0), b_1)
            , b.fields[0], {
                GetZero: ()=>0
                ,
                Add: (x, y)=>x + y
            }) | 0;
    }
}
function $80fa799ee6d7bef5$export$572f3d3a83259cff(_) {
    return _.prefixFn_;
}
const $80fa799ee6d7bef5$export$7f3a03c5cf10c42a = $80fa799ee6d7bef5$export$6c7746daf41e93bc((x)=>x
);
function $80fa799ee6d7bef5$export$7a7b7d9aeb7bdb25(prefixFn) {
    return $80fa799ee6d7bef5$export$6c7746daf41e93bc(prefixFn);
}
const $80fa799ee6d7bef5$export$841eb07a4e16193 = $80fa799ee6d7bef5$export$8b427b1937a4f84b();
function $80fa799ee6d7bef5$export$f879e19c0d51349e(_) {
    return _["line@113"];
}
function $80fa799ee6d7bef5$export$c95cd4211fcf690e(_) {
    return _["blockType@113"];
}
function $80fa799ee6d7bef5$export$d3e082395ddc82a1(_) {
    return _["isDefault@113"];
}
function $80fa799ee6d7bef5$export$8b4a67db33185e32(_) {
    return _["nextParser@113"];
}
function $80fa799ee6d7bef5$var$SpecialLineRes__get_fn(_) {
    return _["fn@158"];
}
function $80fa799ee6d7bef5$export$9319570f173ed916(docParser, ctx) {
    const initParser = $ed39e963967a3eea$export$955fe82a9145db62(1, docParser, [
        ctx
    ]);
    const doFirstLineRes = (lines, _arg2)=>{
        if (_arg2.tag === 1) {
            const r_1 = _arg2.fields[0];
            const res = r_1;
            $80fa799ee6d7bef5$export$19e00b0658143a52(ctx)(new $80fa799ee6d7bef5$export$d96a8827a60d6b69(3, [
                $80fa799ee6d7bef5$export$c95cd4211fcf690e(res),
                $1cbdac383b1632f3$export$edb1c8e715f3944e(new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $80fa799ee6d7bef5$export$f879e19c0d51349e(res), lines))
            ]));
            return new $80fa799ee6d7bef5$var$PLState(0, $80fa799ee6d7bef5$export$8b4a67db33185e32(r_1));
        } else return new $80fa799ee6d7bef5$var$PLState(1, lines, _arg2.fields[0]);
    };
    return (lines_4)=>{
        const matchValue_1 = $c4c313718bcc393b$export$93e2b83da34ff82a((state, line)=>{
            if (state.tag === 1) {
                const rPrev = state.fields[1];
                const ls = state.fields[0];
                const matchValue = $80fa799ee6d7bef5$export$8b4a67db33185e32(rPrev)(line);
                if (matchValue.tag === 1) {
                    if (matchValue.fields[0] == null) {
                        const res_2 = rPrev;
                        $80fa799ee6d7bef5$export$19e00b0658143a52(ctx)(new $80fa799ee6d7bef5$export$d96a8827a60d6b69(3, [
                            $80fa799ee6d7bef5$export$c95cd4211fcf690e(res_2),
                            $1cbdac383b1632f3$export$edb1c8e715f3944e(new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $80fa799ee6d7bef5$export$f879e19c0d51349e(res_2), ls))
                        ]));
                        return doFirstLineRes($c5730ae5119245ea$export$6e22c362a0406a2c(), initParser(line));
                    } else {
                        const x_5 = matchValue.fields[0];
                        const res_1 = rPrev;
                        $80fa799ee6d7bef5$export$19e00b0658143a52(ctx)(new $80fa799ee6d7bef5$export$d96a8827a60d6b69(3, [
                            $80fa799ee6d7bef5$export$c95cd4211fcf690e(res_1),
                            $1cbdac383b1632f3$export$edb1c8e715f3944e(new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $80fa799ee6d7bef5$export$f879e19c0d51349e(res_1), ls))
                        ]));
                        return doFirstLineRes($c5730ae5119245ea$export$6e22c362a0406a2c(), x_5);
                    }
                } else return doFirstLineRes($c5730ae5119245ea$export$8327ebbef2a0ba76($80fa799ee6d7bef5$export$f879e19c0d51349e(rPrev), ls), matchValue.fields[0]);
            } else return doFirstLineRes($c5730ae5119245ea$export$6e22c362a0406a2c(), $7e4c281993e75c03$export$37721a79838ca038(state.fields[0], initParser)(line));
        }, doFirstLineRes($c5730ae5119245ea$export$6e22c362a0406a2c(), initParser($c4c313718bcc393b$export$5fd5031fecdacec3(lines_4))), $c4c313718bcc393b$export$c01875f616615628(lines_4));
        if (matchValue_1.tag === 1) {
            const rPrev_1 = matchValue_1.fields[1];
            if (rPrev_1 instanceof $80fa799ee6d7bef5$var$SpecialLineRes) $80fa799ee6d7bef5$var$SpecialLineRes__get_fn(rPrev_1)();
            else {
                const res_3 = rPrev_1;
                $80fa799ee6d7bef5$export$19e00b0658143a52(ctx)(new $80fa799ee6d7bef5$export$d96a8827a60d6b69(3, [
                    $80fa799ee6d7bef5$export$c95cd4211fcf690e(res_3),
                    $1cbdac383b1632f3$export$edb1c8e715f3944e(new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $80fa799ee6d7bef5$export$f879e19c0d51349e(res_3), matchValue_1.fields[0]))
                ]));
            }
        }
    };
}
function $80fa799ee6d7bef5$export$fc9854d2d5b97182(oldParser, ctx, firstLine) {
    let lines = new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $6f9339dcb7ad0d09$export$f587a4e4415f4276(firstLine), $c5730ae5119245ea$export$6e22c362a0406a2c());
    const runOldParser = ()=>{
        const source = oldParser($80fa799ee6d7bef5$export$e97046137fc6b021(ctx), $1cbdac383b1632f3$export$edb1c8e715f3944e(lines));
        $c4c313718bcc393b$export$c1a059043cc9c119($80fa799ee6d7bef5$export$19e00b0658143a52(ctx), source);
    };
    const parseLine = (line)=>{
        lines = $1cbdac383b1632f3$export$8327ebbef2a0ba76($6f9339dcb7ad0d09$export$f587a4e4415f4276(line), lines);
        return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(0, $80fa799ee6d7bef5$var$SpecialLineRes_$ctor_3133BB29(line, parseLine, runOldParser)));
    };
    return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(0, $80fa799ee6d7bef5$var$SpecialLineRes_$ctor_3133BB29($6f9339dcb7ad0d09$export$45b30bb84adefa7e("", ""), parseLine, runOldParser));
}
function $80fa799ee6d7bef5$export$c0c9bee6343f1d85(oldParser, ctx, seqLines) {
    const lines = $1cbdac383b1632f3$export$da968afc9c9924d3($c4c313718bcc393b$export$871de8747c9eaa88((l)=>$6f9339dcb7ad0d09$export$f587a4e4415f4276(l)
    , seqLines));
    const source_1 = oldParser($80fa799ee6d7bef5$export$e97046137fc6b021(ctx), lines);
    $c4c313718bcc393b$export$c1a059043cc9c119($80fa799ee6d7bef5$export$19e00b0658143a52(ctx), source_1);
}
function $80fa799ee6d7bef5$export$fb952bddd3d46e08(parser, settings, lines) {
    const ctx = $80fa799ee6d7bef5$export$97a0acc1878fafa1(settings);
    $80fa799ee6d7bef5$export$9319570f173ed916(parser, ctx)($c4c313718bcc393b$export$871de8747c9eaa88((s)=>$6f9339dcb7ad0d09$export$45b30bb84adefa7e("", s)
    , lines));
    return $80fa799ee6d7bef5$export$cf92fd1f7736bad1(ctx);
}
const $80fa799ee6d7bef5$export$71d5049186c62ec9 = (docParser)=>(ctx)=>$80fa799ee6d7bef5$export$9319570f173ed916(docParser, ctx)
;







class $044d4a9a60b1f629$export$ce4fe1c9e6520c1a extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "Language"
        ];
    }
}
function $044d4a9a60b1f629$export$fd0de1039bd38862() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Parsing.Language.Language", [], $044d4a9a60b1f629$export$ce4fe1c9e6520c1a, ()=>[
            [
                [
                    "Item1",
                    $7d684f9c58c88b9e$export$36bbd56a39d3f734
                ],
                [
                    "Item2",
                    $7d684f9c58c88b9e$export$9242f430c61b672d($7d684f9c58c88b9e$export$36bbd56a39d3f734)
                ],
                [
                    "Item3",
                    $7d684f9c58c88b9e$export$9242f430c61b672d($7d684f9c58c88b9e$export$36bbd56a39d3f734)
                ],
                [
                    "Item4",
                    $7d684f9c58c88b9e$export$14857d36df600d23($80fa799ee6d7bef5$export$fc44f086f36ad72e(), $7d684f9c58c88b9e$export$14857d36df600d23($7d684f9c58c88b9e$export$8547d5acd31924e("System.Collections.Generic.IEnumerable`1", [
                        $6f9339dcb7ad0d09$export$ce355770cc1c8d90()
                    ]), $7d684f9c58c88b9e$export$ffcad4a7b72710d8))
                ]
            ]
        ]
    );
}
function $044d4a9a60b1f629$export$e705f8b690e926d(name, aliases, exts, parser) {
    const split = (s)=>$518fcccc33d36a20$export$65980d18b75784e2(s.toLocaleLowerCase(), [
            "|"
        ], null, 1)
    ;
    return new $044d4a9a60b1f629$export$ce4fe1c9e6520c1a(0, name, $5a541a3f8220d610$export$10d8903dec122b9d([
        name.toLocaleLowerCase()
    ], split(aliases)), split(exts), parser);
}
function $044d4a9a60b1f629$export$a68c0c8037b37d66(_arg1) {
    return _arg1.fields[0];
}
function $044d4a9a60b1f629$export$9c9dbb6e7b91b5af(_arg1) {
    return $ed39e963967a3eea$export$c3095a23b368d1f2(2, _arg1.fields[3]);
}
function $044d4a9a60b1f629$export$47bd1dafac8b8c58(fileLang, _arg1) {
    return $c4c313718bcc393b$export$2344b14b097df817(fileLang.toLocaleLowerCase(), _arg1.fields[1], {
        Equals: (x, y)=>x === y
        ,
        GetHashCode: (x)=>$ed39e963967a3eea$export$b9b095ec8c02760b(x)
    });
}
function $044d4a9a60b1f629$export$37f42de08e6cfa5e(path, _arg1) {
    const fileName = $5a541a3f8220d610$export$4c7897fafd92b108($518fcccc33d36a20$export$65980d18b75784e2(path.toLocaleLowerCase(), [
        "\\",
        "/"
    ]));
    return $c4c313718bcc393b$export$f7e9f41ea797a17((_arg2)=>{
        if (_arg2.indexOf(".") === 0) return $518fcccc33d36a20$export$10fdab3683b55b22(fileName, _arg2);
        else return fileName === _arg2;
    }, _arg1.fields[2]);
}










function $e89b9b7ee1760219$export$a4b5e5573e6852c1(_arg1, lines) {
    return $1cbdac383b1632f3$export$87b4ba1f7891f330((y_1)=>_arg1[1] + y_1
    , $1cbdac383b1632f3$export$f727098520cf33f5((y)=>_arg1[0] + y
    , lines));
}
const $e89b9b7ee1760219$export$c080b07763463677 = (()=>{
    const prependPrefixTrimEndOfBlankLine = (p, s)=>{
        if ($6f9339dcb7ad0d09$export$7ee701e290d9865(s)) return p.trimEnd();
        else return p + s;
    };
    return (makeDefPrefix)=>(parser)=>(tupledArg_3)=>$1cbdac383b1632f3$export$c48e357c1a89b78d((tupledArg_2)=>{
                    let wrappable, x_12, tupledArg_1, tupledArg, arg10$0040_2;
                    const _arg1_3 = tupledArg_2[1];
                    const block_1 = _arg1_3.fields[0];
                    let patternInput_1;
                    const patternInput = $1cbdac383b1632f3$export$b0d75975ac0be0e1($80fa799ee6d7bef5$export$4b73583fcb149b37(new $3583e200a8ea3134$export$a79837a2b764b73d(0), block_1), tupledArg_2[0]);
                    const pBlockRest = patternInput[0].fields[1];
                    const p1 = patternInput[0].fields[0];
                    const pRest = $7e4c281993e75c03$export$37721a79838ca038(patternInput[1], new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $7e4c281993e75c03$export$37721a79838ca038($c5730ae5119245ea$export$e5907b21d797cce6(pBlockRest), p1), $c5730ae5119245ea$export$6e22c362a0406a2c()));
                    patternInput_1 = [
                        p1,
                        $7e4c281993e75c03$export$37721a79838ca038($c5730ae5119245ea$export$1acbe849d0cb723e(pBlockRest), makeDefPrefix(p1)),
                        pRest
                    ];
                    const pre2 = patternInput_1[1];
                    const pre1 = patternInput_1[0];
                    return [
                        block_1.tag === 1 ? (wrappable = block_1.fields[0], new $80fa799ee6d7bef5$export$d96a8827a60d6b69(1, (x_12 = [
                            wrappable[0],
                            wrappable[1]
                        ], [
                            (tupledArg_1 = x_12[0], (tupledArg = [
                                pre1,
                                pre2
                            ], [
                                tupledArg[0] + tupledArg_1[0],
                                tupledArg[1] + tupledArg_1[1]
                            ])),
                            x_12[1]
                        ]))) : block_1.tag === 2 ? new $80fa799ee6d7bef5$export$d96a8827a60d6b69(2, (arg10$0040_2 = $1cbdac383b1632f3$export$f727098520cf33f5($ed39e963967a3eea$export$955fe82a9145db62(1, prependPrefixTrimEndOfBlankLine, [
                            pre1
                        ]), block_1.fields[0]), $1cbdac383b1632f3$export$87b4ba1f7891f330($ed39e963967a3eea$export$955fe82a9145db62(1, prependPrefixTrimEndOfBlankLine, [
                            pre2
                        ]), arg10$0040_2))) : block_1.tag === 3 ? (()=>{
                            throw new Error("splitUp on new block");
                        })() : block_1,
                        $7e4c281993e75c03$export$871de8747c9eaa88((b_2)=>[
                                patternInput_1[2],
                                b_2
                            ]
                        , $1cbdac383b1632f3$export$88e0dae599377b39(_arg1_3.fields[1]))
                    ];
                })([
                    tupledArg_3[0],
                    parser(tupledArg_3[1])
                ])
    ;
})();
function $e89b9b7ee1760219$export$db0233f52bd892a4(parser, _arg1, lines) {
    const pre2 = _arg1[1];
    return $e89b9b7ee1760219$export$c080b07763463677((a)=>pre2
    )(parser)([
        new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1[0], $c5730ae5119245ea$export$439306a4dcaafbb9(pre2)),
        lines
    ]);
}
function $e89b9b7ee1760219$export$c4b788daf331c00(parser, wrappable_0, wrappable_1) {
    const wrappable = [
        wrappable_0,
        wrappable_1
    ];
    return new $80fa799ee6d7bef5$export$d96a8827a60d6b69(0, $e89b9b7ee1760219$export$db0233f52bd892a4(parser, wrappable[0], wrappable[1]));
}
function $e89b9b7ee1760219$export$ba7ca0e7f111fc0b(arg0_0, arg0_1) {
    return new $80fa799ee6d7bef5$export$d96a8827a60d6b69(1, [
        arg0_0,
        arg0_1
    ]);
}
function $e89b9b7ee1760219$export$b42b71375aae9155(arg0) {
    return new $80fa799ee6d7bef5$export$d96a8827a60d6b69(2, arg0);
}







function $6cf548609c1fb621$export$855ebe41e1cc9d1d(splitter, totalParser) {
    return (arg)=>$7e4c281993e75c03$export$871de8747c9eaa88((tupledArg)=>[
                totalParser(tupledArg[0]),
                tupledArg[1]
            ]
        , splitter(arg))
    ;
}
function $6cf548609c1fb621$export$2c93594b4c05c833(splitter) {
    return (arg_1)=>$7e4c281993e75c03$export$871de8747c9eaa88((tupledArg)=>[
                new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $e89b9b7ee1760219$export$b42b71375aae9155(tupledArg[0]), $c5730ae5119245ea$export$6e22c362a0406a2c()),
                tupledArg[1]
            ]
        , splitter(arg_1))
    ;
}
function $6cf548609c1fb621$export$58518a0eb5d7e7ad(parsers_mut, lines_mut) {
    $6cf548609c1fb621$export$58518a0eb5d7e7ad: while(true){
        const parsers = parsers_mut, lines = lines_mut;
        if (!$c5730ae5119245ea$export$dd1bc94b04021eeb(parsers)) {
            const matchValue = $c5730ae5119245ea$export$5fd5031fecdacec3(parsers)(lines);
            if (matchValue == null) {
                parsers_mut = $c5730ae5119245ea$export$c01875f616615628(parsers);
                lines_mut = lines;
                continue $6cf548609c1fb621$export$58518a0eb5d7e7ad;
            } else return matchValue;
        } else return void 0;
        break;
    }
}
function $6cf548609c1fb621$export$ac8dfd3a7ad06e80(otherParser, totalParser) {
    const loop = (buffer_mut, lines_mut)=>{
        loop: while(true){
            const buffer = buffer_mut, lines = lines_mut;
            const lines_1 = lines;
            const headLine = lines_1.fields[0];
            const matchValue = otherParser(lines_1);
            if (matchValue == null) {
                const matchValue_2 = $1cbdac383b1632f3$export$88e0dae599377b39(lines_1.fields[1]);
                if (matchValue_2 == null) return [
                    totalParser($1cbdac383b1632f3$export$edb1c8e715f3944e(new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, headLine, buffer))),
                    void 0
                ];
                else {
                    buffer_mut = $c5730ae5119245ea$export$8327ebbef2a0ba76(headLine, buffer);
                    lines_mut = matchValue_2;
                    continue loop;
                }
            } else {
                const remainingLines = matchValue[1];
                const blocks = matchValue[0];
                const matchValue_1 = $1cbdac383b1632f3$export$88e0dae599377b39($c5730ae5119245ea$export$66c1ae025e96b4bc(buffer));
                if (matchValue_1 == null) return [
                    blocks,
                    remainingLines
                ];
                else return [
                    $1cbdac383b1632f3$export$10d8903dec122b9d(totalParser(matchValue_1), blocks),
                    remainingLines
                ];
            }
            break;
        }
    };
    return $ed39e963967a3eea$export$955fe82a9145db62(1, loop, [
        $c5730ae5119245ea$export$6e22c362a0406a2c()
    ]);
}
function $6cf548609c1fb621$export$6322879f5a137539(partialParser) {
    const loop = (blocks_mut, lines_mut)=>{
        loop: while(true){
            const blocks = blocks_mut, lines = lines_mut;
            const matchValue = partialParser(lines);
            if (matchValue[1] == null) return $1cbdac383b1632f3$export$29480e6fb0d9904(blocks, matchValue[0]);
            else {
                const remainingLines = matchValue[1];
                blocks_mut = $c5730ae5119245ea$export$10d8903dec122b9d(blocks, $1cbdac383b1632f3$export$effcdbd76139450(matchValue[0]));
                lines_mut = remainingLines;
                continue loop;
            }
            break;
        }
    };
    return $ed39e963967a3eea$export$955fe82a9145db62(1, loop, [
        $c5730ae5119245ea$export$6e22c362a0406a2c()
    ]);
}
function $6cf548609c1fb621$export$8e02eae49deb618c(splitFn) {
    return $1cbdac383b1632f3$export$c48e357c1a89b78d(splitFn);
}
function $6cf548609c1fb621$export$3eb3d7d4289547fd(predicate, lines) {
    const lines_1 = lines;
    const matchValue = $1cbdac383b1632f3$export$afc1bfabebaf28a2((arg)=>!predicate(arg)
    )(lines_1);
    if (matchValue == null) {
        let tupledArg_1;
        const tupledArg = $3583e200a8ea3134$export$408aaad965f58251((arg_1)=>!predicate(arg_1)
        )(lines_1.fields[1]);
        tupledArg_1 = [
            new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, lines_1.fields[0], tupledArg[0]),
            tupledArg[1]
        ];
        return [
            tupledArg_1[0],
            $1cbdac383b1632f3$export$88e0dae599377b39(tupledArg_1[1])
        ];
    } else return matchValue;
}
function $6cf548609c1fb621$export$e2f2b845afcbaf41(regex) {
    return (lines)=>$6cf548609c1fb621$export$3eb3d7d4289547fd((line)=>$6f9339dcb7ad0d09$export$2344b14b097df817(regex, line)
        , lines)
    ;
}
function $6cf548609c1fb621$export$97415d645e8556b1(regex) {
    return $1cbdac383b1632f3$export$d6aec2285be45753((line)=>$6f9339dcb7ad0d09$export$2344b14b097df817(regex, line)
    );
}
function $6cf548609c1fb621$export$a243c986f18047d7(tabWidth, _arg1) {
    const firstLine = _arg1.fields[0];
    const indentSize = (arg_1)=>$6f9339dcb7ad0d09$export$5efd720ef35c8e98(tabWidth, $6f9339dcb7ad0d09$export$c3ab302d598ba56c(arg_1)).length
    ;
    const firstLineIndentSize = indentSize(firstLine) | 0;
    let tupledArg_1;
    const tupledArg = $3583e200a8ea3134$export$408aaad965f58251((line_1)=>Math.abs(indentSize(line_1) - firstLineIndentSize) < 2
    )(_arg1.fields[1]);
    tupledArg_1 = [
        new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, firstLine, tupledArg[0]),
        tupledArg[1]
    ];
    return [
        tupledArg_1[0],
        $1cbdac383b1632f3$export$88e0dae599377b39(tupledArg_1[1])
    ];
}
function $6cf548609c1fb621$export$206f4d4d34012a5f(reformat, lines) {
    let f, _arg4;
    const lines_1 = lines;
    const headLine = lines_1.fields[0];
    return $e89b9b7ee1760219$export$ba7ca0e7f111fc0b(reformat ? [
        "",
        ""
    ] : [
        $6f9339dcb7ad0d09$export$c3ab302d598ba56c(headLine),
        $6f9339dcb7ad0d09$export$c3ab302d598ba56c($7e4c281993e75c03$export$37721a79838ca038($c5730ae5119245ea$export$1acbe849d0cb723e(lines_1.fields[1]), headLine))
    ], (f = (str)=>str.trimStart()
    , (_arg4 = lines_1, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f(_arg4.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f, _arg4.fields[1])))));
}
function $6cf548609c1fb621$export$bf5ec3b7ee7adf63(otherParser, settings, _arg1) {
    const headBlock = $e89b9b7ee1760219$export$b42b71375aae9155(new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], $c5730ae5119245ea$export$6e22c362a0406a2c()));
    return $7e4c281993e75c03$export$37721a79838ca038($7e4c281993e75c03$export$871de8747c9eaa88((arg)=>$1cbdac383b1632f3$export$8327ebbef2a0ba76(headBlock, otherParser(settings, arg))
    , $1cbdac383b1632f3$export$88e0dae599377b39(_arg1.fields[1])), new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, headBlock, $c5730ae5119245ea$export$6e22c362a0406a2c()));
}
function $6cf548609c1fb621$export$7fcae00e056f3102(textType, lines) {
    let f, _arg4;
    const prefix = $6f9339dcb7ad0d09$export$c3ab302d598ba56c($1cbdac383b1632f3$export$5fd5031fecdacec3(lines));
    return textType([
        [
            prefix,
            prefix
        ],
        (f = (str)=>str.trimStart()
        , (_arg4 = lines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f(_arg4.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f, _arg4.fields[1]))))
    ]);
}
function $6cf548609c1fb621$export$7560c1bc3114403e(startRegex, endRegex, lines) {
    const lines_1 = lines;
    const headLine = lines_1.fields[0];
    return $7e4c281993e75c03$export$871de8747c9eaa88((prefix)=>{
        let n;
        const tupledArg = $6cf548609c1fb621$export$97415d645e8556b1(endRegex)($1cbdac383b1632f3$export$f727098520cf33f5((n = prefix.length | 0, (str)=>$3583e200a8ea3134$export$236f5df1c02f3d73(n, str)
        ), lines_1));
        return [
            $1cbdac383b1632f3$export$605b1175d78d31fa(headLine)(tupledArg[0]),
            tupledArg[1]
        ];
    }, $6f9339dcb7ad0d09$export$d2d84020f5326cd0(startRegex, headLine));
}
const $6cf548609c1fb621$export$c04a3c7d653d8aa0 = $6cf548609c1fb621$export$2c93594b4c05c833($1cbdac383b1632f3$export$afc1bfabebaf28a2((l)=>$6f9339dcb7ad0d09$export$7ee701e290d9865(l)
));

























function $56dd5126021167c2$export$44cff9a5bbe58c3f(rx, line) {
    const m = $6f9339dcb7ad0d09$export$cfa968944e936c15((s)=>$14cb28be03f8bba6$export$4659b591c19bdf3d(rx, s)
    , line);
    if (!(m != null)) return void 0;
    else return [
        Array.from($c4c313718bcc393b$export$1391212d75b2ee65(()=>$c4c313718bcc393b$export$871de8747c9eaa88((g)=>g || ""
            , m)
        )),
        line
    ];
}
function $56dd5126021167c2$export$d2d84020f5326cd0(rx) {
    return (arg)=>$7e4c281993e75c03$export$871de8747c9eaa88((tuple)=>tuple[0]
        , $56dd5126021167c2$export$44cff9a5bbe58c3f(rx, arg))
    ;
}
function $56dd5126021167c2$export$b74c33566721f70f(rx) {
    return (arg)=>$56dd5126021167c2$export$44cff9a5bbe58c3f(rx, arg) != null
    ;
}
const $56dd5126021167c2$export$7554718ac998a8a4 = (arg10)=>$6f9339dcb7ad0d09$export$cfa968944e936c15((arg00_1)=>$518fcccc33d36a20$export$c6e2787f63ca055d(arg00_1)
    , arg10)
;
const $56dd5126021167c2$export$205d7d1171b4f587 = (arg10)=>$6f9339dcb7ad0d09$export$cfa968944e936c15((s)=>s.length - s.trimStart().length
    , arg10)
;
const $56dd5126021167c2$export$1f16eb0deddc4c6d = $6f9339dcb7ad0d09$export$6c40cc0b77eab95d()(2147483647);
function $56dd5126021167c2$export$264e3233dc30e054(line, blockType, nextParser) {
    return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(0, $80fa799ee6d7bef5$export$3937884c04eca177(line, blockType, false, nextParser));
}
function $56dd5126021167c2$export$90407f30cb0073b9(line, blockType, nextParser) {
    return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(1, $80fa799ee6d7bef5$export$3937884c04eca177(line, blockType, false, nextParser));
}
function $56dd5126021167c2$export$64a8896c2db4bef4(line, blockType) {
    return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(1, $80fa799ee6d7bef5$export$3937884c04eca177(line, blockType, false, void 0));
}
function $56dd5126021167c2$export$6b3f82f9cb6c0717(p, r) {
    return $80fa799ee6d7bef5$export$3937884c04eca177($80fa799ee6d7bef5$export$f879e19c0d51349e(r), $80fa799ee6d7bef5$export$c95cd4211fcf690e(r), $80fa799ee6d7bef5$export$d3e082395ddc82a1(r), p($80fa799ee6d7bef5$export$8b4a67db33185e32(r)));
}
function $56dd5126021167c2$export$9cf90c14ef21f464(start, remove, spaces, extra) {
    const rep = Array(spaces + 1).join(" ");
    return (pre)=>$518fcccc33d36a20$export$662d3818631fba36(pre, 0, start) + rep + extra + $518fcccc33d36a20$export$662d3818631fba36(pre, start + remove)
    ;
}
function $56dd5126021167c2$export$b954b88ed40d75a0(line, length) {
    return $56dd5126021167c2$export$9cf90c14ef21f464($6f9339dcb7ad0d09$export$d6fc32550865b077(line), length, length, "");
}
function $56dd5126021167c2$export$bf30503277775ba1(prefixFn) {
    return (_arg1)=>{
        let r_3, blockType_1, matchValue_1, r_1, blockType, matchValue;
        return _arg1.tag === 1 ? new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(1, (r_3 = _arg1.fields[0], (blockType_1 = (matchValue_1 = $80fa799ee6d7bef5$export$c95cd4211fcf690e(r_3), matchValue_1 instanceof $80fa799ee6d7bef5$export$29d72869e7026af1 ? $80fa799ee6d7bef5$export$7a7b7d9aeb7bdb25((arg_1)=>prefixFn($80fa799ee6d7bef5$export$572f3d3a83259cff(matchValue_1)(arg_1))
        ) : $80fa799ee6d7bef5$export$c95cd4211fcf690e(r_3)), $80fa799ee6d7bef5$export$3937884c04eca177($80fa799ee6d7bef5$export$f879e19c0d51349e(r_3), blockType_1, $80fa799ee6d7bef5$export$d3e082395ddc82a1(r_3), $80fa799ee6d7bef5$export$8b4a67db33185e32(r_3))))) : new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(0, (r_1 = _arg1.fields[0], (blockType = (matchValue = $80fa799ee6d7bef5$export$c95cd4211fcf690e(r_1), matchValue instanceof $80fa799ee6d7bef5$export$29d72869e7026af1 ? $80fa799ee6d7bef5$export$7a7b7d9aeb7bdb25((arg)=>prefixFn($80fa799ee6d7bef5$export$572f3d3a83259cff(matchValue)(arg))
        ) : $80fa799ee6d7bef5$export$c95cd4211fcf690e(r_1)), $80fa799ee6d7bef5$export$3937884c04eca177($80fa799ee6d7bef5$export$f879e19c0d51349e(r_1), blockType, $80fa799ee6d7bef5$export$d3e082395ddc82a1(r_1), $80fa799ee6d7bef5$export$8b4a67db33185e32(r_1)))));
    };
}
function $56dd5126021167c2$export$178efc013a42a67f(_arg1) {
}
function $56dd5126021167c2$export$d50d28ce3ab2a612(_ctx, line) {
    if ($56dd5126021167c2$export$7554718ac998a8a4(line)) return $56dd5126021167c2$export$64a8896c2db4bef4(line, $80fa799ee6d7bef5$export$841eb07a4e16193);
    else return void 0;
}
function $56dd5126021167c2$export$16c3587616107eaa(_ctx) {
    return (line)=>$56dd5126021167c2$export$b74c33566721f70f(/[A-Za-z0-9À-￿]/g)(line) ? void 0 : $56dd5126021167c2$export$64a8896c2db4bef4(line, $80fa799ee6d7bef5$export$841eb07a4e16193)
    ;
}
const $56dd5126021167c2$export$d6aec2285be45753 = (arg_1)=>$1cbdac383b1632f3$export$c48e357c1a89b78d($1cbdac383b1632f3$export$d6aec2285be45753($56dd5126021167c2$export$b74c33566721f70f(arg_1)))
;






class $1e919a34e720e03d$export$4a5d01451b1af5a8 extends $6f9339dcb7ad0d09$export$17d680238e50603e {
    constructor(basedOn){
        super($6f9339dcb7ad0d09$export$42f65d3844869e20(basedOn), $6f9339dcb7ad0d09$export$f587a4e4415f4276(basedOn));
    }
}
function $1e919a34e720e03d$export$d5cfbe97d323ade9() {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("Parsing_SourceCode.DecorationLine", void 0, $1e919a34e720e03d$export$4a5d01451b1af5a8, $6f9339dcb7ad0d09$export$ce355770cc1c8d90());
}
function $1e919a34e720e03d$export$8210e91f1ae07109(basedOn) {
    return new $1e919a34e720e03d$export$4a5d01451b1af5a8(basedOn);
}
function $1e919a34e720e03d$var$tabsToSpacesContent(tabSize) {
    return (line)=>{
        let initWidth;
        return $6f9339dcb7ad0d09$export$56b8a9d80ba24b50()((initWidth = $6f9339dcb7ad0d09$export$13c2f47aa8a3882d(tabSize)($6f9339dcb7ad0d09$export$42f65d3844869e20(line)) | 0, (str)=>$7e4c281993e75c03$export$2ab9a8f9f1186f14($5a541a3f8220d610$export$93e2b83da34ff82a($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (tupledArg)=>{
                const maybeAccStr = tupledArg[0];
                const accWidth = tupledArg[1] | 0;
                return (s)=>{
                    const accWidth$0027 = accWidth + $6f9339dcb7ad0d09$export$13c2f47aa8a3882d(tabSize)(s) | 0;
                    if (maybeAccStr != null) {
                        const spcCount = tabSize - accWidth % tabSize | 0;
                        return [
                            maybeAccStr + $518fcccc33d36a20$export$606959e7ccb797f0(spcCount, " ") + s,
                            accWidth$0027 + spcCount
                        ];
                    } else return [
                        s,
                        accWidth$0027
                    ];
                };
            }), [
                void 0,
                initWidth
            ], str.split("\t"))[0])
        ))(line);
    };
}
function $1e919a34e720e03d$var$splitAtWidth(tabWidth, leftWidth, extraWidth, line) {
    const spaces = (n)=>$518fcccc33d36a20$export$606959e7ccb797f0(n, " ")
    ;
    const loop = (accWidth_mut, p_mut)=>{
        loop: while(true){
            const accWidth = accWidth_mut, p = p_mut;
            if (p >= $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).length) return $6f9339dcb7ad0d09$export$45b30bb84adefa7e($6f9339dcb7ad0d09$export$42f65d3844869e20(line) + $6f9339dcb7ad0d09$export$f587a4e4415f4276(line), "");
            else {
                const ccWidth = $6f9339dcb7ad0d09$export$de9247834912d11c(tabWidth, leftWidth + accWidth, $6f9339dcb7ad0d09$export$f587a4e4415f4276(line)[p].charCodeAt(0)) | 0;
                const diff = extraWidth - accWidth - ccWidth | 0;
                if (diff === 0) return $6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(p + 1)(line);
                else if (diff > 0) {
                    accWidth_mut = accWidth + ccWidth;
                    p_mut = p + 1;
                    continue loop;
                } else {
                    const line_1 = $6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(p)(line);
                    return $6f9339dcb7ad0d09$export$45b30bb84adefa7e($6f9339dcb7ad0d09$export$42f65d3844869e20(line_1) + spaces(diff + ccWidth), spaces($d70d15e757640036$export$87c665ad90b41cb3(diff)) + $518fcccc33d36a20$export$662d3818631fba36($6f9339dcb7ad0d09$export$f587a4e4415f4276(line_1), 1));
                }
            }
            break;
        }
    };
    return $1e919a34e720e03d$var$tabsToSpacesContent(tabWidth)(extraWidth < 1 ? line : loop(0, 0));
}
const $1e919a34e720e03d$var$wsRegex = $14cb28be03f8bba6$export$185802fd694ee1f5("^\\s*", 257);
class $1e919a34e720e03d$export$91352b5738766c8b extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "LineFmt",
            "MultiLineBlockFmt",
            "SingleLineBlockFmt"
        ];
    }
}
function $1e919a34e720e03d$export$6aca2ecd345ec739() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Parsing_SourceCode.CommentFormat", [], $1e919a34e720e03d$export$91352b5738766c8b, ()=>[
            [
                [
                    "Item1",
                    $3583e200a8ea3134$export$4984d4827624d577($6f9339dcb7ad0d09$export$ce355770cc1c8d90())
                ],
                [
                    "Item2",
                    $7d684f9c58c88b9e$export$d5481a1dd0e3648a
                ]
            ],
            [
                [
                    "Item1",
                    $6f9339dcb7ad0d09$export$ce355770cc1c8d90()
                ],
                [
                    "Item2",
                    $7d684f9c58c88b9e$export$5fe717259b8d6105($6f9339dcb7ad0d09$export$ce355770cc1c8d90())
                ],
                [
                    "Item3",
                    $7d684f9c58c88b9e$export$a0bfd80c70f2d46b($6f9339dcb7ad0d09$export$ce355770cc1c8d90())
                ],
                [
                    "Item4",
                    $7d684f9c58c88b9e$export$36bbd56a39d3f734
                ]
            ],
            [
                [
                    "Item1",
                    $6f9339dcb7ad0d09$export$ce355770cc1c8d90()
                ],
                [
                    "Item2",
                    $7d684f9c58c88b9e$export$14857d36df600d23($7d684f9c58c88b9e$export$36bbd56a39d3f734, $7d684f9c58c88b9e$export$36bbd56a39d3f734)
                ]
            ]
        ]
    );
}
function $1e919a34e720e03d$export$4f3edb900f275061(contentParser, prefixFn, ctx) {
    const wrapFLR = (_arg1)=>{
        if (_arg1.tag === 1) return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(1, $56dd5126021167c2$export$6b3f82f9cb6c0717((p)=>flpWrapper(p)
        , _arg1.fields[0]));
        else return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(0, $56dd5126021167c2$export$6b3f82f9cb6c0717(nlpWrapper, _arg1.fields[0]));
    };
    const flpWrapper = (maybeFLP)=>(_arg2)=>_arg2 instanceof $1e919a34e720e03d$export$4a5d01451b1af5a8 ? $56dd5126021167c2$export$90407f30cb0073b9(_arg2, $80fa799ee6d7bef5$export$841eb07a4e16193, flpWrapper(void 0)) : wrapFLR($7e4c281993e75c03$export$37721a79838ca038(maybeFLP, $ed39e963967a3eea$export$955fe82a9145db62(1, contentParser, [
                ctx
            ]))(_arg2))
    ;
    const nlpWrapper = (nlp)=>(_arg3)=>{
            if (_arg3 instanceof $1e919a34e720e03d$export$4a5d01451b1af5a8) return new $80fa799ee6d7bef5$export$3f8e93861147162e(1, flpWrapper(void 0)(_arg3));
            else {
                const _arg4 = nlp(_arg3);
                return _arg4.tag === 1 ? new $80fa799ee6d7bef5$export$3f8e93861147162e(1, $7e4c281993e75c03$export$c90763f2293d7e67($7e4c281993e75c03$export$871de8747c9eaa88(wrapFLR, _arg4.fields[0]), ()=>flpWrapper(void 0)(_arg3)
                )) : new $80fa799ee6d7bef5$export$3f8e93861147162e(0, wrapFLR(_arg4.fields[0]));
            }
        }
    ;
    return (arg_1)=>$56dd5126021167c2$export$bf30503277775ba1(prefixFn)(wrapFLR(contentParser(ctx, arg_1)))
    ;
}
function $1e919a34e720e03d$var$inspectAndProcessContent(contentParser, fmt, ctx) {
    let adjust, b, contentParser_1;
    const tabWidth = $80fa799ee6d7bef5$export$e97046137fc6b021(ctx).tabWidth | 0;
    let patternInput;
    switch(fmt.tag){
        case 1:
            {
                const bodyMarkers = fmt.fields[3];
                patternInput = [
                    fmt.fields[1],
                    $14cb28be03f8bba6$export$185802fd694ee1f5("^\\s*" + (bodyMarkers !== "" ? "[" + bodyMarkers + "]?\\s*" : ""), 257),
                    0
                ];
                break;
            }
        case 2:
            patternInput = [
                $c4c313718bcc393b$export$6e22c362a0406a2c(),
                $1e919a34e720e03d$var$wsRegex,
                0
            ];
            break;
        default:
            patternInput = [
                fmt.fields[0],
                $1e919a34e720e03d$var$wsRegex,
                fmt.fields[1]
            ];
    }
    const prefixRegex = patternInput[1];
    const initialIndent_1 = patternInput[2] | 0;
    const strWidth = (str)=>$6f9339dcb7ad0d09$export$6736e22116c64a4c(initialIndent_1, tabWidth, str)
    ;
    const patternInput_1 = $c4c313718bcc393b$export$9b19c2e3f2aab20f((minIndent, line)=>{
        const m = $14cb28be03f8bba6$export$4659b591c19bdf3d(prefixRegex, $6f9339dcb7ad0d09$export$f587a4e4415f4276(line));
        if ($6f9339dcb7ad0d09$export$f587a4e4415f4276(line).length === m[0].length) return [
            line,
            minIndent
        ];
        else if ($6f9339dcb7ad0d09$export$949cdd5cc1255afe($6f9339dcb7ad0d09$export$f587a4e4415f4276(line))) return [
            line,
            $ed39e963967a3eea$export$96ec731ed4dcb222((x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
            , minIndent, strWidth(m[0]))
        ];
        else return [
            $1e919a34e720e03d$export$8210e91f1ae07109(line),
            minIndent
        ];
    }, 2147483647, patternInput[0]);
    const indentIncrease = patternInput_1[1] | 0;
    const lines_3 = (adjust = (_arg1_mut)=>{
        adjust: while(true){
            const _arg1 = _arg1_mut;
            if (_arg1 instanceof $1e919a34e720e03d$export$4a5d01451b1af5a8) {
                if (strWidth($14cb28be03f8bba6$export$4659b591c19bdf3d(prefixRegex, $6f9339dcb7ad0d09$export$f587a4e4415f4276(_arg1))[0]) >= indentIncrease) {
                    _arg1_mut = $6f9339dcb7ad0d09$export$30daa94a794cb556(_arg1);
                    continue adjust;
                } else return [
                    _arg1,
                    void 0
                ];
            } else {
                const line_3 = $1e919a34e720e03d$var$tabsToSpacesContent(tabWidth)($1e919a34e720e03d$var$splitAtWidth(tabWidth, initialIndent_1, indentIncrease, _arg1));
                return [
                    line_3,
                    $6f9339dcb7ad0d09$export$7ee701e290d9865($6f9339dcb7ad0d09$export$f587a4e4415f4276(line_3)) ? void 0 : $6f9339dcb7ad0d09$export$42f65d3844869e20(line_3)
                ];
            }
            break;
        }
    }, $c4c313718bcc393b$export$9b19c2e3f2aab20f((maybePrefix, arg)=>{
        const tupledArg = adjust(arg);
        const _arg2 = [
            tupledArg[0],
            tupledArg[1]
        ];
        return [
            _arg2[0],
            $7e4c281993e75c03$export$37721a79838ca038(maybePrefix, _arg2[1])
        ];
    }, void 0, patternInput_1[0]))[0];
    const patternInput_3 = fmt.tag === 1 ? [
        new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, fmt.fields[0], $c5730ae5119245ea$export$c80b5fc7454ef206($c4c313718bcc393b$export$10d8903dec122b9d(lines_3, (b = $c4c313718bcc393b$export$6e22c362a0406a2c(), $7e4c281993e75c03$export$37721a79838ca038($7e4c281993e75c03$export$871de8747c9eaa88((l)=>$c4c313718bcc393b$export$439306a4dcaafbb9($1e919a34e720e03d$export$8210e91f1ae07109(l))
        , fmt.fields[2]), b))))),
        (x_13)=>x_13
    ] : fmt.tag === 2 ? [
        new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, fmt.fields[0], $c5730ae5119245ea$export$6e22c362a0406a2c()),
        fmt.fields[1]
    ] : [
        $1cbdac383b1632f3$export$da968afc9c9924d3(lines_3),
        (x_7)=>x_7
    ];
    $80fa799ee6d7bef5$export$9319570f173ed916($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (contentParser_1 = contentParser, (ctx_1)=>$1e919a34e720e03d$export$4f3edb900f275061(contentParser_1, patternInput_3[1], ctx_1)
    )), ctx)(patternInput_3[0]);
}
class $1e919a34e720e03d$var$LineCommentBlock extends $80fa799ee6d7bef5$export$12ac6b477b8fc5a1 {
    constructor(contentParser){
        super(new $80fa799ee6d7bef5$export$48808c686fe495c4(0));
        this.contentParser = contentParser;
    }
    ["Parsing_.NewBlock.output"](ctx, lines) {
        const _ = this;
        $1e919a34e720e03d$var$inspectAndProcessContent(_.contentParser, new $1e919a34e720e03d$export$91352b5738766c8b(0, lines, $6f9339dcb7ad0d09$export$13c2f47aa8a3882d($80fa799ee6d7bef5$export$e97046137fc6b021(ctx).tabWidth)($6f9339dcb7ad0d09$export$42f65d3844869e20($1cbdac383b1632f3$export$5fd5031fecdacec3(lines)))), ctx);
    }
}
function $1e919a34e720e03d$var$LineCommentBlock$reflection() {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("Parsing_SourceCode.LineCommentBlock", void 0, $1e919a34e720e03d$var$LineCommentBlock, $80fa799ee6d7bef5$export$3b837f8118293b74());
}
function $1e919a34e720e03d$var$LineCommentBlock_$ctor_C070904(contentParser) {
    return new $1e919a34e720e03d$var$LineCommentBlock(contentParser);
}
function $1e919a34e720e03d$export$5d080f5a78d4f5b3(marker, contentParser) {
    const rx = $14cb28be03f8bba6$export$185802fd694ee1f5("^(\\s*)" + marker, 257);
    const tryMatchLine = (line)=>$7e4c281993e75c03$export$871de8747c9eaa88((m)=>$6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(m[0].length)(line)
        , $56dd5126021167c2$export$d2d84020f5326cd0(rx)(line))
    ;
    const comment = $1e919a34e720e03d$var$LineCommentBlock_$ctor_C070904(contentParser);
    return (ctx)=>{
        let strWidth;
        const tabWidth = $80fa799ee6d7bef5$export$e97046137fc6b021(ctx).tabWidth | 0;
        strWidth = (str)=>$6f9339dcb7ad0d09$export$6736e22116c64a4c(0, tabWidth, str)
        ;
        const readRestOfBlock = (blockPrefixWidth)=>{
            const readLine = (line_1)=>{
                const matchValue = tryMatchLine(line_1);
                if (matchValue == null) return new $80fa799ee6d7bef5$export$3f8e93861147162e(1, void 0);
                else {
                    const line_2 = matchValue;
                    const linePrefixWidth = strWidth($6f9339dcb7ad0d09$export$42f65d3844869e20(line_2)) | 0;
                    if (linePrefixWidth === blockPrefixWidth) return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line_2, comment, readLine));
                    else return new $80fa799ee6d7bef5$export$3f8e93861147162e(1, $56dd5126021167c2$export$264e3233dc30e054(line_2, comment, readRestOfBlock(linePrefixWidth)));
                }
            };
            return readLine;
        };
        return (arg)=>$7e4c281993e75c03$export$871de8747c9eaa88((l)=>$56dd5126021167c2$export$264e3233dc30e054(l, comment, readRestOfBlock(strWidth($6f9339dcb7ad0d09$export$42f65d3844869e20(l))))
            , tryMatchLine(arg))
        ;
    };
}
class $1e919a34e720e03d$var$BlockCommentBlock extends $80fa799ee6d7bef5$export$12ac6b477b8fc5a1 {
    constructor(contentParser, bodyMarkers, defaultBodyMarker, prefixFn, mEndIndex){
        super(new $80fa799ee6d7bef5$export$48808c686fe495c4(0));
        this.contentParser = contentParser;
        this.bodyMarkers = bodyMarkers;
        this.prefixFn = prefixFn;
        this.mEndIndex = mEndIndex | 0;
    }
    ["Parsing_.NewBlock.output"](ctx, _arg1) {
        let matchValue, patternInput_1, patternInput, lastLine, str_1;
        const _ = this;
        const tLines = _arg1.fields[1];
        const hLine = _arg1.fields[0];
        const mkFirstLine = (p)=>{
            let str;
            if (!(str = $6f9339dcb7ad0d09$export$f587a4e4415f4276(hLine), $6f9339dcb7ad0d09$export$949cdd5cc1255afe($518fcccc33d36a20$export$662d3818631fba36(str, 0, $ed39e963967a3eea$export$96ec731ed4dcb222((x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
            , str.length, p))))) return $1e919a34e720e03d$export$8210e91f1ae07109(hLine);
            else return $1e919a34e720e03d$var$tabsToSpacesContent($80fa799ee6d7bef5$export$e97046137fc6b021(ctx).tabWidth)(hLine);
        };
        $1e919a34e720e03d$var$inspectAndProcessContent(_.contentParser, (matchValue = $1cbdac383b1632f3$export$88e0dae599377b39(tLines), matchValue != null ? (patternInput_1 = (patternInput = $1cbdac383b1632f3$export$edb1c8e715f3944e(matchValue), (lastLine = patternInput.fields[0], (str_1 = $6f9339dcb7ad0d09$export$f587a4e4415f4276(lastLine), $6f9339dcb7ad0d09$export$949cdd5cc1255afe($518fcccc33d36a20$export$662d3818631fba36(str_1, 0, $ed39e963967a3eea$export$96ec731ed4dcb222((x_1, y_1)=>$ed39e963967a3eea$export$591cc4a8025fba16(x_1, y_1)
        , str_1.length, _.mEndIndex)))) ? [
            tLines,
            void 0
        ] : [
            $c5730ae5119245ea$export$66c1ae025e96b4bc(patternInput.fields[1]),
            lastLine
        ])), new $1e919a34e720e03d$export$91352b5738766c8b(1, mkFirstLine($6f9339dcb7ad0d09$export$f587a4e4415f4276(hLine).length), patternInput_1[0], patternInput_1[1], _.bodyMarkers)) : new $1e919a34e720e03d$export$91352b5738766c8b(2, mkFirstLine(_.mEndIndex), _.prefixFn)), ctx);
    }
}
function $1e919a34e720e03d$var$BlockCommentBlock$reflection() {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("Parsing_SourceCode.BlockCommentBlock", void 0, $1e919a34e720e03d$var$BlockCommentBlock, $80fa799ee6d7bef5$export$3b837f8118293b74());
}
function $1e919a34e720e03d$var$BlockCommentBlock_$ctor_Z74C985B2(contentParser, bodyMarkers, defaultBodyMarker, prefixFn, mEndIndex) {
    return new $1e919a34e720e03d$var$BlockCommentBlock(contentParser, bodyMarkers, defaultBodyMarker, prefixFn, mEndIndex);
}
function $1e919a34e720e03d$var$mkPrefixFn(start, len, rep, pre) {
    return $518fcccc33d36a20$export$662d3818631fba36(pre, 0, start) + rep + $518fcccc33d36a20$export$662d3818631fba36(pre, start + len);
}
function $1e919a34e720e03d$export$f2ae215066c4835a(bodyMarkers, defaultBodyMarker, startMarker, endMarker, contentParser) {
    const startRegex = $14cb28be03f8bba6$export$185802fd694ee1f5("^\\s*" + startMarker + "\\s*", 257);
    const comment = (prefixFn, endMatchIndex)=>$1e919a34e720e03d$var$BlockCommentBlock_$ctor_Z74C985B2(contentParser, bodyMarkers, defaultBodyMarker, prefixFn, endMatchIndex)
    ;
    return (_ctx)=>(line_1)=>{
            let startLine;
            return $7e4c281993e75c03$export$871de8747c9eaa88((startLine = line_1, (m)=>{
                let prefixFn_1;
                const rep = $6f9339dcb7ad0d09$export$c3ab302d598ba56c((m.length === 1 ? true : m[1] === "") ? m[0] : $518fcccc33d36a20$export$77ad94ebf1c2b9ed(m[0], m[1], $518fcccc33d36a20$export$606959e7ccb797f0(m[1].length, " "))) + defaultBodyMarker;
                const start = $6f9339dcb7ad0d09$export$42f65d3844869e20(startLine).length | 0;
                const len = m[0].length | 0;
                prefixFn_1 = (pre_1)=>$1e919a34e720e03d$var$mkPrefixFn(start, len, rep, pre_1)
                ;
                const defComment = comment(prefixFn_1, 2147483647);
                const endRegex = $14cb28be03f8bba6$export$185802fd694ee1f5($5a541a3f8220d610$export$93e2b83da34ff82a($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (tupledArg)=>{
                    const i = tupledArg[0] | 0;
                    return (s)=>[
                            i + 1,
                            $518fcccc33d36a20$export$77ad94ebf1c2b9ed(tupledArg[1], "$" + $ed39e963967a3eea$export$afbd86327cbebb03(i), s)
                        ]
                    ;
                }), [
                    0,
                    endMarker
                ], m)[1], 257);
                const testForEnd = (line)=>{
                    const m_1 = $14cb28be03f8bba6$export$4659b591c19bdf3d(endRegex, $6f9339dcb7ad0d09$export$f587a4e4415f4276(line));
                    if (m_1 != null) return $56dd5126021167c2$export$64a8896c2db4bef4(line, comment(prefixFn_1, m_1.index));
                    else return $56dd5126021167c2$export$264e3233dc30e054(line, defComment, (arg)=>new $80fa799ee6d7bef5$export$3f8e93861147162e(0, testForEnd(arg))
                    );
                };
                return testForEnd($6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(m[0].length)(startLine));
            }), $56dd5126021167c2$export$d2d84020f5326cd0(startRegex)(line_1));
        }
    ;
}
function $1e919a34e720e03d$export$a03f62af6e933a3(commentParsers) {
    let arg2_0_1, clo1;
    return $80fa799ee6d7bef5$export$71d5049186c62ec9($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (arg2_0_1 = (clo1 = $c4c313718bcc393b$export$533b26079ad0b4b($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $ed39e963967a3eea$export$880b1e43568f4c50((x)=>(y)=>(a)=>(b)=>{
                    const matchValue = x(a, b);
                    return matchValue == null ? y(a, b) : matchValue;
                }
    , [
        [
            0,
            2
        ],
        [
            0,
            2
        ]
    ])), commentParsers), (arg10)=>{
        const clo2 = clo1(arg10);
        return (arg20)=>clo2(arg20)
        ;
    }), (a_1)=>(b_1)=>{
            const matchValue_1 = arg2_0_1(a_1)(b_1);
            return matchValue_1 != null ? matchValue_1 : ((_arg1, line)=>$56dd5126021167c2$export$64a8896c2db4bef4(line, $80fa799ee6d7bef5$export$841eb07a4e16193)
            )(a_1, b_1);
        }
    )));
}













function $92aff5b65a56cae9$var$mdMarker(marker) {
    return $14cb28be03f8bba6$export$185802fd694ee1f5("^ {0,3}" + marker, 257);
}
function $92aff5b65a56cae9$var$defaultPara(_ctx) {
    const lineBreakEnd = $14cb28be03f8bba6$export$185802fd694ee1f5("(\\\\|\\s{2}|\u003cbr/?\u003e)$", 257);
    const parseLine = (line)=>{
        const line_1 = $6f9339dcb7ad0d09$export$6c40cc0b77eab95d()(2147483647)(line);
        if ($56dd5126021167c2$export$b74c33566721f70f(lineBreakEnd)(line_1)) return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(1, $80fa799ee6d7bef5$export$3937884c04eca177(line_1, $80fa799ee6d7bef5$export$7f3a03c5cf10c42a, true, void 0));
        else return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(0, $80fa799ee6d7bef5$export$3937884c04eca177(line_1, $80fa799ee6d7bef5$export$7f3a03c5cf10c42a, true, (arg)=>new $80fa799ee6d7bef5$export$3f8e93861147162e(0, parseLine(arg))
        ));
    };
    return parseLine;
}
function $92aff5b65a56cae9$var$atxHeading(_ctx, line) {
    if ($56dd5126021167c2$export$b74c33566721f70f($92aff5b65a56cae9$var$mdMarker("#{1,6} "))(line)) return $56dd5126021167c2$export$64a8896c2db4bef4(line, $80fa799ee6d7bef5$export$841eb07a4e16193);
    else return void 0;
}
function $92aff5b65a56cae9$var$setextUnderline(_ctx) {
    const rx = $92aff5b65a56cae9$var$mdMarker("(?:=+|-+)\\s*$");
    return (arg)=>$7e4c281993e75c03$export$871de8747c9eaa88((tupledArg)=>$56dd5126021167c2$export$64a8896c2db4bef4(tupledArg[1], $80fa799ee6d7bef5$export$841eb07a4e16193)
        , $56dd5126021167c2$export$44cff9a5bbe58c3f(rx, arg))
    ;
}
function $92aff5b65a56cae9$var$fencedCode(_ctx) {
    const parseLine = (markerLength, rxEnd, line)=>{
        const matchValue = $56dd5126021167c2$export$d2d84020f5326cd0(rxEnd)(line);
        let pattern_matching_result;
        if (matchValue != null) {
            if (matchValue[1].length >= markerLength) pattern_matching_result = 0;
            else pattern_matching_result = 1;
        } else pattern_matching_result = 1;
        switch(pattern_matching_result){
            case 0:
                return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$64a8896c2db4bef4(line, $80fa799ee6d7bef5$export$841eb07a4e16193));
            case 1:
                return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, parseLine, [
                    markerLength,
                    rxEnd
                ])));
        }
    };
    const tryStart = (rxStart, rxEnd_1, line_1)=>$7e4c281993e75c03$export$871de8747c9eaa88((m_2)=>$56dd5126021167c2$export$264e3233dc30e054(line_1, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, parseLine, [
                m_2[1].length,
                rxEnd_1
            ]))
        , $56dd5126021167c2$export$d2d84020f5326cd0(rxStart)(line_1))
    ;
    const arg1_0_1 = $ed39e963967a3eea$export$955fe82a9145db62(1, tryStart, [
        $92aff5b65a56cae9$var$mdMarker("(~{3,})"),
        $92aff5b65a56cae9$var$mdMarker("(~{3,})\\s*$")
    ]);
    const arg2_0_1 = $ed39e963967a3eea$export$955fe82a9145db62(1, tryStart, [
        $92aff5b65a56cae9$var$mdMarker("(`{3,})[^`]*$"),
        $92aff5b65a56cae9$var$mdMarker("(`{3,})\\s*$")
    ]);
    return (a)=>{
        const matchValue_1 = arg1_0_1(a);
        return matchValue_1 == null ? arg2_0_1(a) : matchValue_1;
    };
}
function $92aff5b65a56cae9$var$htmlType1To6(ctx) {
    const matchEnd = (rx, fromPos, line)=>{
        if ($14cb28be03f8bba6$export$4659b591c19bdf3d(rx, $6f9339dcb7ad0d09$export$f587a4e4415f4276(line), fromPos) != null) return $56dd5126021167c2$export$64a8896c2db4bef4(line, $80fa799ee6d7bef5$export$841eb07a4e16193);
        else return $56dd5126021167c2$export$264e3233dc30e054(line, $80fa799ee6d7bef5$export$841eb07a4e16193, (arg)=>new $80fa799ee6d7bef5$export$3f8e93861147162e(0, matchEnd(rx, 0, arg))
        );
    };
    const clo2 = $c4c313718bcc393b$export$533b26079ad0b4b($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $ed39e963967a3eea$export$880b1e43568f4c50((x_3)=>(y)=>(a)=>(b)=>{
                    const matchValue = x_3(a, b);
                    return matchValue == null ? y(a, b) : matchValue;
                }
    , [
        [
            0,
            2
        ],
        [
            0,
            2
        ]
    ])), $c5730ae5119245ea$export$871de8747c9eaa88((tupledArg)=>{
        const patternInput = [
            $92aff5b65a56cae9$var$mdMarker(tupledArg[0]),
            $14cb28be03f8bba6$export$185802fd694ee1f5(tupledArg[1], 257)
        ];
        return (_ctx)=>(line_1)=>{
                const m = $14cb28be03f8bba6$export$4659b591c19bdf3d(patternInput[0], $6f9339dcb7ad0d09$export$f587a4e4415f4276(line_1));
                return !(m != null) ? void 0 : matchEnd(patternInput[1], m[0].length, line_1);
            }
        ;
    }, $c5730ae5119245ea$export$cb197a913f6bb809([
        [
            "\u003c(script|pre|style)( |\u003e|$)",
            "\u003c/(script|pre|style)\u003e"
        ],
        [
            "\u003c!--",
            "--\u003e"
        ],
        [
            "\u003c\\?",
            "\\?\u003e"
        ],
        [
            "\u003c![A-Z]",
            "\u003e"
        ],
        [
            "\u003c!\\[CDATA\\[",
            "]]\u003e"
        ],
        [
            "\u003c/?(address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(\\s|/?\u003e|$)",
            "^\\s*$"
        ]
    ])))(ctx);
    return (arg20)=>clo2(arg20)
    ;
}
function $92aff5b65a56cae9$var$indentedCode(_ctx) {
    const parseLine = (line)=>{
        if (!$56dd5126021167c2$export$7554718ac998a8a4(line) && $56dd5126021167c2$export$205d7d1171b4f587(line) < 4) return new $80fa799ee6d7bef5$export$3f8e93861147162e(1, void 0);
        else return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line, $80fa799ee6d7bef5$export$841eb07a4e16193, parseLine));
    };
    return (line_1)=>{
        if ($56dd5126021167c2$export$7554718ac998a8a4(line_1)) return void 0;
        else {
            const matchValue = parseLine(line_1);
            return matchValue.tag === 1 ? void 0 : matchValue.fields[0];
        }
    };
}
function $92aff5b65a56cae9$var$table(_ctx) {
    const rxCellsRow = $92aff5b65a56cae9$var$mdMarker("\\S.*?[^\\\\]\\|\\s*\\S");
    const rxSeparatorRow = $92aff5b65a56cae9$var$mdMarker("[|:-][ |:-]+$");
    const isSeparatorRow = (arg10)=>$6f9339dcb7ad0d09$export$cfa968944e936c15((c)=>{
            if ($14cb28be03f8bba6$export$b74c33566721f70f(rxSeparatorRow, c) && c.indexOf("|") >= 0) return c.indexOf("-") >= 0;
            else return false;
        }, arg10)
    ;
    const parseNext = (has2Lines, hasSeparator, line)=>{
        if (!$56dd5126021167c2$export$b74c33566721f70f(rxCellsRow)(line)) {
            if (has2Lines && hasSeparator) return new $80fa799ee6d7bef5$export$3f8e93861147162e(1, void 0);
            else return new $80fa799ee6d7bef5$export$3f8e93861147162e(1, void 0);
        } else {
            const hasSeparator_1 = hasSeparator ? true : isSeparatorRow(line);
            return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(0, $80fa799ee6d7bef5$export$3937884c04eca177(line, hasSeparator_1 ? $80fa799ee6d7bef5$export$841eb07a4e16193 : $80fa799ee6d7bef5$export$7f3a03c5cf10c42a, !hasSeparator_1, $ed39e963967a3eea$export$955fe82a9145db62(1, parseNext, [
                true,
                hasSeparator_1
            ]))));
        }
    };
    return (arg)=>$7e4c281993e75c03$export$871de8747c9eaa88((tupledArg)=>{
            const line_2 = tupledArg[1];
            return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(0, $80fa799ee6d7bef5$export$3937884c04eca177(line_2, $80fa799ee6d7bef5$export$7f3a03c5cf10c42a, true, $ed39e963967a3eea$export$955fe82a9145db62(1, parseNext, [
                false,
                isSeparatorRow(line_2)
            ])));
        }, $56dd5126021167c2$export$44cff9a5bbe58c3f(rxCellsRow, arg))
    ;
}
function $92aff5b65a56cae9$var$thematicBreak(_ctx) {
    const rx = $92aff5b65a56cae9$var$mdMarker("(?:\\*\\s*\\*\\s*(?:\\*\\s*)+|-\\s*-\\s*(?:-\\s*)+|_\\s*_\\s*(?:_\\s*)+)$");
    return (arg)=>$7e4c281993e75c03$export$871de8747c9eaa88((tupledArg)=>$56dd5126021167c2$export$64a8896c2db4bef4(tupledArg[1], $80fa799ee6d7bef5$export$841eb07a4e16193)
        , $56dd5126021167c2$export$44cff9a5bbe58c3f(rx, arg))
    ;
}
function $92aff5b65a56cae9$export$34e0f9847d4c02dd(prefixFn, lineTest, ctx) {
    const wrapFLR = (_arg1)=>{
        if (_arg1.tag === 1) {
            const r_1 = _arg1.fields[0];
            return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(1, $56dd5126021167c2$export$6b3f82f9cb6c0717((p)=>flpWrapper($80fa799ee6d7bef5$export$d3e082395ddc82a1(r_1))(p)
            , r_1));
        } else {
            const r = _arg1.fields[0];
            return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(0, $56dd5126021167c2$export$6b3f82f9cb6c0717(nlpWrapper($80fa799ee6d7bef5$export$d3e082395ddc82a1(r)), r));
        }
    };
    const flpWrapper = (wasPara)=>(maybeInnerParser)=>(line)=>{
                const matchValue = lineTest(line);
                if (matchValue == null) {
                    const matchValue_1 = [
                        maybeInnerParser,
                        wasPara
                    ];
                    let pattern_matching_result, p_1;
                    if (matchValue_1[0] != null) {
                        if (matchValue_1[1]) {
                            pattern_matching_result = 0;
                            p_1 = matchValue_1[0];
                        } else pattern_matching_result = 1;
                    } else pattern_matching_result = 1;
                    switch(pattern_matching_result){
                        case 0:
                            return wrapFLR(p_1(line));
                        case 1:
                            return $7e4c281993e75c03$export$37721a79838ca038(maybeInnerParser, $92aff5b65a56cae9$var$getNewBlock(ctx))(line);
                    }
                } else {
                    const line_1 = matchValue;
                    return wrapFLR($7e4c281993e75c03$export$37721a79838ca038(maybeInnerParser, $92aff5b65a56cae9$var$getNewBlock(ctx))(line_1));
                }
            }
    ;
    const nlpWrapper = (wasPara_1)=>(innerParser)=>(line_2)=>{
                const matchValue_2 = lineTest(line_2);
                if (matchValue_2 == null) {
                    if (!wasPara_1) return new $80fa799ee6d7bef5$export$3f8e93861147162e(1, void 0);
                    else if (matchValue_2 == null) {
                        const _arg3 = innerParser(line_2);
                        return _arg3.tag === 1 ? new $80fa799ee6d7bef5$export$3f8e93861147162e(1, _arg3.fields[0]) : new $80fa799ee6d7bef5$export$3f8e93861147162e(0, wrapFLR(_arg3.fields[0]));
                    } else throw new Error("Match failure");
                } else {
                    const line_3 = matchValue_2;
                    const _arg2 = innerParser(line_3);
                    return _arg2.tag === 1 ? new $80fa799ee6d7bef5$export$3f8e93861147162e(1, wrapFLR($7e4c281993e75c03$export$c90763f2293d7e67(_arg2.fields[0], ()=>$92aff5b65a56cae9$var$getNewBlock(ctx)(line_3)
                    ))) : new $80fa799ee6d7bef5$export$3f8e93861147162e(0, wrapFLR(_arg2.fields[0]));
                }
            }
    ;
    return (arg_1)=>$56dd5126021167c2$export$bf30503277775ba1(prefixFn)(wrapFLR($92aff5b65a56cae9$var$getNewBlock(ctx)(arg_1)))
    ;
}
function $92aff5b65a56cae9$var$blockquote(ctx) {
    const findMarker = (line)=>$7e4c281993e75c03$export$871de8747c9eaa88((c)=>$6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(c[0].length)(line)
        , $56dd5126021167c2$export$d2d84020f5326cd0($92aff5b65a56cae9$var$mdMarker("\u003e ?"))(line))
    ;
    return (line_1)=>{
        const x_4 = findMarker(line_1);
        return $7e4c281993e75c03$export$871de8747c9eaa88($92aff5b65a56cae9$export$34e0f9847d4c02dd((x_3)=>x_3
        , findMarker, ctx), x_4);
    };
}
function $92aff5b65a56cae9$var$footnote(ctx) {
    return (line_1)=>$3583e200a8ea3134$export$e5403e43878ec1b6($3583e200a8ea3134$export$a75d1723e6bda2ec, $56dd5126021167c2$export$d2d84020f5326cd0($92aff5b65a56cae9$var$mdMarker("(\\[\\^\\S+?\\]:)( +)"))(line_1), (_arg4)=>{
            const m = _arg4;
            const prefixFn = $56dd5126021167c2$export$9cf90c14ef21f464($6f9339dcb7ad0d09$export$d6fc32550865b077(line_1), m[0].length, 0, "    ");
            const line_2 = $6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(m[0].length)(line_1);
            return $3583e200a8ea3134$export$ba4da117d7bdef59($3583e200a8ea3134$export$a75d1723e6bda2ec, $92aff5b65a56cae9$export$34e0f9847d4c02dd(prefixFn, (line)=>{
                const minIndent = 4;
                if (!$56dd5126021167c2$export$7554718ac998a8a4(line) && $56dd5126021167c2$export$205d7d1171b4f587(line) < minIndent) return void 0;
                else return $6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(minIndent)(line);
            }, ctx)(line_2));
        })
    ;
}
function $92aff5b65a56cae9$export$94b853d6e03d93b0(ctx) {
    const rxLabel = $92aff5b65a56cae9$var$mdMarker("\\[\\s*\\S.*?\\]:\\s*");
    const wrapFLR = (_arg5)=>{
        if (_arg5.tag === 1) return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(1, $56dd5126021167c2$export$6b3f82f9cb6c0717((_arg1)=>flpWrapper
        , _arg5.fields[0]));
        else return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(0, $56dd5126021167c2$export$6b3f82f9cb6c0717(nlpWrapper, _arg5.fields[0]));
    };
    const flpWrapper = (line)=>{
        const matchValue = $56dd5126021167c2$export$d2d84020f5326cd0(rxLabel)(line);
        if (matchValue == null) {
            const matchValue_1 = $92aff5b65a56cae9$var$tryParaInterrupters(ctx)(line);
            if (matchValue_1 == null) return wrapFLR($92aff5b65a56cae9$var$defaultPara(ctx)(line));
            else return matchValue_1;
        } else return onMatch(line)(matchValue);
    };
    const nlpWrapper = (paraParser)=>(line_1)=>{
            const matchValue_2 = $56dd5126021167c2$export$d2d84020f5326cd0(rxLabel)(line_1);
            if (matchValue_2 == null) {
                const matchValue_3 = $92aff5b65a56cae9$var$tryParaInterrupters(ctx)(line_1);
                if (matchValue_3 == null) {
                    const matchValue_4 = paraParser(line_1);
                    return matchValue_4.tag === 1 ? new $80fa799ee6d7bef5$export$3f8e93861147162e(1, matchValue_4.fields[0]) : new $80fa799ee6d7bef5$export$3f8e93861147162e(0, wrapFLR(matchValue_4.fields[0]));
                } else return new $80fa799ee6d7bef5$export$3f8e93861147162e(1, matchValue_3);
            } else return new $80fa799ee6d7bef5$export$3f8e93861147162e(1, onMatch(line_1)(matchValue_2));
        }
    ;
    const onMatch = (line_2)=>(m_2)=>$56dd5126021167c2$export$bf30503277775ba1($56dd5126021167c2$export$9cf90c14ef21f464($6f9339dcb7ad0d09$export$d6fc32550865b077(line_2), $56dd5126021167c2$export$205d7d1171b4f587(line_2), 0, "    "))(wrapFLR($92aff5b65a56cae9$var$defaultPara(ctx)($56dd5126021167c2$export$1f16eb0deddc4c6d(line_2))))
    ;
    return (line_3)=>{
        const x_1 = $56dd5126021167c2$export$d2d84020f5326cd0(rxLabel)(line_3);
        return $7e4c281993e75c03$export$871de8747c9eaa88(onMatch(line_3), x_1);
    };
}
function $92aff5b65a56cae9$var$listItem(ctx) {
    const rx = $92aff5b65a56cae9$var$mdMarker("([-+*]|[0-9]{1,9}[.)])( +)");
    return (line_1)=>$3583e200a8ea3134$export$e5403e43878ec1b6($3583e200a8ea3134$export$a75d1723e6bda2ec, $56dd5126021167c2$export$d2d84020f5326cd0(rx)(line_1), (_arg6)=>{
            let childIndent;
            const m = _arg6;
            const childIndent_1 = (m[2].length <= 4 ? m[0].length : m[0].length - m[2].length + 1) | 0;
            const prefixFn = $56dd5126021167c2$export$b954b88ed40d75a0(line_1, childIndent_1);
            const line_2 = $6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(childIndent_1)(line_1);
            return $3583e200a8ea3134$export$ba4da117d7bdef59($3583e200a8ea3134$export$a75d1723e6bda2ec, $92aff5b65a56cae9$export$34e0f9847d4c02dd(prefixFn, (childIndent = childIndent_1 | 0, (line)=>!$56dd5126021167c2$export$7554718ac998a8a4(line) && $56dd5126021167c2$export$205d7d1171b4f587(line) < childIndent ? void 0 : $6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(childIndent)(line)
            ), ctx)(line_2));
        })
    ;
}
const $92aff5b65a56cae9$var$tryParaInterrupters = (()=>{
    const clo1 = $c4c313718bcc393b$export$533b26079ad0b4b($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $ed39e963967a3eea$export$880b1e43568f4c50((x)=>(y)=>(a)=>(b)=>{
                    const matchValue = x(a, b);
                    return matchValue == null ? y(a, b) : matchValue;
                }
    , [
        [
            0,
            2
        ],
        [
            0,
            2
        ]
    ])), [
        (_ctx)=>(line)=>$56dd5126021167c2$export$d50d28ce3ab2a612(_ctx, line)
        ,
        (_ctx_1)=>(line_1)=>$92aff5b65a56cae9$var$atxHeading(_ctx_1, line_1)
        ,
        (_ctx_2)=>$92aff5b65a56cae9$var$setextUnderline(_ctx_2)
        ,
        (_ctx_3)=>$92aff5b65a56cae9$var$thematicBreak(_ctx_3)
        ,
        (ctx)=>$92aff5b65a56cae9$var$blockquote(ctx)
        ,
        (ctx_1)=>$92aff5b65a56cae9$var$footnote(ctx_1)
        ,
        (ctx_2)=>$92aff5b65a56cae9$var$listItem(ctx_2)
        ,
        (_ctx_4)=>$92aff5b65a56cae9$var$fencedCode(_ctx_4)
        ,
        (ctx_3)=>$92aff5b65a56cae9$var$htmlType1To6(ctx_3)
    ]);
    return (arg10)=>{
        const clo2 = clo1(arg10);
        return (arg20)=>clo2(arg20)
        ;
    };
})();
const $92aff5b65a56cae9$var$tryContentBlocks = (()=>{
    const clo1 = $c4c313718bcc393b$export$533b26079ad0b4b($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $ed39e963967a3eea$export$880b1e43568f4c50((x)=>(y)=>(a)=>(b)=>{
                    const matchValue = x(a, b);
                    return matchValue == null ? y(a, b) : matchValue;
                }
    , [
        [
            0,
            2
        ],
        [
            0,
            2
        ]
    ])), [
        (_ctx)=>(line)=>$56dd5126021167c2$export$d50d28ce3ab2a612(_ctx, line)
        ,
        (_ctx_1)=>(line_1)=>$92aff5b65a56cae9$var$atxHeading(_ctx_1, line_1)
        ,
        (_ctx_2)=>$92aff5b65a56cae9$var$thematicBreak(_ctx_2)
        ,
        (ctx)=>$92aff5b65a56cae9$var$blockquote(ctx)
        ,
        (ctx_1)=>$92aff5b65a56cae9$var$footnote(ctx_1)
        ,
        (ctx_2)=>$92aff5b65a56cae9$var$listItem(ctx_2)
        ,
        (_ctx_3)=>$92aff5b65a56cae9$var$fencedCode(_ctx_3)
        ,
        (ctx_3)=>$92aff5b65a56cae9$var$htmlType1To6(ctx_3)
        ,
        (ctx_4)=>$92aff5b65a56cae9$export$94b853d6e03d93b0(ctx_4)
        ,
        (_ctx_4)=>$92aff5b65a56cae9$var$indentedCode(_ctx_4)
        ,
        (_ctx_5)=>$92aff5b65a56cae9$var$table(_ctx_5)
    ]);
    return (arg10)=>{
        const clo2 = clo1(arg10);
        return (arg20)=>clo2(arg20)
        ;
    };
})();
function $92aff5b65a56cae9$var$getNewBlock(ctx) {
    const paragraphFallback = (ctx_1)=>(arg)=>{
            const _arg7 = $92aff5b65a56cae9$var$defaultPara(ctx_1)(arg);
            return _arg7.tag === 1 ? new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(1, $80fa799ee6d7bef5$export$3937884c04eca177($80fa799ee6d7bef5$export$f879e19c0d51349e(_arg7.fields[0]), $80fa799ee6d7bef5$export$7f3a03c5cf10c42a, true, parseLineAfterLineBreak)) : new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(0, $80fa799ee6d7bef5$export$3937884c04eca177($80fa799ee6d7bef5$export$f879e19c0d51349e(_arg7.fields[0]), $80fa799ee6d7bef5$export$7f3a03c5cf10c42a, true, parseOtherLine));
        }
    ;
    const parseLineAfterLineBreak = (line)=>{
        const b = line;
        const a = ctx;
        const matchValue = $92aff5b65a56cae9$var$tryContentBlocks(a)(b);
        if (matchValue != null) return matchValue;
        else return paragraphFallback(a)(b);
    };
    const parseOtherLine = (line_1)=>{
        const matchValue_1 = $92aff5b65a56cae9$var$tryParaInterrupters(ctx)(line_1);
        if (matchValue_1 == null) return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, paragraphFallback(ctx)(line_1));
        else return new $80fa799ee6d7bef5$export$3f8e93861147162e(1, matchValue_1);
    };
    return parseLineAfterLineBreak;
}
function $92aff5b65a56cae9$export$199d64cd116a5491(ctx) {
    const restOfContent = (ctx_1)=>$92aff5b65a56cae9$export$34e0f9847d4c02dd((x)=>x
        , (arg0)=>arg0
        , ctx_1)
    ;
    let yamlHeader;
    const patternInput = [
        $14cb28be03f8bba6$export$185802fd694ee1f5("^---\\s*$", 257),
        $14cb28be03f8bba6$export$185802fd694ee1f5("^---", 257)
    ];
    const parseLine = (line)=>{
        const matchValue = $56dd5126021167c2$export$d2d84020f5326cd0(patternInput[1])(line);
        if (matchValue == null) return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line, $80fa799ee6d7bef5$export$841eb07a4e16193, parseLine));
        else return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$90407f30cb0073b9(line, $80fa799ee6d7bef5$export$841eb07a4e16193, restOfContent(ctx)));
    };
    yamlHeader = (line_1)=>$7e4c281993e75c03$export$871de8747c9eaa88((_arg1)=>$56dd5126021167c2$export$264e3233dc30e054(line_1, $80fa799ee6d7bef5$export$841eb07a4e16193, parseLine)
        , $56dd5126021167c2$export$d2d84020f5326cd0(patternInput[0])(line_1))
    ;
    return (line_2)=>$7e4c281993e75c03$export$c90763f2293d7e67(yamlHeader(line_2), ()=>restOfContent(ctx)(line_2)
        )
    ;
}











const $fd2440856c2e5912$export$10ebd8144ce3e75a = "#C$&$&$$$$$$%-%&%=$$$$$$=$$$$D$$'$$$$$$$$$$$$%$$%$$$$&$:$*;$+$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%$$$$$$$$$$$$$$$%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%$$$$&%$$$%$&%'$%$&&%$%$$$$$%$$%$$%$&$$$%%$$&'$$$$$$$$$$$$$$$$$$$$$$$$%$$$$$$$$$$$$$$$$$%$$$$$&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*%$%%$$'$$$$$$$$h$>5'/1(*$$$4$$$$$$$$%$&$$'%$$&$$$%$4$,F$%&&$$$$$$$$$$$$$$$$$$$$$$$($$$$$%%VS$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$(%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%$$$$$$$$$$$$%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$I%$)L$$%%$$P$$$%$%$$+>''%.)&%$%%.$$$%C$-8-'%$$$*$$)%%$'%-&%$1$$$$A>%|.$1-D,%$&$%$%9'$,$&$(%2$<&%$$.X8$5.2$C$Y$$$$&+'$%$*-%%-$$2$%$+%%%9$*$$&'%$$&'%%%%$$+$'%$&%%-%%)$$$$$%%$$)'%%9$*$%$%$%%$$&%'%%&&$*'$$*-%&$$-%$$,$&$9$*$%$(%$$&($%$$%$%$2%%%-$$*$)$$%$+%%%9$*$%$(%$$$$$'%%%%$*%$'%$&%%-$$)-$$$)&&$'&%$$$%&%&&&/'%$%&&$&$%$)$1-&)$$($&$+$&$:$3&$&'$&$'*%$&(%%%-*$*$$$%$+$&$:$-$(%$$$$($$%$%%*%*$$%%%-$%0%%,$&$L%$&'$&$&$$$'&$*&%%-,$)$$%$5&;$,$$%*&$'&&$$$+)-%%$/S$%*'$)$+$-%H%$$$($;$$$-$%,$%($$$)%-%'C$&2$$&%)--$$$$$$$$$$%+$G'1$($%(.$G$+$)$%('%HN%'$)$%%%$-))%%'&$&%*&'0$%%)$$$-&$%I$$($%N$$&Ŭ$'%*$$$'%L$'%D$'%*$$$'%2$\\$'%f%&,7&3-)y%)%$ʏ$$4$=$$&n&&+*0$'&.5&%,5%/0$&$%/W%$*+$%.&$&$$$%-)-))$'&$$-)F$X*(%E$$(i-B$&'%&'%$)&'$&%-A%(.O'=)-$&E:%%$%%X$$$*$$$$%+)-%$-)-)*$)%1$%b'$R$$($$($%*'-*-,,&%$A$'%%$&%-O$$%&$$&%+'G++%%&(-&&-A)%,*N%&++&$0$*'$)$%$%$(Ob0$EH]$($$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$,$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$,+)%)%++++)%)%+$$$$$$$$++1%++++++($%'$$$&&$%'$&'%%'$&+(&%&$%'$%$.()%$$$%$$$+$$($,$$'%&$$$.$$$-$($-$$%)&$$$-&$$$0&C30'$&/2%$'$%$&%&$$$%$()$$$$$$'$$'$'$%%%($'$$%$$3F$$'$%'((%'$%$%$*$B%%$$$Bį+$$$$7%*$$t$A<K)h<.8_q9Ú$,$Y+$ě$$$$$$$$$$$$$$AO($$B$$$$$$$$$$3ģ¦$$$$$$$$$$$$$$$$$$$$$$b$$$$C$$ĥS8%)J%C$R$R$$$&%$$$$$$'$$%$)%&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%)$$$$&$$('$%I$$($%[*$$1$:,*$*$*$*$*$*$*$*$C%$$$$&$$$$$,$%$$$$%$$$$$$$$$$($-%'$$$0%$P=$|/ù=/'$&$$$$$$$$$$$$$$%$$$$$$$$$$%$,'%$(%&$$$%$y%%%%$$}$&$(N$$%'-CG/3B$-A+$2C-J2ţ᧣c删&8$Қ&Z,K)%į$&3-%7$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&$-$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%%i-%)+:,%$$$$$$$$$$$$$&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$+$$$$%$$$$$$$$$$%$$$$$$$$&$$$$$$$$$$$$$$$$$$$$($($$$$$$$$$$$%$$'$$$M$$$%$*$&$'$:%%$'$&)%$$)W'+%U3%+%-)5)&$$%$-?+%:.%.$@&&$R$%'%%&0$$-'%($$,-($L)%%%%,&$+$$%-%'3$)&$$$$U$$&%%(%$$$;%$%.$%%%$%$$-)%)%),*$*$N$',$%'sF%$%$%$$$%-)⯇/:'T'ࠣᤣƑ%I*/(($$-$0$($$$%$%$34Ǝ$$3c%YK/$$%3*$$$)3$%%$$$$$$$$$$$$$$$$%$$'&&$'$$$$$$$&$$&$$$%'($ª%$$&$&$$$$$$%-%&%=$$$$$$=$$$$$$$$$%-$P%B&)%)%)%&&%$$$%$$'%-&%%/$=$6$%$2%1E(&'P&,X'4%&$0&$RP$¥@&T2$>'C',7$+$(I((A$$G'+$(MKKq%-)G'G'K+W.$³Ś,9-+»)%$$O$%&$%:$$+:%*B+,S6$%((9)&$=($c['%%3%Q$&$%(''$&$@%&'$,*,*@%$@&C+$?%'(*,Y&*9%+6(+5*'/*slZV0V*)G'+-ŉB$M$%$%%q@-$+9.'(y8*7:,$$$X2*'7-2&$P&'%%%$'.$%<*-)&G($+$-'$%$+F$%$,%$S&,%'''$$$-$$$&$7.5$<&&%$$%)$d*$$$'$2$-$)R$&+(-)%%$+%%%9$*$%$($%$%$'%%%&%$)$((%%*&(®X&+%&$$'(-%$$$&AS&)$$'%$%%$$+-ÉR&'%'%$%:'%ES&+%$$%&$.-)06N$$$%)$$$*-Y>%&%'$('-%&$ãO&,$%$CC-,/+%$%+$%$;)$%%%$$$$$$$&,-i+%J&'%%'$$$$$>$-K)$$'+$+$)%&Q0$%&$(@\\Ī,$H$*$)$$$(--6&%A%9$$*$%$%l*$%$I)&$$%$*$$+-))$%$C($%$%$$$$*-ř6%%%Ú$28+'40$ν$(.ç૟ђ$,࿪ɪ⇜ɜ*B$-'%A%($-S*(''$$--$*$8(6˓CC:'n'$$Z*'0c%$$$.%1᠛+ӹM,⌚łT&4'+Ưध(0&,*-%$%$'፿ę-J%_%&&)++%*A'^:e&$½7/z,<ª===*$5==$$%%$%%%'$+'$$$*$.==%$'%+$*$=%$'$($$&*$============?%<$<$)<$<$)<$<$)<$<$)<$<$)$$%UȣZ'U+$1$%(2($2ճ*$4%*$%$(øP&**%-'$$ƓO'-($ԣè%,*LEE*$'-'%̴^$&$'oP$2å'$>$%$$%$$-$'$$$$)$'$$$$$$&$%$$%$$$$$$$$$$%$$%'$*$'$'$$$-$4(&$($4W%ıO'/2%2$2$H-0Ä[@0O',*%1)½Ğ(˻+0&0&/|*/7/'[+-)K+A%%q$u$ª/1%(&&(*,<**,&0*L¶$ZH-Щ꜁Eၘ.ā%ᚥ1ᵔూɁ؅፮򮳙$A£ē︳𐀡%𐀡";
const $fd2440856c2e5912$export$2c76aca27257bcfa = "1.;=;78;<;6;+;<;#7;8>5>$7<8<1.;=?;>?'9<2?>?<->$;>-':-;#<#$<$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$'#$'#%$#%$#%$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#%$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$'$&>&>&>&>&>(#$#$&>#$@&$;#@>#;#@#@#$#@#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$<#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$?(*#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$@#@&;$;6@?=@(6(;(;(;(@'@';@2<;=;?(;2@;'&'(+;'(';'(2?(&(?('+'?';@2'('(@'('@+'(&?;&@(='(&(&(&(@;@'(@;@'@'@'@(2()'()(')()()'('(;+;&'()@'@'@'@'@'@'@(')(@)@)('@)@'@'(@+'=-?=';(@()@'@'@'@'@'@'@'@(@)(@(@(@(@'@'@+('(;@()@'@'@'@'@'@'@(')(@()@)(@'@'(@+;=@'(@()@'@'@'@'@'@'@(')()(@)@)(@()@'@'(@+?'-@('@'@'@'@'@'@'@'@'@'@)()@)@)(@'@)@+-?=?@()('@'@'@'@'()@(@(@(@'@'(@+@;-?'();'@'@'@'@'@(')()@()@)(@)@'@'(@+@'@()'@'@'(')(@)@)('?@')-'(@+-?'@()@'@'@'@'@'@(@)(@(@)@+@);@'('(@='&(;+;@'@'@'@'@'@'('('@'@&@(@+@'@'?;?;?(?+-?(?(?(7878)'@'@()(;('(@(@?(?@?;?;@')()()()('+;')('(')')'('()()(')+)(?#@#@#@$;&$'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@(;-@'?@#@$@6'?;'.'78@';,'@'@'(@'(;@'(@'@'@(@'()()()(;&;='(@+@-@;6;(2@+@'&'@'('('@'@'@()()@)()(@?@;+'@'@'@'@+-@?'()(@;')()(@()()()(@(+@+@;&;@(*(@()'()()()()'@+;?(?@()')()()('+'()()()()@;')()(@;+@'+'&;$@#@#;@(;()('('(')('@$&$&$&(@(#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$@#@$#$#$@#@$@#@#@#@#$#$@$%$%$%$@$#%>$>$@$#%>$@$#@>$#>@$@$#%>@.26;9:79:79;/02.;9:;5;<78;<;5;.2@2-&@-<78&-<78@&@=@(*(*(@?#?#?$#$#$?#?<#?#?#?#?#?$#$'$?$#<#$?<?$?-,#$,-?@<?<?<?<?<?<?<?<?<?<?7878?<?78?<?<?<?@?@-?-?<?<?<?<?78787878787878-?<78<7878787878<?<7878787878787878787878<7878<78<?<?<?@?@?#@$@#$#$#$#$#$#$#$#$&#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$?#$#$(#$@;-;$@$@$@'@&;@('@'@'@'@'@'@'@'@'@(;9:9:;9:;9:;6;6;9:;9:78787878;&;6;6;7;?;@?@?@?@?@.;?&',7878787878?78787878678?,()6&?,&';?@'@(>&'6';&'@'@'@?-?'?@'?@-?-?-?-?-?'?'@'&'@?@'&;'&;'+'@#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$'(*;(;&#$#$#$#$#$#$#$#$#$#$#$#$#$#$&(',(;@>&>#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$&$#$#$#$#$#$#$#$&>#$#$'#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$@#$#$#$@#$'&$'('('(')()?(@-?=?@';@)')(@;+@(';';'(+'(;'()@;'@()'()()();@&+@;'(&'+'@'()()(@'('()@+@;'&'?')()'('('('('('@'&;')();'&)(@'@'@'@'@'@$>&$&>@$')()();)(@+@'@'@'@34'@'@$@$@'('<'@'@'@'@'@'>@'87@'@'@'=?@(;78;@(;657878787878787878;78;5;@;6787878;<6<@;=;@'@'@2@;=;78;<;6;+;<;#7;8>5>$7<8<78;78;'&'&'@'@'@'@'@=<>?=@?<?@2?@'@'@'@'@'@'@'@;@-@?,-?-?@?@?@?(@'@'@(-@'-@',',@'(@'@;'@';,@#$'@+@#@$@'@'@;@'@'@'@'@'@'@'@'@'@;-'?-'@-@'@'@-'-@;'@;@'@-'-@-'(@(@('@'@'@(@(-@;@'-;'-@'?'(@-;@'@;'@-'@-'@;@-@'@#@$@-'(@+@-@'@(6@'@'-'@'(-;@'-@'@)()'(;@-+@()')()(;2;@2@'@+@('()(@+;')'@'(;'@()')()';(;)(+';';@-@'@')()()(;(@'@'@'@'@';@'()(@+@()@'@'@'@'@'@'@(')()@)@)@'@)@')@(@(@')()()(';+;@;('@')()()()(';'@+@')(@)()(;'(@')()()(;'@+@;@'()()()('@+@'@()()(@+-;?@')()(;@#$+-@'@'@'@'@')@)@()(')')(;@+@'@')(@()(';')@'('()'(;(@'()('()(;';@'@'@')(@()(';@+-@;'@(@)()()(@'@'@'(@(@(@('(@+@'@'@')@(@)()('@+@'();@'@-?=?@;'@,@;@'@'@2@'@'@'@+@;@'@(;@'(;?&;?@+@-@'@'@#$-;@'@(')@(&@&;&(@)@'@'@'@'@'@'@'@'@'@'@'@?(;2@?@?@?)(?)2(?(?(?@?(?@-@?@-@#$#$@$#$#@#@#@#@#@#$@$@$@$#$#@#@#@#@$#@#@#@#@#@$#$#$#$#$#$#$@#<$<$#<$<$#<$<$#<$<$#<$<$#$@+?(?(?(?(?;@(@(@(@(@(@(@(@'@(&@+@'?@'(+@=@'@-(@#$(&@+@;@-?-=-@-?-@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@'@<@?@?@?@?@?@?@-?@?@?@?@?@?@?>?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@?@+@'@'@'@'@'@'@'@2@2@(@4@4@";


function $a62872757f4b7230$var$getCategoryFunc() {
    // unpack Unicode codepoint ranges (delta encoded) and general categories
    const offset = 35; // offsets unprintable characters
    const a1 = [
        ...$fd2440856c2e5912$export$10ebd8144ce3e75a
    ].map((ch)=>{
        var _a;
        return ((_a = ch.codePointAt(0)) !== null && _a !== void 0 ? _a : 0) - offset;
    });
    const a2 = [
        ...$fd2440856c2e5912$export$2c76aca27257bcfa
    ].map((ch)=>{
        var _a;
        return ((_a = ch.codePointAt(0)) !== null && _a !== void 0 ? _a : 0) - offset;
    });
    const codepoints = new Uint32Array(a1);
    const categories = new Uint8Array(a2);
    for(let i = 1; i < codepoints.length; ++i)codepoints[i] += codepoints[i - 1];
    // binary search in unicode ranges
    return (cp)=>{
        let hi = codepoints.length;
        let lo = 0;
        while(hi - lo > 1){
            const mid = Math.floor((hi + lo) / 2);
            const test = codepoints[mid];
            if (cp < test) hi = mid;
            else if (cp === test) {
                hi = lo = mid;
                break;
            } else if (test < cp) lo = mid;
        }
        return categories[lo];
    };
}
const $a62872757f4b7230$var$isControlMask = 16384 /* Control */ ;
const $a62872757f4b7230$var$isDigitMask = 256 /* DecimalDigitNumber */ ;
const $a62872757f4b7230$var$isLetterMask = 31 /* OtherLetter */ ;
const $a62872757f4b7230$var$isLetterOrDigitMask = $a62872757f4b7230$var$isLetterMask | $a62872757f4b7230$var$isDigitMask;
const $a62872757f4b7230$var$isUpperMask = 1 /* UppercaseLetter */ ;
const $a62872757f4b7230$var$isLowerMask = 2 /* LowercaseLetter */ ;
const $a62872757f4b7230$var$isNumberMask = 1792 /* OtherNumber */ ;
const $a62872757f4b7230$var$isPunctuationMask = 33292288 /* OtherPunctuation */ ;
const $a62872757f4b7230$var$isSeparatorMask = 14336 /* ParagraphSeparator */ ;
const $a62872757f4b7230$var$isSymbolMask = 503316480 /* OtherSymbol */ ;
const $a62872757f4b7230$var$isWhiteSpaceMask = 14336 /* ParagraphSeparator */ ;
const $a62872757f4b7230$var$unicodeCategoryFunc = $a62872757f4b7230$var$getCategoryFunc();
function $a62872757f4b7230$var$charCodeAt(s, index) {
    if (index >= 0 && index < s.length) return s.charCodeAt(index);
    else throw new Error("Index out of range.");
}
const $a62872757f4b7230$export$37ac268fce1bbca1 = (s)=>$a62872757f4b7230$export$e865acda22a5a528(s, 0)
;
const $a62872757f4b7230$export$5a68459d5634ec09 = (s)=>$a62872757f4b7230$export$71efede452854975(s, 0)
;
const $a62872757f4b7230$export$727d9dbc4fbb948f = (s)=>$a62872757f4b7230$export$53af04be484d9afb(s, 0)
;
const $a62872757f4b7230$export$79c5d5217943d6a7 = (s)=>$a62872757f4b7230$export$8e413427b83b919a(s, 0)
;
const $a62872757f4b7230$export$6767b51de790790d = (s)=>$a62872757f4b7230$export$4240ed14b45f26d2(s, 0)
;
const $a62872757f4b7230$export$ae50dec7acbeb690 = (s)=>$a62872757f4b7230$export$c32998d8ba24789a(s, 0)
;
const $a62872757f4b7230$export$612428811da8e7ba = (s)=>$a62872757f4b7230$export$52036608c9215458(s, 0)
;
const $a62872757f4b7230$export$7e4aa119212bc614 = (s)=>$a62872757f4b7230$export$516ccf1c10d0ef71(s, 0)
;
const $a62872757f4b7230$export$a5b49f4dc6a07d2c = (s)=>$a62872757f4b7230$export$9686a49027a65e37(s, 0)
;
const $a62872757f4b7230$export$aa03971fc638f7dd = (s)=>$a62872757f4b7230$export$fdfe9fc34feea41b(s, 0)
;
const $a62872757f4b7230$export$a244864fd9645c7f = (s)=>$a62872757f4b7230$export$9126ac2dbb4d12de(s, 0)
;
const $a62872757f4b7230$export$3c52dd84024ae72c = (s)=>$a62872757f4b7230$export$320fbcb914aa5858(s, 0)
;
const $a62872757f4b7230$export$9be78f542969c681 = (s)=>$a62872757f4b7230$export$e1dff987c6c9e79a(s, 0)
;
const $a62872757f4b7230$export$5b64095866343cd = (s)=>$a62872757f4b7230$export$ae8d40a52a32757c(s, 0)
;
const $a62872757f4b7230$export$7e678b42035e707f = (s)=>$a62872757f4b7230$export$91331d2e6b93b7ee(s, 0)
;
function $a62872757f4b7230$export$e865acda22a5a528(s, index) {
    const cp = $a62872757f4b7230$var$charCodeAt(s, index);
    return $a62872757f4b7230$var$unicodeCategoryFunc(cp);
}
function $a62872757f4b7230$export$71efede452854975(s, index) {
    const test = 1 << $a62872757f4b7230$export$e865acda22a5a528(s, index);
    return (test & $a62872757f4b7230$var$isControlMask) !== 0;
}
function $a62872757f4b7230$export$53af04be484d9afb(s, index) {
    const test = 1 << $a62872757f4b7230$export$e865acda22a5a528(s, index);
    return (test & $a62872757f4b7230$var$isDigitMask) !== 0;
}
function $a62872757f4b7230$export$8e413427b83b919a(s, index) {
    const test = 1 << $a62872757f4b7230$export$e865acda22a5a528(s, index);
    return (test & $a62872757f4b7230$var$isLetterMask) !== 0;
}
function $a62872757f4b7230$export$4240ed14b45f26d2(s, index) {
    const test = 1 << $a62872757f4b7230$export$e865acda22a5a528(s, index);
    return (test & $a62872757f4b7230$var$isLetterOrDigitMask) !== 0;
}
function $a62872757f4b7230$export$c32998d8ba24789a(s, index) {
    const test = 1 << $a62872757f4b7230$export$e865acda22a5a528(s, index);
    return (test & $a62872757f4b7230$var$isUpperMask) !== 0;
}
function $a62872757f4b7230$export$52036608c9215458(s, index) {
    const test = 1 << $a62872757f4b7230$export$e865acda22a5a528(s, index);
    return (test & $a62872757f4b7230$var$isLowerMask) !== 0;
}
function $a62872757f4b7230$export$516ccf1c10d0ef71(s, index) {
    const test = 1 << $a62872757f4b7230$export$e865acda22a5a528(s, index);
    return (test & $a62872757f4b7230$var$isNumberMask) !== 0;
}
function $a62872757f4b7230$export$9686a49027a65e37(s, index) {
    const test = 1 << $a62872757f4b7230$export$e865acda22a5a528(s, index);
    return (test & $a62872757f4b7230$var$isPunctuationMask) !== 0;
}
function $a62872757f4b7230$export$fdfe9fc34feea41b(s, index) {
    const test = 1 << $a62872757f4b7230$export$e865acda22a5a528(s, index);
    return (test & $a62872757f4b7230$var$isSeparatorMask) !== 0;
}
function $a62872757f4b7230$export$9126ac2dbb4d12de(s, index) {
    const test = 1 << $a62872757f4b7230$export$e865acda22a5a528(s, index);
    return (test & $a62872757f4b7230$var$isSymbolMask) !== 0;
}
function $a62872757f4b7230$export$320fbcb914aa5858(s, index) {
    const test = 1 << $a62872757f4b7230$export$e865acda22a5a528(s, index);
    if ((test & $a62872757f4b7230$var$isWhiteSpaceMask) !== 0) return true;
    const cp = $a62872757f4b7230$var$charCodeAt(s, index);
    return 9 <= cp && cp <= 13 || cp === 133 || cp === 160;
}
function $a62872757f4b7230$export$e1dff987c6c9e79a(s, index) {
    const cp = $a62872757f4b7230$var$charCodeAt(s, index);
    return 55296 <= cp && cp <= 56319;
}
function $a62872757f4b7230$export$ae8d40a52a32757c(s, index) {
    const cp = $a62872757f4b7230$var$charCodeAt(s, index);
    return 56320 <= cp && cp <= 57343;
}
function $a62872757f4b7230$export$91331d2e6b93b7ee(s, index) {
    const cp = $a62872757f4b7230$var$charCodeAt(s, index);
    return 55296 <= cp && cp <= 57343;
}
function $a62872757f4b7230$export$e7f1d94bb17e4055(s, index) {
    return typeof index === "number" ? $a62872757f4b7230$export$e1dff987c6c9e79a(s, index) && $a62872757f4b7230$export$ae8d40a52a32757c(s, index + 1) : $a62872757f4b7230$export$9be78f542969c681(s) && $a62872757f4b7230$export$5b64095866343cd(index);
}
function $a62872757f4b7230$export$98e6a39c04603d36(input) {
    if (input.length === 1) return input[0];
    else throw new Error("String must be exactly one character long.");
}



function $44d0e0cc2b09cbff$var$prefixWidth(ctx, line) {
    return $6f9339dcb7ad0d09$export$13c2f47aa8a3882d($80fa799ee6d7bef5$export$e97046137fc6b021(ctx).tabWidth)($6f9339dcb7ad0d09$export$42f65d3844869e20(line));
}
function $44d0e0cc2b09cbff$var$contentWidth(ctx, line) {
    return $6f9339dcb7ad0d09$export$6736e22116c64a4c($44d0e0cc2b09cbff$var$prefixWidth(ctx, line), $80fa799ee6d7bef5$export$e97046137fc6b021(ctx).tabWidth, $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).trimEnd());
}
function $44d0e0cc2b09cbff$var$endCol(ctx, line) {
    const tabWidth = $80fa799ee6d7bef5$export$e97046137fc6b021(ctx).tabWidth | 0;
    const p = $6f9339dcb7ad0d09$export$13c2f47aa8a3882d(tabWidth)($6f9339dcb7ad0d09$export$42f65d3844869e20(line)) | 0;
    return p + $6f9339dcb7ad0d09$export$6736e22116c64a4c(p, tabWidth, $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).trimEnd()) | 0;
}
function $44d0e0cc2b09cbff$var$indentWidth(ctx, line) {
    const tabWidth = $80fa799ee6d7bef5$export$e97046137fc6b021(ctx).tabWidth | 0;
    const ws = $518fcccc33d36a20$export$662d3818631fba36($6f9339dcb7ad0d09$export$f587a4e4415f4276(line), 0, $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).length - $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).trimStart().length);
    return $6f9339dcb7ad0d09$export$6736e22116c64a4c($6f9339dcb7ad0d09$export$13c2f47aa8a3882d(tabWidth)($6f9339dcb7ad0d09$export$42f65d3844869e20(line)), tabWidth, ws) | 0;
}
function $44d0e0cc2b09cbff$var$trimIndent(ctx, line) {
    const tabWidth = $80fa799ee6d7bef5$export$e97046137fc6b021(ctx).tabWidth | 0;
    const newContent = $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).trimStart();
    const ws = $518fcccc33d36a20$export$662d3818631fba36($6f9339dcb7ad0d09$export$f587a4e4415f4276(line), 0, $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).length - newContent.length);
    return [
        $6f9339dcb7ad0d09$export$6736e22116c64a4c($6f9339dcb7ad0d09$export$13c2f47aa8a3882d(tabWidth)($6f9339dcb7ad0d09$export$42f65d3844869e20(line)), tabWidth, ws),
        $6f9339dcb7ad0d09$export$45b30bb84adefa7e($6f9339dcb7ad0d09$export$42f65d3844869e20(line) + ws, newContent)
    ];
}
function $44d0e0cc2b09cbff$var$compareIndents(ctx, line1, line2) {
    return $44d0e0cc2b09cbff$var$prefixWidth(ctx, line2) - $44d0e0cc2b09cbff$var$prefixWidth(ctx, line1);
}
const $44d0e0cc2b09cbff$var$finishedOnPrev = (arg)=>new $80fa799ee6d7bef5$export$3f8e93861147162e(1, arg)
;
const $44d0e0cc2b09cbff$var$finishedOnPrev_ = new $80fa799ee6d7bef5$export$3f8e93861147162e(1, void 0);
function $44d0e0cc2b09cbff$var$startsWithPunc(s) {
    if (s.length === 0) return void 0;
    else {
        const c = s[0].charCodeAt(0) | 0;
        if (((c > 32 && c < 48 ? true : c > 57 && c < 65) ? true : c > 90 && c < 97) ? true : c > 122 && c < 127) return s[0];
        else return void 0;
    }
}
function $44d0e0cc2b09cbff$var$matchesPuncLine(line) {
    const str = $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).trimStart();
    const wsLength = $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).length - str.length | 0;
    const str_1 = str.trimEnd();
    const b = [
        wsLength,
        str_1.length
    ];
    return $7e4c281993e75c03$export$871de8747c9eaa88((a)=>b
    , $7e4c281993e75c03$export$3dea766d36a8935f((s)=>$c4c313718bcc393b$export$e5bd981f5eeebe3b((y)=>s === y
        , str_1.split(""))
    , $44d0e0cc2b09cbff$var$startsWithPunc(str_1)));
}
function $44d0e0cc2b09cbff$var$anonymousHyperlink(ctx) {
    return (arg)=>$7e4c281993e75c03$export$871de8747c9eaa88((tupledArg)=>$56dd5126021167c2$export$64a8896c2db4bef4(tupledArg[1], $80fa799ee6d7bef5$export$841eb07a4e16193)
        , $56dd5126021167c2$export$44cff9a5bbe58c3f($14cb28be03f8bba6$export$185802fd694ee1f5("^__ \\S", 257), arg))
    ;
}
function $44d0e0cc2b09cbff$var$bulletItem(ctx, line) {
    return $3583e200a8ea3134$export$e5403e43878ec1b6($3583e200a8ea3134$export$a75d1723e6bda2ec, $56dd5126021167c2$export$d2d84020f5326cd0($14cb28be03f8bba6$export$185802fd694ee1f5("^\\s*[-+*•‣⁃](?=\\s|$)", 257))(line), (_arg1)=>{
        const m = _arg1;
        return $3583e200a8ea3134$export$ba4da117d7bdef59($3583e200a8ea3134$export$a75d1723e6bda2ec, $56dd5126021167c2$export$bf30503277775ba1($56dd5126021167c2$export$b954b88ed40d75a0(line, m[0].length))($44d0e0cc2b09cbff$var$bodyElements(false)(ctx)($6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(m[0].length)(line))));
    });
}
function $44d0e0cc2b09cbff$var$docTestBlock(ctx) {
    const rx = $14cb28be03f8bba6$export$185802fd694ee1f5("^\\s*\u003e\u003e\u003e(?:\\s|$)", 257);
    const nextLine = (indent, arg)=>{
        const line = $56dd5126021167c2$export$1f16eb0deddc4c6d(arg);
        if ($6f9339dcb7ad0d09$export$f587a4e4415f4276(line) === "" ? true : $44d0e0cc2b09cbff$var$prefixWidth(ctx, line) < indent) return $44d0e0cc2b09cbff$var$finishedOnPrev_;
        else return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, nextLine, [
            indent
        ])));
    };
    return (arg_3)=>$7e4c281993e75c03$export$871de8747c9eaa88((arg_2)=>{
            const line_1 = $56dd5126021167c2$export$1f16eb0deddc4c6d(arg_2[1]);
            return $56dd5126021167c2$export$264e3233dc30e054(line_1, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, nextLine, [
                $44d0e0cc2b09cbff$var$prefixWidth(ctx, line_1)
            ]));
        }, $56dd5126021167c2$export$44cff9a5bbe58c3f(rx, arg_3))
    ;
}
function $44d0e0cc2b09cbff$var$lineBlock(ctx) {
    const rx = $14cb28be03f8bba6$export$185802fd694ee1f5("^(\\s*)\\|\\s+", 257);
    const parseTail = (paraIndent)=>(line)=>{
            let matchValue_1;
            const b = line;
            const a = ctx;
            const arg2_0 = tryAnotherLineBlock(paraIndent);
            const matchValue = ((_ctx, line_1)=>$56dd5126021167c2$export$d50d28ce3ab2a612(_ctx, line_1)
            )(a, b);
            matchValue_1 = matchValue == null ? arg2_0(a)(b) : matchValue;
            return matchValue_1 == null ? new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054($56dd5126021167c2$export$1f16eb0deddc4c6d(line), $80fa799ee6d7bef5$export$7f3a03c5cf10c42a, parseTail(paraIndent))) : new $80fa799ee6d7bef5$export$3f8e93861147162e(1, matchValue_1);
        }
    ;
    const tryAnotherLineBlock = (paraIndent_1)=>(_arg2)=>(line_2)=>{
                const matchValue_2 = $56dd5126021167c2$export$d2d84020f5326cd0(rx)(line_2);
                if (matchValue_2 == null) return void 0;
                else {
                    const m = matchValue_2;
                    return m[1].length > paraIndent_1 ? void 0 : onMatch([
                        m,
                        line_2
                    ]);
                }
            }
    ;
    const onMatch = (tupledArg)=>{
        const m_1 = tupledArg[0];
        const line_3 = tupledArg[1];
        const prefixFn = $56dd5126021167c2$export$b954b88ed40d75a0(line_3, m_1[0].length);
        return $56dd5126021167c2$export$264e3233dc30e054($6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(m_1[0].length)(line_3), $80fa799ee6d7bef5$export$7a7b7d9aeb7bdb25(prefixFn), parseTail(m_1[1].length));
    };
    return (arg)=>$7e4c281993e75c03$export$871de8747c9eaa88(onMatch, $56dd5126021167c2$export$44cff9a5bbe58c3f(rx, arg))
    ;
}
function $44d0e0cc2b09cbff$var$literalIndented(minIndent, ctx) {
    const parseTail = (line)=>{
        if ($56dd5126021167c2$export$7554718ac998a8a4(line) ? true : $44d0e0cc2b09cbff$var$indentWidth(ctx, line) > minIndent) return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line, $80fa799ee6d7bef5$export$841eb07a4e16193, parseTail));
        else return $44d0e0cc2b09cbff$var$finishedOnPrev_;
    };
    return (line_1)=>$44d0e0cc2b09cbff$var$indentWidth(ctx, line_1) > minIndent ? $56dd5126021167c2$export$264e3233dc30e054(line_1, $80fa799ee6d7bef5$export$841eb07a4e16193, parseTail) : void 0
    ;
}
function $44d0e0cc2b09cbff$var$literalQuoted(indent, ctx) {
    const parseTail = (prefix, line)=>{
        if (!($6f9339dcb7ad0d09$export$f587a4e4415f4276(line).length > 0 && $6f9339dcb7ad0d09$export$f587a4e4415f4276(line)[0] === prefix)) return $44d0e0cc2b09cbff$var$finishedOnPrev_;
        else return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, parseTail, [
            prefix
        ])));
    };
    return (arg)=>{
        const tupledArg = $44d0e0cc2b09cbff$var$trimIndent(ctx, arg);
        const line_2 = tupledArg[1];
        return tupledArg[0] !== indent ? void 0 : $7e4c281993e75c03$export$871de8747c9eaa88((c)=>$56dd5126021167c2$export$264e3233dc30e054(line_2, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, parseTail, [
                c
            ]))
        , $44d0e0cc2b09cbff$var$startsWithPunc($6f9339dcb7ad0d09$export$f587a4e4415f4276(line_2)));
    };
}
function $44d0e0cc2b09cbff$var$numberedItem(ctx) {
    let parseRoman;
    const vals = [
        [
            "",
            "i",
            "ii",
            "iii",
            "iv",
            "v",
            "vi",
            "vii",
            "viii",
            "ix"
        ],
        [
            "",
            "x",
            "xx",
            "xxx",
            "xl",
            "l",
            "lx",
            "lxx",
            "lxxx",
            "xc"
        ],
        [
            "",
            "c",
            "cc",
            "ccc",
            "cd",
            "d",
            "dc",
            "dcc",
            "dccc",
            "cm"
        ],
        [
            "",
            "m",
            "mm",
            "mmm",
            "mmmm"
        ]
    ];
    const loop = (fn_mut, acc_mut, exp_mut, i_mut, str_mut)=>{
        loop: while(true){
            const fn = fn_mut, acc = acc_mut, exp = exp_mut, i = i_mut, str = str_mut;
            if (exp < 0) {
                if (str.length === 0) return acc;
                else return void 0;
            } else {
                const pat = vals[exp][i];
                if (!(str.indexOf(fn(pat)) === 0)) {
                    fn_mut = fn;
                    acc_mut = acc;
                    exp_mut = exp;
                    i_mut = i - 1;
                    str_mut = str;
                    continue loop;
                } else {
                    fn_mut = fn;
                    acc_mut = acc + Math.pow(10, exp) * i;
                    exp_mut = exp - 1;
                    i_mut = 9;
                    str_mut = $518fcccc33d36a20$export$662d3818631fba36(str, pat.length);
                    continue loop;
                }
            }
            break;
        }
    };
    parseRoman = (str_1)=>str_1.length === 0 ? void 0 : loop($a62872757f4b7230$export$ae50dec7acbeb690(str_1[0]) ? (s)=>s.toLocaleUpperCase()
         : (x)=>x
        , 0, 3, 4, str_1)
    ;
    const rx = $14cb28be03f8bba6$export$185802fd694ee1f5("^\\s*(\\(?(?:(#)|([0-9]+)|([a-z])|([mdclxvi]+))[.)])(?=\\s|$)", 257);
    return (line)=>$3583e200a8ea3134$export$e5403e43878ec1b6($3583e200a8ea3134$export$a75d1723e6bda2ec, $56dd5126021167c2$export$d2d84020f5326cd0(rx)(line), (_arg3)=>{
            const m = _arg3;
            return m[1].indexOf("(") === 0 && $518fcccc33d36a20$export$10fdab3683b55b22(m[1], ".") ? $3583e200a8ea3134$export$b234b9af24438e($3583e200a8ea3134$export$a75d1723e6bda2ec, void 0) : $3583e200a8ea3134$export$e5403e43878ec1b6($3583e200a8ea3134$export$a75d1723e6bda2ec, m[2] === "#" ? 1 : m[3] !== "" ? $d70d15e757640036$export$98e6a39c04603d36(m[3], 511, false, 32) : m[4] !== "" ? m[4].toLocaleUpperCase()[0].charCodeAt(0) - 64 : parseRoman(m[5]), (_arg4)=>$3583e200a8ea3134$export$ba4da117d7bdef59($3583e200a8ea3134$export$a75d1723e6bda2ec, $56dd5126021167c2$export$bf30503277775ba1($56dd5126021167c2$export$b954b88ed40d75a0(line, m[0].length))($44d0e0cc2b09cbff$var$bodyElements(false)(ctx)($6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(m[0].length)(line))))
            );
        })
    ;
}
function $44d0e0cc2b09cbff$var$paragraph(line2DeterminesIndent, ctx) {
    const isSameIndent = (lineX, lineY)=>$44d0e0cc2b09cbff$var$prefixWidth(ctx, lineX) === $44d0e0cc2b09cbff$var$prefixWidth(ctx, lineY)
    ;
    const blankLinesBeforeLiteral = (indent, line)=>{
        let b, a, matchValue;
        if ($56dd5126021167c2$export$7554718ac998a8a4(line)) return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, blankLinesBeforeLiteral, [
            indent
        ])));
        else return new $80fa799ee6d7bef5$export$3f8e93861147162e(1, (b = line, (a = ctx, (matchValue = ((ctx_1)=>$44d0e0cc2b09cbff$var$literalIndented(indent, ctx_1)
        )(a)(b), matchValue == null ? ((ctx_2)=>$44d0e0cc2b09cbff$var$literalQuoted(indent, ctx_2)
        )(a)(b) : matchValue))));
    };
    const checkBlankAndLiteral = (prevLine, line_1)=>{
        if ($6f9339dcb7ad0d09$export$f587a4e4415f4276(line_1) !== "") return void 0;
        else if ($56dd5126021167c2$export$b74c33566721f70f($14cb28be03f8bba6$export$185802fd694ee1f5("::\\s*$", 257))(prevLine)) return $44d0e0cc2b09cbff$var$finishedOnPrev($56dd5126021167c2$export$264e3233dc30e054(line_1, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, blankLinesBeforeLiteral, [
            $44d0e0cc2b09cbff$var$prefixWidth(ctx, prevLine)
        ])));
        else return $44d0e0cc2b09cbff$var$finishedOnPrev($56dd5126021167c2$export$64a8896c2db4bef4(line_1, $80fa799ee6d7bef5$export$841eb07a4e16193));
    };
    const checkIndentDifference = (prevLine_1)=>(line_2)=>!isSameIndent(line_2, prevLine_1) ? $44d0e0cc2b09cbff$var$finishedOnPrev_ : new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line_2, $80fa799ee6d7bef5$export$7f3a03c5cf10c42a, restOfParagraph(line_2)))
    ;
    const restOfParagraph = (prevLine_2)=>(arg)=>{
            const b_1 = $56dd5126021167c2$export$1f16eb0deddc4c6d(arg);
            const a_1 = prevLine_2;
            const matchValue_1 = checkBlankAndLiteral(a_1, b_1);
            return matchValue_1 != null ? matchValue_1 : checkIndentDifference(a_1)(b_1);
        }
    ;
    const checkUnderline = (prevLine_3, line_3)=>{
        let l;
        if (!line2DeterminesIndent && !isSameIndent(line_3, prevLine_3)) return void 0;
        else {
            const matchValue_2 = $44d0e0cc2b09cbff$var$matchesPuncLine(line_3);
            let pattern_matching_result;
            if (matchValue_2 != null) {
                if (l = matchValue_2[1] | 0, l > 3 ? true : l >= $44d0e0cc2b09cbff$var$contentWidth(ctx, prevLine_3)) pattern_matching_result = 0;
                else pattern_matching_result = 1;
            } else pattern_matching_result = 1;
            switch(pattern_matching_result){
                case 0:
                    return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$64a8896c2db4bef4(line_3, $80fa799ee6d7bef5$export$841eb07a4e16193));
                case 1:
                    return void 0;
            }
        }
    };
    const otherLine2 = (prevLine_4)=>{
        const def = line2DeterminesIndent ? (_arg5_1)=>(line_4)=>new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line_4, $80fa799ee6d7bef5$export$7f3a03c5cf10c42a, restOfParagraph(line_4)))
         : checkIndentDifference;
        return (arg_1)=>{
            const b_3 = $56dd5126021167c2$export$1f16eb0deddc4c6d(arg_1);
            const a_5 = prevLine_4;
            const matchValue_4 = ((a_4)=>(b_2)=>{
                    const matchValue_3 = checkBlankAndLiteral(a_4, b_2);
                    return matchValue_3 == null ? checkUnderline(a_4, b_2) : matchValue_3;
                }
            )(a_5)(b_3);
            return matchValue_4 != null ? matchValue_4 : def(a_5)(b_3);
        };
    };
    const maybeTitleLine3 = (headLine, prevLine_5, arg_2)=>{
        const b_4 = $56dd5126021167c2$export$1f16eb0deddc4c6d(arg_2);
        const a_6 = prevLine_5;
        const matchValue_5 = checkBlankAndLiteral(a_6, b_4);
        if (matchValue_5 != null) return matchValue_5;
        else return ((_arg6, line_5)=>{
            const sameIndentAsHeadLine = isSameIndent(line_5, headLine);
            if (sameIndentAsHeadLine && $6f9339dcb7ad0d09$export$f587a4e4415f4276(line_5).trimEnd() === $6f9339dcb7ad0d09$export$f587a4e4415f4276(headLine).trimEnd()) return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$64a8896c2db4bef4(line_5, $80fa799ee6d7bef5$export$841eb07a4e16193));
            else if (isSameIndent(line_5, prevLine_5)) {
                if (sameIndentAsHeadLine) return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line_5, $80fa799ee6d7bef5$export$7f3a03c5cf10c42a, restOfParagraph(line_5)));
                else return otherLine2(prevLine_5)(line_5);
            } else return $44d0e0cc2b09cbff$var$finishedOnPrev_;
        })(a_6, b_4);
    };
    return (line_7)=>{
        let prevLine_6;
        const hasOverline = $c4c313718bcc393b$export$f7e9f41ea797a17((tupledArg)=>tupledArg[0] === 0
        , $7e4c281993e75c03$export$45b10814cc054894($44d0e0cc2b09cbff$var$matchesPuncLine(line_7)));
        const line_8 = $56dd5126021167c2$export$1f16eb0deddc4c6d(line_7);
        return $56dd5126021167c2$export$264e3233dc30e054(line_8, $80fa799ee6d7bef5$export$7f3a03c5cf10c42a, hasOverline ? (prevLine_6 = line_8, (arg_3)=>{
            const b_6 = $56dd5126021167c2$export$1f16eb0deddc4c6d(arg_3);
            const a_8 = prevLine_6;
            const matchValue_8 = ((a_7)=>(b_5)=>{
                    const matchValue_7 = checkBlankAndLiteral(a_7, b_5);
                    return matchValue_7 == null ? checkUnderline(a_7, b_5) : matchValue_7;
                }
            )(a_8)(b_6);
            return matchValue_8 != null ? matchValue_8 : ((_arg7, line_6)=>{
                const matchValue_6 = [
                    $44d0e0cc2b09cbff$var$prefixWidth(ctx, line_6) > $44d0e0cc2b09cbff$var$prefixWidth(ctx, prevLine_6),
                    $44d0e0cc2b09cbff$var$endCol(ctx, line_6) > $44d0e0cc2b09cbff$var$endCol(ctx, prevLine_6)
                ];
                if (matchValue_6[0]) {
                    if (matchValue_6[1]) return $44d0e0cc2b09cbff$var$finishedOnPrev_;
                    else return $44d0e0cc2b09cbff$var$finishedOnPrev($56dd5126021167c2$export$264e3233dc30e054(line_6, $80fa799ee6d7bef5$export$7f3a03c5cf10c42a, $ed39e963967a3eea$export$955fe82a9145db62(1, maybeTitleLine3, [
                        prevLine_6,
                        line_6
                    ])));
                } else if (matchValue_6[1]) return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line_6, $80fa799ee6d7bef5$export$7f3a03c5cf10c42a, restOfParagraph(line_6)));
                else return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line_6, $80fa799ee6d7bef5$export$7f3a03c5cf10c42a, $ed39e963967a3eea$export$955fe82a9145db62(1, maybeTitleLine3, [
                    prevLine_6,
                    line_6
                ])));
            })(a_8, b_6);
        }) : otherLine2(line_8));
    };
}
function $44d0e0cc2b09cbff$var$tableGrid(ctx) {
    const rx = $14cb28be03f8bba6$export$185802fd694ee1f5("^\\+-{3}[-+]*\\+\\s*$", 257);
    const nextLine = (prevLine, arg)=>{
        const line = $56dd5126021167c2$export$1f16eb0deddc4c6d(arg);
        if ($6f9339dcb7ad0d09$export$f587a4e4415f4276(line) === "") return $44d0e0cc2b09cbff$var$finishedOnPrev($56dd5126021167c2$export$64a8896c2db4bef4(line, $80fa799ee6d7bef5$export$841eb07a4e16193));
        else if ($44d0e0cc2b09cbff$var$compareIndents(ctx, prevLine, line) !== 0 ? true : $6f9339dcb7ad0d09$export$f587a4e4415f4276(line)[0] !== "|" && $6f9339dcb7ad0d09$export$f587a4e4415f4276(line)[0] !== "+") return $44d0e0cc2b09cbff$var$finishedOnPrev_;
        else return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, nextLine, [
            line
        ])));
    };
    return (arg_2)=>$7e4c281993e75c03$export$871de8747c9eaa88((tupledArg)=>{
            const line_2 = tupledArg[1];
            return $56dd5126021167c2$export$264e3233dc30e054(line_2, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, nextLine, [
                line_2
            ]));
        }, $56dd5126021167c2$export$44cff9a5bbe58c3f(rx, $56dd5126021167c2$export$1f16eb0deddc4c6d(arg_2)))
    ;
}
function $44d0e0cc2b09cbff$var$tableSimple(ctx) {
    const rx = $14cb28be03f8bba6$export$185802fd694ee1f5("^=+(?:\\s+=+)+\\s*$", 257);
    const afterHeader = (indent, arg)=>{
        const line = $56dd5126021167c2$export$1f16eb0deddc4c6d(arg);
        if ($6f9339dcb7ad0d09$export$f587a4e4415f4276(line) === "") return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, afterHeader, [
            indent
        ])));
        else {
            const d = $44d0e0cc2b09cbff$var$prefixWidth(ctx, line) - indent | 0;
            if (d < 0) return $44d0e0cc2b09cbff$var$finishedOnPrev_;
            else if (d === 0 && $56dd5126021167c2$export$b74c33566721f70f(rx)(line)) return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$64a8896c2db4bef4(line, $80fa799ee6d7bef5$export$841eb07a4e16193));
            else return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, afterHeader, [
                indent
            ])));
        }
    };
    const afterFirst = (indent_1, arg_1)=>{
        const line_1 = $56dd5126021167c2$export$1f16eb0deddc4c6d(arg_1);
        if ($6f9339dcb7ad0d09$export$f587a4e4415f4276(line_1) === "") return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line_1, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, afterFirst, [
            indent_1
        ])));
        else if ($44d0e0cc2b09cbff$var$prefixWidth(ctx, line_1) - indent_1 < 0) return $44d0e0cc2b09cbff$var$finishedOnPrev_;
        else if ($56dd5126021167c2$export$b74c33566721f70f(rx)(line_1)) return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line_1, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, afterHeader, [
            indent_1
        ])));
        else return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line_1, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, afterFirst, [
            indent_1
        ])));
    };
    return (arg_3)=>$7e4c281993e75c03$export$871de8747c9eaa88((tupledArg)=>{
            const line_3 = tupledArg[1];
            return $56dd5126021167c2$export$264e3233dc30e054(line_3, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, afterFirst, [
                $44d0e0cc2b09cbff$var$prefixWidth(ctx, line_3)
            ]));
        }, $56dd5126021167c2$export$44cff9a5bbe58c3f(rx, $56dd5126021167c2$export$1f16eb0deddc4c6d(arg_3)))
    ;
}
function $44d0e0cc2b09cbff$var$transitionOrTitle(ctx) {
    return (line_2)=>$3583e200a8ea3134$export$e5403e43878ec1b6($3583e200a8ea3134$export$a75d1723e6bda2ec, $44d0e0cc2b09cbff$var$matchesPuncLine(line_2), (_arg8)=>_arg8[1] < 4 ? $3583e200a8ea3134$export$b234b9af24438e($3583e200a8ea3134$export$a75d1723e6bda2ec, void 0) : _arg8[0] > 0 ? $3583e200a8ea3134$export$ba4da117d7bdef59($3583e200a8ea3134$export$a75d1723e6bda2ec, $56dd5126021167c2$export$64a8896c2db4bef4(line_2, $80fa799ee6d7bef5$export$841eb07a4e16193)) : $3583e200a8ea3134$export$ba4da117d7bdef59($3583e200a8ea3134$export$a75d1723e6bda2ec, $56dd5126021167c2$export$264e3233dc30e054(line_2, $80fa799ee6d7bef5$export$841eb07a4e16193, (line_1)=>{
                if ($56dd5126021167c2$export$7554718ac998a8a4(line_1)) return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$64a8896c2db4bef4(line_1, $80fa799ee6d7bef5$export$841eb07a4e16193));
                else {
                    const matchValue = $44d0e0cc2b09cbff$var$matchesPuncLine(line_1);
                    let pattern_matching_result;
                    if (matchValue != null) {
                        if (matchValue[0] === 0) pattern_matching_result = 0;
                        else pattern_matching_result = 1;
                    } else pattern_matching_result = 1;
                    switch(pattern_matching_result){
                        case 0:
                            return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$64a8896c2db4bef4(line_1, $80fa799ee6d7bef5$export$841eb07a4e16193));
                        case 1:
                            return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054(line_1, $80fa799ee6d7bef5$export$841eb07a4e16193, (line)=>new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$64a8896c2db4bef4(line, $80fa799ee6d7bef5$export$841eb07a4e16193))
                            ));
                    }
                }
            }))
        )
    ;
}
function $44d0e0cc2b09cbff$var$container(content, prefixFn, lineTest, ctx) {
    const wrapFLR = (_arg9)=>{
        if (_arg9.tag === 1) {
            const r_1 = _arg9.fields[0];
            return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(1, $56dd5126021167c2$export$6b3f82f9cb6c0717((p)=>flpWrapper($80fa799ee6d7bef5$export$d3e082395ddc82a1(r_1))(p)
            , r_1));
        } else {
            const r = _arg9.fields[0];
            return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(0, $56dd5126021167c2$export$6b3f82f9cb6c0717(nlpWrapper($80fa799ee6d7bef5$export$d3e082395ddc82a1(r)), r));
        }
    };
    const flpWrapper = (wasPara)=>(maybeInnerParser)=>(line)=>{
                const matchValue = lineTest(line);
                if (matchValue == null) {
                    const matchValue_1 = [
                        maybeInnerParser,
                        wasPara
                    ];
                    let pattern_matching_result, p_1;
                    if (matchValue_1[0] != null) {
                        if (matchValue_1[1]) {
                            pattern_matching_result = 0;
                            p_1 = matchValue_1[0];
                        } else pattern_matching_result = 1;
                    } else pattern_matching_result = 1;
                    switch(pattern_matching_result){
                        case 0:
                            return wrapFLR(p_1(line));
                        case 1:
                            return $7e4c281993e75c03$export$37721a79838ca038(maybeInnerParser, $ed39e963967a3eea$export$955fe82a9145db62(1, content, [
                                ctx
                            ]))(line);
                    }
                } else {
                    const line_1 = matchValue;
                    return wrapFLR($7e4c281993e75c03$export$37721a79838ca038(maybeInnerParser, $ed39e963967a3eea$export$955fe82a9145db62(1, content, [
                        ctx
                    ]))(line_1));
                }
            }
    ;
    const nlpWrapper = (wasPara_1)=>(innerParser)=>(line_2)=>{
                const matchValue_2 = lineTest(line_2);
                if (matchValue_2 == null) {
                    if (!wasPara_1) return new $80fa799ee6d7bef5$export$3f8e93861147162e(1, void 0);
                    else if (matchValue_2 == null) {
                        const _arg11 = innerParser(line_2);
                        return _arg11.tag === 1 ? new $80fa799ee6d7bef5$export$3f8e93861147162e(1, _arg11.fields[0]) : new $80fa799ee6d7bef5$export$3f8e93861147162e(0, wrapFLR(_arg11.fields[0]));
                    } else throw new Error("Match failure");
                } else {
                    const line_3 = matchValue_2;
                    const _arg10 = innerParser(line_3);
                    return _arg10.tag === 1 ? new $80fa799ee6d7bef5$export$3f8e93861147162e(1, wrapFLR($7e4c281993e75c03$export$c90763f2293d7e67(_arg10.fields[0], ()=>content(ctx, line_3)
                    ))) : new $80fa799ee6d7bef5$export$3f8e93861147162e(0, wrapFLR(_arg10.fields[0]));
                }
            }
    ;
    return (arg_1)=>$56dd5126021167c2$export$bf30503277775ba1(prefixFn)(wrapFLR(content(ctx, arg_1)))
    ;
}
function $44d0e0cc2b09cbff$var$explicitOther(ctx) {
    const rx = $14cb28be03f8bba6$export$185802fd694ee1f5("^(\\s*)(?:\\.\\.(?=\\s|$)|__\\s\\S)", 257);
    const literalLine = (test, arg)=>{
        const _arg12 = test(arg);
        if (_arg12 == null) return $44d0e0cc2b09cbff$var$finishedOnPrev_;
        else return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054($7e4c281993e75c03$export$2ab9a8f9f1186f14(_arg12), $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, literalLine, [
            test
        ])));
    };
    return (arg_1)=>$7e4c281993e75c03$export$871de8747c9eaa88((tupledArg)=>{
            let indent;
            const line_2 = tupledArg[1];
            return $56dd5126021167c2$export$264e3233dc30e054(line_2, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, literalLine, [
                (indent = $44d0e0cc2b09cbff$var$prefixWidth(ctx, $6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(tupledArg[0][1].length)(line_2)) | 0, (line)=>$44d0e0cc2b09cbff$var$prefixWidth(ctx, $56dd5126021167c2$export$1f16eb0deddc4c6d(line)) > indent ? $7e4c281993e75c03$export$ad14ef4001db2bcd(line) : void 0
                )
            ]));
        }, $56dd5126021167c2$export$44cff9a5bbe58c3f(rx, arg_1))
    ;
}
function $44d0e0cc2b09cbff$var$footnoteCitation(ctx) {
    const rx = $14cb28be03f8bba6$export$185802fd694ee1f5("^(\\s*)\\.\\. \\[(?:\\*|#(?:[-_.a-z0-9]+)?|[-_.a-z0-9]+)\\](?=\\s|$)", 257);
    return (arg)=>$7e4c281993e75c03$export$871de8747c9eaa88((tupledArg)=>{
            const m = tupledArg[0];
            const line_1 = tupledArg[1];
            let test;
            const indent = $44d0e0cc2b09cbff$var$prefixWidth(ctx, $6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(m[1].length)(line_1)) | 0;
            test = (line)=>$44d0e0cc2b09cbff$var$prefixWidth(ctx, $56dd5126021167c2$export$1f16eb0deddc4c6d(line)) > indent ? $7e4c281993e75c03$export$ad14ef4001db2bcd(line) : void 0
            ;
            const prefixFn = $56dd5126021167c2$export$9cf90c14ef21f464($6f9339dcb7ad0d09$export$d6fc32550865b077(line_1), m[0].length, 3, "");
            return $44d0e0cc2b09cbff$var$container($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $44d0e0cc2b09cbff$var$bodyElements(true)), prefixFn, test, ctx)($6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(m[0].length)(line_1));
        }, $56dd5126021167c2$export$44cff9a5bbe58c3f(rx, arg))
    ;
}
function $44d0e0cc2b09cbff$var$fieldItem(ctx) {
    const rx = $14cb28be03f8bba6$export$185802fd694ee1f5("^(\\s*):(.*?[^\\\\]):(?=\\s|$)", 257);
    const literalLine = (test, arg)=>{
        const _arg13 = test(arg);
        if (_arg13 == null) return $44d0e0cc2b09cbff$var$finishedOnPrev_;
        else return new $80fa799ee6d7bef5$export$3f8e93861147162e(0, $56dd5126021167c2$export$264e3233dc30e054($7e4c281993e75c03$export$2ab9a8f9f1186f14(_arg13), $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, literalLine, [
            test
        ])));
    };
    return (arg_1)=>$7e4c281993e75c03$export$871de8747c9eaa88((tupledArg)=>{
            const m = tupledArg[0];
            const line_2 = tupledArg[1];
            let test_1;
            const indent = $44d0e0cc2b09cbff$var$prefixWidth(ctx, $6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(m[1].length)(line_2)) | 0;
            test_1 = (line)=>$44d0e0cc2b09cbff$var$prefixWidth(ctx, $56dd5126021167c2$export$1f16eb0deddc4c6d(line)) > indent ? $7e4c281993e75c03$export$ad14ef4001db2bcd(line) : void 0
            ;
            const prefixFn = $56dd5126021167c2$export$9cf90c14ef21f464($6f9339dcb7ad0d09$export$d6fc32550865b077(line_2), m[0].length, 3, "");
            if (m[2] === "Address") return $56dd5126021167c2$export$264e3233dc30e054(line_2, $80fa799ee6d7bef5$export$841eb07a4e16193, $ed39e963967a3eea$export$955fe82a9145db62(1, literalLine, [
                test_1
            ]));
            else return $44d0e0cc2b09cbff$var$container($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $44d0e0cc2b09cbff$var$bodyElements(true)), prefixFn, test_1, ctx)($6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(m[0].length)(line_2));
        }, $56dd5126021167c2$export$44cff9a5bbe58c3f(rx, arg_1))
    ;
}
function $44d0e0cc2b09cbff$var$bodyElements(inFieldItem) {
    let arg2_0_1;
    const clo1 = $c4c313718bcc393b$export$533b26079ad0b4b($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $ed39e963967a3eea$export$880b1e43568f4c50((x)=>(y)=>(a)=>(b)=>{
                    const matchValue = x(a, b);
                    return matchValue == null ? y(a, b) : matchValue;
                }
    , [
        [
            0,
            2
        ],
        [
            0,
            2
        ]
    ])), [
        (_ctx)=>(line)=>$56dd5126021167c2$export$d50d28ce3ab2a612(_ctx, line)
        ,
        (ctx)=>$44d0e0cc2b09cbff$var$anonymousHyperlink(ctx)
        ,
        (ctx_1)=>$44d0e0cc2b09cbff$var$footnoteCitation(ctx_1)
        ,
        (ctx_2)=>$44d0e0cc2b09cbff$var$explicitOther(ctx_2)
        ,
        (ctx_3)=>$44d0e0cc2b09cbff$var$transitionOrTitle(ctx_3)
        ,
        (ctx_4)=>$44d0e0cc2b09cbff$var$lineBlock(ctx_4)
        ,
        (ctx_5)=>$44d0e0cc2b09cbff$var$tableGrid(ctx_5)
        ,
        (ctx_6)=>$44d0e0cc2b09cbff$var$tableSimple(ctx_6)
        ,
        (ctx_7)=>(line_1)=>$44d0e0cc2b09cbff$var$bulletItem(ctx_7, line_1)
        ,
        (ctx_8)=>$44d0e0cc2b09cbff$var$numberedItem(ctx_8)
        ,
        (ctx_9)=>$44d0e0cc2b09cbff$var$fieldItem(ctx_9)
        ,
        (ctx_10)=>$44d0e0cc2b09cbff$var$docTestBlock(ctx_10)
    ]);
    arg2_0_1 = (arg10)=>{
        const clo2 = clo1(arg10);
        return (arg20)=>clo2(arg20)
        ;
    };
    return (a_1)=>(b_1)=>{
            const matchValue_1 = arg2_0_1(a_1)(b_1);
            return matchValue_1 != null ? matchValue_1 : ((ctx_11)=>$44d0e0cc2b09cbff$var$paragraph(inFieldItem, ctx_11)
            )(a_1)(b_1);
        }
    ;
}
function $44d0e0cc2b09cbff$export$c3cbd34a9e282001(ctx) {
    const wrapFLR = (_arg14)=>{
        if (_arg14.tag === 1) return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(1, $56dd5126021167c2$export$6b3f82f9cb6c0717((p)=>flpWrapper(p)
        , _arg14.fields[0]));
        else return new $80fa799ee6d7bef5$export$5dce2f4b36bdc2e6(0, $56dd5126021167c2$export$6b3f82f9cb6c0717(nlpWrapper, _arg14.fields[0]));
    };
    const flpWrapper = (_arg15)=>{
        if (_arg15 == null) return $44d0e0cc2b09cbff$var$bodyElements(false)(ctx);
        else {
            const inner = _arg15;
            return (arg)=>wrapFLR(inner(arg))
            ;
        }
    };
    const nlpWrapper = (inner_1)=>(line)=>{
            const _arg16 = inner_1(line);
            return _arg16.tag === 1 ? new $80fa799ee6d7bef5$export$3f8e93861147162e(1, wrapFLR($7e4c281993e75c03$export$c90763f2293d7e67(_arg16.fields[0], ()=>flpWrapper(void 0)(line)
            ))) : new $80fa799ee6d7bef5$export$3f8e93861147162e(0, wrapFLR(_arg16.fields[0]));
        }
    ;
    return flpWrapper(void 0);
}


const $946ea15fc111c75e$export$47b8918faa571deb = (()=>{
    const parseLine = (line)=>$56dd5126021167c2$export$264e3233dc30e054(line, $80fa799ee6d7bef5$export$841eb07a4e16193, (arg)=>new $80fa799ee6d7bef5$export$3f8e93861147162e(0, parseLine(arg))
        )
    ;
    return (_ctx)=>parseLine
    ;
})();
function $946ea15fc111c75e$export$199d64cd116a5491(ctx) {
    return $92aff5b65a56cae9$export$199d64cd116a5491(ctx);
}
function $946ea15fc111c75e$export$c3cbd34a9e282001(ctx) {
    return $44d0e0cc2b09cbff$export$c3cbd34a9e282001(ctx);
}
















class $fd65bf8312d3edef$var$MarkdownState extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "FencedCodeBlock",
            "Paragraph",
            "NonParagraph"
        ];
    }
}
function $fd65bf8312d3edef$var$MarkdownState$reflection() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Parsing.Markdown.MarkdownState", [], $fd65bf8312d3edef$var$MarkdownState, ()=>[
            [],
            [],
            []
        ]
    );
}
function $fd65bf8312d3edef$export$199d64cd116a5491(settings) {
    let startRegex, startRegex_1, startRegex_2, startRegex_3, startRegex_4, startRegex_5;
    const fencedCodeBlock = (lines_1)=>{
        let tupledArg, startLineIndent, patternInput, otherLines, contentLines, patternInput_1, maybeEndLine, contentIndentShift;
        const lines_2 = lines_1;
        const headLine = lines_2.fields[0];
        const patternInput_2 = $6f9339dcb7ad0d09$export$65980d18b75784e2($fd65bf8312d3edef$var$fencedCodeBlockRegex, headLine);
        const prefix = patternInput_2[0];
        if (prefix.length > 0) {
            const marker_1 = prefix.trimStart();
            if (patternInput_2[1].indexOf($518fcccc33d36a20$export$2a1422e7517645a9(marker_1, 0)) >= 0) return void 0;
            else return tupledArg = (startLineIndent = prefix.length - marker_1.length | 0, patternInput = $3583e200a8ea3134$export$408aaad965f58251((arg)=>!$fd65bf8312d3edef$var$lineStartsWith(marker_1)(arg)
            )(lines_2.fields[1]), otherLines = patternInput[1], contentLines = patternInput[0], patternInput_1 = !$c5730ae5119245ea$export$dd1bc94b04021eeb(otherLines) ? [
                $c5730ae5119245ea$export$439306a4dcaafbb9($c5730ae5119245ea$export$5fd5031fecdacec3(otherLines)),
                $1cbdac383b1632f3$export$88e0dae599377b39($c5730ae5119245ea$export$c01875f616615628(otherLines))
            ] : [
                $c5730ae5119245ea$export$6e22c362a0406a2c(),
                void 0
            ], maybeEndLine = patternInput_1[0], [
                settings.reformat ? (contentIndentShift = $3583e200a8ea3134$export$5835bdd4dd0bd418(startLineIndent, $c5730ae5119245ea$export$871de8747c9eaa88((l)=>$6f9339dcb7ad0d09$export$c3ab302d598ba56c(l).length
                , contentLines)) | 0, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, headLine.trimStart(), $c5730ae5119245ea$export$10d8903dec122b9d($c5730ae5119245ea$export$871de8747c9eaa88((str_2)=>$3583e200a8ea3134$export$236f5df1c02f3d73(contentIndentShift, str_2)
                , contentLines), $c5730ae5119245ea$export$871de8747c9eaa88((str_3)=>str_3.trimStart()
                , maybeEndLine)))) : new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, headLine, $c5730ae5119245ea$export$10d8903dec122b9d(contentLines, maybeEndLine)),
                patternInput_1[1]
            ]), [
                new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, new $80fa799ee6d7bef5$export$d96a8827a60d6b69(2, tupledArg[0]), $c5730ae5119245ea$export$6e22c362a0406a2c()),
                tupledArg[1]
            ];
        } else return void 0;
    };
    let htmlType1to6;
    const parsers = $c5730ae5119245ea$export$871de8747c9eaa88((splitter)=>$6cf548609c1fb621$export$2c93594b4c05c833(splitter)
    , $c5730ae5119245ea$export$cb197a913f6bb809([
        (startRegex = $fd65bf8312d3edef$var$mdMarker("\u003c(script|pre|style)( |\u003e|$)"), (lines_3)=>$6cf548609c1fb621$export$7560c1bc3114403e(startRegex, /<\/(script|pre|style)>/gi, lines_3)
        ),
        (startRegex_1 = $fd65bf8312d3edef$var$mdMarker("\u003c!--"), (lines_4)=>$6cf548609c1fb621$export$7560c1bc3114403e(startRegex_1, /-->/g, lines_4)
        ),
        (startRegex_2 = $fd65bf8312d3edef$var$mdMarker("\u003c\\?"), (lines_5)=>$6cf548609c1fb621$export$7560c1bc3114403e(startRegex_2, /\?>/g, lines_5)
        ),
        (startRegex_3 = $fd65bf8312d3edef$var$mdMarker("\u003c![A-Z]"), (lines_6)=>$6cf548609c1fb621$export$7560c1bc3114403e(startRegex_3, />/g, lines_6)
        ),
        (startRegex_4 = $fd65bf8312d3edef$var$mdMarker("\u003c!\\[CDATA\\["), (lines_7)=>$6cf548609c1fb621$export$7560c1bc3114403e(startRegex_4, /]]>/g, lines_7)
        ),
        (startRegex_5 = $fd65bf8312d3edef$var$mdMarker("\u003c/?(address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(\\s|/?\u003e|$)"), (lines_8)=>$6cf548609c1fb621$export$7560c1bc3114403e(startRegex_5, /^\s*$/g, lines_8)
        )
    ]));
    htmlType1to6 = (lines_9)=>$6cf548609c1fb621$export$58518a0eb5d7e7ad(parsers, lines_9)
    ;
    let table;
    const cellsRowRegex = /\S\s*\|\s*\S/g;
    table = $6cf548609c1fb621$export$2c93594b4c05c833((lines_10)=>{
        let tupledArg_2, tupledArg_1;
        const matchValue = $1cbdac383b1632f3$export$effcdbd76139450(lines_10);
        let pattern_matching_result, firstLine, rest, secondLine;
        if (!$c5730ae5119245ea$export$dd1bc94b04021eeb(matchValue)) {
            if (!$c5730ae5119245ea$export$dd1bc94b04021eeb($c5730ae5119245ea$export$c01875f616615628(matchValue))) {
                pattern_matching_result = 0;
                firstLine = $c5730ae5119245ea$export$5fd5031fecdacec3(matchValue);
                rest = $c5730ae5119245ea$export$c01875f616615628($c5730ae5119245ea$export$c01875f616615628(matchValue));
                secondLine = $c5730ae5119245ea$export$5fd5031fecdacec3($c5730ae5119245ea$export$c01875f616615628(matchValue));
            } else pattern_matching_result = 1;
        } else pattern_matching_result = 1;
        switch(pattern_matching_result){
            case 0:
                if ($6f9339dcb7ad0d09$export$2344b14b097df817(cellsRowRegex, firstLine) && $6f9339dcb7ad0d09$export$2344b14b097df817(/:?-+:?\s*\|\s*:?-+:?/g, secondLine)) return tupledArg_2 = (tupledArg_1 = $3583e200a8ea3134$export$408aaad965f58251((line)=>$6f9339dcb7ad0d09$export$2344b14b097df817(cellsRowRegex, line)
                )(rest), [
                    new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, firstLine, $c5730ae5119245ea$export$8327ebbef2a0ba76(secondLine, tupledArg_1[0])),
                    tupledArg_1[1]
                ]), [
                    tupledArg_2[0],
                    $1cbdac383b1632f3$export$88e0dae599377b39(tupledArg_2[1])
                ];
                else return void 0;
            case 1:
                return void 0;
        }
    });
    const nonText = $6cf548609c1fb621$export$2c93594b4c05c833($1cbdac383b1632f3$export$afc1bfabebaf28a2((s_1)=>!($6f9339dcb7ad0d09$export$949cdd5cc1255afe(s_1) ? true : $6f9339dcb7ad0d09$export$7ee701e290d9865(s_1))
    ));
    const atxHeading = $6cf548609c1fb621$export$2c93594b4c05c833($1cbdac383b1632f3$export$afc1bfabebaf28a2($fd65bf8312d3edef$var$lineStartsWith("#{1,6} ")));
    const blockQuote = $6cf548609c1fb621$export$855ebe41e1cc9d1d((lines_11)=>{
        const option_1 = $7e4c281993e75c03$export$3dea766d36a8935f((arg_2)=>$fd65bf8312d3edef$var$lineStartsWith("\u003e")($1cbdac383b1632f3$export$5fd5031fecdacec3(arg_2))
        , lines_11);
        return $7e4c281993e75c03$export$2385a24977818dd0($1cbdac383b1632f3$export$afc1bfabebaf28a2((s_2)=>!$6f9339dcb7ad0d09$export$7ee701e290d9865(s_2)
        ), option_1);
    }, (lines_12)=>{
        let f_18, _arg4_2, f_22, _arg4_3;
        let splitLines;
        const f_14 = (line_1)=>$6f9339dcb7ad0d09$export$65980d18b75784e2(/ {0,3}>? ?/g, line_1)
        ;
        const _arg4_1 = lines_12;
        splitLines = new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_14(_arg4_1.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_14, _arg4_1.fields[1]));
        const patternInput_3 = settings.reformat ? [
            new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, "\u003e ", $c5730ae5119245ea$export$6e22c362a0406a2c()),
            (a_6)=>"\u003e "
        ] : [
            (f_18 = (tuple)=>tuple[0]
            , (_arg4_2 = splitLines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_18(_arg4_2.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_18, _arg4_2.fields[1])))),
            (x_21)=>x_21
        ];
        return $e89b9b7ee1760219$export$c080b07763463677(patternInput_3[1])($fd65bf8312d3edef$export$199d64cd116a5491(settings))([
            patternInput_3[0],
            (f_22 = (tuple_1)=>tuple_1[1]
            , (_arg4_3 = splitLines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_22(_arg4_3.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_22, _arg4_3.fields[1]))))
        ]);
    });
    const indentedCodeBlock = $6cf548609c1fb621$export$855ebe41e1cc9d1d($1cbdac383b1632f3$export$afc1bfabebaf28a2((line_2)=>$6f9339dcb7ad0d09$export$2344b14b097df817(/^(\s{4}|\t)/g, line_2)
    ), (arg_4)=>new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, new $80fa799ee6d7bef5$export$d96a8827a60d6b69(2, (settings.reformat ? (lines)=>{
            let f_1;
            const n_1 = $c5730ae5119245ea$export$96ec731ed4dcb222($c5730ae5119245ea$export$871de8747c9eaa88((s)=>s.length - s.trimStart().length
            , $1cbdac383b1632f3$export$effcdbd76139450(lines)), {
                Compare: (x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
            }) - 4 | 0;
            f_1 = (str)=>$3583e200a8ea3134$export$236f5df1c02f3d73(n_1, str)
            ;
            const _arg4 = lines;
            return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_1(_arg4.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_1, _arg4.fields[1]));
        } : (x_25)=>x_25
        )(arg_4)), $c5730ae5119245ea$export$6e22c362a0406a2c())
    );
    const listItem = (_arg1_2)=>{
        const otherLines_1 = _arg1_2.fields[1];
        const firstLine_1 = _arg1_2.fields[0];
        return $7e4c281993e75c03$export$871de8747c9eaa88((listItemPrefix)=>{
            let tupledArg_3;
            const strippedFirstLine = $3583e200a8ea3134$export$236f5df1c02f3d73(listItemPrefix.length, firstLine_1);
            const prefixWithSpace = $518fcccc33d36a20$export$10fdab3683b55b22(listItemPrefix, " ") ? listItemPrefix : listItemPrefix + " ";
            const indent = prefixWithSpace.length | 0;
            const patternInput_4 = strippedFirstLine === "" ? $fd65bf8312d3edef$var$findListItemEnd(indent)(new $fd65bf8312d3edef$var$MarkdownState(2))(otherLines_1) : $fd65bf8312d3edef$var$findListItemEnd(indent)(new $fd65bf8312d3edef$var$MarkdownState(1))(otherLines_1);
            const tailRegex = $14cb28be03f8bba6$export$185802fd694ee1f5("^ {0," + $ed39e963967a3eea$export$afbd86327cbebb03(indent) + "}");
            const headPrefix = settings.reformat ? prefixWithSpace.trim() + " " : prefixWithSpace;
            return [
                (tupledArg_3 = [
                    [
                        headPrefix,
                        $518fcccc33d36a20$export$606959e7ccb797f0(headPrefix.length, " ")
                    ],
                    new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, strippedFirstLine, $c5730ae5119245ea$export$871de8747c9eaa88((arg_5)=>$6f9339dcb7ad0d09$export$65980d18b75784e2(tailRegex, arg_5)[1]
                    , patternInput_4[0]))
                ], $e89b9b7ee1760219$export$db0233f52bd892a4($fd65bf8312d3edef$export$199d64cd116a5491(settings), tupledArg_3[0], tupledArg_3[1])),
                patternInput_4[1]
            ];
        }, $6f9339dcb7ad0d09$export$d2d84020f5326cd0($fd65bf8312d3edef$var$listItemRegex, firstLine_1));
    };
    return (arg_7)=>{
        let f_32, _arg4_5;
        return $6cf548609c1fb621$export$6322879f5a137539((lines_16)=>$7e4c281993e75c03$export$c90763f2293d7e67($6cf548609c1fb621$export$58518a0eb5d7e7ad($c5730ae5119245ea$export$cb197a913f6bb809([
                $6cf548609c1fb621$export$c04a3c7d653d8aa0,
                fencedCodeBlock,
                table,
                nonText,
                atxHeading,
                indentedCodeBlock,
                listItem,
                blockQuote
            ]), lines_16), ()=>$6cf548609c1fb621$export$ac8dfd3a7ad06e80((lines_15)=>$6cf548609c1fb621$export$58518a0eb5d7e7ad($c5730ae5119245ea$export$cb197a913f6bb809([
                        $6cf548609c1fb621$export$c04a3c7d653d8aa0,
                        fencedCodeBlock,
                        nonText,
                        listItem,
                        blockQuote,
                        atxHeading,
                        htmlType1to6
                    ]), lines_15)
                , (arg_6)=>{
                    const f_27 = (lines_14)=>$6cf548609c1fb621$export$206f4d4d34012a5f(settings.reformat, lines_14)
                    ;
                    const _arg4_4 = $6cf548609c1fb621$export$8e02eae49deb618c($6cf548609c1fb621$export$97415d645e8556b1(/(\\|\s{2}|<br\/?>)$/gi))(arg_6);
                    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_27(_arg4_4.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_27, _arg4_4.fields[1]));
                })(lines_16)
            )
        )((f_32 = (str_7)=>$6f9339dcb7ad0d09$export$5efd720ef35c8e98(settings.tabWidth, str_7)
        , (_arg4_5 = arg_7, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_32(_arg4_5.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_32, _arg4_5.fields[1])))));
    };
}
function $fd65bf8312d3edef$var$mdMarker(marker) {
    return $14cb28be03f8bba6$export$185802fd694ee1f5("^ {0,3}" + marker, 1);
}
const $fd65bf8312d3edef$var$listItemRegex = $fd65bf8312d3edef$var$mdMarker("([-+*]|[0-9]+[.)])(\\s+|$)");
const $fd65bf8312d3edef$var$blockQuoteRegex = $fd65bf8312d3edef$var$mdMarker("\u003e");
const $fd65bf8312d3edef$var$fencedCodeBlockRegex = $fd65bf8312d3edef$var$mdMarker("(`{3,}|~{3,})");
const $fd65bf8312d3edef$var$lineStartsWith = (arg)=>{
    const regex = $fd65bf8312d3edef$var$mdMarker(arg);
    return (line)=>$6f9339dcb7ad0d09$export$2344b14b097df817(regex, line)
    ;
};
function $fd65bf8312d3edef$var$findListItemEnd(indent) {
    const loop = (output, state_1, lines)=>{
        const exitLoop = ()=>[
                $c5730ae5119245ea$export$66c1ae025e96b4bc(output),
                $1cbdac383b1632f3$export$88e0dae599377b39(lines)
            ]
        ;
        if ($c5730ae5119245ea$export$dd1bc94b04021eeb(lines)) return exitLoop();
        else {
            const line_2 = $c5730ae5119245ea$export$5fd5031fecdacec3(lines);
            let trimmedLine;
            const line = line_2;
            let p = 0;
            while(p < indent && p < line.length && line[p] === " ")p = p + 1 | 0;
            trimmedLine = $518fcccc33d36a20$export$662d3818631fba36(line, p);
            const continueLoop = ()=>{
                let line_1, state;
                return loop($c5730ae5119245ea$export$8327ebbef2a0ba76(line_2, output), (line_1 = trimmedLine, (state = state_1, state.tag === 1 ? $fd65bf8312d3edef$var$lineStartsWith("(```|~~~)")(line_1) ? new $fd65bf8312d3edef$var$MarkdownState(0) : (!$6f9339dcb7ad0d09$export$949cdd5cc1255afe(line_1) ? true : $fd65bf8312d3edef$var$lineStartsWith("#{1,6} ")(line_1)) ? new $fd65bf8312d3edef$var$MarkdownState(2) : new $fd65bf8312d3edef$var$MarkdownState(1) : state.tag === 2 ? $fd65bf8312d3edef$var$lineStartsWith("(```|~~~)")(line_1) ? new $fd65bf8312d3edef$var$MarkdownState(0) : (!$6f9339dcb7ad0d09$export$949cdd5cc1255afe(line_1) ? true : $fd65bf8312d3edef$var$lineStartsWith("#{1,6} ")(line_1)) ? new $fd65bf8312d3edef$var$MarkdownState(2) : $6f9339dcb7ad0d09$export$2344b14b097df817(/^ {4,}/g, line_1) ? new $fd65bf8312d3edef$var$MarkdownState(2) : new $fd65bf8312d3edef$var$MarkdownState(1) : $fd65bf8312d3edef$var$lineStartsWith("(```|~~~)")(line_1) ? new $fd65bf8312d3edef$var$MarkdownState(2) : new $fd65bf8312d3edef$var$MarkdownState(0))), $c5730ae5119245ea$export$c01875f616615628(lines));
            };
            if ($6f9339dcb7ad0d09$export$7ee701e290d9865(line_2)) return continueLoop();
            else if (line_2.length - trimmedLine.length < indent) switch(state_1.tag){
                case 1:
                    if (($6f9339dcb7ad0d09$export$2344b14b097df817($fd65bf8312d3edef$var$blockQuoteRegex, line_2) ? true : $6f9339dcb7ad0d09$export$2344b14b097df817($fd65bf8312d3edef$var$listItemRegex, line_2)) ? true : $6f9339dcb7ad0d09$export$2344b14b097df817($fd65bf8312d3edef$var$fencedCodeBlockRegex, line_2)) return exitLoop();
                    else return continueLoop();
                case 2:
                    return exitLoop();
                default:
                    return continueLoop();
            }
            else return continueLoop();
        }
    };
    return $ed39e963967a3eea$export$955fe82a9145db62(2, loop, [
        $c5730ae5119245ea$export$6e22c362a0406a2c()
    ]);
}
























function $1d9202ebfdcd392e$export$119a28847c08b9b4(marker, eraseIndentedMarker, reformatPrefix, settings, lines) {
    let prefixLength, f_2, _arg4;
    const rx = $14cb28be03f8bba6$export$185802fd694ee1f5("^(\\s*)" + marker + "\\s*", 257);
    let patternInput;
    const lines_1 = $1cbdac383b1632f3$export$effcdbd76139450(lines);
    const p = $7e4c281993e75c03$export$37721a79838ca038($7e4c281993e75c03$export$871de8747c9eaa88((arg)=>$6f9339dcb7ad0d09$export$65980d18b75784e2(rx, arg)[0]
    , $7e4c281993e75c03$export$37721a79838ca038($c5730ae5119245ea$export$d65cb303b863e3bf((line)=>$6f9339dcb7ad0d09$export$949cdd5cc1255afe(line)
    , lines_1), $c5730ae5119245ea$export$1acbe849d0cb723e(lines_1))), "");
    patternInput = [
        p,
        $6f9339dcb7ad0d09$export$5efd720ef35c8e98(settings.tabWidth, p).length
    ];
    const prefix = patternInput[0];
    const newPrefix = settings.reformat ? reformatPrefix(prefix) : prefix;
    return [
        [
            newPrefix,
            newPrefix
        ],
        (prefixLength = patternInput[1] | 0, (f_2 = (arg_3)=>{
            let pre;
            let tupledArg_1;
            const tupledArg = $6f9339dcb7ad0d09$export$65980d18b75784e2(rx, $6f9339dcb7ad0d09$export$5efd720ef35c8e98(settings.tabWidth, arg_3));
            tupledArg_1 = [
                (pre = tupledArg[0], eraseIndentedMarker ? $3583e200a8ea3134$export$236f5df1c02f3d73(prefixLength, $518fcccc33d36a20$export$606959e7ccb797f0(pre.length, " ")) : $3583e200a8ea3134$export$236f5df1c02f3d73(prefixLength, pre)),
                tupledArg[1]
            ];
            return tupledArg_1[0] + tupledArg_1[1];
        }, (_arg4 = lines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_2(_arg4.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_2, _arg4.fields[1])))))
    ];
}
function $1d9202ebfdcd392e$var$maybeReformat(settings, prefix) {
    if (!settings.reformat) return prefix;
    else {
        const p = prefix.trimEnd();
        if (p === "") return p;
        else return p + " ";
    }
}
function $1d9202ebfdcd392e$export$4818399e242967ab(tabSize) {
    return (line)=>{
        let initWidth;
        return $6f9339dcb7ad0d09$export$56b8a9d80ba24b50()((initWidth = $6f9339dcb7ad0d09$export$13c2f47aa8a3882d(tabSize)($6f9339dcb7ad0d09$export$42f65d3844869e20(line)) | 0, (str)=>$7e4c281993e75c03$export$2ab9a8f9f1186f14($5a541a3f8220d610$export$93e2b83da34ff82a($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (tupledArg)=>{
                const maybeAccStr = tupledArg[0];
                const accWidth = tupledArg[1] | 0;
                return (s)=>{
                    const accWidth$0027 = accWidth + $6f9339dcb7ad0d09$export$13c2f47aa8a3882d(tabSize)(s) | 0;
                    if (maybeAccStr != null) {
                        const spcCount = tabSize - accWidth % tabSize | 0;
                        return [
                            maybeAccStr + $518fcccc33d36a20$export$606959e7ccb797f0(spcCount, " ") + s,
                            accWidth$0027 + spcCount
                        ];
                    } else return [
                        s,
                        accWidth$0027
                    ];
                };
            }), [
                void 0,
                initWidth
            ], str.split("\t"))[0])
        ))(line);
    };
}
class $1d9202ebfdcd392e$export$aa318e0578993894 extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "Decoration",
            "Normal"
        ];
    }
}
function $1d9202ebfdcd392e$export$7f7e89ef4e923dc3() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Parsing.Comments.LineType", [], $1d9202ebfdcd392e$export$aa318e0578993894, ()=>[
            [],
            []
        ]
    );
}
function $1d9202ebfdcd392e$var$splitAtWidth(tabWidth, leftWidth, extraWidth, line) {
    const spaces = (n)=>$518fcccc33d36a20$export$606959e7ccb797f0(n, " ")
    ;
    const loop = (accWidth_mut, p_mut)=>{
        loop: while(true){
            const accWidth = accWidth_mut, p = p_mut;
            if (p >= $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).length) return $6f9339dcb7ad0d09$export$45b30bb84adefa7e($6f9339dcb7ad0d09$export$42f65d3844869e20(line) + $6f9339dcb7ad0d09$export$f587a4e4415f4276(line), "");
            else {
                const ccWidth = $6f9339dcb7ad0d09$export$de9247834912d11c(tabWidth, leftWidth + accWidth, $6f9339dcb7ad0d09$export$f587a4e4415f4276(line)[p].charCodeAt(0)) | 0;
                const diff = extraWidth - accWidth - ccWidth | 0;
                if (diff === 0) return $6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(p + 1)(line);
                else if (diff > 0) {
                    accWidth_mut = accWidth + ccWidth;
                    p_mut = p + 1;
                    continue loop;
                } else {
                    const line_1 = $6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(p)(line);
                    return $6f9339dcb7ad0d09$export$45b30bb84adefa7e($6f9339dcb7ad0d09$export$42f65d3844869e20(line_1) + spaces(diff + ccWidth), spaces($d70d15e757640036$export$87c665ad90b41cb3(diff)) + $518fcccc33d36a20$export$662d3818631fba36($6f9339dcb7ad0d09$export$f587a4e4415f4276(line_1), 1));
                }
            }
            break;
        }
    };
    return $1d9202ebfdcd392e$export$4818399e242967ab(tabWidth)(extraWidth < 1 ? line : loop(0, 0));
}
function $1d9202ebfdcd392e$var$processCommentContent(settings, contentParser, prefix) {
    return $6cf548609c1fb621$export$6322879f5a137539($6cf548609c1fb621$export$ac8dfd3a7ad06e80((_arg1)=>{
        if (_arg1.fields[0][0].tag === 1) return void 0;
        else return [
            new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, new $80fa799ee6d7bef5$export$d96a8827a60d6b69(2, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $6f9339dcb7ad0d09$export$b53b8f8eed07f89c()(_arg1.fields[0][1]), $c5730ae5119245ea$export$6e22c362a0406a2c())), $c5730ae5119245ea$export$6e22c362a0406a2c()),
            $1cbdac383b1632f3$export$88e0dae599377b39(_arg1.fields[1])
        ];
    }, (arg)=>{
        let f_1, _arg4, f_6, _arg4_1;
        let lines;
        const f_11 = (tuple)=>tuple[1]
        ;
        const _arg4_2 = arg;
        lines = new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_11(_arg4_2.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_11, _arg4_2.fields[1]));
        const prefix_1 = $1d9202ebfdcd392e$var$maybeReformat(settings, prefix);
        return $e89b9b7ee1760219$export$c080b07763463677((a)=>prefix_1
        )($ed39e963967a3eea$export$955fe82a9145db62(1, contentParser, [
            settings
        ]))([
            (f_1 = (l)=>$6f9339dcb7ad0d09$export$42f65d3844869e20(l)
            , (_arg4 = lines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_1(_arg4.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_1, _arg4.fields[1])))),
            (f_6 = (l_1)=>$6f9339dcb7ad0d09$export$f587a4e4415f4276(l_1)
            , (_arg4_1 = lines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_6(_arg4_1.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_6, _arg4_1.fields[1]))))
        ]);
    }));
}
const $1d9202ebfdcd392e$var$wsRegex = $14cb28be03f8bba6$export$185802fd694ee1f5("^\\s*", 257);
class $1d9202ebfdcd392e$export$91352b5738766c8b extends $ae70510fbd2502e5$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "LineFmt",
            "MultiLineBlockFmt",
            "SingleLineBlockFmt"
        ];
    }
}
function $1d9202ebfdcd392e$export$6aca2ecd345ec739() {
    return $7d684f9c58c88b9e$export$1ae0dd948e267c6b("Parsing.Comments.CommentFormat", [], $1d9202ebfdcd392e$export$91352b5738766c8b, ()=>[
            [
                [
                    "Item1",
                    $3583e200a8ea3134$export$4984d4827624d577($6f9339dcb7ad0d09$export$ce355770cc1c8d90())
                ],
                [
                    "Item2",
                    $7d684f9c58c88b9e$export$d5481a1dd0e3648a
                ]
            ],
            [
                [
                    "Item1",
                    $7d684f9c58c88b9e$export$2163aa004254c8ff($1d9202ebfdcd392e$export$7f7e89ef4e923dc3(), $6f9339dcb7ad0d09$export$ce355770cc1c8d90())
                ],
                [
                    "Item2",
                    $7d684f9c58c88b9e$export$5fe717259b8d6105($6f9339dcb7ad0d09$export$ce355770cc1c8d90())
                ],
                [
                    "Item3",
                    $7d684f9c58c88b9e$export$a0bfd80c70f2d46b($6f9339dcb7ad0d09$export$ce355770cc1c8d90())
                ],
                [
                    "Item4",
                    $7d684f9c58c88b9e$export$36bbd56a39d3f734
                ]
            ],
            [
                [
                    "Item1",
                    $7d684f9c58c88b9e$export$2163aa004254c8ff($1d9202ebfdcd392e$export$7f7e89ef4e923dc3(), $6f9339dcb7ad0d09$export$ce355770cc1c8d90())
                ],
                [
                    "Item2",
                    $7d684f9c58c88b9e$export$36bbd56a39d3f734
                ]
            ]
        ]
    );
}
function $1d9202ebfdcd392e$var$inspectAndProcessContent(fmt, contentParser, settings) {
    let b_2;
    const tabWidth = settings.tabWidth | 0;
    let patternInput;
    switch(fmt.tag){
        case 1:
            {
                const bodyMarkers = fmt.fields[3];
                patternInput = [
                    fmt.fields[1],
                    $14cb28be03f8bba6$export$185802fd694ee1f5("^\\s*" + (bodyMarkers !== "" ? "[" + bodyMarkers + "]?\\s*" : ""), 257),
                    0
                ];
                break;
            }
        case 2:
            patternInput = [
                $c4c313718bcc393b$export$6e22c362a0406a2c(),
                $1d9202ebfdcd392e$var$wsRegex,
                0
            ];
            break;
        default:
            patternInput = [
                fmt.fields[0],
                $1d9202ebfdcd392e$var$wsRegex,
                fmt.fields[1]
            ];
    }
    const prefixRegex = patternInput[1];
    const initialIndent_1 = patternInput[2] | 0;
    const strWidth = (str)=>$6f9339dcb7ad0d09$export$6736e22116c64a4c(initialIndent_1, tabWidth, str)
    ;
    const patternInput_2 = $c4c313718bcc393b$export$9b19c2e3f2aab20f((minIndent, line_1)=>{
        let patternInput_1;
        const line = line_1;
        const m = $14cb28be03f8bba6$export$4659b591c19bdf3d(prefixRegex, $6f9339dcb7ad0d09$export$f587a4e4415f4276(line));
        patternInput_1 = $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).length === m[0].length ? [
            new $1d9202ebfdcd392e$export$aa318e0578993894(1),
            2147483647
        ] : $6f9339dcb7ad0d09$export$949cdd5cc1255afe($6f9339dcb7ad0d09$export$f587a4e4415f4276(line)) ? [
            new $1d9202ebfdcd392e$export$aa318e0578993894(1),
            strWidth(m[0])
        ] : [
            new $1d9202ebfdcd392e$export$aa318e0578993894(0),
            2147483647
        ];
        return [
            [
                patternInput_1[0],
                line_1
            ],
            $ed39e963967a3eea$export$96ec731ed4dcb222((x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
            , minIndent, patternInput_1[1])
        ];
    }, 2147483647, patternInput[0]);
    const indentIncrease = patternInput_2[1] | 0;
    let patternInput_4;
    const adjust = (tupledArg_mut)=>{
        adjust: while(true){
            const tupledArg = tupledArg_mut;
            const typ_1 = tupledArg[0];
            const line_2 = tupledArg[1];
            if (typ_1.tag === 1) {
                const line_3 = $1d9202ebfdcd392e$var$splitAtWidth(tabWidth, initialIndent_1, indentIncrease, line_2);
                const line_4 = $6f9339dcb7ad0d09$export$64cd1025b86a9dd2()((prefix)=>$1d9202ebfdcd392e$var$maybeReformat(settings, prefix)
                )($1d9202ebfdcd392e$export$4818399e242967ab(tabWidth)(line_3));
                return [
                    [
                        typ_1,
                        line_4
                    ],
                    $518fcccc33d36a20$export$c6e2787f63ca055d($6f9339dcb7ad0d09$export$f587a4e4415f4276(line_4)) ? void 0 : $6f9339dcb7ad0d09$export$42f65d3844869e20(line_4)
                ];
            } else if (strWidth($14cb28be03f8bba6$export$4659b591c19bdf3d(prefixRegex, $6f9339dcb7ad0d09$export$f587a4e4415f4276(line_2))[0]) >= indentIncrease) {
                tupledArg_mut = [
                    new $1d9202ebfdcd392e$export$aa318e0578993894(1),
                    line_2
                ];
                continue adjust;
            } else return [
                [
                    typ_1,
                    line_2
                ],
                void 0
            ];
            break;
        }
    };
    patternInput_4 = $c4c313718bcc393b$export$9b19c2e3f2aab20f((maybePrefix, line_5)=>{
        const patternInput_3 = adjust(line_5);
        return [
            patternInput_3[0],
            $7e4c281993e75c03$export$37721a79838ca038(maybePrefix, patternInput_3[1])
        ];
    }, void 0, patternInput_2[0]);
    const lines_3 = patternInput_4[0];
    const patternInput_5 = fmt.tag === 1 ? [
        new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, fmt.fields[0], $c5730ae5119245ea$export$c80b5fc7454ef206($c4c313718bcc393b$export$10d8903dec122b9d(lines_3, (b_2 = $c4c313718bcc393b$export$6e22c362a0406a2c(), $7e4c281993e75c03$export$37721a79838ca038($7e4c281993e75c03$export$871de8747c9eaa88((arg)=>$c4c313718bcc393b$export$439306a4dcaafbb9([
                new $1d9202ebfdcd392e$export$aa318e0578993894(0),
                arg
            ])
        , fmt.fields[2]), b_2))))),
        ""
    ] : fmt.tag === 2 ? [
        new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, fmt.fields[0], $c5730ae5119245ea$export$6e22c362a0406a2c()),
        fmt.fields[1]
    ] : [
        $1cbdac383b1632f3$export$da968afc9c9924d3(lines_3),
        ""
    ];
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, new $80fa799ee6d7bef5$export$d96a8827a60d6b69(0, $1d9202ebfdcd392e$var$processCommentContent(settings, contentParser, $7e4c281993e75c03$export$37721a79838ca038(patternInput_4[1], patternInput_5[1]))(patternInput_5[0])), $c5730ae5119245ea$export$6e22c362a0406a2c());
}
function $1d9202ebfdcd392e$export$5d080f5a78d4f5b3(contentParser, marker, settings) {
    const prefixRegex = $14cb28be03f8bba6$export$185802fd694ee1f5("^(\\s*)" + marker, 257);
    const strWidth = (str)=>$6f9339dcb7ad0d09$export$6736e22116c64a4c(0, settings.tabWidth, str)
    ;
    const tryMatchPrefix = (str_1)=>{
        const m = $14cb28be03f8bba6$export$4659b591c19bdf3d(prefixRegex, str_1);
        if (m != null) return $6f9339dcb7ad0d09$export$6574aa8202715258(str_1, m[0].length);
        else return void 0;
    };
    return (_arg1)=>$3583e200a8ea3134$export$e5403e43878ec1b6($3583e200a8ea3134$export$a75d1723e6bda2ec, tryMatchPrefix(_arg1.fields[0]), (_arg1_1)=>{
            const firstLine = _arg1_1;
            const indent = strWidth($6f9339dcb7ad0d09$export$42f65d3844869e20(firstLine)) | 0;
            const patternInput = $3583e200a8ea3134$export$f57f1824c5412723((arg)=>$7e4c281993e75c03$export$3dea766d36a8935f((l)=>strWidth($6f9339dcb7ad0d09$export$42f65d3844869e20(l)) === indent
                , tryMatchPrefix(arg))
            )(_arg1.fields[1]);
            return $3583e200a8ea3134$export$ba4da117d7bdef59($3583e200a8ea3134$export$a75d1723e6bda2ec, [
                $1d9202ebfdcd392e$var$inspectAndProcessContent(new $1d9202ebfdcd392e$export$91352b5738766c8b(0, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, firstLine, patternInput[0]), indent), contentParser, settings),
                $1cbdac383b1632f3$export$88e0dae599377b39(patternInput[1])
            ]);
        })
    ;
}
function $1d9202ebfdcd392e$export$f2ae215066c4835a(contentParser, bodyMarkers, defaultBodyMarker, startMarker, endMarker, settings) {
    const patternInput = [
        $14cb28be03f8bba6$export$185802fd694ee1f5("^\\s*" + startMarker + "\\s*", 257),
        $14cb28be03f8bba6$export$185802fd694ee1f5(endMarker, 257)
    ];
    const endRegex = patternInput[1];
    const findEnd = (acc_mut, _arg1_mut)=>{
        findEnd: while(true){
            const acc = acc_mut, _arg1 = _arg1_mut;
            if (!$c5730ae5119245ea$export$dd1bc94b04021eeb(_arg1)) {
                const str = $c5730ae5119245ea$export$5fd5031fecdacec3(_arg1);
                const rest = $c5730ae5119245ea$export$c01875f616615628(_arg1);
                const m = $14cb28be03f8bba6$export$4659b591c19bdf3d(endRegex, str);
                if (m != null) {
                    const patternInput_1 = $6f9339dcb7ad0d09$export$949cdd5cc1255afe($518fcccc33d36a20$export$662d3818631fba36(str, 0, m.index)) ? [
                        $c5730ae5119245ea$export$8327ebbef2a0ba76($6f9339dcb7ad0d09$export$45b30bb84adefa7e("", str), acc),
                        void 0
                    ] : [
                        acc,
                        $6f9339dcb7ad0d09$export$45b30bb84adefa7e("", str)
                    ];
                    return [
                        $c5730ae5119245ea$export$66c1ae025e96b4bc(patternInput_1[0]),
                        patternInput_1[1],
                        rest
                    ];
                } else {
                    acc_mut = $c5730ae5119245ea$export$8327ebbef2a0ba76($6f9339dcb7ad0d09$export$45b30bb84adefa7e("", str), acc);
                    _arg1_mut = rest;
                    continue findEnd;
                }
            } else return [
                $c5730ae5119245ea$export$66c1ae025e96b4bc(acc),
                void 0,
                $c5730ae5119245ea$export$6e22c362a0406a2c()
            ];
            break;
        }
    };
    return (_arg1_1)=>{
        const tStrs = _arg1_1.fields[1];
        const hStr = _arg1_1.fields[0];
        const mStart = $14cb28be03f8bba6$export$4659b591c19bdf3d(patternInput[0], hStr);
        if (!(mStart != null)) return $3583e200a8ea3134$export$b234b9af24438e($3583e200a8ea3134$export$a75d1723e6bda2ec, void 0);
        else {
            const hLine = $6f9339dcb7ad0d09$export$6574aa8202715258(hStr, mStart[0].length);
            const mkFirstLine = (p_1)=>{
                if (!$6f9339dcb7ad0d09$export$949cdd5cc1255afe($518fcccc33d36a20$export$662d3818631fba36($6f9339dcb7ad0d09$export$f587a4e4415f4276(hLine), 0, p_1))) return [
                    new $1d9202ebfdcd392e$export$aa318e0578993894(0),
                    hLine
                ];
                else {
                    const hLine_1 = $1d9202ebfdcd392e$export$4818399e242967ab(settings.tabWidth)(hLine);
                    return [
                        new $1d9202ebfdcd392e$export$aa318e0578993894(1),
                        $6f9339dcb7ad0d09$export$64cd1025b86a9dd2()((prefix)=>$1d9202ebfdcd392e$var$maybeReformat(settings, prefix)
                        )(hLine_1)
                    ];
                }
            };
            let patternInput_3;
            const mEnd = $14cb28be03f8bba6$export$4659b591c19bdf3d(endRegex, $6f9339dcb7ad0d09$export$f587a4e4415f4276(hLine));
            if (mEnd != null) {
                const addedLinesPrefix = $6f9339dcb7ad0d09$export$c3ab302d598ba56c($6f9339dcb7ad0d09$export$42f65d3844869e20(hLine)) + defaultBodyMarker;
                patternInput_3 = [
                    new $1d9202ebfdcd392e$export$91352b5738766c8b(2, mkFirstLine(mEnd.index), addedLinesPrefix),
                    tStrs
                ];
            } else {
                const patternInput_2 = findEnd($c5730ae5119245ea$export$6e22c362a0406a2c(), tStrs);
                patternInput_3 = [
                    new $1d9202ebfdcd392e$export$91352b5738766c8b(1, mkFirstLine($6f9339dcb7ad0d09$export$f587a4e4415f4276(hLine).length), patternInput_2[0], patternInput_2[1], bodyMarkers),
                    patternInput_2[2]
                ];
            }
            return $3583e200a8ea3134$export$ba4da117d7bdef59($3583e200a8ea3134$export$a75d1723e6bda2ec, [
                $1d9202ebfdcd392e$var$inspectAndProcessContent(patternInput_3[0], contentParser, settings),
                $1cbdac383b1632f3$export$88e0dae599377b39(patternInput_3[1])
            ]);
        }
    };
}




























const $0f58927fbe9329c9$var$markdown = (settings)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings)
;
const $0f58927fbe9329c9$var$scriptMarkers = [
    $14cb28be03f8bba6$export$185802fd694ee1f5("\u003cscript", 1),
    $14cb28be03f8bba6$export$185802fd694ee1f5("\u003c/script\u003e", 1)
];
const $0f58927fbe9329c9$var$cssMarkers = [
    $14cb28be03f8bba6$export$185802fd694ee1f5("\u003cstyle", 1),
    $14cb28be03f8bba6$export$185802fd694ee1f5("\u003c/style\u003e", 1)
];
function $0f58927fbe9329c9$export$88aae633c7e0c3cb(scriptParser, cssParser, blockTags, settings) {
    const embeddedScript = (markers)=>(contentParser)=>{
            const runContent = (lines)=>{
                const ctx = $80fa799ee6d7bef5$export$97a0acc1878fafa1(settings);
                contentParser(ctx, $c4c313718bcc393b$export$871de8747c9eaa88((l)=>$6f9339dcb7ad0d09$export$45b30bb84adefa7e("", l)
                , lines));
                return $80fa799ee6d7bef5$export$cf92fd1f7736bad1(ctx);
            };
            return $6cf548609c1fb621$export$855ebe41e1cc9d1d((lines_2)=>$6cf548609c1fb621$export$7560c1bc3114403e(markers[0], markers[1], lines_2)
            , (arg20$0040)=>$6cf548609c1fb621$export$bf5ec3b7ee7adf63((_arg1, lines_1)=>{
                    const patternInput = $1cbdac383b1632f3$export$edb1c8e715f3944e(lines_1);
                    if ($14cb28be03f8bba6$export$b74c33566721f70f(markers[1], patternInput.fields[0])) {
                        const matchValue = $1cbdac383b1632f3$export$88e0dae599377b39($c5730ae5119245ea$export$66c1ae025e96b4bc(patternInput.fields[1]));
                        if (matchValue == null) return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $e89b9b7ee1760219$export$b42b71375aae9155(new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $1cbdac383b1632f3$export$4c7897fafd92b108(lines_1), $c5730ae5119245ea$export$6e22c362a0406a2c())), $c5730ae5119245ea$export$6e22c362a0406a2c());
                        else {
                            const middleLines = matchValue;
                            return $1cbdac383b1632f3$export$c40cf5aab899f397($e89b9b7ee1760219$export$b42b71375aae9155(new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $1cbdac383b1632f3$export$4c7897fafd92b108(lines_1), $c5730ae5119245ea$export$6e22c362a0406a2c())), runContent(middleLines));
                        }
                    } else return runContent(lines_1);
                }, settings, arg20$0040)
            );
        }
    ;
    let otherParsers;
    const parsers = $c5730ae5119245ea$export$cb197a913f6bb809([
        $6cf548609c1fb621$export$c04a3c7d653d8aa0,
        $1d9202ebfdcd392e$export$f2ae215066c4835a($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $0f58927fbe9329c9$var$markdown), "", "", "\u003c!--", "--\u003e", settings),
        embeddedScript($0f58927fbe9329c9$var$scriptMarkers)(scriptParser),
        embeddedScript($0f58927fbe9329c9$var$cssMarkers)(cssParser)
    ]);
    otherParsers = (lines_3)=>$6cf548609c1fb621$export$58518a0eb5d7e7ad(parsers, lines_3)
    ;
    const isBlockTag = (pattern, line)=>{
        const m = $14cb28be03f8bba6$export$4659b591c19bdf3d($14cb28be03f8bba6$export$185802fd694ee1f5(pattern, 1), line);
        if (m != null) {
            if ($c4c313718bcc393b$export$dd1bc94b04021eeb(blockTags)) return true;
            else return $c4c313718bcc393b$export$2344b14b097df817((m[1] || "").toLocaleLowerCase(), blockTags, {
                Equals: (x_7, y)=>x_7 === y
                ,
                GetHashCode: (x_7)=>$ed39e963967a3eea$export$b9b095ec8c02760b(x_7)
            });
        } else return false;
    };
    const beginsWithBlockStartTag = $ed39e963967a3eea$export$955fe82a9145db62(1, isBlockTag, [
        "^\\s*\u003c([\\w.-]+)"
    ]);
    const justBlockEndTag = $ed39e963967a3eea$export$955fe82a9145db62(1, isBlockTag, [
        "^\\s*\u003c/([\\w.-]+)\\s*\u003e"
    ]);
    const endsWithBlockTag = $ed39e963967a3eea$export$955fe82a9145db62(1, isBlockTag, [
        "([\\w.-]+)\u003e\\s*$"
    ]);
    return $6cf548609c1fb621$export$6322879f5a137539($6cf548609c1fb621$export$ac8dfd3a7ad06e80(otherParsers, (arg_1)=>{
        const f_1 = (lines_5)=>$6cf548609c1fb621$export$7fcae00e056f3102((tupledArg)=>$e89b9b7ee1760219$export$ba7ca0e7f111fc0b(tupledArg[0], tupledArg[1])
            , lines_5)
        ;
        let _arg4;
        const neList = $6cf548609c1fb621$export$8e02eae49deb618c((lines_4)=>$6cf548609c1fb621$export$3eb3d7d4289547fd((line_1)=>{
                if (justBlockEndTag(line_1)) return true;
                else return beginsWithBlockStartTag(line_1);
            }, lines_4)
        )(arg_1);
        _arg4 = $1cbdac383b1632f3$export$c28c8388be0ab31a($6cf548609c1fb621$export$8e02eae49deb618c($1cbdac383b1632f3$export$d6aec2285be45753((line_2)=>{
            if ($6f9339dcb7ad0d09$export$2344b14b097df817($14cb28be03f8bba6$export$185802fd694ee1f5("([\"\\s]\u003e\\s*|  )$", 1), line_2)) return true;
            else return endsWithBlockTag(line_2);
        })), neList);
        return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_1(_arg4.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_1, _arg4.fields[1]));
    }));
}


const $99598c93a066819c$var$markdown = (settings)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings)
;
function $99598c93a066819c$var$splitBeforeTags(regex, matchParser, noMatchParser, settings, _arg1) {
    const outerHead = _arg1.fields[0];
    const prependRev = (_arg1_1, maybeRest)=>{
        const head = _arg1_1.fields[0];
        const nextRest = $7e4c281993e75c03$export$37721a79838ca038($7e4c281993e75c03$export$871de8747c9eaa88((neList)=>$1cbdac383b1632f3$export$8327ebbef2a0ba76(head, neList)
        , maybeRest), new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, head, $c5730ae5119245ea$export$6e22c362a0406a2c()));
        return $7e4c281993e75c03$export$37721a79838ca038($7e4c281993e75c03$export$871de8747c9eaa88((next)=>prependRev(next, nextRest)
        , $1cbdac383b1632f3$export$88e0dae599377b39(_arg1_1.fields[1])), nextRest);
    };
    const loop = (tagMatch_mut, buffer_mut, maybeOutput_mut, lines_mut)=>{
        loop: while(true){
            const tagMatch = tagMatch_mut, buffer = buffer_mut, maybeOutput = maybeOutput_mut, lines = lines_mut;
            const parser = tagMatch != null ? $ed39e963967a3eea$export$955fe82a9145db62(2, matchParser, [
                tagMatch
            ]) : $ed39e963967a3eea$export$c3095a23b368d1f2(2, noMatchParser);
            const addBufferToOutput = ()=>prependRev(parser(settings)($1cbdac383b1632f3$export$edb1c8e715f3944e(buffer)), maybeOutput)
            ;
            if (!$c5730ae5119245ea$export$dd1bc94b04021eeb(lines)) {
                const headLine = $c5730ae5119245ea$export$5fd5031fecdacec3(lines);
                const m = $14cb28be03f8bba6$export$4659b591c19bdf3d(regex, headLine);
                const patternInput = m != null ? [
                    m,
                    new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, headLine, $c5730ae5119245ea$export$6e22c362a0406a2c()),
                    addBufferToOutput()
                ] : [
                    tagMatch,
                    $1cbdac383b1632f3$export$8327ebbef2a0ba76(headLine, buffer),
                    maybeOutput
                ];
                tagMatch_mut = patternInput[0];
                buffer_mut = patternInput[1];
                maybeOutput_mut = patternInput[2];
                lines_mut = $c5730ae5119245ea$export$c01875f616615628(lines);
                continue loop;
            } else return $1cbdac383b1632f3$export$edb1c8e715f3944e(addBufferToOutput());
            break;
        }
    };
    return loop($14cb28be03f8bba6$export$4659b591c19bdf3d(regex, outerHead), new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, outerHead, $c5730ae5119245ea$export$6e22c362a0406a2c()), void 0, _arg1.fields[1]);
}
const $99598c93a066819c$export$556703cd17c59554 = (()=>{
    const markdownWithInlineTags = (settings, arg)=>{
        let f_1, _arg4;
        return $99598c93a066819c$var$markdown(settings)((f_1 = (s)=>$14cb28be03f8bba6$export$77ad94ebf1c2b9ed(/{@[a-z]+.*?[^\\]}/gi, s, (delegateArg0)=>$518fcccc33d36a20$export$77ad94ebf1c2b9ed(delegateArg0[0], " ", "\u0000")
            )
        , (_arg4 = arg, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_1(_arg4.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_1, _arg4.fields[1])))));
    };
    return (settings_2)=>(arg40$0040)=>$99598c93a066819c$var$splitBeforeTags(/^\s*@(\w+)(.*)$/g, $ed39e963967a3eea$export$7864d59d01b6d6bf(3, (m_1)=>{
                if ($6f9339dcb7ad0d09$export$7ee701e290d9865(m_1[2] || "")) {
                    if ((m_1[1] || "").toLocaleLowerCase() === "example") return (_arg1)=>(arg_1)=>new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $e89b9b7ee1760219$export$b42b71375aae9155(arg_1), $c5730ae5119245ea$export$6e22c362a0406a2c())
                    ;
                    else return (settings_1)=>(arg20$0040)=>$6cf548609c1fb621$export$bf5ec3b7ee7adf63(markdownWithInlineTags, settings_1, arg20$0040)
                    ;
                } else return $ed39e963967a3eea$export$c3095a23b368d1f2(2, markdownWithInlineTags);
            }), markdownWithInlineTags, settings_2, arg40$0040)
    ;
})();
const $99598c93a066819c$export$5adb48440af68970 = (settings_1)=>(arg40$0040)=>$99598c93a066819c$var$splitBeforeTags(/^\s*(@nodoc|{@template|{@endtemplate|{@macro)/g, (_arg1, settings, arg20$0040)=>$6cf548609c1fb621$export$bf5ec3b7ee7adf63($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$var$markdown), settings, arg20$0040)
        , $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$var$markdown), settings_1, arg40$0040)
;
const $99598c93a066819c$export$facd2f5b1b9287bb = (settings_7)=>(arg40$0040_1)=>$99598c93a066819c$var$splitBeforeTags(/^\s*\.([A-Z]+)/g, $ed39e963967a3eea$export$7864d59d01b6d6bf(3, (m)=>{
            if ((m[1] || "") === "EXAMPLE") return (settings_4)=>(arg20$0040_2)=>$6cf548609c1fb621$export$bf5ec3b7ee7adf63((settings, lines)=>{
                        const trimmedExampleSection = (settings_3, arg20$0040_1)=>$6cf548609c1fb621$export$bf5ec3b7ee7adf63((settings_2, arg40$0040)=>$99598c93a066819c$var$splitBeforeTags(/^\s*PS C:\\>/g, (_arg1, settings_1, arg20$0040)=>$6cf548609c1fb621$export$bf5ec3b7ee7adf63($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$var$markdown), settings_1, arg20$0040)
                                , $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$var$markdown), settings_2, arg40$0040)
                            , settings_3, arg20$0040_1)
                        ;
                        const matchValue = $1cbdac383b1632f3$export$afc1bfabebaf28a2((l)=>$6f9339dcb7ad0d09$export$7ee701e290d9865(l)
                        )(lines);
                        if (matchValue == null) return trimmedExampleSection(settings, lines);
                        else if (matchValue[1] != null) {
                            const blankLines_1 = matchValue[0];
                            const remaining = matchValue[1];
                            return $1cbdac383b1632f3$export$8327ebbef2a0ba76($e89b9b7ee1760219$export$b42b71375aae9155(blankLines_1), trimmedExampleSection(settings, remaining));
                        } else {
                            const blankLines = matchValue[0];
                            return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $e89b9b7ee1760219$export$b42b71375aae9155(blankLines), $c5730ae5119245ea$export$6e22c362a0406a2c());
                        }
                    }, settings_4, arg20$0040_2)
            ;
            else return (settings_6)=>(arg20$0040_3)=>$6cf548609c1fb621$export$bf5ec3b7ee7adf63((settings_5, arg)=>{
                        const tupledArg = $1d9202ebfdcd392e$export$119a28847c08b9b4("", false, (_arg2)=>"  "
                        , settings_5, arg);
                        return $e89b9b7ee1760219$export$db0233f52bd892a4($99598c93a066819c$var$markdown(settings_5), tupledArg[0], tupledArg[1]);
                    }, settings_6, arg20$0040_3)
            ;
        }), $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$var$markdown), settings_7, arg40$0040_1)
;
const $99598c93a066819c$export$c86f42639fd67153 = $99598c93a066819c$var$markdown;
function $99598c93a066819c$export$852f70b1f9fa7d6c(settings) {
    const indentedLines = $6cf548609c1fb621$export$2c93594b4c05c833($1cbdac383b1632f3$export$afc1bfabebaf28a2((line)=>line[0] === " " ? true : line[0] === "\t"
    ));
    return $6cf548609c1fb621$export$6322879f5a137539($6cf548609c1fb621$export$ac8dfd3a7ad06e80((lines_2)=>$6cf548609c1fb621$export$58518a0eb5d7e7ad($c5730ae5119245ea$export$cb197a913f6bb809([
            $6cf548609c1fb621$export$c04a3c7d653d8aa0,
            indentedLines
        ]), lines_2)
    , (arg_1)=>{
        const f_1 = (arg)=>new $80fa799ee6d7bef5$export$d96a8827a60d6b69(1, [
                [
                    "",
                    ""
                ],
                arg
            ])
        ;
        const _arg4 = $6cf548609c1fb621$export$8e02eae49deb618c($6cf548609c1fb621$export$97415d645e8556b1(/  $/g))(arg_1);
        return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_1(_arg4.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_1, _arg4.fields[1]));
    }));
}
const $99598c93a066819c$export$14d468532af654a8 = (()=>{
    const blank = $80fa799ee6d7bef5$export$71d5049186c62ec9($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $946ea15fc111c75e$export$47b8918faa571deb));
    const blockTags = [
        "code",
        "description",
        "example",
        "exception",
        "include",
        "inheritdoc",
        "list",
        "listheader",
        "item",
        "para",
        "param",
        "permission",
        "remarks",
        "seealso",
        "summary",
        "term",
        "typeparam",
        "typeparamref",
        "returns",
        "value"
    ];
    return (settings)=>{
        const clo4 = $0f58927fbe9329c9$export$88aae633c7e0c3cb($ed39e963967a3eea$export$7864d59d01b6d6bf(2, blank), $ed39e963967a3eea$export$7864d59d01b6d6bf(2, blank), blockTags, settings);
        return (arg40)=>clo4(arg40)
        ;
    };
})();



const $6aba1ea4fa57179a$var$markdown = (settings)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings)
;
function $6aba1ea4fa57179a$export$47bef67bc08eacbc(commentParsers) {
    return (ctx)=>(seqLines)=>{
            $80fa799ee6d7bef5$export$c0c9bee6343f1d85($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (settings)=>{
                let parsers;
                return $6cf548609c1fb621$export$6322879f5a137539($6cf548609c1fb621$export$ac8dfd3a7ad06e80((parsers = $c5730ae5119245ea$export$871de8747c9eaa88($ed39e963967a3eea$export$880b1e43568f4c50((cp)=>$ed39e963967a3eea$export$955fe82a9145db62(1, cp, [
                        settings
                    ])
                , [
                    [
                        0,
                        2
                    ]
                ]), commentParsers), (lines)=>$6cf548609c1fb621$export$58518a0eb5d7e7ad(parsers, lines)
                ), (arg)=>new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $e89b9b7ee1760219$export$b42b71375aae9155(arg), $c5730ae5119245ea$export$6e22c362a0406a2c())
                ));
            }), ctx, seqLines);
        }
    ;
}
const $6aba1ea4fa57179a$export$8724c8703a551e81 = (contentParser)=>(marker)=>(settings)=>$1d9202ebfdcd392e$export$5d080f5a78d4f5b3(contentParser, marker, settings)
;
const $6aba1ea4fa57179a$export$64487e37c5efc2ec = $6aba1ea4fa57179a$export$8724c8703a551e81($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$var$markdown));
const $6aba1ea4fa57179a$export$919f4fcdb677e3e8 = (contentParser)=>(tupledArg)=>(tupledArg_1)=>(settings)=>$1d9202ebfdcd392e$export$f2ae215066c4835a(contentParser, tupledArg[0], tupledArg[1], tupledArg_1[0], tupledArg_1[1], settings)
;
const $6aba1ea4fa57179a$export$f2629393883ee529 = $6aba1ea4fa57179a$export$919f4fcdb677e3e8($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$var$markdown))([
    "",
    ""
]);
const $6aba1ea4fa57179a$export$d38c04023a68972a = $6aba1ea4fa57179a$export$64487e37c5efc2ec("//");
const $6aba1ea4fa57179a$export$130e0a92a66f7aeb = $6aba1ea4fa57179a$export$919f4fcdb677e3e8($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$var$markdown))([
    "*",
    ""
])([
    "/\\*",
    "\\*/"
]);
const $6aba1ea4fa57179a$export$affc3f9492e2e59c = [
    "/\\*[*!]",
    "\\*/"
];
const $6aba1ea4fa57179a$export$4858af50da75e0e8 = $6aba1ea4fa57179a$export$47bef67bc08eacbc($c5730ae5119245ea$export$cb197a913f6bb809([
    $6aba1ea4fa57179a$export$919f4fcdb677e3e8($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
        "*",
        " * "
    ])($6aba1ea4fa57179a$export$affc3f9492e2e59c),
    $6aba1ea4fa57179a$export$130e0a92a66f7aeb,
    $6aba1ea4fa57179a$export$8724c8703a551e81($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))("//[/!]"),
    $6aba1ea4fa57179a$export$d38c04023a68972a
]));
const $6aba1ea4fa57179a$export$dbf350e5966cf602 = $6aba1ea4fa57179a$export$4858af50da75e0e8;
const $6aba1ea4fa57179a$export$c0bb0b647f701bb5 = (()=>{
    let oldParser;
    const blockTags = [];
    oldParser = (settings)=>{
        const clo4 = $0f58927fbe9329c9$export$88aae633c7e0c3cb($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8), $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$dbf350e5966cf602), blockTags, settings);
        return (arg40)=>clo4(arg40)
        ;
    };
    return (ctx)=>(seqLines)=>{
            $80fa799ee6d7bef5$export$c0c9bee6343f1d85($ed39e963967a3eea$export$7864d59d01b6d6bf(2, oldParser), ctx, seqLines);
        }
    ;
})();














const $e1761599b71ea525$var$markdown = (settings)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings)
;
const $e1761599b71ea525$var$newlineRegex = $14cb28be03f8bba6$export$185802fd694ee1f5("(\\\\(\\\\\\*?|hline|newline|break|linebreak)(\\[.*?\\])?(\\{.*?\\})?\\s*$)|  $|([^\\\\]%)");
const $e1761599b71ea525$var$blockCommands = [
    "[",
    "begin",
    "item"
];
const $e1761599b71ea525$var$preserveEnvironments = $5a541a3f8220d610$export$bb44f104e3c54dae((x)=>[
        x,
        x + "*"
    ]
, [
    "align",
    "alltt",
    "displaymath",
    "equation",
    "gather",
    "listing",
    "lstlisting",
    "math",
    "multline",
    "verbatim"
]);
const $e1761599b71ea525$var$preserveShortcuts = [
    "\\(",
    "\\[",
    "$",
    "$$"
];
function $e1761599b71ea525$var$takeFrom2ndLineUntil(otherParser, parser, _arg1) {
    const bufferToBlocks = (arg)=>parser($1cbdac383b1632f3$export$edb1c8e715f3944e(arg))
    ;
    const loopFrom2ndLine = (buffer_mut, lines_mut)=>{
        let arg00$0040;
        loopFrom2ndLine: while(true){
            const buffer = buffer_mut, lines = lines_mut;
            const matchValue = $1cbdac383b1632f3$export$88e0dae599377b39(lines);
            if (matchValue != null) {
                const tail = matchValue.fields[1];
                const head = matchValue.fields[0];
                const matchValue_1 = otherParser(matchValue);
                if (matchValue_1 != null) {
                    const tupledArg = matchValue_1;
                    return [
                        (arg00$0040 = bufferToBlocks(buffer), (b)=>$1cbdac383b1632f3$export$10d8903dec122b9d(arg00$0040, b)
                        )(tupledArg[0]),
                        tupledArg[1]
                    ];
                } else {
                    buffer_mut = $1cbdac383b1632f3$export$8327ebbef2a0ba76(head, buffer);
                    lines_mut = tail;
                    continue loopFrom2ndLine;
                }
            } else return [
                bufferToBlocks(buffer),
                void 0
            ];
            break;
        }
    };
    return loopFrom2ndLine(new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], $c5730ae5119245ea$export$6e22c362a0406a2c()), _arg1.fields[1]);
}
const $e1761599b71ea525$var$commandRegex = $14cb28be03f8bba6$export$185802fd694ee1f5("^\\\\(\\[|[a-z]+)\\*?\\s*(?:(?:\\[.*?\\]|\\{(.*?)\\})\\s*)*");
function $e1761599b71ea525$var$findPreserveSection(beginMarker) {
    const endMarker = (beginMarker === "$" ? true : beginMarker === "$$") ? beginMarker : beginMarker === "\\(" ? "\\)" : beginMarker === "\\[" ? "\\]" : "\\end{" + beginMarker + "}";
    const checkLine = (line_mut, offset_mut)=>{
        checkLine: while(true){
            const line = line_mut, offset = offset_mut;
            const p = line.indexOf(endMarker, offset) | 0;
            if (p < 0) return false;
            else if (p === 0 ? true : $518fcccc33d36a20$export$2a1422e7517645a9(line, p - 1) !== "\\") return true;
            else {
                line_mut = line;
                offset_mut = p + 1;
                continue checkLine;
            }
            break;
        }
    };
    const loop = (acc_mut, lines_mut)=>{
        loop: while(true){
            const acc = acc_mut, lines = lines_mut;
            if (!$c5730ae5119245ea$export$dd1bc94b04021eeb(lines)) {
                const tail = $c5730ae5119245ea$export$c01875f616615628(lines);
                const head = $c5730ae5119245ea$export$5fd5031fecdacec3(lines);
                if (checkLine(head, 0)) return [
                    $c5730ae5119245ea$export$66c1ae025e96b4bc($c5730ae5119245ea$export$8327ebbef2a0ba76(head, acc)),
                    tail
                ];
                else {
                    acc_mut = $c5730ae5119245ea$export$8327ebbef2a0ba76(head, acc);
                    lines_mut = tail;
                    continue loop;
                }
            } else return [
                $c5730ae5119245ea$export$66c1ae025e96b4bc(acc),
                $c5730ae5119245ea$export$6e22c362a0406a2c()
            ];
            break;
        }
    };
    return (_arg1)=>{
        const patternInput = loop($c5730ae5119245ea$export$6e22c362a0406a2c(), _arg1.fields[1]);
        return [
            new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, new $80fa799ee6d7bef5$export$d96a8827a60d6b69(2, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], patternInput[0])), $c5730ae5119245ea$export$6e22c362a0406a2c()),
            $1cbdac383b1632f3$export$88e0dae599377b39(patternInput[1])
        ];
    };
}
function $e1761599b71ea525$export$33196dcc2d39693(settings) {
    const command = (lines)=>{
        const lines_1 = lines;
        const headLine = lines_1.fields[0];
        const trimmedLine = headLine.trim();
        const cmdMatch = $14cb28be03f8bba6$export$4659b591c19bdf3d($e1761599b71ea525$var$commandRegex, trimmedLine);
        const patternInput = cmdMatch != null ? [
            cmdMatch[1] || "",
            cmdMatch[2] || "",
            cmdMatch[0].length === trimmedLine.length
        ] : [
            "",
            "",
            false
        ];
        const cmdName = patternInput[0];
        const cmdArg = patternInput[1];
        if ($5a541a3f8220d610$export$2344b14b097df817(trimmedLine, $e1761599b71ea525$var$preserveShortcuts, {
            Equals: (x, y)=>x === y
            ,
            GetHashCode: (x)=>$ed39e963967a3eea$export$b9b095ec8c02760b(x)
        })) return $e1761599b71ea525$var$findPreserveSection(trimmedLine)(lines_1);
        else if (cmdName === "begin" && $5a541a3f8220d610$export$2344b14b097df817(cmdArg, $e1761599b71ea525$var$preserveEnvironments, {
            Equals: (x_1, y_1)=>x_1 === y_1
            ,
            GetHashCode: (x_1)=>$ed39e963967a3eea$export$b9b095ec8c02760b(x_1)
        })) return $e1761599b71ea525$var$findPreserveSection(cmdArg)(lines_1);
        else if (patternInput[2]) return [
            new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, new $80fa799ee6d7bef5$export$d96a8827a60d6b69(2, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, headLine, $c5730ae5119245ea$export$6e22c362a0406a2c())), $c5730ae5119245ea$export$6e22c362a0406a2c()),
            $1cbdac383b1632f3$export$88e0dae599377b39(lines_1.fields[1])
        ];
        else if (trimmedLine.indexOf("$$") === 0 ? true : $5a541a3f8220d610$export$2344b14b097df817(cmdName, $e1761599b71ea525$var$blockCommands, {
            Equals: (x_4, y_2)=>x_4 === y_2
            ,
            GetHashCode: (x_4)=>$ed39e963967a3eea$export$b9b095ec8c02760b(x_4)
        })) return $e1761599b71ea525$var$takeFrom2ndLineUntil(otherParsers, plainText, lines_1);
        else return void 0;
    };
    const plainText = (arg_1)=>{
        const f = (arg)=>$6cf548609c1fb621$export$206f4d4d34012a5f(settings.reformat, $1cbdac383b1632f3$export$87b4ba1f7891f330((str_2)=>{
                const m = $14cb28be03f8bba6$export$4659b591c19bdf3d(/[^\\]%/g, str_2);
                if (!(m != null)) return str_2;
                else {
                    const p = m.index + 2 | 0;
                    return $518fcccc33d36a20$export$662d3818631fba36(str_2, 0, p) + $518fcccc33d36a20$export$77ad94ebf1c2b9ed($518fcccc33d36a20$export$662d3818631fba36(str_2, p), " ", "\u0000");
                }
            }, arg))
        ;
        const _arg4 = $6cf548609c1fb621$export$8e02eae49deb618c($6cf548609c1fb621$export$97415d645e8556b1($e1761599b71ea525$var$newlineRegex))(arg_1);
        return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f(_arg4.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f, _arg4.fields[1]));
    };
    let otherParsers;
    const parsers = $c5730ae5119245ea$export$cb197a913f6bb809([
        $6cf548609c1fb621$export$c04a3c7d653d8aa0,
        $1d9202ebfdcd392e$export$5d080f5a78d4f5b3($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $e1761599b71ea525$var$markdown), "%", settings),
        command
    ]);
    otherParsers = (lines_3)=>$6cf548609c1fb621$export$58518a0eb5d7e7ad(parsers, lines_3)
    ;
    return $6cf548609c1fb621$export$6322879f5a137539($6cf548609c1fb621$export$ac8dfd3a7ad06e80(otherParsers, plainText));
}






function $840f1b1ae3c3949d$export$546b641bb9f9e9f4(settings) {
    return $6cf548609c1fb621$export$6322879f5a137539($6cf548609c1fb621$export$ac8dfd3a7ad06e80($6cf548609c1fb621$export$c04a3c7d653d8aa0, (arg_1)=>{
        const f_1 = (lines)=>$6cf548609c1fb621$export$7fcae00e056f3102((tupledArg)=>$e89b9b7ee1760219$export$ba7ca0e7f111fc0b(tupledArg[0], tupledArg[1])
            , lines)
        ;
        let _arg4;
        const neList = $6cf548609c1fb621$export$8e02eae49deb618c((arg10$0040)=>$6cf548609c1fb621$export$a243c986f18047d7(settings.tabWidth, arg10$0040)
        )(arg_1);
        _arg4 = $1cbdac383b1632f3$export$c28c8388be0ab31a($6cf548609c1fb621$export$8e02eae49deb618c($6cf548609c1fb621$export$97415d645e8556b1(/  $/g)), neList);
        return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_1(_arg4.fields[0]), $c5730ae5119245ea$export$871de8747c9eaa88(f_1, _arg4.fields[1]));
    }));
}
const $840f1b1ae3c3949d$export$8557d5da1ec1c0d8 = (ctx)=>(seqLines)=>{
        $80fa799ee6d7bef5$export$c0c9bee6343f1d85($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (settings)=>$840f1b1ae3c3949d$export$546b641bb9f9e9f4(settings)
        ), ctx, seqLines);
    }
;
function $840f1b1ae3c3949d$var$sc(comments) {
    return $1e919a34e720e03d$export$a03f62af6e933a3(comments);
}
function $840f1b1ae3c3949d$var$line$0027(m, p) {
    return $1e919a34e720e03d$export$5d080f5a78d4f5b3(m, p);
}
function $840f1b1ae3c3949d$var$line(m) {
    return $840f1b1ae3c3949d$var$line$0027(m, $ed39e963967a3eea$export$7864d59d01b6d6bf(2, (ctx)=>$946ea15fc111c75e$export$199d64cd116a5491(ctx)
    ));
}
function $840f1b1ae3c3949d$export$5a76447c81be9009(innerMarkers_0, innerMarkers_1, outerMarkers_0, outerMarkers_1) {
    const innerMarkers = [
        innerMarkers_0,
        innerMarkers_1
    ];
    const outerMarkers = [
        outerMarkers_0,
        outerMarkers_1
    ];
    return (contentParser)=>$1e919a34e720e03d$export$f2ae215066c4835a(innerMarkers[0], innerMarkers[1], outerMarkers[0], outerMarkers[1], contentParser)
    ;
}
function $840f1b1ae3c3949d$export$837bd02682cd3db9(startMarker, endMarker) {
    return $840f1b1ae3c3949d$export$5a76447c81be9009("", "", startMarker, endMarker)($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (ctx)=>$946ea15fc111c75e$export$199d64cd116a5491(ctx)
    ));
}
const $840f1b1ae3c3949d$export$affc3f9492e2e59c = [
    "/\\*[*!]",
    "\\*/"
];
const $840f1b1ae3c3949d$export$130e0a92a66f7aeb = $840f1b1ae3c3949d$export$5a76447c81be9009("*", "", "/\\*", "\\*/")($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (ctx)=>$946ea15fc111c75e$export$199d64cd116a5491(ctx)
));
const $840f1b1ae3c3949d$var$configFile = $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$439306a4dcaafbb9($840f1b1ae3c3949d$var$line("#")));
function $840f1b1ae3c3949d$var$lang(name, aliases, exts, parser) {
    return $044d4a9a60b1f629$export$e705f8b690e926d(name, aliases, exts, parser);
}
let $840f1b1ae3c3949d$export$d0d68bb9ed2c643d = $ed39e963967a3eea$export$2e17fe64ec9a826e($c5730ae5119245ea$export$cb197a913f6bb809([
    $840f1b1ae3c3949d$var$lang("AsciiDoc", "", ".adoc|.asciidoc", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$export$8557d5da1ec1c0d8)),
    $840f1b1ae3c3949d$var$lang("AutoHotkey", "ahk", ".ahk", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$var$line(";"),
        $840f1b1ae3c3949d$export$130e0a92a66f7aeb
    ])))),
    $840f1b1ae3c3949d$var$lang("Basic", "vb", ".vb", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$47bef67bc08eacbc($c5730ae5119245ea$export$cb197a913f6bb809([
        $6aba1ea4fa57179a$export$8724c8703a551e81($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$14d468532af654a8))("\u0027\u0027\u0027"),
        $6aba1ea4fa57179a$export$64487e37c5efc2ec("\u0027")
    ])))),
    $840f1b1ae3c3949d$var$lang("Batch file", "bat", ".bat", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$439306a4dcaafbb9($840f1b1ae3c3949d$var$line("(?:@?rem|::)"))))),
    $840f1b1ae3c3949d$var$lang("Bikeshed", "", ".bs", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $80fa799ee6d7bef5$export$71d5049186c62ec9($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (ctx)=>$946ea15fc111c75e$export$199d64cd116a5491(ctx)
    )))),
    $840f1b1ae3c3949d$var$lang("C/C++", "c|c++|cpp", ".c|.cpp|.h", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$47bef67bc08eacbc($c5730ae5119245ea$export$cb197a913f6bb809([
        $6aba1ea4fa57179a$export$919f4fcdb677e3e8($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
            "*",
            " * "
        ])($840f1b1ae3c3949d$export$affc3f9492e2e59c),
        $6aba1ea4fa57179a$export$130e0a92a66f7aeb,
        $6aba1ea4fa57179a$export$8724c8703a551e81($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$14d468532af654a8))("///"),
        $6aba1ea4fa57179a$export$8724c8703a551e81($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))("//!?"),
        $6aba1ea4fa57179a$export$d38c04023a68972a
    ])))),
    $840f1b1ae3c3949d$var$lang("C#", "csharp", ".cs", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$47bef67bc08eacbc($c5730ae5119245ea$export$cb197a913f6bb809([
        $6aba1ea4fa57179a$export$8724c8703a551e81($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$14d468532af654a8))("///"),
        $6aba1ea4fa57179a$export$d38c04023a68972a,
        $6aba1ea4fa57179a$export$919f4fcdb677e3e8($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
            "*",
            " * "
        ])($840f1b1ae3c3949d$export$affc3f9492e2e59c),
        $6aba1ea4fa57179a$export$130e0a92a66f7aeb
    ])))),
    $840f1b1ae3c3949d$var$lang("Clojure", "", ".clj|.cljs|.cljc|.cljx|.edn", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$439306a4dcaafbb9($840f1b1ae3c3949d$var$line(";+"))))),
    $840f1b1ae3c3949d$var$lang("CMake", "", "CMakeLists.txt", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("CoffeeScript", "", ".coffee", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$47bef67bc08eacbc($c5730ae5119245ea$export$cb197a913f6bb809([
        $6aba1ea4fa57179a$export$919f4fcdb677e3e8($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
            "*#",
            " * "
        ])([
            "###\\*",
            "###"
        ]),
        $6aba1ea4fa57179a$export$f2629393883ee529([
            "###",
            "###"
        ]),
        $6aba1ea4fa57179a$export$64487e37c5efc2ec("#")
    ])))),
    $840f1b1ae3c3949d$var$lang("Common Lisp", "commonlisp|lisp", ".lisp", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$var$line(";+"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9("#\\|", "\\|#")
    ])))),
    $840f1b1ae3c3949d$var$lang("Configuration", "properties", ".conf|.gitconfig|.pylintrc|pylintrc", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("Crystal", "", ".cr", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("CSS", "postcss", ".css|.pcss|.postcss", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$dbf350e5966cf602)),
    $840f1b1ae3c3949d$var$lang("D", "", ".d", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$47bef67bc08eacbc($c5730ae5119245ea$export$cb197a913f6bb809([
        $6aba1ea4fa57179a$export$8724c8703a551e81($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$c86f42639fd67153))("///"),
        $6aba1ea4fa57179a$export$d38c04023a68972a,
        $6aba1ea4fa57179a$export$919f4fcdb677e3e8($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$c86f42639fd67153))([
            "*",
            " * "
        ])($840f1b1ae3c3949d$export$affc3f9492e2e59c),
        $6aba1ea4fa57179a$export$919f4fcdb677e3e8($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$c86f42639fd67153))([
            "+",
            " + "
        ])([
            "/\\+\\+",
            "\\+/"
        ]),
        $6aba1ea4fa57179a$export$130e0a92a66f7aeb,
        $6aba1ea4fa57179a$export$f2629393883ee529([
            "/\\+",
            "\\+/"
        ])
    ])))),
    $840f1b1ae3c3949d$var$lang("Dart", "", ".dart", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$47bef67bc08eacbc($c5730ae5119245ea$export$cb197a913f6bb809([
        $6aba1ea4fa57179a$export$8724c8703a551e81($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$5adb48440af68970))("///"),
        $6aba1ea4fa57179a$export$d38c04023a68972a,
        $6aba1ea4fa57179a$export$919f4fcdb677e3e8($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$5adb48440af68970))([
            "*",
            " * "
        ])($840f1b1ae3c3949d$export$affc3f9492e2e59c),
        $6aba1ea4fa57179a$export$130e0a92a66f7aeb
    ])))),
    $840f1b1ae3c3949d$var$lang("Dockerfile", "docker", "dockerfile", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("Elixir", "", ".ex|.exs", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$var$line("#"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9("@(?:module|type|)doc\\s+\"\"\"", "\"\"\"")
    ])))),
    $840f1b1ae3c3949d$var$lang("Elm", "", ".elm", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$var$line("--"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9("{-\\|?", "-}")
    ])))),
    $840f1b1ae3c3949d$var$lang("Emacs Lisp", "elisp|emacslisp", ".el", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$439306a4dcaafbb9($840f1b1ae3c3949d$var$line(";+"))))),
    $840f1b1ae3c3949d$var$lang("F#", "fsharp", ".fs|.fsx", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$47bef67bc08eacbc($c5730ae5119245ea$export$cb197a913f6bb809([
        $6aba1ea4fa57179a$export$8724c8703a551e81($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$14d468532af654a8))("///"),
        $6aba1ea4fa57179a$export$d38c04023a68972a,
        $6aba1ea4fa57179a$export$f2629393883ee529([
            "\\(\\*",
            "\\*\\)"
        ])
    ])))),
    $840f1b1ae3c3949d$var$lang("FIDL", "", ".fidl", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$439306a4dcaafbb9($840f1b1ae3c3949d$var$line("///?"))))),
    $840f1b1ae3c3949d$var$lang("Go", "", ".go", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$47bef67bc08eacbc($c5730ae5119245ea$export$cb197a913f6bb809([
        $6aba1ea4fa57179a$export$919f4fcdb677e3e8($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (settings)=>$99598c93a066819c$export$852f70b1f9fa7d6c(settings)
        ))([
            "",
            ""
        ])($840f1b1ae3c3949d$export$affc3f9492e2e59c),
        $6aba1ea4fa57179a$export$130e0a92a66f7aeb,
        $6aba1ea4fa57179a$export$8724c8703a551e81($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (settings_1)=>$99598c93a066819c$export$852f70b1f9fa7d6c(settings_1)
        ))("//"),
        $6aba1ea4fa57179a$export$d38c04023a68972a
    ])))),
    $840f1b1ae3c3949d$var$lang("Git commit", "git-commit", "tag_editmsg", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $80fa799ee6d7bef5$export$71d5049186c62ec9($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (ctx_1)=>$946ea15fc111c75e$export$199d64cd116a5491(ctx_1)
    )))),
    $840f1b1ae3c3949d$var$lang("GraphQL", "", ".graphql|.gql", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$var$line("#"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9(".*?\"\"\"", "\"\"\"")
    ])))),
    $840f1b1ae3c3949d$var$lang("Groovy", "", ".groovy", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Handlebars", "", ".handlebars|.hbs", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$export$837bd02682cd3db9("{{!--", "--}}"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9("{{!", "}}"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9("\u003c!--", "--\u003e")
    ])))),
    $840f1b1ae3c3949d$var$lang("Haskell", "", ".hs", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$var$line("--"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9("{-\\s*\\|?", "-}")
    ])))),
    $840f1b1ae3c3949d$var$lang("HCL", "terraform", ".hcl|.tf", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$47bef67bc08eacbc($c5730ae5119245ea$export$cb197a913f6bb809([
        $6aba1ea4fa57179a$export$919f4fcdb677e3e8($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
            "*",
            " * "
        ])($840f1b1ae3c3949d$export$affc3f9492e2e59c),
        $6aba1ea4fa57179a$export$130e0a92a66f7aeb,
        $6aba1ea4fa57179a$export$8724c8703a551e81($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))("//[/!]"),
        $6aba1ea4fa57179a$export$d38c04023a68972a,
        $6aba1ea4fa57179a$export$64487e37c5efc2ec("#")
    ])))),
    $840f1b1ae3c3949d$var$lang("HTML", "erb|htmlx|svelte|vue", ".htm|.html|.svelte|.vue", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$c0bb0b647f701bb5)),
    $840f1b1ae3c3949d$var$lang("INI", "", ".ini", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$439306a4dcaafbb9($840f1b1ae3c3949d$var$line("[#;]"))))),
    $840f1b1ae3c3949d$var$lang("J", "", ".ijs", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$439306a4dcaafbb9($840f1b1ae3c3949d$var$line("NB\\."))))),
    $840f1b1ae3c3949d$var$lang("Java", "", ".java", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("JavaScript", "javascriptreact|js", ".js|.jsx", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Julia", "", ".jl", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$export$837bd02682cd3db9("#=", "=#"),
        $840f1b1ae3c3949d$var$line("#"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9(".*?\"\"\"", "\"\"\"")
    ])))),
    $840f1b1ae3c3949d$var$lang("JSON", "json5|jsonc", ".json|.json5|.jsonc", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("LaTeX", "tex", ".bbx|.cbx|.cls|.sty|.tex", (ctx_2, seqLines)=>{
        $80fa799ee6d7bef5$export$c0c9bee6343f1d85($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (settings_2)=>$e1761599b71ea525$export$33196dcc2d39693(settings_2)
        ), ctx_2, seqLines);
    }),
    $840f1b1ae3c3949d$var$lang("Lean", "", ".lean", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$var$line("--"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9("/-[-!]?", "-/")
    ])))),
    $840f1b1ae3c3949d$var$lang("Less", "", ".less", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Lua", "", ".lua", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$export$837bd02682cd3db9("--\\[(=*)\\[", "\\]$1\\]"),
        $840f1b1ae3c3949d$var$line("--")
    ])))),
    $840f1b1ae3c3949d$var$lang("Makefile", "make", "makefile", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("Markdown", "mdx", ".md|.mdx|.rmd", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $80fa799ee6d7bef5$export$71d5049186c62ec9($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (ctx_3)=>$946ea15fc111c75e$export$199d64cd116a5491(ctx_3)
    )))),
    $840f1b1ae3c3949d$var$lang("MATLAB", "", "", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$var$line("%(?![%{}])"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9("%\\{", "%\\}")
    ])))),
    $840f1b1ae3c3949d$var$lang("Objective-C", "", ".m|.mm", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Octave", "", "", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$export$837bd02682cd3db9("#\\{", "#\\}"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9("%\\{", "%\\}"),
        $840f1b1ae3c3949d$var$line("##?"),
        $840f1b1ae3c3949d$var$line("%[^!]")
    ])))),
    $840f1b1ae3c3949d$var$lang("Pascal", "delphi", ".pas", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$export$837bd02682cd3db9("\\(\\*", "\\*\\)"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9("\\{(?!\\$)", "\\}"),
        $840f1b1ae3c3949d$var$line("///?")
    ])))),
    $840f1b1ae3c3949d$var$lang("Perl", "perl6", ".p6|.pl|.pl6|.pm|.pm6", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("PHP", "", ".php", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$47bef67bc08eacbc($c5730ae5119245ea$export$cb197a913f6bb809([
        $6aba1ea4fa57179a$export$919f4fcdb677e3e8($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
            "*",
            " * "
        ])($840f1b1ae3c3949d$export$affc3f9492e2e59c),
        $6aba1ea4fa57179a$export$130e0a92a66f7aeb,
        $6aba1ea4fa57179a$export$64487e37c5efc2ec("(?://|#)")
    ])))),
    $840f1b1ae3c3949d$var$lang("PowerShell", "", ".ps1|.psd1|.psm1", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$47bef67bc08eacbc($c5730ae5119245ea$export$cb197a913f6bb809([
        $6aba1ea4fa57179a$export$8724c8703a551e81($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$facd2f5b1b9287bb))("#"),
        $6aba1ea4fa57179a$export$919f4fcdb677e3e8($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$facd2f5b1b9287bb))([
            "",
            ""
        ])([
            "\u003c#",
            "#\u003e"
        ])
    ])))),
    $840f1b1ae3c3949d$var$lang("Prisma", "", ".prisma", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$439306a4dcaafbb9($840f1b1ae3c3949d$var$line("///?"))))),
    $840f1b1ae3c3949d$var$lang("Prolog", "", "", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$47bef67bc08eacbc($c5730ae5119245ea$export$cb197a913f6bb809([
        $6aba1ea4fa57179a$export$919f4fcdb677e3e8($ed39e963967a3eea$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
            "*",
            " * "
        ])($840f1b1ae3c3949d$export$affc3f9492e2e59c),
        $6aba1ea4fa57179a$export$130e0a92a66f7aeb,
        $6aba1ea4fa57179a$export$64487e37c5efc2ec("%[%!]?")
    ])))),
    $840f1b1ae3c3949d$var$lang("Protobuf", "proto|proto3", ".proto", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$439306a4dcaafbb9($840f1b1ae3c3949d$var$line("//"))))),
    $840f1b1ae3c3949d$var$lang("Pug", "jade", ".jade|.pug", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$439306a4dcaafbb9($840f1b1ae3c3949d$var$line("//"))))),
    $840f1b1ae3c3949d$var$lang("PureScript", "", ".purs", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$var$line("--\\s*\\|"),
        $840f1b1ae3c3949d$var$line("--"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9("{-\\s*\\|?", "-}")
    ])))),
    $840f1b1ae3c3949d$var$lang("Python", "", ".py", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$var$line("#"),
        $840f1b1ae3c3949d$export$5a76447c81be9009("", "", "(.*?)\"\"\"", "\"\"\"")($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (ctx_4)=>$946ea15fc111c75e$export$c3cbd34a9e282001(ctx_4)
        )),
        $840f1b1ae3c3949d$export$5a76447c81be9009("", "", "(.*?)\u0027\u0027\u0027", "\u0027\u0027\u0027")($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (ctx_5)=>$946ea15fc111c75e$export$c3cbd34a9e282001(ctx_5)
        ))
    ])))),
    $840f1b1ae3c3949d$var$lang("R", "", ".r", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$439306a4dcaafbb9($840f1b1ae3c3949d$var$line("#\u0027?"))))),
    $840f1b1ae3c3949d$var$lang("reStructuredText", "rst", ".rst|.rest", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $80fa799ee6d7bef5$export$71d5049186c62ec9($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (ctx_6)=>$946ea15fc111c75e$export$c3cbd34a9e282001(ctx_6)
    )))),
    $840f1b1ae3c3949d$var$lang("Ruby", "", ".rb", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$var$line("#"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9("=begin", "=end")
    ])))),
    $840f1b1ae3c3949d$var$lang("Rust", "", ".rs", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$439306a4dcaafbb9($840f1b1ae3c3949d$var$line("//[/!]?"))))),
    $840f1b1ae3c3949d$var$lang("SCSS", "", ".scss", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Scala", "", ".scala", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Scheme", "", ".scm|.ss|.sch|.rkt", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$var$line(";+"),
        $840f1b1ae3c3949d$export$837bd02682cd3db9("#\\|", "\\|#")
    ])))),
    $840f1b1ae3c3949d$var$lang("Shaderlab", "", ".shader", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Shell script", "shellscript", ".sh", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$439306a4dcaafbb9($840f1b1ae3c3949d$var$line("#(?!\\!)"))))),
    $840f1b1ae3c3949d$var$lang("SQL", "postgres", ".pgsql|.psql|.sql", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$sc($c5730ae5119245ea$export$cb197a913f6bb809([
        $840f1b1ae3c3949d$var$line("--"),
        $840f1b1ae3c3949d$export$130e0a92a66f7aeb
    ])))),
    $840f1b1ae3c3949d$var$lang("Swift", "", ".swift", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Tcl", "", ".tcl", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("Textile", "", ".textile", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $80fa799ee6d7bef5$export$71d5049186c62ec9($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (ctx_7)=>$946ea15fc111c75e$export$199d64cd116a5491(ctx_7)
    )))),
    $840f1b1ae3c3949d$var$lang("TOML", "", ".toml", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("TypeScript", "typescriptreact", ".ts|.tsx", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Verilog/SystemVerilog", "systemverilog|verilog", ".sv|.svh|.v|.vh|.vl", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("XAML", "", ".xaml", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$c0bb0b647f701bb5)),
    $840f1b1ae3c3949d$var$lang("XML", "xsl", ".xml|.xsl", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$c0bb0b647f701bb5)),
    $840f1b1ae3c3949d$var$lang("YAML", "", ".yaml|.yml", (ctx_8, seqLines_1)=>{
        $80fa799ee6d7bef5$export$c0c9bee6343f1d85($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (settings_3)=>$6cf548609c1fb621$export$6322879f5a137539($6cf548609c1fb621$export$ac8dfd3a7ad06e80($6aba1ea4fa57179a$export$64487e37c5efc2ec("#{1,3}")(settings_3), $840f1b1ae3c3949d$export$546b641bb9f9e9f4(settings_3)))
        ), ctx_8, seqLines_1);
    })
]));
function $840f1b1ae3c3949d$var$maybeAddCustomLanguage(name, markers) {
    let f, _arg5;
    const escape = (arg00)=>$14cb28be03f8bba6$export$4e7f196112fea3c5(arg00)
    ;
    const isInvalid = (arg00_1)=>$518fcccc33d36a20$export$c8733ae29fb53302(arg00_1)
    ;
    const maybeLine = isInvalid(markers.line) ? void 0 : $6aba1ea4fa57179a$export$64487e37c5efc2ec(escape(markers.line));
    const list_1 = $c5730ae5119245ea$export$7877a478dd30fd3d((x_2)=>$ed39e963967a3eea$export$c3095a23b368d1f2(2, x_2)
    , $c5730ae5119245ea$export$cb197a913f6bb809([
        (isInvalid(markers.block[0]) ? true : isInvalid(markers.block[1])) ? void 0 : $6aba1ea4fa57179a$export$f2629393883ee529((f = escape, (_arg5 = markers.block, [
            f(_arg5[0]),
            f(_arg5[1])
        ]))),
        maybeLine
    ]));
    if ($c5730ae5119245ea$export$dd1bc94b04021eeb(list_1)) return void 0;
    else {
        const cl = $840f1b1ae3c3949d$var$lang(name, "", "", $ed39e963967a3eea$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$47bef67bc08eacbc(list_1)));
        $840f1b1ae3c3949d$export$d0d68bb9ed2c643d($c5730ae5119245ea$export$8327ebbef2a0ba76(cl, $840f1b1ae3c3949d$export$d0d68bb9ed2c643d()), true);
        return cl;
    }
}
function $840f1b1ae3c3949d$export$78262f0a7b75cf50(file) {
    const l = file.language.toLocaleLowerCase();
    if (!($518fcccc33d36a20$export$c6e2787f63ca055d(l) ? true : l === "plaintext")) return $c4c313718bcc393b$export$d65cb303b863e3bf((arg10$0040)=>$044d4a9a60b1f629$export$47bd1dafac8b8c58(l, arg10$0040)
    , $840f1b1ae3c3949d$export$d0d68bb9ed2c643d());
    else return $c4c313718bcc393b$export$d65cb303b863e3bf((arg10$0040_1)=>$044d4a9a60b1f629$export$37f42de08e6cfa5e(file.path, arg10$0040_1)
    , $840f1b1ae3c3949d$export$d0d68bb9ed2c643d());
}
function $840f1b1ae3c3949d$export$2e6c959c16ff56b8(file) {
    return $7e4c281993e75c03$export$37721a79838ca038($7e4c281993e75c03$export$871de8747c9eaa88((arg00$0040)=>$044d4a9a60b1f629$export$9c9dbb6e7b91b5af(arg00$0040)
    , $7e4c281993e75c03$export$c90763f2293d7e67($840f1b1ae3c3949d$export$78262f0a7b75cf50(file), ()=>$840f1b1ae3c3949d$var$maybeAddCustomLanguage(file.language, file.getMarkers())
    )), $840f1b1ae3c3949d$export$8557d5da1ec1c0d8);
}


















class $f76db8779581d766$var$LineRange extends $ae70510fbd2502e5$export$5b163c6d120341e7 {
    constructor(s, e){
        super();
        this.s = s | 0;
        this.e = e | 0;
    }
}
function $f76db8779581d766$var$LineRange$reflection() {
    return $7d684f9c58c88b9e$export$8547d5acd31924e("Selections.LineRange", void 0, $f76db8779581d766$var$LineRange, $7d684f9c58c88b9e$export$8547d5acd31924e("System.ValueType"));
}
function $f76db8779581d766$var$LineRange_$ctor_Z37302880(s, e) {
    return new $f76db8779581d766$var$LineRange(s, e);
}
function $f76db8779581d766$var$LineRange__get_startLine(_) {
    return _.s;
}
function $f76db8779581d766$var$LineRange__get_endLine(_) {
    return _.e;
}
function $f76db8779581d766$var$LineRange__get_length(x) {
    return $ed39e963967a3eea$export$8960430cfd85939f((x_1, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x_1, y)
    , $f76db8779581d766$var$LineRange__get_endLine(x) - $f76db8779581d766$var$LineRange__get_startLine(x) + 1, 0);
}
function $f76db8779581d766$var$LineRange__get_isEmpty(x) {
    return $f76db8779581d766$var$LineRange__get_endLine(x) < $f76db8779581d766$var$LineRange__get_startLine(x);
}
function $f76db8779581d766$var$LineRange_fromStartEnd(startLine, endLine) {
    return $f76db8779581d766$var$LineRange_$ctor_Z37302880(startLine, endLine);
}
function $f76db8779581d766$var$LineRange_fromStartLength(startLine, length) {
    return $f76db8779581d766$var$LineRange_$ctor_Z37302880(startLine, startLine + length - 1);
}
function $f76db8779581d766$var$LineRange_toInfinity_Z524259A4(startLine) {
    return $f76db8779581d766$var$LineRange_$ctor_Z37302880(startLine, 2147483646);
}
function $f76db8779581d766$var$LineRange_fromSelection_209E7828(s) {
    const startLine = $ed39e963967a3eea$export$96ec731ed4dcb222((x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
    , s.active.line, s.anchor.line) | 0;
    const endLine = $ed39e963967a3eea$export$8960430cfd85939f((x_1, y_1)=>$ed39e963967a3eea$export$591cc4a8025fba16(x_1, y_1)
    , s.active.line, s.anchor.line) | 0;
    if (startLine === endLine && s.anchor.character === s.active.character) return $f76db8779581d766$var$LineRange_$ctor_Z37302880(startLine, startLine - 1);
    else if (s.active.line > s.anchor.line && s.active.character === 0) return $f76db8779581d766$var$LineRange_$ctor_Z37302880(s.anchor.line, s.active.line - 1);
    else if (s.anchor.line > s.active.line && s.anchor.character === 0) return $f76db8779581d766$var$LineRange_$ctor_Z37302880(s.active.line, s.anchor.line - 1);
    else return $f76db8779581d766$var$LineRange_$ctor_Z37302880(startLine, endLine);
}
function $f76db8779581d766$var$LineRange__get_shiftStartDown(x) {
    if ($f76db8779581d766$var$LineRange__get_endLine(x) > $f76db8779581d766$var$LineRange__get_startLine(x)) return $f76db8779581d766$var$LineRange_$ctor_Z37302880($f76db8779581d766$var$LineRange__get_startLine(x) + 1, $f76db8779581d766$var$LineRange__get_endLine(x));
    else return void 0;
}
function $f76db8779581d766$var$LineRange__get_shiftEndUp(x) {
    if ($f76db8779581d766$var$LineRange__get_endLine(x) > $f76db8779581d766$var$LineRange__get_startLine(x)) return $f76db8779581d766$var$LineRange_$ctor_Z37302880($f76db8779581d766$var$LineRange__get_startLine(x), $f76db8779581d766$var$LineRange__get_endLine(x) - 1);
    else return void 0;
}
function $f76db8779581d766$var$intersects(r1_mut, r2_mut) {
    intersects: while(true){
        const r1 = r1_mut, r2 = r2_mut;
        if ($f76db8779581d766$var$LineRange__get_isEmpty(r2)) {
            r1_mut = r2;
            r2_mut = r1;
            continue intersects;
        } else if ($f76db8779581d766$var$LineRange__get_isEmpty(r1)) {
            if ($f76db8779581d766$var$LineRange__get_startLine(r1) >= $f76db8779581d766$var$LineRange__get_startLine(r2)) return $f76db8779581d766$var$LineRange__get_startLine(r1) <= $f76db8779581d766$var$LineRange__get_endLine(r2);
            else return false;
        } else return $ed39e963967a3eea$export$8960430cfd85939f((x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
        , $f76db8779581d766$var$LineRange__get_startLine(r1), $f76db8779581d766$var$LineRange__get_startLine(r2)) <= $ed39e963967a3eea$export$96ec731ed4dcb222((x_1, y_1)=>$ed39e963967a3eea$export$591cc4a8025fba16(x_1, y_1)
        , $f76db8779581d766$var$LineRange__get_endLine(r1), $f76db8779581d766$var$LineRange__get_endLine(r2));
        break;
    }
}
const $f76db8779581d766$var$normalizeRanges = (arg_1)=>{
    let tupledArg_1, xs_1;
    return $c5730ae5119245ea$export$66c1ae025e96b4bc((tupledArg_1 = $c4c313718bcc393b$export$93e2b83da34ff82a($ed39e963967a3eea$export$7864d59d01b6d6bf(2, (tupledArg)=>{
        const mCur = tupledArg[0];
        const output = tupledArg[1];
        return (next)=>{
            let arg10;
            if (mCur != null) {
                const cur = mCur;
                if ($f76db8779581d766$var$LineRange__get_endLine(cur) >= $f76db8779581d766$var$LineRange__get_startLine(next)) {
                    if ($f76db8779581d766$var$LineRange__get_isEmpty(cur) && $f76db8779581d766$var$LineRange__get_isEmpty(next)) return [
                        next,
                        output
                    ];
                    else if ($f76db8779581d766$var$LineRange__get_isEmpty(cur)) {
                        const matchValue = $f76db8779581d766$var$LineRange__get_shiftStartDown(next);
                        return matchValue != null ? [
                            matchValue,
                            $c5730ae5119245ea$export$8327ebbef2a0ba76(cur, output)
                        ] : [
                            cur,
                            output
                        ];
                    } else if ($f76db8779581d766$var$LineRange__get_isEmpty(next)) {
                        const matchValue_1 = $f76db8779581d766$var$LineRange__get_shiftEndUp(cur);
                        return matchValue_1 != null ? [
                            next,
                            $c5730ae5119245ea$export$8327ebbef2a0ba76(matchValue_1, output)
                        ] : [
                            next,
                            output
                        ];
                    } else return [
                        (arg10 = $ed39e963967a3eea$export$8960430cfd85939f((x, y)=>$ed39e963967a3eea$export$591cc4a8025fba16(x, y)
                        , $f76db8779581d766$var$LineRange__get_endLine(cur), $f76db8779581d766$var$LineRange__get_endLine(next)) | 0, $f76db8779581d766$var$LineRange_fromStartEnd($f76db8779581d766$var$LineRange__get_startLine(cur), arg10)),
                        output
                    ];
                } else return [
                    next,
                    $c5730ae5119245ea$export$8327ebbef2a0ba76(cur, output)
                ];
            } else return [
                next,
                output
            ];
        };
    }), [
        void 0,
        $c5730ae5119245ea$export$6e22c362a0406a2c()
    ], arg_1), (xs_1 = tupledArg_1[1], $7e4c281993e75c03$export$37721a79838ca038($7e4c281993e75c03$export$871de8747c9eaa88((x_1)=>$c5730ae5119245ea$export$8327ebbef2a0ba76(x_1, xs_1)
    , tupledArg_1[0]), xs_1))));
};
class $f76db8779581d766$export$a73a08cf4ec58319 extends $ae70510fbd2502e5$export$5b163c6d120341e7 {
    constructor(startLine, originalLines, blocks){
        super();
        this.startLine = startLine | 0;
        this.originalLines = originalLines;
        this.blocks = blocks;
    }
}
function $f76db8779581d766$export$a2920d406f476311() {
    return $7d684f9c58c88b9e$export$d341dea990ee4af6("Selections.ParseResult", [], $f76db8779581d766$export$a73a08cf4ec58319, ()=>[
            [
                "startLine",
                $7d684f9c58c88b9e$export$d5481a1dd0e3648a
            ],
            [
                "originalLines",
                $3583e200a8ea3134$export$4984d4827624d577($7d684f9c58c88b9e$export$36bbd56a39d3f734)
            ],
            [
                "blocks",
                $3583e200a8ea3134$export$4984d4827624d577($80fa799ee6d7bef5$export$3b141bb8ed484235())
            ]
        ]
    );
}
function $f76db8779581d766$var$processBlocks(context, selections, parseResult) {
    const patternInput = [
        $80fa799ee6d7bef5$export$a4a33b11512a3b06(context),
        $80fa799ee6d7bef5$export$e97046137fc6b021(context)
    ];
    const settings = patternInput[1];
    const output = patternInput[0];
    const $007CIsContainer$007C_$007C = (_arg1)=>{
        let pattern_matching_result, subBlocks, lines_1, nb_1;
        if (_arg1.tag === 0) {
            pattern_matching_result = 0;
            subBlocks = _arg1.fields[0];
        } else if (_arg1.tag === 3) {
            if ($80fa799ee6d7bef5$export$cc84ec394701b4e3(_arg1.fields[0][0])) {
                pattern_matching_result = 1;
                lines_1 = _arg1.fields[0][1];
                nb_1 = _arg1.fields[0][0];
            } else pattern_matching_result = 2;
        } else pattern_matching_result = 2;
        switch(pattern_matching_result){
            case 0:
                return subBlocks;
            case 1:
                {
                    const ctx = $80fa799ee6d7bef5$export$97a0acc1878fafa1(settings);
                    nb_1["Parsing_.NewBlock.output"](ctx, lines_1);
                    return $80fa799ee6d7bef5$export$cf92fd1f7736bad1(ctx);
                }
            case 2:
                return void 0;
        }
    };
    const splitBlock = (n, block)=>{
        if ($007CIsContainer$007C_$007C(block) != null) throw new Error("Trying to split a container");
        else switch(block.tag){
            case 3:
                {
                    const nb_2 = block.fields[0][0];
                    const tupledArg = $1cbdac383b1632f3$export$b0d75975ac0be0e1(n, block.fields[0][1]);
                    const _arg2 = [
                        tupledArg[0],
                        tupledArg[1]
                    ];
                    return [
                        new $80fa799ee6d7bef5$export$d96a8827a60d6b69(3, [
                            nb_2,
                            _arg2[0]
                        ]),
                        $7e4c281993e75c03$export$871de8747c9eaa88((ls)=>new $80fa799ee6d7bef5$export$d96a8827a60d6b69(3, [
                                nb_2,
                                ls
                            ])
                        , _arg2[1])
                    ];
                }
            case 1:
                {
                    const pTail = block.fields[0][0][1];
                    const tupledArg_1 = $1cbdac383b1632f3$export$b0d75975ac0be0e1(n, block.fields[0][1]);
                    const _arg2_1 = [
                        tupledArg_1[0],
                        tupledArg_1[1]
                    ];
                    return [
                        new $80fa799ee6d7bef5$export$d96a8827a60d6b69(1, [
                            [
                                block.fields[0][0][0],
                                pTail
                            ],
                            _arg2_1[0]
                        ]),
                        $7e4c281993e75c03$export$871de8747c9eaa88((ls_3)=>new $80fa799ee6d7bef5$export$d96a8827a60d6b69(1, [
                                [
                                    pTail,
                                    pTail
                                ],
                                ls_3
                            ])
                        , _arg2_1[1])
                    ];
                }
            case 2:
                {
                    const tupledArg_2 = $1cbdac383b1632f3$export$b0d75975ac0be0e1(n, block.fields[0]);
                    const _arg2_2 = [
                        tupledArg_2[0],
                        tupledArg_2[1]
                    ];
                    return [
                        new $80fa799ee6d7bef5$export$d96a8827a60d6b69(2, _arg2_2[0]),
                        $7e4c281993e75c03$export$871de8747c9eaa88((arg0_1)=>new $80fa799ee6d7bef5$export$d96a8827a60d6b69(2, arg0_1)
                        , _arg2_2[1])
                    ];
                }
            default:
                throw new Error("Match failure: Parsing_.Block");
        }
    };
    const processWholeBlock = (length, origLines, block_1)=>{
        const activePatternResult1881 = $007CIsContainer$007C_$007C(block_1);
        if (activePatternResult1881 != null) {
            const blocks = activePatternResult1881;
            $c4c313718bcc393b$export$c1a059043cc9c119((arg)=>{
                processWholeBlock(1, origLines, arg);
            }, blocks);
        } else switch(block_1.tag){
            case 3:
                block_1.fields[0][0]["Parsing_.NewBlock.output"](context, block_1.fields[0][1]);
                break;
            case 1:
                $54420dd84792de0d$export$258fe58438b50cd2(output, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, block_1.fields[0][0][0], $c5730ae5119245ea$export$439306a4dcaafbb9(block_1.fields[0][0][1])), block_1.fields[0][1]);
                break;
            case 2:
                $54420dd84792de0d$export$fe5a27f68faa6da2(output, block_1.fields[0]);
                break;
            default:
                throw new Error("Match failure: Parsing_.Block");
        }
        return [
            length,
            $1cbdac383b1632f3$export$b0d75975ac0be0e1(length, origLines)[1]
        ];
    };
    const skipLines = (count, lines_8)=>{
        let tupledArg_3, _arg2_3;
        return [
            count,
            (tupledArg_3 = $1cbdac383b1632f3$export$b0d75975ac0be0e1(count, lines_8), (_arg2_3 = [
                tupledArg_3[0],
                tupledArg_3[1]
            ], [
                $54420dd84792de0d$export$58febc67f35f03ed(output, _arg2_3[0]),
                _arg2_3[1]
            ]))[1]
        ];
    };
    const loop = (sels_mut, start_mut, _arg2_4_mut, origLines_1_mut)=>{
        loop: while(true){
            const sels = sels_mut, start = start_mut, _arg2_4 = _arg2_4_mut, origLines_1 = origLines_1_mut;
            const otherBlocks = _arg2_4.fields[1];
            const block_2 = _arg2_4.fields[0];
            const blockLength = $80fa799ee6d7bef5$export$4b73583fcb149b37(new $3583e200a8ea3134$export$a79837a2b764b73d(0), block_2) | 0;
            const selsTouching = $c5730ae5119245ea$export$3dea766d36a8935f((s_1)=>$f76db8779581d766$var$LineRange__get_startLine(s_1) < start + blockLength
            , sels);
            const hasEmptySelection = $c5730ae5119245ea$export$f7e9f41ea797a17((s_2)=>$f76db8779581d766$var$LineRange__get_isEmpty(s_2)
            , selsTouching);
            let patternInput_1;
            const matchValue = $c5730ae5119245ea$export$1acbe849d0cb723e(selsTouching);
            if (matchValue != null) {
                const sel = matchValue;
                const activePatternResult1892 = $007CIsContainer$007C_$007C(block_2);
                if (activePatternResult1892 != null) {
                    const blocks_1 = activePatternResult1892;
                    if (hasEmptySelection && settings.wholeComment) patternInput_1 = [
                        processWholeBlock(blockLength, origLines_1, block_2),
                        void 0
                    ];
                    else {
                        $f76db8779581d766$var$processBlocks(context, sels, new $f76db8779581d766$export$a73a08cf4ec58319(start, origLines_1, blocks_1));
                        patternInput_1 = [
                            [
                                blockLength,
                                $1cbdac383b1632f3$export$b0d75975ac0be0e1(blockLength, origLines_1)[1]
                            ],
                            void 0
                        ];
                    }
                } else switch(block_2.tag){
                    case 3:
                        if (hasEmptySelection) patternInput_1 = [
                            processWholeBlock(blockLength, origLines_1, block_2),
                            void 0
                        ];
                        else if ($f76db8779581d766$var$LineRange__get_startLine(sel) <= start) {
                            const splitAt = $ed39e963967a3eea$export$96ec731ed4dcb222((x_20, y_4)=>$ed39e963967a3eea$export$591cc4a8025fba16(x_20, y_4)
                            , $f76db8779581d766$var$LineRange__get_endLine(sel) - start + 1, blockLength) | 0;
                            const tupledArg_4 = splitBlock(splitAt, block_2);
                            const _arg2_5 = [
                                tupledArg_4[0],
                                tupledArg_4[1]
                            ];
                            patternInput_1 = [
                                processWholeBlock(splitAt, origLines_1, _arg2_5[0]),
                                _arg2_5[1]
                            ];
                        } else {
                            const splitAt_1 = $f76db8779581d766$var$LineRange__get_startLine(sel) - start | 0;
                            const tupledArg_5 = splitBlock(splitAt_1, block_2);
                            patternInput_1 = [
                                skipLines(splitAt_1, origLines_1),
                                tupledArg_5[1]
                            ];
                        }
                        break;
                    case 1:
                    case 2:
                        if (hasEmptySelection) patternInput_1 = [
                            processWholeBlock(blockLength, origLines_1, block_2),
                            void 0
                        ];
                        else if ($f76db8779581d766$var$LineRange__get_startLine(sel) <= start) {
                            const splitAt_2 = $ed39e963967a3eea$export$96ec731ed4dcb222((x_27, y_7)=>$ed39e963967a3eea$export$591cc4a8025fba16(x_27, y_7)
                            , $f76db8779581d766$var$LineRange__get_endLine(sel) - start + 1, blockLength) | 0;
                            const tupledArg_6 = splitBlock(splitAt_2, block_2);
                            const _arg2_7 = [
                                tupledArg_6[0],
                                tupledArg_6[1]
                            ];
                            patternInput_1 = [
                                processWholeBlock(splitAt_2, origLines_1, _arg2_7[0]),
                                _arg2_7[1]
                            ];
                        } else {
                            const splitAt_3 = $f76db8779581d766$var$LineRange__get_startLine(sel) - start | 0;
                            const tupledArg_7 = splitBlock(splitAt_3, block_2);
                            patternInput_1 = [
                                skipLines(splitAt_3, origLines_1),
                                tupledArg_7[1]
                            ];
                        }
                        break;
                    default:
                        throw new Error("Match failure: Parsing_.Block");
                }
            } else patternInput_1 = [
                skipLines(blockLength, origLines_1),
                void 0
            ];
            const matchValue_1 = $1cbdac383b1632f3$export$88e0dae599377b39($7e4c281993e75c03$export$37721a79838ca038($7e4c281993e75c03$export$871de8747c9eaa88((b)=>$c5730ae5119245ea$export$8327ebbef2a0ba76(b, otherBlocks)
            , patternInput_1[1]), otherBlocks));
            if (matchValue_1 == null) ;
            else {
                const neNextBlocks = matchValue_1;
                const remaining = $f76db8779581d766$var$LineRange_toInfinity_Z524259A4(start + patternInput_1[0][0]);
                const nextSels = $c5730ae5119245ea$export$175dedd748069215((arg_1)=>!$f76db8779581d766$var$intersects(remaining, arg_1)
                , sels);
                if ($c5730ae5119245ea$export$dd1bc94b04021eeb(nextSels)) ;
                else {
                    sels_mut = nextSels;
                    start_mut = $f76db8779581d766$var$LineRange__get_startLine(remaining);
                    _arg2_4_mut = neNextBlocks;
                    origLines_1_mut = $7e4c281993e75c03$export$2ab9a8f9f1186f14(patternInput_1[0][1]);
                    continue loop;
                }
            }
            break;
        }
    };
    loop(selections, parseResult.startLine, parseResult.blocks, parseResult.originalLines);
}
function $f76db8779581d766$var$trimEdit(originalLines, edit) {
    const originalLinesArray = $c5730ae5119245ea$export$45b10814cc054894($1cbdac383b1632f3$export$effcdbd76139450(originalLines));
    let s = 0;
    while(s < edit.lines.length && s <= edit.endLine - edit.startLine && originalLinesArray[edit.startLine + s] === edit.lines[s])s = s + 1 | 0;
    let e = 0;
    while(e < edit.lines.length - s && e <= edit.endLine - edit.startLine - s && originalLinesArray[edit.endLine - e] === edit.lines[edit.lines.length - 1 - e])e = e + 1 | 0;
    return new $2c0e5be185a9291c$export$6ed0965c9443aaa6(edit.startLine + s, edit.endLine - e, $5a541a3f8220d610$export$482c79a7d4ed32a1(edit.lines, s, edit.lines.length - s - e), edit.selections);
}
function $f76db8779581d766$export$1fab492bedf0aecf(originalLines, selections, context) {
    $f76db8779581d766$var$processBlocks(context, $c4c313718bcc393b$export$dd1bc94b04021eeb(selections) ? $c5730ae5119245ea$export$439306a4dcaafbb9($f76db8779581d766$var$LineRange_toInfinity_Z524259A4(0)) : $f76db8779581d766$var$normalizeRanges($c5730ae5119245ea$export$c80b5fc7454ef206($c4c313718bcc393b$export$871de8747c9eaa88((arg00)=>$f76db8779581d766$var$LineRange_fromSelection_209E7828(arg00)
    , selections))), new $f76db8779581d766$export$a73a08cf4ec58319(0, originalLines, $80fa799ee6d7bef5$export$cf92fd1f7736bad1(context)));
    return $f76db8779581d766$var$trimEdit(originalLines, $54420dd84792de0d$export$a063593adec9431c($80fa799ee6d7bef5$export$a4a33b11512a3b06(context))).withSelections($c4c313718bcc393b$export$45b10814cc054894(selections));
}




function $900a7436dc584467$export$2eecdacd3f587409(filePath, rulers) {
    return $fa430270a1cc70db$export$2eecdacd3f587409(filePath, rulers);
}
function $900a7436dc584467$export$e6ea2f8a2f53b195(docState, rulers) {
    return $fa430270a1cc70db$export$e6ea2f8a2f53b195(docState, rulers);
}
function $900a7436dc584467$export$5b4c6cdc0f868d63(docState) {
    $fa430270a1cc70db$export$5b4c6cdc0f868d63(docState);
}
const $900a7436dc584467$export$9b19ed2825079787 = new $2c0e5be185a9291c$export$a7566b2ec63e8493("", [
    "",
    ""
]);
function $900a7436dc584467$export$bcf2ee210a6ee362(file) {
    return $7e4c281993e75c03$export$37721a79838ca038($7e4c281993e75c03$export$871de8747c9eaa88((arg00$0040)=>$044d4a9a60b1f629$export$a68c0c8037b37d66(arg00$0040)
    , $840f1b1ae3c3949d$export$78262f0a7b75cf50(file)), null);
}
const $900a7436dc584467$export$d0d68bb9ed2c643d = $c4c313718bcc393b$export$45b10814cc054894($c4c313718bcc393b$export$871de8747c9eaa88((arg00$0040)=>$044d4a9a60b1f629$export$a68c0c8037b37d66(arg00$0040)
, $840f1b1ae3c3949d$export$d0d68bb9ed2c643d()));
function $900a7436dc584467$export$6cb9d9886761bf2b(file, settings, selections, getLine) {
    const processor = $840f1b1ae3c3949d$export$2e6c959c16ff56b8(file);
    const strLines = $1cbdac383b1632f3$export$da968afc9c9924d3($c4c313718bcc393b$export$c48e357c1a89b78d((i)=>$7e4c281993e75c03$export$871de8747c9eaa88((l)=>[
                l,
                i + 1
            ]
        , $7e4c281993e75c03$export$e724fd86d7aa146b(getLine(i)))
    , 0));
    const lines = $c4c313718bcc393b$export$871de8747c9eaa88((s)=>$6f9339dcb7ad0d09$export$45b30bb84adefa7e("", s)
    , strLines);
    const ctx = $80fa799ee6d7bef5$export$97a0acc1878fafa1(settings);
    processor(ctx)(lines);
    return $f76db8779581d766$export$1fab492bedf0aecf(strLines, selections, ctx);
}
function $900a7436dc584467$export$13c2f47aa8a3882d(tabSize, str) {
    return $6f9339dcb7ad0d09$export$13c2f47aa8a3882d(tabSize)(str);
}
function $900a7436dc584467$export$4fb73e9c1c14efbc(file, settings, newText, pos, getLine) {
    const noEdit = $2c0e5be185a9291c$export$6ed0965c9443aaa6.empty;
    if ($518fcccc33d36a20$export$c8733ae29fb53302(newText)) return noEdit;
    else if (settings.column < 1) return noEdit;
    else if (!$518fcccc33d36a20$export$c6e2787f63ca055d(newText)) return noEdit;
    else {
        let patternInput;
        const matchValue = newText[0];
        switch(matchValue){
            case "\n":
                patternInput = [
                    true,
                    $518fcccc33d36a20$export$662d3818631fba36(newText, 1)
                ];
                break;
            case "\r":
                patternInput = [
                    true,
                    $518fcccc33d36a20$export$662d3818631fba36(newText, 2)
                ];
                break;
            default:
                patternInput = [
                    false,
                    ""
                ];
        }
        const enterPressed = patternInput[0];
        if (!enterPressed && newText.length > 1) return noEdit;
        else {
            const patternInput_1 = [
                pos.line,
                pos.character + (enterPressed ? 0 : newText.length)
            ];
            const line = patternInput_1[0] | 0;
            const char = patternInput_1[1] | 0;
            const lineText = getLine(line);
            if ($900a7436dc584467$export$13c2f47aa8a3882d(settings.tabWidth, $3583e200a8ea3134$export$66b1838215db0958(char, lineText)) <= settings.column) return noEdit;
            else {
                const afterPos = enterPressed ? new $2c0e5be185a9291c$export$13807d9ee5a34a42(line + 1, patternInput[1].length) : new $2c0e5be185a9291c$export$13807d9ee5a34a42(line, char);
                return $900a7436dc584467$export$6cb9d9886761bf2b(file, settings, [
                    new $2c0e5be185a9291c$export$e7cee7ee8bea336b(new $2c0e5be185a9291c$export$13807d9ee5a34a42(line, 0), new $2c0e5be185a9291c$export$13807d9ee5a34a42(line, lineText.length))
                ], (i)=>{
                    if (i > line) return null;
                    else return getLine(i);
                }).withSelections([
                    new $2c0e5be185a9291c$export$e7cee7ee8bea336b(afterPos, afterPos)
                ]);
            }
        }
    }
}


const $b892585b132b979f$export$2eecdacd3f587409 = $900a7436dc584467$export$2eecdacd3f587409;
const $b892585b132b979f$export$4fb73e9c1c14efbc = $900a7436dc584467$export$4fb73e9c1c14efbc;
const $b892585b132b979f$export$e6ea2f8a2f53b195 = $900a7436dc584467$export$e6ea2f8a2f53b195;
const $b892585b132b979f$export$9b19ed2825079787 = $900a7436dc584467$export$9b19ed2825079787;
const $b892585b132b979f$export$6cb9d9886761bf2b = $900a7436dc584467$export$6cb9d9886761bf2b;
const $b892585b132b979f$export$5b4c6cdc0f868d63 = $900a7436dc584467$export$5b4c6cdc0f868d63;





function $9f18fb2194e91655$export$2e2bcd8739ae039(oldLines, selections, edit) {
    if (!edit || !edit.lines.length) return selections;
    selections = selections.map((s)=>new $19YtE$vscode.Selection(s.anchor.line, s.anchor.character, s.active.line, s.active.character)
    );
    let runningLineGrowth = 0;
    const { startLine: startLine , endLine: endLine  } = edit, newStartLine = startLine + runningLineGrowth, oldLineCount = endLine - startLine + 1, diff = $19YtE$fastdiff(oldLines.join('\n'), edit.lines.join('\n')), newLineCount = edit.lines.length, rangeLineGrowth = newLineCount - oldLineCount;
    selections = selections.map((s)=>{
        const points = [
            s.anchor,
            s.active
        ].map((p)=>{
            // For selection points in the edit range, adjust from the diff
            if (p.line >= newStartLine && p.line <= endLine + runningLineGrowth) {
                const oldOffset = $9f18fb2194e91655$var$offsetAt(oldLines, p.translate(-newStartLine)), newOffset = $9f18fb2194e91655$var$newOffsetFromOld(oldOffset, diff);
                p = $9f18fb2194e91655$var$positionAt(edit.lines, newOffset).translate(newStartLine);
            } else if (p.line > endLine + runningLineGrowth) p = p.translate(rangeLineGrowth);
            return p;
        });
        return new $19YtE$vscode.Selection(points[0], points[1]);
    });
    runningLineGrowth += rangeLineGrowth;
    return selections;
}
/** Gets the new offset of a position, given and old offset and a diff between
 *  old and new text. */ function $9f18fb2194e91655$var$newOffsetFromOld(offset, diff) {
    // Count up chars from parts of the diff until we get to the original offset.
    // Keep count of the delta between old & new text from added & removed chars.
    let runningOffset = 0, delta = 0;
    for (let [operation, text] of diff){
        if (operation !== 1) {
            if (runningOffset + text.length > offset) break;
            runningOffset += text.length;
        }
        delta += operation * text.length;
    }
    return offset + delta;
}
function $9f18fb2194e91655$var$offsetAt(lines, position) {
    return lines.slice(0, position.line).reduce((sum, s)=>sum + s.length + 1
    , 0) + position.character;
}
function $9f18fb2194e91655$var$positionAt(lines, offset) {
    for(let i = 0; i < lines.length; i++){
        const lineLength = lines[i].length + 1;
        if (offset < lineLength) return new $19YtE$vscode.Position(i, offset);
        else offset -= lineLength;
    }
    throw new Error("Offset greater than text length.");
}







const $09996ecbe70ac43a$var$getConfig = (getText, path)=>{
    let config = {
        line: null,
        block: null
    };
    let warnings = [], error;
    try {
        const c = $19YtE$json5.parse(getText(path)).comments;
        if (c) {
            // 'line' must be a string or null.
            if (typeof c.lineComment === 'string') config.line = c.lineComment;
            else warnings.push("lineComment not a string.");
            // 'block' must be an array of 2 strings or null.
            if (Array.isArray(c.blockComment) && c.blockComment.length > 1) config.block = c.blockComment.slice(0, 2);
            else warnings.push("blockComment not a length-2 array.");
        } else warnings.push("No comments block found.");
    } catch (err) {
        error = err;
    }
    if (error || warnings.length) {
        console.info(`Inspecting JSON file ${path}`);
        if (error) console.error(error.message);
        warnings.forEach((w)=>console.warn(w)
        );
    }
    return config;
};
/** Iterates through all extensions and populates the cache with mappings for
 *  each found language id to a path to a configuration file. */ const $09996ecbe70ac43a$var$createCache = (exts)=>{
    const addConfigFiles = (cache, ext)=>{
        try {
            let obj = ext.packageJSON;
            if ((obj = obj.contributes) && (obj = obj.languages)) for (const l of obj){
                if (!l.id) continue;
                if (l.configuration) {
                    const confPath = $19YtE$path.join(ext.extensionPath, l.configuration);
                    cache[l.id] = confPath;
                }
            }
        } catch (err) {
            console.error(err.message);
        }
        return cache;
    };
    return exts.reduce(addConfigFiles, {
    });
};
function $09996ecbe70ac43a$export$2e2bcd8739ae039(exts, getFileText) {
    exts = exts || $19YtE$vscode.extensions.all;
    if (!exts.length) console.warn("`vscode.extensions.all` returned an empty array. Something is wrong.");
    getFileText = getFileText || ((p)=>$19YtE$fs.readFileSync(p)
    );
    let cache = null;
    return (lang)=>{
        cache = cache || $09996ecbe70ac43a$var$createCache(exts);
        if (typeof cache[lang] === 'string') {
            const config = $09996ecbe70ac43a$var$getConfig(getFileText, cache[lang]);
            cache[lang] = config.line || config.block ? {
                line: config.line,
                block: config.block || [
                    "",
                    ""
                ]
            } : $b892585b132b979f$export$9b19ed2825079787;
        } else if (!cache[lang]) cache[lang] = $b892585b132b979f$export$9b19ed2825079787;
        return cache[lang];
    };
}


const $0d70716f788862e9$var$getCustomMarkers = $09996ecbe70ac43a$export$2e2bcd8739ae039();
/** Converts a selection-like object to a vscode Selection object */ const $0d70716f788862e9$var$vscodeSelection = (s)=>new $19YtE$vscode.Selection(s.anchor.line, s.anchor.character, s.active.line, s.active.character)
;
function $0d70716f788862e9$export$dc51556a055f3c36(editor, edit) {
    if (edit.isEmpty) return Promise.resolve();
    const selections = edit.selections.map($0d70716f788862e9$var$vscodeSelection);
    const doc = editor.document;
    const docVersion = doc.version;
    const oldLines = Array(edit.endLine - edit.startLine + 1).fill(null).map((_, i)=>doc.lineAt(edit.startLine + i).text
    );
    const getDocRange = ()=>doc.validateRange(new $19YtE$vscode.Range(0, 0, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER))
    ;
    const wholeDocSelected = selections[0].isEqual(getDocRange());
    return editor.edit((editBuilder)=>{
        // Execution of this callback is delayed. Check the document is
        // still as we expect it.
        // todo: see if vscode already makes this check anyway
        if (doc.version !== docVersion) return false;
        const range = doc.validateRange(new $19YtE$vscode.Range(edit.startLine, 0, edit.endLine, Number.MAX_VALUE));
        // vscode takes care of converting to \r\n if necessary
        const text = edit.lines.join('\n');
        return editBuilder.replace(range, text);
    }).then((didEdit)=>{
        if (!didEdit) return;
        // Try to prevent rare "TextEditor has been disposed" error
        if (editor !== $19YtE$vscode.window.activeTextEditor) return;
        if (wholeDocSelected) {
            const wholeRange = getDocRange();
            editor.selection = new $19YtE$vscode.Selection(wholeRange.start, wholeRange.end);
        } else editor.selections = $9f18fb2194e91655$export$2e2bcd8739ae039(oldLines, selections, edit);
    });
}
function $0d70716f788862e9$export$7cc2a9afec49ab22(err) {
    console.error("====== Rewrap: Error ======");
    console.log(err);
    console.error("^^^^^^ Rewrap: Please report this (with a copy of the above lines) ^^^^^^\nat https://github.com/stkb/vscode-rewrap/issues");
    $19YtE$vscode.window.showInformationMessage("Sorry, there was an error in Rewrap. Go to: Help -> Toggle Developer Tools -> Console for more information.");
}
function $0d70716f788862e9$export$ee19c5e3e690f01a(document) {
    return (i)=>i < document.lineCount ? document.lineAt(i).text : null
    ;
}
function $0d70716f788862e9$export$6431655dacb1d83d(document) {
    const path = document.fileName, language = document.languageId;
    return {
        path: path,
        language: language,
        getMarkers: ()=>$0d70716f788862e9$var$getCustomMarkers(language)
    };
}




function $48bcbed0cf086a92$export$7b76d8f1f719850(editor, fn) {
    const settings = $48bcbed0cf086a92$export$55f23a6172c4a901(editor);
    return {
        column: fn(settings.columns.value),
        doubleSentenceSpacing: settings.doubleSentenceSpacing,
        wholeComment: settings.wholeComment,
        reformat: settings.reformat,
        tabWidth: settings.tabWidth
    };
}
function $48bcbed0cf086a92$export$55f23a6172c4a901(editor) {
    const docID = editor.document.uri.toString();
    const config = $19YtE$vscode.workspace.getConfiguration('', editor.document);
    const setting = (name)=>config.get(name)
    ;
    const checkTabSize = (size)=>!Number.isInteger(size) || size < 1 ? $48bcbed0cf086a92$var$warnings.tabSize(docID, size, 4) : size
    ;
    return {
        autoWrap: $48bcbed0cf086a92$var$getAutoWrapSettings(config, editor.document.languageId),
        columns: $48bcbed0cf086a92$var$getWrappingColumns(config, editor.document),
        doubleSentenceSpacing: setting('rewrap.doubleSentenceSpacing'),
        wholeComment: setting('rewrap.wholeComment'),
        reformat: setting('rewrap.reformat'),
        tabWidth: checkTabSize(editor.options.tabSize)
    };
}
const $48bcbed0cf086a92$var$getAutoWrapSettings = (config, lang)=>({
        enabled: $48bcbed0cf086a92$var$settingWithOrigin(config, lang)('rewrap.autoWrap.enabled'),
        notification: config.get('rewrap.autoWrap.notification')
    })
;
/** Gets an array of the available wrapping column(s) from the user's settings.
 */ function $48bcbed0cf086a92$var$getWrappingColumns(config, doc) {
    const checkColumn = (col)=>!Number.isInteger(col) || col < 1 ? $48bcbed0cf086a92$var$warnings.column(doc, col, 0) : col > 120 ? $48bcbed0cf086a92$var$warnings.largeColumn(doc, col, col) : col
    ;
    const get = $48bcbed0cf086a92$var$settingWithOrigin(config, doc.languageId);
    {
        const s = get('rewrap.wrappingColumn');
        if (s.value) return {
            ...s,
            value: [
                checkColumn(s.value)
            ]
        };
    }
    {
        const s = get('editor.rulers');
        const rValue = (r)=>checkColumn(r.column != undefined ? r.column : r)
        ;
        if (s.value && s.value[0]) return {
            ...s,
            value: s.value.map(rValue)
        };
    }
    {
        const s = get('editor.wordWrapColumn');
        return {
            ...s,
            value: [
                checkColumn(s.value)
            ]
        };
    }
}
const $48bcbed0cf086a92$var$settingWithOrigin = (config, lang)=>(name)=>{
        const scopes = [
            'default',
            'global',
            'workspace',
            'workspaceFolder'
        ];
        const info = config.inspect(name);
        for (let language of [
            lang,
            null
        ])for(let scope = 3; scope >= 0; scope--){
            const key = scopes[scope] + (language ? 'LanguageValue' : 'Value');
            if (info[key] !== undefined) return {
                name: name,
                value: info[key],
                origin: {
                    scope: scope,
                    language: language
                }
            };
        }
    }
;
/** Deals with writing warnings for invalid values. */ const $48bcbed0cf086a92$var$warnings = (()=>{
    // For each invalid value for each document, remember that we've warned so
    // that we don't flood the console with the same warnings
    let cache = {
    };
    const warn = (setting, msg)=>(doc, val, def)=>{
            const key = doc.uri.toString() + "|" + setting + "|" + val;
            if (!cache[key]) {
                cache[key] = true;
                console.warn("Rewrap: " + msg, val, def);
            }
            return def;
        }
    ;
    const column = warn('wrappingColumn', "wrapping column is set at '%o'. This will be treated as infinity.");
    const largeColumn = warn('wrappingColumn', "wrapping column is a rather large value (%d).");
    const tabSize = warn('tabSize', "tab size is an invalid value (%o). Using the default of (%d) instead.");
    return {
        column: column,
        largeColumn: largeColumn,
        tabSize: tabSize
    };
})();






/** Handler that's called if the text in the active editor changes */ const $3a2783b7990735e4$var$checkChange = (e)=>{
    // Make sure we're in the active document
    const editor = $19YtE$vscode.window.activeTextEditor;
    if (!editor || !e || editor.document !== e.document) return;
    const doc = e.document;
    // We only want to trigger on normal typing and input with IME's, not other
    // sorts of edits. With normal typing the range (text insertion point) and
    // selection will be both empty and equal to each other (the selection state
    // is still from *before* the edit). IME's make edits where the range is not
    // empty (as text is replaced), but the selection should still be empty. We
    // can also restrict it to single-line ranges (this filters out in
    // particular undo edits immediately after an auto-wrap).
    if (editor.selections.length != 1) return;
    if (!editor.selection.isEmpty) return;
    // There's more than one change if there were multiple selections,
    // or a whole line is moved up/down with alt+up/down
    if (e.contentChanges.length != 1) return;
    const { text: newText , range: range , rangeLength: rangeLength  } = e.contentChanges[0];
    if (rangeLength > 0) return;
    try {
        const file = $0d70716f788862e9$export$6431655dacb1d83d(doc);
        const settings = $48bcbed0cf086a92$export$7b76d8f1f719850(editor, (cs)=>$b892585b132b979f$export$2eecdacd3f587409(file.path, cs)
        );
        // maybeAutoWrap does more checks: that newText isn't empty, but is only
        // whitespace. Don't call this in a promise: it causes timing issues.
        const edit = $b892585b132b979f$export$4fb73e9c1c14efbc(file, settings, newText, range.start, $0d70716f788862e9$export$ee19c5e3e690f01a(doc));
        if (!edit.isEmpty) return $0d70716f788862e9$export$dc51556a055f3c36(editor, edit).then(null, $0d70716f788862e9$export$7cc2a9afec49ab22);
    } catch (err) {
        $0d70716f788862e9$export$7cc2a9afec49ab22(err);
    }
};
/** Notification that shows autowrap status in status bar */ let $3a2783b7990735e4$var$Notification;
(function(Notification) {
    const sbItem = $19YtE$vscode.window.createStatusBarItem(0, 101);
    const defaultColor = new $19YtE$vscode.ThemeColor('statusBar.foreground');
    let timeout // Used for the text notification that hides after a few secs
    ;
    function maybeShow(settings, override, wasToggled) {
        const hideAfterTimeout = ()=>{
            sbItem.hide();
            clearTimeout(timeout);
        };
        hideAfterTimeout();
        const enabled = settings.autoWrap.enabled;
        const onOffText = enabled.value != override ? "on" : "off";
        if (settings.autoWrap.notification === 'icon') {
            sbItem.tooltip = makeTooltip(settings, override);
            sbItem.text = "A$(word-wrap)";
            sbItem.color = override ? enabled.value ? 'gray' : 'orange' : defaultColor;
            enabled.value || override ? sbItem.show() : sbItem.hide();
        } else if (wasToggled) {
            sbItem.text = `Auto-wrap: ${onOffText}`;
            sbItem.show();
            timeout = setTimeout(hideAfterTimeout, 5000);
        }
    }
    Notification.maybeShow = maybeShow;
    function makeTooltip(settings, override) {
        function str({ name: name , value: value , origin: origin  }, vFn, text, showName = false) {
            const scopes = [
                "default",
                "user",
                "workspace",
                "workspace folder"
            ];
            const lang = origin.language ? `[${origin.language}] ` : "";
            const n = showName ? `'${name}' ` : "";
            text = text || name.split('.').slice[-1][0] + ":";
            return `${text} ${vFn(value)} (${lang}${n}${scopes[origin.scope]} setting)`;
        }
        const bStr = (x)=>x ? "on" : "off"
        ;
        const colsStr = (cols)=>cols.length > 1 ? "columns: " + cols : "column " + cols[0]
        ;
        const lines = [];
        const awEnabled = settings.autoWrap.enabled;
        if (override) {
            const onOffText = bStr(awEnabled.value != override);
            lines.push(`Auto-wrap toggled ${onOffText} for this document`);
            lines.push(`Normally: ${bStr(awEnabled.value)}`);
        } else lines.push(str(awEnabled, bStr, "Auto-wrap:"));
        lines.push(str(settings.columns, colsStr, "Wrapping at", true));
        return lines.join("\n");
    }
})($3a2783b7990735e4$var$Notification || ($3a2783b7990735e4$var$Notification = {
}));
let $3a2783b7990735e4$var$changeHook = null;
const $3a2783b7990735e4$var$setDocumentAutoWrap = (wsState, doToggle)=>async (editor)=>{
        const settings = $48bcbed0cf086a92$export$55f23a6172c4a901(editor), enabled = settings.autoWrap.enabled;
        // For every document, we store if autowrap has been toggled on or off. This
        // translates into a value for whether it has been overridden from the
        // current settings.
        const override = await async function() {
            const key = editor.document.uri + ':autoWrap.enabled';
            let val = wsState.get(key);
            if (doToggle) {
                val = val === undefined || val === enabled.value ? !enabled.value : undefined;
                await wsState.update(key, val);
            }
            return val !== undefined;
        }();
        $3a2783b7990735e4$var$Notification.maybeShow(settings, override, doToggle);
        const isOn = enabled.value != override;
        if (isOn && !$3a2783b7990735e4$var$changeHook) $3a2783b7990735e4$var$changeHook = $19YtE$vscode.workspace.onDidChangeTextDocument($3a2783b7990735e4$var$checkChange);
        else if (!isOn && $3a2783b7990735e4$var$changeHook) {
            $3a2783b7990735e4$var$changeHook.dispose();
            $3a2783b7990735e4$var$changeHook = null;
        }
    }
;
let $3a2783b7990735e4$var$editorListener, $3a2783b7990735e4$var$configListener;
function $3a2783b7990735e4$export$2e2bcd8739ae039(memento) {
    const onChangeEditor = $3a2783b7990735e4$var$setDocumentAutoWrap(memento, false);
    const ifActiveDoc = (fn)=>$19YtE$vscode.window.activeTextEditor && fn($19YtE$vscode.window.activeTextEditor)
    ;
    $3a2783b7990735e4$var$editorListener = $19YtE$vscode.window.onDidChangeActiveTextEditor((e)=>e && onChangeEditor(e)
    );
    $3a2783b7990735e4$var$configListener = $19YtE$vscode.workspace.onDidChangeConfiguration((e)=>ifActiveDoc((ed)=>e.affectsConfiguration('rewrap.autoWrap', ed.document) && onChangeEditor(ed)
        )
    );
    ifActiveDoc(onChangeEditor);
    return {
        editorToggle: $3a2783b7990735e4$var$setDocumentAutoWrap(memento, true)
    };
}


/** Function to activate the extension. */ async function $fad922d34226e04f$export$234c45b355edd85b(context) {
    const autoWrap = $3a2783b7990735e4$export$2e2bcd8739ae039(context.workspaceState);
    // Register the commands
    context.subscriptions.push($19YtE$vscode.commands.registerTextEditorCommand('rewrap.rewrapComment', rewrapCommentCommand), $19YtE$vscode.commands.registerTextEditorCommand('rewrap.rewrapCommentAt', rewrapCommentAtCommand), $19YtE$vscode.commands.registerTextEditorCommand('rewrap.toggleAutoWrap', autoWrap.editorToggle));
    /** Standard rewrap command */ function rewrapCommentCommand(editor) {
        $fad922d34226e04f$var$doWrap(editor).then(()=>$b892585b132b979f$export$5b4c6cdc0f868d63($fad922d34226e04f$var$getDocState(editor))
        );
    }
    let customWrappingColumn = 0;
    /** Does a rewrap, but first prompts for a custom wrapping column to use. */ async function rewrapCommentAtCommand(editor) {
        let columnStr = customWrappingColumn > 0 ? customWrappingColumn.toString() : undefined;
        columnStr = await $19YtE$vscode.window.showInputBox({
            prompt: "Enter a column number to wrap the selection to. Leave blank to remove wrapping instead.",
            value: columnStr,
            placeHolder: ""
        });
        if (columnStr === undefined) return; // The user pressed cancel
        customWrappingColumn = parseInt(columnStr) || 0;
        return $fad922d34226e04f$var$doWrap(editor, customWrappingColumn);
    }
}
/** Gets an object representing the state of the document and selections. When a
 *  standard wrap is done, the state is compared with the state after the last
 *  wrap. If they are equal, and there are multiple rulers for the document, the
 *  next ruler is used for wrapping instead. */ const $fad922d34226e04f$var$getDocState = (editor)=>{
    const doc = editor.document, selections = editor.selections;
    return {
        filePath: $0d70716f788862e9$export$6431655dacb1d83d(doc).path,
        version: doc.version,
        selections: selections
    };
};
/** Collects the information for a wrap from the editor, passes it to the
 *  wrapping code, and then applies the result to the document. If an edit
 *  is applied, returns an updated DocState object, else returns null.
 *  Takes an optional customColumn to wrap at.
 */ const $fad922d34226e04f$var$doWrap = (editor, customColumn)=>{
    const doc = editor.document;
    try {
        const docState = $fad922d34226e04f$var$getDocState(editor);
        const toCol = (cs)=>!isNaN(customColumn) ? customColumn : $b892585b132b979f$export$e6ea2f8a2f53b195(docState, cs)
        ;
        let settings = $48bcbed0cf086a92$export$7b76d8f1f719850(editor, toCol);
        const selections = editor.selections;
        const edit = $b892585b132b979f$export$6cb9d9886761bf2b($0d70716f788862e9$export$6431655dacb1d83d(doc), settings, selections, $0d70716f788862e9$export$ee19c5e3e690f01a(doc));
        return $0d70716f788862e9$export$dc51556a055f3c36(editor, edit).then(null, $0d70716f788862e9$export$7cc2a9afec49ab22);
    } catch (err) {
        $0d70716f788862e9$export$7cc2a9afec49ab22(err);
    }
};


