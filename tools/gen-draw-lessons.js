const fs=require('fs'); const src=fs.readFileSync('/home/claude/rangoli/index.html','utf8').split('\n');
const a=src.findIndex(l=>l.startsWith('const C = (x,y,r)')); const b=src.findIndex(l=>l.startsWith('// lessons come in four shelves'));
const helpers=src.filter(l=>/^const (hexRgb|rgbHex|P) =|^function (shade|rot)\(/.test(l)).join('\n');
let code=helpers+'\n'+src.slice(a,b).join('\n')+'\nObject.values(LESSONS).forEach(l=>{l.cat="indian"}); LESSONS.ambi.name="🌀 Paisley (Ambi)"; module.exports={ALL:{...MORE_LESSONS,...LESSONS}};';
fs.writeFileSync('lib2.js',code); const {ALL}=require('./lib2.js'); const HI=JSON.parse(fs.readFileSync('/home/claude/kids-app/tools/hi-draw.json','utf8'));
const out={}; for (const [k,l] of Object.entries(ALL)){ const h=HI[k]; if(!h) throw 'no hi '+k; if (h[1].length!==l.steps.length) throw 'count '+k+' '+h[1].length+' vs '+l.steps.length;
 const [e,...rest]=l.name.split(' '); out[k]={e,name:{en:rest.join(' '),hi:h[0]},cat:l.cat,order:l.order,halo:l.halo,steps:l.steps.map((s,i)=>({t:{en:s.t,hi:h[1][i]},d:s.d,c:s.c,f:!!s.f}))}; }
fs.writeFileSync('/home/claude/kids-app/www/js/draw-lessons.js','/* Khel Khel Mein – "Learn to draw" lessons (shared with Rangoli Studio). Paths live in a 400 x 400 box.\n   Generated from rangoli/index.html + tools/hi-draw.json by tools/gen-draw-lessons.js – edit those, not this file. */\nK.DRAW_LESSONS = '+JSON.stringify(out)+';\n');
console.log(Object.keys(out).length, fs.statSync('/home/claude/kids-app/www/js/draw-lessons.js').size);
