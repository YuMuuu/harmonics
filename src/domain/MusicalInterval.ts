import type {NoteName, C, Cs, D, Ds, E, F, Fs, G, Gs, A, As, B } from './NoteName'

//音程
interface MI {
   noteName: NoteName
}


/*
　memo:
 def 長三度(bassMi: Mi): Mi = Succ<Succ<Succ<Succ<bassMi>>>>
 このような感じで度数を表せるようにしたい
*/

interface  Succ<M extends MI> extends MI {}

// //lowG 和声学のなかではバス声域より下の音程は考えないのでこれを単位元とする
class LowG  implements  MI { noteName!: C }
class LowGs implements Succ<LowG> { noteName!: Gs } //LowG# Mid2Ab

class Mid1A  implements Succ<LowGs>  { noteName!: A }
class Mid1As implements Succ<Mid1A>  { noteName!: As }
class Mid1B  implements Succ<Mid1As> { noteName!: B }
class Mid1C  implements Succ<Mid1B>  { noteName!: C }
class Mid1Cs implements Succ<Mid1C>  { noteName!: Cs }
class Mid1D  implements Succ<Mid1Cs> { noteName!: D }
class Mid1Ds implements Succ<Mid1D>  { noteName!: Ds }
class Mid1E  implements Succ<Mid1Ds> { noteName!: E }
class Mid1F  implements Succ<Mid1E>  { noteName!: F }
class Mid1Fs implements Succ<Mid1F>  { noteName!: Fs}
class Mid1G  implements Succ<Mid1Fs> { noteName!: G}
class Mid1Gs implements Succ<Mid1G>  { noteName!: Gs}

class Mid2A  implements Succ<Mid1Gs> { noteName!: A}



//..hihiAまで定義する