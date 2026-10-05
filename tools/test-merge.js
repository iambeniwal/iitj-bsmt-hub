// Tests for assets/merge.js, the guest/account/database merge.   node tools/test-merge.js
const fs=require("fs"),vm=require("vm");const ctx={};ctx.window=ctx;vm.createContext(ctx);
vm.runInContext(fs.readFileSync(require("path").join(__dirname, "..", "assets", "merge.js"),"utf8"),ctx);
const M=ctx.HUB.cloudMerge; let pass=0,fail=0; const ok=(n,c,d="")=>{c?pass++:fail++;console.log((c?"PASS ":"FAIL ")+n+(d?"  — "+d:""));};
// remote: 2 attempts on q1, card t1 reviewed at 100, flag q9, mock at 500
const remote={att:[["foc-q0001",10,0,"practice"],["foc-q0001",20,1,"practice"]],cards:{"foc-t0001":{due:1,ivl:1,ef:2.5,reps:1,lapses:0,upd:100}},flags:["foc-q0009"],mocks:[{at:500,c:"x",a:"q1"}]};
// local account cache: has the remote q1@20 (already synced) + a new q1@30 not yet pushed; card t1 older (upd 50)
const local={att:{"foc-q0001":[[20,1,"practice"],[30,1,"practice"]]},cards:{"foc-t0001":{due:2,ivl:2,ef:2.5,reps:2,lapses:0,upd:50}},flags:{},mocks:[{at:500,c:"x",a:"q1"}]};
// guest: q2 x2, newer card t1 (upd 200), new card t2, flag q3, mock at 700
const guest={att:{"foc-q0002":[[40,0,"mock"],[41,1,"practice"]]},cards:{"foc-t0001":{due:3,ivl:3,ef:2.6,reps:3,lapses:0,upd:200},"foc-t0002":{due:3,ivl:1,ef:2.5,reps:1,lapses:0,upd:60}},flags:{"foc-q0003":1},mocks:[{at:700,c:"x",a:"q1"}]};
const {state,ops,added}=M(remote,local,guest);
ok("q1 keeps 3 attempts, no duplicates", state.att["foc-q0001"].length===3, JSON.stringify(state.att["foc-q0001"]));
ok("q1 attempts in time order", state.att["foc-q0001"].map(a=>a[0]).join()==="10,20,30");
ok("guest attempts carried over", state.att["foc-q0002"].length===2);
ok("only unsynced attempts queued", ops.filter(o=>o.t==="att").map(o=>o.qid+"@"+o.at).join()==="foc-q0001@30,foc-q0002@40,foc-q0002@41");
ok("newest card review wins", state.cards["foc-t0001"].upd===200 && state.cards["foc-t0001"].reps===3);
ok("older local card not queued", !ops.some(o=>o.t==="card"&&o.c.upd===50));
ok("new guest card added + queued", state.cards["foc-t0002"] && ops.some(o=>o.t==="card"&&o.id==="foc-t0002"));
ok("flags union", state.flags["foc-q0009"]&&state.flags["foc-q0003"]&&ops.filter(o=>o.t==="flag").length===1);
ok("mocks union, no duplicate", state.mocks.length===2 && ops.filter(o=>o.t==="mock").length===1);
ok("guest counts", added.att===2&&added.cards===1&&added.mocks===1, JSON.stringify(added));
// cap at 12 per question
const many={att:{"foc-q0005":Array.from({length:20},(_,i)=>[i,1,"practice"])},cards:{},flags:{},mocks:[]};
const r2=M({att:[],cards:{},flags:[],mocks:[]},many,null);
ok("local copy capped at 12 per question", r2.state.att["foc-q0005"].length===12 && r2.state.att["foc-q0005"][0][0]===8);
ok("but all 20 are queued for the server", r2.ops.length===20);
// empty everything
const r3=M({att:[],cards:{},flags:[],mocks:[]},{att:{},cards:{},flags:{},mocks:[]},null);
ok("empty merge is empty", r3.ops.length===0 && Object.keys(r3.state.att).length===0);
// idempotent: merging the result again with the remote it would produce queues nothing
const pushedRemote={att:Object.entries(state.att).flatMap(([q,l])=>l.map(([ts,o,m])=>[q,ts,o,m])),cards:state.cards,flags:Object.keys(state.flags),mocks:state.mocks};
const r4=M(pushedRemote,state,null);
ok("second merge after sync queues nothing", r4.ops.length===0, r4.ops.length+" ops");
console.log(`\n${pass}/${pass+fail} passed`); process.exit(fail?1:0);
