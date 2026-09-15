// 法术
export type SpellType = "pyromancy" | "sorcery" | "miracle";
export interface Spell {
  id: number; // 0
  name: string; // 1
  faith_req: number; // 2
  int_req: number; // 3
  slots: number; // 4
  spell_type: SpellType; // 5
}
