import { OPPreset } from "./preset";
import { Potential } from "./potential";

export class Weapon {
  id: number;
  type: string;
  category: string;
  index: number;
  rank: number;
  name: string;
  atk: number;
  atk40: number;
  equipLv: number;

  potentialId?: number;
  presetId?: number;

  potential?: Potential;
  preset?: OPPreset;

  static Instances: Weapon[] = []
  // @ts-ignore
  static IdMap: Map<number, Weapon> = new Map<number, Weapon>();

  constructor(d) {
    const {
      id,
      type,
      category,
      index,
      rank,
      name,
      atk,
      atk40,
      equipLv,
      potential,
      potentialId,
    } = d;
    this.id = parseInt(id, 10);
    this.type = type;
    this.category = category;
    this.index = parseInt(index, 10);
    this.rank = parseInt(rank, 10);
    this.name = name;
    this.atk = parseInt(atk, 10);
    this.atk40 = parseInt(atk40, 10);
    this.equipLv = parseInt(equipLv, 10);
    this.potentialId = parseInt(potentialId, 10);
    this.updatePotential();
    this.updatePreset();
    Weapon.SetById(this.id, this);
  }

  updatePotential() {
    const p = Potential.GetById(`${this.potentialId}`);
    this.potential = p;
  }

  updatePreset() {
    const p = OPPreset.GetById(`${this.presetId}`);
    this.preset = p;
  }

  static GetById(id: string|number) {
    return Weapon.IdMap.get(id)
  }

  static SetById(id: number|string, w: Weapon) {
    Weapon.IdMap.set(`${id}`, w)
  }

  static ImportTsv() {
    const separator = '\t';
    const delimiter = '\n';

    const lines = TSV.split(delimiter);
    const weaponList = [];
    for (let i = 0; i < lines.length; i++) {
      let l = lines[i];
      const values = l.split(separator)
      const args = {
        id: values[0],
        type: values[1],
        category: values[2],
        index: values[3],
        rank: values[4],
        name: values[5],
        atk: values[6],
        atk40: values[7],
        equipLv: values[8],
        potential: values[9],
        potentialId: values[10]
      }
      const w = new Weapon(args)
      weaponList.push(w);
    }

    Weapon.Instances = weaponList;
    return weaponList
  }

  static GetData() {
    OPPreset.ImportTsv();
    Potential.ImportTsv();
    const weaponList = Weapon.ImportTsv()
    console.log("weapon.GetData", weaponList);
    return weaponList
  }
}

// https://docs.google.com/spreadsheets/d/1LvSWS5VaPq62Lo07ropSfblyEYHcDl_oFDN0jZJt8ok/edit#gid=0&range=A1
const TSV =
// w_id,type,category,index,rank,name,atk,atk40,equip_lv,potential,p_id
  `1\tmelee\tsw\t1\t4\tストラーガソード\t243\t283\t15\t猛滅の型\t2
2\tmelee\tsw\t2\t4\tエヴォルコートソード\t242\t282\t15\t理放の型\t1
3\tmelee\tsw\t3\t4\tキャトリアソード\t242\t282\t14\t渾身の型\t3
4\tmelee\tsw\t4\t4\tリサージュソード\t240\t280\t11\t瞬撃の型\t6
5\tmelee\tsw\t5\t3\tグリッセンソード\t225\t272\t13\t勇猛の型\t7
6\tmelee\tsw\t6\t3\tゴルドプリムソード\t223\t270\t10\t節制の型\t11
7\tmelee\tsw\t7\t3\tテルセウスソード\t223\t270\t8\t守勢の陣\t9
8\tmelee\tsw\t8\t2\tシルヴァプリムソード\t195\t264\t5\t節制の型\t11
9\tmelee\tsw\t9\t2\tツヴィアソード\t195\t264\t4\t不屈の型\t10
10\tmelee\tsw\t10\t1\tプリムソード\t177\t259\t1\t節制の型\t11
11\tmelee\twl\t1\t4\tストラーガワイヤー\t243\t283\t15\t猛滅の型\t2
12\tmelee\twl\t2\t4\tエヴォルコートワイヤー\t242\t282\t15\t理放の型\t1
13\tmelee\twl\t3\t4\tフォーシスワイヤー\t242\t282\t14\t牙城の型\t5
14\tmelee\twl\t4\t4\tリサージュワイヤー\t240\t280\t11\t瞬撃の型\t6
15\tmelee\twl\t5\t3\tフロステルワイヤー\t225\t272\t13\t勇猛の型\t7
16\tmelee\twl\t6\t3\tグリッセンワイヤー\t225\t272\t13\t勇猛の型\t7
17\tmelee\twl\t7\t3\tテルセウスワイヤー\t223\t270\t8\t守勢の陣\t9
18\tmelee\twl\t8\t2\tツヴィアワイヤー\t195\t264\t4\t不屈の型\t10
19\tmelee\twl\t9\t1\tプリムワイヤー\t177\t259\t1\t節制の型\t11
20\tmelee\tpa\t1\t4\tストラーガスピア\t243\t283\t15\t猛滅の型\t2
21\tmelee\tpa\t2\t4\tエヴォルコートスピア\t242\t282\t15\t理放の型\t1
22\tmelee\tpa\t3\t4\tヴィアルトスピア\t242\t282\t14\t気功の型\t4
23\tmelee\tpa\t4\t4\tリサージュスピア\t240\t280\t11\t瞬撃の型\t6
24\tmelee\tpa\t5\t3\tテルセウススピア\t223\t270\t8\t守勢の陣\t9
25\tmelee\tpa\t6\t2\tツヴィアスピア\t195\t264\t4\t不屈の型\t10
26\tmelee\tpa\t7\t1\tプリムスピア\t177\t259\t1\t節制の型\t11
27\tmelee\ttd\t1\t4\tストラーガダガー\t243\t283\t15\t猛滅の型\t2
28\tmelee\ttd\t2\t4\tエヴォルコートダガー\t242\t282\t15\t理放の型\t1
29\tmelee\ttd\t3\t4\tフォーシスダガー\t242\t282\t14\t牙城の型\t5
30\tmelee\ttd\t4\t4\tリサージュダガー\t240\t280\t11\t瞬撃の型\t6
31\tmelee\ttd\t5\t3\tトロワーデダガー\t223\t270\t8\t攻勢の陣\t8
32\tmelee\ttd\t6\t2\tツヴィアダガー\t195\t264\t4\t不屈の型\t10
33\tmelee\ttd\t7\t1\tプリムダガー\t177\t259\t1\t節制の型\t11
34\tmelee\tds\t1\t4\tストラーガセイバー\t243\t283\t15\t猛滅の型\t2
35\tmelee\tds\t2\t4\tエヴォルコートセイバー\t242\t282\t15\t理放の型\t1
36\tmelee\tds\t3\t4\tヴィアルトセイバー\t242\t282\t14\t気功の型\t4
37\tmelee\tds\t4\t4\tリサージュセイバー\t240\t280\t11\t瞬撃の型\t6
38\tmelee\tds\t5\t3\tフロステルセイバー\t225\t272\t13\t勇猛の型\t7
39\tmelee\tds\t6\t3\tグリッセンセイバー\t225\t272\t13\t勇猛の型\t7
40\tmelee\tds\t7\t3\tトロワーデセイバー\t223\t270\t8\t攻勢の陣\t8
41\tmelee\tds\t8\t2\tツヴィアセイバー\t195\t264\t4\t不屈の型\t10
42\tmelee\tds\t9\t1\tプリムセイバー\t177\t259\t1\t節制の型\t11
43\tmelee\tnk\t1\t4\tストラーガナックル\t243\t283\t15\t猛滅の型\t2
44\tmelee\tnk\t2\t4\tエヴォルコートナックル\t242\t282\t15\t理放の型\t1
45\tmelee\tnk\t3\t4\tキャトリアナックル\t242\t282\t14\t渾身の型\t3
46\tmelee\tnk\t4\t4\tリサージュナックル\t240\t280\t11\t瞬撃の型\t6
47\tmelee\tnk\t5\t3\tグリッセンナックル\t225\t272\t13\t勇猛の型\t7
48\tmelee\tnk\t6\t3\tトロワーデナックル\t223\t270\t8\t攻勢の陣\t8
49\tmelee\tnk\t7\t2\tツヴィアナックル\t195\t264\t4\t不屈の型\t10
50\tmelee\tnk\t8\t1\tプリムナックル\t177\t259\t1\t節制の型\t11
51\tmelee\tkt\t1\t4\tストラーガカタナ\t243\t283\t15\t猛滅の型\t2
52\tmelee\tkt\t2\t4\tエヴォルコートカタナ\t242\t282\t15\t理放の型\t1
53\tmelee\tkt\t3\t4\tフォーシスカタナ\t242\t282\t14\t牙城の型\t5
54\tmelee\tkt\t4\t4\tリサージュカタナ\t240\t280\t11\t瞬撃の型\t6
55\tmelee\tkt\t5\t3\tフロステルカタナ\t225\t272\t13\t勇猛の型\t7
56\tmelee\tkt\t6\t3\tトロワーデカタナ\t223\t270\t8\t攻勢の陣\t8
57\tmelee\tkt\t7\t2\tツヴィアカタナ\t195\t264\t4\t不屈の型\t10
58\tmelee\tkt\t8\t1\tプリムカタナ\t177\t259\t1\t節制の型\t11
59\tshoot\tar\t1\t4\tストラーガライフル\t243\t283\t15\t猛滅の型\t2
60\tshoot\tar\t2\t4\tエヴォルコートライフル\t242\t282\t15\t理放の型\t1
61\tshoot\tar\t3\t4\tフォーシスライフル\t242\t282\t14\t牙城の型\t5
62\tshoot\tar\t4\t4\tリサージュライフル\t240\t280\t11\t瞬撃の型\t6
63\tshoot\tar\t5\t3\tテルセウスライフル\t223\t270\t8\t守勢の陣\t9
64\tshoot\tar\t6\t2\tツヴィアライフル\t195\t264\t4\t不屈の型\t10
65\tshoot\tar\t7\t1\tプリムライフル\t177\t259\t1\t節制の型\t11
66\tshoot\tla\t1\t4\tストラーガランチャー\t243\t283\t15\t猛滅の型\t2
67\tshoot\tla\t2\t4\tエヴォルコートランチャー\t242\t282\t15\t理放の型\t1
68\tshoot\tla\t3\t4\tヴィアルトランチャー\t242\t282\t14\t気功の型\t4
69\tshoot\tla\t4\t4\tリサージュランチャー\t240\t280\t11\t瞬撃の型\t6
70\tshoot\tla\t5\t3\tフロステルランチャー\t225\t272\t13\t勇猛の型\t7
71\tshoot\tla\t6\t3\tグリッセンランチャー\t225\t272\t13\t勇猛の型\t7
72\tshoot\tla\t7\t3\tテルセウスランチャー\t223\t270\t8\t守勢の陣\t9
73\tshoot\tla\t8\t2\tツヴィアランチャー\t195\t264\t4\t不屈の型\t10
74\tshoot\tla\t9\t1\tプリムランチャー\t177\t259\t1\t節制の型\t11
75\tshoot\ttm\t1\t4\tストラーガマシンガン\t243\t283\t15\t猛滅の型\t2
76\tshoot\ttm\t2\t4\tエヴォルコートマシンガン\t242\t282\t15\t理放の型\t1
77\tshoot\ttm\t3\t4\tキャトリアマシンガン\t242\t282\t14\t渾身の型\t3
78\tshoot\ttm\t4\t4\tリサージュマシンガン\t240\t280\t11\t瞬撃の型\t6
79\tshoot\ttm\t5\t3\tフロステルマシンガン\t225\t272\t13\t勇猛の型\t7
80\tshoot\ttm\t6\t3\tグリッセンマシンガン\t225\t272\t13\t勇猛の型\t7
81\tshoot\ttm\t7\t3\tテルセウスマシンガン\t223\t270\t8\t守勢の陣\t9
82\tshoot\ttm\t8\t2\tツヴィアマシンガン\t195\t264\t4\t不屈の型\t10
83\tshoot\ttm\t9\t1\tプリムマシンガン\t177\t259\t1\t節制の型\t11
84\tshoot\tbw\t1\t4\tストラーガボウ\t243\t283\t15\t猛滅の型\t2
85\tshoot\tbw\t2\t4\tエヴォルコートボウ\t242\t282\t15\t理放の型\t1
86\tshoot\tbw\t3\t4\tヴィアルトボウ\t242\t282\t14\t気功の型\t4
87\tshoot\tbw\t4\t4\tリサージュボウ\t240\t280\t11\t瞬撃の型\t6
88\tshoot\tbw\t5\t3\tテルセウスボウ\t223\t270\t8\t守勢の陣\t9
89\tshoot\tbw\t6\t2\tツヴィアボウ\t195\t264\t4\t不屈の型\t10
90\tshoot\tbw\t7\t1\tプリムボウ\t177\t259\t1\t節制の型\t11
91\ttechnic\trd\t1\t4\tストラーガロッド\t243\t283\t15\t猛滅の型\t2
92\ttechnic\trd\t2\t4\tエヴォルコートロッド\t242\t282\t15\t理放の型\t1
93\ttechnic\trd\t3\t4\tフォーシスロッド\t242\t282\t14\t牙城の型\t5
94\ttechnic\trd\t4\t4\tリサージュロッド\t240\t280\t11\t瞬撃の型\t6
95\ttechnic\trd\t5\t3\tフロステルロッド\t225\t272\t13\t勇猛の型\t7
96\ttechnic\trd\t6\t3\tトロワーデロッド\t223\t270\t8\t攻勢の陣\t8
97\ttechnic\trd\t7\t2\tツヴィアロッド\t195\t264\t4\t不屈の型\t10
98\ttechnic\trd\t8\t1\tプリムロッド\t177\t259\t1\t節制の型\t11
99\ttechnic\tta\t1\t4\tストラーガタリス\t243\t283\t15\t猛滅の型\t2
100\ttechnic\tta\t2\t4\tエヴォルコートタリス\t242\t282\t15\t理放の型\t1
101\ttechnic\tta\t3\t4\tヴィアルトタリス\t242\t282\t14\t気功の型\t4
102\ttechnic\tta\t4\t4\tリサージュタリス\t240\t280\t11\t瞬撃の型\t6
103\ttechnic\tta\t5\t3\tグリッセンタリス\t225\t272\t13\t勇猛の型\t7
104\ttechnic\tta\t6\t3\tトロワーデタリス\t223\t270\t8\t攻勢の陣\t8
105\ttechnic\tta\t7\t2\tツヴィアタリス\t195\t264\t4\t不屈の型\t10
106\ttechnic\tta\t8\t1\tプリムタリス\t177\t259\t1\t節制の型\t11
107\ttechnic\twd\t1\t4\tストラーガウォンド\t243\t283\t15\t猛滅の型\t2
108\ttechnic\twd\t2\t4\tエヴォルコートウォンド\t242\t282\t15\t理放の型\t1
109\ttechnic\twd\t3\t4\tキャトリアウォンド\t242\t282\t14\t渾身の型\t3
110\ttechnic\twd\t4\t4\tリサージュウォンド\t240\t280\t11\t瞬撃の型\t6
111\ttechnic\twd\t5\t3\tフロステルウォンド\t225\t272\t13\t勇猛の型\t7
112\ttechnic\twd\t6\t3\tグリッセンウォンド\t225\t272\t13\t勇猛の型\t7
113\ttechnic\twd\t7\t3\tトロワーデウォンド\t223\t270\t8\t攻勢の陣\t8
114\ttechnic\twd\t8\t2\tツヴィアウォンド\t195\t264\t4\t不屈の型\t10
115\ttechnic\twd\t9\t1\tプリムウォンド\t177\t259\t1\t節制の型\t11`