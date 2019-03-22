type typeEntry<T,K extends keyof T >=K extends Object?{key:K,type:T[K]}:never;
type typPick<T,K>=Extract<typeEntry<T,keyof T>,{type:K}>["key"]

var o3:typPick<{a:true,b:string},boolean>