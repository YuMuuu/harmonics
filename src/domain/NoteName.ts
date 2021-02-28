//note: C# or Bb を表せる適切な名前を考える。現状だとわけわかめ
//note: 音名同士の関係（何度かなど）をどう表すか考える

/*
音名を表す
*/
interface C {}

interface Cs {} //C# Db

interface D {}

interface Ds {}

interface E {}

interface F {}

interface Fs {}

interface G {}

interface Gs {}

interface A {}

interface As {}

interface B {}

/*
音名の抽象を表す
*/
type NoteName = C | Cs | D | Ds | E | F | Fs | G | Gs | A | As | B

export {NoteName, C, Cs, D, Ds, E, F, Fs, G, Gs, A, As, B }



