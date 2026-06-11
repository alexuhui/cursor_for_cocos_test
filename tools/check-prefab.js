const fs = require('fs');
const path = process.argv[2];
const data = JSON.parse(fs.readFileSync(path, 'utf8'));
data.forEach((o, i) => {
    if (!o) return;
    if (o._name) console.log(i, o._name, o.__type__ || '');
    else if (o.__type__) console.log(i, '[comp]', o.__type__, 'node', o.node && o.node.__id__);
});
const max = data.length - 1;
function bad(ref, ctx, i) {
    if (!ref || ref.__id__ === undefined) return;
    if (ref.__id__ < 0 || ref.__id__ > max || !data[ref.__id__]) {
        console.log('BAD', i, ctx, ref.__id__);
    }
}
data.forEach((o, i) => {
    if (!o) return;
    bad(o._parent, 'parent', i);
    (o._children || []).forEach((c, j) => bad(c, 'child' + j, i));
    (o._components || []).forEach((c, j) => bad(c, 'comp' + j, i));
    if (o.node) bad(o.node, 'node', i);
    if (o.content) bad(o.content, 'content', i);
    const nc = o['_N$content'];
    if (nc) bad(nc, 'Ncontent', i);
});
