export class Potential {
  id: number;
  name: string;
  description: string;
  static Instances: Potential[] = []
  // @ts-ignore
  static IdMap: Map<number, Potential> = new Map<number, Potential>();

  constructor(d) {
    const {
      id,
      name,
      description,
    } = d;
    this.id = parseInt(id, 10);
    this.name = name;
    this.description = description;
    Potential.SetById(this.id, this);
  }

  static GetById(id: string) {
    return Potential.IdMap.get(id)
  }

  static SetById(id: number|string, p: Potential) {
    Potential.IdMap.set(`${id}`, p)
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
        name: values[0],
        id: values[1],
        description: values[2],
      }
      const p = new Potential(args)
      presetList.push(p);
      Potential.IdMap.set(p.id, p);
    }

    Potential.Instances = presetList;
    return presetList
  }

  static GetData() {
    return Potential.ImportTsv()
  }
}

// https://docs.google.com/spreadsheets/d/1LvSWS5VaPq62Lo07ropSfblyEYHcDl_oFDN0jZJt8ok/edit#gid=0&range=A1
const TSV =
  // `name,id,description
  `理放の型\t1\t威力+(20%/22%/25%/26%)／攻撃時にフォトンブラストゲージ増加+20%
猛滅の型\t2\t威力+(21%/23%/26%/27%)／ダメージ耐性-(10%/10%/10%/8%)
渾身の型\t3\t威力+(15%/17%/20%/21%)／HP残量が多いほど威力上昇最大+5.0%
気功の型\t4\t威力+(18%/20%/23%/24%)／攻撃時PP回復量+(10%/10%/10%/15%) PP自然回復量+(10%/10%/10%/15%)
牙城の型\t5\t威力+(18%/20%/23%/24%)／HP最大時にダメージ耐性+(40%/40%/40%/50%)のバリアが発生
瞬撃の型\t6\t威力+(16%/18%/21%/21%)／ステップによる回避成功時30秒間クリティカル発生率+(15%/15%/15%/18%)
勇猛の型\t7\t威力+(8%/10%/13%/14%)／エネミーを攻撃してから10秒後に再度攻撃をすると武器属性に対応した属性ダウンの追加攻撃が発生 リキャスト時間20秒
攻勢の陣\t8\t威力+(17%/19%/22%/22%)／攻撃力に応じてクリティカル発生率上昇 攻撃力2000で最大+(15%/15%/15%/18%)
守勢の陣\t9\t威力+(17%/19%/22%/22%)／防御力に応じてクリティカル発生率上昇 防御力1000で最大+(15%/15%/15%/18%)
不屈の型\t10\t威力+(18%/20%/23%/24%) 全ダウン耐性+(10%/10%/10%/20%)
節制の型\t11\t威力+(18%/20%/23%/24%)／レスタサイン使用時に20%の確率で消費しない`