export class OPPreset {
  id: number;
  type: string;
  category: string;
  index: number;
  tier: number;
  status: number;
  name: string;
  description: string;
  Lv1: number;
  Lv2: number;
  Lv3: number;
  Lv4: number;
  Lv5: number;

  static Instances: OPPreset[] = []
  // @ts-ignore
  static IdMap: Map<number, OPPreset> = new Map<number, OPPreset>();

  constructor(d) {
    const {
      id,
      type,
      category,
      index,
      tier,
      status,
      name,
      description,
      Lv1,
      Lv2,
      Lv3,
      Lv4,
      Lv5
    } = d;
    this.id = parseInt(id, 10);
    this.type = type;
    this.category = category;
    this.index = parseInt(index, 10);
    this.tier = parseInt(tier, 10);
    this.status = parseFloat(status);
    this.name = name;
    this.description = description;
    this.Lv1 = parseFloat(Lv1);
    this.Lv2 = parseFloat(Lv2);
    this.Lv3 = parseFloat(Lv3);
    this.Lv4 = parseFloat(Lv4);
    this.Lv5 = parseFloat(Lv5);
    OPPreset.SetById(this.id, this);
  }

  static GetById(id: string) {
    return OPPreset.IdMap.get(id)
  }

  static SetById(id: number|string, p: OPPreset) {
    OPPreset.IdMap.set(`${id}`, p)
  }

  static ImportTsv() {
    const separator = '\t';
    const delimiter = '\n';
    const lines = TSV.split(delimiter);

    const presetList = [];
    for (let i = 0; i < lines.length; i++) {
      let l = lines[i];
      const values = l.split(separator)
      const args = {
        id: values[0],
        type: values[1],
        category: values[2],
        index: values[3],
        tier: values[4],
        status: values[5],
        name: values[6],
        description: values[7],
        Lv1: values[8],
        Lv2: values[9],
        Lv3: values[10],
        Lv4: values[10],
        Lv5: values[10],
      }
      const p = new OPPreset(args)
      presetList.push(p);
    }

    OPPreset.Instances = presetList;
    return presetList
  }

  static GetData() {
    return OPPreset.ImportTsv()
  }
}

// https://docs.google.com/spreadsheets/d/1LvSWS5VaPq62Lo07ropSfblyEYHcDl_oFDN0jZJt8ok/edit#gid=0&range=A1
const TSV =
// `preset_id,type,category,index,tier,status,name,description,Lv.1,Lv.2,Lv.3,Lv.4,Lv.5
  `preset_id\ttype\tcategory\tindex\ttier\tstatus\tname\tdescription\tLv.1\tLv.2\tLv.3\tLv.4\tLv.5
1\tweapon\tweapon\t1\t1\t2.0\tフィクサ・アタック\t威力+\t2.0\t3.0\t4.0\t4.5\t5.0
1\tweapon\tweapon\t1\t2\t3.0\tフィクサ・アタック\t威力+\t2.0\t3.0\t4.0\t4.5\t5.0
1\tweapon\tweapon\t1\t3\t4.0\tフィクサ・アタック\t威力+\t2.0\t3.0\t4.0\t4.5\t5.0
1\tweapon\tweapon\t1\t4\t4.5\tフィクサ・アタック\t威力+\t2.0\t3.0\t4.0\t4.5\t5.0
1\tweapon\tweapon\t1\t5\t5.0\tフィクサ・アタック\t威力+\t2.0\t3.0\t4.0\t4.5\t5.0
2\tweapon\tweapon\t2\t1\t6.0\tフィクサ・テルミナ\tクリティカル時の威力+\t6.0\t9.0\t12.0\t14.0\t15.0
2\tweapon\tweapon\t2\t2\t9.0\tフィクサ・テルミナ\tクリティカル時の威力+\t6.0\t9.0\t12.0\t14.0\t15.0
2\tweapon\tweapon\t2\t3\t12.0\tフィクサ・テルミナ\tクリティカル時の威力+\t6.0\t9.0\t12.0\t14.0\t15.0
2\tweapon\tweapon\t2\t4\t14.0\tフィクサ・テルミナ\tクリティカル時の威力+\t6.0\t9.0\t12.0\t14.0\t15.0
2\tweapon\tweapon\t2\t5\t15.0\tフィクサ・テルミナ\tクリティカル時の威力+\t6.0\t9.0\t12.0\t14.0\t15.0
3\tweapon\tweapon\t3\t1\t5.0\tフィクサ・フェタル\tクリティカル発生率+\t5.0\t8.0\t10.0\t12.0\t13.0
3\tweapon\tweapon\t3\t2\t8.0\tフィクサ・フェタル\tクリティカル発生率+\t5.0\t8.0\t10.0\t12.0\t13.0
3\tweapon\tweapon\t3\t3\t10.0\tフィクサ・フェタル\tクリティカル発生率+\t5.0\t8.0\t10.0\t12.0\t13.0
3\tweapon\tweapon\t3\t4\t12.0\tフィクサ・フェタル\tクリティカル発生率+\t5.0\t8.0\t10.0\t12.0\t13.0
3\tweapon\tweapon\t3\t5\t13.0\tフィクサ・フェタル\tクリティカル発生率+\t5.0\t8.0\t10.0\t12.0\t13.0
4\tunit\tunit\t1\t1\t2.0\tフィクサ・エンソジア\t攻撃時PP回復+\t2.0\t3.0\t4.0\t4.5\t5.0
4\tunit\tunit\t1\t2\t3.0\tフィクサ・エンソジア\t攻撃時PP回復+\t2.0\t3.0\t4.0\t4.5\t5.0
4\tunit\tunit\t1\t3\t4.0\tフィクサ・エンソジア\t攻撃時PP回復+\t2.0\t3.0\t4.0\t4.5\t5.0
4\tunit\tunit\t1\t4\t4.5\tフィクサ・エンソジア\t攻撃時PP回復+\t2.0\t3.0\t4.0\t4.5\t5.0
4\tunit\tunit\t1\t5\t5.0\tフィクサ・エンソジア\t攻撃時PP回復+\t2.0\t3.0\t4.0\t4.5\t5.0
5\tunit\tunit\t2\t1\t2.0\tフィクサ・ナトゥーラ\tPP自然回復速度+\t2.0\t3.0\t4.0\t4.5\t5.0
5\tunit\tunit\t2\t2\t3.0\tフィクサ・ナトゥーラ\tPP自然回復速度+\t2.0\t3.0\t4.0\t4.5\t5.0
5\tunit\tunit\t2\t3\t4.0\tフィクサ・ナトゥーラ\tPP自然回復速度+\t2.0\t3.0\t4.0\t4.5\t5.0
5\tunit\tunit\t2\t4\t4.5\tフィクサ・ナトゥーラ\tPP自然回復速度+\t2.0\t3.0\t4.0\t4.5\t5.0
5\tunit\tunit\t2\t5\t5.0\tフィクサ・ナトゥーラ\tPP自然回復速度+\t2.0\t3.0\t4.0\t4.5\t5.0
6\tunit\tunit\t3\t1\t1.0\tフィクサ・パフォーマ\tPP消費量軽減+\t1.0\t2.0\t3.0\t3.5\t4.0
6\tunit\tunit\t3\t2\t2.0\tフィクサ・パフォーマ\tPP消費量軽減+\t1.0\t2.0\t3.0\t3.5\t4.0
6\tunit\tunit\t3\t3\t3.0\tフィクサ・パフォーマ\tPP消費量軽減+\t1.0\t2.0\t3.0\t3.5\t4.0
6\tunit\tunit\t3\t4\t3.5\tフィクサ・パフォーマ\tPP消費量軽減+\t1.0\t2.0\t3.0\t3.5\t4.0
6\tunit\tunit\t3\t5\t4.0\tフィクサ・パフォーマ\tPP消費量軽減+\t1.0\t2.0\t3.0\t3.5\t4.0
7\tunit\tunit\t4\t1\t1.0\tフィクサ・ガード\tダメージ耐性+\t1.0\t2.0\t3.0\t3.5\t4.0
7\tunit\tunit\t4\t2\t2.0\tフィクサ・ガード\tダメージ耐性+\t1.0\t2.0\t3.0\t3.5\t4.0
7\tunit\tunit\t4\t3\t3.0\tフィクサ・ガード\tダメージ耐性+\t1.0\t2.0\t3.0\t3.5\t4.0
7\tunit\tunit\t4\t4\t3.5\tフィクサ・ガード\tダメージ耐性+\t1.0\t2.0\t3.0\t3.5\t4.0
7\tunit\tunit\t4\t5\t4.0\tフィクサ・ガード\tダメージ耐性+\t1.0\t2.0\t3.0\t3.5\t4.0`