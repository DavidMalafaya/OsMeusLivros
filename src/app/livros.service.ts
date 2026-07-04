import { Injectable } from "@angular/core";

export interface Livro {
  id: number; titulo: string; autor: string; genero: string;
  anoPublicacao: number; sinopse: string; opiniao: string;
  citacao: string; classificacao: number; lido: boolean; emoji: string;
}

@Injectable({ providedIn: "root" })
export class LivrosService {
  private livros: Livro[] = [
    { id:1, titulo:"O Nome da Rosa", autor:"Umberto Eco", genero:"Policial", anoPublicacao:1980,
      sinopse:"Um monge franciscano investiga mortes misteriosas num mosteiro medieval. Combina filosofia, teologia e suspense.",
      opiniao:"Leitura densa mas fascinante. O final surpreendeu-me.",
      citacao:"Os livros não foram feitos para que acreditemos no que dizem, mas para que os examinemos.",
      classificacao:5, lido:true, emoji:"🌹" },
    { id:2, titulo:"Cem Anos de Solidão", autor:"Gabriel García Márquez", genero:"Romance", anoPublicacao:1967,
      sinopse:"A saga da família Buendía ao longo de sete gerações em Macondo. Romance fundador do realismo mágico.",
      opiniao:"Difícil de entrar no início, mas depois impossível parar.",
      citacao:"Era tão bela que até a sua memória era esquecida pelos homens.",
      classificacao:5, lido:true, emoji:"🦋" },
    { id:3, titulo:"Duna", autor:"Frank Herbert", genero:"Ficção Científica", anoPublicacao:1965,
      sinopse:"No planeta deserto Arrakis, Paul Atreides enfrenta traição, guerra e um destino profético.",
      opiniao:"A construção do mundo é extraordinária. Um épico de ficção científica.",
      citacao:"Tenho de não ter medo. O medo é o assassino da mente.",
      classificacao:5, lido:true, emoji:"🏜️" },
    { id:4, titulo:"1984", autor:"George Orwell", genero:"Ficção Científica", anoPublicacao:1949,
      sinopse:"Numa sociedade totalitária vigiada pelo Grande Irmão, Winston Smith arrisca tudo ao apaixonar-se por Júlia.",
      opiniao:"Perturbador e profético. Cada vez que vejo notícias sobre vigilância, penso neste livro.",
      citacao:"A guerra é paz. A liberdade é escravidão. A ignorância é poder.",
      classificacao:5, lido:true, emoji:"👁️" },
    { id:5, titulo:"O Senhor dos Anéis", autor:"J.R.R. Tolkien", genero:"Fantasia", anoPublicacao:1954,
      sinopse:"Frodo parte numa jornada para destruir o Um Anel, acompanhado por heróis da Terra-Média.",
      opiniao:"A fundação de toda a fantasia moderna. O worldbuilding de Tolkien é inigualável.",
      citacao:"Não é o poder que revela o carácter de um homem, mas as suas escolhas.",
      classificacao:5, lido:true, emoji:"💍" },
    { id:6, titulo:"Crime e Castigo", autor:"Fiódor Dostoiévski", genero:"Romance", anoPublicacao:1866,
      sinopse:"Raskólnikov comete um crime e debate-se com a culpa e as consequências psicológicas.",
      opiniao:"Ainda por ler. Antecipo muito a psicologia dos personagens de Dostoiévski.",
      citacao:"", classificacao:0, lido:false, emoji:"🪓" },
    { id:7, titulo:"O Alquimista", autor:"Paulo Coelho", genero:"Autoajuda", anoPublicacao:1988,
      sinopse:"Santiago segue os seus sonhos e parte em busca de um tesouro no Egito.",
      opiniao:"Ainda por ler. Ouço falar muito bem desta obra.",
      citacao:"", classificacao:0, lido:false, emoji:"✨" },
    { id:8, titulo:"O Apanhador no Centeio", autor:"J.D. Salinger", genero:"Romance", anoPublicacao:1951,
      sinopse:"Holden Caulfield vagueia por Nova Iorque numa busca pela autenticidade.",
      opiniao:"A voz do narrador é única. A crítica à hipocrisia da sociedade ainda ressoa hoje.",
      citacao:"O que me mata é um livro que, quando acabas, desejarias que o autor fosse teu amigo.",
      classificacao:4, lido:true, emoji:"🌾" },
  ];

  getTodos(): Livro[]                   { return this.livros; }
  getLidos(): Livro[]                   { return this.livros.filter(l => l.lido); }
  getPorId(id: number): Livro|undefined { return this.livros.find(l => l.id === id); }
  getGeneros(): string[]                { return [...new Set(this.livros.map(l => l.genero))].sort(); }
  getPorGenero(g: string): Livro[]      { return this.livros.filter(l => l.genero === g); }
  getLivrosComCitacao(): Livro[]        { return this.livros.filter(l => l.citacao.trim() !== ""); }
  contarPorGenero(g: string): number    { return this.getPorGenero(g).length; }
  toggleLido(id: number): void          { const l = this.getPorId(id); if (l) l.lido = !l.lido; }
  emojiGenero(g: string): string {
    const m: {[k:string]:string} = { "Romance":"💕","Policial":"🔍","Ficção Científica":"🚀","Fantasia":"🧙","Autoajuda":"💡","História":"📜","Aventura":"🗺️" };
    return m[g] || "📚";
  }
}
